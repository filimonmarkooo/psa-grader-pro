# PSA GRADER PRO - RAILWAY DEPLOYMENT QUICK REFERENCE

## 📋 5-MINUTE SETUP

### Files Needed (5 total)
```
✓ package.json
✓ server.js
✓ railway.json
✓ .gitignore
✓ public/index.html (your app)
```

### Step 1: Create GitHub Repo (1 min)
```
https://github.com/new
Name: psa-grader-pro
→ Create repository
```

### Step 2: Upload All 5 Files (2 min)
```
Click "Add file" → "Upload files"
Drag ALL files at once
→ Commit changes
```

### Step 3: Deploy to Railway (2 min)
```
https://railway.app
Login with GitHub → New Project
→ Deploy from GitHub → Select psa-grader-pro
→ Deploy
Wait 1-2 minutes...
```

### Step 4: Get Your URL
```
Railway Dashboard → Domains
Copy: https://psa-grader-XXXX.up.railway.app
→ Open on phone
```

### Step 5: Use It
```
Paste URL in phone browser
Enter API key
Upload 4 photos
Click Analyze
✓ Done!
```

---

## 📱 USING ON PHONE

**Best Setup:**
- Dark/neutral background (black cardstock ideal)
- Good lighting (natural light > artificial)
- Card fills 80% of screen
- 45° shots: use phone light or desk lamp
- Steady hands or use tripod

**Workflow:**
1. Open URL in phone browser (bookmark it!)
2. Front (straight) → Take photo
3. Front (45°) → Take photo with light
4. Flip card
5. Back (straight) → Take photo
6. Back (45°) → Take photo with light
7. Click "Analyze"
8. Results in ~20 seconds

---

## 💰 COSTS

| Service | Cost | Notes |
|---------|------|-------|
| Railway | Free | 500 hrs/month free |
| Anthropic API | ~$0.03/card | Pay as you go |
| Custom domain | $10/year | Optional |
| **Monthly (typical)** | **$0-5** | API costs only |

---

## 🔗 KEY URLS

| Purpose | URL |
|---------|-----|
| GitHub signup | https://github.com/signup |
| Create repo | https://github.com/new |
| Railway login | https://railway.app |
| API key | https://console.anthropic.com |
| Your live app | (After deployment) |

---

## 🚨 QUICK FIXES

| Problem | Solution |
|---------|----------|
| Deploy failed | Check files uploaded correctly, click Redeploy |
| API key doesn't work | Verify it starts with `sk-ant-`, check credit |
| Photos not uploading | Try JPG format, ensure < 5MB |
| Centering not showing | Try darker background, reload page |
| Data not saving | Don't use incognito mode |
| App is slow | Wait 1 min (cold start), then fast |

---

## ✅ VERIFICATION CHECKLIST

After deployment:
- [ ] Live URL loads in browser
- [ ] API key field appears
- [ ] Can click to upload photos
- [ ] Can select photos from phone
- [ ] "Analyze" button works
- [ ] Results appear in ~20 seconds
- [ ] Centering visualization shows
- [ ] Calibration section appears
- [ ] Can log actual grades

If all checked: **You're ready to go!**

---

## 📞 HELP

**Deployment stuck?**
- Re-read RAILWAY_DEPLOYMENT.md (detailed version)
- Check Railway dashboard logs
- Verify all 5 files uploaded

**App issues?**
- Open phone browser DevTools (F12)
- Check console for errors
- Reload page
- Try different browser

**API key problems?**
- Go to https://console.anthropic.com
- Create new key
- Verify $5+ available
- Try again

---

## 🎯 NEXT STEPS

1. **Right now:** Gather the 5 files
2. **GitHub:** Upload files to new repo
3. **Railway:** Connect repo and deploy
4. **Phone:** Open live URL
5. **Analyze:** Start grading cards!

---

**Total time: 5-10 minutes**
**Cost: $0 (unless you buy custom domain)**
**Result: Live phone app for card grading**

✨ Let's do this! ✨