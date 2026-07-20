# Simple Plots

A single-page, no-backend chart builder for publication-ready figures. Paste or import your data, pick a chart type, style every element, and export a print-quality PNG or SVG. It's a static web app — everything runs entirely in your browser, hosted for free on **GitHub Pages**, with no server, no database, and no account required.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Plotly.js](https://img.shields.io/badge/Plotly.js-3F4F75?logo=plotly&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?logo=googlefonts&logoColor=white)
![MathJax](https://img.shields.io/badge/MathJax_(LaTeX)-1B3E6F?logo=latex&logoColor=white)
![Papa Parse](https://img.shields.io/badge/CSV%2FTSV_Parsing-Papa_Parse-00A98F)
![Backend](https://img.shields.io/badge/Backend-None-brightgreen)
![Powered by GitHub Pages](https://img.shields.io/badge/Powered_by-GitHub_Pages-222?logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

## What is this?

Simple Plots is a **client-side-only web app**: open the page (or visit the GitHub Pages link below) and the entire tool — data parsing, chart rendering, styling, and export — happens locally in your browser tab. Nothing you paste or upload is ever sent to a server, because there is no server. The app is just static HTML, CSS, and JavaScript, deployed straight from this repository via GitHub Pages, which is why it costs nothing to run and needs zero setup.

## Interface
<img width="1919" height="1024" alt="Screenshot 2026-07-20 142211" src="https://github.com/user-attachments/assets/5616280e-e019-4959-a6aa-8ee717a2f014" />

Once deployed to GitHub Pages:

https://defani.github.io/simpleplots/


## Features

- **11 chart types**: grouped bar, stacked bar, line, area, scatter, pie, donut, histogram, box plot, violin plot, heatmap
- **Data input**: paste tab or comma-separated data, or import a CSV/TSV file directly — parsed with Papa Parse, so quoted fields, embedded commas, and escaped quotes are all handled correctly
- **Per-series controls**: toggle visibility, pick a custom color, rename the series label, choose a fill pattern
- **Visual style modes**: Color, Color + Pattern, or Pattern (grayscale), so figures stay readable in print or black-and-white
- **30 built-in color palettes**: Matplotlib (tab10, tab20, tab20b, tab20c), ColorBrewer (Set1-3, Paired, Dark2, Accent, Pastel1-2, Spectral), perceptual scales (Viridis, Plasma, Inferno, Magma, Cividis, Coolwarm), Seaborn (Deep, Muted, Bright, Pastel, Colorblind), plus five custom earth-tone palettes
- **Typography**: 30 fonts to choose from (including Cambria, Georgia, Garamond, Segoe UI, Inter, Poppins, Montserrat, and more, served via Google Fonts), with separate font controls for the title/subtitle and for axes/legend/ticks
- **LaTeX support**: wrap chart/axis titles in `$...$` to render formulas (e.g. `$R^2 = 0.95$`, `$CO_2$`) via MathJax, or use the built-in Ω symbol picker for units and special characters
- **Title & subtitle**: independent font, size, bold/italic, and alignment controls, plus an adjustable spacing gap between the title and subtitle
- **Axis range control**: auto (fit to data) or custom min/max for both the X-axis and Y-axis
- **Legend controls**: show/hide, 7 position presets (top-left/center/right, bottom-center, left/right-middle, inside top-right), 1 to 4 columns, an optional legend title/label, and an optional border box
- **Line thickness controls**: independently adjustable frame border width and axis line width
- **Outline controls**: marker/bar outline toggle, plus an optional full frame border around the chart
- **Value labels**: show or hide data values directly on the chart
- **Custom dimensions**: set exact chart width and height in pixels
- **Export**: PNG at 150, 300, or 500 DPI, or vector SVG
- **Light/dark UI theme** toggle (dark is the default)
- **Zero install for users**: Plotly.js is bundled locally; Google Fonts, MathJax, and Papa Parse load from CDN — no build step, no server, no signup required



## Project structure

```
.
├── chart_builder.html        # App shell, layout, and styling
├── chart_builder.js          # App logic: state, parsing, rendering, export
├── plotly-cartesian.min.js   # Bundled Plotly.js (bar, box, heatmap, histogram, pie, scatter, violin, etc.)
├── LICENSE                   # MIT license
└── README.md
```

## Built with

- [Plotly.js](https://plotly.com/javascript/) — all chart rendering, bundled locally in this repo
- [Papa Parse](https://www.papaparse.com/) — robust CSV/TSV parsing for pasted and imported data
- [MathJax](https://www.mathjax.org/) — renders LaTeX (`$...$`) in chart titles and subtitles
- [Google Fonts](https://fonts.google.com/) — the 30 typography options available in the style panel
- Vanilla HTML, CSS, and JavaScript — no frameworks, no build tools

## Acknowledgments

This project wouldn't work the way it does without the open-source and free-hosting tools it's built on:

- **[Plotly.js](https://plotly.com/javascript/)** for the entire charting engine — every chart type, the interactive preview, and the PNG/SVG export all come from it
- **[Papa Parse](https://www.papaparse.com/)** for making CSV/TSV import reliable, even with messy real-world data
- **[MathJax](https://www.mathjax.org/)** for turning plain `$...$` text into proper LaTeX-rendered formulas
- **[Google Fonts](https://fonts.google.com/)** for the free web fonts used throughout the typography controls
- **[GitHub Pages](https://pages.github.com/)** for hosting this app for free, straight from the repository, with no server to maintain
- **[cdnjs / Cloudflare](https://cdnjs.com/)** for serving MathJax and Papa Parse reliably to every visitor
- **[Shields.io](https://shields.io/)** for the badges at the top of this README
- Everyone who opened an issue, suggested a feature, or gave feedback on the UI — this tool is better because of that input

## License

Released under the [MIT License](./LICENSE).

## Author

Built by [Defani Arman Alfitriansyah](https://github.com/Defani).
