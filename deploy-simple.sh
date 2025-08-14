#!/bin/bash

echo "🚀 Simple Netlify Deployment"
echo "============================"

# Check if site exists or create new one
echo "Creating/linking Netlify site..."
netlify sites:create --name chatvise-ai-$(date +%s) 2>/dev/null || true

# Deploy the already built files
echo "Deploying to Netlify..."
netlify deploy --dir=.next --prod --skip-functions-cache

echo "============================"
echo "✅ Deployment attempt complete!"
echo ""
echo "If deployment failed, try:"
echo "1. netlify link (to link existing site)"
echo "2. netlify deploy --dir=.next --prod"
echo ""
echo "Or use GitHub integration:"
echo "1. Push to GitHub"
echo "2. Connect repo at app.netlify.com"
echo "3. Auto-deploy will handle the rest"