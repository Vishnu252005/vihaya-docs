# Setting Up Download Page for Vihaya.exe

This guide explains how to make your Vihaya.exe file available for download on your website.

## 📁 Step 1: Upload Vihaya.exe to Your Website

### Option A: Using Next.js Public Folder (Recommended for Vercel/Netlify)

1. **Create downloads folder in public directory:**
   ```bash
   mkdir vihaya-docs/public/downloads
   ```

2. **Copy your Vihaya.exe file:**
   ```bash
   # From your Flutter project
   cp Vihaya/build/windows/x64/runner/Release/Vihaya.exe vihaya-docs/public/downloads/
   ```

   Or if you have a release package:
   ```bash
   cp Vihaya/release/windows/Vihaya.exe vihaya-docs/public/downloads/
   ```

3. **The file will be accessible at:**
   ```
   https://your-domain.com/downloads/Vihaya.exe
   ```

### Option B: Using External CDN/Storage (Recommended for Large Files)

For better performance and to reduce Next.js build size:

1. **Upload to cloud storage:**
   - **Firebase Storage**: Upload to Firebase Storage bucket
   - **AWS S3**: Upload to S3 bucket
   - **Cloudflare R2**: Upload to R2 bucket
   - **GitHub Releases**: Upload as release asset

2. **Get the public URL** and update `app/download/page.tsx`:
   ```tsx
   const downloadUrl = 'https://your-cdn.com/downloads/Vihaya.exe';
   ```

### Option C: Using GitHub Releases

1. **Create a GitHub release:**
   ```bash
   # Tag your release
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Upload Vihaya.exe as release asset** on GitHub

3. **Get the direct download URL:**
   ```
   https://github.com/your-username/vihaya/releases/download/v1.0.0/Vihaya.exe
   ```

4. **Update download page:**
   ```tsx
   const downloadUrl = 'https://github.com/your-username/vihaya/releases/download/v1.0.0/Vihaya.exe';
   ```

## 🔧 Step 2: Update Download Page

The download page is already created at `app/download/page.tsx`. You just need to:

1. **Update the download URL** in the file:
   ```tsx
   const downloadUrl = '/downloads/Vihaya.exe'; // For public folder
   // OR
   const downloadUrl = 'https://your-cdn.com/downloads/Vihaya.exe'; // For CDN
   ```

2. **Update version info** (if needed):
   ```tsx
   const currentVersion = '1.0.0';
   const buildNumber = '84';
   const fileSize = '~50 MB'; // Update with actual size
   const releaseDate = 'January 2025';
   ```

## 🚀 Step 3: Deploy

### If using Vercel/Netlify:

1. **Make sure the file is in `public/downloads/`**
2. **Deploy as usual:**
   ```bash
   git add .
   git commit -m "Add download page"
   git push
   ```

### If using custom server:

1. **Make sure `public/downloads/` is served statically**
2. **Deploy your Next.js app**

## 📊 Step 4: Test the Download

1. **Visit your download page:**
   ```
   https://your-domain.com/download
   ```

2. **Click "Download Now"** and verify the file downloads correctly

3. **Check file size** matches what's displayed

## 🔄 Step 5: Update for New Versions

When you release a new version:

1. **Build new release:**
   ```powershell
   cd Vihaya
   .\scripts\build_windows_release.ps1
   ```

2. **Update version in `pubspec.yaml`:**
   ```yaml
   version: 1.0.1+85
   ```

3. **Upload new Vihaya.exe:**
   - Replace file in `public/downloads/` OR
   - Upload to CDN with versioned URL

4. **Update download page:**
   ```tsx
   const currentVersion = '1.0.1';
   const buildNumber = '85';
   ```

5. **Redeploy website**

## 💡 Best Practices

1. **Version your files:**
   ```
   /downloads/Vihaya_1.0.0.exe
   /downloads/Vihaya_1.0.1.exe
   /downloads/Vihaya_latest.exe (symlink to latest)
   ```

2. **Use CDN for large files** (>10MB) to improve performance

3. **Add checksums** (SHA256) for security:
   ```tsx
   const checksum = 'abc123...';
   ```

4. **Track downloads** with analytics:
   - Google Analytics
   - Plausible Analytics
   - Custom tracking

5. **Add download counter** if desired

## 🔗 Quick Links

- **Download Page**: `/download`
- **File Location**: `public/downloads/Vihaya.exe`
- **Update Page**: `app/download/page.tsx`

## 📝 Example File Structure

```
vihaya-docs/
├── public/
│   └── downloads/
│       └── Vihaya.exe          # Your executable
├── app/
│   └── download/
│       └── page.tsx            # Download page
└── DOWNLOAD_SETUP.md           # This file
```

That's it! Your users can now download Vihaya.exe from your website. 🎉

