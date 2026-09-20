/* =========================================================
   منطق الموقع — عادةً مش محتاج تعدّل هنا.
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- أدوات ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // بيطلّع النص بلغتين جوّه span، والـ CSS بيخفي غير المستخدم
  function bi(obj, cls) {
    if (!obj) return "";
    var c = cls ? ' class="' + cls + '"' : "";
    return '<span lang="ar"' + c + ">" + esc(obj.ar) + "</span>" +
           '<span lang="en"' + c + ">" + esc(obj.en) + "</span>";
  }

  function t(obj) {
    var l = root.getAttribute("data-lang") === "en" ? "en" : "ar";
    return obj ? (obj[l] || obj.ar || "") : "";
  }

  var TXT = {
    missingImage: { ar: "صورة الفيلم هنا", en: "Film image here" },
    missingStill: { ar: "ستيل", en: "Still" },
    missingFrame: { ar: "لقطة", en: "Frame" },
    devMore: { ar: "تفاصيل", en: "Details" },
    missingPortrait: { ar: "صورة شخصية", en: "Portrait" },
    next: { ar: "العمل اللي بعده", en: "Next" },
    prev: { ar: "العمل اللي قبله", en: "Previous" },
    back: { ar: "كل الأعمال", en: "All work" },
    notFound: { ar: "العمل ده مش موجود.", en: "This work does not exist." },
    credits: { ar: "التفاصيل", en: "Details" },
    format: { ar: "النوع", en: "Format" },
    genre: { ar: "التصنيف", en: "Genre" },
    role: { ar: "الدور", en: "Role" },
    statusL: { ar: "الحالة", en: "Status" },
    clientL: { ar: "العميل", en: "Client" },
    watch:   { ar: "شوف الفيلم", en: "Watch the film" },
    moreImg: { ar: "صور من المشروع", en: "From the project" },
    awardsL: { ar: "مهرجانات وجوايز", en: "Festivals & awards" },
    catFilm:  { ar: "أفلام", en: "Films" },
    catComm:  { ar: "إعلانات وحملات", en: "Commercials & campaigns" },
    catMusic: { ar: "فيديو كليبات", en: "Music videos" },
    workedWith: { ar: "اشتغلت مع", en: "Worked with" },
    yearL: { ar: "السنة", en: "Year" }
  };

  /* ---------- 1) اللغة ---------- */
  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try { localStorage.setItem("agamy-lang", lang); } catch (e) {}
    var btn = document.querySelector(".lang-toggle");
    if (btn) {
      btn.textContent = lang === "ar" ? "EN" : "عربي";
      btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل للعربية");
    }
    document.querySelectorAll("[data-fb-ar]").forEach(function (el) {
      el.setAttribute("data-fallback", el.getAttribute("data-fb-" + lang) || "");
    });
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("agamy-lang"); } catch (e) {}
    var lang = saved || ((navigator.language || "ar").toLowerCase().indexOf("ar") === 0 ? "ar" : "en");
    applyLang(lang);
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.addEventListener("click", function () {
      applyLang(root.getAttribute("data-lang") === "ar" ? "en" : "ar");
    });
  }

  /* ---------- 2) الهيدر ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var last = 0;
    function onScroll() {
      var y = window.scrollY || 0;
      header.classList.toggle("is-stuck", y > 24);
      header.classList.toggle("is-hidden", y > 400 && y > last + 4);
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 3) الظهور التدريجي ---------- */
  function initReveal(scope) {
    var els = (scope || document).querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 90 + "ms";
      io.observe(el);
    });
  }

  /* ---------- 4) الصور الناقصة ---------- */
  function guardImages(scope) {
    (scope || document).querySelectorAll("img[data-guard]").forEach(function (img) {
      function fail() { if (img.parentElement) img.parentElement.classList.add("is-empty"); }
      if (!img.getAttribute("src")) { fail(); return; }
      img.addEventListener("error", fail);
      if (img.complete && img.naturalWidth === 0) fail();
    });
  }

  /* ---------- 5) الشوريل ---------- */
  function embedUrl(provider, id) {
    return provider === "vimeo"
      ? "https://player.vimeo.com/video/" + encodeURIComponent(id) + "?autoplay=1&title=0&byline=0&portrait=0"
      : "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
  }

  function initReel() {
    var frame = document.querySelector("[data-reel]");
    if (!frame || typeof SITE === "undefined") return;
    var r = SITE.reel || {};
    var img = frame.querySelector("img");
    if (img && r.poster) img.setAttribute("src", r.poster);
    guardImages(frame.parentElement);

    // مفيش شوريل لسه؟ نخفي البلوك كله بدل زرار تشغيل ما بيعملش حاجة
    if (!r.id) {
      var block = frame.closest(".reel");
      if (block) block.hidden = true;
      return;
    }
    function play() {
      frame.innerHTML = '<iframe src="' + embedUrl(r.provider, r.id) +
        '" title="Showreel" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    }
    frame.addEventListener("click", play);
    frame.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); }
    });
  }

  /* ---------- 6) شبكة الأعمال ---------- */
  function publishedWorks() {
    if (typeof SITE === "undefined" || !SITE.works) return [];
    return SITE.works.filter(function (w) { return w.published !== false; });
  }

  function producedWorks() {
    return publishedWorks();
  }

  function renderGrid() {
    var grid = document.querySelector("[data-work-grid]");
    if (!grid) return;
    var works = producedWorks();
    var section = document.getElementById("work");
    if (!works.length) {
      if (section) section.hidden = true;
      var navWork = document.querySelector('[data-nav="work"]');
      if (navWork) navWork.hidden = true;
      return;
    }
    if (section) section.hidden = false;

    // الأعمال متقسّمة حسب النوع، وكل قسم من الأحدث للأقدم
    var GROUPS = [
      { key: "film",       label: TXT.catFilm  },
      { key: "commercial", label: TXT.catComm  },
      { key: "music",      label: TXT.catMusic }
    ];

    function cardHTML(w, n) {
      var cls = "work-card reveal" + (w.lowRes ? " is-lowres" : "");
      return '' +
        '<a class="' + cls + '" href="work.html?id=' + encodeURIComponent(w.id) + '">' +
          '<div class="work-thumb"' +
            (w.posterRatio ? ' style="aspect-ratio:' + w.posterRatio + '"' : "") +
            ' data-fb-ar="' + esc(TXT.missingImage.ar) + '" data-fb-en="' + esc(TXT.missingImage.en) + '">' +
            '<span class="work-index">' + n + '</span>' +
            '<img data-guard src="' + esc(w.poster || "") + '" alt="' + esc(t(w.title)) + '" loading="lazy">' +
          "</div>" +
          '<div class="work-meta">' +
            "<h3>" + bi(w.title) + "</h3>" +
            '<ul class="work-tags">' +
              "<li>" + bi(w.format) + "</li>" +
              "<li>" + bi(w.genre) + "</li>" +
              "<li>" + esc(w.year || "") + "</li>" +
            "</ul>" +
            '<p class="work-line">' + bi(w.logline) + "</p>" +
            (w.status ? '<span class="status">' + bi(w.status) + "</span>" : "") +
          "</div>" +
        "</a>";
    }

    var html = "", ordered = [];
    GROUPS.forEach(function (g) {
      var list = works.filter(function (w) { return (w.category || "commercial") === g.key; });
      if (!list.length) return;
      html += '<div class="work-group">' +
                '<h3 class="group-head"><span>' + bi(g.label) + "</span>" +
                  '<em>' + list.length + "</em></h3>" +
                '<div class="work-grid">' +
                  list.map(function (w, i) {
                    ordered.push(w);
                    return cardHTML(w, String(i + 1).padStart(2, "0"));
                  }).join("") +
                "</div></div>";
    });
    grid.innerHTML = html;

    // الكارت العريض كل ٣ كروت جوّه كل مجموعة — والمشاريع قليلة الدقة بتتخطّى
    grid.querySelectorAll(".work-grid").forEach(function (g) {
      var cards = g.querySelectorAll(".work-card");
      for (var k = 0; k < cards.length; k += 3) {
        var pick = k;
        while (pick < cards.length && cards[pick].classList.contains("is-lowres")) pick++;
        if (pick < cards.length && pick < k + 3) cards[pick].classList.add("is-wide");
      }
    });

    guardImages(grid);
    initReveal(grid);
    refreshFallbacks(grid);
    initCardPreview(grid, ordered);
  }

  /* ---------- 7) صفحة العمل المفردة ---------- */
  function renderWorkPage() {
    var host = document.querySelector("[data-work-page]");
    if (!host) return;

    var id = new URLSearchParams(location.search).get("id");
    // الشغل المتصوّر بس له صفحة. مشاريع التطوير أسامي من غير تفاصيل.
    var works = producedWorks();
    var i = works.findIndex(function (w) { return w.id === id; });

    if (i === -1) {
      host.innerHTML = '<div class="wrap notfound">' +
        "<h1>404</h1><p>" + bi(TXT.notFound) + "</p>" +
        '<p><a class="btn" href="index.html">' + bi(TXT.back) + "</a></p></div>";
      return;
    }

    var w = works[i];
    var prev = works[(i - 1 + works.length) % works.length];
    var next = works[(i + 1) % works.length];

    function setTitle() {
      document.title = t(w.title) + " — " + (root.getAttribute("data-lang") === "en" ? "Mohamed Agamy" : "محمد عجمي");
    }
    setTitle();
    document.addEventListener("langchange", setTitle);

    // كل صور المشروع: البوستر الأول وبعدين باقي الصور — كلها بتفتح بالتكبير
    var workItems = [];
    if (w.poster) workItems.push({ src: w.poster, caption: w.title });
    (w.stills || []).forEach(function (src) {
      workItems.push({ src: src, caption: w.title });
    });

    var frames = (w.stills || []).map(function (src, k) {
      return '<figure class="frame" data-wframe="' + (k + 1) + '" tabindex="0" role="button">' +
        '<img data-guard src="' + esc(src) + '" alt="' + esc(t(w.title)) + " \u2014 " + (k + 2) + '" loading="lazy"></figure>';
    }).join("");

    var galleryBlock = frames
      ? '<section class="section"><div class="wrap">' +
          '<div class="kicker">' + bi(TXT.moreImg) + "</div>" +
        "</div>" +
        // أعمدة أكتر للمشاريع الصغيرة = عرض أقل لكل صورة = حِدّة أعلى
        '<div class="gallery' + (w.lowRes ? " is-lowres" : "") + '">' + frames + "</div>" +
        "</section>"
      : "";

    // المهرجانات والجوايز
    var awardsBlock = "";
    if (w.awards && w.awards.length) {
      awardsBlock = '<div class="awards">' +
        '<div class="kicker">' + bi(TXT.awardsL) + "</div>" +
        '<ul class="creds-list">' +
          w.awards.map(function (a) {
            return '<li' + (a.win ? ' class="is-win"' : "") + ">" + bi(a) + "</li>";
          }).join("") +
        "</ul></div>";
    }

    var videoBlock = "";
    if (w.video && w.video.id) {
      videoBlock = '<section class="section"><div class="wrap">' +
        '<div class="kicker">' + bi(TXT.watch) + "</div>" +
        '<div class="reel-frame" data-play tabindex="0" role="button">' +
          '<img data-guard src="' + esc(w.poster || "") + '" alt="">' +
          '<span class="reel-play"><span>' + playSvg() + "</span></span>" +
        "</div></div></section>";
    }

    host.innerHTML = '' +
      '<section class="work-hero"><div class="wrap">' +
        '<a class="back-link" href="index.html#work">' + arrowSvg() + bi(TXT.back) + "</a>" +
        "<h1>" + bi(w.title) + "</h1>" +
        '<p class="logline">' + bi(w.logline) + "</p>" +
        '<ul class="work-tags">' +
          "<li>" + bi(w.format) + "</li><li>" + bi(w.genre) + "</li><li>" + esc(w.year || "") + "</li>" +
        "</ul>" +
      "</div></section>" +

      '<section class="section"><div class="wrap">' +
        '<div class="work-thumb" data-wframe="0" tabindex="0" role="button"' +
          ' style="aspect-ratio:' + (w.posterRatio || "21/9") + ';cursor:zoom-in"' +
          ' data-fb-ar="' + esc(TXT.missingImage.ar) + '" data-fb-en="' + esc(TXT.missingImage.en) + '">' +
          '<img data-guard src="' + esc(w.poster || "") + '" alt="' + esc(t(w.title)) + '"></div>' +
      "</div></section>" +

      videoBlock +

      '<section class="section"><div class="wrap">' +
        '<div class="kicker">' + bi(TXT.credits) + "</div>" +
        '<dl class="credits">' +
          "<div><dt>" + bi(TXT.role) + "</dt><dd>" + bi(w.role) + "</dd></div>" +
          "<div><dt>" + bi(TXT.format) + "</dt><dd>" + bi(w.format) + "</dd></div>" +
          "<div><dt>" + bi(TXT.genre) + "</dt><dd>" + bi(w.genre) + "</dd></div>" +
          (w.status ? "<div><dt>" + bi(w.statusLabel || TXT.clientL) + "</dt><dd>" + bi(w.status) + "</dd></div>" : "") +
          "<div><dt>" + bi(TXT.yearL) + "</dt><dd>" + esc(w.year || "") + "</dd></div>" +
        "</dl>" +
        (w.notes ? '<div class="notes" style="margin-top:2.5rem"><p>' + bi(w.notes) + "</p></div>" : "") +
        awardsBlock +
      "</div></section>" +

      galleryBlock +

      '<section class="section"><div class="wrap work-nav">' +
        "<a href=\"work.html?id=" + encodeURIComponent(prev.id) + "\"><small>" + bi(TXT.prev) + "</small>" + bi(prev.title) + "</a>" +
        "<a href=\"work.html?id=" + encodeURIComponent(next.id) + "\"><small>" + bi(TXT.next) + "</small>" + bi(next.title) + "</a>" +
      "</div></section>";

    guardImages(host);
    initReveal(host);
    refreshFallbacks(host);

    // البوستر وأي صورة في المعرض بيفتحوا التكبير
    function openFrom(el) {
      var n = +el.getAttribute("data-wframe");
      if (!isNaN(n)) openLightbox(workItems, n);
    }
    host.addEventListener("click", function (e) {
      var el = e.target.closest("[data-wframe]");
      if (el) openFrom(el);
    });
    host.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var el = e.target.closest("[data-wframe]");
      if (el) { e.preventDefault(); openFrom(el); }
    });

    var vf = host.querySelector("[data-play]");
    if (vf && w.video) {
      var playVid = function () {
        vf.innerHTML = '<iframe src="' + embedUrl(w.video.provider, w.video.id) +
          '" title="' + esc(t(w.title)) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
      };
      vf.addEventListener("click", playVid);
      vf.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playVid(); }
      });
    }
  }

  /* ---------- خلفية أول الصفحة ---------- */
  function initHeroBg() {
    var el = document.querySelector("[data-hero-bg]");
    if (!el || typeof SITE === "undefined") return;
    var src = (SITE.hero && SITE.hero.image) || "";
    if (!src) return;
    var probe = new Image();
    probe.onload = function () {
      el.style.backgroundImage = 'url("' + src + '")';
      el.classList.add("is-on");
      document.querySelector(".hero").classList.add("has-bg");
    };
    probe.src = src;
  }

  /* ---------- فيديو خلفية أول الصفحة ---------- */
  function initHeroVideo() {
    var host = document.querySelector("[data-hero-video]");
    if (!host || typeof SITE === "undefined") return;
    var v = SITE.hero && SITE.hero.video;
    if (!v || !v.id) return;

    // وضع تقليل الحركة: الصورة وخلاص
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var src = v.provider === "youtube"
      ? "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) +
        "?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&modestbranding=1&playlist=" + encodeURIComponent(v.id)
      : "https://player.vimeo.com/video/" + encodeURIComponent(v.id) +
        "?background=1&autoplay=1&loop=1&muted=1&autopause=0";

    var f = document.createElement("iframe");
    f.setAttribute("src", src);
    f.setAttribute("allow", "autoplay; fullscreen");
    f.setAttribute("tabindex", "-1");
    f.setAttribute("aria-hidden", "true");
    f.setAttribute("title", "");
    f.addEventListener("load", function () {
      // الصورة بتفضل تحته fallback، والفيديو بيظهر بالراحة فوقها
      setTimeout(function () {
        host.classList.add("is-on");
        var hero = host.closest(".hero");
        if (hero) hero.classList.add("has-video");   // الصورة تسيب مكانها للفيديو
      }, 500);
    });

    // على الموبايل الصورة تكفي — الفيديو بياكل من باقة النت.
    // بنستنى الشاشة تتقاس فعلًا: لو التبويب مخفي عرضها بيبقى صفر،
    // فبنسمع للتغيير بدل ما نلغي الفيديو خالص.
    var wide = window.matchMedia("(min-width: 861px)");
    function mount() {
      if (!wide.matches || host.firstChild) return;
      host.appendChild(f);
    }
    mount();
    if (wide.addEventListener) wide.addEventListener("change", mount);
    else if (wide.addListener) wide.addListener(mount);
    window.addEventListener("resize", mount, { passive: true });
  }

  /* ---------- سطر البراندات تحت الأرقام ---------- */
  function initClients() {
    var host = document.querySelector("[data-clients]");
    if (!host || typeof SITE === "undefined") return;
    var list = SITE.clients || [];
    if (!list.length) { host.hidden = true; return; }
    host.innerHTML =
      '<span class="proof-label">' + bi(TXT.workedWith) + "</span>" +
      list.map(function (c) { return '<span class="client">' + esc(c) + "</span>"; })
          .join('<i aria-hidden="true"></i>');
  }

  /* ---------- معاينة متحركة على كارت المشروع ---------- */
  function initCardPreview(grid, works) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;   // اللمس مالوش hover

    grid.querySelectorAll(".work-card").forEach(function (card, i) {
      var w = works[i];
      if (!w) return;
      var shots = [w.poster].concat(w.stills || []).filter(Boolean);
      if (shots.length < 2) return;

      var thumb = card.querySelector(".work-thumb");
      if (!thumb) return;

      // طبقة فوق الصورة الأصلية عشان التبديل يبقى ناعم
      var layer = document.createElement("img");
      layer.className = "preview-layer";
      layer.alt = "";
      layer.setAttribute("aria-hidden", "true");
      thumb.appendChild(layer);

      var timer = null, idx = 0, warmed = false;

      function warm() {                    // تحميل مسبق مرة واحدة بس
        if (warmed) return;
        warmed = true;
        shots.slice(1).forEach(function (src) { var p = new Image(); p.src = src; });
      }
      function step() {
        idx = (idx + 1) % shots.length;
        layer.src = shots[idx];
        layer.classList.toggle("is-on", idx !== 0);
      }
      function start() { warm(); if (!timer) timer = setInterval(step, 700); }
      function stop() {
        clearInterval(timer); timer = null; idx = 0;
        layer.classList.remove("is-on");
      }

      card.addEventListener("mouseenter", start);
      card.addEventListener("mouseleave", stop);
      card.addEventListener("focus", start);
      card.addEventListener("blur", stop);
    });
  }

  /* ---------- معرض اللقطات ---------- */
  var galleryItems = [];

  function renderGallery() {
    var host = document.querySelector("[data-gallery]");
    if (!host || typeof SITE === "undefined") return;

    galleryItems = (SITE.gallery || []).filter(function (g) { return g && g.src; });

    if (!galleryItems.length) {
      // لسه مفيش لقطات — نوّري الأماكن عشان يبان الناقص
      var slots = "";
      for (var k = 0; k < 6; k++) {
        slots += '<figure class="frame is-empty" data-fb-ar="' + esc(TXT.missingFrame.ar) +
                 '" data-fb-en="' + esc(TXT.missingFrame.en) + '"><img data-guard src="" alt=""></figure>';
      }
      host.innerHTML = slots;
      guardImages(host);
      refreshFallbacks(host);
      return;
    }

    host.innerHTML = galleryItems.map(function (g, i) {
      var cap = g.caption ? '<figcaption>' + bi(g.caption) + "</figcaption>" : "";
      return '<figure class="frame" data-frame="' + i + '" tabindex="0" role="button">' +
               '<img data-guard src="' + esc(g.src) + '" alt="' + esc(g.caption ? t(g.caption) : "") + '" loading="lazy">' +
               cap +
             "</figure>";
    }).join("");

    guardImages(host);
    refreshFallbacks(host);

    host.addEventListener("click", function (e) {
      var f = e.target.closest("[data-frame]");
      if (f) openLightbox(galleryItems, +f.getAttribute("data-frame"));
    });
    host.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var f = e.target.closest("[data-frame]");
      if (f) { e.preventDefault(); openLightbox(galleryItems, +f.getAttribute("data-frame")); }
    });
  }

  /* ---------- صندوق التكبير ---------- */
  var lb = null, lbIndex = 0, lbReturn = null, lbItems = [];

  function openLightbox(items, i) {
    lb = lb || ensureLightbox();
    if (!lb || !items || !items.length) return;
    lbReturn = document.activeElement;
    lbItems = items;
    lbIndex = i;
    paintLightbox();
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lb.querySelector("[data-lb-close]").focus();
  }

  function closeLightbox() {
    if (!lb || lb.hidden) return;
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lbReturn && lbReturn.focus) lbReturn.focus();
  }

  function stepLightbox(d) {
    if (!lbItems.length) return;
    lbIndex = (lbIndex + d + lbItems.length) % lbItems.length;
    paintLightbox();
  }

  function paintLightbox() {
    var g = lbItems[lbIndex];
    var img = lb.querySelector("img");
    // الصورة ما تتعرضش أكبر من دقّتها الحقيقية — تفضل حادّة بدل ما تتمدّ
    img.style.maxWidth = "";
    img.onload = function () {
      if (img.naturalWidth) img.style.maxWidth = img.naturalWidth + "px";
    };
    var cap = lb.querySelector("figcaption");
    img.src = g.src;
    img.alt = g.caption ? t(g.caption) : "";
    cap.innerHTML = g.caption ? bi(g.caption) : "";
    cap.hidden = !g.caption;
    var many = lbItems.length > 1;
    lb.querySelector("[data-lb-prev]").hidden = !many;
    lb.querySelector("[data-lb-next]").hidden = !many;
  }

  // بيبني صندوق التكبير لو الصفحة مفيهاش واحد — عشان يشتغل في أي صفحة
  function ensureLightbox() {
    var el = document.querySelector("[data-lightbox]");
    if (el) return el;
    el = document.createElement("div");
    el.className = "lightbox";
    el.setAttribute("data-lightbox", "");
    el.hidden = true;
    el.innerHTML =
      '<button class="lb-close" type="button" data-lb-close aria-label="إغلاق / Close">&#215;</button>' +
      '<button class="lb-nav lb-prev" type="button" data-lb-prev aria-label="السابق / Previous">&#8249;</button>' +
      '<figure class="lb-stage"><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lb-nav lb-next" type="button" data-lb-next aria-label="التالي / Next">&#8250;</button>';
    document.body.appendChild(el);
    return el;
  }

  function initLightbox() {
    lb = ensureLightbox();
    if (!lb) return;
    lb.querySelector("[data-lb-close]").addEventListener("click", closeLightbox);
    lb.querySelector("[data-lb-prev]").addEventListener("click", function () { stepLightbox(-1); });
    lb.querySelector("[data-lb-next]").addEventListener("click", function () { stepLightbox(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lb || lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") stepLightbox(1);
      else if (e.key === "ArrowLeft") stepLightbox(-1);
    });
  }

  // بيحدّث نصوص الأماكن الفاضية حسب اللغة الحالية
  function refreshFallbacks(scope) {
    var lang = root.getAttribute("data-lang") === "en" ? "en" : "ar";
    (scope || document).querySelectorAll("[data-fb-ar]").forEach(function (el) {
      el.setAttribute("data-fallback", el.getAttribute("data-fb-" + lang) || "");
    });
  }

  function playSvg() {
    return '<svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true"><path fill="#f4f2ef" d="M19 11 0 22V0z"/></svg>';
  }
  function arrowSvg() {
    return '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true"><path d="M13 6H1m0 0 4.5-4.5M1 6l4.5 4.5" stroke="currentColor" stroke-width="1.3"/></svg>';
  }

  /* ---------- تشغيل ---------- */
  function boot() {
    initLang();
    initHeader();
    initHeroBg();
    initHeroVideo();
    initClients();
    renderGallery();
    initLightbox();
    renderGrid();
    renderWorkPage();
    initReel();
    guardImages(document);
    initReveal(document);
    var y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
