import type { SiteContent } from "./types";

// 中文 copy.
// Sourced directly from the founder's own Chinese answers in the Questionnaire
// where available (company intro, tagline, founder story, USPs, services,
// guarantees). Marketing-polished lines that only existed in English in the
// Copywriting Guide (hero headline, testimonials, some CTAs) were translated
// here for a usable preview — these are marked in CONTENT-NOTES and should be
// professionally proofread before launch.
export const zh: SiteContent = {
  langTag: "zh",

  brand: {
    name: "Vika Design Lab",
    tagline: "为家而设计，为生活而思考。每一个细节，都为了让居住更舒适、更安心。",
  },

  nav: {
    home: "首页",
    about: "关于我们",
    services: "服务内容",
    portfolio: "项目展示",
    recruitment: "招聘信息",
    contact: "联系我们",
  },

  common: {
    comingSoon: "即将认证",
    designSwitchLabel: "设计",
    skipToContent: "跳至主要内容",
    whatsappTooltip: "通过 WhatsApp 联系我们",
    whatsappPrefill: "您好 Vika Design Lab！我想进一步了解你们的装修服务。",
  },

  home: {
    heroEyebrow: "新加坡室内设计与装修",
    heroHeadline: "为家而设计，为生活而思考。每一个细节，都为了让居住更舒适、更安心。",
    heroSub:
      "工程延期超过一个月，全额退款保障。承诺写入合约，让每一次装修更安心。",
    cta: { primary: "预约免费咨询", secondary: "查看设计作品" },
    stats: [
      { value: "400+", label: "已完成住宅" },
      { value: "5", label: "深耕新加坡（年）" },
      { value: "5 年", label: "施工保修" },
    ],
    intro: {
      heading: "为你真实的生活方式而设计",
      body: [
        "家，不只是视觉上的美感，更应该贴近您的生活方式。过去五年，我们完成了超过 400 个住宅项目，协助新加坡的组屋、公寓及有地住宅屋主，将空荡的空间打造成为真正适合生活、值得长期居住的家。",
        "每个项目均由两位专属设计师共同负责；每一项工期承诺，也都会清楚写入合约，以行动兑现承诺。",
      ],
    },
    usp: {
      eyebrow: "服务优势",
      heading: "为什么业主选择 Vika Design Lab？",
      sub: "六个原因，让越来越多新加坡屋主选择 Vika，并愿意推荐给身边的人。",
      cards: [
        {
          icon: "shield",
          title: "逾期一个月以上｜全额退款承诺",
          body: "若工程延期超过一个月，可依合约申请全额退款。所有承诺均明确写入合约，不只是口头保证。",
        },
        {
          icon: "users",
          title: "双设计师联合打造",
          body: "每个项目由两位专属设计师共同负责，确保沟通顺畅、设计延续，并降低因人员变动影响项目进度。",
        },
        {
          icon: "cube",
          title: "3D 全景预览未来之家",
          body: "在动工前，您可透过完整 3D 设计体验，提前感受未来家的空间与细节。",
        },
        {
          icon: "clock",
          title: "7 日内完成报价方案",
          body: "多数项目可于首次沟通后一周内收到详细报价与预算拆解。",
        },
        {
          icon: "tag",
          title: "控制预算，坚持品质",
          body: "合理预算，不妥协设计品质。我们相信，好设计不一定代表高昂成本。",
        },
        {
          icon: "badge",
          title: "最长 5 年施工保障",
          body: "提供 5 年施工保修服务，让您入住后依然安心；若出现施工相关问题，我们持续提供支持。",
        },
      ],
    },
    servicesOverview: {
      heading: "你的家所需要的一切，一站搞定",
      tiles: [
        { title: "室内设计", desc: "空间规划、设计概念发展与材料搭配，打造符合生活方式的理想居所。" },
        { title: "全屋装修工程", desc: "涵盖木工、电工、水电、泥作与油漆工程，提供一站式整合服务。" },
        { title: "3D 全景预览", desc: "动工前，提前走进未来的家，更直观感受空间与细节。" },
        { title: "BTO 与转售房装修", desc: "为新组屋与二手住宅提供量身定制的一站式装修方案。" },
        {
          title: "特色空间设计",
          desc: "涵盖宠物友好住宅、儿童成长空间与智能家居整合设计。",
        },
      ],
      cta: "查看全部服务",
    },
    portfolioPreview: {
      eyebrow: "精选作品",
      heading: "我们打造过的真实居住空间。",
      sub: "从新加坡各地的组屋、公寓到有地住宅，每一个作品都围绕居住者的生活方式而设计，让空间真正成为家的延伸。",
      cta: "查看完整作品集",
    },
    testimonials: {
      eyebrow: "客户评价",
      heading: "听听屋主怎么说",
      sub: "这些分享，来自入住后的真实反馈。",
      items: [
        {
          quote:
            "听过不少装修经历后，我们原本对整个过程有些顾虑。Vika 团队不仅按计划完成工程，也持续主动更新进度，让整个过程比想象中安心许多。最终呈现出来的家，也比我们期待的更适合日常生活。",
          author: "Lim 一家",
          meta: "二手组屋，实龙岗",
        },
        {
          quote:
            "平时工作忙，没有时间一直跟进装修进度。Vika 团队从设计到施工都安排得很清楚，无论沟通、材料还是施工品质，都让人放心。",
          author: "陈先生",
          meta: "公寓，碧山",
        },
        {
          quote:
            "我们原本担心装修过程太复杂，也怕沟通上有落差。整个过程中，团队一直很有耐心地说明每个决定，从不给压力。最后完成的空间，不只是漂亮，更让我们真正享受待在家的时间。",
          author: "黄女士",
          meta: "二手组屋，淡滨尼",
        },
      ],
    },
    partners: {
      eyebrow: "合作品牌",
      heading: "值得信赖的合作伙伴",
      sub: "我们与经过筛选的供应商及知名品牌长期合作。从材料、设备到饰面细节，每一项选择都经过严格评估，确保品质、美感与耐用性兼备。",
    },
    trust: {
      heading: "已注册、获认证、有保障，让您安心。",
      badges: [
        { name: "Qanvast Supertrust 伙伴", note: "项目保险最高 5 万新元" },
        { name: "RCMA 认证", note: "认证中", comingSoon: true },
        { name: "CaseTrust Singapore", note: "认证中", comingSoon: true },
        { name: "BizSafe 认证", note: "认证中", comingSoon: true },
        { name: "HDB 装修执照", note: "申请中", comingSoon: true },
      ],
    },
  },

  about: {
    title: "为什么选择 Vika Design Lab?",
    subtitle:
      "Vika Design Lab 的成立，源于一个简单的想法——新加坡的屋主，值得拥有更透明、更负责、更安心的装修体验。",
    storyLabel: "我们的故事",
    story: [
      "只有一名设计师，多年的行业积累，默默目睹同样的现象一再上演：屋主满怀信任地付了定金，却只能漫长等待，毫无进展。",
      "全额退款承诺由此而来——不是营销口号，而是写进合约的承诺。若因我方原因导致工程延迟超过一个月，你将获得全额退款。",
      "五年、超过 400 个家之后，我们建立了一个屋主愿意推荐给家人与朋友的品牌——因为我们兑现了自己的承诺。",
    ],
    founderQuote: {
      quote:
        "这代表我们愿意对每一个承诺负责，也相信好的设计，应该建立在信任之上。",
      author: "Dion，Vika Design Lab 创办人",
    },
    missionLabel: "我们的使命",
    mission:
      "以合理且透明的预算，提供高品质的室内设计服务，让更多屋主拥有理想中的家，同时坚持对材料、施工与服务品质不妥协。",
    visionLabel: "我们的愿景",
    vision:
      "成为新加坡最值得信赖的室内设计品牌——当屋主想到推荐给家人与朋友时，第一个想起的名字。",
    process: {
      heading: "每一份承诺，都有完善流程支撑",
      body: [
        "准时交付，不靠运气，而来自清晰的项目管理、定期现场监督，以及施工期间持续透明的沟通。",
        "每个项目皆由专属团队负责跟进，从现场巡查、工程协调到进度管理，确保每个阶段顺利推进。若项目出现调整或变动，我们也会主动沟通，及时说明情况并提供明确方案，让您全程安心掌握进度。",
        "我们以如期交付为目标，并通过完善的项目管理与持续沟通推进每个阶段。若工程安排出现调整，我们会提前说明情况，并同步明确的后续安排，而不是让您被动等待。",
      ],
    },
    designers: {
      heading: "认识我们的设计师",
      intro:
        "关怀、细心与耐心，不只是服务理念，而是贯穿每个项目的工作方式。从第一次沟通、设计规划，到施工执行与最终交付，我们始终以透明沟通与细致服务陪伴每一位屋主完成理想中的家。",
      team: [
        { name: "Dion Yeoh", role: "首席设计师" },
        { name: "Zheng Li Yeoh", role: "高级设计师" },
        { name: "Edward Kong", role: "高级设计师" },
        { name: "Luke", role: "设计师" },
      ],
    },
  },

  services: {
    title: "服务内容",
    subtitle:
      "从设计到交付，一个团队，全程负责。空间设计、施工执行、3D 空间体验与装修方案整合，以一份合约完成整个家的规划与实现。",
    coreEyebrow: "我们的服务",
    coreHeading: "四大服务，满足不同空间需求。",
    coreSub:
      "无论是新房装修、旧屋翻新，或希望先了解预算范围，我们都提供清晰且完整的服务方案。",
    core: [
      {
        icon: "home",
        title: "室内设计",
        body: "设计，从理解生活开始。我们从居住习惯出发——收纳需求、生活节奏、宠物、居家办公等，让空间真正贴近日常，而不是让生活迁就设计。",
        includedLabel: "包含内容",
        included: [
          "初步咨询与需求了解",
          "设计概念与风格提案",
          "空间规划与动线配置",
          "材料与饰面建议",
          "完整 3D 设计体验",
        ],
      },
      {
        icon: "shield",
        title: "全屋装修工程",
        body: "从施工到交付，由同一团队负责。工程统一管理，由专属团队协调施工与进度，让过程更透明、更安心。",
        includedLabel: "涵盖工程",
        included: [
          "木工工程",
          "电力与照明规划",
          "水电工程",
          "地墙铺贴工程",
          "油漆与饰面工程",
          "修整与验收处理",
        ],
      },
      {
        icon: "tag",
        title: "装修方案",
        body: "更清晰地规划预算与范围。将常见装修需求整合成明确方案，让屋主在正式开始前，更容易掌握整体投入。",
        includedLabel: "可选方案",
        included: [
          "BTO 全屋装修",
          "转售组屋翻新",
          "局部空间改造",
          "公寓装修方案",
        ],
      },
      {
        icon: "cube",
        title: "3D 全景预览",
        body: "在动工前，看见未来的家。透过完整 3D 呈现，更直观理解空间比例、材质与生活情境。",
        includedLabel: "为什么重要",
        included: [
          "提前发现空间问题",
          "确认材料与配色方向",
          "减少施工调整",
          "提升决策效率",
        ],
      },
    ],
    specialityEyebrow: "特色服务",
    specialityHeading: "针对不同生活方式打造空间。",
    speciality: [
      {
        icon: "paw",
        title: "宠物友好设计",
        body: "以宠物真实生活习惯为出发点，将耐用材质、内建猫爬架与活动走道自然融入空间设计，让人与宠物共享舒适居家，而非后期拼凑。",
      },
      {
        icon: "star",
        title: "儿童成长空间规划",
        body: "根据孩子的兴趣与成长需求打造专属空间，在满足当下喜好的同时，预留未来调整的弹性，减少日后大幅翻新。",
      },
      {
        icon: "bolt",
        title: "智能家居整合",
        body: "灯光、窗帘与家居控制系统从设计阶段一体规划，让科技自然融入生活，而非装修完成后再额外加装。",
      },
      {
        icon: "key",
        title: "单房精致改造",
        body: "为出租房、主人房或单一空间提供高品质升级方案；如有搬迁需求，也可规划后续恢复方案。",
      },
    ],
    materialsEyebrow: "材料品质",
    materials: {
      heading: "我们使用的材料。",
      sub: "选材标准不仅关注美感，更重视耐用性、空气品质与长期价值。",
      body: [
        "所有木工均采用低甲醛板材，入住后室内空气质量更健康。如有需要，我们也可提供铝制橱柜升级，耐用性远胜传统木材。",
        "部分产品附有厂商保修，从 10 年到终身不等。我们的施工提供 5 年保修——五年内出现问题，我们负责修复。",
      ],
      specs: [
        {
          icon: "leaf",
          title: "低甲醛板材",
          body: "所有木作项目均采用低甲醛板材，让居住环境从入住第一天开始，更安心、更舒适。",
        },
        {
          icon: "badge",
          title: "厂商保修支持",
          body: "精选材料与设备附原厂保修服务，保修年限依产品规格而定，最长可至终身保障。",
        },
        {
          icon: "shield",
          title: "5 年施工保修",
          body: "所有由我们完成的施工项目均享有 5 年施工保修；若出现施工相关问题，我们负责跟进与处理。",
        },
      ],
    },
    pricingEyebrow: "定价方式",
    payment: {
      heading: "透明规划，安心开始。",
      sub: "付款依工程阶段安排，并于合约中清楚列明范围与条款。",
      body: "我们支持信用卡付款——这是许多新加坡装修公司未提供的便利。付款节点与工程阶段挂钩，随工程进度付款。",
      refundQuote:
        "“延期超过一个月，全额退款。” 因我方原因造成的工程延误，保障条款明确写入合约。",
      refundNote:
        "五年来，从未启动。",
      milestones: [
        {
          icon: "users",
          title: "先了解，再报价",
          desc: "没有附带条件，也不急着做决定。",
        },
        {
          icon: "cube",
          title: "先确认，再施工",
          desc: "每个细节看清楚后再开始。",
        },
        {
          icon: "check",
          title: "按阶段安排付款",
          desc: "过程清楚，节奏更安心。",
        },
      ],
    },
    cta: {
      heading: "准备好开始了吗？",
      sub: "告诉我们您的房产情况与需求，我们将在一周内提供详细报价。",
      primary: "预约免费咨询",
      secondary: "查看设计作品",
    },
  },

  portfolio: {
    title: "我们的作品",
    subtitle: "遍布新加坡，超过 400 个真实住宅项目。每一个空间，都围绕生活而设计。",
    filters: ["全部", "组屋", "公寓", "有地住宅"],
    captionPrefix: "项目",
    albumDetailLabels: {
      roomType: "户型",
      size: "面积",
      location: "地点",
      sqftUnit: "平方尺",
    },
    cta: {
      heading: "每一个家，都从一句「我想要这样生活」开始。",
      body: "这里的每一个项目，都始于一次对话。告诉我们你对家的想法，一起开始。",
      primary: "预约免费咨询",
      secondary: "立即咨询",
    },
  },

  contact: {
    title: "聊聊您的理想之家",
    subtitle:
      "无论您已有想法，还是仍在探索，我们都愿意陪您一起规划理想中的家。",
    detailsHeading: "联系我们",
    detailsNote: "我们通常会在 一 个工作日内回复您。",
    labels: {
      phone: "电话",
      whatsapp: "WhatsApp",
      email: "邮箱",
      showroom: "展厅",
      hours: "营业时间",
    },
    hoursValue: "星期一至星期六｜上午 10:00 至晚上 7:00",
    form: {
      heading: "开始规划您的理想之家",
      sub: "留下您的需求，我们将在一个工作日内与您联系，为您提供免费的初步咨询。",
      name: { label: "姓名", placeholder: "请输入您的姓名", required: true },
      phone: {
        label: "联系电话",
        placeholder: "建议填写WhatsApp联系号码",
        required: true,
      },
      email: { label: "电子邮箱", placeholder: "you@example.com" },
      propertyType: {
        label: "房屋类型",
        options: ["二手组屋", "BTO", "公寓", "有地住宅", "其他"],
      },
      budget: {
        label: "预计装修预算",
        options: [
          "2 万新元以下",
          "2 万 – 5 万新元",
          "5 万 – 10 万新元",
          "10 万新元以上",
        ],
      },
      message: {
        label: "简述你的项目",
        placeholder: "房产、时间安排、你的想法……",
      },
      submit: "发送咨询",
      success:
        "谢谢！我们已收到你的咨询，将在一个工作日内回复。若想更快得到答复，欢迎直接 WhatsApp 我们。",
      whatsappCta: "改用 WhatsApp 联系",
      errorRequired: "此栏为必填。",
    },
    reassurance: {
      body: "许多联系我们的客户，在开始装修前都会格外谨慎。有人看过朋友的工程延期数月，也有人经历过付款后项目迟迟没有进展。创立 Vika 的初衷，就是希望带来更透明、更安心的装修体验——清晰明确的合约、分阶段付款机制，以及从项目开始就写入合约的退款保障。整个过程中，我们坚持主动沟通，让您随时掌握项目进度。",
      icons: [
        "工程延期超过一个月，可依合约申请全额退款",
        "提供5年施工质保",
        "Qanvast SuperTrust 保障计划｜项目保险最高保障 50,000 新元",
        "每个项目由两位设计师共同负责",
      ],
    },
    map: {
      heading: "莅临我们的展示厅",
      directions:
        "我们位于实龙岗中心，距离实龙岗地铁站（NEL / CCL）步行可达。旁边的多层停车场提供路边停车。",
    },
  },

  footer: {
    blurb:
      "新加坡室内设计与装修。建立在信任、责任感，以及写进合约的退款承诺之上。",
    navHeading: "浏览",
    contactHeading: "联系方式",
    rights: "Vika Design Lab。版权所有。",
  },

  // 占位内容 — 版面先行搭建，待客户确认职位细节后再补充正式内容。
  recruitment: {
    title: "加入我们",
    subtitle: "我们正在扩编，诚邀室内设计师加入我们的团队。",
    cultureHeading: "为什么加入 Vika",
    culture:
      "我们是一个精简、注重实际执行的团队，从最初的草图到最终交付都亲自跟进。你将直接与创办团队合作，参与新加坡各地真实的住宅项目——不只是制作效果图。",
    viewPositionsLabel: "查看职位空缺",
    positionsEyebrow: "职位空缺",
    positions: [
      {
        title: "室内设计师",
        location: "新加坡",
        intro:
          "我们正在寻找室内设计师加入新加坡团队。具体经验要求将在确认后补充于此。",
        highlightsLabel: "我们期待的特质",
        highlights: [
          "具备住宅室内设计经验（详细要求待确认）",
          "有作品集可供参考",
          "常驻新加坡",
        ],
        applyLabel: "通过 WhatsApp 申请",
        whatsappMessage:
          "您好 Vika Design Lab！我对室内设计师职位感兴趣，想进一步了解详情。",
      },
    ],
    ctaHeading: "没有找到合适的职位？",
    ctaSub: "我们始终欢迎优秀人才主动联系，留言给我们，我们会记住你。",
    ctaPrimary: "联系我们",
    ctaSecondary: "通过 WhatsApp 联系",
    ctaWhatsappMessage: "您好 Vika Design Lab！我想进一步了解你们团队的职业机会。",
  },
};
