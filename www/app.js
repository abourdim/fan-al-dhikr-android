/* فن الذكر والدعاء — THE ART OF DHIKR AND DUA — app.js */
/* Based on "Fan Al-Dhikr wal-Du'a 'inda Khatam al-Anbiya" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'فن الذكر والدعاء',
    splashSub: 'عند خاتم الأنبياء ﷺ',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الرعد ١٣: ٢٨',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabAdhkar: 'الأذكار',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'فن الذكر والدعاء',
    cardsDesc: '٢٠ درساً من كتاب الشيخ الغزالي عن الذكر والدعاء — لكل درس حكمة وآية وتطبيق عملي',
    adhkarTitle: 'أذكار يومية',
    adhkarDesc: 'أذكار الصباح والمساء وأدعية مأثورة من السنة النبوية',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من الكتاب — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر معرفتك',
    quizDesc: 'ما مدى معرفتك بفن الذكر والدعاء؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية مختارة',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ ذكر اليوم',
    quizAgain: 'أعد الاختبار',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٠ درساً في فن الذكر والدعاء',
      'أذكار الصباح والمساء',
      'عادات يومية مع تتبع مستمر',
      'اختبار معرفة + أدعية مختارة'
    ],
    youngMode: 'المستكشف الصغير',
    teenMode: 'الباحث الشاب',
  },
  en: {
    appTitle: 'The Art of Dhikr & Dua',
    splashSub: 'At the Seal of the Prophets ﷺ',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ar-Ra\'d 13:28',
    tabHome: 'Home', tabCards: 'Cards', tabAdhkar: 'Adhkar',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'The Art of Dhikr & Dua',
    cardsDesc: '20 lessons from Sheikh al-Ghazali\'s book on remembrance and supplication — each with wisdom, a verse, and practical application',
    adhkarTitle: 'Daily Adhkar',
    adhkarDesc: 'Morning and evening remembrances and prophetic supplications',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — track your daily progress',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'How well do you know the art of dhikr and dua?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Selected Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Dhikr',
    quizAgain: 'Retake Quiz',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      '20 lessons on the art of dhikr and dua',
      'Morning and evening adhkar',
      'Daily habits with streak tracking',
      'Knowledge quiz + selected duas'
    ],
    youngMode: 'Young Explorer',
    teenMode: 'Teen Scholar',
  },
  fr: {
    appTitle: 'L\'Art du Dhikr et du Dua',
    splashSub: 'Aupr\u00e8s du Sceau des Proph\u00e8tes ﷺ',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ar-Ra\'d 13:28',
    tabHome: 'Accueil', tabCards: 'Cartes', tabAdhkar: 'Adhkar',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'L\'Art du Dhikr et du Dua',
    cardsDesc: '20 le\u00e7ons du livre du Sheikh al-Ghazali sur le rappel et l\'invocation — chacune avec sagesse, verset et application pratique',
    adhkarTitle: 'Adhkar Quotidiens',
    adhkarDesc: 'Rappels du matin et du soir et invocations proph\u00e9tiques',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspir\u00e9es du livre — suivez vos progr\u00e8s',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Connaissez-vous bien l\'art du dhikr et du dua ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas S\u00e9lectionn\u00e9es',
    resetBtn: 'R\u00e9initialiser',
    submitQuiz: 'Voir les R\u00e9sultats',
    dailyLabel: '✨ Dhikr du Jour',
    quizAgain: 'Refaire le Quiz',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours cons\u00e9cutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '20 le\u00e7ons sur l\'art du dhikr et du dua',
      'Adhkar du matin et du soir',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas s\u00e9lectionn\u00e9es'
    ],
    youngMode: 'Jeune Explorateur',
    teenMode: 'Jeune Savant',
  }
};

// ═══════════════ CARDS DATA (20 lessons) ═══════════════
const CARDS = [
  {
    id:1, emoji:'🤲',
    ar:{title:'حقيقة الذكر عند الغزالي',desc:'يرى الغزالي أن الذكر ليس مجرد تحريك اللسان بكلمات مكرورة، بل حضور قلبي وصلة حية مع الله. يؤكد أن الذكر يبني حصناً للمؤمن في زمن التحديات الروحية — وهو عبادة خاتم الأنبياء الكبرى.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'سورة الرعد ١٣: ٢٨',action:'توقف الآن وقل "سبحان الله وبحمده" بتدبر وخشوع'},
    en:{title:'The Reality of Dhikr',desc:'Al-Ghazali in "The Art of Dhikr and Dua" sees: Dhikr is not merely moving the tongue with words. It is evoking God\'s greatness in both heart and mind. The true one who remembers lives with God every moment.',verse:'Verily, in the remembrance of Allah do hearts find rest',verseRef:'Surah Ar-Ra\'d 13:28',action:'Pause now and say "SubhanAllah wa bihamdihi" with reflection and humility'},
    fr:{title:'La R\u00e9alit\u00e9 du Dhikr',desc:'Al-Ghazali dans "L\'Art du Dhikr et du Dua" voit: Le dhikr n\'est pas simplement bouger la langue avec des mots. C\'est \u00e9voquer la grandeur de Dieu dans le c\u0153ur et l\'esprit. Le vrai dh\u00e2kir vit avec Dieu \u00e0 chaque instant.',verse:'C\'est par le rappel d\'Allah que les c\u0153urs se tranquillisent',verseRef:'Sourate Ar-Ra\'d 13:28',action:'Faites une pause et dites "SubhanAllah wa bihamdihi" avec r\u00e9flexion'}
  },
  {
    id:2, emoji:'🌅',
    ar:{title:'أذكار الصباح والمساء',desc:'يرى الغزالي في "فن الذكر والدعاء": النبي ﷺ كان يحافظ على أذكار الصباح والمساء كحصن يحمي المسلم من كل شر. هي ليست طقوساً بل درع واقٍ من القلق والخوف.',verse:'فَاذْكُرُونِي أَذْكُرْكُمْ',verseRef:'سورة البقرة ٢: ١٥٢',action:'ابدأ يومك بأذكار الصباح — حتى لو بثلاثة أذكار فقط'},
    en:{title:'Morning & Evening Adhkar',desc:'Al-Ghazali in "The Art of Dhikr and Dua" sees: The Prophet ﷺ maintained morning and evening adhkar as a fortress protecting the Muslim from all evil. They are not rituals but a shield against anxiety and fear.',verse:'Remember Me and I will remember you',verseRef:'Surah Al-Baqarah 2:152',action:'Start your day with morning adhkar — even if just three'},
    fr:{title:'Adhkar du Matin et du Soir',desc:'Al-Ghazali dans "L\'Art du Dhikr et du Dua" voit: Le Proph\u00e8te ﷺ maintenait les adhkar du matin et du soir comme une forteresse prot\u00e9geant le musulman. Ce ne sont pas des rituels mais un bouclier contre l\'anxi\u00e9t\u00e9.',verse:'Souvenez-vous de Moi et Je Me souviendrai de vous',verseRef:'Sourate Al-Baqarah 2:152',action:'Commencez votre journ\u00e9e avec les adhkar du matin — m\u00eame trois seulement'}
  },
  {
    id:3, emoji:'💎',
    ar:{title:'آداب الدعاء',desc:'يرى الغزالي في "فن الذكر والدعاء": للدعاء آداب يجب مراعاتها: الطهارة، استقبال القبلة، رفع اليدين، البدء بالحمد والصلاة على النبي، ثم الدعاء بخشوع وإلحاح.',verse:'ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً',verseRef:'سورة الأعراف ٧: ٥٥',action:'في دعائك القادم، طبّق أدب الدعاء: ابدأ بالحمد ثم صلِّ على النبي ثم ادعُ'},
    en:{title:'Etiquette of Dua',desc:'Al-Ghazali in "The Art of Dhikr and Dua" sees: Dua has etiquettes to observe: purity, facing the qibla, raising hands, beginning with praise and blessings on the Prophet, then supplicating with humility and persistence.',verse:'Call upon your Lord in humility and privately',verseRef:'Surah Al-A\'raf 7:55',action:'In your next dua, apply the etiquette: start with praise, bless the Prophet, then ask'},
    fr:{title:'\u00c9tiquette du Dua',desc:'Al-Ghazali dans "L\'Art du Dhikr et du Dua" voit: Le dua a des \u00e9tiquettes \u00e0 observer : puret\u00e9, faire face \u00e0 la qibla, lever les mains, commencer par la louange et les pri\u00e8res sur le Proph\u00e8te.',verse:'Invoquez votre Seigneur en toute humilit\u00e9 et en secret',verseRef:'Sourate Al-A\'raf 7:55',action:'Dans votre prochain dua, appliquez l\'\u00e9tiquette : louange, pri\u00e8re sur le Proph\u00e8te, puis demande'}
  },
  {
    id:4, emoji:'🕐',
    ar:{title:'أوقات إجابة الدعاء',desc:'يرى الغزالي في "فن الذكر والدعاء": هناك أوقات يُستجاب فيها الدعاء: الثلث الأخير من الليل، بين الأذان والإقامة، يوم الجمعة، في السجود، وعند الإفطار.',verse:'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',verseRef:'سورة البقرة ٢: ١٨٦',action:'اغتنم وقت السحر الليلة وادعُ الله بأحب دعاء إلى قلبك'},
    en:{title:'Times of Answered Dua',desc:'Al-Ghazali in "The Art of Dhikr and Dua" sees: There are times when dua is answered: the last third of the night, between adhan and iqama, on Friday, in prostration, and when breaking fast.',verse:'When My servants ask about Me, indeed I am near',verseRef:'Surah Al-Baqarah 2:186',action:'Seize the pre-dawn hour tonight and make your dearest supplication'},
    fr:{title:'Moments d\'Exaucement du Dua',desc:'Al-Ghazali dans "L\'Art du Dhikr et du Dua" voit: Il y a des moments o\u00f9 le dua est exauc\u00e9 : le dernier tiers de la nuit, entre l\'adhan et l\'iqama, le vendredi, en prosternation, et \u00e0 la rupture du je\u00fbne.',verse:'Quand Mes serviteurs t\'interrogent sur Moi, Je suis proche',verseRef:'Sourate Al-Baqarah 2:186',action:'Profitez de l\'heure avant l\'aube ce soir pour une supplication sinc\u00e8re'}
  },
  {
    id:5, emoji:'❤️',
    ar:{title:'الذكر والسكينة الداخلية',desc:'يرى الغزالي في "فن الذكر والدعاء": الذكر يملأ القلب بسكينة لا يمنحها مال ولا جاه. من عاش مع الذكر لا يعرف الوحدة ولا الخوف لأن الله معه.',verse:'هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ',verseRef:'سورة الفتح ٤٨: ٤',action:'عندما تشعر بالقلق، كرر "لا إله إلا الله" ٣٣ مرة وتأمل معناها'},
    en:{title:'Dhikr and Inner Peace',desc:'Al-Ghazali in "The Art of Dhikr and Dua" sees: Dhikr fills the heart with a tranquility that neither wealth nor status can provide. One who lives with dhikr never feels loneliness or fear because God is with them.',verse:'He it is who sent down tranquility into the hearts of the believers',verseRef:'Surah Al-Fath 48:4',action:'When anxious, repeat "La ilaha illallah" 33 times and ponder its meaning'},
    fr:{title:'Dhikr et Paix Int\u00e9rieure',desc:'Al-Ghazali dans "L\'Art du Dhikr et du Dua" voit: Le dhikr remplit le c\u0153ur d\'une tranquillit\u00e9 que ni richesse ni statut ne peuvent offrir. Celui qui vit avec le dhikr ne conna\u00eet ni solitude ni peur.',verse:'C\'est Lui qui a fait descendre la qu\u00e9titude dans les c\u0153urs des croyants',verseRef:'Sourate Al-Fath 48:4',action:'Quand vous \u00eates anxieux, r\u00e9p\u00e9tez "La ilaha illallah" 33 fois avec r\u00e9flexion'}
  },
  {
    id:6, emoji:'🌙',
    ar:{title:'قيام الليل والمناجاة',desc:'يرى الغزالي في "فن الذكر والدعاء": الليل هو وقت المناجاة الخاصة بين العبد وربه. قيام الليل ليس عبئاً بل هو شرف المؤمن ومصدر قوته.',verse:'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ',verseRef:'سورة الإسراء ١٧: ٧٩',action:'صلِّ ركعتين في الليل واجعل دعاء السجود طويلاً'},
    en:{title:'Night Prayer and Intimate Conversation',desc:'Al-Ghazali in "The Art of Dhikr and Dua" sees: The night is the time for private conversation between the servant and his Lord. Night prayer is not a burden but the believer\'s honor and source of strength.',verse:'And during the night, pray as an additional prayer',verseRef:'Surah Al-Isra 17:79',action:'Pray two rak\'at at night and make your prostration dua long'},
    fr:{title:'Pri\u00e8re Nocturne et Conversation Intime',desc:'Al-Ghazali dans "L\'Art du Dhikr et du Dua" voit: La nuit est le moment de conversation priv\u00e9e entre le serviteur et son Seigneur. La pri\u00e8re nocturne est l\'honneur du croyant et sa source de force.',verse:'Et la nuit, prie comme suppl\u00e9ment pour toi',verseRef:'Sourate Al-Isra 17:79',action:'Priez deux rak\'at la nuit et prolongez votre dua en prosternation'}
  },
  {
    id:7, emoji:'📿',
    ar:{title:'التسبيح والتحميد والتكبير',desc:'يبيّن الغزالي: سبحان الله والحمد لله والله أكبر — ثلاث كلمات خفيفات على اللسان ثقيلات في الميزان حبيبات إلى الرحمن.',verse:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',verseRef:'متفق عليه',action:'بعد كل صلاة، سبّح ٣٣ واحمد ٣٣ وكبّر ٣٣ مرة'},
    en:{title:'Tasbih, Tahmid and Takbir',desc:'Al-Ghazali explains: SubhanAllah, Alhamdulillah, Allahu Akbar — three phrases light on the tongue, heavy on the scales, and beloved to the Most Merciful.',verse:'SubhanAllah wa bihamdihi, SubhanAllah al-Adheem',verseRef:'Agreed upon',action:'After each prayer, say SubhanAllah 33, Alhamdulillah 33, Allahu Akbar 33 times'},
    fr:{title:'Tasbih, Tahmid et Takbir',desc:'Al-Ghazali explique: SubhanAllah, Alhamdulillah, Allahu Akbar — trois expressions l\u00e9g\u00e8res sur la langue, lourdes dans la balance, et aim\u00e9es du Mis\u00e9ricordieux.',verse:'SubhanAllah wa bihamdihi, SubhanAllah al-Adheem',verseRef:'Unanimement reconnu',action:'Apr\u00e8s chaque pri\u00e8re, dites SubhanAllah 33, Alhamdulillah 33, Allahu Akbar 33 fois'}
  },
  {
    id:8, emoji:'🛡️',
    ar:{title:'الذكر حصن المؤمن',desc:'يبيّن الغزالي: أذكار الصباح والمساء حصن يحمي المؤمن. من تركها كان كالجندي الذي خرج للمعركة بلا درع.',verse:'وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً',verseRef:'سورة الأعراف ٧: ٢٠٥',action:'لا تخرج من المنزل قبل أن تقرأ آية الكرسي ودعاء الخروج'},
    en:{title:'Dhikr: The Believer\'s Fortress',desc:'Al-Ghazali explains: Morning and evening adhkar are a fortress protecting the believer. Leaving them is like a soldier going to battle without armor.',verse:'And remember your Lord within yourself in humility and fear',verseRef:'Surah Al-A\'raf 7:205',action:'Don\'t leave home before reciting Ayat al-Kursi and the dua for leaving'},
    fr:{title:'Le Dhikr : Forteresse du Croyant',desc:'Al-Ghazali explique: Les adhkar du matin et du soir sont une forteresse. Les abandonner, c\'est comme un soldat partant au combat sans armure.',verse:'Et invoque ton Seigneur en toi-m\u00eame avec humilit\u00e9 et crainte',verseRef:'Sourate Al-A\'raf 7:205',action:'Ne quittez pas la maison sans r\u00e9citer Ayat al-Kursi et le dua de sortie'}
  },
  {
    id:9, emoji:'🌊',
    ar:{title:'الاستغفار وتجديد الروح',desc:'الاستغفار يغسل الذنوب ويجدد الروح. النبي ﷺ كان يستغفر أكثر من مئة مرة في اليوم رغم أنه معصوم.',verse:'وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ',verseRef:'سورة المزمل ٧٣: ٢٠',action:'قل "أستغفر الله العظيم وأتوب إليه" ١٠٠ مرة اليوم'},
    en:{title:'Istighfar and Renewing the Spirit',desc:'Istighfar washes away sins and renews the spirit. The Prophet ﷺ sought forgiveness over 100 times daily despite being sinless.',verse:'And seek forgiveness of Allah, indeed Allah is Forgiving, Merciful',verseRef:'Surah Al-Muzzammil 73:20',action:'Say "Astaghfirullah al-Adheem wa atubu ilayh" 100 times today'},
    fr:{title:'Istighfar et Renouveau de l\'Esprit',desc:'L\'istighfar lave les p\u00e9ch\u00e9s et renouvelle l\'esprit. Le Proph\u00e8te ﷺ demandait pardon plus de 100 fois par jour malgr\u00e9 son innocence.',verse:'Demandez pardon \u00e0 Allah, certes Allah est Pardonneur et Mis\u00e9ricordieux',verseRef:'Sourate Al-Muzzammil 73:20',action:'Dites "Astaghfirullah al-Adheem wa atubu ilayh" 100 fois aujourd\'hui'}
  },
  {
    id:10, emoji:'🕋',
    ar:{title:'الصلاة على النبي ﷺ',desc:'الصلاة على النبي ﷺ من أعظم الأذكار. بها يُصلي الله على العبد عشراً ويُرفع له عشر درجات.',verse:'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ',verseRef:'سورة الأحزاب ٣٣: ٥٦',action:'أكثر من الصلاة على النبي ﷺ اليوم — خاصة يوم الجمعة'},
    en:{title:'Sending Blessings on the Prophet ﷺ',desc:'Sending blessings on the Prophet ﷺ is among the greatest dhikr. Through it, God blesses the servant tenfold and raises them ten degrees.',verse:'Indeed, Allah and His angels send blessings upon the Prophet',verseRef:'Surah Al-Ahzab 33:56',action:'Increase your blessings on the Prophet ﷺ today — especially on Friday'},
    fr:{title:'Pri\u00e8re sur le Proph\u00e8te ﷺ',desc:'La pri\u00e8re sur le Proph\u00e8te ﷺ est parmi les plus grands dhikr. Par elle, Dieu b\u00e9nit le serviteur dix fois et l\'\u00e9l\u00e8ve de dix degr\u00e9s.',verse:'Certes, Allah et Ses anges b\u00e9nissent le Proph\u00e8te',verseRef:'Sourate Al-Ahzab 33:56',action:'Augmentez vos pri\u00e8res sur le Proph\u00e8te ﷺ aujourd\'hui — surtout le vendredi'}
  },
  {
    id:11, emoji:'🌿',
    ar:{title:'ذكر الله في كل حال',desc:'المسلم يذكر الله في كل أحواله: عند الأكل والنوم والسفر والدخول والخروج. الحياة كلها محطات ذكر.',verse:'الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ',verseRef:'سورة آل عمران ٣: ١٩١',action:'اجعل لكل فعل يومي ذكراً: دعاء الطعام، دعاء النوم، دعاء الخروج'},
    en:{title:'Remembering God in Every State',desc:'A Muslim remembers God in all situations: eating, sleeping, traveling, entering and leaving. Life itself is a series of dhikr stations.',verse:'Those who remember Allah standing, sitting, and on their sides',verseRef:'Surah Aal-Imran 3:191',action:'Assign a dhikr to each daily act: dua for food, sleep, and leaving the house'},
    fr:{title:'Se Souvenir de Dieu en Tout \u00c9tat',desc:'Le musulman se souvient de Dieu en toutes situations : manger, dormir, voyager, entrer et sortir. La vie enti\u00e8re est une s\u00e9rie de stations de dhikr.',verse:'Ceux qui invoquent Allah debout, assis et couch\u00e9s sur leurs c\u00f4t\u00e9s',verseRef:'Sourate Aal-Imran 3:191',action:'Assignez un dhikr \u00e0 chaque acte quotidien : dua pour le repas, le sommeil, la sortie'}
  },
  {
    id:12, emoji:'💧',
    ar:{title:'الدعاء عند المحن',desc:'الشدائد هي فرصة للتقرب من الله بالدعاء. المؤمن لا يتخلى عن ربه في الرخاء ولا يتذكره فقط في الشدة.',verse:'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ',verseRef:'سورة غافر ٤٠: ٦٠',action:'إذا كنت تمر بمحنة، ارفع يديك الآن وادعُ الله بصدق'},
    en:{title:'Dua During Hardships',desc:'Hardships are an opportunity to draw closer to God through dua. A believer does not abandon their Lord in ease nor remember Him only in difficulty.',verse:'And your Lord said: Call upon Me, I will respond to you',verseRef:'Surah Ghafir 40:60',action:'If you\'re going through hardship, raise your hands now and supplicate sincerely'},
    fr:{title:'Dua Pendant les \u00c9preuves',desc:'Les \u00e9preuves sont une occasion de se rapprocher de Dieu par le dua. Le croyant n\'abandonne pas son Seigneur dans l\'aisance.',verse:'Et votre Seigneur dit : Invoquez-Moi, Je vous r\u00e9pondrai',verseRef:'Sourate Ghafir 40:60',action:'Si vous traversez une \u00e9preuve, levez vos mains maintenant et invoquez sinc\u00e8rement'}
  },
  {
    id:13, emoji:'🌸',
    ar:{title:'أدعية النبي ﷺ المفضلة',desc:'للنبي ﷺ أدعية كان يكثر منها ويحافظ عليها. هي جوامع الكلم — قليلة اللفظ عظيمة المعنى.',verse:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',verseRef:'سورة البقرة ٢: ٢٠١',action:'احفظ دعاء النبي ﷺ: "اللهم إني أسألك العفو والعافية"'},
    en:{title:'The Prophet\'s Favorite Duas ﷺ',desc:'The Prophet ﷺ had duas he frequently repeated and maintained. They are concise words of great meaning — few in words, vast in significance.',verse:'Our Lord, give us good in this world and good in the hereafter, and protect us from the fire',verseRef:'Surah Al-Baqarah 2:201',action:'Memorize the Prophet\'s dua: "Allahumma inni as\'aluka al-\'afwa wal-\'afiyah"'},
    fr:{title:'Les Duas Pr\u00e9f\u00e9r\u00e9es du Proph\u00e8te ﷺ',desc:'Le Proph\u00e8te ﷺ avait des duas qu\'il r\u00e9p\u00e9tait fr\u00e9quemment. Ce sont des paroles concises au sens immense.',verse:'Notre Seigneur, donne-nous le bien ici-bas et dans l\'au-del\u00e0, et prot\u00e8ge-nous du feu',verseRef:'Sourate Al-Baqarah 2:201',action:'M\u00e9morisez le dua du Proph\u00e8te : "Allahumma inni as\'aluka al-\'afwa wal-\'afiyah"'}
  },
  {
    id:14, emoji:'🔥',
    ar:{title:'الذكر والغفلة',desc:'الغفلة عن ذكر الله هي الموت الحقيقي. الفرق بين الذاكر والغافل كالفرق بين الحي والميت.',verse:'وَلَا تَكُن مِّنَ الْغَافِلِينَ',verseRef:'سورة الأعراف ٧: ٢٠٥',action:'ضع تذكيراً على هاتفك كل ساعة ليذكرك بقول "سبحان الله"'},
    en:{title:'Dhikr and Heedlessness',desc:'Heedlessness of God\'s remembrance is the real death. The difference between one who remembers and one who is heedless is like the living and the dead.',verse:'And do not be among the heedless',verseRef:'Surah Al-A\'raf 7:205',action:'Set an hourly reminder on your phone to say "SubhanAllah"'},
    fr:{title:'Dhikr et Insouciance',desc:'L\'insouciance du rappel de Dieu est la vraie mort. La diff\u00e9rence entre celui qui se souvient et l\'insouciant est comme le vivant et le mort.',verse:'Et ne sois pas parmi les insouciants',verseRef:'Sourate Al-A\'raf 7:205',action:'Mettez un rappel horaire sur votre t\u00e9l\u00e9phone pour dire "SubhanAllah"'}
  },
  {
    id:15, emoji:'🌟',
    ar:{title:'القرآن أعظم ذكر',desc:'تلاوة القرآن هي أعظم أنواع الذكر. كل حرف بحسنة والحسنة بعشر أمثالها. القرآن شفاء وهدى ونور.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',verseRef:'سورة الإسراء ١٧: ٩',action:'اقرأ صفحة واحدة من القرآن اليوم بتدبر'},
    en:{title:'The Quran: The Greatest Dhikr',desc:'Reciting the Quran is the greatest form of dhikr. Each letter earns a good deed multiplied by ten. The Quran is healing, guidance, and light.',verse:'Indeed, this Quran guides to that which is most upright',verseRef:'Surah Al-Isra 17:9',action:'Read one page of the Quran today with reflection'},
    fr:{title:'Le Coran : Le Plus Grand Dhikr',desc:'La r\u00e9citation du Coran est la plus grande forme de dhikr. Chaque lettre vaut une bonne action multipli\u00e9e par dix. Le Coran est gu\u00e9rison, guidance et lumi\u00e8re.',verse:'Certes, ce Coran guide vers ce qui est le plus droit',verseRef:'Sourate Al-Isra 17:9',action:'Lisez une page du Coran aujourd\'hui avec r\u00e9flexion'}
  },
  {
    id:16, emoji:'🤝',
    ar:{title:'الدعاء للآخرين',desc:'الدعاء لأخيك المسلم بظهر الغيب من أعظم الأعمال. يقول الملك: "ولك مثله". الدعاء للآخرين يعود عليك بالخير.',verse:'وَالَّذِينَ جَاءُوا مِن بَعْدِهِمْ يَقُولُونَ رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا',verseRef:'سورة الحشر ٥٩: ١٠',action:'ادعُ الآن لثلاثة أشخاص تحبهم بالخير والبركة'},
    en:{title:'Supplicating for Others',desc:'Praying for your Muslim brother in their absence is among the greatest deeds. The angel says: "And for you the same." Praying for others returns goodness to you.',verse:'And those who came after them say: Our Lord, forgive us and our brothers',verseRef:'Surah Al-Hashr 59:10',action:'Pray now for three people you love with goodness and blessings'},
    fr:{title:'Invoquer pour les Autres',desc:'Prier pour votre fr\u00e8re musulman en son absence est parmi les plus grands actes. L\'ange dit : "Et pour toi pareil." Prier pour les autres vous revient en bien.',verse:'Ceux venus apr\u00e8s eux disent : Seigneur, pardonne-nous ainsi qu\'\u00e0 nos fr\u00e8res',verseRef:'Sourate Al-Hashr 59:10',action:'Priez maintenant pour trois personnes que vous aimez avec bont\u00e9'}
  },
  {
    id:17, emoji:'🌹',
    ar:{title:'الشكر ذكر',desc:'الشكر من أعظم أنواع الذكر. من شكر الله زاده الله نعماً. الشاكر يرى النعم في كل شيء.',verse:'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'سورة إبراهيم ١٤: ٧',action:'اكتب ٥ نعم تشكر الله عليها الآن'},
    en:{title:'Gratitude is Dhikr',desc:'Gratitude is among the greatest forms of dhikr. Whoever thanks God, God increases their blessings. The grateful see blessings in everything.',verse:'If you are grateful, I will surely increase you',verseRef:'Surah Ibrahim 14:7',action:'Write down 5 blessings you are grateful for right now'},
    fr:{title:'La Gratitude est Dhikr',desc:'La gratitude est parmi les plus grandes formes de dhikr. Celui qui remercie Dieu, Dieu augmente ses bienfaits. Le reconnaissant voit des bienfaits partout.',verse:'Si vous \u00eates reconnaissants, Je vous augmenterai',verseRef:'Sourate Ibrahim 14:7',action:'\u00c9crivez 5 bienfaits pour lesquels vous remerciez Dieu maintenant'}
  },
  {
    id:18, emoji:'🌍',
    ar:{title:'الذكر الجماعي',desc:'حلقات الذكر تحفها الملائكة وتنزل عليها السكينة. الاجتماع على ذكر الله من أعظم القربات.',verse:'وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ',verseRef:'سورة الكهف ١٨: ٢٨',action:'احضر حلقة ذكر أو اقرأ القرآن مع عائلتك الليلة'},
    en:{title:'Collective Remembrance',desc:'Circles of dhikr are surrounded by angels and tranquility descends upon them. Gathering to remember God is among the greatest acts of worship.',verse:'And keep yourself patient with those who call upon their Lord morning and evening',verseRef:'Surah Al-Kahf 18:28',action:'Attend a dhikr circle or read Quran with your family tonight'},
    fr:{title:'Rappel Collectif',desc:'Les cercles de dhikr sont entour\u00e9s par les anges et la tranquillit\u00e9 y descend. Se r\u00e9unir pour rappeler Dieu est parmi les plus grands actes d\'adoration.',verse:'Fais preuve de patience avec ceux qui invoquent leur Seigneur matin et soir',verseRef:'Sourate Al-Kahf 18:28',action:'Assistez \u00e0 un cercle de dhikr ou lisez le Coran avec votre famille ce soir'}
  },
  {
    id:19, emoji:'🔑',
    ar:{title:'التوبة والرجوع إلى الله',desc:'التوبة هي أعظم أنواع الدعاء — أن ترجع إلى الله بقلب صادق. باب التوبة مفتوح دائماً ما لم تبلغ الروح الحلقوم.',verse:'وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ',verseRef:'سورة النور ٢٤: ٣١',action:'توقف الآن وتب إلى الله من ذنب واحد — بصدق ونية حقيقية'},
    en:{title:'Repentance and Returning to God',desc:'Repentance is the greatest form of supplication — returning to God with a sincere heart. The door of repentance is always open as long as the soul hasn\'t reached the throat.',verse:'And turn to Allah in repentance, all of you, O believers',verseRef:'Surah An-Nur 24:31',action:'Pause now and sincerely repent to God from one sin — with true intention'},
    fr:{title:'Repentir et Retour \u00e0 Dieu',desc:'Le repentir est la plus grande forme de supplication — revenir \u00e0 Dieu avec un c\u0153ur sinc\u00e8re. La porte du repentir est toujours ouverte tant que l\'\u00e2me n\'a pas atteint la gorge.',verse:'Et repentez-vous tous devant Allah, \u00f4 croyants',verseRef:'Sourate An-Nur 24:31',action:'Faites une pause et repentez-vous sinc\u00e8rement d\'un p\u00e9ch\u00e9 — avec une intention vraie'}
  },
  {
    id:20, emoji:'🏔️',
    ar:{title:'الثبات على الذكر',desc:'الذكر يحتاج مداومة. ليس المهم أن تذكر الله يوماً ثم تنسى أياماً. أحب الأعمال إلى الله أدومها وإن قلّ.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا',verseRef:'سورة الأحزاب ٣٣: ٤١',action:'اختر ذكراً واحداً وداوم عليه كل يوم لمدة شهر'},
    en:{title:'Consistency in Dhikr',desc:'Dhikr requires consistency. It\'s not about remembering God one day and forgetting for days. The most beloved deeds to God are the most consistent, even if small.',verse:'O you who believe, remember Allah with much remembrance',verseRef:'Surah Al-Ahzab 33:41',action:'Choose one dhikr and maintain it daily for a month'},
    fr:{title:'Constance dans le Dhikr',desc:'Le dhikr n\u00e9cessite de la constance. L\'important n\'est pas de se souvenir de Dieu un jour puis d\'oublier plusieurs jours. Les actes les plus aim\u00e9s de Dieu sont les plus constants.',verse:'\u00d4 vous qui croyez, invoquez Allah d\'une fa\u00e7on abondante',verseRef:'Sourate Al-Ahzab 33:41',action:'Choisissez un dhikr et maintenez-le quotidiennement pendant un mois'}
  },
  {
    id:21, emoji:'🛡️',
    ar:{title:'الذكر في الشدائد',desc:'عند الشدائد يكون الذكر أعظم سلاح. يونس عليه السلام نجا من بطن الحوت بالذكر. الذكر وقت البلاء نور يشق الظلام.',verse:'فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',verseRef:'سورة الأنبياء ٢١: ٨٧',action:'عندما تواجه صعوبة اليوم، ردد دعاء يونس عشر مرات'},
    en:{title:'Dhikr in Hardship',desc:'In times of hardship, dhikr is the greatest weapon. Prophet Yunus was saved from the belly of the whale through dhikr. Remembrance during calamity is a light that pierces the darkness.',verse:'And he called out within the darknesses: There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers',verseRef:'Surah Al-Anbiya 21:87',action:'When you face a difficulty today, repeat the dua of Yunus ten times'},
    fr:{title:'Le Dhikr dans l\'Adversit\u00e9',desc:'Dans les moments difficiles, le dhikr est la plus grande arme. Le proph\u00e8te Yunus fut sauv\u00e9 du ventre de la baleine par le dhikr. Le rappel pendant l\'\u00e9preuve est une lumi\u00e8re qui perce les t\u00e9n\u00e8bres.',verse:'Et il appela dans les t\u00e9n\u00e8bres : Il n\'y a de dieu que Toi, gloire \u00e0 Toi, j\'\u00e9tais parmi les injustes',verseRef:'Sourate Al-Anbiya 21:87',action:'Quand vous ferez face \u00e0 une difficult\u00e9 aujourd\'hui, r\u00e9p\u00e9tez le dua de Yunus dix fois'}
  },
  {
    id:22, emoji:'😴',
    ar:{title:'الذكر قبل النوم',desc:'النوم أخو الموت. من نام على ذكر الله بات في حفظه وأمانه. أذكار النوم حصن من الكوابيس والوساوس والقلق.',verse:'وَهُوَ الَّذِي جَعَلَ لَكُمُ اللَّيْلَ لِبَاسًا وَالنَّوْمَ سُبَاتًا',verseRef:'سورة الفرقان ٢٥: ٤٧',action:'اقرأ آية الكرسي والمعوذات قبل نومك الليلة'},
    en:{title:'Dhikr Before Sleep',desc:'Sleep is the brother of death. Whoever sleeps upon God\'s remembrance stays under His protection. Sleep adhkar are a fortress against nightmares, whispers, and anxiety.',verse:'And it is He who has made the night for you as clothing and sleep a means for rest',verseRef:'Surah Al-Furqan 25:47',action:'Read Ayat al-Kursi and the Mu\'awwidhat before sleeping tonight'},
    fr:{title:'Le Dhikr Avant le Sommeil',desc:'Le sommeil est le fr\u00e8re de la mort. Celui qui s\'endort sur le rappel de Dieu reste sous Sa protection. Les adhkar du sommeil sont une forteresse contre les cauchemars et l\'anxi\u00e9t\u00e9.',verse:'Et c\'est Lui qui a fait de la nuit un v\u00eatement pour vous et du sommeil un repos',verseRef:'Sourate Al-Furqan 25:47',action:'Lisez Ayat al-Kursi et les Mu\'awwidhat avant de dormir ce soir'}
  },
  {
    id:23, emoji:'🏪',
    ar:{title:'ذكر السوق',desc:'الأسواق أماكن غفلة وضوضاء. من ذكر الله فيها كان كالحي بين الأموات. دعاء السوق من أعظم الأذكار المهجورة.',verse:'رِجَالٌ لَّا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ عَن ذِكْرِ اللَّهِ',verseRef:'سورة النور ٢٤: ٣٧',action:'ردد ذكر السوق عند دخولك مكاناً مزدحماً اليوم'},
    en:{title:'Dhikr of the Marketplace',desc:'Markets are places of heedlessness and noise. Whoever remembers God there is like the living among the dead. The marketplace dua is among the greatest abandoned adhkar.',verse:'Men whom neither commerce nor sale distracts from the remembrance of God',verseRef:'Surah An-Nur 24:37',action:'Recite the marketplace dhikr when you enter a crowded place today'},
    fr:{title:'Le Dhikr du March\u00e9',desc:'Les march\u00e9s sont des lieux d\'insouciance et de bruit. Celui qui se souvient de Dieu l\u00e0-bas est comme le vivant parmi les morts. Le dua du march\u00e9 est parmi les adhkar les plus d\u00e9laiss\u00e9s.',verse:'Des hommes que ni le commerce ni la vente ne distraient du rappel de Dieu',verseRef:'Sourate An-Nur 24:37',action:'R\u00e9citez le dhikr du march\u00e9 en entrant dans un lieu bond\u00e9 aujourd\'hui'}
  },
  {
    id:24, emoji:'🔒',
    ar:{title:'الذكر حصن وحماية',desc:'الذكر حصن حصين من الشيطان والعين والحسد. من حافظ على أذكاره كان في درع لا يخترقه إلا ما أذن الله به.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'سورة الرعد ١٣: ٢٨',action:'حافظ اليوم على أذكار الصباح والمساء كاملة بلا تقصير'},
    en:{title:'Dhikr for Protection',desc:'Dhikr is an impenetrable fortress against Satan, the evil eye, and envy. Whoever maintains their adhkar wears an armor that nothing penetrates except by God\'s will.',verse:'Verily, in the remembrance of God do hearts find rest',verseRef:'Surah Ar-Ra\'d 13:28',action:'Maintain your complete morning and evening adhkar today without shortcoming'},
    fr:{title:'Le Dhikr pour la Protection',desc:'Le dhikr est une forteresse imprenable contre Satan, le mauvais \u0153il et l\'envie. Celui qui maintient ses adhkar porte une armure que rien ne p\u00e9n\u00e8tre sauf par la volont\u00e9 de Dieu.',verse:'N\'est-ce pas par le rappel de Dieu que les c\u0153urs se tranquillisent',verseRef:'Sourate Ar-Ra\'d 13:28',action:'Maintenez vos adhkar complets du matin et du soir aujourd\'hui sans manquement'}
  },
  {
    id:25, emoji:'👥',
    ar:{title:'الذكر الجماعي',desc:'حلقات الذكر من أعظم مجالس الخير. تحفها الملائكة وتغشاها الرحمة ويذكرهم الله فيمن عنده.',verse:'وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ',verseRef:'سورة الكهف ١٨: ٢٨',action:'شارك في حلقة ذكر أو اجمع أهلك لذكر الله معاً'},
    en:{title:'Group Dhikr',desc:'Circles of dhikr are among the greatest gatherings of goodness. Angels surround them, mercy descends upon them, and God mentions them to those near Him.',verse:'And keep yourself patient with those who call upon their Lord in the morning and evening',verseRef:'Surah Al-Kahf 18:28',action:'Join a dhikr circle or gather your family to remember God together'},
    fr:{title:'Le Dhikr en Groupe',desc:'Les cercles de dhikr sont parmi les plus grandes assembl\u00e9es de bien. Les anges les entourent, la mis\u00e9ricorde descend sur eux, et Dieu les mentionne aupr\u00e8s de Lui.',verse:'Et patiente avec ceux qui invoquent leur Seigneur matin et soir',verseRef:'Sourate Al-Kahf 18:28',action:'Rejoignez un cercle de dhikr ou rassemblez votre famille pour se souvenir de Dieu ensemble'}
  },
  {
    id:26, emoji:'💧',
    ar:{title:'الذكر عند الوضوء',desc:'الوضوء ليس مجرد غسل أعضاء. هو عبادة تبدأ بالتسمية وتنتهي بالشهادة. من توضأ فأحسن الوضوء وقال الشهادة فُتحت له أبواب الجنة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ',verseRef:'سورة المائدة ٥: ٦',action:'اجعل وضوءك اليوم عبادة واعية — سمِّ بالله وانطق الشهادة بعده'},
    en:{title:'Dhikr During Wudu',desc:'Wudu is not merely washing limbs. It is an act of worship that begins with Bismillah and ends with the shahada. Whoever performs wudu well and recites the shahada has the gates of Paradise opened.',verse:'O you who believe, when you rise to pray, wash your faces',verseRef:'Surah Al-Maidah 5:6',action:'Make your wudu today a conscious act of worship — say Bismillah and recite the shahada after it'},
    fr:{title:'Le Dhikr Pendant les Ablutions',desc:'Les ablutions ne sont pas un simple lavage. C\'est un acte d\'adoration qui commence par Bismillah et se termine par la shahada. Celui qui fait bien ses ablutions et r\u00e9cite la shahada voit les portes du Paradis s\'ouvrir.',verse:'\u00d4 vous qui croyez, lorsque vous vous levez pour la pri\u00e8re, lavez vos visages',verseRef:'Sourate Al-Maidah 5:6',action:'Faites de vos ablutions aujourd\'hui un acte d\'adoration conscient — dites Bismillah et r\u00e9citez la shahada apr\u00e8s'}
  },
  {
    id:27, emoji:'🚶',
    ar:{title:'الذكر في الطريق',desc:'الطريق إلى المسجد أو العمل فرصة للذكر. كل خطوة بذكر الله ترفع درجة وتحط خطيئة. لا تضيع وقت المشي في الغفلة.',verse:'فِي بُيُوتٍ أَذِنَ اللَّهُ أَن تُرْفَعَ وَيُذْكَرَ فِيهَا اسْمُهُ',verseRef:'سورة النور ٢٤: ٣٦',action:'اذكر الله في طريقك اليوم بالتسبيح أو الاستغفار'},
    en:{title:'Dhikr on the Way',desc:'The road to the mosque or work is an opportunity for dhikr. Every step with God\'s remembrance raises a rank and erases a sin. Do not waste walking time in heedlessness.',verse:'In houses which God has permitted to be raised and His name to be remembered therein',verseRef:'Surah An-Nur 24:36',action:'Remember God on your way today with tasbih or istighfar'},
    fr:{title:'Le Dhikr en Chemin',desc:'Le chemin vers la mosqu\u00e9e ou le travail est une occasion de dhikr. Chaque pas avec le rappel de Dieu \u00e9l\u00e8ve un rang et efface un p\u00e9ch\u00e9. Ne gaspillez pas le temps de marche dans l\'insouciance.',verse:'Dans des maisons que Dieu a permis d\'\u00e9lever et o\u00f9 Son nom est invoqu\u00e9',verseRef:'Sourate An-Nur 24:36',action:'Souvenez-vous de Dieu en chemin aujourd\'hui avec le tasbih ou l\'istighfar'}
  },
  {
    id:28, emoji:'🌿',
    ar:{title:'الذكر شفاء للقلوب',desc:'القلب يمرض كما يمرض الجسد، وشفاؤه في ذكر الله. القلب الغافل عن الذكر قلب ميت وإن كان صاحبه حياً.',verse:'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ',verseRef:'سورة الرعد ١٣: ٢٨',action:'إذا شعرت بضيق أو قلق اليوم، اجلس وسبّح الله مئة مرة'},
    en:{title:'Dhikr Heals Hearts',desc:'The heart gets sick just as the body does, and its cure is in God\'s remembrance. A heart heedless of dhikr is a dead heart even if its owner is alive.',verse:'Those who believe and whose hearts find rest in the remembrance of God',verseRef:'Surah Ar-Ra\'d 13:28',action:'If you feel anxiety or distress today, sit and glorify God one hundred times'},
    fr:{title:'Le Dhikr Gu\u00e9rit les Coeurs',desc:'Le coeur tombe malade comme le corps, et son rem\u00e8de est dans le rappel de Dieu. Un coeur insouciant du dhikr est un coeur mort m\u00eame si son propri\u00e9taire est vivant.',verse:'Ceux qui croient et dont les coeurs se tranquillisent au rappel de Dieu',verseRef:'Sourate Ar-Ra\'d 13:28',action:'Si vous ressentez de l\'anxi\u00e9t\u00e9 ou de la d\u00e9tresse aujourd\'hui, asseyez-vous et glorifiez Dieu cent fois'}
  },
  {
    id:29, emoji:'🎁',
    ar:{title:'الذكر أفضل الأعمال',desc:'سأل رجل النبي ﷺ: أي الأعمال أفضل؟ قال: "أن تموت ولسانك رطب من ذكر الله." الذكر يفوق كثيراً من الأعمال في الأجر.',verse:'وَلَذِكْرُ اللَّهِ أَكْبَرُ',verseRef:'سورة العنكبوت ٢٩: ٤٥',action:'اجعل لسانك رطباً بذكر الله طوال يومك اليوم'},
    en:{title:'Dhikr: The Best of Deeds',desc:'A man asked the Prophet: Which deeds are best? He said: "That you die with your tongue moist from the remembrance of God." Dhikr surpasses many deeds in reward.',verse:'And the remembrance of God is greater',verseRef:'Surah Al-Ankabut 29:45',action:'Keep your tongue moist with God\'s remembrance throughout your day today'},
    fr:{title:'Le Dhikr : Le Meilleur des Actes',desc:'Un homme demanda au Proph\u00e8te : Quels actes sont les meilleurs ? Il dit : « Que tu meures avec ta langue humide du rappel de Dieu. » Le dhikr surpasse beaucoup d\'actes en r\u00e9compense.',verse:'Et le rappel de Dieu est plus grand',verseRef:'Sourate Al-Ankabut 29:45',action:'Gardez votre langue humide du rappel de Dieu tout au long de votre journ\u00e9e'}
  },
  {
    id:30, emoji:'🔑',
    ar:{title:'الذكر مفتاح الرزق',desc:'الاستغفار والذكر من أعظم أسباب سعة الرزق. قال نوح لقومه: استغفروا ربكم يرسل السماء عليكم مدراراً.',verse:'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا',verseRef:'سورة نوح ٧١: ١٠',action:'أكثر من الاستغفار اليوم وراقب كيف تنفتح أبواب الرزق'},
    en:{title:'Dhikr: The Key to Provision',desc:'Istighfar and dhikr are among the greatest causes of abundant provision. Noah told his people: Seek forgiveness from your Lord and He will send the sky upon you in showers.',verse:'And said: Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver',verseRef:'Surah Nuh 71:10',action:'Increase your istighfar today and observe how doors of provision open'},
    fr:{title:'Le Dhikr : La Cl\u00e9 de la Subsistance',desc:'L\'istighfar et le dhikr sont parmi les plus grandes causes d\'abondance de subsistance. No\u00e9 dit \u00e0 son peuple : Demandez pardon \u00e0 votre Seigneur, Il enverra le ciel sur vous en abondance.',verse:'Et dit : Demandez pardon \u00e0 votre Seigneur. Il est certes Grand Pardonneur',verseRef:'Sourate Nuh 71:10',action:'Augmentez votre istighfar aujourd\'hui et observez comment les portes de la subsistance s\'ouvrent'}
  },
  {
    id:31, emoji:'🌅',
    ar:{title:'الذكر وقت الفجر',desc:'وقت الفجر من أعظم أوقات الذكر. فيه تتنزل الملائكة وتشهد قراءة القرآن. "إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا."',verse:'إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا',verseRef:'سورة الإسراء ١٧: ٧٨',action:'استيقظ قبل الفجر بعشر دقائق واذكر الله حتى تصلي'},
    en:{title:'Dhikr at Fajr Time',desc:'The time of Fajr is among the greatest times for dhikr. Angels descend and witness the Quran recitation. "Indeed, the recitation of dawn is ever witnessed."',verse:'Indeed, the recitation of dawn is ever witnessed',verseRef:'Surah Al-Isra 17:78',action:'Wake up ten minutes before Fajr and remember God until you pray'},
    fr:{title:'Le Dhikr au Temps du Fajr',desc:'Le temps du Fajr est parmi les plus grands moments pour le dhikr. Les anges descendent et t\u00e9moignent de la r\u00e9citation du Coran.',verse:'La r\u00e9citation de l\'aube est t\u00e9moign\u00e9e',verseRef:'Sourate Al-Isra 17:78',action:'R\u00e9veillez-vous dix minutes avant Fajr et rappelez-vous de Dieu jusqu\'\u00e0 la pri\u00e8re'}
  },
  {
    id:32, emoji:'💎',
    ar:{title:'كنوز الذكر',desc:'من كنوز الذكر: "لا حول ولا قوة إلا بالله" كنز من كنوز الجنة. و"سبحان الله وبحمده سبحان الله العظيم" ثقيلتان في الميزان.',verse:'وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ غُرُوبِهَا',verseRef:'سورة طه ٢٠: ١٣٠',action:'ردد "سبحان الله وبحمده" مئة مرة اليوم — تمحو الخطايا ولو كانت مثل زبد البحر'},
    en:{title:'Treasures of Dhikr',desc:'Among the treasures of dhikr: "There is no power nor might except with God" is a treasure from the treasures of Paradise. And "Glory be to God and His praise" are heavy on the scales.',verse:'And exalt with praise of your Lord before the rising of the sun and before its setting',verseRef:'Surah Taha 20:130',action:'Repeat "SubhanAllahi wa bihamdihi" one hundred times today — it erases sins even if they were like sea foam'},
    fr:{title:'Les Tr\u00e9sors du Dhikr',desc:'Parmi les tr\u00e9sors du dhikr : \u00ab Il n\'y a de puissance ni de force qu\'en Dieu \u00bb est un tr\u00e9sor du Paradis. Et \u00ab Gloire \u00e0 Dieu et Sa louange \u00bb sont lourds dans la balance.',verse:'Et glorifie par la louange de ton Seigneur avant le lever du soleil et avant son coucher',verseRef:'Sourate Taha 20:130',action:'R\u00e9p\u00e9tez \u00ab SubhanAllahi wa bihamdihi \u00bb cent fois aujourd\'hui — cela efface les p\u00e9ch\u00e9s m\u00eame s\'ils \u00e9taient comme l\'\u00e9cume de la mer'}
  },
  {
    id:33, emoji:'🤲',
    ar:{title:'آداب الدعاء',desc:'للدعاء آداب تزيد من فرصة الإجابة: الطهارة، استقبال القبلة، رفع اليدين، البدء بالحمد والصلاة على النبي، الإلحاح وحسن الظن بالله.',verse:'ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً',verseRef:'سورة الأعراف ٧: ٥٥',action:'ادعُ الله اليوم بكل آداب الدعاء وألح في طلبك بحسن ظن'},
    en:{title:'Etiquette of Supplication',desc:'Supplication has etiquette that increases the chance of acceptance: purity, facing the Qibla, raising the hands, starting with praise and blessings on the Prophet, persistence and having good expectations of God.',verse:'Call upon your Lord in humility and privately',verseRef:'Surah Al-A\'raf 7:55',action:'Supplicate to God today with full etiquette and persist in your request with good expectations'},
    fr:{title:'\u00c9tiquette de l\'Invocation',desc:'L\'invocation a une \u00e9tiquette qui augmente les chances d\'acceptation : puret\u00e9, orientation vers la Qibla, lever les mains, commencer par la louange et la pri\u00e8re sur le Proph\u00e8te, persistance et bonne opinion de Dieu.',verse:'Invoquez votre Seigneur en toute humilit\u00e9 et en secret',verseRef:'Sourate Al-A\'raf 7:55',action:'Invoquez Dieu aujourd\'hui avec toute l\'\u00e9tiquette et persistez dans votre demande avec bonne opinion'}
  },
  {
    id:34, emoji:'🌙',
    ar:{title:'الذكر في الثلث الأخير',desc:'الثلث الأخير من الليل أعظم وقت للذكر والدعاء. ينزل ربنا كل ليلة إلى السماء الدنيا فيقول: من يدعوني فأستجيب له.',verse:'وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ',verseRef:'سورة الذاريات ٥١: ١٨',action:'استيقظ في الثلث الأخير من الليل ولو مرة هذا الأسبوع وادعُ الله'},
    en:{title:'Dhikr in the Last Third',desc:'The last third of the night is the greatest time for dhikr and dua. Our Lord descends every night to the lowest heaven saying: Who will call upon Me that I may answer them.',verse:'And in the hours before dawn they would seek forgiveness',verseRef:'Surah Adh-Dhariyat 51:18',action:'Wake up in the last third of the night even once this week and call upon God'},
    fr:{title:'Le Dhikr dans le Dernier Tiers',desc:'Le dernier tiers de la nuit est le plus grand moment pour le dhikr et le dua. Notre Seigneur descend chaque nuit au ciel le plus bas en disant : Qui M\'invoquera pour que Je lui r\u00e9ponde.',verse:'Et aux heures avant l\'aube ils imploraient le pardon',verseRef:'Sourate Adh-Dhariyat 51:18',action:'\u00c9veillez-vous dans le dernier tiers de la nuit m\u00eame une fois cette semaine et invoquez Dieu'}
  },
  {
    id:35, emoji:'📿',
    ar:{title:'التسبيح بعد الصلاة',desc:'من السنن المؤكدة التسبيح بعد كل صلاة: ٣٣ تسبيحة و٣٣ تحميدة و٣٣ تكبيرة وتمام المئة: لا إله إلا الله وحده لا شريك له.',verse:'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَكُن مِّنَ السَّاجِدِينَ',verseRef:'سورة الحجر ١٥: ٩٨',action:'لا تترك مجلسك بعد الصلاة حتى تكمل الأذكار والتسبيح'},
    en:{title:'Tasbih After Prayer',desc:'Among the confirmed Sunnahs is tasbih after every prayer: 33 SubhanAllah, 33 Alhamdulillah, 33 Allahu Akbar, and completing the hundred with: La ilaha illAllah.',verse:'So exalt with praise of your Lord and be of those who prostrate',verseRef:'Surah Al-Hijr 15:98',action:'Do not leave your place after prayer until you complete the adhkar and tasbih'},
    fr:{title:'Le Tasbih Apr\u00e8s la Pri\u00e8re',desc:'Parmi les Sunnas confirm\u00e9es : le tasbih apr\u00e8s chaque pri\u00e8re : 33 SubhanAllah, 33 Alhamdulillah, 33 Allahu Akbar, et compl\u00e9ter les cent avec : La ilaha illAllah.',verse:'Glorifie par la louange de ton Seigneur et sois de ceux qui se prosternent',verseRef:'Sourate Al-Hijr 15:98',action:'Ne quittez pas votre place apr\u00e8s la pri\u00e8re jusqu\'\u00e0 avoir compl\u00e9t\u00e9 les adhkar et le tasbih'}
  },
  {
    id:36, emoji:'☀️',
    ar:{title:'الذكر بعد صلاة الفجر',desc:'الجلوس بعد صلاة الفجر حتى طلوع الشمس مع ذكر الله له أجر حجة وعمرة تامة. هذا الوقت من أعظم أوقات البركة.',verse:'وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ الْغُرُوبِ',verseRef:'سورة ق ٥٠: ٣٩',action:'اجلس بعد صلاة الفجر غداً واذكر الله حتى تطلع الشمس'},
    en:{title:'Dhikr After Fajr Prayer',desc:'Sitting after Fajr prayer until sunrise remembering God has the reward of a complete Hajj and Umrah. This time is among the greatest times of blessing.',verse:'And exalt with praise of your Lord before the rising of the sun and before sunset',verseRef:'Surah Qaf 50:39',action:'Sit after Fajr prayer tomorrow and remember God until sunrise'},
    fr:{title:'Le Dhikr Apr\u00e8s la Pri\u00e8re du Fajr',desc:'S\'asseoir apr\u00e8s la pri\u00e8re du Fajr jusqu\'au lever du soleil en se souvenant de Dieu a la r\u00e9compense d\'un Hajj et d\'une Omra complets. Ce moment est parmi les plus b\u00e9nis.',verse:'Et glorifie par la louange de ton Seigneur avant le lever du soleil et avant le coucher',verseRef:'Sourate Qaf 50:39',action:'Asseyez-vous apr\u00e8s la pri\u00e8re du Fajr demain et souvenez-vous de Dieu jusqu\'au lever du soleil'}
  },
  {
    id:37, emoji:'🕊️',
    ar:{title:'الذكر والسكينة',desc:'الذكر يُنزل السكينة على القلب. في عالم مليء بالقلق والتوتر، الذكر هو الملاذ الآمن الذي يمنح الطمأنينة الحقيقية.',verse:'هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ',verseRef:'سورة الفتح ٤٨: ٤',action:'عندما تشعر بالقلق اليوم، اجلس في مكان هادئ واذكر الله خمس دقائق'},
    en:{title:'Dhikr and Tranquility',desc:'Dhikr brings tranquility to the heart. In a world full of anxiety and stress, dhikr is the safe refuge that grants true peace.',verse:'It is He who sent down tranquility into the hearts of the believers',verseRef:'Surah Al-Fath 48:4',action:'When you feel anxious today, sit in a quiet place and remember God for five minutes'},
    fr:{title:'Le Dhikr et la S\u00e9r\u00e9nit\u00e9',desc:'Le dhikr apporte la s\u00e9r\u00e9nit\u00e9 au coeur. Dans un monde plein d\'anxi\u00e9t\u00e9 et de stress, le dhikr est le refuge s\u00fbr qui accorde la vraie paix.',verse:'C\'est Lui qui a fait descendre la s\u00e9r\u00e9nit\u00e9 dans les coeurs des croyants',verseRef:'Sourate Al-Fath 48:4',action:'Quand vous vous sentez anxieux aujourd\'hui, asseyez-vous dans un endroit calme et rappelez-vous de Dieu cinq minutes'}
  },
  {
    id:38, emoji:'🌺',
    ar:{title:'الصلاة على النبي ﷺ',desc:'الصلاة على النبي ﷺ من أعظم أنواع الذكر. من صلى عليّ واحدة صلى الله عليه عشراً. يوم الجمعة من أفضل أوقاتها.',verse:'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ',verseRef:'سورة الأحزاب ٣٣: ٥٦',action:'أكثر من الصلاة على النبي ﷺ اليوم خاصة إذا كان يوم جمعة'},
    en:{title:'Blessings Upon the Prophet',desc:'Sending blessings upon the Prophet is among the greatest types of dhikr. Whoever sends one blessing upon him, God sends ten blessings upon them. Friday is among the best times for it.',verse:'Indeed, God and His angels send blessings upon the Prophet',verseRef:'Surah Al-Ahzab 33:56',action:'Increase your blessings upon the Prophet today, especially if it is Friday'},
    fr:{title:'Les Pri\u00e8res sur le Proph\u00e8te',desc:'Envoyer des pri\u00e8res sur le Proph\u00e8te est parmi les plus grands types de dhikr. Quiconque envoie une pri\u00e8re sur lui, Dieu envoie dix pri\u00e8res sur lui. Le vendredi est le meilleur moment.',verse:'Dieu et Ses anges prient sur le Proph\u00e8te',verseRef:'Sourate Al-Ahzab 33:56',action:'Augmentez vos pri\u00e8res sur le Proph\u00e8te aujourd\'hui, surtout si c\'est vendredi'}
  },
  {
    id:39, emoji:'🌊',
    ar:{title:'الذكر يمحو الذنوب',desc:'الاستغفار يمحو الذنوب كما يمحو الماء الأوساخ. من استغفر مئة مرة في اليوم غُفرت ذنوبه ولو كانت مثل زبد البحر.',verse:'وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ',verseRef:'سورة المزمل ٧٣: ٢٠',action:'استغفر الله مئة مرة اليوم واشعر بخفة القلب بعدها'},
    en:{title:'Dhikr Erases Sins',desc:'Istighfar erases sins as water washes away dirt. Whoever seeks forgiveness one hundred times a day will have their sins forgiven even if they were like sea foam.',verse:'And seek forgiveness of God. Indeed, God is Forgiving and Merciful',verseRef:'Surah Al-Muzzammil 73:20',action:'Seek God\'s forgiveness one hundred times today and feel the lightness of heart afterward'},
    fr:{title:'Le Dhikr Efface les P\u00e9ch\u00e9s',desc:'L\'istighfar efface les p\u00e9ch\u00e9s comme l\'eau lave la salet\u00e9. Quiconque demande pardon cent fois par jour verra ses p\u00e9ch\u00e9s pardonn\u00e9s m\u00eame s\'ils \u00e9taient comme l\'\u00e9cume de la mer.',verse:'Et demandez pardon \u00e0 Dieu. Dieu est certes Pardonneur et Mis\u00e9ricordieux',verseRef:'Sourate Al-Muzzammil 73:20',action:'Demandez pardon \u00e0 Dieu cent fois aujourd\'hui et ressentez la l\u00e9g\u00e8ret\u00e9 du coeur apr\u00e8s'}
  },
  {
    id:40, emoji:'🏔️',
    ar:{title:'الذكر والثبات',desc:'الذكر يثبّت القلب عند الفتن والابتلاءات. من كان لسانه رطباً بذكر الله ثبته الله عند الشدائد.',verse:'يُثَبِّتُ اللَّهُ الَّذِينَ آمَنُوا بِالْقَوْلِ الثَّابِتِ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ',verseRef:'سورة إبراهيم ١٤: ٢٧',action:'عند كل فتنة أو ابتلاء اليوم، ردد: لا إله إلا الله محمد رسول الله'},
    en:{title:'Dhikr and Steadfastness',desc:'Dhikr steadies the heart during tribulations and trials. Whoever keeps their tongue moist with God\'s remembrance, God will steady them during hardships.',verse:'God keeps firm those who believe with the firm word in the worldly life and in the Hereafter',verseRef:'Surah Ibrahim 14:27',action:'During every tribulation or trial today, repeat: There is no god but God, Muhammad is the Messenger of God'},
    fr:{title:'Le Dhikr et la Constance',desc:'Le dhikr stabilise le coeur pendant les tribulations et les \u00e9preuves. Celui qui garde sa langue humide du rappel de Dieu sera stabilis\u00e9 par Dieu pendant les difficult\u00e9s.',verse:'Dieu affermit ceux qui croient par la parole ferme dans la vie d\'ici-bas et dans l\'au-del\u00e0',verseRef:'Sourate Ibrahim 14:27',action:'Pendant chaque tribulation aujourd\'hui, r\u00e9p\u00e9tez : Il n\'y a de dieu que Dieu, Muhammad est le Messager de Dieu'}
  }
];

// ═══════════════ ADHKAR DATA ═══════════════
const ADHKAR_DATA = [
  {
    emoji:'🌅', category:'morning',
    ar:{title:'سيد الاستغفار',text:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ',problem:'كثير من المسلمين يبدأون يومهم بلا ذكر',solution:'ابدأ بسيد الاستغفار — أعظم دعاء يومي'},
    en:{title:'Master of Forgiveness',text:'O Allah, You are my Lord, none has the right to be worshipped but You, You created me and I am Your servant',problem:'Many Muslims start their day without any remembrance',solution:'Begin with the Master of Forgiveness — the greatest daily dua'},
    fr:{title:'Ma\u00eetre du Pardon',text:'O Allah, Tu es mon Seigneur, nul n\'a le droit d\'\u00eatre ador\u00e9 sauf Toi, Tu m\'as cr\u00e9\u00e9 et je suis Ton serviteur',problem:'Beaucoup de musulmans commencent leur journ\u00e9e sans rappel',solution:'Commencez par le Ma\u00eetre du Pardon — le plus grand dua quotidien'}
  },
  {
    emoji:'🌙', category:'evening',
    ar:{title:'المعوذات',text:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ — قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',problem:'القلق والخوف عند النوم',solution:'قراءة المعوذات ثلاث مرات حصن من كل شر'},
    en:{title:'The Mu\'awwidhat',text:'In the name of Allah, the Most Gracious, the Most Merciful — Say: I seek refuge in the Lord of daybreak',problem:'Anxiety and fear at bedtime',solution:'Reading the Mu\'awwidhat three times is a shield from all evil'},
    fr:{title:'Les Mu\'awwidhat',text:'Au nom d\'Allah, le Tout Mis\u00e9ricordieux — Dis : Je cherche refuge aupr\u00e8s du Seigneur de l\'aube',problem:'Anxi\u00e9t\u00e9 et peur au coucher',solution:'Lire les Mu\'awwidhat trois fois est un bouclier contre tout mal'}
  },
  {
    emoji:'🏠', category:'daily',
    ar:{title:'دعاء الخروج من المنزل',text:'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',problem:'نخرج يومياً بلا ذكر ولا تحصين',solution:'هذا الدعاء يحفظك ويكفيك الشيطان'},
    en:{title:'Dua for Leaving Home',text:'In the name of Allah, I place my trust in Allah, there is no power nor might except with Allah',problem:'We leave daily without remembrance or protection',solution:'This dua protects you and suffices you against Shaytan'},
    fr:{title:'Dua pour Sortir de la Maison',text:'Au nom d\'Allah, je place ma confiance en Allah, il n\'y a de puissance ni de force qu\'en Allah',problem:'Nous sortons quotidiennement sans rappel ni protection',solution:'Ce dua vous prot\u00e8ge et vous suffit contre le Shaytan'}
  },
  {
    emoji:'🍽️', category:'daily',
    ar:{title:'دعاء الطعام',text:'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',problem:'الأكل بلا ذكر يُطعم الشيطان معك',solution:'التسمية قبل الطعام بركة وحماية'},
    en:{title:'Dua for Food',text:'In the name of Allah and with the blessings of Allah',problem:'Eating without dhikr lets Shaytan share your food',solution:'Saying Bismillah before eating is a blessing and protection'},
    fr:{title:'Dua pour le Repas',text:'Au nom d\'Allah et avec la b\u00e9n\u00e9diction d\'Allah',problem:'Manger sans dhikr laisse le Shaytan partager votre repas',solution:'Dire Bismillah avant de manger est une b\u00e9n\u00e9diction et protection'}
  },
  {
    emoji:'😴', category:'evening',
    ar:{title:'دعاء النوم',text:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',problem:'النوم بلا ذكر يترك القلب مكشوفاً',solution:'النوم على ذكر الله يحفظ الروح والجسد'},
    en:{title:'Dua for Sleep',text:'In Your name, O Allah, I die and I live',problem:'Sleeping without dhikr leaves the heart exposed',solution:'Sleeping with God\'s remembrance protects body and soul'},
    fr:{title:'Dua pour le Sommeil',text:'En Ton nom, \u00f4 Allah, je meurs et je vis',problem:'Dormir sans dhikr laisse le c\u0153ur expos\u00e9',solution:'Dormir avec le rappel de Dieu prot\u00e8ge corps et \u00e2me'}
  },
  {
    emoji:'🚗', category:'daily',
    ar:{title:'دعاء السفر',text:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',problem:'السفر بلا دعاء يفتقد البركة',solution:'دعاء السفر حماية وتيسير'},
    en:{title:'Dua for Travel',text:'Glory be to Him who has subjected this to us, and we could not have done it ourselves',problem:'Traveling without dua lacks blessing',solution:'The travel dua brings protection and ease'},
    fr:{title:'Dua pour le Voyage',text:'Gloire \u00e0 Celui qui nous a soumis cela, alors que nous n\'\u00e9tions pas capables de le dompter',problem:'Voyager sans dua manque de b\u00e9n\u00e9diction',solution:'Le dua de voyage apporte protection et facilit\u00e9'}
  },
  {
    emoji:'🌧️', category:'daily',
    ar:{title:'دعاء المطر',text:'اللَّهُمَّ صَيِّبًا نَافِعًا',problem:'نمر على نعم الله دون التفات',solution:'كل ظاهرة طبيعية فرصة لذكر الله'},
    en:{title:'Dua for Rain',text:'O Allah, make it beneficial rain',problem:'We pass by God\'s blessings without noticing',solution:'Every natural phenomenon is an opportunity for dhikr'},
    fr:{title:'Dua pour la Pluie',text:'\u00d4 Allah, fais-en une pluie b\u00e9n\u00e9fique',problem:'Nous passons devant les bienfaits de Dieu sans les remarquer',solution:'Chaque ph\u00e9nom\u00e8ne naturel est une occasion de dhikr'}
  },
  {
    emoji:'🤒', category:'daily',
    ar:{title:'دعاء المريض',text:'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ اشْفِ أَنْتَ الشَّافِي',problem:'المرض يُنسي البعض الدعاء',solution:'الدعاء عند المرض شفاء للروح والجسد'},
    en:{title:'Dua for the Sick',text:'Remove the harm, O Lord of mankind, heal — You are the Healer',problem:'Illness makes some forget to supplicate',solution:'Dua during illness heals both soul and body'},
    fr:{title:'Dua pour le Malade',text:'Enl\u00e8ve le mal, \u00f4 Seigneur des hommes, gu\u00e9ris — Tu es le Gu\u00e9risseur',problem:'La maladie fait oublier \u00e0 certains d\'invoquer',solution:'Le dua pendant la maladie gu\u00e9rit l\'\u00e2me et le corps'}
  },
  {
    emoji:'🛡️', category:'morning',
    ar:{title:'آية الكرسي',text:'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',problem:'كثير من المسلمين لا يقرأون آية الكرسي صباحاً ومساءً',solution:'قراءة آية الكرسي بعد كل صلاة ضمانة لدخول الجنة'},
    en:{title:'Ayat Al-Kursi',text:'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence',problem:'Many Muslims do not read Ayat al-Kursi morning and evening',solution:'Reading Ayat al-Kursi after every prayer is a guarantee for entering Paradise'},
    fr:{title:'Ayat Al-Kursi',text:'Allah — il n\'y a de divinit\u00e9 que Lui, le Vivant, le Subsistant',problem:'Beaucoup de musulmans ne lisent pas Ayat al-Kursi matin et soir',solution:'Lire Ayat al-Kursi apr\u00e8s chaque pri\u00e8re est une garantie pour le Paradis'}
  },
  {
    emoji:'🏪', category:'daily',
    ar:{title:'ذكر دخول السوق',text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',problem:'الأسواق أحب البقاع إلى الشيطان',solution:'ذكر الله في السوق يكتب لك ألف ألف حسنة'},
    en:{title:'Marketplace Dhikr',text:'There is no god but God alone, with no partner',problem:'Markets are the most beloved places to Satan',solution:'Remembering God in the marketplace earns you a million good deeds'},
    fr:{title:'Dhikr du March\u00e9',text:'Il n\'y a de dieu que Dieu seul, sans associ\u00e9',problem:'Les march\u00e9s sont les lieux les plus aim\u00e9s du Satan',solution:'Se souvenir de Dieu au march\u00e9 vous rapporte un million de bonnes actions'}
  },
  {
    emoji:'🪞', category:'daily',
    ar:{title:'دعاء النظر في المرآة',text:'اللَّهُمَّ كَمَا أَحْسَنْتَ خَلْقِي فَأَحْسِنْ خُلُقِي',problem:'ننظر في المرآة بلا تأمل في نعمة الخلق',solution:'هذا الدعاء يربط بين جمال الظاهر وجمال الباطن'},
    en:{title:'Dua When Looking in the Mirror',text:'O Allah, as You have made my form beautiful, make my character beautiful',problem:'We look in the mirror without reflecting on the blessing of creation',solution:'This dua connects outward beauty with inner beauty'},
    fr:{title:'Dua en se Regardant dans le Miroir',text:'\u00d4 Allah, de m\u00eame que Tu as embelli ma forme, embellis mon caract\u00e8re',problem:'Nous nous regardons dans le miroir sans r\u00e9fl\u00e9chir \u00e0 la b\u00e9n\u00e9diction de la cr\u00e9ation',solution:'Ce dua relie la beaut\u00e9 ext\u00e9rieure \u00e0 la beaut\u00e9 int\u00e9rieure'}
  },
  {
    emoji:'⛈️', category:'daily',
    ar:{title:'دعاء الرعد',text:'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ',problem:'نخاف من الرعد ولا نتذكر ذكره',solution:'الرعد تسبيح لله والدعاء عنده مستجاب'},
    en:{title:'Dua for Thunder',text:'Glory be to Him whom the thunder glorifies with His praise, and the angels too out of awe',problem:'We fear thunder but forget its dhikr',solution:'Thunder is a glorification of God and dua during it is answered'},
    fr:{title:'Dua pour le Tonnerre',text:'Gloire \u00e0 Celui que le tonnerre glorifie par Sa louange, et les anges aussi par crainte',problem:'Nous avons peur du tonnerre mais oublions son dhikr',solution:'Le tonnerre est une glorification de Dieu et le dua pendant celui-ci est exauc\u00e9'}
  },
  {
    emoji:'🌬️', category:'daily',
    ar:{title:'دعاء الريح',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ',problem:'الريح الشديدة تخيف ولا نذكر دعاءها',solution:'النبي ﷺ كان إذا هبت الريح قال هذا الدعاء'},
    en:{title:'Dua for Wind',text:'O Allah, I ask You for its good and the good of what it brings',problem:'Strong winds frighten us but we forget their dua',solution:'The Prophet used to say this dua whenever the wind blew strongly'},
    fr:{title:'Dua pour le Vent',text:'\u00d4 Allah, je Te demande son bien et le bien de ce qu\'il apporte',problem:'Les vents forts nous effraient mais nous oublions leur dua',solution:'Le Proph\u00e8te disait ce dua chaque fois que le vent soufflait fort'}
  }
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'🌅',ar:{label:'أذكار الصباح',source:'حصن المؤمن'},en:{label:'Morning adhkar',source:'Fortress of the believer'},fr:{label:'Adhkar du matin',source:'Forteresse du croyant'}},
  {emoji:'🌙',ar:{label:'أذكار المساء',source:'حصن المؤمن'},en:{label:'Evening adhkar',source:'Fortress of the believer'},fr:{label:'Adhkar du soir',source:'Forteresse du croyant'}},
  {emoji:'📿',ar:{label:'تسبيح بعد الصلاة (٣٣)',source:'السنة النبوية'},en:{label:'Post-prayer tasbih (33)',source:'Prophetic Sunnah'},fr:{label:'Tasbih apr\u00e8s la pri\u00e8re (33)',source:'Sunnah proph\u00e9tique'}},
  {emoji:'📖',ar:{label:'قراءة صفحة من القرآن',source:'أعظم الذكر'},en:{label:'Read a page of Quran',source:'The greatest dhikr'},fr:{label:'Lire une page du Coran',source:'Le plus grand dhikr'}},
  {emoji:'🤲',ar:{label:'دعاء بعد الصلاة',source:'فن الدعاء'},en:{label:'Dua after prayer',source:'The art of dua'},fr:{label:'Dua apr\u00e8s la pri\u00e8re',source:'L\'art du dua'}},
  {emoji:'🔄',ar:{label:'استغفار ١٠٠ مرة',source:'السنة النبوية'},en:{label:'Istighfar 100 times',source:'Prophetic Sunnah'},fr:{label:'Istighfar 100 fois',source:'Sunnah proph\u00e9tique'}},
  {emoji:'💚',ar:{label:'الصلاة على النبي ﷺ',source:'سورة الأحزاب'},en:{label:'Blessings on the Prophet ﷺ',source:'Surah Al-Ahzab'},fr:{label:'Pri\u00e8res sur le Proph\u00e8te ﷺ',source:'Sourate Al-Ahzab'}},
  {emoji:'😴',ar:{label:'أذكار النوم',source:'حصن المؤمن'},en:{label:'Sleep adhkar',source:'Fortress of the believer'},fr:{label:'Adhkar du sommeil',source:'Forteresse du croyant'}},
  {emoji:'🏪',ar:{label:'ذكر دخول السوق',source:'من الأذكار المهجورة'},en:{label:'Marketplace dhikr',source:'From abandoned adhkar'},fr:{label:'Dhikr du march\u00e9',source:'Des adhkar abandonn\u00e9s'}},
  {emoji:'🪞',ar:{label:'دعاء النظر في المرآة',source:'من آداب الإسلام'},en:{label:'Mirror dua',source:'From Islamic etiquette'},fr:{label:'Dua du miroir',source:'De l\'\u00e9tiquette islamique'}},
  {emoji:'🛡️',ar:{label:'قراءة آية الكرسي بعد كل صلاة',source:'حصن المؤمن'},en:{label:'Read Ayat al-Kursi after each prayer',source:'Fortress of the believer'},fr:{label:'Lire Ayat al-Kursi apr\u00e8s chaque pri\u00e8re',source:'Forteresse du croyant'}},
  {emoji:'🌧️',ar:{label:'دعاء المطر والرعد',source:'من أذكار الأحوال'},en:{label:'Rain and thunder dua',source:'From situational adhkar'},fr:{label:'Dua de la pluie et du tonnerre',source:'Des adhkar situationnels'}},
  {emoji:'🍽️',ar:{label:'التسمية قبل الطعام والحمد بعده',source:'آداب الطعام'},en:{label:'Bismillah before food and Alhamdulillah after',source:'Eating etiquette'},fr:{label:'Bismillah avant le repas et Alhamdulillah apr\u00e8s',source:'\u00c9tiquette du repas'}},
  {emoji:'🌺',ar:{label:'الصلاة على النبي ﷺ ١٠٠ مرة',source:'من أعظم الأذكار'},en:{label:'Send blessings on the Prophet 100 times',source:'Among the greatest adhkar'},fr:{label:'Envoyer des pri\u00e8res sur le Proph\u00e8te 100 fois',source:'Parmi les plus grands adhkar'}},
  {emoji:'☀️',ar:{label:'الجلوس بعد الفجر حتى الشروق',source:'أجر حجة وعمرة'},en:{label:'Sit after Fajr until sunrise',source:'Reward of Hajj and Umrah'},fr:{label:'S\'asseoir apr\u00e8s le Fajr jusqu\'au lever du soleil',source:'R\u00e9compense du Hajj et Omra'}},
  {emoji:'🤲',ar:{label:'دعاء في الثلث الأخير من الليل',source:'وقت الإجابة'},en:{label:'Dua in the last third of the night',source:'Time of answered prayers'},fr:{label:'Dua dans le dernier tiers de la nuit',source:'Moment des pri\u00e8res exauc\u00e9es'}},
  {emoji:'💎',ar:{label:'قول لا حول ولا قوة إلا بالله',source:'كنز من كنوز الجنة'},en:{label:'Say La hawla wala quwwata illa billah',source:'A treasure from Paradise'},fr:{label:'Dire La hawla wala quwwata illa billah',source:'Un tr\u00e9sor du Paradis'}},
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تحافظ على أذكار الصباح والمساء يومياً؟',en:'Do you maintain morning and evening adhkar daily?',fr:'Maintenez-vous les adhkar du matin et du soir quotidiennement ?'},
  {ar:'هل تترك الدعاء عند المحن؟',en:'Do you abandon dua during hardships?',fr:'Abandonnez-vous le dua pendant les \u00e9preuves ?'},
  {ar:'هل تسبّح بعد كل صلاة؟',en:'Do you do tasbih after every prayer?',fr:'Faites-vous le tasbih apr\u00e8s chaque pri\u00e8re ?'},
  {ar:'هل تنسى ذكر الله في أنشطتك اليومية؟',en:'Do you forget God\'s remembrance in daily activities?',fr:'Oubliez-vous le rappel de Dieu dans vos activit\u00e9s quotidiennes ?'},
  {ar:'هل تقرأ القرآن يومياً ولو صفحة واحدة؟',en:'Do you read the Quran daily, even one page?',fr:'Lisez-vous le Coran quotidiennement, m\u00eame une page ?'},
  {ar:'هل تستغفر الله بانتظام؟',en:'Do you seek God\'s forgiveness regularly?',fr:'Demandez-vous pardon \u00e0 Dieu r\u00e9guli\u00e8rement ?'},
  {ar:'هل تكثر من الصلاة على النبي ﷺ؟',en:'Do you frequently send blessings on the Prophet ﷺ?',fr:'Envoyez-vous fr\u00e9quemment des pri\u00e8res sur le Proph\u00e8te ﷺ ?'},
  {ar:'هل تعرف آداب الدعاء وتطبقها؟',en:'Do you know and apply the etiquette of dua?',fr:'Connaissez-vous et appliquez-vous l\'\u00e9tiquette du dua ?'},
  {ar:'هل تدعو للآخرين بظهر الغيب؟',en:'Do you pray for others in their absence?',fr:'Priez-vous pour les autres en leur absence ?'},
  {ar:'هل تحرص على قيام الليل ولو ركعتين؟',en:'Do you strive for night prayer, even two rak\'at?',fr:'Vous efforcez-vous de prier la nuit, m\u00eame deux rak\'at ?'},
  {ar:'هل تذكر الله عند دخول السوق والأماكن المزدحمة؟',en:'Do you remember God when entering marketplaces and crowded places?',fr:'Vous souvenez-vous de Dieu en entrant dans les march\u00e9s et lieux bond\u00e9s ?'},
  {ar:'هل تقرأ أذكار النوم قبل أن تنام كل ليلة؟',en:'Do you read the sleep adhkar before sleeping every night?',fr:'Lisez-vous les adhkar du sommeil avant de dormir chaque nuit ?'},
  {ar:'هل تلجأ إلى الذكر عند الشدائد والأزمات؟',en:'Do you turn to dhikr during hardships and crises?',fr:'Vous tournez-vous vers le dhikr pendant les \u00e9preuves et les crises ?'},
  {ar:'هل تسبح بعد كل صلاة ٣٣ مرة؟',en:'Do you do tasbih 33 times after every prayer?',fr:'Faites-vous le tasbih 33 fois apr\u00e8s chaque pri\u00e8re ?'},
  {ar:'هل تعرف آداب الدعاء وتطبقها عند كل دعاء؟',en:'Do you know the etiquette of dua and apply it every time?',fr:'Connaissez-vous l\'\u00e9tiquette du dua et l\'appliquez-vous \u00e0 chaque fois ?'},
  {ar:'هل تستيقظ في الثلث الأخير من الليل للذكر والدعاء؟',en:'Do you wake in the last third of the night for dhikr and dua?',fr:'Vous r\u00e9veillez-vous dans le dernier tiers de la nuit pour le dhikr et le dua ?'},
  {ar:'هل تحفظ كنوز الذكر: سبحان الله وبحمده ولا حول ولا قوة إلا بالله؟',en:'Do you memorize the treasures of dhikr: SubhanAllahi wa bihamdihi and La hawla wala quwwata illa billah?',fr:'M\u00e9morisez-vous les tr\u00e9sors du dhikr : SubhanAllahi wa bihamdihi et La hawla wala quwwata illa billah ?'},
  {ar:'هل تجلس بعد صلاة الفجر لذكر الله حتى طلوع الشمس؟',en:'Do you sit after Fajr remembering God until sunrise?',fr:'Restez-vous assis apr\u00e8s le Fajr \u00e0 vous souvenir de Dieu jusqu\'au lever du soleil ?'},
  {ar:'هل تكثر من الصلاة على النبي ﷺ خاصة يوم الجمعة؟',en:'Do you frequently send blessings on the Prophet, especially on Friday?',fr:'Envoyez-vous fr\u00e9quemment des pri\u00e8res sur le Proph\u00e8te, surtout le vendredi ?'},
  {ar:'هل تعلّم أطفالك أذكار الصباح والمساء؟',en:'Do you teach your children the morning and evening adhkar?',fr:'Enseignez-vous \u00e0 vos enfants les adhkar du matin et du soir ?'},
  {ar:'هل تذكر الله عند الوضوء بالتسمية والشهادة؟',en:'Do you remember God during wudu with Bismillah and the shahada?',fr:'Vous souvenez-vous de Dieu pendant les ablutions avec Bismillah et la shahada ?'},
  {ar:'هل تحافظ على ذكر الله في كل أحوالك: فرحاً وحزناً؟',en:'Do you maintain God\'s remembrance in all states: joy and sadness?',fr:'Maintenez-vous le rappel de Dieu dans tous vos \u00e9tats : joie et tristesse ?'},
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء السكينة',text:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',tr:'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل'},en:{label:'Dua for Tranquility',text:'Allahumma inni a\'udhu bika min al-hammi wal-hazan',tr:'O Allah, I seek refuge in You from worry and grief'},fr:{label:'Dua pour la Tranquillit\u00e9',text:'Allahumma inni a\'udhu bika min al-hammi wal-hazan',tr:'\u00d4 Allah, je cherche refuge aupr\u00e8s de Toi contre le souci et le chagrin'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ',tr:'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم'},en:{label:'Dua of Trust',text:'HasbiyAllahu la ilaha illa Hu, \'alayhi tawakkaltu',tr:'God suffices me. There is no god but He. In Him I trust.'},fr:{label:'Dua de Confiance',text:'HasbiyAllahu la ilaha illa Hu, \'alayhi tawakkaltu',tr:'Dieu me suffit. Il n\'y a de dieu que Lui. En Lui je me confie.'}},
  {ar:{label:'دعاء الحفظ',text:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ',tr:'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء'},en:{label:'Dua of Protection',text:'Bismillahilladhi la yadurru ma\'asmihi shay\'un',tr:'In the name of Allah, with whose name nothing can harm'},fr:{label:'Dua de Protection',text:'Bismillahilladhi la yadurru ma\'asmihi shay\'un',tr:'Au nom d\'Allah, avec le nom duquel rien ne peut nuire'}},
  {ar:{label:'دعاء الخير',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ',tr:'اللهم إني أسألك العفو والعافية في الدنيا والآخرة'},en:{label:'Dua for Well-being',text:'Allahumma inni as\'aluka al-\'afwa wal-\'afiyah',tr:'O Allah, I ask You for pardon and well-being'},fr:{label:'Dua pour le Bien-\u00eatre',text:'Allahumma inni as\'aluka al-\'afwa wal-\'afiyah',tr:'\u00d4 Allah, je Te demande le pardon et le bien-\u00eatre'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم اهدني وسددني'},en:{label:'Dua for Guidance',text:'Allahumma ihdini wa saddidni',tr:'O Allah, guide me and set me on the right path'},fr:{label:'Dua pour la Guidance',text:'Allahumma ihdini wa saddidni',tr:'\u00d4 Allah, guide-moi et mets-moi sur le droit chemin'}},
  {ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا',tr:'اللهم اجعل في قلبي نوراً وفي بصري نوراً'},en:{label:'Dua for Light',text:'Allahumma ij\'al fi qalbi nuran',tr:'O Allah, place light in my heart and light in my sight'},fr:{label:'Dua pour la Lumi\u00e8re',text:'Allahumma ij\'al fi qalbi nuran',tr:'\u00d4 Allah, mets de la lumi\u00e8re dans mon c\u0153ur et dans ma vue'}},
  {ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',tr:'اللهم إني أسألك علماً نافعاً ورزقاً طيباً وعملاً متقبلاً'},en:{label:'Dua for Beneficial Knowledge',text:'Allahumma inni as\'aluka \'ilman nafi\'an',tr:'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds'},fr:{label:'Dua pour le Savoir B\u00e9n\u00e9fique',text:'Allahumma inni as\'aluka \'ilman nafi\'an',tr:'\u00d4 Allah, je Te demande un savoir b\u00e9n\u00e9fique, une bonne subsistance et des actes accept\u00e9s'}},
  {ar:{label:'دعاء ختام المجلس',text:'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ',tr:'سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت أستغفرك وأتوب إليك'},en:{label:'Dua for Closing a Gathering',text:'SubhanakaAllahumma wa bihamdika, ash-hadu an la ilaha illa Anta',tr:'Glory be to You O Allah and praise, I testify there is no god but You'},fr:{label:'Dua de Cl\u00f4ture d\'une Assembl\u00e9e',text:'SubhanakaAllahumma wa bihamdika, ash-hadu an la ilaha illa Anta',tr:'Gloire et louange \u00e0 Toi \u00f4 Allah, j\'atteste qu\'il n\'y a de dieu que Toi'}},
  {ar:{label:'دعاء دخول السوق',text:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ',tr:'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد يحيي ويميت'},en:{label:'Dua for Entering the Marketplace',text:'La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd',tr:'There is no god but God alone, with no partner. His is the dominion and His is the praise'},fr:{label:'Dua pour Entrer au March\u00e9',text:'La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd',tr:'Il n\'y a de dieu que Dieu seul, sans associ\u00e9. \u00c0 Lui la royaut\u00e9 et \u00e0 Lui la louange'}},
  {ar:{label:'دعاء الكرب والشدة',text:'لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',tr:'دعاء يونس عليه السلام في بطن الحوت'},en:{label:'Dua for Distress',text:'La ilaha illa Anta subhanaka inni kuntu min adh-dhalimin',tr:'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers'},fr:{label:'Dua pour la D\u00e9tresse',text:'La ilaha illa Anta subhanaka inni kuntu min adh-dhalimin',tr:'Il n\'y a de divinit\u00e9 que Toi, gloire \u00e0 Toi, j\'\u00e9tais parmi les injustes'}},
  {ar:{label:'دعاء الشكر',text:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',tr:'اللهم أعني على ذكرك وشكرك وحسن عبادتك'},en:{label:'Dua for Gratitude',text:'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',tr:'O God, help me remember You, thank You, and worship You well'},fr:{label:'Dua pour la Gratitude',text:'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',tr:'\u00d4 Allah, aide-moi \u00e0 Te rappeler, Te remercier et bien T\'adorer'}},
  {ar:{label:'دعاء الصباح',text:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ',tr:'أصبحنا وأصبح الملك لله والحمد لله'},en:{label:'Morning Dua',text:'Asbahna wa asbahal mulku lillahi rabbil alamin',tr:'We have reached the morning and the dominion belongs to God, Lord of the worlds'},fr:{label:'Dua du Matin',text:'Asbahna wa asbahal mulku lillahi rabbil alamin',tr:'Nous avons atteint le matin et la royaut\u00e9 appartient \u00e0 Dieu, Seigneur des mondes'}},
  {ar:{label:'دعاء المساء',text:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ',tr:'أمسينا وأمسى الملك لله والحمد لله'},en:{label:'Evening Dua',text:'Amsayna wa amsal mulku lillahi rabbil alamin',tr:'We have reached the evening and the dominion belongs to God, Lord of the worlds'},fr:{label:'Dua du Soir',text:'Amsayna wa amsal mulku lillahi rabbil alamin',tr:'Nous avons atteint le soir et la royaut\u00e9 appartient \u00e0 Dieu, Seigneur des mondes'}},
  {ar:{label:'دعاء التوبة',text:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',tr:'رب اغفر لي وتب عليّ إنك أنت التواب الرحيم'},en:{label:'Dua for Repentance',text:'Rabbi ighfir li wa tub alayya innaka antat-tawwabur-rahim',tr:'My Lord, forgive me and accept my repentance. Indeed, You are the Accepting of repentance, the Merciful'},fr:{label:'Dua pour le Repentir',text:'Rabbi ighfir li wa tub alayya innaka antat-tawwabur-rahim',tr:'Mon Seigneur, pardonne-moi et accepte mon repentir. Tu es certes l\'Accueillant au repentir, le Mis\u00e9ricordieux'}},
  {ar:{label:'دعاء الشفاء',text:'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِهِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ',tr:'اللهم رب الناس أذهب البأس اشفه'},en:{label:'Dua for Healing',text:'Allahumma rabban-nas adh-hibil ba\'sa ishfihi antash-shafi la shifa\'a illa shifa\'uk',tr:'O God, Lord of mankind, remove the affliction, heal him, You are the Healer'},fr:{label:'Dua pour la Gu\u00e9rison',text:'Allahumma rabban-nas adh-hibil ba\'sa ishfihi antash-shafi la shifa\'a illa shifa\'uk',tr:'\u00d4 Allah, Seigneur des hommes, enl\u00e8ve le mal, gu\u00e9ris-le, Tu es le Gu\u00e9risseur'}},
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('fd-lang') || 'ar';
let theme = localStorage.getItem('fd-theme') || 'teal';
const themes = ['teal','night','garden'];
const themeIcons = ['🌿','🌙','🌸'];
const themeNames = {teal:'🌿',night:'🌙 Night',garden:'🌸 Garden'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderAdhkar();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('fd-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabAdhkar', t.tabAdhkar);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('adhkarTitle', t.adhkarTitle); set('adhkarDesc', t.adhkarDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderAdhkar(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('fd-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'🤲',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ درساً في فن الذكر':lang==='fr'?'20 le\u00e7ons sur le dhikr':'20 lessons on dhikr'},
    {icon:'📿',tab:'adhkar',title:t.tabAdhkar,desc:lang==='ar'?'أذكار يومية':lang==='fr'?'Adhkar quotidiens':'Daily adhkar'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معرفتك':lang==='fr'?'Testez vos connaissances':'Test your knowledge'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('cardsContainer')||{}).innerHTML= searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n${d.verse}\n\n💡 ${d.action}\n\n— فن الذكر والدعاء | The Art of Dhikr & Dua`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copi\u00e9 !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: ADHKAR ═══════════════
function renderAdhkar() {
  const t = T[lang];
  (document.getElementById('adhkarContainer')||{}).innerHTML= ADHKAR_DATA.map(a => {
    const d = a[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${a.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="verse-box" style="margin-bottom:12px">
        <div class="verse-arabic">${d.text}</div>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${lang==='ar'?'😰 المشكلة':lang==='fr'?'😰 Le Probl\u00e8me':'😰 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${lang==='ar'?'😌 الحل':lang==='fr'?'😌 La Solution':'😌 The Solution'}</span>
        ${d.solution}
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('fd-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('fd-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}
function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('fd-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('fd-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}
function resetHabits() {
  localStorage.setItem('fd-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'R\u00e9initialis\u00e9' : 'Reset');
}
function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length, pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}
function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('fd-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('fd-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('fd-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00695C','#4DB6AC','#80CBC4','#E0F2F1','#FFD54F','#A5D6A7','#81C784'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx;p.y+=p.vy;p.rot+=p.rotSpeed;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  (document.getElementById('quizContainer')||{}).innerHTML= QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${lang==='ar'?'نعم':lang==='fr'?'Oui':'Yes'}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${lang==='ar'?'أحياناً':lang==='fr'?'Parfois':'Sometimes'}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${lang==='ar'?'لا':lang==='fr'?'Non':'No'}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}
function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o,oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}
function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'R\u00e9pondez \u00e0 toutes les questions':'Answer all questions');
    return;
  }
  const invertedQs = [1, 3]; // negative questions
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji='🌟'; title=lang==='ar'?'ذاكر متميز!':lang==='fr'?'Excellent rappeleur !':'Excellent rememberer!';
    desc=lang==='ar'?'ذكرك لله قوي ومنتظم. استمر وزد!':lang==='fr'?'Votre rappel de Dieu est fort et r\u00e9gulier. Continuez !':'Your remembrance of God is strong and regular. Keep going!';
  } else if (pct >= 50) {
    emoji='🤲'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc=lang==='ar'?'أنت على الطريق — زد من أذكارك اليومية':lang==='fr'?'Vous \u00eates sur le chemin — augmentez vos adhkar quotidiens':'You\'re on the path — increase your daily adhkar';
  } else {
    emoji='📿'; title=lang==='ar'?'ابدأ الآن!':lang==='fr'?'Commencez maintenant !':'Start now!';
    desc=lang==='ar'?'لم يفت الأوان! ابدأ بذكر واحد يومياً وزد تدريجياً':lang==='fr'?'Il n\'est pas trop tard ! Commencez par un dhikr quotidien':'It\'s not too late! Start with one daily dhikr and build up';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم',disclaimer:'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName:'الشيخ محمد الغزالي',authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle:'عن الكتاب',bookDesc:'كتاب "فن الذكر والدعاء عند خاتم الأنبياء" يستعرض فيه الشيخ الغزالي فن الذكر والدعاء كما مارسه النبي ﷺ. يوضح الكتاب أن الذكر ليس مجرد كلمات تُردد بل هو حالة قلبية وعقلية تربط الإنسان بخالقه في كل لحظة.',
      sourcesTitle:'المصادر',sources:['كتاب "فن الذكر والدعاء عند خاتم الأنبياء" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','حصن المسلم'],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice',disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle:'About the Book',bookDesc:'"The Art of Dhikr and Dua at the Seal of the Prophets" explores how the Prophet ﷺ practiced remembrance and supplication. The book shows that dhikr is not mere words repeated but a state of heart and mind connecting us to our Creator every moment.',
      sourcesTitle:'Sources',sources:['"The Art of Dhikr and Dua" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Fortress of the Muslim'],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important',disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tir\u00e9 du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique \u00e9gyptien, surnomm\u00e9 \u00ab Le Litt\u00e9raire de la Pr\u00e9dication \u00bb. Auteur de plus de 94 livres. Dipl\u00f4m\u00e9 d\'Al-Azhar, professeur \u00e0 l\'Universit\u00e9 \u00c9mir Abdelkader de Constantine (Alg\u00e9rie). Laur\u00e9at du Prix Roi Faysal.',
      bookTitle:'\u00c0 Propos du Livre',bookDesc:'\u00ab L\'Art du Dhikr et du Dua aupr\u00e8s du Sceau des Proph\u00e8tes \u00bb explore comment le Proph\u00e8te ﷺ pratiquait le rappel et l\'invocation. Le livre montre que le dhikr n\'est pas de simples mots r\u00e9p\u00e9t\u00e9s mais un \u00e9tat du c\u0153ur et de l\'esprit nous connectant \u00e0 notre Cr\u00e9ateur.',
      sourcesTitle:'Sources',sources:['\u00ab L\'Art du Dhikr et du Dua \u00bb — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','La Citadelle du Musulman'],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s=>`<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar:[{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "فن الذكر والدعاء" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، أذكار يومية، تتبع عادات، اختبار، أدعية مختارة.'},{title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل. Escape لإغلاق اللوحات.'}],
    en:[{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"The Art of Dhikr and Dua" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 cards, daily adhkar, habit tracker, quiz, selected duas.'},{title:'⌨️ Shortcuts',body:'Use arrow keys to navigate. Escape to close panels.'}],
    fr:[{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'\u00ab L\'Art du Dhikr et du Dua \u00bb par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalit\u00e9s',body:'Trois langues, 3 th\u00e8mes, 20 cartes, adhkar quotidiens, suivi habitudes, quiz, duas s\u00e9lectionn\u00e9es.'},{title:'⌨️ Raccourcis',body:'Utilisez les fl\u00e8ches pour naviguer. \u00c9chap pour fermer les panneaux.'}]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h=>`<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t=document.getElementById('toast'),m=document.getElementById('toastMsg'); if(t&&m){m.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2500);} }
function initScrollTop() { const btn=document.getElementById('scrollTop'); window.addEventListener('scroll',()=>{ if(btn) btn.classList.toggle('visible',window.scrollY>300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click'){osc.frequency.value=800;osc.type='sine';gain.gain.value=0.04;}
    else if (type==='success'){osc.frequency.value=523;osc.type='sine';gain.gain.value=0.06;}
    else if (type==='theme'){osc.frequency.value=440;osc.type='triangle';gain.gain.value=0.05;}
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
(function() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','adhkar','habits','quiz','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.7) return;
    const currentTab = document.querySelector('.tab.active');
    if (!currentTab) return;
    const currentIdx = tabOrder.indexOf(currentTab.dataset.tab);
    if (currentIdx < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let nextIdx;
    if (dx > 0) nextIdx = isRTL ? Math.min(currentIdx + 1, tabOrder.length - 1) : Math.max(currentIdx - 1, 0);
    else nextIdx = isRTL ? Math.max(currentIdx - 1, 0) : Math.min(currentIdx + 1, tabOrder.length - 1);
    if (nextIdx !== currentIdx) document.querySelector(`.tab[data-tab="${tabOrder[nextIdx]}"]`).click();
  }, { passive: true });
})();


// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 فن الذكر والدعاء — الشيخ محمد الغزالي','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء','⭐ اكتشف كنوز الكتاب'],
    en: ['📖 The Art of Dhikr and Dua — Sheikh Mohammed Al-Ghazali','🏆 Earn points and badges','🌟 Try the Young Explorer mode','🤲 Remember to make dua','⭐ Discover the book\'s treasures'],
    fr: ['📖 L\'Art du Dhikr et du Dua — Cheikh Mohammed Al-Ghazali','🏆 Gagnez des points et des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas le dua','⭐ Découvrez les trésors du livre']
  };
  const curLang = (typeof lang !== 'undefined' && lang) || document.documentElement.lang || 'ar';
  const items = tips[curLang] || tips.ar;
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// Auto-start ticker
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTicker);
} else {
  renderTicker();
}
