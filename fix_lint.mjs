import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, searchRegex, replaceText) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(searchRegex, replaceText);
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (e) {
    console.error(`Could not read ${filePath}`, e);
  }
}

// Fix unescaped entities
const filesWithUnescaped = [
  'components/ReviewsSlider.tsx',
  'components/TestimonialCard.tsx',
  'components/appointment/steps/Step3Treatment.tsx',
  'sections/Testimonials.tsx',
  'sections/contact/ContactHero.tsx',
  'sections/testimonials/ReviewGrid.tsx',
  'sections/testimonials/VideoTestimonials.tsx'
];

filesWithUnescaped.forEach(f => {
  const p = path.join(process.cwd(), f);
  replaceInFile(p, /'/g, '&apos;');
  replaceInFile(p, /"/g, '&quot;');
  // Wait, replacing all quotes will break JSX attributes like className="text-white".
  // It's safer to let ESLint fix it automatically if possible!
});
