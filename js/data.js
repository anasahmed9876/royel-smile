/* =========================================================
   مركز رويال سمايل — ملف البيانات
   كل محتوى الموقع هنا. عدّل النصوص والأرقام من الملف ده بس.
   كل نص ليه نسختين: ar (عربي) و en (إنجليزي).
   ⚠️ أي حاجة مكتوب جنبها "مؤقت" لازم تتغير بالبيانات الحقيقية.
   ========================================================= */

window.SITE = {
  clinic: {
    name: { ar: "مركز رويال سمايل", en: "Royal Smile Dental Clinic" },
    short: { ar: "رويال سمايل", en: "Royal Smile" },
    phone: "01062949050",
    phoneDisplay: "0106 294 9050",
    // أرقام إضافية بتظهر في قسم تواصل معنا (مثلاً ["01xxxxxxxxx"])
    extraPhones: [],
    whatsapp: "201062949050", // بالصيغة الدولية من غير + (مصر = 20)
    address: {
      ar: "مدينة السادات - المنطقة الرابعة - جنب مستشفى التأمين الصحي - فوق محل بيبو للسيارات",
      en: "Sadat City, 4th District, next to the Health Insurance Hospital, above Bebo Cars",
    },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("مستشفى التأمين الصحي المنطقة الرابعة مدينة السادات"),
    // سيب اللينك فاضي "" لو مفيش حساب
    social: {
      facebook: "https://www.facebook.com/share/1YzERCaDbU/",
      instagram: "",
    },
    // مواعيد العمل: 0 = الأحد ... 5 = الجمعة، 6 = السبت. null = إجازة
    hours: {
      // الساعة 25 = 1 بالليل (بعد نص الليل)
      0: [12, 25], 1: [12, 25], 2: [12, 25], 3: [12, 25], 4: [12, 25],
      5: null,
      6: [12, 25],
    },
    slotMinutes: 60,
  },

  // الصفحة الرئيسية — سلايدر
  hero: [
    {
      icon: "sparkle",
      tag: { ar: "تجميل الأسنان", en: "Cosmetic Dentistry" },
      title: { ar: "ابتسامة تليق بيك", en: "A smile fit for royalty" },
      text: {
        ar: "تبييض بالليزر وحشوات ليزر تجميلية بلون سنانك الطبيعي، عشان تضحك وانت واثق.",
        en: "Laser whitening and cosmetic laser fillings matched to your natural teeth, so you can smile with confidence.",
      },
    },
    {
      icon: "implant",
      tag: { ar: "زراعة الأسنان", en: "Dental Implants" },
      title: { ar: "رجّع سنانك الثابتة", en: "Fixed teeth, for good" },
      text: {
        ar: "زراعة أسنان وتركيبات ثابتة ومتحركة بتشبه سنانك الطبيعية في الشكل والإحساس.",
        en: "Dental implants plus fixed and removable prosthetics that look and feel like natural teeth.",
      },
    },
    {
      icon: "braces",
      tag: { ar: "تقويم الأسنان", en: "Orthodontics" },
      title: { ar: "سنان مترتبة وابتسامة متناسقة", en: "Straighter teeth, balanced smile" },
      text: {
        ar: "تقويم للكبار والأطفال مع متابعة منتظمة لحد ما توصل للنتيجة النهائية.",
        en: "Orthodontic treatment for adults and children, with regular follow-up until the final result.",
      },
    },
  ],

  // مؤقت: غيّر الأرقام بالأرقام الحقيقية
  stats: [
    { value: 10, suffix: "+", label: { ar: "سنين خبرة", en: "Years of experience" } },
    { value: 5000, suffix: "+", label: { ar: "مريض اتعالج", en: "Patients treated" } },
    { value: 1200, suffix: "+", label: { ar: "زرعة ناجحة", en: "Implants placed" } },
    { value: 5, suffix: "", label: { ar: "دكاترة متخصصين", en: "Specialist dentists" } },
  ],

  about: {
    title: { ar: "رعاية أسنان بمستوى ملكي", en: "Dental care, done properly" },
    paragraphs: [
      {
        ar: "رويال سمايل مركز متكامل لطب وتجميل الأسنان في مدينة السادات. بنقدم زراعة الأسنان والتقويم وعلاج العصب والتركيبات والتجميل بالليزر تحت سقف واحد.",
        en: "Royal Smile is a full-service dental clinic in Sadat City, offering implants, orthodontics, root canal treatment, prosthetics and laser cosmetic dentistry under one roof.",
      },
      {
        ar: "كل مريض بياخد خطة علاج مكتوبة فيها الخطوات والتكلفة والمدة قبل ما يبدأ، عشان تبقى عارف كل حاجة من الأول.",
        en: "Every patient receives a written treatment plan with the steps, cost and timeline before anything starts, so there are no surprises.",
      },
    ],
    bullets: [
      { ar: "خطة علاج مكتوبة بالتكلفة", en: "Written treatment plan with costs" },
      { ar: "أشعة رقمية داخل المركز", en: "In-house digital X-ray" },
      { ar: "متابعة بعد العلاج", en: "Aftercare follow-up" },
    ],
  },

  why: [
    { icon: "shield", title: { ar: "تعقيم على أعلى مستوى", en: "Strict sterilisation" }, text: { ar: "أوتوكلاف من الفئة B، وأدوات بتتفتح قدامك لكل مريض.", en: "Class B autoclave and sealed instruments opened in front of you." } },
    { icon: "scan", title: { ar: "تشخيص رقمي دقيق", en: "Digital diagnosis" }, text: { ar: "أشعة رقمية وكاميرا داخل الفم، فتشوف حالتك بعينك.", en: "Digital X-rays and an intraoral camera, so you see what we see." } },
    { icon: "calm", title: { ar: "علاج من غير ألم", en: "Comfortable treatment" }, text: { ar: "تخدير موضعي حديث وتعامل هادي، خصوصاً مع الأطفال واللي بيخافوا.", en: "Modern local anaesthesia and a calm approach, especially for children and anxious patients." } },
    { icon: "receipt", title: { ar: "أسعار واضحة", en: "Clear pricing" }, text: { ar: "بتعرف التكلفة كاملة قبل البدء، ومفيش رسوم مخفية.", en: "You know the full cost before we start. No hidden fees." } },
    { icon: "clock", title: { ar: "مواعيد مظبوطة", en: "On-time appointments" }, text: { ar: "كل مريض ليه وقته، فمش هتستنى كتير في الاستقبال.", en: "Every patient has a reserved slot, so waiting is short." } },
    { icon: "award", title: { ar: "ضمان على الشغل", en: "Guaranteed work" }, text: { ar: "ضمان مكتوب على الزراعة والتركيبات.", en: "Written guarantee on implants and prosthetics." } },
  ],

  // الخدمات — مقسمة لتابات. تاب "all" بيعرض كل الخدمات
  serviceCategories: [
    { id: "all", label: { ar: "كل الخدمات", en: "All services" } },
    { id: "cosmetic", label: { ar: "التجميل", en: "Cosmetic" } },
    { id: "restorative", label: { ar: "العلاج والتركيبات", en: "Treatment & Prosthetics" } },
    { id: "surgery", label: { ar: "الزراعة", en: "Implants" } },
    { id: "ortho", label: { ar: "التقويم", en: "Orthodontics" } },
  ],
  services: [
    { id: "implants", cat: "surgery", icon: "implant", specialty: "surgery", name: { ar: "زراعة الأسنان", en: "Dental implants" }, text: { ar: "تعويض السنان المفقودة بزرعات ثابتة بتشبه السنة الطبيعية في الشكل والوظيفة.", en: "Replace missing teeth with fixed implants that look and work like natural teeth." }, duration: { ar: "حسب الحالة", en: "Varies" } },
    { id: "ortho", cat: "ortho", icon: "braces", specialty: "ortho", name: { ar: "تقويم الأسنان", en: "Orthodontics" }, text: { ar: "ترتيب السنان وتصحيح العضة للكبار والأطفال مع متابعة منتظمة.", en: "Straighten teeth and correct the bite for adults and children, with regular follow-up." }, duration: { ar: "حسب الحالة", en: "Varies" } },
    { id: "root-canal", cat: "restorative", icon: "root", specialty: "endo", name: { ar: "علاج العصب", en: "Root canal treatment" }, text: { ar: "علاج التهاب العصب والحفاظ على السنة بدل خلعها.", en: "Treat an inflamed nerve and save the tooth instead of extracting it." }, duration: { ar: "1–2 جلسة", en: "1–2 sessions" } },
    { id: "laser-fillings", cat: "cosmetic", icon: "sparkle", specialty: "cosmetic", name: { ar: "حشوات ليزر تجميلية", en: "Cosmetic laser fillings" }, text: { ar: "حشو بلون السنة الطبيعي بالليزر، بيتظبط على شكلها ومش بيبان.", en: "Laser-cured fillings matched to your natural tooth colour, so they don't show." }, duration: { ar: "جلسة واحدة", en: "1 session" } },
    { id: "prosthetics", cat: "restorative", icon: "crown", specialty: "cosmetic", name: { ar: "تركيبات ثابتة ومتحركة", en: "Fixed & removable prosthetics" }, text: { ar: "كراون وكباري ثابتة، وأطقم وتركيبات متحركة حسب احتياج كل حالة.", en: "Fixed crowns and bridges, or removable dentures, depending on each case." }, duration: { ar: "2–3 جلسات", en: "2–3 sessions" } },
    { id: "cleaning", cat: "cosmetic", icon: "drop", specialty: "general", name: { ar: "تنظيف جير وتلميع", en: "Scaling & polishing" }, text: { ar: "إزالة الجير والتصبغات وتلميع السنان لحماية اللثة ونفَس أنضف.", en: "Remove tartar and stains and polish teeth to protect your gums." }, duration: { ar: "جلسة واحدة", en: "1 session" } },
    { id: "laser-whitening", cat: "cosmetic", icon: "smile", specialty: "cosmetic", name: { ar: "تبييض الأسنان بالليزر", en: "Laser teeth whitening" }, text: { ar: "تفتيح لون السنان بالليزر في العيادة ونتيجة باينة من أول جلسة.", en: "In-clinic laser whitening with visible results from the first session." }, duration: { ar: "جلسة واحدة", en: "1 session" } },
  ],

  // قبل وبعد — حط مسار الصورة في before و after (مثلاً "assets/images/case1-before.jpg")
  // لو فاضيين، الموقع هيعرض رسم توضيحي مكانهم.
  cases: [
    { label: { ar: "حشوات ليزر تجميلية", en: "Cosmetic laser fillings" }, before: "assets/images/case1-before.jpg", after: "assets/images/case1-after.jpg" },
    { label: { ar: "تركيبات ثابتة", en: "Fixed bridge" }, before: "assets/images/case2-before.jpg", after: "assets/images/case2-after.jpg" },
    { label: { ar: "تركيبات تجميلية", en: "Cosmetic crowns" }, before: "assets/images/case3-before.jpg", after: "assets/images/case3-after.jpg" },
    { label: { ar: "زراعة الأسنان", en: "Dental implants" }, before: "assets/images/case4-before.jpg", after: "assets/images/case4-after.jpg" },
    { label: { ar: "زراعة وتركيبات", en: "Implants & restorations" }, before: "assets/images/case5-before.jpg", after: "assets/images/case5-after.jpg" },
    { label: { ar: "علاج وترميم الأسنان", en: "Full restoration" }, before: "assets/images/case6-before.jpg", after: "assets/images/case6-after.jpg" },
  ],

  // الدكاترة
  // bio = نبذة قصيرة (اختياري)، years = سنين الخبرة (اختياري)
  // specialties: لو عايز فلتر بالتخصص، زوّد تخصصات هنا وحط لكل دكتور specialties: ["..."]
  specialties: [],
  doctors: [
    { id: "d1", photo: "assets/images/dr-mahmoud-hashem.jpg", name: { ar: "د. محمود هاشم", en: "Dr. Mahmoud Hashem" }, role: { ar: "أخصائي طب وجراحة الفم والأسنان", en: "Oral & Dental Surgery Specialist" }, bio: null, years: null },
    { id: "d2", photo: "assets/images/dr-mohamed-abdelrazek.jpg", name: { ar: "د. محمد عبد الرازق", en: "Dr. Mohamed Abdel Razek" }, role: { ar: "أخصائي طب وجراحة الفم والأسنان", en: "Oral & Dental Surgery Specialist" }, bio: null, years: null },
    { id: "d3", photo: "assets/images/dr-mohannad-amin.jpg", name: { ar: "د. مهند أمين", en: "Dr. Mohannad Amin" }, role: { ar: "أخصائي طب وجراحة الفم والأسنان", en: "Oral & Dental Surgery Specialist" }, bio: null, years: null },
    { id: "d4", photo: "assets/images/doctor-1.jpg", name: { ar: "د. عمر ناصر", en: "Dr. Omar Nasser" }, role: { ar: "أخصائي طب وجراحة الفم والأسنان", en: "Oral & Dental Surgery Specialist" }, bio: null, years: null },
    { id: "d5", photo: "assets/images/dr-haidy.jpg", name: { ar: "د. هايدي المصري", en: "Dr. Haidy El-Masry" }, role: { ar: "أخصائية طب وجراحة الفم والأسنان", en: "Oral & Dental Surgery Specialist" }, bio: null, years: null },
  ],

  // آراء المرضى — حط هنا آراء حقيقية بس. طالما القائمة فاضية، القسم بيعرض زرار "اكتب رأيك".
  // مثال:
  // { name: { ar: "أحمد م.", en: "Ahmed M." }, service: { ar: "زراعة", en: "Implants" }, rating: 5, text: { ar: "الرأي هنا", en: "Review here" } },
  testimonialsAreSamples: false,
  testimonials: [],

  faq: [
    { q: { ar: "هل الكشف الأول بفلوس؟", en: "Is the first consultation paid?" }, a: { ar: "الكشف الأول بيشمل فحص كامل وخطة علاج مكتوبة. اسأل الاستقبال عن سعر الكشف الحالي.", en: "The first visit includes a full exam and a written treatment plan. Ask reception for the current fee." } },
    { q: { ar: "الزراعة بتوجع؟", en: "Do implants hurt?" }, a: { ar: "الزراعة بتتعمل تحت تخدير موضعي، وأغلب المرضى بيحسوا بضغط بسيط بس. الألم بعدها بيتحكم فيه بمسكن عادي.", en: "Implants are placed under local anaesthesia; most patients feel only pressure. Any soreness afterwards is managed with ordinary painkillers." } },
    { q: { ar: "التبييض بالليزر بيضر السنان؟", en: "Is whitening harmful?" }, a: { ar: "لا، لما يتعمل تحت إشراف دكتور وبالتركيز المناسب. ممكن يحصل حساسية بسيطة يومين وتروح.", en: "Not when done under supervision at the right concentration. Mild sensitivity for a day or two is common." } },
    { q: { ar: "التقويم بياخد قد إيه؟", en: "How long does orthodontic treatment take?" }, a: { ar: "المدة بتختلف من حالة للتانية. الدكتور بيحددهالك بعد الكشف.", en: "It depends on the case. Your orthodontist confirms the timeline after the exam." } },
    { q: { ar: "إيه الفرق بين التركيبات الثابتة والمتحركة؟", en: "Fixed or removable prosthetics?" }, a: { ar: "الثابتة (كراون وكباري) بتتلزق على السنان ومش بتتشال، والمتحركة بتقدر تشيلها وتنضفها. الدكتور بيقولك الأنسب لحالتك.", en: "Fixed crowns and bridges are cemented in place; removable dentures can be taken out to clean. Your dentist will recommend the right one." } },
    { q: { ar: "ممكن أقسّط تكلفة العلاج؟", en: "Can I pay in instalments?" }, a: { ar: "مؤقت: اكتب هنا نظام الدفع والتقسيط في المركز.", en: "Placeholder: describe your payment and instalment options." } },
  ],
};
