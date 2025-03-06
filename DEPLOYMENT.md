# Deployment Guide for IONOS Webspace

This guide will help you deploy your Next.js application to IONOS webspace.

## Pre-deployment Checklist

- [x] Build the application with `npm run build`
- [x] Create an `.htaccess` file in the public directory
- [x] Ensure all environment variables are set correctly

## Deployment Steps

1. **Connect to your IONOS webspace using FileZilla**

   - Host: Your IONOS FTP hostname
   - Username: Your IONOS FTP username
   - Password: Your IONOS FTP password
   - Port: 21 (or as specified by IONOS)

2. **Upload the following directories and files to your /main directory**:

   - `.next/` directory
   - `public/` directory (includes the .htaccess file)
   - `node_modules/` directory (only if you're not installing dependencies on the server)
   - `package.json`
   - `next.config.js`

3. **Set file permissions**:

   - Directories: 755 (drwxr-xr-x)
   - Files: 644 (-rw-r--r--)
   - Executable files: 755 (-rwxr-xr-x)

## Troubleshooting

If you encounter issues after deployment:

1. **Check the server logs** for any errors.

2. **Verify .htaccess configuration** is correct for your specific IONOS setup.

3. **Check file paths** - ensure all paths are correct for the /main directory.

4. **MIME type issues** - If you see issues with JavaScript or CSS files not loading correctly, verify that the MIME types in the .htaccess file are correct.

5. **404 errors** - If you're getting 404 errors for your routes, ensure the rewrite rules in the .htaccess file are working correctly.

## Additional Notes

- The application is configured to run from the `/main` directory with `/` as the root.
- Static assets are served from the `/_next` directory.
- API routes are handled by the rewrite rules in the .htaccess file.
- Make sure your IONOS webspace supports Node.js if you're planning to use server-side features.

## Testing After Deployment

After deployment, test the following:

1. The home page loads correctly
2. All static assets (images, CSS, JavaScript) load properly
3. Navigation between pages works
4. The dark/light theme toggle functions correctly
5. Any API routes work as expected
