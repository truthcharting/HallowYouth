#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Force add dist folder (ignored by .gitignore)
echo "Adding dist folder to git..."
git add -f dist/

# Commit and push
echo "Committing and pushing to GitHub Pages..."
git commit -m "Deploy: $(date)"
git push origin gh-pages

echo "Deployment complete! Visit https://truthcharting.github.io/HallowYouth/"
