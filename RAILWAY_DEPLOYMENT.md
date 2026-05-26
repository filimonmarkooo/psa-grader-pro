# PSA Grader Pro - Railway Deployment Guide (Phone Access)

## ✅ QUICK START - Deploy in 5 Minutes

### Step 1: GitHub Setup (3 minutes)

1. Go to https://github.com/new
2. Repository name: `psa-grader-pro`
3. Description: "AI PSA card grading tool"
4. Click "Create repository"

### Step 2: Upload Files to GitHub

You need to upload these 5 files:
- `package.json`
- `server.js`
- `railway.json`
- `.gitignore`
- `public/index.html` (the app)

**Method A: Upload via GitHub Web (Easiest)**

1. On your new repo, click "Add file" → "Upload files"
2. Drag and drop ALL files at once
3. Click "Commit changes"

**Method B: Using Git Command Line (If comfortable)**

```bash
git clone https://github.com/YOUR-USERNAME/psa-grader-pro.git
cd psa-grader-pro

# Copy the files here:
# - package.json
# - server.js
# - railway.json
# -.gitignore
# - public/index.html

git add .
git commit -m "Initial commit"
git push origin main
```

### Step 3: Deploy to Railway (2 minutes)

1. Go to https://railway.app
2. Click "Login" → "Login with GitHub"
3. Authorize Railway to access your GitHub
4. Click "New Project" → "Deploy from GitHub repo"
5. Select `psa-grader-pro` from the list
6. Click "Deploy"
7. **Wait ~1-2 minutes for deployment**

### Step 4: Get Your Live URL

1. In Railway dashboard, find your project
2. Click "Deployments"
3. Wait for deployment to show "Success"
4. Click "Domains" in the left sidebar
5. You'll see a URL like: `https://psa-grader-production.up.railway.app`
6. **This is your live app!**

### Step 5: Access on Your Phone

1. Copy the Railway URL
2. Open your phone's browser
3. Paste the URL and press Enter
4. Enter your Anthropic API key
5. Start analyzing cards!

---

## 📱 Using on Your Phone

### Best Practices:

**Photo Quality:**
- Use good lighting (natural light best)
- Hold phone steady (use a tripod if possible)
- Card should fill 80% of the screen
- For 45° shots, use phone light or desk lamp
- Zoom in to fill frame

**Workflow:**
1. Open app in phone browser (bookmark it!)
2. Click "Front" slot → Take photo
3. Click "Front 45°" slot → Take photo with light
4. Flip card
5. Click "Back" slot → Take photo
6. Click "Back 45°" slot → Take photo with light
7. Click "Analyze"
8. Get results in ~20 seconds
9. Log actual grade when you receive it

**Mobile Browser Tips:**
- Use Chrome or Safari (both work great)
- Bookmark the URL for quick access
- Keep the tab open for calibration history
- Don't use incognito mode (data won't persist)

---

## 🔧 If You Need to Update the App

### Update the HTML (App Features)

1. Download the current `public/index.html` from your repo
2. Edit it (or get new version from me)
3. Upload it back to GitHub
4. Railway auto-deploys within 1-2 minutes
5. Refresh your phone browser
6. Done!

### Update Server (If needed)

Edit `server.js` → Commit → Auto-deploys

---

## 🚨 Troubleshooting

### "Deployment Failed"
1. Check files were uploaded to correct locations
2. Verify `package.json` exists in root
3. Verify `public/index.html` exists
4. Click "Redeploy" in Railway
5. Wait 2 minutes

### "App loads but API key doesn't work"
1. Verify API key is correct (starts with `sk-ant-`)
2. Check Anthropic console for rate limits
3. Ensure you have $5+ credit
4. Try a different browser

### "Photos not uploading from phone"
1. Check browser console (F12 in mobile Chrome)
2. Ensure photos are under 5MB
3. Try different format (JPG vs PNG)
4. Close other apps (low memory)
5. Reload page

### "Centering visualization not showing"
1. Ensure photos have high contrast
2. Try with darker background
3. Reload page
4. Try different browser

### "Calibration data not saving"
1. Don't use incognito/private mode
2. Check storage isn't disabled in browser
3. Clear cache and reload
4. Try desktop browser to verify

---

## 📊 Monitoring Your Deployment

### View Logs (See what's happening)

In Railway:
1. Click your project
2. Click "Deployments"
3. Click the active deployment
4. Scroll to "Logs" section
5. See real-time activity

### View Usage (API costs)

Anthropic Console:
1. https://console.anthropic.com
2. Click "Usage"
3. See cost per card
4. Set spending limit if desired

### Monitor Performance

Railway shows:
- Uptime (should be 100%)
- Response time
- CPU usage
- Memory usage

All free tier - no concerns

---

## 💰 Costs

### Railway
- **First 500 hours/month:** FREE
- **Additional hours:** $0.50/hour
- You'll never hit limits on free tier

### Anthropic API
- **Per card analysis:** ~$0.02-0.05
- **100 cards/month:** ~$2-5
- Pay only for what you use

### Total Monthly Cost
- **If under 500 hours:** $0-5 (just API)
- **Most people:** $0 (free tier)

---

## 🎯 Advanced: Custom Domain

Want `psa-grader.com` instead of `psa-grader-production.up.railway.app`?

1. Buy domain (Namecheap, GoDaddy, etc.) - ~$10/year
2. In Railway → Project Settings → Domains
3. Add custom domain
4. Follow DNS setup instructions
5. Done in ~2-5 minutes!

---

## 🔒 Security Notes

### Your API Key
- ✅ Stored locally on your phone
- ✅ NEVER sent to Railway
- ✅ ONLY sent to Anthropic
- ✅ Not logged anywhere

### Data Privacy
- ✅ No user accounts needed
- ✅ Calibration data stored locally
- ✅ No tracking or analytics
- ✅ Open source (you can inspect code)

### If Concerned
1. Use restricted API key (Anthropic allows limits)
2. Rotate API key monthly
3. Monitor usage in Anthropic console
4. Set spending limit in Anthropic

---

## 📲 Sharing with Friends

Once deployed:
1. Copy your Railway URL
2. Send to friends
3. They paste it in their phone browser
4. They enter THEIR OWN API key (free tier!)
5. They can analyze cards immediately

**Each person needs their own:**
- Anthropic API key (free to get)
- Phone with browser

**They don't need:**
- Installation
- Account creation
- Any setup

---

## 🔄 CI/CD Auto-Deployment

Railway auto-deploys when you push to GitHub:

1. Edit file locally (or on GitHub)
2. Commit and push
3. Railway detects change
4. Auto-builds and deploys
5. Live in ~2 minutes
6. No manual action needed

---

## Next Steps After Deployment

### Verify It Works
- [ ] Open live URL on phone
- [ ] Enter API key
- [ ] Upload test photos
- [ ] Run analysis
- [ ] See results

### Start Using
- [ ] Analyze your first real card
- [ ] Take good photos
- [ ] Submit to PSA (optional)
- [ ] Log actual grade when received
- [ ] Watch accuracy improve

### Scale (When Ready)
- [ ] Add more features
- [ ] Create custom domain
- [ ] Integrate with other tools
- [ ] Share with community

---

## 📞 Support

**Railway Issues:**
- Docs: https://docs.railway.app
- Status: https://railway.app/status

**Anthropic API:**
- Docs: https://console.anthropic.com/docs
- Rate limits: https://console.anthropic.com

**App Issues:**
- Check browser console (F12)
- Reload page
- Clear cache
- Try different browser

---

## 🎉 You're Done!

Your PSA Grader Pro is now:
- ✅ Live on the internet
- ✅ Accessible from your phone
- ✅ Accessible from anywhere
- ✅ Ready for real card analysis

**Next:** Open on your phone and analyze your first card!

Questions? Check the troubleshooting section above.