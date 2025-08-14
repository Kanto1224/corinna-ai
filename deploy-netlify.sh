#!/bin/bash

echo "🚀 Deploying Corinna AI to Netlify"
echo "=================================="

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null
then
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Build the project first
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix build errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
netlify deploy --dir=.next --prod

echo "=================================="
echo "🎉 Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://app.netlify.com to view your site"
echo "2. Add environment variables in Site Settings > Environment Variables"
echo "3. Configure custom domain if needed"