# ⚔️ Random Adventure Generator

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/hosseinb1111/random-adventure-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A fun and lightweight **Cloudflare Worker** that generates a unique, whimsical mini-adventure every time you visit or refresh the page.

Perfect for curing writer's block, generating quick RPG session seeds, or simply giving your imagination a playful nudge.

🔗 **[Try it live](https://old-mountain-ed9b.imtheonlyone.workers.dev/)**

![Screenshot of the Adventure Generator](https://raw.githubusercontent.com/hosseinb1111/Random-Adventure-Generator/refs/heads/main/example.png)

---

## ✨ Features

* 🎲 **Random Adventure Generation**
  Combines four different elements to create a completely new adventure every time.

* 🧙 **Random Characters**
  Choose from characters such as knights, hackers, wizards, pirates, robots, and more.

* 🌍 **Random Settings**
  Adventures can take place in mystical forests, space stations, medieval castles, distant planets, and other locations.

* ⚔️ **Random Conflicts**
  Characters receive a random objective or problem they must overcome.

* 🌀 **Unexpected Twists**
  Every adventure gets a random twist, from dragons wanting hugs to artifacts secretly being bananas.

* 🎨 **Dynamic Background**
  A random pastel HSL background color is generated on every page load.

* ⚔️ **Custom Favicon**
  Uses an inline SVG containing a sword emoji, so no external image or asset is required.

* ✨ **Custom Text Selection**
  Selected text uses a custom gold-orange highlight.

* 📱 **Responsive Design**
  Works on desktops, tablets, and mobile devices.

* ⚡ **Zero Dependencies**
  Built entirely with vanilla JavaScript and HTML.

* 🌐 **Cloudflare Edge Runtime**
  Runs directly on Cloudflare Workers.

---

## 🛠️ How It Works

The project is a single Cloudflare Worker that generates and serves an HTML page.

Every request follows this process:

```text
Request
   ↓
Choose random character
   ↓
Choose random setting
   ↓
Choose random conflict
   ↓
Choose random twist
   ↓
Build adventure
   ↓
Generate random background color
   ↓
Return HTML page
```

The adventure is created from four JavaScript arrays.

### Characters

Examples:

```text
a brave knight
a clever hacker
a curious cat
a time-travelling historian
a wandering bard
a retired astronaut
a mischievous fairy
a stoic robot
```

### Settings

Examples:

```text
in a mystical forest
on a neon-lit space station
inside a giant whale
at the bottom of the ocean
in a forgotten library
on a distant planet
```

### Conflicts

Examples:

```text
must find a lost artifact
must defeat a terrible monster
must solve a cryptic riddle
must escape an endless maze
must repair a broken starship
```

### Twists

Examples:

```text
but the artifact is actually a banana
but the monster is afraid of butterflies
but the riddle is just a bad pun
but the dragon only wants a hug
but the starship runs on laughter
```

The four randomly selected values are combined into a single adventure.

For example:

> a brave knight in a mystical forest must find a lost artifact, but the artifact is actually a banana.

---

## 🚀 Deployment

There are two easy ways to deploy the project.

### Option 1: Deploy with Cloudflare

The easiest way is to use the **Deploy to Cloudflare Workers** button at the top of this README.

You can also deploy manually through the Cloudflare Dashboard.

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).

2. Go to **Workers & Pages**.

3. Create a new **Worker**.

4. Give your Worker a name, for example:

```text
random-adventure-generator
```

5. Open the Worker code editor.

6. Replace the default code with the contents of:

```text
src/index.js
```

7. Save and deploy the Worker.

8. Open your Worker URL.

Your adventure generator should now be live.

### Option 2: Deploy with Wrangler

If you prefer using the command line, you can deploy the project with Wrangler.

Install Wrangler:

```bash
npm install -g wrangler
```

Log in to Cloudflare:

```bash
wrangler login
```

Then deploy:

```bash
wrangler deploy
```

---

## 📁 Project Structure

```text
random-adventure-generator/
│
├── src/
│   └── index.js
│
├── example.png
├── README.md
├── LICENSE
└── wrangler.toml
```

### `src/index.js`

Contains the complete Cloudflare Worker, including:

* Adventure generation
* HTML
* CSS
* Favicon
* Responsive design

### `example.png`

Screenshot of the deployed application displayed in this README.

### `README.md`

Project documentation.

### `LICENSE`

The project's MIT License.

### `wrangler.toml`

Optional Wrangler configuration used when deploying through the CLI.

---

## ⚙️ Wrangler Configuration

If you're using Wrangler, create a `wrangler.toml` file:

```toml
name = "random-adventure-generator"
main = "src/index.js"
compatibility_date = "2024-12-18"
```

You can change the `name` to whatever you want your Worker to be called.

---

## 🎨 Customization

Almost everything in the project can be customized directly from `src/index.js`.

### Add Your Own Characters

Find:

```javascript
const characters = [
```

Then add your own characters:

```javascript
const characters = [
  "a brave knight",
  "a clever hacker",
  "a mysterious programmer",
  "your own character"
];
```

### Add Your Own Settings

For example:

```javascript
const settings = [
  "inside an abandoned spaceship",
  "in a cyberpunk city",
  "inside a haunted university",
  "on Mars"
];
```

### Add Your Own Conflicts

For example:

```javascript
const conflicts = [
  "must survive a zombie apocalypse",
  "must find a missing computer",
  "must escape a collapsing space station"
];
```

### Add Your Own Twists

For example:

```javascript
const twists = [
  "but nobody remembers why they are there",
  "but the enemy is actually their future self",
  "but everything is controlled by a cat"
];
```

---

## 🎨 Changing the Background

The background color is generated dynamically using HSL:

```javascript
const hue = Math.floor(Math.random() * 360);
const bg = `hsl(${hue}, 70%, 90%)`;
```

This means every page load can have a different pastel background.

If you prefer a fixed color, replace:

```css
background: ${bg};
```

with something like:

```css
background: #f0f4f8;
```

---

## ⚔️ Changing the Favicon

The project uses an inline SVG favicon containing a sword emoji:

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>">
```

You can replace the emoji with something else, such as:

```text
🎲
🐉
🚀
🧙
🪙
👾
```

For example:

```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎲</text></svg>">
```

---

## ✨ Changing the Selection Color

The selected-text appearance is controlled by:

```css
::selection {
  background: #e67e22;
  color: #ffffff;
}
```

You can change the colors to match your own design.

For example:

```css
::selection {
  background: #8e44ad;
  color: #ffffff;
}
```

---

## 📱 Responsive Design

The generator includes a mobile breakpoint:

```css
@media (max-width: 500px)
```

This adjusts the card padding, heading size, and adventure text size so the interface remains comfortable on smaller screens.

---

## 🔒 Privacy

This project does not require:

* User accounts
* Databases
* API keys
* External APIs
* Cookies
* Personal information

All adventure generation happens inside the Cloudflare Worker.

---

## ⚡ Performance

The project is intentionally small and dependency-free.

There are no JavaScript frameworks, external libraries, databases, or API requests required to generate an adventure.

This makes it well suited for deployment on Cloudflare Workers.

---

## 🤝 Contributing

Contributions are welcome.

You can contribute by:

* Adding new characters
* Adding new locations
* Adding new conflicts
* Adding new twists
* Improving the UI
* Improving accessibility
* Fixing bugs
* Improving mobile support
* Adding new features

To contribute:

```bash
git clone https://github.com/hosseinb1111/random-adventure-generator.git
cd random-adventure-generator
git checkout -b feature/my-new-feature
```

Make your changes, then commit them:

```bash
git add .
git commit -m "Add new adventure prompts"
git push origin feature/my-new-feature
```

Then open a Pull Request on GitHub.

---

## 📄 License

This project is licensed under the **MIT License**.

You can use, modify, distribute, and build upon the project according to the terms of the license.

See the [LICENSE](LICENSE) file for the complete license text.

---

## 💬 Feedback

Found a bug, have an idea, or came up with a ridiculous adventure prompt?

Feel free to open an issue or submit a pull request.

If you enjoy the project, consider giving the repository a ⭐ on GitHub.

---

Made with ⚔️, 🎲, and a little bit of chaos.
