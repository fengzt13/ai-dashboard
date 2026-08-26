// ===== 公共组件：导航、页脚、主题切换 =====

(function () {
  // 主题初始化（避免闪烁）
  (function initTheme() {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
    else if (saved === 'light') document.documentElement.classList.add('light');
  })();

  // 站点配置
  var SITE = {
    name: 'AI 追踪',
    fullName: '广州番禺有趣打工仔小冯的 AI 追踪',
    updated: '2026-08-26',
    tagline1: '广州番禺有趣打工仔小冯的',
    tagline2: 'AI 追踪'
  };

  // 根据当前页面位置自动计算路径前缀
  // 首页(index.html)用 "pages/xxx.html"，子页面(pages/xxx.html)用 "../pages/xxx.html"
  var isInSubDir = window.location.pathname.indexOf('/pages/') >= 0 ||
    (window.location.protocol === 'file:' && window.location.pathname.replace(/\\/g, '/').indexOf('/pages/') >= 0);
  var PATH_PREFIX = isInSubDir ? '../' : '';

  var NAV_ITEMS = [
    { href: 'index.html', label: '数据总览', key: 'index' },
    { href: 'pages/token.html', label: '需求与采用', key: 'token' },
    { href: 'pages/output.html', label: '产出与消耗', key: 'output' },
    { href: 'pages/cost.html', label: '成本与定价', key: 'cost' },
    { href: 'pages/compute.html', label: '算力供给', key: 'compute' },
    { href: 'pages/business.html', label: '商业表现', key: 'business' },
    { href: 'pages/macro.html', label: '宏观格局', key: 'macro' },
  ];

  // 给每个链接加上路径前缀
  NAV_ITEMS.forEach(function (item) {
    item.fullHref = PATH_PREFIX + item.href;
  });

  function buildHeader(activeKey) {
    var header = document.createElement('header');
    header.innerHTML = `
      <div class="nav-inner">
        <a class="logo" href="${PATH_PREFIX}index.html">
          <span class="logo-badge">AI</span>
          <span class="logo-text"><span class="logo-line1">${SITE.tagline1}</span><span class="logo-line2">${SITE.tagline2}</span></span>
        </a>
        <nav class="desktop">
          ${NAV_ITEMS.map(function (item) {
            var active = item.key === activeKey ? ' active' : '';
            return `<a class="nav-link${active}" href="${item.fullHref}">${item.label}</a>`;
          }).join('')}
        </nav>
        <div class="nav-actions">
          <button class="theme-toggle" id="theme-toggle" aria-label="切换深色模式" title="切换深色模式">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="打开菜单">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
      <div class="mobile-nav" id="mobileNav">
        ${NAV_ITEMS.map(function (item) {
          var active = item.key === activeKey ? ' active' : '';
          return `<a class="nav-link${active}" href="${item.fullHref}">${item.label}</a>`;
        }).join('')}
      </div>
    `;
    document.body.prepend(header);

    // 主题切换
    var toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', function () {
      var html = document.documentElement;
      var isDark = html.classList.contains('dark') ||
        (html.classList.contains('light') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });

    // 移动端菜单
    var menuBtn = document.getElementById('mobileMenuBtn');
    var mobileNav = document.getElementById('mobileNav');
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  function buildFooter() {
    var footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-col" style="grid-column: span 2 / span 2;">
            <h4>${SITE.name}</h4>
            <p style="color:var(--muted);font-size:0.85rem;line-height:1.7;max-width:36ch;">${SITE.fullName}。覆盖 Token 调用、模型产出、成本定价、算力供给、商业表现、宏观格局六大维度，每周一自动更新。</p>
          </div>
          <div class="footer-col">
            <h4>板块</h4>
            <a href="${PATH_PREFIX}index.html">数据总览</a>
            <a href="${PATH_PREFIX}pages/token.html">需求与采用</a>
            <a href="${PATH_PREFIX}pages/output.html">产出与消耗</a>
            <a href="${PATH_PREFIX}pages/cost.html">成本与定价</a>
          </div>
          <div class="footer-col">
            <h4>更多</h4>
            <a href="${PATH_PREFIX}pages/compute.html">算力供给</a>
            <a href="${PATH_PREFIX}pages/business.html">商业表现</a>
            <a href="${PATH_PREFIX}pages/macro.html">宏观格局</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 AI 追踪 · 数据仅供参考，不构成投资建议</span>
          <span>最后更新：${SITE.updated}</span>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  window.SiteInit = function (activeKey) {
    buildHeader(activeKey || '');
    buildFooter();
  };

  // 自动初始化（默认页面为 index）
  document.addEventListener('DOMContentLoaded', function () {
    if (!window.SiteInitDone) {
      window.SiteInitDone = true;
    }
  });
})();