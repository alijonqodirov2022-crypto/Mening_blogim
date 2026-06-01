export type Lang = "uz" | "ru" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "uz", label: "O‘zbek", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

type Dict = {
  nav: {
    services: string;
    advantages: string;
    calculator: string;
    faq: string;
    contact: string;
    callNow: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLicense: string;
  };
  stats: {
    title: string;
    items: { value: string; label: string }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  advantages: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  calc: {
    badge: string;
    title: string;
    subtitle: string;
    valueLabel: string;
    valuePlaceholder: string;
    dutyLabel: string;
    exciseLabel: string;
    vatLabel: string;
    calcBtn: string;
    resetBtn: string;
    resultTitle: string;
    rDuty: string;
    rExcise: string;
    rVat: string;
    rTotal: string;
    rGrand: string;
    note: string;
    empty: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    cargo: string;
    cargoPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    errorText: string;
    orCall: string;
    telegram: string;
    required: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    contacts: string;
    workTime: string;
    workTimeValue: string;
    rights: string;
    license: string;
  };
};

export const translations: Record<Lang, Dict> = {
  uz: {
    nav: {
      services: "Xizmatlar",
      advantages: "Afzalliklar",
      calculator: "Kalkulyator",
      faq: "Savol-javob",
      contact: "Aloqa",
      callNow: "Qo‘ng‘iroq qilish",
    },
    hero: {
      badge: "Litsenziyalangan bojxona operatori №0042",
      title1: "Bojxona rasmiylashtiruvini",
      title2: "biz soddalashtiramiz",
      subtitle:
        "15 yillik tajriba bilan yuklaringizni bojxonadan tez va xavfsiz o‘tkazamiz. To‘g‘ri TN VED kodi tanlash orqali bojxona to‘lovlarini 20–30% gacha kamaytiramiz.",
      ctaPrimary: "Bepul ekspertiza olish",
      ctaSecondary: "Xizmatlar bilan tanishish",
      trustLicense: "Davlat litsenziyasi asosida faoliyat yuritamiz",
    },
    stats: {
      title: "Raqamlardagi natijalar",
      items: [
        { value: "25 000+", label: "Yillik deklaratsiya" },
        { value: "15 yil", label: "Bojxona tajribasi" },
        { value: "$12 mln", label: "Mijozlar uchun tejaldi" },
        { value: "500+", label: "Yirik hamkor" },
      ],
    },
    services: {
      badge: "Bizning xizmatlar",
      title: "Sizning logistikangiz — bizning mas’uliyatimiz",
      subtitle:
        "Bojxona rasmiylashtiruvidan tortib eshikdan-eshikgacha yetkazib berishgacha — barcha jarayonni o‘z zimmamizga olamiz.",
      items: [
        {
          title: "Bojxona to‘lovlarini optimallashtirish",
          desc: "To‘g‘ri TN VED kodini tanlash orqali bojxona to‘lovlarini qonuniy yo‘l bilan 20–30% gacha kamaytiramiz.",
        },
        {
          title: "Bojxona imtiyozlari",
          desc: "Investitsiya loyihalari va texnologik uskunalar uchun boj va soliq imtiyozlarini to‘liq qo‘llaymiz.",
        },
        {
          title: "Xalqaro logistika",
          desc: "Dunyoning istalgan nuqtasiga eshikdan-eshikkacha yetkazib berish xizmatini tashkil etamiz.",
        },
        {
          title: "Tezkor rasmiylashtirish",
          desc: "Maxsus yashil yo‘nalish orqali yuklarni bojxonadan atigi 2 soat ichida o‘tkazamiz.",
        },
      ],
    },
    advantages: {
      badge: "Nega aynan biz?",
      title: "Bizning afzalliklarimiz",
      subtitle: "Biz bilan ishlash — bu xotirjamlik, tezlik va aniqlik.",
      items: [
        { title: "Shaffof narxlar", desc: "Yashirin to‘lovlarsiz, har bir bosqich oldindan kelishiladi." },
        { title: "24/7 qo‘llab-quvvatlash", desc: "Mutaxassislarimiz kechayu kunduz bog‘lanish uchun ochiq." },
        { title: "Yuridik xavfsizlik", desc: "Barcha hujjatlar qonun talablariga to‘liq mos rasmiylashtiriladi." },
        { title: "Shaxsiy menejer", desc: "Har bir mijozga alohida mutaxassis biriktiriladi." },
      ],
    },
    calc: {
      badge: "Onlayn vosita",
      title: "Bojxona to‘lovlari kalkulyatori",
      subtitle: "Yukingizning taxminiy bojxona to‘lovlarini bir necha soniyada hisoblang.",
      valueLabel: "Yuk qiymati (USD)",
      valuePlaceholder: "Masalan: 10000",
      dutyLabel: "Bojxona boji (%)",
      exciseLabel: "Aksiz solig‘i (%)",
      vatLabel: "QQS (%)",
      calcBtn: "Hisoblash",
      resetBtn: "Tozalash",
      resultTitle: "Hisob-kitob natijasi",
      rDuty: "Bojxona boji",
      rExcise: "Aksiz solig‘i",
      rVat: "QQS",
      rTotal: "Jami to‘lovlar",
      rGrand: "Umumiy summa (yuk + to‘lov)",
      note: "* Natijalar taxminiy. Aniq hisob-kitob uchun mutaxassisimizga murojaat qiling.",
      empty: "Natijani ko‘rish uchun qiymatlarni kiriting va “Hisoblash” tugmasini bosing.",
    },
    faq: {
      badge: "Savol-javob",
      title: "Ko‘p beriladigan savollar",
      subtitle: "Eng ko‘p so‘raladigan savollarga javoblar.",
      items: [
        {
          q: "Bojxona rasmiylashtiruvi qancha vaqt oladi?",
          a: "Hujjatlar to‘liq bo‘lsa, yashil yo‘nalish orqali jarayon atigi 2 soat ichida yakunlanishi mumkin. O‘rtacha muddat 1 ish kunini tashkil etadi.",
        },
        {
          q: "Bojxona to‘lovlarini qanday kamaytirasiz?",
          a: "To‘g‘ri TN VED kodini tanlash, mavjud imtiyozlarni qo‘llash va qonuniy optimallashtirish orqali to‘lovlarni 20–30% gacha kamaytiramiz.",
        },
        {
          q: "Omborxona xizmati bormi?",
          a: "Ha, vaqtinchalik saqlash omborlari (SVH) bilan ishlaymiz va yuklaringiz xavfsizligini ta’minlaymiz.",
        },
        {
          q: "Ish qanday boshlanadi?",
          a: "Siz yuk ma’lumotlarini qoldirasiz, biz 15 daqiqa ichida bepul ekspertiza o‘tkazib, taklif beramiz.",
        },
      ],
    },
    contact: {
      badge: "Bog‘lanish",
      title: "Yuk ma’lumotlarini qoldiring",
      subtitle: "Mutaxassislarimiz 15 daqiqa ichida bepul ekspertiza o‘tkazadi.",
      name: "Ismingiz",
      phone: "Telefon raqami",
      cargo: "Yuk haqida ma’lumot",
      cargoPlaceholder: "Yuk turi, og‘irligi, kelib chiqish mamlakati...",
      submit: "Ekspertizani tasdiqlash",
      submitting: "Yuborilmoqda...",
      successTitle: "Rahmat!",
      successText: "So‘rovingiz qabul qilindi. Tez orada bog‘lanamiz.",
      errorText: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring yoki telefon orqali bog‘laning.",
      orCall: "Yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling",
      telegram: "Telegram orqali yozish",
      required: "Iltimos, ism va telefon raqamini kiriting.",
    },
    footer: {
      desc: "Pearl of Asia — O‘zbekistondagi yetakchi bojxona brokerligi. Yuklaringiz biz bilan xavfsiz.",
      quickLinks: "Tezkor havolalar",
      contacts: "Aloqa",
      workTime: "Ish vaqti",
      workTimeValue: "24/7 — to‘xtovsiz",
      rights: "Barcha huquqlar himoyalangan.",
      license: "Litsenziyalangan bojxona operatori №0042",
    },
  },

  ru: {
    nav: {
      services: "Услуги",
      advantages: "Преимущества",
      calculator: "Калькулятор",
      faq: "Вопросы",
      contact: "Контакты",
      callNow: "Позвонить",
    },
    hero: {
      badge: "Лицензированный таможенный оператор №0042",
      title1: "Таможенное оформление —",
      title2: "мы делаем его простым",
      subtitle:
        "15 лет опыта позволяют нам быстро и безопасно проводить ваши грузы через таможню. За счёт правильного подбора кода ТН ВЭД снижаем таможенные платежи на 20–30%.",
      ctaPrimary: "Получить бесплатную экспертизу",
      ctaSecondary: "Ознакомиться с услугами",
      trustLicense: "Работаем на основании государственной лицензии",
    },
    stats: {
      title: "Результаты в цифрах",
      items: [
        { value: "25 000+", label: "Деклараций в год" },
        { value: "15 лет", label: "Опыта в таможне" },
        { value: "$12 млн", label: "Сэкономлено клиентам" },
        { value: "500+", label: "Крупных партнёров" },
      ],
    },
    services: {
      badge: "Наши услуги",
      title: "Ваша логистика — наша ответственность",
      subtitle:
        "От таможенного оформления до доставки «от двери до двери» — мы берём весь процесс на себя.",
      items: [
        {
          title: "Оптимизация таможенных платежей",
          desc: "Снижаем таможенные платежи законным путём на 20–30% за счёт правильного подбора кода ТН ВЭД.",
        },
        {
          title: "Таможенные льготы",
          desc: "В полном объёме применяем льготы по пошлинам и налогам для инвестпроектов и технологического оборудования.",
        },
        {
          title: "Международная логистика",
          desc: "Организуем доставку «от двери до двери» в любую точку мира.",
        },
        {
          title: "Срочное оформление",
          desc: "Проводим грузы через таможню всего за 2 часа через специальный зелёный коридор.",
        },
      ],
    },
    advantages: {
      badge: "Почему именно мы?",
      title: "Наши преимущества",
      subtitle: "Работа с нами — это спокойствие, скорость и точность.",
      items: [
        { title: "Прозрачные цены", desc: "Без скрытых платежей, каждый этап согласовывается заранее." },
        { title: "Поддержка 24/7", desc: "Наши специалисты на связи круглосуточно." },
        { title: "Юридическая безопасность", desc: "Все документы оформляются строго по закону." },
        { title: "Персональный менеджер", desc: "За каждым клиентом закрепляется отдельный специалист." },
      ],
    },
    calc: {
      badge: "Онлайн-инструмент",
      title: "Калькулятор таможенных платежей",
      subtitle: "Рассчитайте примерные таможенные платежи за несколько секунд.",
      valueLabel: "Стоимость груза (USD)",
      valuePlaceholder: "Например: 10000",
      dutyLabel: "Таможенная пошлина (%)",
      exciseLabel: "Акцизный налог (%)",
      vatLabel: "НДС (%)",
      calcBtn: "Рассчитать",
      resetBtn: "Очистить",
      resultTitle: "Результат расчёта",
      rDuty: "Таможенная пошлина",
      rExcise: "Акцизный налог",
      rVat: "НДС",
      rTotal: "Итого платежей",
      rGrand: "Общая сумма (груз + платежи)",
      note: "* Результаты приблизительны. Для точного расчёта обратитесь к нашему специалисту.",
      empty: "Введите значения и нажмите «Рассчитать», чтобы увидеть результат.",
    },
    faq: {
      badge: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      subtitle: "Ответы на самые популярные вопросы.",
      items: [
        {
          q: "Сколько времени занимает таможенное оформление?",
          a: "При полном пакете документов процесс через зелёный коридор может занять всего 2 часа. В среднем — 1 рабочий день.",
        },
        {
          q: "Как вы снижаете таможенные платежи?",
          a: "За счёт правильного подбора кода ТН ВЭД, применения действующих льгот и законной оптимизации снижаем платежи на 20–30%.",
        },
        {
          q: "Есть ли услуга склада?",
          a: "Да, мы работаем со складами временного хранения (СВХ) и обеспечиваем сохранность ваших грузов.",
        },
        {
          q: "Как начинается работа?",
          a: "Вы оставляете данные о грузе, мы в течение 15 минут проводим бесплатную экспертизу и даём предложение.",
        },
      ],
    },
    contact: {
      badge: "Связаться",
      title: "Оставьте данные о грузе",
      subtitle: "Наши специалисты проведут бесплатную экспертизу в течение 15 минут.",
      name: "Ваше имя",
      phone: "Номер телефона",
      cargo: "Информация о грузе",
      cargoPlaceholder: "Тип груза, вес, страна происхождения...",
      submit: "Подтвердить экспертизу",
      submitting: "Отправка...",
      successTitle: "Спасибо!",
      successText: "Ваша заявка принята. Мы скоро свяжемся с вами.",
      errorText: "Произошла ошибка. Пожалуйста, попробуйте снова или свяжитесь по телефону.",
      orCall: "Или позвоните напрямую",
      telegram: "Написать в Telegram",
      required: "Пожалуйста, укажите имя и номер телефона.",
    },
    footer: {
      desc: "Pearl of Asia — ведущая таможенная брокерская компания в Узбекистане. Ваши грузы с нами в безопасности.",
      quickLinks: "Быстрые ссылки",
      contacts: "Контакты",
      workTime: "Время работы",
      workTimeValue: "24/7 — без выходных",
      rights: "Все права защищены.",
      license: "Лицензированный таможенный оператор №0042",
    },
  },

  en: {
    nav: {
      services: "Services",
      advantages: "Advantages",
      calculator: "Calculator",
      faq: "FAQ",
      contact: "Contact",
      callNow: "Call now",
    },
    hero: {
      badge: "Licensed Customs Operator #0042",
      title1: "Customs clearance —",
      title2: "we make it simple",
      subtitle:
        "With 15 years of experience we move your cargo through customs quickly and safely. By selecting the right HS (TN VED) code we reduce customs payments by 20–30%.",
      ctaPrimary: "Get a free assessment",
      ctaSecondary: "Explore our services",
      trustLicense: "We operate under a state license",
    },
    stats: {
      title: "Results in numbers",
      items: [
        { value: "25,000+", label: "Declarations per year" },
        { value: "15 years", label: "Customs experience" },
        { value: "$12M", label: "Saved for clients" },
        { value: "500+", label: "Major partners" },
      ],
    },
    services: {
      badge: "Our services",
      title: "Your logistics — our responsibility",
      subtitle:
        "From customs clearance to door-to-door delivery — we take the entire process off your hands.",
      items: [
        {
          title: "Customs duty optimization",
          desc: "We legally reduce customs payments by 20–30% through correct HS (TN VED) code selection.",
        },
        {
          title: "Customs privileges",
          desc: "We fully apply duty and tax exemptions for investment projects and technological equipment.",
        },
        {
          title: "International logistics",
          desc: "We arrange door-to-door delivery to any point in the world.",
        },
        {
          title: "Express clearance",
          desc: "We clear cargo through customs in just 2 hours via a dedicated green channel.",
        },
      ],
    },
    advantages: {
      badge: "Why us?",
      title: "Our advantages",
      subtitle: "Working with us means peace of mind, speed and precision.",
      items: [
        { title: "Transparent pricing", desc: "No hidden fees — every step is agreed in advance." },
        { title: "24/7 support", desc: "Our specialists are available around the clock." },
        { title: "Legal safety", desc: "All documents are processed in full compliance with the law." },
        { title: "Personal manager", desc: "A dedicated specialist is assigned to every client." },
      ],
    },
    calc: {
      badge: "Online tool",
      title: "Customs payments calculator",
      subtitle: "Estimate the customs payments for your cargo in a few seconds.",
      valueLabel: "Cargo value (USD)",
      valuePlaceholder: "e.g. 10000",
      dutyLabel: "Customs duty (%)",
      exciseLabel: "Excise tax (%)",
      vatLabel: "VAT (%)",
      calcBtn: "Calculate",
      resetBtn: "Reset",
      resultTitle: "Calculation result",
      rDuty: "Customs duty",
      rExcise: "Excise tax",
      rVat: "VAT",
      rTotal: "Total payments",
      rGrand: "Grand total (cargo + payments)",
      note: "* Results are approximate. Contact our specialist for an exact calculation.",
      empty: "Enter the values and click “Calculate” to see the result.",
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Answers to the most common questions.",
      items: [
        {
          q: "How long does customs clearance take?",
          a: "With a complete document package, clearance via the green channel can take just 2 hours. On average it is 1 business day.",
        },
        {
          q: "How do you reduce customs payments?",
          a: "Through correct HS (TN VED) code selection, applying available exemptions and legal optimization we cut payments by 20–30%.",
        },
        {
          q: "Do you offer warehousing?",
          a: "Yes, we work with temporary storage warehouses (TSW) and ensure the safety of your cargo.",
        },
        {
          q: "How does the work start?",
          a: "You leave your cargo details and within 15 minutes we run a free assessment and send you an offer.",
        },
      ],
    },
    contact: {
      badge: "Get in touch",
      title: "Leave your cargo details",
      subtitle: "Our specialists will run a free assessment within 15 minutes.",
      name: "Your name",
      phone: "Phone number",
      cargo: "Cargo information",
      cargoPlaceholder: "Cargo type, weight, country of origin...",
      submit: "Confirm assessment",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successText: "Your request has been received. We will contact you shortly.",
      errorText: "Something went wrong. Please try again or contact us by phone.",
      orCall: "Or call us directly",
      telegram: "Message on Telegram",
      required: "Please enter your name and phone number.",
    },
    footer: {
      desc: "Pearl of Asia is a leading customs brokerage in Uzbekistan. Your cargo is safe with us.",
      quickLinks: "Quick links",
      contacts: "Contacts",
      workTime: "Working hours",
      workTimeValue: "24/7 — non-stop",
      rights: "All rights reserved.",
      license: "Licensed Customs Operator #0042",
    },
  },
};

export const CONTACT = {
  phone: "+998 (33) 293 20 06",
  phoneHref: "tel:+998332932006",
  telegram: "@gsmprogrammer1",
  telegramHref: "https://t.me/gsmprogrammer1",
};
