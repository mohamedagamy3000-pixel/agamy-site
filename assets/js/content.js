/* =========================================================
   ملف المحتوى — ده الملف الوحيد اللي بتعدّل فيه بيانات الموقع
   ---------------------------------------------------------
   • كل نص مكتوب مرتين: ar (عربي) و en (إنجليزي).
   • عايز تضيف حاجة؟ انسخ بلوك كامل من { لحد }, وغيّر فيه.
   • عايز تخفي حاجة مؤقتًا؟ خلي published:false
   • الصور: لو صورة ناقصة الموقع مش هيبوظ — هيعرض مربع مكانها.

   الترتيب في الموقع: الستيلز الأول → الشغل المتصوّر → الخدمات → عني →
   تحت التطوير (مختصر) → تواصل. الصورة بتيجي قبل الكلام.
   ========================================================= */

const SITE = {

  /* ---------- خلفية أول الصفحة ----------
     أقوى لقطة عندك. بتتحط ورا الكلام على طول الشاشة. */
  hero: {
    image: "assets/img/hero.jpg",
    // فيديو خلفية صامت بيلفّ. بيشتغل على الكمبيوتر بس — على الموبايل
    // بتفضل الصورة عشان مياكلش من باقة النت. سيبه null لو عايز الصورة بس.
    video: { provider: "vimeo", id: "1197439509" }
  },

  /* ---------- البراندات اللي اشتغلت معاها ----------
     بتتحرك في شريط تحت أول الصفحة. رتّبهم بالأقوى الأول. */
  clients: [
    "Laverne Group", "Atlantis Homme", "Makka Juice",
    "Trubla", "ASSAF Eyewear", "El Gouna Club", "Bella by Laverne"
  ],

  /* ---------- الشوريل الرئيسي ---------- */
  reel: {
    // حط الـ ID بتاع الفيديو. مثال يوتيوب: dQw4w9WgXcQ  |  مثال فيميو: 76979871
    provider: "youtube",
    id: "",                  // ← سيبه فاضي لحد ما يبقى عندك شوريل
    poster: "assets/img/stills/trubla-02.jpg"
  },

  /* ---------- معرض الستيلز — أهم قسم في الموقع ----------
     ١٦ لقطة متسحوبة من مشاريعك على Behance ومتقصوصة للويب.
     القاعدة: **لقطة واحدة قوية أحسن من عشرة عاديين.**
     أقوى تلات لقطات لازم يبقوا الأول — دول اللي بيتشافوا قبل أي سكرول.
     أي مقاس بيشتغل (عريض، طولي، مربع) — التصميم بيرتّبهم لوحده. */
  gallery: [
    { src: "assets/img/stills/moussa-04.jpg", caption: { ar: "آخر أيامك يا موسى", en: "Akher Ayamak Ya Moussa" } },
    { src: "assets/img/stills/trubla-02.jpg", caption: { ar: "Trubla — إعلان إطلاق", en: "Trubla — App launch" } },
    { src: "assets/img/stills/bared-04.jpg", caption: { ar: "BARED — كابتن ماجد", en: "BARED — Captain Maged" } },
    { src: "assets/img/stills/laverne-02.jpg", caption: { ar: "Laverne KSA", en: "Laverne KSA" } },
    { src: "assets/img/stills/assaf-01.jpg", caption: { ar: "ASSAF Eyewear", en: "ASSAF Eyewear" } },
    { src: "assets/img/stills/moussa-01.jpg", caption: { ar: "آخر أيامك يا موسى", en: "Akher Ayamak Ya Moussa" } },
    { src: "assets/img/stills/trubla-06.jpg", caption: { ar: "Trubla — إعلان إطلاق", en: "Trubla — App launch" } },
    { src: "assets/img/stills/gouna-01.jpg", caption: { ar: "نادي الجونة", en: "El Gouna Club" } },
    { src: "assets/img/stills/assaf-02.jpg", caption: { ar: "ASSAF Eyewear", en: "ASSAF Eyewear" } },
    { src: "assets/img/stills/moussa-03.jpg", caption: { ar: "آخر أيامك يا موسى", en: "Akher Ayamak Ya Moussa" } },
    { src: "assets/img/stills/bared-06.jpg", caption: { ar: "BARED — كابتن ماجد", en: "BARED — Captain Maged" } },
    { src: "assets/img/stills/laverne-03.jpg", caption: { ar: "Laverne KSA", en: "Laverne KSA" } },
    { src: "assets/img/stills/assaf-03.jpg", caption: { ar: "ASSAF Eyewear", en: "ASSAF Eyewear" } },
    { src: "assets/img/stills/moussa-02.jpg", caption: { ar: "آخر أيامك يا موسى", en: "Akher Ayamak Ya Moussa" } },
    { src: "assets/img/stills/gouna-03.jpg", caption: { ar: "نادي الجونة", en: "El Gouna Club" } },
    { src: "assets/img/stills/garden-03.jpg", caption: { ar: "Miss Laverne Garden", en: "Miss Laverne Garden" } },
  ],

  /* ---------- الأعمال ----------
     كل عمل هنا شغل متصوّر ومتسلّم، وليه صفحة بصوره كلها.
     lowRes: true → المشروع صوره الأصلية صغيرة، فبيتعرض بحجم أصغر
     عشان يفضل حادّ. شيلها لو بدّلت الصور بنسخ أكبر.
     statusLabel → تسمية خانة status في صفحة المشروع (الافتراضي «العميل»). */
  works: [
    {
      id: "hes-dead-now",
      published: true,
      stage: "produced",
      title:  { ar: "هو مات دلوقتي", en: "He's Dead Now" },
      format: { ar: "فيلم قصير", en: "Short film" },
      genre:  { ar: "دراما", en: "Drama" },
      year:   "2022",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "١١ مهرجان دولي · ٨ دول", en: "11 international festivals · 8 countries" },
      // تسمية الخانة دي في صفحة المشروع. لو مكتبتهاش بتبقى «العميل».
      statusLabel: { ar: "العرض", en: "Screenings" },
      logline:{
        ar: "فيلم قصير بالأبيض والأسود — عرضه العالمي الأول في مهرجان الفيلم العربي في روتردام.",
        en: "A black-and-white short film — world premiere at the Arab Film Festival in Rotterdam."
      },
      // المهرجانات والجوايز — بتظهر كقايمة في صفحة المشروع.
      // win: true بيخلّي السطر مميّز بنقطة دهبي.
      awards: [
        { win: true,
          ar: "جايزة لجنة التحكيم — أحسن فيلم روائي قصير · مهرجان سانتا كروز السينمائي الدولي، الأرجنتين",
          en: "Winner, Best Fiction Short Film (Jury Award) · Santa Cruz International Film Festival, Argentina" },
        { ar: "العرض العالمي الأول · مهرجان الفيلم العربي، روتردام — هولندا",
          en: "World premiere · Arab Film Festival, Rotterdam — Netherlands" },
        { ar: "عُرض في Film at Lincoln Center · مهرجان نيويورك للفيلم الأفريقي (الدورة ٣٠)",
          en: "Screened at Film at Lincoln Center · New York African Film Festival (30th edition)" },
        { ar: "المسابقة الرسمية · مهرجان AfryKamera للفيلم الأفريقي، وارسو — بولندا",
          en: "Official competition · AfryKamera African Film Festival, Warsaw — Poland" },
        { ar: "المسابقة الرسمية للأفلام القصيرة · مهرجان ماتيرا السينمائي الدولي — إيطاليا",
          en: "Official short film competition · Matera International Film Festival — Italy" },
        { ar: "العرض الأول في أمريكا الشمالية · مهرجان أوريجون للأفلام القصيرة، بورتلاند — أمريكا",
          en: "North American premiere · Oregon Short Film Festival, Portland — USA" },
        { ar: "المسابقة الرسمية · مهرجان تكساس للأفلام القصيرة، سان أنطونيو — أمريكا",
          en: "Official competition · Texas Short Film Festival, San Antonio — USA" },
        { ar: "المسابقة الرسمية · مهرجان أوكوتوكس السينمائي — كندا",
          en: "Official competition · Okotoks Film Festival — Canada" }
      ],
      poster: "assets/img/stills/hdn-01.jpg",
      stills: [
        "assets/img/stills/hdn-02.jpg",
        "assets/img/stills/hdn-03.jpg",
        "assets/img/stills/hdn-04.jpg",
        "assets/img/stills/hdn-05.jpg",
        "assets/img/stills/hdn-06.jpg",
        "assets/img/stills/hdn-07.jpg",
        "assets/img/stills/hdn-08.jpg"
      ],
      video:  null,
      notes:  {
        ar: "إنتاج Alex Films · كتابة وإخراج طارق الشربيني · إنتاج مني محمود.",
        en: "Alex Films · Written and directed by Tarek El Sherbeny · Produced by Mony Mahmoud."
      }
    },

    {
      id: "madonna",
      published: true,
      stage: "produced",
      title:  { ar: "مادونا", en: "Madonna" },
      format: { ar: "فيلم قصير", en: "Short film" },
      genre:  { ar: "دراما", en: "Drama" },
      year:   "2022",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "المركز البريطاني ومعهد جوته بالإسكندرية", en: "British Council &amp; Goethe-Institut, Alexandria" },
      statusLabel: { ar: "بدعم من", en: "Supported by" },
      logline:{
        ar: "فيلم قصير بطولة عبد العزيز مخيون وكريم قاسم — إخراج جون فريد، تصوير فيلوباتير مراد.",
        en: "A short film starring Abdelaziz Makhyoun and Karim Kassem — directed by John Fareed, shot by Filopater Morad."
      },
      poster: "assets/img/stills/madonna-01.jpg",
      stills: [
        "assets/img/stills/madonna-02.jpg",
        "assets/img/stills/madonna-03.jpg",
        "assets/img/stills/madonna-04.jpg",
        "assets/img/stills/madonna-05.jpg",
        "assets/img/stills/madonna-06.jpg",
        "assets/img/stills/madonna-07.jpg",
        "assets/img/stills/madonna-08.jpg",
        "assets/img/stills/madonna-09.jpg",
        "assets/img/stills/madonna-10.jpg"
      ],
      video:  { provider: "vimeo", id: "1112657903" },
      notes:  {
        ar: "مسكت الميزانية والفريق والمواقع والجدول ولوجيستيات السِت من التحضير للتصوير. آخر أربع صور من كواليس التصوير.",
        en: "I ran the budget, crew, locations, schedule and set logistics from prep through the shoot. The last four images are from the set."
      }
    },

    {
      id: "moussa",
      published: true,
      stage: "produced",
      title:  { ar: "آخر أيامك يا موسى", en: "Akher Ayamak Ya Moussa" },
      format: { ar: "فيلم قصير", en: "Short film" },
      genre:  { ar: "دراما", en: "Drama" },
      year:   "2024",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "إنتاج مستقل", en: "Independent" },
      logline:{
        ar: "فيلم قصير من إنتاجي — تصوير في الريف المصري.",
        en: "An independent short film I produced, shot in the Egyptian countryside."
      },
      poster: "assets/img/stills/moussa-04.jpg",
      stills: [
        "assets/img/stills/moussa-01.jpg",
        "assets/img/stills/moussa-02.jpg",
        "assets/img/stills/moussa-03.jpg",
        "assets/img/stills/moussa-05.jpg",
        "assets/img/stills/moussa-06.jpg"
      ],
      video:  null,
      notes:  {
        ar: "إخراج آدم علاء · إنتاج محمد عجمي. تصوير في مواقع خارجية.",
        en: "Directed by Adam Alaa · Produced by Mohamed Agamy. Shot on location."
      }
    },

    {
      id: "trubla",
      published: true,
      stage: "produced",
      title:  { ar: "Trubla", en: "Trubla" },
      format: { ar: "إعلان إطلاق تطبيق", en: "App launch commercial" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "Trubla", en: "Trubla" },
      logline:{
        ar: "إعلان إطلاق بمشاهد وديكورات متعددة — من سطح القمر لشارع ليلي بالنيون.",
        en: "A launch film across multiple built sets — from a lunar surface to a neon-lit street."
      },
      poster: "assets/img/stills/trubla-02.jpg",
      stills: [
        "assets/img/stills/trubla-01.jpg",
        "assets/img/stills/trubla-03.jpg",
        "assets/img/stills/trubla-04.jpg",
        "assets/img/stills/trubla-05.jpg",
        "assets/img/stills/trubla-06.jpg",
        "assets/img/stills/trubla-07.jpg"
      ],
      video:  { provider: "vimeo", id: "1197439509" },
      notes:  {
        ar: "إخراج بيشوي كمال · تصوير فيلوباتير مراد. ديكورات مبنية بالكامل.",
        en: "Directed by Bishoy Kamal, shot by Filopater Murad. Fully built sets."
      }
    },

    {
      id: "bared",
      published: true,
      stage: "produced",
      title:  { ar: "BARED — كابتن ماجد", en: "BARED — Captain Maged" },
      format: { ar: "فيلم قصير", en: "Short film" },
      genre:  { ar: "دراما", en: "Drama" },
      year:   "2025",
      role:   { ar: "منتج منفّذ", en: "Executive Producer" },
      status: { ar: "منتج منفّذ", en: "Executive Producer" },
      logline:{
        ar: "دراما بحرية، تصوير ليلي على الساحل.",
        en: "A coastal drama, shot at night on the shore."
      },
      poster: "assets/img/stills/bared-04.jpg",
      stills: [
        "assets/img/stills/bared-01.jpg",
        "assets/img/stills/bared-02.jpg",
        "assets/img/stills/bared-03.jpg",
        "assets/img/stills/bared-05.jpg",
        "assets/img/stills/bared-06.jpg",
        "assets/img/stills/bared-07.jpg",
        "assets/img/stills/bared-08.jpg"
      ],
      video:  { provider: "vimeo", id: "1145608856" },
      notes:  {
        ar: "تصوير ليلي في مواقع مفتوحة على البحر.",
        en: "Night shoot on open coastal locations."
      }
    },

    {
      id: "laverne-ksa",
      published: true,
      stage: "produced",
      title:  { ar: "Laverne KSA", en: "Laverne KSA" },
      format: { ar: "فيلم حملة", en: "Campaign film" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "Laverne Group — السعودية", en: "Laverne Group — KSA" },
      logline:{
        ar: "فيلم حملة عطور لبراند سعودي — اتصوّر في مصر.",
        en: "A fragrance campaign for a Saudi brand — shot in Egypt."
      },
      poster: "assets/img/stills/laverne-02.jpg",
      stills: [
        "assets/img/stills/laverne-01.jpg",
        "assets/img/stills/laverne-03.jpg",
        "assets/img/stills/laverne-04.jpg",
        "assets/img/stills/laverne-05.jpg"
      ],
      video:  { provider: "vimeo", id: "1218866302" },
      notes:  {
        ar: "نسخة المخرج من الحملة.",
        en: "The director's cut of the campaign."
      }
    },

    {
      id: "gouna",
      published: true,
      stage: "produced",
      title:  { ar: "نادي الجونة", en: "El Gouna Club" },
      format: { ar: "إعلان رياضي", en: "Sports commercial" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "نادي الجونة", en: "El Gouna Club" },
      logline:{
        ar: "إعلان رياضي بمواقع داخلية متعددة.",
        en: "A sports commercial across multiple interior locations."
      },
      poster: "assets/img/stills/gouna-01.jpg",
      stills: [
        "assets/img/stills/gouna-02.jpg",
        "assets/img/stills/gouna-03.jpg"
      ],
      video:  { provider: "vimeo", id: "1168895883" },
      notes:  {
        ar: "عدة مواقع داخلية في يوم تصوير واحد.",
        en: "Several interior locations in a single shooting day."
      }
    },

    {
      id: "makka",
      published: true,
      stage: "produced",
      title:  { ar: "مكة جوس", en: "Makka Juice" },
      format: { ar: "إعلان رمضان", en: "Ramadan TVC" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "مكة جوس", en: "Makka Juice" },
      logline:{
        ar: "إعلان رمضاني — مشاهد عيلة وشارع في الإسكندرية.",
        en: "A Ramadan TVC — family and street scenes in Alexandria."
      },
      poster: "assets/img/stills/makka-03.jpg",
      stills: [
        "assets/img/stills/makka-01.jpg",
        "assets/img/stills/makka-02.jpg",
        "assets/img/stills/makka-04.jpg",
        "assets/img/stills/makka-05.jpg",
        "assets/img/stills/makka-06.jpg"
      ],
      video:  { provider: "vimeo", id: "1197443692" },
      notes:  {
        ar: "إعلان تليفزيوني بمواقع داخلية وخارجية.",
        en: "A television commercial across interior and exterior locations."
      }
    },

    {
      id: "assaf",
      published: true,
      stage: "produced",
      title:  { ar: "ASSAF Eyewear", en: "ASSAF Eyewear" },
      format: { ar: "حملة تصوير", en: "Photo campaign" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "إنتاج", en: "Production" },
      status: { ar: "ASSAF — السعودية", en: "ASSAF — KSA" },
      logline:{
        ar: "حملة تصوير نظارات لبراند سعودي — اتصوّرت في مصر.",
        en: "An eyewear photo campaign for a Saudi brand — shot in Egypt."
      },
      poster: "assets/img/stills/assaf-03.jpg",
      stills: [
        "assets/img/stills/assaf-01.jpg",
        "assets/img/stills/assaf-02.jpg",
        "assets/img/stills/assaf-04.jpg"
      ],
      video:  null,
      notes:  {
        ar: "حملة ستيلز — من غير فيديو.",
        en: "A stills campaign — no film."
      }
    },

    {
      id: "miss-laverne",
      published: true,
      stage: "produced",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Miss Laverne", en: "Miss Laverne" },
      format: { ar: "حملة عطور", en: "Perfume campaign" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "Laverne Group — السعودية", en: "Laverne Group — KSA" },
      logline:{
        ar: "حملة عطر نسائي لبراند سعودي — اتصوّرت في مصر.",
        en: "A women's fragrance campaign for a Saudi brand — shot in Egypt."
      },
      poster: "assets/img/stills/misslaverne-04.jpg",
      stills: [
        "assets/img/stills/misslaverne-01.jpg",
        "assets/img/stills/misslaverne-02.jpg",
        "assets/img/stills/misslaverne-03.jpg"
      ],
      video:  { provider: "vimeo", id: "1197445326" },
      notes:  {
        ar: "حملة رأسية للسوشيال والتليفزيون.",
        en: "A vertical campaign for social and broadcast."
      }
    },

    {
      id: "atlantis",
      published: true,
      stage: "produced",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Atlantis Homme", en: "Atlantis Homme" },
      format: { ar: "حملة عطور", en: "Fragrance campaign" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "Atlantis Homme — السعودية", en: "Atlantis Homme — KSA" },
      logline:{
        ar: "حملة عطر رجالي — تصوير على البحر في مصر.",
        en: "A men's fragrance campaign — shot on the coast in Egypt."
      },
      poster: "assets/img/stills/atlantis-01.jpg",
      stills: [
        "assets/img/stills/atlantis-02.jpg",
        "assets/img/stills/atlantis-03.jpg"
      ],
      video:  { provider: "vimeo", id: "1207725529" },
      notes:  {
        ar: "تصوير على البحر في يوم واحد.",
        en: "A single-day coastal shoot."
      }
    },

    {
      id: "bella",
      published: true,
      stage: "produced",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Bella by Laverne", en: "Bella by Laverne" },
      format: { ar: "فيلم حملة", en: "Campaign film" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "Laverne Group — السعودية", en: "Laverne Group — KSA" },
      logline:{
        ar: "حملة عطور لبراند سعودي — اتصوّرت في مصر.",
        en: "A fragrance campaign for a Saudi brand — shot in Egypt."
      },
      poster: "assets/img/stills/bella-03.jpg",
      stills: [
        "assets/img/stills/bella-01.jpg",
        "assets/img/stills/bella-02.jpg",
        "assets/img/stills/bella-04.jpg"
      ],
      video:  { provider: "vimeo", id: "1218864846" },
      notes:  {
        ar: "مواقع خارجية على البحر.",
        en: "Exterior coastal locations."
      }
    },

    {
      id: "garden",
      published: true,
      stage: "produced",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Miss Laverne Garden", en: "Miss Laverne Garden" },
      format: { ar: "فيلم حملة", en: "Campaign film" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2024",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "Laverne Group — السعودية", en: "Laverne Group — KSA" },
      logline:{
        ar: "حملة عطور في حديقة — تصوير نهاري في مصر.",
        en: "A garden fragrance campaign — a daylight shoot in Egypt."
      },
      poster: "assets/img/stills/garden-03.jpg",
      stills: [
        "assets/img/stills/garden-01.jpg",
        "assets/img/stills/garden-02.jpg",
        "assets/img/stills/garden-04.jpg",
        "assets/img/stills/garden-05.jpg"
      ],
      video:  { provider: "vimeo", id: "1110711442" },
      notes:  {
        ar: "تصوير نهاري في موقع خارجي واحد.",
        en: "A daylight shoot on a single exterior location."
      }
    },

    {
      id: "cemetery",
      published: true,
      stage: "produced",
      title:  { ar: "المقابر اللاتينية، الإسكندرية", en: "Latin Cemetery, Alexandria" },
      format: { ar: "مقال مصوّر", en: "Photo essay" },
      genre:  { ar: "تصوير فوتوغرافي", en: "Photography" },
      year:   "2019",
      role:   { ar: "تصوير", en: "Photography" },
      status: { ar: "مشروع شخصي", en: "Personal project" },
      logline:{
        ar: "مقال مصوّر عن المقابر اللاتينية في الإسكندرية.",
        en: "A photo essay on the Latin Cemetery in Alexandria."
      },
      poster: "assets/img/stills/cemetery-01.jpg",
      stills: [
        "assets/img/stills/cemetery-02.jpg",
        "assets/img/stills/cemetery-03.jpg",
        "assets/img/stills/cemetery-04.jpg",
        "assets/img/stills/cemetery-05.jpg",
        "assets/img/stills/cemetery-06.jpg",
        "assets/img/stills/cemetery-07.jpg",
        "assets/img/stills/cemetery-08.jpg",
        "assets/img/stills/cemetery-09.jpg"
      ],
      video:  null,
      notes:  {
        ar: "مشروع شخصي — تصوير فوتوغرافي.",
        en: "A personal project — photography."
      }
    }

  ]
};
