# Augur Dashboard Deployment Guide

## Automated CI/CD Pipeline
- **Trigger**: Push to `main` branch
- **Action**: Vercel automatically:
  1. Installs dependencies (`npm install`)
  2. Builds production assets (`npm run build`)
  3. Deploys to: `https://augur-dashboard.vercel.app`

## Manual Steps
None required - fully automated.

## Preview Deployments
- Every pull request gets a temporary URL:  
  `https://git-[pr-number]-[project].vercel.app`

## Troubleshooting
- Build failures: Check logs in Vercel → Deployments
- Missing environment variables: Add in Vercel project settings