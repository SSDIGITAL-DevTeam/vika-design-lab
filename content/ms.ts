import type { SiteContent } from "./types";

// Bahasa Malaysia copy — ditulis untuk konteks & nada tempatan (bukan
// terjemahan literal), merujuk kepada content/en.ts (struktur/makna) dan
// content/zh.ts (nada) sebagai sumber.
export const ms: SiteContent = {
  langTag: "ms",

  brand: {
    name: "Vika Design Lab",
    tagline:
      "Direka untuk Kediaman Anda. Dibina Mengikut Gaya Hidup Anda. Setiap detail diberi perhatian penuh untuk kehidupan yang lebih selesa dan tenang.",
  },

  nav: {
    home: "Laman Utama",
    about: "Tentang Kami",
    services: "Perkhidmatan",
    portfolio: "Portfolio",
    recruitment: "Kerjaya",
    contact: "Hubungi Kami",
  },

  common: {
    comingSoon: "Akan Datang",
    designSwitchLabel: "Reka Bentuk",
    skipToContent: "Langkau ke kandungan",
    whatsappTooltip: "Hubungi kami melalui WhatsApp",
    whatsappPrefill:
      "Hai Vika Design Lab! Saya ingin tahu lebih lanjut tentang perkhidmatan renovasi anda.",
  },

  home: {
    heroEyebrow: "Reka Bentuk Dalaman & Renovasi Singapura",
    heroHeadline: "Direka untuk Kediaman Anda. Dibina Mengikut Gaya Hidup Anda.",
    heroHeadlineSub:
      "Setiap perincian direka demi keselesaan dan ketenangan anda.",
    heroSub:
      "Jika projek anda lewat melebihi sebulan, kami menjamin bayaran balik penuh seperti yang dinyatakan dalam kontrak.",
    cta: { primary: "Tempah Konsultasi Percuma", secondary: "Lihat Portfolio Kami" },
    stats: [
      { value: "400+", label: "Rumah Disiapkan" },
      { value: "5", label: "Tahun di Singapura" },
      { value: "5-Tahun", label: "Waranti Hasil Kerja" },
    ],
    intro: {
      heading: "Direka Untuk Cara Hidup Sebenar Anda",
      body: [
        "Rumah bukan sekadar cantik. Ia direka untuk kehidupan anda. Dengan lebih 400 rumah disiapkan dan pengalaman melebihi 5 tahun, kami mencipta ruang yang indah, selesa, dan praktikal.",
        "Setiap projek dikendalikan oleh dua pereka dalaman, dengan perancangan yang teliti dan komitmen yang jelas sejak awal.",
      ],
    },
    usp: {
      heading: "Keistimewaan Vika",
      sub: "Reka bentuk teliti. Perkhidmatan telus. Renovasi yang diyakini.",
      cards: [
        {
          icon: "shield",
          title: "Jaminan Bayaran Balik Jika Lewat",
          body: "Jika projek anda lewat melebihi sebulan, kami menjamin bayaran balik penuh seperti yang dinyatakan dalam kontrak.",
        },
        {
          icon: "users",
          title: "Dua Pereka Dalaman Berdedikasi",
          body: "Setiap projek dikendalikan oleh dua pereka dalaman bagi memastikan komunikasi yang lancar sepanjang proses renovasi.",
        },
        {
          icon: "cube",
          title: "Pratonton Reka Bentuk 3D",
          body: "Lihat gambaran rumah anda dalam 3D sebelum renovasi bermula.",
        },
        {
          icon: "clock",
          title: "Sebut Harga Terperinci Dalam Seminggu",
          body: "Terima sebut harga yang jelas dan terperinci dalam tempoh seminggu selepas konsultasi anda.",
        },
        {
          icon: "tag",
          title: "Harga yang Berpatutan",
          body: "Harga yang jelas tanpa menjejaskan kualiti atau reka bentuk.",
        },
        {
          icon: "badge",
          title: "Waranti Hasil Kerja 5 Tahun",
          body: "Nikmati ketenangan fikiran dengan waranti hasil kerja selama 5 tahun untuk setiap projek.",
        },
      ],
    },
    servicesOverview: {
      heading: "Semua Keperluan Rumah Anda, Dalam Satu Bumbung",
      tiles: [
        {
          title: "Reka Bentuk Dalaman",
          desc: "Perancangan ruang, konsep reka bentuk, dan pemilihan bahan.",
        },
        {
          title: "Renovasi Menyeluruh",
          desc: "Kerja kayu, elektrik, paip, jubin, dan pengecatan.",
        },
        {
          title: "Visualisasi Reka Bentuk 3D",
          desc: "Lihat rumah anda dalam 3D sebelum renovasi bermula.",
        },
        {
          title: "Renovasi BTO & Rumah Jualan Semula",
          desc: "Penyelesaian renovasi yang disesuaikan untuk rumah BTO dan rumah jualan semula.",
        },
        {
          title: "Ruang Khas",
          desc: "Reka bentuk mesra haiwan peliharaan, bilik kanak-kanak, dan penyelesaian rumah pintar.",
        },
      ],
      cta: "Terokai Perkhidmatan Kami",
    },
    portfolioPreview: {
      eyebrow: "Projek Pilihan",
      sub: "Terokai kediaman yang telah kami reka dengan teliti untuk pemilik rumah di seluruh Singapura.",
      cta: "Lihat Portfolio Kami",
    },
    testimonials: {
      eyebrow: "Testimoni Pelanggan",
      heading: "Pengalaman pemilik rumah yang memilih Vika.",
      sub: "Kisah sebenar daripada pemilik rumah yang mempercayai Vika.",
      items: [
        {
          quote:
            "Kami risau selepas mendengar pelbagai kisah tentang renovasi, tetapi Vika sentiasa memastikan kami mendapat perkembangan terkini dan projek siap mengikut jadual. Hasilnya melebihi jangkaan kami",
          author: "Keluarga Lim",
          meta: "HDB Jualan Semula, Serangoon",
        },
        {
          quote:
            "Vika menguruskan semuanya dari awal hingga siap, menjadikan proses renovasi lebih mudah dan bebas tekanan. Hasil kerjanya melebihi jangkaan kami",
          author: "Encik Chen",
          meta: "Kondominium, Bishan",
        },
        {
          quote:
            "Vika membimbing kami dengan sabar dalam setiap keputusan dan menghasilkan rumah yang kami banggakan",
          author: "Puan Wong",
          meta: "HDB Jualan Semula, Tampines",
        },
      ],
    },
    partners: {
      eyebrow: "Rakan Kongsi Dipercayai",
      heading: "Jenama di sebalik setiap projek",
      sub: "Bahan berkualiti daripada jenama dan pembekal yang dipercayai.",
    },
    trust: {
      heading: "Berdaftar, bertauliah, dan diinsuranskan untuk ketenangan fikiran anda.",
      badges: [
        {
          name: "Qanvast Supertrust Partner",
          note: "Insurans projek sehingga SGD 50,000",
        },
        { name: "RCMA Certified", note: "Dalam proses", comingSoon: true },
        { name: "CaseTrust Singapore", note: "Dalam proses", comingSoon: true },
        { name: "BizSafe Certified", note: "Dalam proses", comingSoon: true },
        {
          name: "HDB Renovation Licensed",
          note: "Dalam proses",
          comingSoon: true,
        },
      ],
    },
  },

  about: {
    title: "Mengapa Memilih Vika Design Lab?",
    subtitle:
      "Kami percaya pengalaman renovasi yang baik bermula dengan ketelusan, komitmen, dan kepercayaan.",
    storyLabel: "Kisah Kami",
    storyHeading: "Permulaan Vika",
    story: [
      "Vika bermula daripada pengalaman seorang pereka dalaman yang berulang kali melihat pemilik rumah meletakkan kepercayaan mereka kepada kontraktor, membayar deposit, namun terpaksa menunggu berbulan-bulan tanpa perkembangan yang jelas.",
      "Daripada pengalaman itulah lahirnya jaminan bayaran balik penuh kami. Bukan sekadar janji pemasaran, tetapi komitmen bertulis dalam setiap kontrak. Jika renovasi anda lewat melebihi sebulan disebabkan oleh kami, bayaran balik penuh akan diberikan.",
      "Hari ini, dengan pengalaman melebihi lima tahun dan lebih 400 rumah disiapkan, Vika menjadi pilihan ramai pemilik rumah yang yakin mengesyorkan kami kepada keluarga dan rakan-rakan mereka kerana kami sentiasa menunaikan setiap janji.",
    ],
    founderQuote: {
      quote:
        "Ia mencerminkan komitmen kami untuk menunaikan setiap janji serta kepercayaan bahawa reka bentuk yang baik bermula dengan kepercayaan.",
      author: "Dion, Pengasas, Vika Design Lab",
    },
    missionLabel: "Misi Kami",
    mission:
      "Membawa reka bentuk dalaman berkualiti kepada lebih ramai pemilik rumah melalui harga yang adil, telus, dan tanpa kompromi terhadap kualiti.",
    visionLabel: "Visi Kami",
    vision:
      "Menjadi jenama reka bentuk dalaman yang paling dipercayai di Singapura — pilihan yang disyorkan oleh pemilik rumah kepada keluarga dan rakan-rakan mereka.",
    processEyebrow: "Proses Kami",
    process: {
      heading: "Setiap Janji Disokong oleh Proses yang Terbukti",
      body: [
        "Setiap projek bermula dengan perancangan yang rapi, komunikasi yang telus, dan penyelarasan yang teratur.",
        "Daripada pemeriksaan tapak hingga penyelarasan kontraktor dan pemantauan kemajuan, setiap langkah diurus dengan teliti agar projek berjalan lancar dan anda sentiasa dimaklumkan.",
        "Perancangan yang teliti dan komunikasi yang telus memastikan setiap projek berjalan mengikut jadual. Sekiranya berlaku sebarang perubahan, anda akan dimaklumkan dengan segera.",
      ],
    },
    delivery: {
      value: "1",
      unit: "BULAN",
      label: "Sasaran Tempoh Siap",
      note: "Lewat melebihi sebulan? Bayaran balik penuh, dijamin secara bertulis.",
    },
    designersEyebrow: "Pasukan Kami",
    designers: {
      heading: "Kenali Pereka Dalaman Kami",
      intro:
        "Kenali individu yang membimbing setiap projek, dari pertemuan pertama hingga penyerahan akhir.",
      joinLabel: "Sertai Kami",
      team: [
        { name: "Dion Yeoh", role: "Pereka Bentuk Utama" },
        { name: "Zheng Li Yeoh", role: "Pereka Bentuk Kanan" },
        { name: "Edward Kong", role: "Pereka Bentuk Kanan" },
        { name: "Luke", role: "Pereka Bentuk" },
      ],
    },
  },

  services: {
    title: "Perkhidmatan Kami",
    subtitle: "Daripada reka bentuk hingga penyerahan, satu pasukan membimbing anda di setiap peringkat.",
    coreEyebrow: "Apa Yang Kami Tawarkan",
    coreHeading: "Semua yang anda perlukan, daripada reka bentuk hingga penyerahan.",
    core: [
      {
        icon: "home",
        title: "Reka Bentuk Dalaman",
        body: "Direka mengikut gaya hidup anda, supaya setiap ruang terasa indah, selesa, dan praktikal.",
        includedLabel: "Termasuk",
        included: [
          "Konsultasi gaya hidup",
          "Konsep dan moodboard",
          "Perancangan ruang",
          "Pemilihan bahan",
          "Visualisasi 3D penuh",
        ],
      },
      {
        icon: "shield",
        title: "Renovasi Menyeluruh",
        body: "Satu pasukan menguruskan keseluruhan projek, daripada pembinaan hingga penyerahan.",
        includedLabel: "Termasuk",
        included: [
          "Kerja kayu",
          "Pendawaian elektrik",
          "Kerja paip",
          "Jubin",
          "Pengecatan",
          "Kerja pembaikan",
        ],
      },
      {
        icon: "tag",
        title: "Pakej Renovasi",
        body: "Pakej yang jelas dan fleksibel untuk membantu anda merancang bajet dengan yakin.",
        includedLabel: "Pilihan Pakej",
        included: [
          "Rumah BTO",
          "HDB Jualan Semula",
          "Renovasi Separa (Dapur atau Bilik Air)",
          "Kondominium",
        ],
      },
      {
        icon: "cube",
        title: "Visualisasi 3D",
        body: "Lihat rumah anda dalam 3D sebelum renovasi bermula, supaya setiap keputusan dibuat dengan lebih yakin.",
        includedLabel: "Manfaat",
        included: [
          "Kenal pasti susun atur",
          "Kurangkan perubahan",
          "Pilih bahan dengan yakin",
          "Buat keputusan lebih awal",
        ],
      },
    ],
    work: {
      eyebrow: "Projek Kami",
      heading: "Kediaman yang direka penuh teliti di seluruh Singapura",
      sub: "Setiap ruang direka mengikut gaya hidup dan keperluan pemiliknya.",
    },
    specialityEyebrow:"Perkhidmatan Istimewa",
    specialityHeading: "Direka mengikut gaya hidup anda.",
    speciality: [
      {
        icon: "paw",
        title: "Reka Bentuk Mesra Haiwan Peliharaan",
        body: "Direka untuk kehidupan bersama haiwan peliharaan, dengan kemasan tahan lasak dan penyelesaian yang praktikal.",
      },
      {
        icon: "star",
        title: "Bilik Bertema Kanak-Kanak",
        body: "Ruang yang direka mengikut minat anak anda hari ini, dengan fleksibiliti untuk masa hadapan.",
      },
      {
        icon: "bolt",
        title: "Integrasi Rumah Pintar",
        body: "Lampu pintar, langsir automatik, dan sistem kawalan rumah yang dirancang sejak awal untuk pengalaman yang lebih lancar.",
      },
      {
        icon: "key",
        title: "Renovasi Premium Ruang Tunggal",
        body: "Naik taraf premium untuk satu ruang, direka dengan teliti agar mudah disesuaikan mengikut keperluan masa hadapan.",
      },
    ],
    materialsEyebrow: "Bahan",
    materials: {
      heading: "Dibina untuk kualiti yang berkekalan.",
      sub: "Bahan dipilih dengan teliti untuk keselesaan, ketahanan, dan nilai jangka panjang.",
      body: [
        "Kami menggunakan papan rendah formaldehid untuk semua kerja kayu. Kualiti udara dalaman yang lebih baik sejak hari pertama. Untuk pelanggan yang mahukannya, naik taraf kerja kayu aluminium turut disediakan — ia jauh lebih tahan lasak berbanding kayu konvensional.",
        "Produk terpilih disertakan waranti pengeluar dari 10 tahun hingga seumur hidup. Kerja kami disertakan waranti 5 tahun — jika sesuatu yang kami bina rosak dalam tempoh lima tahun, kami akan membaikinya.",
      ],
      specs: [
        {
          icon: "leaf",
          title: "Papan Rendah Formaldehid",
          body: "Digunakan dalam setiap kerja kayu untuk mewujudkan ruang dalaman yang lebih sihat sejak hari pertama anda berpindah masuk.",
        },
        {
          icon: "badge",
          title: "Waranti Pengeluar Jangka Panjang",
          body: "Produk terpilih disokong oleh waranti pengeluar sehingga 10 tahun atau seumur hidup.",
        },
        {
          icon: "shield",
          title: "Waranti Kerja 5 Tahun",
          body: "Hasil kerja yang berkualiti, disokong oleh waranti kerja selama 5 tahun.",
        },
      ],
    },
    pricingEyebrow: "Harga",
    payment: {
      heading: "Harga yang telus. Tanpa kejutan.",
      sub: "Skop kerja, jadual pembayaran, dan setiap peringkat projek diperincikan dengan jelas dalam kontrak anda.",
      body: "Kami menerima pembayaran kad kredit — kemudahan yang tidak ditawarkan oleh kebanyakan syarikat renovasi di Singapura. Bayaran dikaitkan dengan peringkat projek mengikut kemajuan kerja.",
      refundQuote:
        "Jika projek anda lewat melebihi sebulan akibat kelewatan di pihak kami, anda akan menerima bayaran balik penuh — dijamin secara bertulis.",
      refundNote: "Malah, sepanjang 5 tahun, jaminan ini tidak pernah perlu digunakan.",
      milestones: [
        {
          icon: "users",
          title: "Konsultasi Percuma",
          desc: "Kami memahami keperluan anda sebelum menyediakan sebut harga yang jelas dan terperinci — tanpa sebarang obligasi.",
        },
        {
          icon: "cube",
          title: "Persetujuan Reka Bentuk",
          desc: "Kerja hanya dimulakan selepas setiap perincian disemak dan dipersetujui.",
        },
        {
          icon: "check",
          title: "Bayar Mengikut Kemajuan",
          desc: "Bayaran dibuat mengikut peringkat projek yang dipersetujui, supaya anda sentiasa jelas tentang setiap langkah.",
        },
      ],
    },
    cta: {
      heading: "Bersedia untuk bermula?",
      sub: "Kongsi rumah dan visi anda bersama kami. Sebut harga terperinci akan disediakan dalam tempoh seminggu.",
      primary: "Tempah Konsultasi Percuma",
      secondary: "Lihat Portfolio Kami",
    },
  },

  portfolio: {
    title: "Projek Kami",
    subtitle: "Lebih 400 kediaman di seluruh Singapura. Direka mengikut gaya hidup setiap pemilik rumah.",
    filters: ["Semua", "HDB", "Kondominium", "Rumah Bertanah"],
    captionPrefix: "Projek",
    albumDetailLabels: {
      roomType: "Jenis Bilik",
      size: "Saiz",
      location: "Lokasi",
      sqftUnit: "kps",
    },
    cta: {
      heading: "Setiap Rumah Bermula Dengan Sebuah Impian",
      body: "Ceritakan bagaimana anda membayangkan rumah impian anda. Selebihnya, biar kami uruskan.",
      primary: "Tempah Konsultasi Percuma",
      secondary: "Hubungi Kami",
    },
  },

  contact: {
    title: "Mari Bincangkan Rumah Impian Anda",
    subtitle: "Sama ada anda sudah mempunyai gambaran yang jelas atau baru mula merancang, kami sedia membantu.",
    detailsHeading: "Hubungi Kami",
    detailsNote: "Kami biasanya membalas pertanyaan dalam masa satu hari bekerja.",
    labels: {
      phone: "WhatsApp",
      whatsapp: "WhatsApp",
      email: "E-mel",
      showroom: "Bilik Pameran",
      hours: "Waktu Operasi",
    },
    hoursValue: "Isnin – Sabtu, 10 pagi – 7 malam",
    form: {
      heading: "Mula Merancang Rumah Impian Anda",
      sub: "Ceritakan tentang rumah impian anda, dan kami akan menghubungi anda dalam masa satu hari bekerja.",
      name: { label: "Nama Penuh", placeholder: "Nama anda", required: true },
      phone: {
        label: "Nombor Telefon",
        placeholder: "Lebih suka WhatsApp",
        required: true,
      },
      email: { label: "Alamat E-mel", placeholder: "you@example.com" },
      propertyType: {
        label: "Jenis Hartanah",
        options: ["HDB Jualan Semula", "BTO", "Kondo", "Landed", "Lain-lain"],
      },
      budget: {
        label: "Bajet Renovasi",
        options: [
          "Bawah $20K",
          "$20K – $50K",
          "$50K – $100K",
          "$100K ke atas",
        ],
      },
      message: {
        label: "Ceritakan Tentang Projek Anda",
        placeholder: "Hartanah, garis masa, apa yang anda fikirkan…",
      },
      submit: "Hubungi Vika",
      success:
        "Terima kasih! Kami telah menerima pertanyaan anda dan akan membalas dalam masa satu hari bekerja. Jika anda mahukan jawapan lebih pantas, WhatsApp kami terus.",
      whatsappCta: "WhatsApp kami sebaliknya",
      errorRequired: "Ruangan ini wajib diisi.",
    },
    reassurance: {
      body: [
        "Kebanyakan pemilik rumah berkongsi kebimbangan yang sama —",
        "Itulah sebabnya setiap projek disokong oleh kontrak yang jelas, jadual pembayaran yang telus, dan jaminan bayaran balik penuh.",
      ],
      highlight: "bolehkah mereka mempercayai renovasi kepada kami?",
      icons: [
        "Bayaran Balik Penuh Jika Projek Lewat Melebihi Sebulan",
        "Waranti Kerja Selama 5 Tahun",
        "Perlindungan Qanvast SuperTrust sehingga SGD 50,000",
        "Dua Pereka Dalaman Berdedikasi untuk Setiap Projek",
      ],
    },
    map: {
      heading: "Lawati Bilik Pameran Kami",
      directions:
        "Terletak di Serangoon Central, hanya lima minit dari MRT Serangoon (NEL / CCL), dengan tempat letak kereta berdekatan.",
    },
  },

  footer: {
    blurb:
      "Rakan reka bentuk dalaman dan renovasi yang dipercayai di Singapura, dengan komitmen yang jelas dan jaminan bayaran balik bertulis.",
    navHeading: "Terokai",
    contactHeading: "Hubungi Kami",
    rights: "Vika Design Lab. Hak cipta terpelihara.",
  },

  // Kandungan sementara — reka letak sudah sedia menunggu butiran jawatan disahkan oleh klien.
  recruitment: {
    title: "Sertai Kami",
    subtitle: "Berkembang bersama Vika. Cipta ruang yang bermakna.",
    cultureHeading: "Mengapa Sertai Vika?",
    culture:
      "Di Vika, anda akan bekerja rapat dengan pengasas kami dan memainkan peranan dalam merealisasikan kediaman yang direka dengan penuh teliti — daripada konsep hingga penyerahan.",
    viewPositionsLabel: "Lihat Kekosongan Jawatan",
    positionsEyebrow: "Kekosongan Jawatan",
    positions: [
      {
        title: "Pereka Dalaman",
        location: "Singapura",
        intro:
          "Kami sedang mencari Pereka Dalaman untuk menyertai Vika dan menghasilkan kediaman yang direka dengan penuh teliti.",
        highlightsLabel: "Kelayakan",
        highlights: [
          "Pengalaman dalam reka bentuk dalaman kediaman",
          "Portfolio yang mempamerkan hasil kerja",
          "Berpangkalan di Singapura",
        ],
        applyLabel: "Mohon Melalui WhatsApp",
        whatsappMessage:
          "Hai Vika Design Lab! Saya berminat dengan jawatan Pereka Bentuk Dalaman dan ingin tahu lebih lanjut.",
      },
    ],
    ctaHeading: "Tidak jumpa jawatan yang sesuai?",
    ctaSub:
      "Kami sentiasa terbuka kepada bakat baharu. Hantar mesej kepada kami, dan kami akan menghubungi anda apabila peluang yang sesuai tersedia.",
    ctaPrimary: "Hubungi Kami",
    ctaSecondary: "Hantar Mesej WhatsApp",
    ctaWhatsappMessage:
      "Hai Vika Design Lab! Saya ingin tahu tentang peluang kerjaya bersama pasukan anda.",
  },
};
