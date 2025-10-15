#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Copy dist files to root for GitHub Pages
echo "Copying dist files to root..."
cp -r dist/* .

# Add .nojekyll to prevent Jekyll processing
touch .nojekyll

# Add all files
echo "Adding files to git..."
git add .

# Commit and push
echo "Committing and pushing to GitHub Pages..."
git commit -m "Deploy: $(date)"
git push origin gh-pages

echo "Deployment complete! Visit https://truthcharting.github.io/HallowYouth/"
echo "Note: Make sure vite.config.ts has base: '/HallowYouth/' for correct asset paths"
