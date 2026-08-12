// Cloudflare Worker – Random Adventure Generator (with favicon & selection CSS)
export default {
  async fetch(request) {
    // Data pools
    const characters = [
      "a brave knight", "a clever hacker", "a curious cat", "a time‑travelling historian",
      "a wandering bard", "a retired astronaut", "a mischievous fairy", "a stoic robot",
      "a fearless pirate", "a young wizard", "a grizzled detective", "a cheerful chef"
    ];
    const settings = [
      "in a mystical forest", "on a neon‑lit space station", "inside a giant whale",
      "at the bottom of the ocean", "in a forgotten library", "on a moving train",
      "in a dreamscape", "on a distant planet", "in a medieval castle", "under a waterfall"
    ];
    const conflicts = [
      "must find a lost artifact", "must defeat a terrible monster", "must solve a cryptic riddle",
      "must escape an endless maze", "must win a cooking contest", "must deliver a secret message",
      "must repair a broken starship", "must calm a furious dragon", "must break a wicked curse",
      "must rescue a kidnapped prince"
    ];
    const twists = [
      "but the artifact is actually a banana", "but the monster is afraid of butterflies",
      "but the riddle is just a bad pun", "but the maze changes every minute",
      "but the contest is judged by ghosts", "but the message is written in emojis",
      "but the starship runs on laughter", "but the dragon only wants a hug",
      "but the curse can be lifted with a song", "but the prince is already free"
    ];

    // Pick random elements
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    const character = pick(characters);
    const setting = pick(settings);
    const conflict = pick(conflicts);
    const twist = pick(twists);

    // Build the story
    const story = `${character} ${setting} ${conflict}, ${twist}.`;

    // Generate a random background colour (light pastel)
    const hue = Math.floor(Math.random() * 360);
    const bg = `hsl(${hue}, 70%, 90%)`;

    // HTML response with favicon and selection styling
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>✨ Random Adventure Generator</title>
  <!-- Favicon: a shiny sword emoji as SVG -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>">
  <style>
    /* === Custom selection style === */
    ::selection {
      background: #e67e22;      /* warm gold-orange */
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }
    ::-moz-selection {
      background: #e67e22;
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Georgia', serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${bg};
      transition: background 0.3s;
      margin: 0;
      padding: 20px;
    }
    .card {
      max-width: 700px;
      background: white;
      border-radius: 32px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      padding: 3rem 2.5rem;
      text-align: center;
      transition: transform 0.2s;
    }
    .card:hover {
      transform: scale(1.01);
    }
    h1 {
      font-size: 2.4rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      letter-spacing: 1px;
    }
    .story {
      font-size: 1.8rem;
      line-height: 1.6;
      color: #1e2b36;
      margin: 2rem 0;
      padding: 1rem 0;
      border-top: 2px dashed #e0e0e0;
      border-bottom: 2px dashed #e0e0e0;
    }
    .refresh {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.8rem 2.2rem;
      background: #2c3e50;
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: bold;
      transition: background 0.2s, transform 0.1s;
    }
    .refresh:hover {
      background: #1a2630;
      transform: scale(1.05);
    }
    .footer {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #7f8c8d;
    }
    .footer a {
      color: #3498db;
      text-decoration: none;
    }
    @media (max-width: 500px) {
      .card { padding: 2rem 1.5rem; }
      h1 { font-size: 1.8rem; }
      .story { font-size: 1.4rem; }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>⚔️ Your Adventure</h1>
    <div class="story">${story}</div>
    <a href="#" class="refresh" onclick="location.reload(); return false;">🎲 Roll again</a>
    <div class="footer">
      <p>✨ Every refresh brings a new quest ✨</p>
    </div>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
