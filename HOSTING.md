# Hosting Guide for KARV Farmer Bridge

This guide provides comprehensive instructions for hosting your KARV Farmer Bridge application on various platforms.

## Table of Contents

1. [GitHub Pages](#github-pages)
2. [Vercel](#vercel)
3. [Netlify](#netlify)
4. [Other Hosting Options](#other-hosting-options)
5. [Custom Domain Setup](#custom-domain-setup)

---

## GitHub Pages

GitHub Pages is a free hosting service provided by GitHub. The project is already configured for automatic deployment to GitHub Pages.

### Prerequisites

- Your code is pushed to a GitHub repository
- You have admin access to the repository

### Setup Instructions

#### 1. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/Zaidmakandar1/karv-farmer-bridge`
2. Click on **Settings** (in the repository navigation)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   
   ![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/images/help/pages/publishing-source-drop-down.png)

5. Click **Save**

#### 2. Trigger Deployment

The deployment will automatically trigger when:
- You push code to the `main` branch
- You manually trigger it from the Actions tab

To manually trigger:
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow** > **Run workflow**

#### 3. Access Your Site

Once deployed (usually takes 2-3 minutes), your site will be available at:

**https://zaidmakandar1.github.io/karv-farmer-bridge/**

You can find the exact URL in:
- **Settings** > **Pages** - shown at the top once enabled
- **Actions** > Latest workflow run > Deploy job > Deploy to GitHub Pages step

### Configuration Details

The GitHub Pages deployment is configured using:

1. **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
   - Automatically builds the application
   - Deploys to GitHub Pages on every push to `main`
   - Can be manually triggered

2. **Vite Configuration**: `vite.config.ts`
   - Sets the correct base path for GitHub Pages (`/karv-farmer-bridge/`)
   - Configures build output directory (`dist`)

### Troubleshooting GitHub Pages

If your deployment fails:

1. **Check Workflow Status**:
   - Go to **Actions** tab
   - Click on the failed workflow
   - Review error messages

2. **Common Issues**:
   - **Build fails**: Check that dependencies install correctly
   - **404 on page load**: Verify the `base` path in `vite.config.ts` matches your repo name
   - **Permissions error**: Ensure GitHub Pages is enabled and workflow has proper permissions

3. **View Logs**:
   ```bash
   # The workflow logs are available in the Actions tab
   # Click on any workflow run to see detailed logs
   ```

---

## Vercel

Vercel offers excellent performance and is very easy to set up for React applications.

### Setup Instructions

#### 1. Sign Up / Log In
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (recommended: use your GitHub account)

#### 2. Import Repository
1. Click **Add New** > **Project**
2. Import your GitHub repository: `Zaidmakandar1/karv-farmer-bridge`
3. Vercel will automatically detect it's a Vite project

#### 3. Configure Build Settings
The default settings should work, but verify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 4. Deploy
1. Click **Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be available at a Vercel URL like: `https://karv-farmer-bridge.vercel.app`

#### 5. Automatic Deployments
- Every push to `main` automatically deploys to production
- Pull requests get preview deployments automatically

### Configuration Files (Optional)

Create `vercel.json` in the project root for advanced configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Netlify

Netlify is another excellent hosting platform with great features for React applications.

### Setup Instructions

#### 1. Sign Up / Log In
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up or log in (recommended: use your GitHub account)

#### 2. Create New Site
1. Click **Add new site** > **Import an existing project**
2. Choose **GitHub** as your Git provider
3. Select the repository: `Zaidmakandar1/karv-farmer-bridge`

#### 3. Configure Build Settings
- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

#### 4. Deploy
1. Click **Deploy site**
2. Wait for the build to complete
3. Your site will be available at a Netlify URL like: `https://karv-farmer-bridge.netlify.app`

#### 5. Automatic Deployments
- Every push to `main` automatically triggers a deployment
- Pull requests get deploy previews

### Configuration Files (Optional)

Create `netlify.toml` in the project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

---

## Other Hosting Options

### 1. **Cloudflare Pages**

**Pros**: Fast global CDN, free SSL, unlimited bandwidth

**Setup**:
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy

### 2. **Render**

**Pros**: Free tier available, automatic SSL

**Setup**:
1. Go to [render.com](https://render.com)
2. New > Static Site
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### 3. **Firebase Hosting**

**Pros**: Google infrastructure, great for apps needing backend

**Setup**:
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Build your app
npm run build

# Deploy
firebase deploy
```

### 4. **AWS S3 + CloudFront**

**Pros**: Scalable, integrates with AWS services

**Setup**: Requires AWS account and configuration of S3 bucket + CloudFront distribution. See [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html).

### 5. **Digital Ocean App Platform**

**Pros**: Simple deployment, scalable

**Setup**:
1. Go to [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
2. Create new app from GitHub
3. Configure build settings (auto-detected for Vite)
4. Deploy

---

## Custom Domain Setup

Once your site is deployed, you can connect a custom domain.

### For GitHub Pages

1. **Add CNAME file**:
   - Create a file named `CNAME` in the `public/` directory
   - Add your domain: `www.yourdomain.com`
   
2. **Configure DNS**:
   - Add a CNAME record pointing to: `zaidmakandar1.github.io`
   - Or A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Update vite.config.ts**:
   ```typescript
   // Change to use '/' for custom domain
   base: '/',
   ```
   Note: Remove or modify the `GITHUB_PAGES` environment check since custom domains should use root path.

4. **Enable HTTPS**:
   - In GitHub Settings > Pages
   - Check "Enforce HTTPS"

### For Vercel

1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL

### For Netlify

1. Go to Site Settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions
4. Netlify automatically provisions SSL

---

## Local Development

To run the application locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:8080
```

To build locally:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables

If your application uses environment variables:

### During Development
Create a `.env.local` file:
```
VITE_API_URL=your_api_url
VITE_APP_KEY=your_app_key
```

### For Deployment

**GitHub Pages**: Not supported natively. Consider using a backend service or public APIs.

**Vercel**:
1. Project Settings > Environment Variables
2. Add your variables

**Netlify**:
1. Site Settings > Build & deploy > Environment
2. Add your variables

---

## Build Configuration

The project uses Vite for building. Key configurations:

- **vite.config.ts**: Main configuration file
- **Base path**: Automatically set based on environment
- **Output**: `dist/` directory
- **Assets**: Optimized and bundled automatically

---

## Deployment Checklist

Before deploying:

- [ ] All dependencies are in `package.json`
- [ ] Build succeeds locally (`npm run build`)
- [ ] Preview works locally (`npm run preview`)
- [ ] Environment variables are configured (if needed)
- [ ] Custom domain DNS is configured (if using)
- [ ] Base path is correctly set in `vite.config.ts`
- [ ] All assets load correctly in production build

---

## Need Help?

- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com)
- **Vite**: [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## Support

For issues specific to this project:
1. Check the GitHub Issues: [karv-farmer-bridge/issues](https://github.com/Zaidmakandar1/karv-farmer-bridge/issues)
2. Create a new issue with details about your deployment problem
3. Check the Actions tab for deployment logs

---

**Last Updated**: November 2024
