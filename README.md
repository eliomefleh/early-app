# Early — Sleep Accountability App

## Deploy in 5 minutes (Railway — recommended)

1. Go to [railway.app](https://railway.app) and sign up (free)
2. Click **New Project → Deploy from GitHub repo**
3. Push this folder to a GitHub repo first, then connect it
4. In Railway, go to **Variables** and add:
   ```
   ANTHROPIC_API_KEY=your_key_here
   ```
5. Railway auto-detects Node.js and runs `npm start`
6. Your live URL appears in the Railway dashboard

## Alternative: Render (also free)

1. Go to [render.com](https://render.com)
2. New → Web Service → connect your GitHub repo
3. Build command: `npm install`
4. Start command: `node server.js`
5. Add environment variable: `ANTHROPIC_API_KEY=your_key_here`
6. Deploy — get your `.onrender.com` URL

## Run locally

```bash
npm install
ANTHROPIC_API_KEY=your_key_here node server.js
```

Open http://localhost:3000

## Get your Anthropic API key

Go to https://console.anthropic.com → API Keys → Create Key
