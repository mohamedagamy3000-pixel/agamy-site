/* =========================================================
   الحركة السينمائية — Lenis (سكرول ناعم) + GSAP ScrollTrigger.
   الملف ده إضافة اختيارية بالكامل: لو مكتبة مالهاش تحميل (مشكلة
   نت مثلاً) أو المستخدم مفضّل حركة أقل (prefers-reduced-motion)،
   الموقع بيرجع يشتغل عادي بالظبط زي قبل ما يتضاف الملف ده —
   مفيش تعديل ولا لمسة في app.js أو content.js أو الـ CSS.
   ========================================================= */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined";
  var hasST   = hasGsap && typeof window.ScrollTrigger !== "undefined";
  var hasLenis = typeof window.Lenis !== "undefined";

  /* ---------- 1) سكرول ناعم ---------- */
  function initSmoothScroll() {
    if (reduce || !hasLenis) return;

    var lenis = new window.Lenis({
      duration: 1.05,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true
    });
    window.__lenis = lenis;

    if (hasGsap) {
      window.gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(time) { lenis.raf(time); requestAnimationFrame(raf); });
    }
    if (hasST) lenis.on("scroll", window.ScrollTrigger.update);

    // صندوق التكبير (lightbox) بيحط overflow:hidden على body لما يفتح —
    // بنراقب التغيير ده بدل ما نلمس app.js، ونوقف/نشغّل السكرول الناعم تبعًا له
    var mo = new MutationObserver(function () {
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ["style"] });
  }

  /* ---------- 2) مقدمة الهيرو (أول ما الصفحة تفتح) ---------- */
  function initHeroIntro() {
    if (reduce || !hasGsap) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;

    var targets = [
      hero.querySelector(".kicker"),
      hero.querySelector("h1"),
      hero.querySelector(".lead"),
      hero.querySelector(".hero-actions"),
      hero.querySelector(".reel")
    ].filter(Boolean);
    if (!targets.length) return;

    window.gsap.set(targets, { opacity: 0, y: 26 });
    window.gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.15,
      clearProps: "opacity,transform"
    });
  }

  /* ---------- 3) خلفية الهيرو بتنزلق شوية مع السكرول ---------- */
  function initHeroParallax() {
    if (reduce || !hasGsap || !hasST) return;
    var bg = document.querySelector("[data-hero-bg]");
    var hero = document.querySelector(".hero");
    if (!bg || !hero) return;

    window.gsap.set(bg, { scale: 1.15, transformOrigin: "50% 50%" });
    window.gsap.to(bg, {
      yPercent: 14,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
    });
  }

  /* ---------- 4) عدّاد الأرقام في شريط الإثبات ---------- */
  function initCounters() {
    if (reduce || !hasGsap || !hasST) return;
    var nums = document.querySelectorAll(".proof-stats dd");
    nums.forEach(function (el) {
      var target = parseFloat(el.textContent);
      if (isNaN(target)) return;
      var obj = { val: 0 };
      window.ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: function () {
          window.gsap.to(obj, {
            val: target,
            duration: 1.3,
            ease: "power2.out",
            onUpdate: function () { el.textContent = Math.round(obj.val); }
          });
        }
      });
    });
  }

  function boot() {
    if (hasGsap && hasST) window.gsap.registerPlugin(window.ScrollTrigger);
    initSmoothScroll();
    initHeroIntro();
    initHeroParallax();
    initCounters();

    // ارتفاع الصفحة بيتغيّر لما الصور تخلص تحميل — نظبط مواقع التريجر تاني
    if (hasST) window.addEventListener("load", function () { window.ScrollTrigger.refresh(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
