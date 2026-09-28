# Deploying to Vercel

This is a standard Next.js app, so Vercel deployment is straightforward and free for personal/small projects.

## Step 1 — Push the code to GitHub

1. Create a new repository at https://github.com/new (e.g. `nexus-agency`). Keep it empty (no README).
2. In a terminal at the project root (`d:\service web`):

```bash
git init
git add .
git commit -m "Initial commit: Nexus agency website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nexus-agency.git
git push -u origin main
```

> `.env.local` is git-ignored, so your secrets are never pushed.

## Step 2 — Import into Vercel

1. Go to https://vercel.com and sign up / log in with your GitHub account.
2. Click **Add New → Project**, then **Import** your `nexus-agency` repo.
3. Vercel auto-detects Next.js. Leave the build settings as default:
   - Framework: **Next.js**
   - Build command: `next build`
   - Output: (auto)
4. Click **Deploy**. In ~1–2 minutes you'll get a live URL like `https://nexus-agency.vercel.app`.

## Step 3 — Add environment variables (for real emails)

In your Vercel project: **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | your key from https://resend.com/api-keys |
| `EMAIL_FROM` | `onboarding@resend.dev` (or your verified domain sender) |
| `EMAIL_TO` | the inbox that should receive submissions |

Then **redeploy** (Deployments → ⋯ → Redeploy) so the new vars take effect.

> Without `RESEND_API_KEY`, forms run in **demo mode**: they validate and show success, but no email is sent. This is fine for previewing.

## Step 4 — Use your own domain (optional)

1. Vercel project → **Settings → Domains → Add**.
2. Enter your domain and follow the DNS instructions.
3. After it's live, update `site.url` in `src/lib/site.ts` to your real domain (this fixes canonical URLs, sitemap, and Open Graph), commit, and push — Vercel auto-redeploys.

## Updating the site later

Just commit and push to `main`. Vercel rebuilds and redeploys automatically on every push.

```bash
git add .
git commit -m "Update content"
git push
```
