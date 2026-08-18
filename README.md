# Maa Bhagwati Dental Care - Website

## 🚀 Deployment Instructions for Hostinger

This project is built using Next.js (App Router) and uses static HTML export, which makes it 100% compatible with Hostinger's Shared Web Hosting!

### 1. The Deployment Pipeline
We have configured a fully automated GitHub Actions pipeline located in `.github/workflows/hostinger-deploy.yml`. 

- When you push to the **`main`** branch, GitHub Actions will automatically:
  1. Build the Next.js project into static HTML/CSS/JS.
  2. Push the built output to a special branch called **`deploy`**.

### 2. Hostinger Setup
You do **not** need Node.js server support on Hostinger. To deploy:
1. Log into your Hostinger hPanel.
2. Go to **Websites > Manage > Advanced > Git**.
3. Connect your GitHub repository.
4. **CRITICAL STEP:** Select the **`deploy`** branch as your deployment branch. 
5. Set the deployment directory to your `public_html` root.
6. Click Deploy. 

Now, every time GitHub Actions finishes building, Hostinger will automatically pull the static files and your website will be live!

### 3. Local Development
To run this project locally:
```bash
npm install
npm run dev
```

### 4. Code Quality
We have audited this project. Run the following commands to ensure everything is production ready:
```bash
npm run lint
npm run build
```
