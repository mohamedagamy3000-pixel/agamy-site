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
      id: "agapios",
      published: true,
      stage: "produced",
      category: "music",
      title:  { ar: "AGapios — Pou To Pas", en: "AGapios — Pou To Pas" },
      format: { ar: "فيديو كليب · ٣:٣٤", en: "Music video · 3:34" },
      genre:  { ar: "موسيقى", en: "Music" },
      year:   "2026",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "AGapios", en: "AGapios" },
      logline:{
        ar: "فيديو كليب لأغنية «Pou To Pas» للمطرب اليوناني AGapios — اتصور في الإسكندرية.",
        en: "Music video for AGapios's \"Pou To Pas\" — shot on location in Alexandria."
      },
      poster: "assets/img/stills/agapios-poster.jpg",
      posterRatio: 1.344,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
      stills: [
        "assets/img/stills/agapios-01.jpg",
        "assets/img/stills/agapios-02.jpg",
        "assets/img/stills/agapios-03.jpg",
        "assets/img/stills/agapios-04.jpg",
        "assets/img/stills/agapios-05.jpg",
        "assets/img/stills/agapios-06.jpg",
        "assets/img/stills/agapios-07.jpg",
        "assets/img/stills/agapios-08.jpg",
        "assets/img/stills/agapios-09.jpg",
        "assets/img/stills/agapios-10.jpg"
      ],
      video:  { provider: "youtube", id: "Bo9rEPOb-Vs" },
      notes:  {
        ar: "إخراج جورج بنيوداكيس · تصوير فيلوباتير مراد · مدير إنتاج ستيفن خليل.",
        en: "Directed by George Mpenioudakis · DOP Filopater Mourad · Production Manager Stephen Khalil."
      }
    },

    {
      id: "madonna",
      published: true,
      stage: "produced",
      category: "film",
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
      posterRatio: 2.667,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "hes-dead-now",
      published: true,
      stage: "produced",
      category: "film",
      title:  { ar: "هو مات دلوقتي", en: "He's Dead Now" },
      format: { ar: "فيلم قصير", en: "Short film" },
      genre:  { ar: "دراما", en: "Drama" },
      year:   "2022",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "٢٨ مهرجان دولي · ٥ جوايز", en: "28 international festivals · 5 awards" },
      // تسمية الخانة دي في صفحة المشروع. لو مكتبتهاش بتبقى «العميل».
      statusLabel: { ar: "العرض", en: "Screenings" },
      logline:{
        ar: "فيلم قصير بالأبيض والأسود — عرضه العالمي الأول في مهرجان الفيلم العربي في روتردام.",
        en: "A black-and-white short film — world premiere at the Arab Film Festival in Rotterdam."
      },
      // ٢٨ مهرجان وجايزة — من FilmFreeway. win: true = فوز فعلي.
      awards: [
        { win: true,
          ar: "فوز — جايزة لجنة التحكيم، أحسن فيلم روائي قصير · سانتا كروز السينمائي الدولي، الأرجنتين",
          en: "Winner — Jury Award, Best Fiction Short Film · Santa Cruz International Film Festival, Argentina" },
        { win: true,
          ar: "فوز — جايزة البرج الذهبي، أحسن فيلم مصري قصير · القاهرة الدولي للفيلم القصير",
          en: "Winner — Golden Tower Award, Best Egyptian Short Film · Cairo International Short Film Festival" },
        { win: true,
          ar: "فوز — جايزة لجنة التحكيم، أحسن فيلم روائي قصير · لاباز السينمائي الدولي، بوليفيا",
          en: "Winner — Jury Prize, Best Narrative Short Film · La Paz International Film Festival, Bolivia" },
        { win: true,
          ar: "فوز — جايزة لجنة التحكيم، مسابقة الأفلام القصيرة · مهرجان القدس للفيلم العربي",
          en: "Winner — Jury Prize, Short Film Competition · Jerusalem Arab Film Festival" },
        { win: true,
          ar: "فوز — تنويه خاص، مسابقة الأفلام القصيرة · ماتيرا السينمائي الدولي، إيطاليا",
          en: "Winner — Honorable Mention, Short Film Competition · Matera International Film Festival, Italy" },
        { ar: "اختيار رسمي — Film at Lincoln Center · نيويورك للفيلم الأفريقي (الدورة ٣٠)",
          en: "Official Selection — Film at Lincoln Center · New York African Film Festival (30th edition)" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن فيلم قصير · مهرجان الفيلم العربي، روتردام",
          en: "Nominee — Jury Award, Best Short Film · Arab Film Festival Rotterdam" },
        { ar: "ترشيح — جايزة الجمهور، أحسن فيلم قصير · أوكوتوكس السينمائي، كندا",
          en: "Nominee — Audience Award, Best Short Film · Okotoks Film Festival, Canada" },
        { ar: "المسابقة الرسمية — ترشيح لجايزة لجنة التحكيم · AfryKamera للفيلم الأفريقي، وارسو",
          en: "Official Competition — Jury Award nominee · AfryKamera African Film Festival, Warsaw" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن طاقم تمثيل · أوريجون للأفلام القصيرة، بورتلاند",
          en: "Nominee — Jury Prize, Best Ensemble Cast · Oregon Short Film Festival, Portland" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن فيلم · تكساس للأفلام القصيرة، سان أنطونيو",
          en: "Nominee — Jury Prize, Best Picture · Texas Short Film Festival, San Antonio" },
        { ar: "ترشيح — جايزة اليمامة لاختيار الجمهور · تورونتو للفيلم العربي",
          en: "Nominee — Yamama Audience Choice Award · Toronto Arab Film Festival" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن سيناريو · مهرجان الفيلم الأفريقي (TAFF)، دالاس",
          en: "Nominee — Jury Award, Best Screenplay · The African Film Festival (TAFF), Dallas" },
        { ar: "ترشيح — مسابقة صنّاع الأفلام الأفارقة الشباب · لوفان للفيلم الأفريقي، بلجيكا",
          en: "Nominee — Young Afrikan Filmmakers Competition · Leuven African Film Festival, Belgium" },
        { ar: "ترشيح — جايزة النيل الكبرى، أحسن فيلم قصير · الأقصر للسينما الأفريقية",
          en: "Nominee — Grand Nile Prize, Best Short Film · Luxor African Film Festival" },
        { ar: "ترشيح — جايزة الكهف الذهبي، أحسن فيلم قصير · طنجة السينمائي الدولي، المغرب",
          en: "Nominee — Golden Cave Award, Best Short Film · Tangier International Film Festival, Morocco" },
        { ar: "ترشيح — جايزة الباوباب، أحسن فيلم قصير · Film Africa، لندن",
          en: "Nominee — Baobab Award, Best Short Film · Film Africa, London" },
        { ar: "ترشيح — الجائزة الكبرى، أحسن فيلم · يريفان الدولي للأفلام القصيرة، أرمينيا",
          en: "Nominee — Grand Prix, Best Film · Yerevan International Short Film Festival, Armenia" },
        { ar: "ترشيح — جايزة لجنة التحكيم، المسابقة الدولية · ألميريا السينمائي الدولي، إسبانيا",
          en: "Nominee — Jury Award, International Competition · Almeria International Film Festival, Spain" },
        { ar: "ترشيح — الجائزة الكبرى، قسم الأفلام القصيرة · ساليرنو السينمائي الدولي، إيطاليا",
          en: "Nominee — Grand Trophy, Short Film Section · Salerno International Film Festival, Italy" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن فيلم روائي قصير · أرلينجتون السينمائي الدولي",
          en: "Nominee — Jury Prize, Best Narrative Short Film · Arlington International Film Festival" },
        { ar: "ترشيح — جايزة الفيلم القصير الدولي · المهرجان الدولي لسينما المؤلف، الرباط",
          en: "Nominee — Best International Short Film · Festival International de Cinéma d'Auteur de Rabat" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن فيلم · زاوية شورتس، القاهرة",
          en: "Nominee — Jury Award, Best Film · Zawya Shorts, Cairo" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن فيلم روائي قصير · أتلانتا للفيلم الأفريقي",
          en: "Nominee — Jury Award, Best Narrative Short Film · Atlanta African Film Festival" },
        { ar: "ترشيح — جايزة باجماتي، أحسن فيلم قصير · نيبال السينمائي الدولي (NIFF)",
          en: "Nominee — Bagmati Award, Best Live Action Short Film · Nepal International Film Festival" },
        { ar: "ترشيح — جايزة الرمّانة القرمزية، أحسن فيلم قصير · مهرجان MENA السينمائي",
          en: "Nominee — Scarlet Pomegranate Award, Best Short Film · MENA Film Festival" },
        { ar: "ترشيح — جايزة كليمنجارو، أحسن فيلم روائي قصير · مهرجان Africlap",
          en: "Nominee — Kilimandjaro Award, Best Narrative Short Film · Festival Africlap" },
        { ar: "ترشيح — جايزة لجنة التحكيم، أحسن فيلم روائي قصير · مهرجان منصّات",
          en: "Nominee — Jury Award, Outstanding Narrative Short Film · Manassat Film Festival" }
      ],
      poster: "assets/img/stills/hdn-01.jpg",
      posterRatio: 1.354,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "laverne-ksa",
      published: true,
      stage: "produced",
      category: "commercial",
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
      posterRatio: 1.537,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "trubla",
      published: true,
      stage: "produced",
      category: "commercial",
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
      posterRatio: 1.813,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "liveshow",
      published: true,
      stage: "produced",
      category: "film",
      title:  { ar: "Live Show", en: "Live Show" },
      format: { ar: "فيلم قصير", en: "Short film" },
      genre:  { ar: "دراما", en: "Drama" },
      year:   "2023",   // ⚠️ مقدّرة من تاريخ رفع الصور — صحّحها لو غلط
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: null,
      logline:{
        ar: "فيلم قصير — تصوير في الإسكندرية.",
        en: "A short film — shot in Alexandria."
      },
      poster: "assets/img/stills/liveshow-02.jpg",
      posterRatio: 1.44,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
      stills: [
        "assets/img/stills/liveshow-01.jpg",
        "assets/img/stills/liveshow-03.jpg",
        "assets/img/stills/liveshow-04.jpg",
        "assets/img/stills/liveshow-05.jpg"
      ],
      video:  null,
      notes:  null
    },

    {
      id: "marijuana",
      published: true,
      stage: "produced",
      category: "music",
      title:  { ar: "ماريجوانا — هجين", en: "Marijuana — Hageen" },
      format: { ar: "فيديو كليب · ٣:٤٧", en: "Music video · 3:47" },
      genre:  { ar: "موسيقى", en: "Music" },
      year:   "2021",
      role:   { ar: "إخراج", en: "Director" },
      status: { ar: "فريق هجين", en: "Hageen (band)" },
      logline:{
        ar: "فيديو كليب لأغنية «ماريجوانا» لفريق هجين — إخراجي.",
        en: "Music video for \"Marijuana\" by the band Hageen — directed by me."
      },
      poster: "assets/img/stills/marijuana-04.jpg",
      posterRatio: 2.389,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
      stills: [
        "assets/img/stills/marijuana-01.jpg",
        "assets/img/stills/marijuana-02.jpg",
        "assets/img/stills/marijuana-03.jpg",
        "assets/img/stills/marijuana-05.jpg",
        "assets/img/stills/marijuana-06.jpg",
        "assets/img/stills/marijuana-07.jpg",
        "assets/img/stills/marijuana-08.jpg",
        "assets/img/stills/marijuana-09.jpg",
        "assets/img/stills/marijuana-10.jpg",
        "assets/img/stills/marijuana-11.jpg"
      ],
      video:  { provider: "vimeo", id: "533574568" },
      notes:  {
        ar: "إخراج محمد عجمي · مدير تصوير هاشم حاميكس · مونتاج وتصحيح ألوان ItsNoureldin.",
        en: "Directed by Mohamed Agamy · DOP Hashem Hamix · Edit and colour by ItsNoureldin."
      }
    },

    {
      id: "moussa",
      published: true,
      stage: "produced",
      category: "film",
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
      posterRatio: 1.333,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "raya",
      published: true,
      stage: "produced",
      category: "commercial",
      title:  { ar: "Raya Auto Premium", en: "Raya Auto Premium" },
      format: { ar: "إعلان تليفزيوني", en: "TVC" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2023",
      role:   { ar: "إنتاج", en: "Producer" },
      status: { ar: "Raya Auto Premium", en: "Raya Auto Premium" },
      logline:{
        ar: "إعلان «Golf Car-ried» لراية أوتو بريميم — تصوير على الساحل.",
        en: "The Golf Car-ried TVC for Raya Auto Premium — shot on the coast."
      },
      poster: "assets/img/stills/raya-03.jpg",
      posterRatio: 1.783,
      stills: [
        "assets/img/stills/raya-01.jpg",
        "assets/img/stills/raya-02.jpg",
        "assets/img/stills/raya-04.jpg",
        "assets/img/stills/raya-05.jpg"
      ],
      video:  null,
      notes:  {
        ar: "إخراج محمد عبدالعزيز سليمان · شركة إنتاج Rivolta · تصوير فيلوباتير مراد.",
        en: "Directed by Mohamed Abdelaziz Soliman · Production house Rivolta · DOP Filopater Morad."
      }
    },

    {
      id: "gouna",
      published: true,
      stage: "produced",
      category: "commercial",
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
      posterRatio: 1.78,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "bella",
      published: true,
      stage: "produced",
      category: "commercial",
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
      posterRatio: 0.559,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "bebo",
      published: true,
      stage: "produced",
      category: "music",
      title:  { ar: "بيبو — بنحب نغيب", en: "Bebo — Bn7b N8eeb" },
      format: { ar: "فيديو كليب · ٢:٥٢", en: "Music video · 2:52" },
      genre:  { ar: "موسيقى", en: "Music" },
      year:   "2023",
      role:   { ar: "إخراج", en: "Director" },
      status: { ar: "بيبو", en: "Bebo" },
      logline:{
        ar: "فيديو كليب «بنحب نغيب» لبيبو — إخراجي، تصوير على ساحل الإسكندرية.",
        en: "Music video for Bn7b N8eeb by Bebo — directed by me, shot on the Alexandria coast."
      },
      poster: "assets/img/stills/bebo-05.jpg",
      posterRatio: 1.783,
      stills: [
        "assets/img/stills/bebo-01.jpg",
        "assets/img/stills/bebo-02.jpg",
        "assets/img/stills/bebo-03.jpg",
        "assets/img/stills/bebo-04.jpg"
      ],
      video:  { provider: "vimeo", id: "854573021" },
      notes:  {
        ar: "إخراج محمد عجمي · تصوير فيلوباتير مراد · إنتاج عمروش بدر.",
        en: "Directed by Mohamed Agamy · DOP Filopatre Morad · Produced by Amrosh Badr."
      }
    },

    {
      id: "makka",
      published: true,
      stage: "produced",
      category: "commercial",
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
      posterRatio: 1.769,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "miss-laverne",
      published: true,
      stage: "produced",
      category: "commercial",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Miss Laverne", en: "Miss Laverne" },
      format: { ar: "حملة عطور", en: "Perfume campaign" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "Laverne Group — السعودية", en: "Laverne Group — KSA" },
      logline:{
        ar: "حملة عطر نسائي لبراند سعودي — اتصوّرت في مصر.",
        en: "A women's fragrance campaign for a Saudi brand — shot in Egypt."
      },
      poster: "assets/img/stills/misslaverne-04.jpg",
      posterRatio: 0.567,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "wa7dani",
      published: true,
      stage: "produced",
      category: "music",
      title:  { ar: "وحداني", en: "Wa7dani" },
      format: { ar: "فيديو كليب · ٢:١٥", en: "Music video · 2:15" },
      genre:  { ar: "موسيقى", en: "Music" },
      year:   "2022",
      role:   { ar: "إخراج", en: "Director" },
      status: { ar: "إخراج", en: "Directed" },
      logline:{
        ar: "فيديو كليب «وحداني» — إخراجي، تصوير ليلي في الإسكندرية.",
        en: "Music video for Wa7dani — directed by me, a night shoot in Alexandria."
      },
      poster: "assets/img/stills/wa7dani-03.jpg",
      posterRatio: 2.345,
      stills: [
        "assets/img/stills/wa7dani-01.jpg",
        "assets/img/stills/wa7dani-02.jpg",
        "assets/img/stills/wa7dani-04.jpg",
        "assets/img/stills/wa7dani-05.jpg",
        "assets/img/stills/wa7dani-06.jpg",
        "assets/img/stills/wa7dani-07.jpg",
        "assets/img/stills/wa7dani-08.jpg",
        "assets/img/stills/wa7dani-09.jpg",
        "assets/img/stills/wa7dani-10.jpg"
      ],
      video:  { provider: "vimeo", id: "701768449" },
      notes:  {
        ar: "إخراج محمد عجمي · مدير تصوير أيمن محمود.",
        en: "Directed by Mohamed Agamy · DOP Ayman Mahmoud."
      }
    },

    {
      id: "assaf",
      published: true,
      stage: "produced",
      category: "commercial",
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
      posterRatio: 0.951,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "atlantis",
      published: true,
      stage: "produced",
      category: "commercial",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Atlantis Homme", en: "Atlantis Homme" },
      format: { ar: "حملة عطور", en: "Fragrance campaign" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2025",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "Atlantis Homme — السعودية", en: "Atlantis Homme — KSA" },
      logline:{
        ar: "حملة عطر رجالي — تصوير على البحر في مصر.",
        en: "A men's fragrance campaign — shot on the coast in Egypt."
      },
      poster: "assets/img/stills/atlantis-01.jpg",
      posterRatio: 0.557,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "bared",
      published: true,
      stage: "produced",
      category: "music",
      title:  { ar: "BARED — كابتن ماجد", en: "BARED — Captain Maged" },
      format: { ar: "فيديو كليب · ٢:٤٧", en: "Music video · 2:47" },
      genre:  { ar: "موسيقى", en: "Music" },
      year:   "2025",
      role:   { ar: "منتج منفّذ", en: "Executive Producer" },
      status: { ar: "منتج منفّذ", en: "Executive Producer" },
      logline:{
        ar: "دراما بحرية، تصوير ليلي على الساحل.",
        en: "A coastal drama, shot at night on the shore."
      },
      poster: "assets/img/stills/bared-04.jpg",
      posterRatio: 1.78,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "garden",
      published: true,
      stage: "produced",
      category: "commercial",
      lowRes: true,   // الصورة الأصلية صغيرة — بتتعرض بحجم أصغر عشان تفضل حادّة
      title:  { ar: "Miss Laverne Garden", en: "Miss Laverne Garden" },
      format: { ar: "فيلم حملة", en: "Campaign film" },
      genre:  { ar: "إعلان", en: "Commercial" },
      year:   "2024",
      role:   { ar: "مدير إنتاج", en: "Production Manager" },
      status: { ar: "Laverne Group — السعودية", en: "Laverne Group — KSA" },
      logline:{
        ar: "حملة عطور في حديقة — تصوير نهاري في مصر.",
        en: "A garden fragrance campaign — a daylight shoot in Egypt."
      },
      poster: "assets/img/stills/garden-03.jpg",
      posterRatio: 0.663,   // نسبة الصورة الحقيقية — الكارت بياخدها عشان مايتقصّش
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
      id: "g3zt",
      published: true,
      stage: "produced",
      category: "music",
      title:  { ar: "عجزت", en: "3gzt" },
      format: { ar: "فيديو كليب · ١:٥٧", en: "Music video · 1:57" },
      genre:  { ar: "موسيقى", en: "Music" },
      year:   "2021",
      role:   { ar: "إخراج", en: "Director" },
      status: { ar: "اتصوّر بموبايل", en: "Shot on iPhone" },
      statusLabel: { ar: "ملاحظة", en: "Note" },
      logline:{
        ar: "فيديو كليب «عجزت» — إخراجي، اتصوّر بالكامل بموبايل في شوارع الإسكندرية.",
        en: "Music video for 3gzt — directed by me, shot entirely on an iPhone in the streets of Alexandria."
      },
      poster: "assets/img/stills/g3zt-01.jpg",
      posterRatio: 2.345,
      stills: [
        "assets/img/stills/g3zt-02.jpg",
        "assets/img/stills/g3zt-03.jpg",
        "assets/img/stills/g3zt-04.jpg",
        "assets/img/stills/g3zt-05.jpg",
        "assets/img/stills/g3zt-06.jpg",
        "assets/img/stills/g3zt-07.jpg",
        "assets/img/stills/g3zt-08.jpg",
        "assets/img/stills/g3zt-09.jpg",
        "assets/img/stills/g3zt-10.jpg"
      ],
      video:  { provider: "vimeo", id: "552287142" },
      notes:  {
        ar: "إخراج محمد عجمي · تصوير ومونتاج وتصحيح ألوان دانيال عاطف عزيز.",
        en: "Directed by Mohamed Agamy · DOP, edit and colour by Daniel Atef Aziz."
      }
    },

  ]
};
