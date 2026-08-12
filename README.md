# ⚔️ Random Adventure Generator

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/hosseinb1111/random-adventure-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A fun, lightweight Cloudflare Worker that serves a unique, whimsical mini‑adventure prompt on every single visit. 
Perfect for curing writer's block, generating quick RPG session seeds, or just giving your imagination a playful nudge.

🔗 **[Try it live](https://old-mountain-ed9b.imtheonlyone.workers.dev/)** 

![Screenshot of the Adventure Generator](https://raw.githubusercontent.com/hosseinb1111/Random-Adventure-Generator/refs/heads/main/example.png) 


---

## ✨ Features

- **Randomized Stories**: Combines a character, setting, conflict, and twist to create a completely new prompt each time.
- **Dynamic Background**: Picks a random pastel color for every page load, making each visit feel fresh.
- **Custom Favicon**: Includes a built-in ⚔️ sword icon (no external image hosting required).
- **Styled Text Selection**: Highlights selected text with a warm gold‑orange glow for a polished, immersive feel.
- **Mobile Responsive**: Looks great on any screen size, from desktops to phones.
- **Zero Dependencies**: Pure vanilla JavaScript and HTML running on Cloudflare's edge network.

---

## 🛠️ How It Works

The worker is an ES module that responds to HTTP requests with a full HTML page.

1. **Data Pools**: It pulls from four JavaScript arrays containing dozens of possible:
   - Characters (e.g., *"a brave knight"*, *"a mischievous fairy"*)
   - Settings (e.g., *"in a mystical forest"*, *"on a neon‑lit space station"*)
   - Conflicts (e.g., *"must find a lost artifact"*, *"must win a cooking contest"*)
   - Twists (e.g., *"but the artifact is actually a banana"*, *"but the dragon only wants a hug"*)

2. **Random Selection**: On every request, the worker picks one random entry from each list.
3. **Story Assembly**: These four pieces are stitched together into a complete sentence.
4. **Dynamic Styling**: The background color is generated using a random HSL hue, and everything is served as a styled HTML response.

---

## 🚀 Deployment

### Option 1: Deploy via Cloudflare Dashboard (Easiest)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create Application** > **Create Worker**.
3. Give your worker a name (e.g., `adventure-generator`) and click **Deploy**.
4. Click **Edit code** and paste the entire JavaScript code from `src/index.js` into the editor.
5. Click **Save and Deploy**.
6. Visit your worker's URL (e.g., `https://adventure-generator.your-subdomain.workers.dev`) to see it in action!

### Option 2: Deploy using Wrangler (CLI)

1. Install Wrangler:
   ```bash
   npm install -g wrangler
Clone this repository:

bash
git clone https://github.com/yourusername/random-adventure-generator.git
cd random-adventure-generator
Login to your Cloudflare account:

bash
wrangler login
Deploy the worker:

bash
wrangler deploy
🎨 Customization
You can easily tailor the generator to your own tastes by editing the data arrays or styles in the JavaScript file.

Changing the Story Prompts
Find the four arrays in the code (characters, settings, conflicts, twists) and add, remove, or modify the strings:

javascript
const characters = [
  "a brave knight", 
  "your own character", // Add your own!
  // ...
];
Changing the Favicon
Swap the emoji inside the SVG text tag:

html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪙</text></svg>">
Replace ⚔️ with 🪙, 🎲, 🐉, or any other emoji!
