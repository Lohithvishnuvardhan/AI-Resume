# 🎉 Activation Instructions for Buyers

Thank you for purchasing the AI Resume Builder Template!

## ✅ How to Enable PDF & Word Downloads

After purchasing and downloading the template, follow these simple steps to activate the download functionality:

### Step 1: Open the Config File

Navigate to: `src/config.ts`

### Step 2: Change the Purchase Status

Find this line:
```typescript
export const IS_PURCHASED = false;
```

Change it to:
```typescript
export const IS_PURCHASED = true;
```

### Step 3: Save and Restart

1. Save the file (`Ctrl+S` or `Cmd+S`)
2. If your dev server is running, it will automatically reload
3. If not, restart with `npm run dev`

### Step 4: Test the Downloads

1. Fill in your resume information
2. Click "Download PDF" or "Download Word"
3. Your files should download successfully! 🎊

---

## 📝 Notes

- **Before activation**: Download buttons redirect to Gumroad (demo mode)
- **After activation**: Download buttons generate actual PDF/Word files
- The config file is located at: `project/src/config.ts`
- You only need to change `IS_PURCHASED` from `false` to `true`

---

## 🆘 Troubleshooting

**Downloads not working?**
- Make sure you changed `IS_PURCHASED = true` in `src/config.ts`
- Restart your dev server after making the change
- Clear browser cache if needed

**Still having issues?**
- Check the browser console for any errors
- Make sure all dependencies are installed (`npm install`)
- Verify the resume preview is visible before downloading

---

Enjoy your resume builder! 🚀

