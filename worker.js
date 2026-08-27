// Cloudflare Worker – Random Adventure Generator
// Custom cursor + mobile optimization + loading state

export default {
  async fetch(request) {
    // =========================================================
    // DATA POOLS
    // =========================================================

    const characters = [
      "a brave knight",
      "a clever hacker",
      "a curious cat",
      "a time-travelling historian",
      "a wandering bard",
      "a retired astronaut",
      "a mischievous fairy",
      "a stoic robot",
      "a fearless pirate",
      "a young wizard",
      "a grizzled detective",
      "a cheerful chef"
    ];

    const settings = [
      "in a mystical forest",
      "on a neon-lit space station",
      "inside a giant whale",
      "at the bottom of the ocean",
      "in a forgotten library",
      "on a moving train",
      "in a dreamscape",
      "on a distant planet",
      "in a medieval castle",
      "under a waterfall"
    ];

    const conflicts = [
      "must find a lost artifact",
      "must defeat a terrible monster",
      "must solve a cryptic riddle",
      "must escape an endless maze",
      "must win a cooking contest",
      "must deliver a secret message",
      "must repair a broken starship",
      "must calm a furious dragon",
      "must break a wicked curse",
      "must rescue a kidnapped prince"
    ];

    const twists = [
      "but the artifact is actually a banana",
      "but the monster is afraid of butterflies",
      "but the riddle is just a bad pun",
      "but the maze changes every minute",
      "but the contest is judged by ghosts",
      "but the message is written in emojis",
      "but the starship runs on laughter",
      "but the dragon only wants a hug",
      "but the curse can be lifted with a song",
      "but the prince is already free"
    ];

    // =========================================================
    // RANDOM HELPERS
    // =========================================================

    const pick = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };

    const character = pick(characters);
    const setting = pick(settings);
    const conflict = pick(conflicts);
    const twist = pick(twists);

    // =========================================================
    // BUILD STORY
    // =========================================================

    const story = `${character} ${setting} ${conflict}, ${twist}.`;

    // =========================================================
    // RANDOM BACKGROUND
    // =========================================================

    const hue = Math.floor(Math.random() * 360);
    const bg = `hsl(${hue}, 70%, 90%)`;

    // =========================================================
    // HTML
    // =========================================================

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
  >

  <meta
    name="theme-color"
    content="${bg}"
  >

  <meta
    name="description"
    content="A tiny random adventure generator."
  >

  <title>✨ Random Adventure Generator</title>

  <!-- Favicon -->
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚔️</text></svg>"
  >

  <style>
    /* =========================================================
       RESET
       ========================================================= */

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      min-height: 100%;
      background: ${bg};
    }

    body {
      min-height: 100vh;
      min-height: 100dvh;

      margin: 0;

      padding:
        max(20px, env(safe-area-inset-top))
        max(20px, env(safe-area-inset-right))
        max(20px, env(safe-area-inset-bottom))
        max(20px, env(safe-area-inset-left));

      display: flex;
      align-items: center;
      justify-content: center;

      overflow-x: hidden;

      background: ${bg};

      color: #1e2b36;

      font-family:
        Georgia,
        "Times New Roman",
        serif;

      transition:
        background-color 0.35s ease;

      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /* =========================================================
       TEXT SELECTION
       ========================================================= */

    ::selection {
      background: #e67e22;
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }

    ::-moz-selection {
      background: #e67e22;
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }

    /* =========================================================
       CUSTOM CURSOR
       Only enabled on devices that actually have a pointer.
       ========================================================= */

    @media (hover: hover) and (pointer: fine) {
      html,
      body,
      a,
      button {
        cursor: none;
      }

      .cursor-dot,
      .cursor-ring {
        position: fixed;

        top: 0;
        left: 0;

        pointer-events: none;

        z-index: 99999;

        border-radius: 50%;

        transform:
          translate3d(-50%, -50%, 0);

        will-change: transform;

        opacity: 0;

        transition:
          opacity 0.18s ease,
          width 0.18s ease,
          height 0.18s ease,
          background-color 0.18s ease,
          border-color 0.18s ease;
      }

      .cursor-dot {
        width: 7px;
        height: 7px;

        background: #1e2b36;
      }

      .cursor-ring {
        width: 34px;
        height: 34px;

        border: 1.5px solid rgba(30, 43, 54, 0.65);

        background: transparent;
      }

      body.cursor-visible .cursor-dot,
      body.cursor-visible .cursor-ring {
        opacity: 1;
      }

      body.cursor-hover .cursor-ring {
        width: 48px;
        height: 48px;

        border-color: #e67e22;

        background: rgba(230, 126, 34, 0.08);
      }

      body.cursor-hover .cursor-dot {
        background: #e67e22;
      }

      body.cursor-click .cursor-ring {
        width: 28px;
        height: 28px;
      }
    }

    /* =========================================================
       PAGE WRAPPER
       ========================================================= */

    .page {
      width: 100%;
      max-width: 760px;

      display: flex;
      justify-content: center;
    }

    /* =========================================================
       CARD
       ========================================================= */

    .card {
      width: 100%;

      background: rgba(255, 255, 255, 0.97);

      border-radius: 32px;

      padding:
        clamp(28px, 5vw, 56px)
        clamp(20px, 5vw, 48px);

      text-align: center;

      box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.14);

      border:
        1px solid rgba(255, 255, 255, 0.6);

      transition:
        transform 0.22s ease,
        box-shadow 0.22s ease,
        opacity 0.25s ease;
    }

    @media (hover: hover) and (pointer: fine) {
      .card:hover {
        transform: translateY(-2px);
        box-shadow:
          0 24px 70px rgba(0, 0, 0, 0.16);
      }
    }

    /* =========================================================
       TITLE
       ========================================================= */

    h1 {
      color: #2c3e50;

      font-size:
        clamp(1.75rem, 6vw, 2.55rem);

      line-height: 1.2;

      letter-spacing: 0.5px;

      margin-bottom:
        clamp(12px, 3vw, 20px);
    }

    /* =========================================================
       STORY
       ========================================================= */

    .story {
      margin:
        clamp(22px, 5vw, 34px)
        0;

      padding:
        clamp(18px, 4vw, 26px)
        0;

      border-top:
        2px dashed #e0e0e0;

      border-bottom:
        2px dashed #e0e0e0;

      color: #1e2b36;

      font-size:
        clamp(1.3rem, 5vw, 1.85rem);

      line-height: 1.6;

      overflow-wrap: anywhere;
    }

    /* =========================================================
       BUTTON
       ========================================================= */

    .refresh {
      display: inline-flex;

      align-items: center;
      justify-content: center;
      gap: 10px;

      min-height: 52px;

      margin-top: 6px;

      padding:
        13px
        clamp(22px, 6vw, 34px);

      background: #2c3e50;

      color: #ffffff;

      text-decoration: none;

      border-radius: 999px;

      font-family: inherit;

      font-size:
        clamp(1rem, 3.5vw, 1.1rem);

      font-weight: 700;

      line-height: 1;

      -webkit-tap-highlight-color: transparent;

      touch-action: manipulation;

      transition:
        background-color 0.18s ease,
        transform 0.18s ease,
        box-shadow 0.18s ease,
        opacity 0.18s ease;
    }

    .refresh:hover {
      background: #1a2630;

      transform: translateY(-2px);

      box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.16);
    }

    .refresh:active {
      transform: scale(0.97);
    }

    .refresh:focus-visible {
      outline: 3px solid rgba(52, 152, 219, 0.45);

      outline-offset: 4px;
    }

    .refresh.is-loading {
      pointer-events: none;
      opacity: 0.72;
    }

    .refresh-label {
      display: inline-block;
    }

    /* =========================================================
       LOADING SPINNER
       Based on the supplied SVG animation.
       ========================================================= */

    .loading-overlay {
      position: fixed;

      inset: 0;

      z-index: 5000;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 24px;

      background: rgba(255, 255, 255, 0.76);

      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);

      opacity: 0;
      visibility: hidden;
      pointer-events: none;

      transition:
        opacity 0.18s ease,
        visibility 0.18s ease;
    }

    .loading-overlay.is-visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .loading-spinner {
      width: 96px;
      height: 96px;

      display: block;

      color: #2c3e50;

      --rate: 1;
      --dur: 2.2s;
      --n: 24;
    }

    .cor-spoke {
      transform-box: view-box;
      transform-origin: center;

      transform:
        rotate(var(--a));
    }

    .cor-tip {
      fill: currentColor;

      transform-box: fill-box;
      transform-origin: 50% 100%;

      transform:
        scaleY(.26);

      opacity: .24;

      animation:
        cor-swell
        calc(var(--dur) * var(--rate, 1))
        ease-in-out
        infinite;

      animation-delay:
        calc(
          var(--i)
          * var(--dur)
          * var(--rate, 1)
          / var(--n)
          * -1
        );
    }

    .cor-hub {
      stroke: currentColor;
      stroke-width: 1;
      opacity: .22;
    }

    @keyframes cor-swell {
      0%,
      100% {
        transform: scaleY(.26);
        opacity: .24;
      }

      50% {
        transform: scaleY(1);
        opacity: 1;
      }
    }

    /* =========================================================
       FOOTER
       ========================================================= */

    .footer {
      margin-top: 24px;

      color: #7f8c8d;

      font-size:
        clamp(0.82rem, 3vw, 0.92rem);

      line-height: 1.5;
    }

    /* =========================================================
       MOBILE
       ========================================================= */

    @media (max-width: 600px) {
      body {
        align-items: center;

        padding:
          max(14px, env(safe-area-inset-top))
          max(14px, env(safe-area-inset-right))
          max(14px, env(safe-area-inset-bottom))
          max(14px, env(safe-area-inset-left));
      }

      .page {
        width: 100%;
      }

      .card {
        border-radius: 24px;

        padding:
          28px
          20px;

        box-shadow:
          0 16px 40px rgba(0, 0, 0, 0.12);
      }

      .story {
        line-height: 1.55;
      }

      .refresh {
        width: 100%;
        max-width: 320px;
      }

      .loading-spinner {
        width: 82px;
        height: 82px;
      }
    }

    /* =========================================================
       VERY SMALL PHONES
       ========================================================= */

    @media (max-width: 360px) {
      .card {
        padding:
          24px
          16px;
      }

      h1 {
        font-size: 1.6rem;
      }

      .story {
        font-size: 1.18rem;
      }

      .refresh {
        min-height: 50px;
      }
    }

    /* =========================================================
       REDUCED MOTION
       ========================================================= */

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
      }

      .card,
      .refresh,
      .loading-overlay {
        transition: none !important;
      }

      .cor-tip {
        animation: none;

        transform:
          scaleY(var(--rest));

        opacity:
          calc(.22 + var(--rest) * .7);
      }
    }

    /* =========================================================
       DARK SYSTEM PREFERENCE
       ========================================================= */

    @media (prefers-color-scheme: dark) {
      .loading-overlay {
        background:
          rgba(15, 16, 18, 0.78);
      }

      .loading-spinner {
        color: #f5f5f7;
      }
    }
  </style>
</head>

<body>

  <!-- =======================================================
       CUSTOM CURSOR
       ======================================================= -->

  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"></div>

  <!-- =======================================================
       MAIN CONTENT
       ======================================================= -->

  <main class="page">

    <section class="card">

      <h1>⚔️ Your Adventure</h1>

      <div class="story">
        ${story}
      </div>

      <a
        href="#"
        class="refresh"
        id="rollAgain"
        aria-label="Roll another adventure"
      >
        <span class="refresh-icon">🎲</span>
        <span class="refresh-label">Roll again</span>
      </a>

      <div class="footer">
        <p>✨ Every roll brings a new quest ✨</p>
      </div>

    </section>

  </main>

  <!-- =======================================================
       LOADING OVERLAY
       ======================================================= -->

  <div
    class="loading-overlay"
    id="loadingOverlay"
    aria-hidden="true"
  >

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="loading-spinner"
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Loading"
    >

      <g class="cor-spoke" style="--a:0deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:0;--rest:1.0000"
        />
      </g>

      <g class="cor-spoke" style="--a:15deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:1;--rest:0.9881"
        />
      </g>

      <g class="cor-spoke" style="--a:30deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:2;--rest:0.9531"
        />
      </g>

      <g class="cor-spoke" style="--a:45deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:3;--rest:0.8975"
        />
      </g>

      <g class="cor-spoke" style="--a:60deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:4;--rest:0.8250"
        />
      </g>

      <g class="cor-spoke" style="--a:75deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:5;--rest:0.7406"
        />
      </g>

      <g class="cor-spoke" style="--a:90deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:6;--rest:0.6500"
        />
      </g>

      <g class="cor-spoke" style="--a:105deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:7;--rest:0.5594"
        />
      </g>

      <g class="cor-spoke" style="--a:120deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:8;--rest:0.4750"
        />
      </g>

      <g class="cor-spoke" style="--a:135deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:9;--rest:0.4025"
        />
      </g>

      <g class="cor-spoke" style="--a:150deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:10;--rest:0.3469"
        />
      </g>

      <g class="cor-spoke" style="--a:165deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:11;--rest:0.3119"
        />
      </g>

      <g class="cor-spoke" style="--a:180deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:12;--rest:0.3000"
        />
      </g>

      <g class="cor-spoke" style="--a:195deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:13;--rest:0.3119"
        />
      </g>

      <g class="cor-spoke" style="--a:210deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:14;--rest:0.3469"
        />
      </g>

      <g class="cor-spoke" style="--a:225deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:15;--rest:0.4025"
        />
      </g>

      <g class="cor-spoke" style="--a:240deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:16;--rest:0.4750"
        />
      </g>

      <g class="cor-spoke" style="--a:255deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:17;--rest:0.5594"
        />
      </g>

      <g class="cor-spoke" style="--a:270deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:18;--rest:0.6500"
        />
      </g>

      <g class="cor-spoke" style="--a:285deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:19;--rest:0.7406"
        />
      </g>

      <g class="cor-spoke" style="--a:300deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:20;--rest:0.8250"
        />
      </g>

      <g class="cor-spoke" style="--a:315deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:21;--rest:0.8975"
        />
      </g>

      <g class="cor-spoke" style="--a:330deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:22;--rest:0.9531"
        />
      </g>

      <g class="cor-spoke" style="--a:345deg">
        <rect
          class="cor-tip"
          x="31"
          y="2"
          width="2"
          height="19.1"
          rx="1"
          style="--i:23;--rest:0.9881"
        />
      </g>

      <circle
        class="cor-hub"
        cx="32"
        cy="32"
        r="5.8"
      />

    </svg>

  </div>

  <!-- =======================================================
       JAVASCRIPT
       ======================================================= -->

  <script>
    (() => {
      "use strict";

      const body = document.body;
      const button = document.getElementById("rollAgain");
      const overlay = document.getElementById("loadingOverlay");

      /* =======================================================
         ROLL AGAIN / LOADING
         ======================================================= */

      button.addEventListener("click", (event) => {
        event.preventDefault();

        if (button.classList.contains("is-loading")) {
          return;
        }

        button.classList.add("is-loading");

        overlay.classList.add("is-visible");
        overlay.setAttribute("aria-hidden", "false");

        button.setAttribute("aria-busy", "true");

        /*
         * Let the browser paint the loading overlay first.
         * Then reload the page and let the Worker generate
         * another random adventure.
         */
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.location.reload();
          }, 120);
        });
      });

      /* =======================================================
         CUSTOM CURSOR
         ======================================================= */

      const hasFinePointer =
        window.matchMedia(
          "(hover: hover) and (pointer: fine)"
        ).matches;

      if (hasFinePointer) {
        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;

        let visible = false;

        /*
         * Small dot = immediate position
         * Ring = slightly delayed for a smoother effect
         */
        const updateCursor = () => {
          dot.style.transform =
            "translate3d(" +
            mouseX +
            "px, " +
            mouseY +
            "px, 0) translate(-50%, -50%)";

          ringX += (mouseX - ringX) * 0.16;
          ringY += (mouseY - ringY) * 0.16;

          ring.style.transform =
            "translate3d(" +
            ringX +
            "px, " +
            ringY +
            "px, 0) translate(-50%, -50%)";

          requestAnimationFrame(updateCursor);
        };

        updateCursor();

        window.addEventListener(
          "mousemove",
          (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            if (!visible) {
              visible = true;

              body.classList.add("cursor-visible");

              dot.style.transform =
                "translate3d(" +
                mouseX +
                "px, " +
                mouseY +
                "px, 0) translate(-50%, -50%)";

              ringX = mouseX;
              ringY = mouseY;
            }
          },
          { passive: true }
        );

        document.addEventListener(
          "mouseleave",
          () => {
            body.classList.remove("cursor-visible");
          }
        );

        document.addEventListener(
          "mouseenter",
          () => {
            body.classList.add("cursor-visible");
          }
        );

        /*
         * Interactive hover state
         */
        const interactiveElements =
          document.querySelectorAll(
            "a, button, .refresh"
          );

        interactiveElements.forEach((element) => {
          element.addEventListener("mouseenter", () => {
            body.classList.add("cursor-hover");
          });

          element.addEventListener("mouseleave", () => {
            body.classList.remove("cursor-hover");
          });
        });

        /*
         * Click feedback
         */
        document.addEventListener("mousedown", () => {
          body.classList.add("cursor-click");
        });

        document.addEventListener("mouseup", () => {
          body.classList.remove("cursor-click");
        });

        document.addEventListener("blur", () => {
          body.classList.remove("cursor-visible");
        });
      }

      /* =======================================================
         PREVENT DOUBLE ACTIVATION
         ======================================================= */

      window.addEventListener("pageshow", () => {
        button.classList.remove("is-loading");

        button.removeAttribute("aria-busy");

        overlay.classList.remove("is-visible");
        overlay.setAttribute("aria-hidden", "true");
      });

    })();
  </script>

</body>
</html>`;

    // =========================================================
    // RESPONSE
    // =========================================================

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",

        // Don't cache the generated adventure.
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  }
};
