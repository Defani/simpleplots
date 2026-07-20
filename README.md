# Simple Plots

A single-page, no-backend chart builder for publication-ready figures. Paste or import your data, pick a chart type, style every element, and export a print-quality PNG or SVG. Runs entirely in the browser.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Plotly.js](https://img.shields.io/badge/Plotly.js-3F4F75?logo=plotly&logoColor=white)
![Backend](https://img.shields.io/badge/Backend-None-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## Live demo

Once deployed to GitHub Pages:

```
https://<your-username>.github.io/<your-repo>/
```

## Features

- **11 chart types**: grouped bar, stacked bar, line, area, scatter, pie, donut, histogram, box plot, violin plot, heatmap
- **Data input**: paste tab or comma-separated data, or import a CSV/TSV file directly
- **Per-series controls**: toggle visibility, pick a custom color, rename the series label, choose a fill pattern
- **Visual style modes**: Color, Color + Pattern, or Pattern (grayscale), so figures stay readable in print or black-and-white
- **30 built-in color palettes**: Matplotlib (tab10, tab20, tab20b, tab20c), ColorBrewer (Set1-3, Paired, Dark2, Accent, Pastel1-2, Spectral), perceptual scales (Viridis, Plasma, Inferno, Magma, Cividis, Coolwarm), Seaborn (Deep, Muted, Bright, Pastel, Colorblind), plus five custom earth-tone palettes
- **Typography**: 30 fonts to choose from (including Cambria, Georgia, Garamond, Segoe UI, Inter, Poppins, Montserrat, and more), with separate font controls for the title/subtitle and for axes/legend/ticks
- **Legend controls**: show/hide, 7 position presets (top-left/center/right, bottom-center, left/right-middle, inside top-right), 1 or 2 columns, optional border box
- **Outline controls**: marker/bar outline toggle, plus an optional full frame border around the chart
- **Value labels**: show or hide data values directly on the chart
- **Custom dimensions**: set exact chart width and height in pixels
- **Export**: PNG at 150, 300, or 500 DPI, or vector SVG
- **Light/dark UI theme** toggle (dark is the default)
- **Zero dependencies to install**: Plotly.js is bundled locally, no build step, no server required

## Getting started

### Option 1: Open locally

1. Download all three files into the same folder:
   - `chart_builder.html`
   - `chart_builder.js`
   - `plotly-cartesian.min.js`
2. Open `chart_builder.html` in any modern browser.

### Option 2: Deploy with GitHub Pages

1. Push all three files to the root of a GitHub repository (they must stay in the same folder, since the HTML loads the other two via relative paths).
2. Optionally rename `chart_builder.html` to `index.html` for a cleaner URL.
3. Go to **Settings → Pages**, choose the branch and folder, and save.
4. Your app will be live at `https://<username>.github.io/<repo>/`.

## Data format

The first column is the category (x-axis label), and every column after that is a data series:

```
Plot	Species A	Species B	Species C
P1	42.3	33.1	58.9
P2	38.7	40.5	63.2
P3	51.2	27.9	49.7
```

Paste tab-separated data (e.g. copied straight from Excel or Google Sheets), comma-separated CSV, or use the **Import CSV** button to load a `.csv`/`.tsv`/`.txt` file.

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

- [Plotly.js](https://plotly.com/javascript/) for all chart rendering
- Vanilla HTML, CSS, and JavaScript — no frameworks, no build tools

## License

Released under the [MIT License](./LICENSE).

## Author

Built by [Defani Arman Alfitriansyah](https://github.com/Defani).
