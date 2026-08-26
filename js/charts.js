// ===== 图表渲染工具 =====
// 封装 ECharts 常用图表：折线、柱状、双轴，统一主题色

(function () {
  // 从 CSS 变量读取主题色（适配亮/暗模式）
  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function currentTheme() {
    var html = document.documentElement;
    var isDark = html.classList.contains('dark') ||
      (!html.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    return isDark ? 'dark' : 'light';
  }

  function colors() {
    var dark = currentTheme() === 'dark';
    return {
      text: cssVar('--muted') || (dark ? '#9ca3af' : '#6b7280'),
      axis: (dark ? '#3a3a3a' : '#e5e5e5'),
      split: (dark ? '#2a2a2a' : '#f0f0f0'),
      accent: cssVar('--accent') || (dark ? '#d97706' : '#b45309'),
      blue: dark ? '#60a5fa' : '#3b82f6',
      green: '#16a34a',
      red: '#b91c1c',
      purple: dark ? '#a78bfa' : '#8b5cf6',
      cyan: dark ? '#22d3ee' : '#06b6d4',
      foreground: cssVar('--foreground') || (dark ? '#eaeaea' : '#1a1a1a')
    };
  }

  var baseOptions = {
    backgroundColor: 'transparent',
    textStyle: { fontFamily: 'Inter, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif' },
    grid: { left: 50, right: 24, top: 40, bottom: 40, containLabel: true },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(30,30,30,0.92)',
      borderColor: 'rgba(255,255,255,0.1)',
      textStyle: { color: '#fff', fontSize: 12 },
      axisPointer: { type: 'line', lineStyle: { color: 'rgba(180,83,9,0.4)' } }
    },
    legend: {
      top: 0,
      textStyle: { fontSize: 11 }
    }
  };

  function renderLine(domId, categories, seriesList, opts) {
    var el = document.getElementById(domId);
    if (!el) return;
    var c = colors();
    var chart = echarts.init(el, null, { renderer: 'canvas' });
    var series = seriesList.map(function (s) {
      return {
        name: s.name,
        type: 'line',
        data: s.data,
        smooth: s.smooth !== false,
        symbol: s.symbol || 'circle',
        symbolSize: s.symbolSize || 6,
        lineWidth: s.lineWidth || 2.5,
        areaStyle: s.area ? { opacity: 0.08 } : undefined,
        itemStyle: { color: s.color || c.accent },
        lineStyle: { color: s.color || c.accent, width: s.lineWidth || 2.5 }
      };
    });
    var opt = Object.assign({}, baseOptions, {
      color: [c.accent, c.green, c.blue, c.purple, c.cyan],
      xAxis: {
        type: 'category',
        data: categories,
        boundaryGap: false,
        axisLine: { lineStyle: { color: c.split } },
        axisLabel: { color: c.text, fontSize: 11 },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'value',
        name: (opts && opts.yName) || '',
        nameTextStyle: { color: c.text, fontSize: 11 },
        axisLabel: { color: c.text, fontSize: 11 },
        splitLine: { lineStyle: { color: c.split } }
      },
      series: series
    }, (opts && opts.extra) || {});
    chart.setOption(opt);
    window.addEventListener('resize', function () { chart.resize(); });
    // 主题切换时重新渲染
    if (!el._themeBound) {
      el._themeBound = true;
      el._render = function () { renderLine(domId, categories, seriesList, opts); };
    }
    return chart;
  }

  function renderBar(domId, categories, seriesList, opts) {
    var el = document.getElementById(domId);
    if (!el) return;
    var c = colors();
    var chart = echarts.init(el);
    var series = seriesList.map(function (s, i) {
      return {
        name: s.name,
        type: 'bar',
        data: s.data,
        barWidth: s.barWidth || '40%',
        itemStyle: s.color ? { color: s.color, borderRadius: s.radius || [4, 4, 0, 0] } : { borderRadius: s.radius || [4, 4, 0, 0] }
      };
    });
    chart.setOption(Object.assign({}, baseOptions, {
      color: [c.accent, c.green, c.blue, c.purple, c.cyan],
      xAxis: {
        type: 'category',
        data: categories,
        axisLine: { lineStyle: { color: c.split } },
        axisLabel: { color: c.text, fontSize: 11 },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'value',
        name: (opts && opts.yName) || '',
        nameTextStyle: { color: c.text, fontSize: 11 },
        axisLabel: { color: c.text, fontSize: 11 },
        splitLine: { lineStyle: { color: c.split } }
      },
      series: series
    }));
    window.addEventListener('resize', function () { chart.resize(); });
    if (!el._themeBound) {
      el._themeBound = true;
      el._render = function () { renderBar(domId, categories, seriesList, opts); };
    }
    return chart;
  }

  // 渲染前确保 ECharts 已加载
  function ensureEcharts(cb) {
    if (window.echarts) { cb(); return; }
    var s = document.createElement('script');
    s.src = '../js/echarts.min.js';
    s.onload = cb;
    document.head.appendChild(s);
  }

  window.CHARTS = {
    ensure: ensureEcharts,
    line: renderLine,
    bar: renderBar
  };
})();