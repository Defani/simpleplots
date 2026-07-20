/* ===================== FONTS (30) ===================== */
var FONTS = [
  {label:'Cambria', value:'Cambria, Georgia, serif'},
  {label:'Georgia', value:'Georgia, serif'},
  {label:'Times New Roman', value:"'Times New Roman', Times, serif"},
  {label:'Palatino', value:"'Palatino Linotype', Palatino, serif"},
  {label:'Book Antiqua', value:"'Book Antiqua', Palatino, serif"},
  {label:'Garamond', value:'Garamond, serif'},
  {label:'Constantia', value:'Constantia, serif'},
  {label:'Courier New', value:"'Courier New', Courier, monospace"},
  {label:'Consolas', value:'Consolas, monospace'},
  {label:'Calibri', value:'Calibri, sans-serif'},
  {label:'Candara', value:'Candara, sans-serif'},
  {label:'Corbel', value:'Corbel, sans-serif'},
  {label:'Segoe UI', value:"'Segoe UI', sans-serif"},
  {label:'Arial', value:'Arial, Helvetica, sans-serif'},
  {label:'Helvetica', value:'Helvetica, Arial, sans-serif'},
  {label:'Verdana', value:'Verdana, sans-serif'},
  {label:'Tahoma', value:'Tahoma, sans-serif'},
  {label:'Trebuchet MS', value:"'Trebuchet MS', sans-serif"},
  {label:'Century Gothic', value:"'Century Gothic', sans-serif"},
  {label:'Inter', value:"'Inter', sans-serif"},
  {label:'Poppins', value:"'Poppins', sans-serif"},
  {label:'Roboto', value:"'Roboto', sans-serif"},
  {label:'Nunito', value:"'Nunito', sans-serif"},
  {label:'Lato', value:"'Lato', sans-serif"},
  {label:'Merriweather', value:"'Merriweather', serif"},
  {label:'Playfair Display', value:"'Playfair Display', serif"},
  {label:'Montserrat', value:"'Montserrat', sans-serif"},
  {label:'Raleway', value:"'Raleway', sans-serif"},
  {label:'Source Sans Pro', value:"'Source Sans Pro', sans-serif"},
  {label:'Quicksand', value:"'Quicksand', sans-serif"}
];

/* ===================== PALETTES (30) ===================== */
var PALETTES = [
  {name:'Mangrove (default)', colors:['#2f6360','#c9a66b','#8a5a44','#5c7a99','#a5402f','#6b6b3a']},
  {name:'Forest Canopy', colors:['#1e4d3a','#3d7a5c','#6ba368','#a4c95f','#d9c25c','#8a6b3d']},
  {name:'Ocean Depth', colors:['#0b3d59','#1a6b8a','#3aa1a8','#7bc9b8','#c4e5cf','#f0e6b8']},
  {name:'Sunset Clay', colors:['#5c2a1a','#a5402f','#d9713f','#e8a944','#f2cf7a','#c9a66b']},
  {name:'Autumn Harvest', colors:['#6b3d2e','#a5622f','#c98b3a','#d9b054','#8a9b4e','#4d5c3a']},
  {name:'Matplotlib tab10', colors:['#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd','#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf']},
  {name:'Matplotlib tab20', colors:['#1f77b4','#aec7e8','#ff7f0e','#ffbb78','#2ca02c','#98df8a','#d62728','#ff9896','#9467bd','#c5b0d5','#8c564b','#c49c94','#e377c2','#f7b6d2','#7f7f7f','#c7c7c7','#bcbd22','#dbdb8d','#17becf','#9edae5']},
  {name:'Matplotlib tab20b', colors:['#393b79','#5254a3','#6b6ecf','#9c9ede','#637939','#8ca252','#b5cf6b','#cedb9c','#8c6d31','#bd9e39','#e7ba52','#e7cb94']},
  {name:'Matplotlib tab20c', colors:['#3182bd','#6baed6','#9ecae1','#c6dbef','#e6550d','#fd8d3c','#fdae6b','#fdd0a2','#31a354','#74c476','#a1d99b','#c7e9c0']},
  {name:'ColorBrewer Set1', colors:['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999']},
  {name:'ColorBrewer Set2', colors:['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3']},
  {name:'ColorBrewer Set3', colors:['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f']},
  {name:'ColorBrewer Paired', colors:['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928']},
  {name:'ColorBrewer Dark2', colors:['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666']},
  {name:'ColorBrewer Accent', colors:['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17','#666666']},
  {name:'ColorBrewer Pastel1', colors:['#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffffcc','#e5d8bd','#fddaec','#f2f2f2']},
  {name:'ColorBrewer Pastel2', colors:['#b3e2cd','#fdcdac','#cbd5e8','#f4cae4','#e6f5c9','#fff2ae','#f1e2cc','#cccccc']},
  {name:'ColorBrewer Spectral', colors:['#9e0142','#d53e4f','#f46d43','#fdae61','#fee08b','#e6f598','#abdda4','#66c2a5','#3288bd']},
  {name:'Viridis', colors:['#440154','#46327e','#365c8d','#277f8e','#1fa187','#4ac16d','#a0da39','#fde725']},
  {name:'Plasma', colors:['#0d0887','#5c01a6','#9411a1','#cc4778','#f0784f','#fdae32','#f5e720']},
  {name:'Inferno', colors:['#000004','#420a68','#932667','#dd513a','#fca50a','#fcffa4']},
  {name:'Magma', colors:['#000004','#3b0f70','#8c2981','#de4968','#fe9f6d','#fcfdbf']},
  {name:'Cividis', colors:['#00204d','#213d6b','#555b6c','#7b7a77','#a59c74','#d9d571','#ffea46']},
  {name:'Coolwarm', colors:['#3b4cc0','#7396f5','#b9cfff','#f7f7f7','#f6a889','#e26952','#b40426']},
  {name:'Seaborn Deep', colors:['#4c72b0','#dd8452','#55a868','#c44e52','#8172b3','#937860','#da8bc3','#8c8c8c','#ccb974','#64b5cd']},
  {name:'Seaborn Muted', colors:['#4878d0','#ee854a','#6acc64','#d65f5f','#956cb4','#8c613c','#dc7ec0','#797979','#d5bb67','#82c6e2']},
  {name:'Seaborn Bright', colors:['#023eff','#ff7c00','#1ac938','#e8000b','#8b2be2','#9f4800','#f14cc1','#a3a3a3','#ffc400','#00d7ff']},
  {name:'Seaborn Pastel', colors:['#a1c9f4','#ffb482','#8de5a1','#ff9f9b','#d0bbff','#debb9b','#fab0e4','#cfcfcf','#fffea3','#b9f2f0']},
  {name:'Seaborn Colorblind', colors:['#0173b2','#de8f05','#029e73','#d55e00','#cc78bc','#ca9161','#fbafe4','#949494','#ece133','#56b4e9']}
];

/* native plotly pattern shapes, used whenever style includes patterns */
var HATCH_DEFS = [
  {shape:'', kind:'solid'},
  {shape:'/', kind:'diag', angle:45},
  {shape:'\\', kind:'diag', angle:-45},
  {shape:'x', kind:'cross'},
  {shape:'-', kind:'lines', angle:0},
  {shape:'|', kind:'lines', angle:90},
  {shape:'+', kind:'cross'},
  {shape:'.', kind:'dots'}
];
var DASH_CYCLE = ['solid','dot','dash','longdash','dashdot','longdashdot'];
var SYMBOL_CYCLE = ['circle','square','diamond','triangle-up','triangle-down','star'];

var LEGEND_HINTS = {
  'top-right':'Horizontal legend above the chart, right-aligned.',
  'top-center':'Horizontal legend above the chart, centered.',
  'top-left':'Horizontal legend above the chart, left-aligned.',
  'right-middle':'Vertical legend outside on the right, centered.',
  'left-middle':'Vertical legend outside on the left, centered.',
  'bottom-center':'Horizontal legend below the chart.',
  'inside-top-right':'Legend inside the plot area, top right corner.'
};
var CHART_TYPE_HINTS = {
  'bar-single':'Single bar: one bar per category, colored individually, using the first checked series.',
  'bar-group':'Grouped bar: one group of bars per category, one bar per series.',
  'bar-stack':'Stacked bar: series are stacked into a single bar per category.',
  'line':'Line: one line per series across categories.',
  'area':'Area: filled line, stacked per series.',
  'scatter':'Scatter: one point per category for each series.',
  'pie':'Pie: uses the first active series as the value per category.',
  'donut':'Donut: same as pie, with a hole in the center.',
  'histogram':'Histogram: distribution of values for each series.',
  'box':'Box plot: spread of values per series (one box per series).',
  'violin':'Violin plot: density distribution of values per series.',
  'heatmap':'Heatmap: series as rows, categories as columns.'
};

/* ===================== STATE ===================== */
var state = {
  categories: [],
  seriesNames: [],
  seriesData: {},
  seriesMeta: {},
  orientation: 'vertical',
  style: 'color', /* 'color' | 'color-pattern' | 'pattern' */
  chartType: 'bar-group',
  paletteIdx: 0,
  fontTitle: FONTS[0].value,
  fontBody: FONTS[12].value,
  outlineMarker: true,
  outlineFrame: false,
  showValues: false,
  showLegend: true,
  legendPos: 'top-right',
  legendCols: 1,
  legendBorder: false,
  theme: 'dark',
  /* canvas */
  canvasUnit: 'px',
  canvasWidthPx: 720,
  canvasHeightPx: 420,
  /* title/body font styling */
  titleFontSize: 18,
  titleBold: true,
  titleItalic: false,
  titleAlign: 'left',
  bodyFontSize: 12,
  /* line/scatter style */
  lineShowMarkers: true,
  scatterShowLine: false,
  scatterLineDash: 'solid',
  lineWidth: 2.2
};

var sampleData = "Plot\tAvicennia marina\tAvicennia alba\tRhizophora stylosa\tSonneratia alba\nP1\t42.3\t33.1\t58.9\t71.4\nP2\t38.7\t40.5\t63.2\t68.2\nP3\t51.2\t27.9\t49.7\t75.8\nP4\t29.8\t36.4\t55.4\t66.9\nP5\t45.6\t31.2\t60.1\t79.3";

/* ===================== INIT UI LISTS ===================== */
function populateFontSelect(sel, defaultValue){
  FONTS.forEach(function(f){
    var opt = document.createElement('option');
    opt.value = f.value; opt.textContent = f.label;
    if(f.value === defaultValue) opt.selected = true;
    sel.appendChild(opt);
  });
}
populateFontSelect(document.getElementById('fontTitleSelect'), state.fontTitle);
populateFontSelect(document.getElementById('fontBodySelect'), state.fontBody);

function buildPaletteGrid(){
  var grid = document.getElementById('paletteGrid');
  grid.innerHTML = '';
  PALETTES.forEach(function(p, idx){
    var item = document.createElement('div');
    item.className = 'palette-item' + (idx === state.paletteIdx ? ' active' : '');
    var sw = document.createElement('div');
    sw.className = 'palette-swatches';
    p.colors.slice(0,8).forEach(function(c){
      var d = document.createElement('div');
      d.style.background = c;
      sw.appendChild(d);
    });
    var name = document.createElement('div');
    name.className = 'palette-name';
    name.textContent = p.name;
    item.appendChild(sw);
    item.appendChild(name);
    item.addEventListener('click', function(){
      state.paletteIdx = idx;
      Array.prototype.forEach.call(grid.children, function(c){ c.classList.remove('active'); });
      item.classList.add('active');
      reassignPaletteColors();
      renderSeriesList();
      render();
    });
    grid.appendChild(item);
  });
}
buildPaletteGrid();

/* ===================== UNIT / SYMBOL PICKER ===================== */
var UNIT_GROUPS = [
  {label:'Area & volume', items:['m\u00B2','m\u00B3','cm\u00B2','cm\u00B3','km\u00B2','L','mL']},
  {label:'Rate / flux', items:['ha\u207B\u00B9','kg ha\u207B\u00B9','ton ha\u207B\u00B9','g m\u207B\u00B2','mg L\u207B\u00B9','\u00B5mol m\u207B\u00B2 s\u207B\u00B9','mol L\u207B\u00B9','mL min\u207B\u00B9','g m\u207B\u00B3']},
  {label:'Mass & concentration', items:['mg','\u00B5g','ng','kg','mol','mmol','\u00B5mol','ppm','ppb']},
  {label:'Temp & misc', items:['\u00B0C','\u00B0F','%','\u00B1','\u00D7','\u2192','\u2019']},
  {label:'Stats & chem', items:['R\u00B2','R','p','\u03B1','\u03B2','\u03C3','\u03BC','\u03C7\u00B2','n=','CO\u2082','pH','H\u2082O']}
];

function insertAtCursor(input, text){
  var start = (input.selectionStart != null) ? input.selectionStart : input.value.length;
  var end = (input.selectionEnd != null) ? input.selectionEnd : input.value.length;
  var val = input.value;
  input.value = val.slice(0, start) + text + val.slice(end);
  var pos = start + text.length;
  input.focus();
  if(input.setSelectionRange) input.setSelectionRange(pos, pos);
  input.dispatchEvent(new Event('input', {bubbles:true}));
}

function populateUnitPickers(){
  var pickers = document.querySelectorAll('.unit-picker');
  Array.prototype.forEach.call(pickers, function(sel){
    var placeholder = document.createElement('option');
    placeholder.value = ''; placeholder.textContent = '\u03A9'; placeholder.disabled = true; placeholder.selected = true;
    sel.appendChild(placeholder);
    UNIT_GROUPS.forEach(function(g){
      var og = document.createElement('optgroup');
      og.label = g.label;
      g.items.forEach(function(sym){
        var opt = document.createElement('option');
        opt.value = sym; opt.textContent = sym;
        og.appendChild(opt);
      });
      sel.appendChild(og);
    });
    sel.addEventListener('change', function(){
      if(!this.value) return;
      var target = document.getElementById(this.getAttribute('data-target'));
      if(target) insertAtCursor(target, this.value);
      this.selectedIndex = 0;
    });
  });
}
populateUnitPickers();

function reassignPaletteColors(){
  var colors = PALETTES[state.paletteIdx].colors;
  state.seriesNames.forEach(function(name, idx){
    if(state.seriesMeta[name]) state.seriesMeta[name].color = colors[idx % colors.length];
  });
}

/* ===================== DATA PARSING ===================== */
function loadRawIntoState(raw){
  var statusEl = document.getElementById('parseStatus');
  if(!raw || !raw.trim()){
    statusEl.className = 'status error';
    statusEl.textContent = 'Data is empty.';
    return;
  }
  var lines = raw.trim().split(/\r?\n/).filter(function(l){ return l.trim().length; });
  if(lines.length < 2){
    statusEl.className = 'status error';
    statusEl.textContent = 'Needs at least 1 header row and 1 data row.';
    return;
  }
  var delim = lines[0].indexOf('\t') >= 0 ? '\t' : ',';
  var header = lines[0].split(delim).map(function(h){ return h.trim(); });
  var seriesNames = header.slice(1);
  var categories = [];
  var seriesData = {};
  seriesNames.forEach(function(s){ seriesData[s] = []; });

  for(var i=1;i<lines.length;i++){
    var cols = lines[i].split(delim);
    if(cols.length < 2) continue;
    categories.push(cols[0].trim());
    for(var j=0;j<seriesNames.length;j++){
      var v = parseFloat((cols[j+1]||'').trim());
      seriesData[seriesNames[j]].push(isNaN(v) ? 0 : v);
    }
  }

  if(categories.length === 0 || seriesNames.length === 0){
    statusEl.className = 'status error';
    statusEl.textContent = 'Could not read the format. Make sure the header is on the first row.';
    return;
  }

  state.categories = categories;
  state.seriesNames = seriesNames;
  state.seriesData = seriesData;

  var colors = PALETTES[state.paletteIdx].colors;
  var newMeta = {};
  seriesNames.forEach(function(name, idx){
    var existing = state.seriesMeta[name];
    newMeta[name] = existing || {
      visible: true,
      color: colors[idx % colors.length],
      pattern: HATCH_DEFS[idx % HATCH_DEFS.length].shape,
      label: name
    };
  });
  state.seriesMeta = newMeta;

  statusEl.className = 'status ok';
  statusEl.textContent = categories.length + ' categories, ' + seriesNames.length + ' series loaded.';

  renderSeriesList();
  render();
}

function parseData(){
  loadRawIntoState(document.getElementById('dataInput').value);
}

document.getElementById('csvFile').addEventListener('change', function(e){
  var file = e.target.files[0];
  if(!file) return;
  var reader = new FileReader();
  reader.onload = function(ev){
    document.getElementById('dataInput').value = ev.target.result;
    parseData();
  };
  reader.readAsText(file);
});

document.getElementById('loadSampleBtn').addEventListener('click', function(){
  document.getElementById('dataInput').value = sampleData;
  document.getElementById('chartTitle').value = 'Aboveground Biomass Carbon Content';
  document.getElementById('chartSubtitle').value = 'Comparison across mangrove species per observation plot';
  parseData();
});

/* ===================== SERIES LIST UI ===================== */
function patternPreviewCss(h){
  if(h.kind === 'solid') return 'none';
  if(h.kind === 'dots') return 'radial-gradient(#1a1a1a 1px, transparent 1px)';
  var angle = h.angle || 0;
  if(h.kind === 'cross'){
    return 'repeating-linear-gradient(45deg, #1a1a1a 0 1px, transparent 1px 5px), repeating-linear-gradient(-45deg, #1a1a1a 0 1px, transparent 1px 5px)';
  }
  return 'repeating-linear-gradient(' + angle + 'deg, #1a1a1a 0 1px, transparent 1px 5px)';
}

function renderSeriesList(){
  var wrap = document.getElementById('seriesList');
  wrap.innerHTML = '';
  var showPatternPicker = state.style !== 'color';
  state.seriesNames.forEach(function(name){
    var meta = state.seriesMeta[name];
    var item = document.createElement('div');
    item.className = 'series-item';

    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = meta.visible;
    cb.addEventListener('change', function(){ meta.visible = cb.checked; render(); });

    var swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.background = state.style === 'pattern' ? '#fff' : meta.color;
    swatch.title = 'Click to change color';
    swatch.addEventListener('click', function(){ colorInput.click(); });

    var colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = meta.color;
    colorInput.style.display = 'none';
    colorInput.addEventListener('input', function(){
      meta.color = colorInput.value;
      swatch.style.background = state.style === 'pattern' ? '#fff' : meta.color;
      render();
    });

    var label = document.createElement('input');
    label.type = 'text';
    label.value = meta.label;
    label.addEventListener('input', function(){ meta.label = label.value; render(); });

    item.appendChild(cb);
    item.appendChild(swatch);
    item.appendChild(colorInput);
    item.appendChild(label);
    wrap.appendChild(item);

    var picker = document.createElement('div');
    picker.className = 'pattern-picker' + (showPatternPicker ? ' open' : '');
    HATCH_DEFS.forEach(function(h){
      var sq = document.createElement('div');
      sq.style.backgroundImage = patternPreviewCss(h);
      if(h.shape === meta.pattern) sq.classList.add('selected');
      sq.addEventListener('click', function(){
        meta.pattern = h.shape;
        Array.prototype.forEach.call(picker.children, function(c){ c.classList.remove('selected'); });
        sq.classList.add('selected');
        render();
      });
      picker.appendChild(sq);
    });
    wrap.appendChild(picker);
  });
}

/* ===================== LEGEND ===================== */
var LEGEND_PRESETS = {
  'top-right':      {x:1,    y:1.12, xanchor:'right',  yanchor:'bottom', orientation:'h'},
  'top-center':     {x:0.5,  y:1.12, xanchor:'center', yanchor:'bottom', orientation:'h'},
  'top-left':       {x:0,    y:1.12, xanchor:'left',   yanchor:'bottom', orientation:'h'},
  'right-middle':   {x:1.02, y:0.5,  xanchor:'left',   yanchor:'middle', orientation:'v'},
  'left-middle':    {x:-0.02,y:0.5,  xanchor:'right',  yanchor:'middle', orientation:'v'},
  'bottom-center':  {x:0.5,  y:-0.22,xanchor:'center', yanchor:'top',    orientation:'h'},
  'inside-top-right':{x:0.99,y:0.99, xanchor:'right',  yanchor:'top',    orientation:'v'}
};

function buildLegendLayout(inkColor, bodyFont, bodySize){
  var preset = LEGEND_PRESETS[state.legendPos];
  var base = {
    x: preset.x, y: preset.y, xanchor: preset.xanchor, yanchor: preset.yanchor,
    orientation: preset.orientation,
    font: {family: bodyFont, size: bodySize, color: inkColor},
    bgcolor: state.legendBorder ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0)',
    bordercolor: state.legendBorder ? inkColor : 'rgba(0,0,0,0)',
    borderwidth: state.legendBorder ? 1 : 0
  };
  return base;
}

/* ===================== COLOR / STYLE HELPERS ===================== */
var INK = '#1a1a1a';
function grayForIndex(idx){
  var shades = ['#2b2b2b','#4d4d4d','#6f6f6f','#8f8f8f','#adadad','#c7c7c7'];
  return shades[idx % shades.length];
}
function isGrayscaleMode(){ return state.style === 'pattern'; }
function isColorPatternMode(){ return state.style === 'color-pattern'; }
function isPatternish(){ return state.style !== 'color'; }

function buildMarkerPattern(name){
  var shape = state.seriesMeta[name].pattern || '';
  if(isGrayscaleMode()){
    return {shape: shape, fgcolor: INK, bgcolor: '#ffffff', size: 7, solidity: 0.45};
  }
  return {shape: shape, fgcolor: 'rgba(255,255,255,0.65)', bgcolor: state.seriesMeta[name].color, size: 7, solidity: 0.45};
}
function baseMarkerColor(name){
  if(isGrayscaleMode()) return '#ffffff';
  return state.seriesMeta[name].color;
}

/* ===================== CANVAS SIZE / UNIT CONVERSION ===================== */
/* Baseline convention: 96 "css" px per inch (same as browsers use for mm/cm).
   DPI is decoupled from the design/canvas size and only scales the exported
   raster resolution (see exportPngFile), so switching DPI never changes
   the on-screen layout or the numbers you typed in mm/cm/px. */
function toBaselinePx(value, unit){
  if(unit === 'mm') return Math.round(value / 25.4 * 96);
  if(unit === 'cm') return Math.round(value / 2.54 * 96);
  return Math.round(value);
}
function fromBaselinePx(px, unit){
  if(unit === 'mm') return +(px / 96 * 25.4).toFixed(1);
  if(unit === 'cm') return +(px / 96 * 2.54).toFixed(2);
  return px;
}

function setUnit(u){
  state.canvasUnit = u;
  ['unitPx','unitMm','unitCm'].forEach(function(id){ document.getElementById(id).classList.remove('active'); });
  document.getElementById('unit' + u.charAt(0).toUpperCase() + u.slice(1)).classList.add('active');
  document.getElementById('chartWidth').value = fromBaselinePx(state.canvasWidthPx, u);
  document.getElementById('chartHeight').value = fromBaselinePx(state.canvasHeightPx, u);
}
document.getElementById('unitPx').addEventListener('click', function(){ setUnit('px'); });
document.getElementById('unitMm').addEventListener('click', function(){ setUnit('mm'); });
document.getElementById('unitCm').addEventListener('click', function(){ setUnit('cm'); });

document.getElementById('chartWidth').addEventListener('input', function(){
  var v = parseFloat(this.value);
  if(isNaN(v) || v <= 0) return;
  state.canvasWidthPx = toBaselinePx(v, state.canvasUnit);
  render();
});
document.getElementById('chartHeight').addEventListener('input', function(){
  var v = parseFloat(this.value);
  if(isNaN(v) || v <= 0) return;
  state.canvasHeightPx = toBaselinePx(v, state.canvasUnit);
  render();
});

/* Displays the (potentially large) canvas scaled down to fit the screen via
   a CSS transform on plotlyDiv only. Plotly itself always renders at the
   true W x H, and exports always use state.canvasWidthPx/HeightPx directly,
   so the preview scale never affects exported pixel dimensions. */
function updateChartScale(){
  var W = state.canvasWidthPx, H = state.canvasHeightPx;
  var main = document.querySelector('.main');
  var maxW = Math.max(280, main.clientWidth - 60);
  var maxH = Math.max(280, window.innerHeight - 210);
  var scale = Math.min(1, maxW / W, maxH / H);
  var plotDiv = document.getElementById('plotlyDiv');
  var wrap = document.getElementById('scaleWrap');
  plotDiv.style.transformOrigin = 'top left';
  plotDiv.style.transform = 'scale(' + scale + ')';
  wrap.style.width = (W * scale) + 'px';
  wrap.style.height = (H * scale) + 'px';
  var note = document.getElementById('scaleNote');
  if(scale < 0.999){
    note.style.display = 'block';
    note.textContent = 'Preview scaled to ' + Math.round(scale * 100) + '% to fit your screen — export uses the full ' + W + '\u00D7' + H + ' px at the selected DPI.';
  } else {
    note.style.display = 'none';
  }
}
var resizeTimer;
window.addEventListener('resize', function(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateChartScale, 120);
});

/* ===================== BLANK CANVAS (default state) ===================== */
function renderBlankCanvas(){
  var W = state.canvasWidthPx, H = state.canvasHeightPx;
  Plotly.newPlot('plotlyDiv', [], {
    width: W, height: H,
    paper_bgcolor: '#ffffff', plot_bgcolor: '#ffffff',
    xaxis: {visible:false}, yaxis: {visible:false},
    margin: {t:0, r:0, b:0, l:0}
  }, {responsive:false, displayModeBar:false, staticPlot:true});
  updateChartScale();
}

/* ===================== LINE / MARKER STYLE VISIBILITY ===================== */
function updateLineStyleVisibility(){
  var ct = state.chartType;
  var showSection = (ct === 'line' || ct === 'area' || ct === 'scatter');
  document.getElementById('lineStyleHeading').style.display = showSection ? '' : 'none';
  document.getElementById('lineStyleSection').style.display = showSection ? '' : 'none';
  document.getElementById('lineMarkersRow').style.display = (ct === 'line' || ct === 'area') ? '' : 'none';
  document.getElementById('scatterLineRow').style.display = (ct === 'scatter') ? '' : 'none';
  document.getElementById('scatterDashWrap').style.display = (ct === 'scatter' && state.scatterShowLine) ? '' : 'none';
}

/* ===================== RENDER ===================== */
function render(){
  if(state.categories.length === 0){ renderBlankCanvas(); return; }

  var W = state.canvasWidthPx, H = state.canvasHeightPx;
  var titleFont = state.fontTitle;
  var bodyFont = state.fontBody;
  var bodySize = state.bodyFontSize || 12;
  var xLabel = document.getElementById('xLabel').value;
  var yLabel = document.getElementById('yLabel').value;
  var title = document.getElementById('chartTitle').value;
  var subtitle = document.getElementById('chartSubtitle').value;
  var vertical = state.orientation === 'vertical';

  var activeSeries = state.seriesNames.filter(function(n){ return state.seriesMeta[n].visible; });
  var traces = [];

  var titleSize = state.titleFontSize || 18;
  var alignMap = {
    left:   {x:0.02, xanchor:'left'},
    center: {x:0.5,  xanchor:'center'},
    right:  {x:0.98, xanchor:'right'}
  };
  var align = alignMap[state.titleAlign] || alignMap.left;
  var titleTextRaw = escapeHtml(title);
  if(state.titleBold) titleTextRaw = '<b>' + titleTextRaw + '</b>';
  if(state.titleItalic) titleTextRaw = '<i>' + titleTextRaw + '</i>';
  var subtitleFontFamily = bodyFont.split(',')[0].replace(/'/g,'');
  var subtitleHtml = '';
  if(subtitle){
    var subtitleText = escapeHtml(subtitle);
    if(state.titleItalic) subtitleText = '<i>' + subtitleText + '</i>';
    subtitleHtml = '<br><span style="font-size:' + Math.max(titleSize - 6, 10) + 'px;font-weight:400;color:#5c5c58;font-family:' + subtitleFontFamily + '">' + subtitleText + '</span>';
  }

  var layout = {
    width: W, height: H,
    paper_bgcolor: '#ffffff',
    plot_bgcolor: '#ffffff',
    font: {family: bodyFont, size: bodySize, color: INK},
    margin: {t: 78, r: 40, b: 70, l: 70},
    showlegend: state.showLegend,
    title: {
      text: titleTextRaw + subtitleHtml,
      font: {family: titleFont, size: titleSize, color: INK},
      x: align.x, xanchor: align.xanchor
    }
  };

  if(state.showLegend){
    layout.legend = buildLegendLayout(INK, bodyFont, bodySize);
  }
  var legend2 = null;
  if(state.showLegend && state.legendCols === 2 && (state.legendPos === 'right-middle' || state.legendPos === 'left-middle' || state.legendPos === 'inside-top-right')){
    legend2 = JSON.parse(JSON.stringify(layout.legend));
    if(state.legendPos === 'right-middle'){ legend2.x = layout.legend.x + 0.17; }
    else if(state.legendPos === 'left-middle'){ legend2.x = layout.legend.x - 0.17; }
    else { legend2.x = layout.legend.x - 0.20; }
    layout.legend2 = legend2;
  }

  function legendForIndex(i){
    if(legend2 && i % 2 === 1) return 'legend2';
    return 'legend';
  }

  var outlineW = state.outlineMarker ? 1.1 : 0;
  var valFmt = function(v){ return (Math.round(v*100)/100).toString(); };
  var axisTitleSize = bodySize + 1;

  switch(state.chartType){

    case 'bar-single': {
      var axKey1s = vertical ? 'xaxis' : 'yaxis';
      var axKey2s = vertical ? 'yaxis' : 'xaxis';
      layout[axKey1s] = {title:{text:xLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, showgrid:false, linecolor:INK, linewidth:1};
      layout[axKey2s] = {title:{text:yLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, gridcolor:'#e4e2d8', zeroline:true, zerolinecolor:INK, linecolor:INK, linewidth:1};
      var firstActiveS = activeSeries[0];
      if(!firstActiveS){ break; }
      var valsS = state.seriesData[firstActiveS];
      var palColorsS = PALETTES[state.paletteIdx].colors;
      var barColorsS = state.categories.map(function(c, i){
        return isGrayscaleMode() ? '#ffffff' : palColorsS[i % palColorsS.length];
      });
      var markerS = {color: barColorsS, line:{color:INK, width:outlineW}};
      if(isPatternish()){
        markerS.pattern = {
          shape: state.categories.map(function(c,i){ return HATCH_DEFS[i % HATCH_DEFS.length].shape; }),
          fgcolor: isGrayscaleMode() ? INK : 'rgba(255,255,255,0.65)',
          bgcolor: isGrayscaleMode() ? '#ffffff' : barColorsS,
          size:7, solidity:0.45
        };
      }
      var tS = {
        type:'bar', name: state.seriesMeta[firstActiveS].label,
        marker: markerS, orientation: vertical ? 'v' : 'h', showlegend:false
      };
      if(vertical){ tS.x = state.categories; tS.y = valsS; } else { tS.y = state.categories; tS.x = valsS; }
      if(state.showValues){
        tS.text = valsS.map(valFmt);
        tS.textposition = 'outside';
        tS.textfont = {family: bodyFont, size: Math.max(bodySize-2,8), color: INK};
      }
      traces.push(tS);
      layout.showlegend = false;
      break;
    }

    case 'bar-group':
    case 'bar-stack': {
      layout.barmode = state.chartType === 'bar-stack' ? 'stack' : 'group';
      layout.bargap = 0.22;
      layout.bargroupgap = 0.12;
      var axKey1 = vertical ? 'xaxis' : 'yaxis';
      var axKey2 = vertical ? 'yaxis' : 'xaxis';
      layout[axKey1] = {title: {text: xLabel, font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, showgrid:false, linecolor:INK, linewidth:1};
      layout[axKey2] = {title: {text: yLabel, font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, gridcolor:'#e4e2d8', zeroline:true, zerolinecolor:INK, linecolor:INK, linewidth:1};
      activeSeries.forEach(function(name, idx){
        var vals = state.seriesData[name];
        var marker = {
          color: baseMarkerColor(name),
          line: {color: INK, width: outlineW}
        };
        if(isPatternish()) marker.pattern = buildMarkerPattern(name);
        var t = {
          type: 'bar', name: state.seriesMeta[name].label,
          marker: marker, orientation: vertical ? 'v' : 'h',
          legend: legendForIndex(idx)
        };
        if(vertical){ t.x = state.categories; t.y = vals; } else { t.y = state.categories; t.x = vals; }
        if(state.showValues){
          t.text = vals.map(valFmt);
          t.textposition = 'outside';
          t.textfont = {family: bodyFont, size: Math.max(bodySize-2,8), color: INK};
        }
        traces.push(t);
      });
      break;
    }

    case 'line':
    case 'area': {
      var axKeyA = 'xaxis', axKeyB = 'yaxis';
      layout[axKeyA] = {title:{text:xLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, showgrid:false, linecolor:INK, linewidth:1};
      layout[axKeyB] = {title:{text:yLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, gridcolor:'#e4e2d8', zeroline:true, zerolinecolor:INK, linecolor:INK, linewidth:1};
      var showMarkersL = state.lineShowMarkers;
      activeSeries.forEach(function(name, idx){
        var vals = state.seriesData[name];
        var lineColor = isGrayscaleMode() ? grayForIndex(idx) : state.seriesMeta[name].color;
        var modeStr = showMarkersL
          ? (state.showValues ? 'lines+markers+text' : 'lines+markers')
          : (state.showValues ? 'lines+text' : 'lines');
        var t = {
          type: 'scatter',
          mode: modeStr,
          name: state.seriesMeta[name].label,
          x: state.categories, y: vals,
          line: {color: lineColor, width: state.lineWidth || 2.2, dash: isPatternish() ? DASH_CYCLE[idx % DASH_CYCLE.length] : 'solid'},
          marker: {color: lineColor, size: 7, symbol: isPatternish() ? SYMBOL_CYCLE[idx % SYMBOL_CYCLE.length] : 'circle',
                    line: {color: INK, width: outlineW}},
          legend: legendForIndex(idx)
        };
        if(state.chartType === 'area'){
          t.fill = 'tozeroy';
          t.stackgroup = 'one';
          t.fillcolor = hexToRgba(lineColor, 0.55);
        }
        if(state.showValues){ t.text = vals.map(valFmt); t.textposition = 'top center'; t.textfont = {family:bodyFont,size:Math.max(bodySize-2,8),color:INK}; }
        traces.push(t);
      });
      break;
    }

    case 'scatter': {
      layout.xaxis = {title:{text:xLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, showgrid:false, linecolor:INK, linewidth:1};
      layout.yaxis = {title:{text:yLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, gridcolor:'#e4e2d8', zeroline:true, zerolinecolor:INK, linecolor:INK, linewidth:1};
      var connectLine = state.scatterShowLine;
      activeSeries.forEach(function(name, idx){
        var vals = state.seriesData[name];
        var col = isGrayscaleMode() ? grayForIndex(idx) : state.seriesMeta[name].color;
        var modeStr = connectLine
          ? (state.showValues ? 'lines+markers+text' : 'lines+markers')
          : (state.showValues ? 'markers+text' : 'markers');
        var t = {
          type:'scatter', mode: modeStr,
          name: state.seriesMeta[name].label,
          x: state.categories, y: vals,
          marker: {color: col, size: 10, symbol: isPatternish() ? SYMBOL_CYCLE[idx % SYMBOL_CYCLE.length] : 'circle',
                    line: {color: INK, width: outlineW}},
          legend: legendForIndex(idx)
        };
        if(connectLine){
          t.line = {color: col, width: state.lineWidth || 2, dash: state.scatterLineDash || 'solid'};
        }
        if(state.showValues){ t.text = vals.map(valFmt); t.textposition = 'top center'; t.textfont={family:bodyFont,size:Math.max(bodySize-2,8),color:INK}; }
        traces.push(t);
      });
      break;
    }

    case 'pie':
    case 'donut': {
      var firstActive = activeSeries[0];
      if(!firstActive){ break; }
      var palColors = PALETTES[state.paletteIdx].colors;
      var sliceColors = state.categories.map(function(c, i){
        if(isGrayscaleMode()) return '#ffffff';
        return palColors[i % palColors.length];
      });
      var marker = {colors: sliceColors, line:{color:INK, width: outlineW}};
      if(isPatternish()){
        marker.pattern = {
          shape: state.categories.map(function(c,i){ return HATCH_DEFS[i % HATCH_DEFS.length].shape; }),
          fgcolor: isGrayscaleMode() ? INK : 'rgba(255,255,255,0.65)',
          bgcolor: isGrayscaleMode() ? '#ffffff' : state.categories.map(function(c,i){ return palColors[i % palColors.length]; }),
          size:7, solidity:0.45
        };
      }
      var t = {
        type:'pie', labels: state.categories, values: state.seriesData[firstActive],
        hole: state.chartType === 'donut' ? 0.45 : 0,
        marker: marker,
        textinfo: state.showValues ? 'label+value+percent' : 'label+percent',
        textfont: {family: bodyFont, size: Math.max(bodySize-1,9), color: INK},
        legend: 'legend'
      };
      traces.push(t);
      layout.annotations = [{text:'Series: ' + (state.seriesMeta[firstActive].label||firstActive), showarrow:false, x:0.5, y:-0.12, xref:'paper', yref:'paper', font:{family:bodyFont,size:Math.max(bodySize-1,9),color:'#5c5c58'}}];
      break;
    }

    case 'histogram': {
      layout.xaxis = {title:{text: vertical ? yLabel : xLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, showgrid:false, linecolor:INK, linewidth:1};
      layout.yaxis = {title:{text:'Frequency',font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, gridcolor:'#e4e2d8', linecolor:INK, linewidth:1};
      layout.barmode = 'overlay';
      activeSeries.forEach(function(name, idx){
        var vals = state.seriesData[name];
        var marker = {color: baseMarkerColor(name), line:{color:INK,width:outlineW}, opacity:0.75};
        if(isPatternish()) marker.pattern = buildMarkerPattern(name);
        traces.push({type:'histogram', name: state.seriesMeta[name].label, x: vals, marker: marker, legend: legendForIndex(idx)});
      });
      break;
    }

    case 'box':
    case 'violin': {
      layout.xaxis = {title:{text:'Series',font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, showgrid:false, linecolor:INK, linewidth:1};
      layout.yaxis = {title:{text:yLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}, gridcolor:'#e4e2d8', linecolor:INK, linewidth:1};
      activeSeries.forEach(function(name, idx){
        var vals = state.seriesData[name];
        var col = isGrayscaleMode() ? grayForIndex(idx) : state.seriesMeta[name].color;
        var t = {
          type: state.chartType, name: state.seriesMeta[name].label,
          y: vals, x: vals.map(function(){ return state.seriesMeta[name].label; }),
          marker: {color: col}, line: {color: INK, width: state.outlineMarker ? 1.2 : 0.6},
          fillcolor: hexToRgba(col, 0.55),
          legend: legendForIndex(idx)
        };
        if(state.chartType === 'box'){ t.boxpoints = 'outliers'; }
        else { t.points = false; t.box = {visible:true}; }
        traces.push(t);
      });
      break;
    }

    case 'heatmap': {
      var z = activeSeries.map(function(n){ return state.seriesData[n]; });
      var names = activeSeries.map(function(n){ return state.seriesMeta[n].label; });
      var colorscale = isGrayscaleMode() ? 'Greys' : plotlyColorscaleFromPalette(PALETTES[state.paletteIdx].colors);
      layout.xaxis = {title:{text:xLabel,font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}};
      layout.yaxis = {title:{text:'Series',font:{family:bodyFont,size:axisTitleSize}}, tickfont:{family:bodyFont}};
      var t = {
        type:'heatmap', x: state.categories, y: names, z: z,
        colorscale: colorscale, showscale: true,
        xgap: 2, ygap: 2
      };
      if(state.showValues){
        t.texttemplate = '%{z:.1f}';
        t.textfont = {family: bodyFont, size: Math.max(bodySize-2,8), color: '#1a1a1a'};
      }
      traces.push(t);
      layout.showlegend = false;
      break;
    }
  }

  if(state.outlineFrame){
    layout.shapes = (layout.shapes||[]).concat([{
      type:'rect', xref:'paper', yref:'paper', x0:0, y0:0, x1:1, y1:1,
      line: {color: INK, width: 1.4}
    }]);
  }

  var config = {responsive:false, displaylogo:false, displayModeBar:true, modeBarButtonsToRemove:['lasso2d','select2d']};
  Plotly.newPlot('plotlyDiv', traces, layout, config);
  updateChartScale();
}

/* ===================== HELPERS ===================== */
function escapeHtml(s){
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function hexToRgba(hex, alpha){
  hex = hex.replace('#','');
  if(hex.length === 3) hex = hex.split('').map(function(c){return c+c;}).join('');
  var r = parseInt(hex.substr(0,2),16), g = parseInt(hex.substr(2,2),16), b = parseInt(hex.substr(4,2),16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}
function plotlyColorscaleFromPalette(colors){
  var n = colors.length;
  return colors.map(function(c, i){ return [i/(n-1 || 1), c]; });
}

/* ===================== EXPORT ===================== */
function exportSvgFile(){
  Plotly.toImage(document.getElementById('plotlyDiv'), {format:'svg', width: state.canvasWidthPx, height: state.canvasHeightPx})
    .then(function(url){
      var a = document.createElement('a');
      a.href = url; a.download = 'chart.svg';
      a.click();
    });
}
function exportPngFile(){
  var dpi = parseInt(document.getElementById('dpiSelect').value) || 300;
  var scale = dpi / 96;
  Plotly.toImage(document.getElementById('plotlyDiv'), {format:'png', width: state.canvasWidthPx, height: state.canvasHeightPx, scale: scale})
    .then(function(url){
      var a = document.createElement('a');
      a.href = url; a.download = 'chart_' + dpi + 'dpi.png';
      a.click();
    });
}

/* ===================== EVENT WIRING ===================== */
document.getElementById('parseBtn').addEventListener('click', parseData);

document.getElementById('chartType').addEventListener('change', function(){
  state.chartType = this.value;
  document.getElementById('chartTypeHint').textContent = CHART_TYPE_HINTS[state.chartType] || '';
  updateLineStyleVisibility();
  render();
});

document.getElementById('orientVert').addEventListener('click', function(){
  state.orientation = 'vertical';
  this.classList.add('active');
  document.getElementById('orientHoriz').classList.remove('active');
  render();
});
document.getElementById('orientHoriz').addEventListener('click', function(){
  state.orientation = 'horizontal';
  this.classList.add('active');
  document.getElementById('orientVert').classList.remove('active');
  render();
});

function setStyleMode(mode){
  state.style = mode;
  ['styleColor','styleColorPattern','stylePattern'].forEach(function(id){
    document.getElementById(id).classList.remove('active');
  });
  var idMap = {'color':'styleColor', 'color-pattern':'styleColorPattern', 'pattern':'stylePattern'};
  document.getElementById(idMap[mode]).classList.add('active');
  renderSeriesList();
  render();
}
document.getElementById('styleColor').addEventListener('click', function(){ setStyleMode('color'); });
document.getElementById('styleColorPattern').addEventListener('click', function(){ setStyleMode('color-pattern'); });
document.getElementById('stylePattern').addEventListener('click', function(){ setStyleMode('pattern'); });

document.getElementById('outlineMarker').addEventListener('change', function(){ state.outlineMarker = this.checked; render(); });
document.getElementById('outlineFrame').addEventListener('change', function(){ state.outlineFrame = this.checked; render(); });
document.getElementById('showValues').addEventListener('change', function(){ state.showValues = this.checked; render(); });

document.getElementById('fontTitleSelect').addEventListener('change', function(){ state.fontTitle = this.value; render(); });
document.getElementById('fontBodySelect').addEventListener('change', function(){ state.fontBody = this.value; render(); });

document.getElementById('titleFontSize').addEventListener('input', function(){ state.titleFontSize = parseInt(this.value) || 18; render(); });
document.getElementById('titleBold').addEventListener('change', function(){ state.titleBold = this.checked; render(); });
document.getElementById('titleItalic').addEventListener('change', function(){ state.titleItalic = this.checked; render(); });
function setTitleAlign(a){
  state.titleAlign = a;
  ['titleAlignLeft','titleAlignCenter','titleAlignRight'].forEach(function(id){ document.getElementById(id).classList.remove('active'); });
  document.getElementById('titleAlign' + a.charAt(0).toUpperCase() + a.slice(1)).classList.add('active');
  render();
}
document.getElementById('titleAlignLeft').addEventListener('click', function(){ setTitleAlign('left'); });
document.getElementById('titleAlignCenter').addEventListener('click', function(){ setTitleAlign('center'); });
document.getElementById('titleAlignRight').addEventListener('click', function(){ setTitleAlign('right'); });

document.getElementById('bodyFontSize').addEventListener('input', function(){ state.bodyFontSize = parseInt(this.value) || 12; render(); });

document.getElementById('textColor').addEventListener('input', function(){ INK = this.value; render(); });

document.getElementById('lineShowMarkers').addEventListener('change', function(){ state.lineShowMarkers = this.checked; render(); });
document.getElementById('scatterShowLine').addEventListener('change', function(){ state.scatterShowLine = this.checked; updateLineStyleVisibility(); render(); });
document.getElementById('scatterLineDash').addEventListener('change', function(){ state.scatterLineDash = this.value; render(); });
document.getElementById('lineWidthInput').addEventListener('input', function(){ state.lineWidth = parseFloat(this.value) || 2.2; render(); });

document.getElementById('showLegend').addEventListener('change', function(){ state.showLegend = this.checked; render(); });
document.getElementById('legendPos').addEventListener('change', function(){
  state.legendPos = this.value;
  render();
});
document.getElementById('legendCol1').addEventListener('click', function(){
  state.legendCols = 1;
  this.classList.add('active');
  document.getElementById('legendCol2').classList.remove('active');
  render();
});
document.getElementById('legendCol2').addEventListener('click', function(){
  state.legendCols = 2;
  this.classList.add('active');
  document.getElementById('legendCol1').classList.remove('active');
  render();
});
document.getElementById('legendBorder').addEventListener('change', function(){ state.legendBorder = this.checked; render(); });

['chartTitle','chartSubtitle','xLabel','yLabel'].forEach(function(id){
  document.getElementById(id).addEventListener('input', render);
});

document.getElementById('exportSvg').addEventListener('click', exportSvgFile);
document.getElementById('exportPng').addEventListener('click', exportPngFile);

/* ===================== THEME TOGGLE (soft dark default) ===================== */
var SUN_PATH = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>';
var MOON_PATH = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
function applyTheme(theme){
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').innerHTML = theme === 'dark' ? MOON_PATH : SUN_PATH;
}
document.getElementById('themeToggle').addEventListener('click', function(){
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});
applyTheme('dark');

/* ===================== INIT ===================== */
document.getElementById('chartTypeHint').textContent = CHART_TYPE_HINTS[state.chartType];
updateLineStyleVisibility();
renderBlankCanvas();
