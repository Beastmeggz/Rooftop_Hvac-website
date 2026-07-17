# Contact Form Setup Guide

## Quick Start

Your contact form is now fully functional! Follow these steps to get it running:

### 1. Install Dependencies
Open terminal/PowerShell in the RooftopHVAC folder and run:
```
npm install
```

### 2. Start the Server
```
npm start
```

You should see:
```
🚀 Rooftop HVAC Contact Server Running!
📍 Server: http://localhost:3000
📧 Contact Form: http://localhost:3000
📋 View Submissions: http://localhost:3000/api/submissions
```

### 3. Open in Browser
- Go to `http://localhost:3000`
- Fill out and submit the contact form
- You'll get a confirmation message

### 4. View Submissions
- Go to `http://localhost:3000/api/submissions` to see all submissions in JSON format
- Submissions are also saved in the `/submissions` folder

## What's Working Now

✅ Contact form accepts submissions
✅ Form data is saved to files
✅ All submissions logged
✅ User gets confirmation message
✅ Form resets after submission

## Next Steps (Email Integration)

When you're ready to add email sending, the backend is ready. Just:
1. Install nodemailer: `npm install nodemailer`
2. Add your email config to `server.js`
3. Update the submission handler to send emails

The form is production-ready now!
