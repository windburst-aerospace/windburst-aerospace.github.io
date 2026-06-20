# Windburst Members Portal — Laptop Self-Hosting Guide

The public site (home, gallery, team, contact) lives on GitHub Pages.
The members portal runs on your laptop and is exposed to the internet via a free Cloudflare Tunnel — no port forwarding, no paid services.

---

## What you need on the laptop

- Node.js 18+ → https://nodejs.org
- pnpm → `npm install -g pnpm`
- A PostgreSQL database (free options below)
- This repo cloned: `git clone https://github.com/windburst-aerospace/windburst-aerospace.github.io.git`

### Free PostgreSQL options
- **Neon** (recommended, free tier, no credit card) → https://neon.tech
- **Supabase** → https://supabase.com
- Or install Postgres locally on the laptop

---

## One-time setup

```bash
# 1. Install dependencies
pnpm install

# 2. Create environment file for the server
cp artifacts/api-server/.env.example artifacts/api-server/.env
# Then edit artifacts/api-server/.env and fill in:
#   DATABASE_URL=your_postgres_connection_string
#   SESSION_SECRET=any_long_random_string (e.g. run: openssl rand -hex 32)
#   SID_PASSWORD=siddarth_password
#   KP_PASSWORD=krishna_password
#   MAX_PASSWORD=max_password
#   PORT=3000
#   NODE_ENV=production

# 3. Push the database schema
pnpm --filter @workspace/db run push

# 4. Build the members frontend (creates artifacts/windburst/dist/members/)
pnpm --filter @workspace/windburst run build:members
```

---

## Running the server

```bash
# Start the members server (serves API + members frontend on port 3000)
cd artifacts/api-server
node --enable-source-maps ./dist/index.mjs
```

Or build first if you haven't:
```bash
pnpm --filter @workspace/api-server run build
node artifacts/api-server/dist/index.mjs
```

The server will be at http://localhost:3000

---

## Exposing it to the internet (free Cloudflare Tunnel)

No account needed for a quick tunnel:

```bash
# Install cloudflared (one-time)
# macOS:
brew install cloudflare/cloudflare/cloudflared
# Windows: download from https://github.com/cloudflare/cloudflared/releases
# Linux: sudo apt install cloudflared  (or download binary)

# Start the tunnel (run this every time you want the portal online)
cloudflared tunnel --url http://localhost:3000
```

Cloudflare will print a URL like:
  https://something-random.trycloudflare.com

That's your members portal URL. Anyone with that link can reach the login page.

### Making the URL permanent (optional, free Cloudflare account)
A free Cloudflare account lets you get a fixed subdomain so the URL never changes:
1. Sign up at https://cloudflare.com (free)
2. Run: `cloudflared tunnel login`
3. Run: `cloudflared tunnel create windburst`
4. Follow the docs at https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/

---

## Updating the MEMBERS button on the public site

Once you have your tunnel URL, bake it into the GitHub Pages build:

```bash
# In artifacts/windburst/, create .env.static
echo "VITE_MEMBERS_URL=https://your-tunnel-url.trycloudflare.com" > artifacts/windburst/.env.static

# Rebuild the public site
pnpm --filter @workspace/windburst run build:static

# Commit and push — GitHub Actions will redeploy
git add . && git commit -m "Update members portal URL" && git push
```

---

## Keeping the portal online

The portal is only accessible when:
1. Your laptop is on and the server is running
2. The `cloudflared tunnel` command is running

You can leave both running in the background. If your laptop restarts, just run both commands again.

To run automatically on startup (macOS):
```bash
# Add to your shell profile (~/.zshrc or ~/.bash_profile):
# alias windburst-start="cd /path/to/repo && node artifacts/api-server/dist/index.mjs & cloudflared tunnel --url http://localhost:3000"
```
