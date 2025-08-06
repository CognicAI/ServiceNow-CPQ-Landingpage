# ServiceNow CPQ Landing Page - DigitalOcean Deployment

This guide explains how to deploy the ServiceNow CPQ Landing Page to DigitalOcean App Platform.

## Deployment Options

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**: Make sure your code is pushed to your GitHub repository.

2. **Create App on DigitalOcean**:
   - Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Connect your GitHub account and select this repository
   - Choose the `main` branch

3. **App Platform will automatically detect**:
   - Node.js environment
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Configure Environment** (if needed):
   - Set `NODE_ENV=production`
   - Add any other environment variables your app needs

### Option 2: Using App Spec (app.yaml)

Upload the `.do/app.yaml` file when creating your app for custom configuration.

### Option 3: Docker Deployment

Use the included `Dockerfile` for containerized deployment:

1. The Dockerfile uses multi-stage build for optimization
2. Serves the built app using nginx
3. Includes compression and caching optimizations

## Files Created for Deployment

- `.do/app.yaml` - App Platform configuration
- `.do/deploy.template.yaml` - Alternative deployment template
- `Dockerfile` - Container configuration
- `nginx.conf` - Web server configuration
- Updated `package.json` with start script

## Environment Variables

No environment variables are required for basic deployment. Add them in the DigitalOcean dashboard if your app needs specific configuration.

## Build Process

1. `npm ci` - Install dependencies
2. `npm run build` - Build the application with Vite
3. Static files served from `dist/` directory

## Domain Configuration

After deployment:
1. Your app will get a default `.ondigitalocean.app` domain
2. You can add custom domains in the App Platform dashboard
3. SSL certificates are automatically managed

## Monitoring and Scaling

- Monitor your app through the DigitalOcean dashboard
- Scale up/down based on traffic
- View logs and metrics in real-time

## Cost Optimization

- The configuration uses `basic-xxs` instance for cost efficiency
- Static site serving is very cost-effective
- Consider upgrading instance size if needed based on traffic

## Support

For deployment issues:
- Check DigitalOcean App Platform documentation
- Review build logs in the dashboard
- Ensure all dependencies are in package.json
