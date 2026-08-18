<?php
// booking.php
// This proxy script bridges the static HTML frontend and the Pluscode booking system.
// It handles CSRF tokens and cookies required by the Pluscode system securely.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Or restrict to your domain
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit();
}

// 1. Get JSON data from frontend
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit();
}

$targetUrl = 'https://maabhagwatidentalhims.pluscode.in/public/booking';

// 2. Fetch the booking page to extract CSRF token and cookies
$ch = curl_init($targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)');
$response = curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to reach external booking system']);
    exit();
}

$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$headers = substr($response, 0, $header_size);
$body = substr($response, $header_size);
curl_close($ch);

// Extract CSRF token
$csrfToken = '';
if (preg_match('/name="_csrf" value="([^"]+)"/', $body, $matches)) {
    $csrfToken = $matches[1];
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to extract CSRF token']);
    exit();
}

// Extract cookies
$cookies = [];
preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $headers, $matches);
foreach($matches[1] as $item) {
    $cookies[] = $item;
}
$cookieString = implode('; ', $cookies);

// 3. Prepare POST data
$postData = [
    '_csrf' => $csrfToken,
    'full_name' => $input['full_name'] ?? '',
    'mobile' => $input['mobile'] ?? '',
    'service' => $input['service'] ?? '',
    'preferred_date' => $input['preferred_date'] ?? '',
    'preferred_time' => $input['preferred_time'] ?? '',
    'message' => $input['message'] ?? ''
];

if (!empty($input['whatsapp_updates'])) {
    $postData['whatsapp_updates'] = '1';
}

$postFields = http_build_query($postData);

// 4. Submit the POST request to Pluscode
$ch2 = curl_init($targetUrl);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch2, CURLOPT_POST, true);
curl_setopt($ch2, CURLOPT_POSTFIELDS, $postFields);
curl_setopt($ch2, CURLOPT_HTTPHEADER, [
    'Content-Type: application/x-www-form-urlencoded',
    'Cookie: ' . $cookieString,
    'Referer: ' . $targetUrl,
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
]);

$postResponse = curl_exec($ch2);
$httpCode = curl_getinfo($ch2, CURLINFO_HTTP_CODE);
curl_close($ch2);

// Check success (Pluscode typically redirects or returns 200/302 on success)
if ($httpCode >= 200 && $httpCode < 400) {
    $refId = rand(10000, 99999);
    echo json_encode(['success' => true, 'requestId' => $refId]);
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'External system rejected the request. HTTP ' . $httpCode]);
}
?>
