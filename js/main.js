/* =========================================================
   Royal Smile Dental Clinic — main.js
   بيبني الأقسام من data.js ويشغّل كل الحركات والتفاعل.
   ========================================================= */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  root.classList.add("js");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const store = {
    get(k) { try { return localStorage.getItem("rs-" + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("rs-" + k, v); } catch (e) {} },
  };

  /* ---------------- نصوص الواجهة ---------------- */
  const UI = {
    ar: {
      "nav.home": "الرئيسية", "nav.about": "احنا مين", "nav.services": "الخدمات", "nav.results": "قبل وبعد",
      "nav.doctors": "الدكاترة", "nav.faq": "أسئلة شائعة", "nav.contact": "تواصل معنا",
      "cta.book": "احجز ميعاد", "cta.bookNow": "احجز كشفك دلوقتي", "cta.services": "شوف خدماتنا",
      "about.badge": "سنين بنرسم ابتسامات",
      "why.eyebrow": "ليه تختارنا", "why.title": "ست أسباب تخليك مطمن وانت بتتعالج عندنا",
      "services.title": "كل اللي سنانك محتاجاه في مكان واحد",
      "services.sub": "اختار القسم وشوف الخدمات، ولما تدوس \"احجز\" الخدمة هتتحط في الفورم على طول.",
      "services.book": "احجز",
      "results.title": "النتيجة بتتكلم", "results.sub": "اسحب الخط في النص عشان تشوف الفرق.",
      "results.demo": "الصور دي رسم توضيحي. حط صور حالاتكم الحقيقية في ملف البيانات.",
      "results.before": "قبل", "results.after": "بعد",
      "doctors.title": "فريقنا الطبي", "doctors.sub": "فريق متكامل لكل ما يخص الأسنان. دوس على الدكتور عشان تحجز معاه.",
      "doctors.years": "سنين خبرة", "doctors.book": "احجز مع الدكتور", "doctors.none": "مفيش دكاترة في التخصص ده حالياً.",
      "reviews.eyebrow": "آراء المرضى", "reviews.title": "بيقولوا إيه عننا",
      "reviews.sample": "آراء تجريبية للعرض، هتتبدل بآراء مرضاكم الحقيقية.",
      "reviews.titleEmpty": "رأيك يهمنا", "reviews.askTitle": "اتعالجت عندنا؟ شاركنا رأيك",
      "reviews.askText": "رأيك بيساعدنا نتحسن، وبيساعد غيرك يختار صح.", "reviews.askWa": "اكتب رأيك على واتساب", "reviews.askFb": "قيّمنا على فيسبوك",
      "reviews.waMsg": "رأيي في مركز رويال سمايل:",
      "faq.title": "عندك سؤال؟", "faq.sub": "دي أكتر الأسئلة اللي بتوصلنا. لو سؤالك مش هنا، كلمنا على واتساب.",
      "faq.ask": "اسألنا على واتساب",
      "book.eyebrow": "احجز ميعادك", "book.title": "اختار الخدمة والدكتور والميعاد",
      "book.sub": "المواعيد المتاحة بتظهر حسب اليوم اللي تختاره. بعد ما تكمّل، ابعت الحجز على واتساب وهنأكده معاك.",
      "book.s1": "اختار الخدمة", "book.s2": "اختار الدكتور واليوم", "book.s3": "اختار الساعة وابعت",
      "form.name": "الاسم بالكامل", "form.phone": "رقم الموبايل", "form.service": "الخدمة", "form.doctor": "الدكتور",
      "form.date": "اليوم", "form.time": "الساعة", "form.notes": "ملاحظات (اختياري)", "form.submit": "كمّل الحجز",
      "form.doneTitle": "بيانات الحجز جاهزة", "form.sendWa": "ابعت الحجز على واتساب", "form.edit": "عدّل البيانات",
      "form.pickService": "اختار الخدمة", "form.anyDoctor": "أي دكتور متاح",
      "form.pickDate": "اختار اليوم الأول عشان تظهر المواعيد.", "form.dayOff": "العيادة إجازة اليوم ده. اختار يوم تاني.",
      "form.noSlots": "مفيش مواعيد فاضية باقية النهارده. اختار يوم تاني.",
      "err.name": "اكتب اسمك بالكامل.", "err.phone": "الرقم لازم يكون 11 رقم ويبدأ بـ 010 أو 011 أو 012 أو 015.",
      "err.service": "اختار الخدمة.", "err.date": "اختار يوم من النهارده أو بعده.", "err.slot": "اختار الساعة.",
      "sum.name": "الاسم", "sum.phone": "الموبايل", "sum.service": "الخدمة", "sum.doctor": "الدكتور", "sum.when": "الميعاد", "sum.notes": "ملاحظات",
      "wa.tip": "كلمنا على واتساب", "wa.hello": "أهلاً، عندي استفسار عن مركز رويال سمايل.",
      "wa.booking": "طلب حجز — رويال سمايل",
      "contact.title": "مستنيينك في رويال سمايل", "contact.address": "العنوان", "contact.map": "افتح على الخريطة",
      "contact.phone": "التليفون", "contact.wa": "واتساب", "contact.hours": "مواعيد العمل", "contact.copy": "انسخ الرقم",
      "contact.copied": "اتنسخ الرقم", "contact.off": "إجازة",
      "status.open": "مفتوح دلوقتي", "status.closed": "مقفول دلوقتي", "status.until": "لحد", "status.opens": "بنفتح",
      "footer.rights": "كل الحقوق محفوظة.",
      "toast.service": "اتحطت الخدمة في فورم الحجز", "toast.doctor": "اتحط الدكتور في فورم الحجز",
      "theme.dark": "الوضع الداكن", "theme.light": "الوضع الفاتح",
    },
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.services": "Services", "nav.results": "Before & After",
      "nav.doctors": "Doctors", "nav.faq": "FAQ", "nav.contact": "Contact",
      "cta.book": "Book a visit", "cta.bookNow": "Book your check-up", "cta.services": "Our services",
      "about.badge": "years of crafting smiles",
      "why.eyebrow": "Why choose us", "why.title": "Six reasons to feel at ease in our chair",
      "services.title": "Everything your teeth need, in one place",
      "services.sub": "Pick a category. Tap \"Book\" and the service is added to the booking form.",
      "services.book": "Book",
      "results.title": "Results that speak", "results.sub": "Drag the line to compare.",
      "results.demo": "These are illustrations. Add your real case photos in the data file.",
      "results.before": "Before", "results.after": "After",
      "doctors.title": "Our dental team", "doctors.sub": "A complete team for all your dental needs. Tap a doctor to book with them.",
      "doctors.years": "years of experience", "doctors.book": "Book with this doctor", "doctors.none": "No doctors in this specialty yet.",
      "reviews.eyebrow": "Patient reviews", "reviews.title": "What patients say",
      "reviews.sample": "Sample reviews for layout only. Replace with real patient reviews.",
      "reviews.titleEmpty": "Your opinion matters", "reviews.askTitle": "Treated with us? Share your experience",
      "reviews.askText": "Your feedback helps us improve and helps others choose.", "reviews.askWa": "Send a review on WhatsApp", "reviews.askFb": "Rate us on Facebook",
      "reviews.waMsg": "My review of Royal Smile Dental Clinic:",
      "faq.title": "Got a question?", "faq.sub": "These are the questions we hear most. If yours isn't here, message us on WhatsApp.",
      "faq.ask": "Ask on WhatsApp",
      "book.eyebrow": "Book a visit", "book.title": "Choose a service, doctor and time",
      "book.sub": "Available times appear for the day you pick. When you're done, send the request on WhatsApp and we'll confirm.",
      "book.s1": "Choose a service", "book.s2": "Choose a doctor and day", "book.s3": "Pick a time and send",
      "form.name": "Full name", "form.phone": "Mobile number", "form.service": "Service", "form.doctor": "Doctor",
      "form.date": "Day", "form.time": "Time", "form.notes": "Notes (optional)", "form.submit": "Continue",
      "form.doneTitle": "Your booking is ready", "form.sendWa": "Send booking on WhatsApp", "form.edit": "Edit details",
      "form.pickService": "Choose a service", "form.anyDoctor": "Any available doctor",
      "form.pickDate": "Pick a day to see available times.", "form.dayOff": "The clinic is closed that day. Pick another day.",
      "form.noSlots": "No times left today. Pick another day.",
      "err.name": "Enter your full name.", "err.phone": "Use an 11-digit number starting with 010, 011, 012 or 015.",
      "err.service": "Choose a service.", "err.date": "Pick today or a later day.", "err.slot": "Pick a time.",
      "sum.name": "Name", "sum.phone": "Mobile", "sum.service": "Service", "sum.doctor": "Doctor", "sum.when": "When", "sum.notes": "Notes",
      "wa.tip": "Chat on WhatsApp", "wa.hello": "Hello, I have a question about Royal Smile Dental Clinic.",
      "wa.booking": "Booking request — Royal Smile",
      "contact.title": "Visit Royal Smile", "contact.address": "Address", "contact.map": "Open in Maps",
      "contact.phone": "Phone", "contact.wa": "WhatsApp", "contact.hours": "Opening hours", "contact.copy": "Copy number",
      "contact.copied": "Number copied", "contact.off": "Closed",
      "status.open": "Open now", "status.closed": "Closed now", "status.until": "until", "status.opens": "Opens",
      "footer.rights": "All rights reserved.",
      "toast.service": "Service added to the booking form", "toast.doctor": "Doctor added to the booking form",
      "theme.dark": "Dark mode", "theme.light": "Light mode",
    },
  };

  let lang = store.get("lang") === "en" ? "en" : "ar";
  const t = (o) => (o == null ? "" : typeof o === "string" ? (UI[lang][o] ?? o) : (o[lang] ?? o.ar ?? ""));
  const loc = () => (lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB");

  /* ---------------- أيقونات ---------------- */
  const IC = {
    sparkle: '<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/><path d="M19 3v4M17 5h4"/>',
    implant: '<path d="M7 4h10c0 3-2 4-5 4S7 7 7 4z"/><path d="M9 10h6M9.5 13h5M10 16h4M11 19h2"/>',
    braces: '<path d="M3 10c3 2 15 2 18 0"/><rect x="5" y="9" width="3" height="4" rx=".6"/><rect x="10.5" y="9.5" width="3" height="4" rx=".6"/><rect x="16" y="9" width="3" height="4" rx=".6"/><path d="M4 15c3 3 13 3 16 0"/>',
    tooth: '<path d="M7 3c2 0 3 1 5 1s3-1 5-1c3 0 4 3 3 7-.7 3-1.2 11-3.5 11S15 15 12 15s-2.2 6-4.5 6S4.7 13 4 10C3 6 4 3 7 3z"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14c1.2 1.6 2.5 2.3 4 2.3s2.8-.7 4-2.3M9 9.5h.01M15 9.5h.01"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
    root: '<path d="M7 3c2 0 3 1 5 1s3-1 5-1c3 0 4 3 3 7"/><path d="M4 10c-1-4 0-7 3-7"/><path d="M12 9v12M8.5 12l1.5 8M15.5 12l-1.5 8"/>',
    crown: '<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/><path d="M5 19h14"/>',
    shield: '<path d="M12 3l8 3v6c0 4.6-3.4 8.3-8 9-4.6-.7-8-4.4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M4 12h16"/>',
    calm: '<path d="M12 21c-5-3-8-6.5-8-10.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 8 2.5C20 14.5 17 18 12 21z"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 21l5-3 5 3-1.5-7"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    chat: '<path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z"/>',
    fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
    ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true">${IC[n] || IC.tooth}</svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const waLink = (text) => `https://wa.me/${S.clinic.whatsapp}?text=${encodeURIComponent(text)}`;

  /* ---------------- toast ---------------- */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (el.hidden = true), 2400);
  }

  /* ---------------- مواعيد العمل ---------------- */
  function cairoNow() {
    const p = new Intl.DateTimeFormat("en-US", { timeZone: "Africa/Cairo", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
    const g = (k) => p.find((x) => x.type === k)?.value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday"));
    return { day, h: +g("hour") + +g("minute") / 60 };
  }
  const fmtHour = (h) => new Intl.DateTimeFormat(loc(), { hour: "numeric", minute: h % 1 ? "2-digit" : undefined, hour12: true }).format(new Date(2026, 0, 1, Math.floor(h), Math.round((h % 1) * 60)));
  const dayName = (d) => new Intl.DateTimeFormat(loc(), { weekday: "long" }).format(new Date(2026, 0, 4 + d)); // 4 Jan 2026 = Sunday

  function renderStatus() {
    const { day, h } = cairoNow();
    const today = S.clinic.hours[day];
    const prev = S.clinic.hours[(day + 6) % 7];
    const card = $("#statusCard");
    // مفتوح لو احنا جوه مواعيد النهارده، أو بعد نص الليل وجوه مواعيد امبارح
    const openUntil = today && h >= today[0] && h < today[1] ? today[1] : prev && prev[1] > 24 && h < prev[1] - 24 ? prev[1] : null;
    if (openUntil != null) {
      card.classList.remove("closed");
      $("#openStatus").textContent = t("status.open");
      $("#openHours").textContent = `${t("status.until")} ${fmtHour(openUntil)}`;
    } else {
      card.classList.add("closed");
      $("#openStatus").textContent = t("status.closed");
      let d = day, add = 0, next = null;
      if (today && h < today[0]) next = { d: day, o: today[0] };
      while (!next && add < 7) { add++; d = (day + add) % 7; if (S.clinic.hours[d]) next = { d, o: S.clinic.hours[d][0] }; }
      $("#openHours").textContent = next ? `${t("status.opens")} ${next.d === day ? "" : dayName(next.d) + " "}${fmtHour(next.o)}` : "";
    }
  }

  /* ---------------- 1. الهيدر ---------------- */
  function initHeader() {
    const header = $("#header"), progress = $("#progress"), toTop = $("#toTop");
    const onScroll = () => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      header.classList.toggle("scrolled", y > 8);
      progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      toTop.classList.toggle("show", y > innerHeight * 0.8);
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

    const menu = $("#menu"), burger = $("#burger");
    const close = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
    burger.addEventListener("click", () => {
      const open = !menu.classList.contains("open");
      menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", String(open));
    });
    $$("a", menu).forEach((a) => a.addEventListener("click", close));
    addEventListener("keydown", (e) => e.key === "Escape" && close());

    // الرابط النشط حسب القسم الظاهر
    const links = $$("a", menu);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", "about", "services", "results", "doctors", "faq", "contact"].forEach((id) => { const s = document.getElementById(id); s && io.observe(s); });
  }

  /* ---------------- 2. سلايدر الرئيسية ---------------- */
  const hero = { i: 0, timer: null, dur: 6000 };
  function renderHero() {
    $("#heroSlides").innerHTML = S.hero.map((s, i) => {
      const words = t(s.title).split(" ");
      const last = words.pop();
      return `<div class="slide${i === hero.i ? " active" : ""}" aria-hidden="${i !== hero.i}">
        <span class="tag"><i></i>${esc(t(s.tag))}</span>
        <h1>${esc(words.join(" "))} <em>${esc(last)}</em></h1>
        <p>${esc(t(s.text))}</p></div>`;
    }).join("");
    $("#heroDots").innerHTML = S.hero.map((s, i) => `<button type="button" role="tab" aria-label="${esc(t(s.tag))}" aria-selected="${i === hero.i}" class="${i === hero.i ? "active" : ""}" style="--dur:${hero.dur}ms"></button>`).join("");
    $$("#heroDots button").forEach((b, i) => b.addEventListener("click", () => goHero(i, true)));
    $("#heroIconCard").innerHTML = icon(S.hero[hero.i].icon);
    if (reduceMotion) $("#heroDots").classList.add("static");
  }
  function goHero(i, user) {
    hero.i = (i + S.hero.length) % S.hero.length;
    $$("#heroSlides .slide").forEach((el, k) => { el.classList.toggle("active", k === hero.i); el.setAttribute("aria-hidden", String(k !== hero.i)); });
    $$("#heroDots button").forEach((el, k) => {
      el.classList.remove("active"); void el.offsetWidth; // يعيد تشغيل شريط التقدم
      el.classList.toggle("active", k === hero.i); el.setAttribute("aria-selected", String(k === hero.i));
    });
    $("#heroIconCard").innerHTML = icon(S.hero[hero.i].icon);
    if (user) startHero();
  }
  function startHero() {
    clearInterval(hero.timer);
    if (reduceMotion) return;
    hero.timer = setInterval(() => goHero(hero.i + 1), hero.dur);
  }
  function initHero() {
    $("#heroPrev").addEventListener("click", () => goHero(hero.i - 1, true));
    $("#heroNext").addEventListener("click", () => goHero(hero.i + 1, true));
    const box = $(".hero-copy");
    box.addEventListener("mouseenter", () => { clearInterval(hero.timer); box.classList.add("paused"); });
    box.addEventListener("mouseleave", () => { box.classList.remove("paused"); goHero(hero.i, true); });
    swipe($("#heroSlides"), (dir) => goHero(hero.i + dir, true));
    document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(hero.timer) : startHero()));
    startHero();
  }
  function swipe(el, cb) {
    let x0 = null;
    el.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    el.addEventListener("touchend", (e) => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) < 40) return;
      const forward = lang === "ar" ? dx > 0 : dx < 0;
      cb(forward ? 1 : -1);
    });
  }

  /* ---------------- 3. الأرقام ---------------- */
  const counted = new WeakSet();
  function renderStats() {
    $("#stats").innerHTML = S.stats.map((s) => `<div class="stat"><b data-to="${s.value}" data-suffix="${esc(s.suffix)}">${s.value.toLocaleString("en-US")}${esc(s.suffix)}</b><span>${esc(t(s.label))}</span></div>`).join("");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting || counted.has(e.target)) return;
      counted.add(e.target); io.unobserve(e.target);
      $$("b[data-to]", e.target).forEach(countUp);
    }), { threshold: 0.4 });
    io.observe($("#stats"));
  }
  function countUp(el) {
    const to = +el.dataset.to, suf = el.dataset.suffix, d = 1800, t0 = performance.now();
    if (reduceMotion) return;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / d), v = Math.round(to * (1 - Math.pow(1 - p, 4)));
      el.textContent = v.toLocaleString("en-US") + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------------- 4. احنا مين ---------------- */
  function renderAbout() {
    $("#aboutTitle").textContent = t(S.about.title);
    $("#aboutText").innerHTML = S.about.paragraphs.map((p) => `<p>${esc(t(p))}</p>`).join("");
    $("#aboutBullets").innerHTML = S.about.bullets.map((b) => `<li>${esc(t(b))}</li>`).join("");
    const yrs = S.stats[0]; $("#aboutYears").textContent = yrs.value + yrs.suffix;
  }

  /* ---------------- 5. ليه تختارنا ---------------- */
  function renderWhy() {
    $("#whyGrid").innerHTML = S.why.map((w, i) => `<article class="why reveal" style="transition-delay:${(i % 3) * 90}ms">
      <span class="ic">${icon(w.icon)}</span><h3>${esc(t(w.title))}</h3><p>${esc(t(w.text))}</p></article>`).join("");
  }

  /* ---------------- 6. الخدمات ---------------- */
  let svcCat = S.serviceCategories[0].id;
  function renderServiceTabs() {
    $("#serviceTabs").innerHTML = S.serviceCategories.map((c) => `<button type="button" role="tab" class="tab${c.id === svcCat ? " active" : ""}" aria-selected="${c.id === svcCat}" data-cat="${c.id}">${esc(t(c.label))}</button>`).join("");
    $$("#serviceTabs .tab").forEach((b) => b.addEventListener("click", () => { svcCat = b.dataset.cat; renderServiceTabs(); renderServices(); }));
  }
  function renderServices() {
    const list = S.services.filter((s) => svcCat === "all" || s.cat === svcCat);
    $("#servicesGrid").innerHTML = list.map((s, i) => `<article class="svc" style="--i:${i}">
      <span class="ic">${icon(s.icon)}</span>
      <h3>${esc(t(s.name))}</h3>
      <p>${esc(t(s.text))}</p>
      <div class="svc-foot"><small>${icon("clock")}${esc(t(s.duration))}</small>
      <button type="button" data-svc="${s.id}">${esc(t("services.book"))} ${icon("arrow").replace("<svg", '<svg class="arrow" style="width:16px;height:16px"')}</button></div>
    </article>`).join("");
    $$("#servicesGrid [data-svc]").forEach((b) => b.addEventListener("click", () => {
      setService(b.dataset.svc); goTo("#book"); toast(t("toast.service"));
    }));
  }

  /* ---------------- 7. قبل وبعد ---------------- */
  let caseIdx = 0;
  function smileSVG(kind, after) {
    // رسم توضيحي لصف سنان؛ بيتغير حسب الحالة
    const n = 8, W = 640, H = 400, toothW = 58, gap = 4, startX = (W - (n * toothW + (n - 1) * gap)) / 2;
    const shade = after ? "#fbfaf6" : kind === "whitening" ? "#e2cf96" : kind === "veneers" ? "#dccb9e" : "#f1ead9";
    const edge = after ? "#e6e1d6" : "#b9a56d";
    let teeth = "";
    for (let i = 0; i < n; i++) {
      const c = Math.abs(i - (n - 1) / 2);
      let h = 150 - c * 10, x = startX + i * (toothW + gap), y = 120, rot = 0, w = toothW;
      if (!after && kind === "ortho") { rot = [8, -10, 6, -4, 9, -12, 5, -7][i]; y += [10, -6, 14, 0, -4, 12, -8, 6][i]; }
      if (!after && kind === "veneers") { h -= [0, 14, 0, 22, 6, 0, 18, 4][i]; w -= [0, 6, 0, 4, 0, 8, 0, 2][i]; }
      teeth += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${shade}" stroke="${edge}" stroke-width="2" transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"/>`;
      if (!after && kind === "whitening") teeth += `<rect x="${x + 8}" y="${y + h - 46}" width="${w - 16}" height="30" rx="10" fill="#c9b06a" opacity=".5"/>`;
      if (after) teeth += `<rect x="${x + 10}" y="${y + 14}" width="8" height="${h * 0.45}" rx="4" fill="#ffffff" opacity=".9"/>`;
    }
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${after ? "after" : "before"}">
      <rect width="${W}" height="${H}" fill="${after ? "#2a2324" : "#2d2526"}"/>
      <path d="M40 200 C 160 40, 480 40, 600 200 C 480 360, 160 360, 40 200 Z" fill="#7a2f35"/>
      <path d="M70 200 C 180 70, 460 70, 570 200 C 460 320, 180 320, 70 200 Z" fill="#3b1416"/>
      <path d="M90 150 C 200 92, 440 92, 550 150 L 550 135 C 440 74, 200 74, 90 135 Z" fill="#d4727b"/>
      <g clip-path="url(#m${after ? 1 : 0})">${teeth}</g>
      <clipPath id="m${after ? 1 : 0}"><path d="M70 200 C 180 70, 460 70, 570 200 C 460 320, 180 320, 70 200 Z"/></clipPath>
      <path d="M40 200 C 160 40, 480 40, 600 200 C 480 360, 160 360, 40 200 Z M70 200 C 180 70, 460 70, 570 200 C 460 320, 180 320, 70 200 Z" fill="#8c3a41" fill-rule="evenodd"/>
    </svg>`;
  }
  function renderCases() {
    $("#caseTabs").innerHTML = S.cases.map((c, i) => `<button type="button" role="tab" class="${i === caseIdx ? "active" : ""}" aria-selected="${i === caseIdx}">${esc(t(c.label))}</button>`).join("");
    $("#caseTabs").hidden = S.cases.length < 2;
    $$("#caseTabs button").forEach((b, i) => b.addEventListener("click", () => { caseIdx = i; renderCases(); }));
    const c = S.cases[caseIdx];
    const img = (src, after) => src ? `<img src="${esc(src)}" alt="${esc(t(c.label))} — ${t(after ? "results.after" : "results.before")}">` : smileSVG(c.demo, after);
    $("#beforeLayer").innerHTML = img(c.before, false);
    $("#afterLayer").innerHTML = img(c.after, true);
    $("#casesNote").hidden = S.cases.every((x) => x.before && x.after);
    // الإطار بياخد نسبة أبعاد صورة "قبل" (بحد أقصى 2.4 عشان مايبقاش رفيع أوي)
    const box = $("#compare"), bImg = $("#beforeLayer img");
    const fit = () => { if (bImg && bImg.naturalWidth) box.style.aspectRatio = `${Math.min(bImg.naturalWidth / bImg.naturalHeight, 2.4)}`; };
    if (!bImg) box.style.aspectRatio = ""; else if (bImg.complete) fit(); else bImg.addEventListener("load", fit, { once: true });
    const r = $("#compareRange"); r.value = 50; box.style.setProperty("--pos", "50%");
  }
  function initCompare() {
    const box = $("#compare"), range = $("#compareRange");
    range.addEventListener("input", () => box.style.setProperty("--pos", range.value + "%"));
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { box.classList.add("hint"); io.disconnect(); }
    }), { threshold: 0.6 });
    io.observe(box);
  }

  /* ---------------- 8. الدكاترة ---------------- */
  let docFilter = "all";
  function renderDoctorFilters() {
    $("#doctorFilters").innerHTML = S.specialties.map((s) => `<button type="button" class="chip${s.id === docFilter ? " active" : ""}" aria-pressed="${s.id === docFilter}" data-sp="${s.id}">${esc(t(s.label))}</button>`).join("");
    $$("#doctorFilters .chip").forEach((b) => b.addEventListener("click", () => { docFilter = b.dataset.sp; renderDoctorFilters(); renderDoctors(); }));
  }
  function renderDoctors() {
    $("#doctorFilters").hidden = S.specialties.length < 3;
    const list = S.doctors.filter((d) => docFilter === "all" || (d.specialties || []).includes(docFilter));
    $("#doctorsGrid").innerHTML = list.length ? list.map((d, i) => `<article class="doc" style="--i:${i}">
      <div class="doc-photo">${d.photo ? `<img src="${esc(d.photo)}" alt="${esc(t(d.name))}">` : `<img class="mono" src="assets/images/mark-dark.png" alt="">`}
        <div class="doc-over">${d.bio ? `<p>${esc(t(d.bio))}</p>` : ""}<button type="button" class="btn btn-gold" data-doc="${d.id}">${esc(t("doctors.book"))}</button></div>
      </div>
      <div class="doc-info"><h3>${esc(t(d.name))}</h3><span class="role">${esc(t(d.role))}</span>${d.years ? `<span class="yrs">${d.years} ${esc(t("doctors.years"))}</span>` : ""}</div>
    </article>`).join("") : `<p class="empty">${esc(t("doctors.none"))}</p>`;
    $$("#doctorsGrid [data-doc]").forEach((b) => b.addEventListener("click", () => {
      setDoctor(b.dataset.doc); goTo("#book"); toast(t("toast.doctor"));
    }));
  }

  /* ---------------- 9. آراء المرضى ---------------- */
  const rev = { i: 0, timer: null };
  function perView() { return innerWidth <= 620 ? 1 : innerWidth <= 960 ? 2 : 3; }
  function renderReviews() {
    const has = S.testimonials.length > 0;
    $("#reviews-carousel").hidden = !has;
    $("#reviews .head h2").textContent = t(has ? "reviews.title" : "reviews.titleEmpty");
    $("#reviewWa").href = waLink(t("reviews.waMsg") + "\n");
    const fb = S.clinic.social.facebook; $("#reviewFb").hidden = !fb; if (fb) $("#reviewFb").href = fb;
    $("#reviewsNote").hidden = !has || !S.testimonialsAreSamples;
    $("#reviewsTrack").innerHTML = S.testimonials.map((r) => `<figure class="review">
      <div class="stars" aria-label="${r.rating}/5">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <blockquote>${esc(t(r.text))}</blockquote>
      <footer><span class="av">${esc(t(r.name)[0])}</span><div><b>${esc(t(r.name))}</b><small>${esc(t(r.service))}</small></div></footer>
    </figure>`).join("");
    rev.i = 0; renderRevDots(); moveRev();
  }
  function revPages() { return Math.max(1, S.testimonials.length - perView() + 1); }
  function renderRevDots() {
    const n = revPages();
    $("#revDots").innerHTML = Array.from({ length: n }, (_, i) => `<button type="button" aria-label="${i + 1}" class="${i === rev.i ? "active" : ""}" style="--dur:5000ms"></button>`).join("");
    $("#revDots").classList.add("static");
    $$("#revDots button").forEach((b, i) => b.addEventListener("click", () => { rev.i = i; moveRev(); }));
    $("#reviews-carousel .slider-ctrl").hidden = n < 2 || !S.testimonials.length;
  }
  function moveRev() {
    const n = revPages(); rev.i = (rev.i + n) % n;
    const card = $("#reviewsTrack .review");
    const step = card ? card.getBoundingClientRect().width + 20 : 0;
    $("#reviewsTrack").style.transform = `translateX(${(lang === "ar" ? 1 : -1) * rev.i * step}px)`;
    $$("#revDots button").forEach((b, k) => b.classList.toggle("active", k === rev.i));
  }
  function initReviews() {
    $("#revNext").addEventListener("click", () => { rev.i++; moveRev(); });
    $("#revPrev").addEventListener("click", () => { rev.i--; moveRev(); });
    swipe($("#reviewsTrack"), (d) => { rev.i += d; moveRev(); });
    let w = innerWidth;
    addEventListener("resize", () => { if (innerWidth !== w) { w = innerWidth; renderRevDots(); moveRev(); } });
    if (!reduceMotion) rev.timer = setInterval(() => { if (!document.hidden) { rev.i++; moveRev(); } }, 5000);
  }

  /* ---------------- 10. الأسئلة الشائعة ---------------- */
  function renderFaq() {
    $("#faqList").innerHTML = S.faq.map((f, i) => `<div class="qa${i === 0 ? " open" : ""} reveal">
      <button type="button" aria-expanded="${i === 0}" aria-controls="ans${i}" id="q${i}"><span>${esc(t(f.q))}</span><i class="pm" aria-hidden="true"></i></button>
      <div class="ans" id="ans${i}" role="region" aria-labelledby="q${i}"><div><p>${esc(t(f.a))}</p></div></div></div>`).join("");
    $$("#faqList .qa button").forEach((b) => b.addEventListener("click", () => {
      const qa = b.parentElement, open = !qa.classList.contains("open");
      $$("#faqList .qa").forEach((x) => { x.classList.remove("open"); $("button", x).setAttribute("aria-expanded", "false"); });
      qa.classList.toggle("open", open); b.setAttribute("aria-expanded", String(open));
    }));
    $("#faqWa").href = waLink(t("wa.hello"));
  }

  /* ---------------- 11. فورم الحجز ---------------- */
  const F = {};
  let chosenSlot = null;
  const svcById = (id) => S.services.find((s) => s.id === id);
  const docById = (id) => S.doctors.find((d) => d.id === id);
  const isoDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  function fillServiceSelect() {
    const v = F.service.value;
    F.service.innerHTML = `<option value="">${esc(t("form.pickService"))}</option>` + S.serviceCategories.filter((c) => c.id !== "all").map((c) =>
      `<optgroup label="${esc(t(c.label))}">${S.services.filter((s) => s.cat === c.id).map((s) => `<option value="${s.id}">${esc(t(s.name))}</option>`).join("")}</optgroup>`).join("");
    F.service.value = v;
  }
  function fillDoctorSelect() {
    const v = F.doctor.value, svc = svcById(F.service.value);
    let docs = S.doctors;
    if (svc) { const m = S.doctors.filter((d) => (d.specialties || []).includes(svc.specialty)); if (m.length) docs = m; }
    F.doctor.innerHTML = `<option value="">${esc(t("form.anyDoctor"))}</option>` + docs.map((d) => `<option value="${d.id}">${esc(t(d.name))} — ${esc(t(d.role))}</option>`).join("");
    F.doctor.value = docs.some((d) => d.id === v) ? v : "";
  }
  function setService(id) { F.service.value = id; fillDoctorSelect(); clearErr("fService"); }
  function setDoctor(id) {
    const d = docById(id), svc = svcById(F.service.value);
    if (svc && d.specialties && !d.specialties.includes(svc.specialty)) F.service.value = "";
    fillDoctorSelect(); F.doctor.value = id;
  }
  function renderSlots() {
    const box = $("#slots"); clearErr("slots");
    if (!F.date.value) { box.innerHTML = `<p class="slots-msg">${esc(t("form.pickDate"))}</p>`; chosenSlot = null; return; }
    const d = new Date(F.date.value + "T00:00"), hrs = S.clinic.hours[d.getDay()];
    if (!hrs) { box.innerHTML = `<p class="slots-msg">${esc(t("form.dayOff"))}</p>`; chosenSlot = null; return; }
    const isToday = F.date.value === isoDate(new Date()), nowH = new Date().getHours() + new Date().getMinutes() / 60;
    const step = S.clinic.slotMinutes / 60, out = [];
    for (let h = hrs[0]; h + step <= hrs[1] + 1e-9; h += step) out.push({ h, past: isToday && h <= nowH + 0.5 });
    if (out.every((s) => s.past)) { box.innerHTML = `<p class="slots-msg">${esc(t("form.noSlots"))}</p>`; chosenSlot = null; return; }
    if (chosenSlot != null && !out.some((s) => s.h === chosenSlot && !s.past)) chosenSlot = null;
    box.innerHTML = out.map((s) => `<button type="button" class="slot" role="radio" aria-checked="${s.h === chosenSlot}" data-h="${s.h}" ${s.past ? "disabled" : ""}>${esc(fmtHour(s.h))}</button>`).join("");
    $$(".slot", box).forEach((b) => b.addEventListener("click", () => {
      chosenSlot = +b.dataset.h;
      $$(".slot", box).forEach((x) => x.setAttribute("aria-checked", String(x === b)));
      clearErr("slots");
    }));
  }
  function setErr(id, key) {
    const e = $(`.err[data-for="${id}"]`); if (!e) return;
    e.textContent = key ? t(key) : ""; e.dataset.key = key || "";
    e.closest(".field").classList.toggle("invalid", !!key);
  }
  const clearErr = (id) => setErr(id, "");
  const normDigits = (s) => s.replace(/[٠-٩]/g, (c) => "٠١٢٣٤٥٦٧٨٩".indexOf(c)).replace(/[\s-]/g, "");

  function initForm() {
    F.form = $("#bookForm"); F.name = $("#fName"); F.phone = $("#fPhone"); F.service = $("#fService");
    F.doctor = $("#fDoctor"); F.date = $("#fDate"); F.notes = $("#fNotes");
    F.date.min = isoDate(new Date());
    F.service.addEventListener("change", () => { fillDoctorSelect(); clearErr("fService"); });
    F.date.addEventListener("change", () => { clearErr("fDate"); renderSlots(); });
    [F.name, F.phone].forEach((el) => el.addEventListener("input", () => clearErr(el.id)));
    $("#editBooking").addEventListener("click", () => { $("#confirm").hidden = true; F.name.focus(); });

    F.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = normDigits(F.phone.value);
      const checks = [
        ["fName", F.name.value.trim().length < 3 ? "err.name" : ""],
        ["fPhone", /^01[0125]\d{8}$/.test(phone) ? "" : "err.phone"],
        ["fService", F.service.value ? "" : "err.service"],
        ["fDate", F.date.value && F.date.value >= F.date.min ? "" : "err.date"],
        ["slots", chosenSlot != null ? "" : "err.slot"],
      ];
      checks.forEach(([id, k]) => setErr(id, k));
      const bad = checks.find(([, k]) => k);
      if (bad) { const el = document.getElementById(bad[0]); (el.tagName === "DIV" ? $(".slot:not(:disabled)", el) || F.date : el).focus(); $("#confirm").hidden = true; return; }

      const svc = svcById(F.service.value), doc = docById(F.doctor.value);
      const dateTxt = new Intl.DateTimeFormat(loc(), { weekday: "long", day: "numeric", month: "long" }).format(new Date(F.date.value + "T00:00"));
      const rows = [
        ["sum.name", F.name.value.trim()], ["sum.phone", phone], ["sum.service", t(svc.name)],
        ["sum.doctor", doc ? t(doc.name) : t("form.anyDoctor")], ["sum.when", `${dateTxt} — ${fmtHour(chosenSlot)}`],
      ];
      if (F.notes.value.trim()) rows.push(["sum.notes", F.notes.value.trim()]);
      $("#summary").innerHTML = rows.map(([k, v]) => `<dt>${esc(t(k))}</dt><dd>${esc(v)}</dd>`).join("");
      const msg = [t("wa.booking"), ...rows.map(([k, v]) => `${t(k)}: ${v}`)].join("\n");
      $("#sendWa").href = waLink(msg);
      $("#confirm").hidden = false;
      $("#confirm").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    });
  }
  function refreshFormLang() {
    fillServiceSelect(); fillDoctorSelect(); renderSlots();
    $$(".err").forEach((e) => { if (e.dataset.key) e.textContent = t(e.dataset.key); });
    $("#confirm").hidden = true;
  }

  /* ---------------- 12. تواصل معنا ---------------- */
  function renderContact() {
    const C = S.clinic, today = new Date().getDay();
    const order = [6, 0, 1, 2, 3, 4, 5];
    $("#contactGrid").innerHTML = `
      <a class="c-card reveal" href="${esc(C.mapUrl)}" target="_blank" rel="noopener">
        <span class="ic">${icon("pin")}</span><h3>${esc(t("contact.address"))}</h3><p>${esc(t(C.address))}</p>
        <small style="color:var(--gold-ink);font-weight:600">${esc(t("contact.map"))}</small></a>
      <div class="c-card reveal">
        <span class="ic">${icon("phone")}</span><h3>${esc(t("contact.phone"))}</h3>
        <a class="num" href="tel:${esc(C.phone)}" style="text-decoration:none">${esc(C.phoneDisplay || C.phone)}</a>
        ${(C.extraPhones || []).map((n) => `<a class="num" href="tel:${esc(n)}" style="text-decoration:none">${esc(n)}</a>`).join("")}
        <button type="button" class="copy-btn" data-copy="${esc(C.phone)}">${esc(t("contact.copy"))}</button></div>
      <a class="c-card reveal" href="${waLink(t("wa.hello"))}" target="_blank" rel="noopener">
        <span class="ic">${icon("chat")}</span><h3>${esc(t("contact.wa"))}</h3>
        <span class="num">${esc(C.phoneDisplay || C.whatsapp)}</span><small style="color:var(--gold-ink);font-weight:600">${esc(t("wa.tip"))}</small></a>
      <div class="c-card reveal">
        <span class="ic">${icon("clock")}</span><h3>${esc(t("contact.hours"))}</h3>
        <ul>${order.map((d) => { const h = C.hours[d]; return `<li class="${d === today ? "today" : ""}"><span>${esc(dayName(d))}</span><span>${h ? esc(fmtHour(h[0]) + " – " + fmtHour(h[1])) : esc(t("contact.off"))}</span></li>`; }).join("")}</ul></div>`;
    $$("[data-copy]").forEach((b) => b.addEventListener("click", () => {
      const v = b.dataset.copy;
      const done = () => toast(t("contact.copied"));
      const fallback = () => { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { navigator.clipboard.writeText(v).then(done, fallback); } catch (e) { fallback(); }
    }));
    $("#social").innerHTML = [
      C.social.facebook && `<a href="${esc(C.social.facebook)}" target="_blank" rel="noopener" aria-label="Facebook">${icon("fb")}</a>`,
      C.social.instagram && `<a href="${esc(C.social.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${icon("ig")}</a>`,
      `<a href="${waLink(t("wa.hello"))}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("chat")}</a>`,
    ].filter(Boolean).join("");
    $("#waFloat").href = waLink(t("wa.hello"));
  }

  /* ---------------- الظهور بحركة ---------------- */
  let revealIO;
  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    revealIO = revealIO || new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.remove("pending"); revealIO.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal:not([data-rv])").forEach((el) => {
      el.dataset.rv = "1";
      // اللي ظاهر في الشاشة من الأول يفضل ظاهر؛ الباقي بيظهر بحركة لما توصله
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pending"); revealIO.observe(el); }
    });
  }

  /* ---------------- اللغة والثيم ---------------- */
  function applyStatic() {
    root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "رويال سمايل لطب الأسنان" : "Royal Smile Dental Clinic";
    $$("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      if (k.startsWith("clinic.")) el.textContent = t(S.clinic[k.split(".")[1]]);
      else el.textContent = t(k);
    });
    $("#langBtn span").textContent = lang === "ar" ? "EN" : "ع";
    $("#langBtn").setAttribute("aria-label", lang === "ar" ? "English" : "العربية");
    updateThemeLabel();
  }
  function renderAll() {
    applyStatic();
    renderHero(); renderStats(); renderAbout(); renderWhy();
    renderServiceTabs(); renderServices(); renderCases(); renderDoctorFilters(); renderDoctors();
    renderReviews(); renderFaq(); renderContact(); renderStatus();
  }
  function isDark() {
    const a = root.getAttribute("data-theme");
    return a ? a === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function updateThemeLabel() { $("#themeBtn").setAttribute("aria-label", t(isDark() ? "theme.light" : "theme.dark")); }
  function initToggles() {
    const saved = store.get("theme"); if (saved) root.setAttribute("data-theme", saved);
    $("#themeBtn").addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next); store.set("theme", next); updateThemeLabel();
    });
    $("#langBtn").addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar"; store.set("lang", lang);
      renderAll(); refreshFormLang(); initReveal();
      $$(".reveal.pending").forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.remove("pending"); });
    });
  }

  function goTo(sel) { $(sel).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); }

  /* ---------------- التشغيل ---------------- */
  initToggles();
  initForm();
  renderAll();
  fillServiceSelect(); fillDoctorSelect(); renderSlots();
  initHeader(); initHero(); initCompare(); initReviews();
  initReveal();
  setInterval(renderStatus, 60000);
  $("#year").textContent = new Date().getFullYear();
  // زرار الواتساب يعرّف بنفسه مرة بعد شوية
  setTimeout(() => { const w = $("#waFloat"); w.classList.add("peek"); setTimeout(() => w.classList.remove("peek"), 3500); }, 4000);
})();
