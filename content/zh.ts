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
    tagline: "为家设计，用心、细心、耐心，让客户安心。",
  },

  nav: {
    home: "首页",
    about: "关于我们",
    services: "服务内容",
    portfolio: "项目展示",
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
    heroHeadline: "为家设计，用心、细心、耐心，让客户安心。",
    heroSub:
      "Vika Design Lab 是新加坡唯一一家承诺工程延迟超过一个月将全额退款（写入合约）的室内设计公司。",
    cta: { primary: "免费索取报价", secondary: "查看作品" },
    stats: [
      { value: "400+", label: "已完成住宅" },
      { value: "5", label: "深耕新加坡（年）" },
      { value: "5 年", label: "施工保修" },
    ],
    intro: {
      heading: "为你真实的生活方式而设计",
      body: [
        "家应该体现你实际的生活方式，而不只是照片里好看。在过去五年、超过 400 个完成项目中，我们帮助新加坡的组屋屋主、公寓住户与有地住宅业主，把空荡的空间打造成真正住起来舒适的家。",
        "每个项目都配有两位专属设计师；每一个工期承诺，我们都写进合约、说到做到。",
      ],
    },
    usp: {
      eyebrow: "服务优势",
      heading: "Vika Design Lab 的独特之处",
      sub: "六个理由，说明为何新加坡屋主持续选择 Vika，以及为何他们会推荐给朋友。",
      cards: [
        {
          icon: "shield",
          title: "延迟超过一个月，全额退款",
          body: "工程若延迟超过一个月，您可获得全额退款，写进合约，绝非空话。至今我们从未需要动用这项承诺。",
        },
        {
          icon: "users",
          title: "每个项目两位设计师",
          body: "每个项目都安排两位设计师，工程从一开始就有连续性保障，不会因为单一人员问题而停滞。",
        },
        {
          icon: "cube",
          title: "3D 全景设计体验",
          body: "在动工之前，您就能透过完整的 3D 体验先走进未来的家。大多数新加坡设计公司在设计阶段不提供这项服务。",
        },
        {
          icon: "clock",
          title: "一周内出报价",
          body: "大多数客户在首次见面后一周内，就能收到详细的分项报价。",
        },
        {
          icon: "tag",
          title: "实惠而不妥协",
          body: "我们的价格低于新加坡市场平均水平。好设计不一定意味着高价格。",
        },
        {
          icon: "badge",
          title: "5 年施工保修",
          body: "每一颗钉子、每一片瓷砖、每一扇柜门，都有五年保修。出了问题，我们回来修。",
        },
      ],
    },
    servicesOverview: {
      heading: "你的家所需要的一切，一站搞定",
      tiles: [
        { title: "室内设计", desc: "空间规划、概念发展、材料挑选。" },
        { title: "全屋装修工程", desc: "木工、电工、水管、瓷砖、油漆。" },
        { title: "3D 设计可视化", desc: "动工前先走进你的家。" },
        { title: "BTO 与二手房配套", desc: "为新旧组屋量身定制的整套方案。" },
        {
          title: "特别空间设计",
          desc: "宠物友好住宅、儿童主题房、智能家居整合。",
        },
      ],
      cta: "查看全部服务",
    },
    portfolioPreview: {
      eyebrow: "精选作品",
      heading: "我们在新加坡改造过的家。",
      sub: "新加坡各地的组屋、公寓与有地住宅。每一个都为居住其中的人而建。",
      cta: "查看完整作品集",
    },
    testimonials: {
      eyebrow: "客户评价",
      heading: "屋主们怎么说",
      sub: "屋主入住后告诉我们的话。没有剧本，没有酬劳。",
      items: [
        {
          quote:
            "听了不少新加坡装修惊魂记后，我们一度很担心。Vika 团队不但准时完工，还在每个环节持续向我们更新进度。我们的组屋焕然一新。",
          author: "Lim 一家",
          meta: "二手组屋，实龙岗",
        },
        {
          quote:
            "身为生意人，我没有时间盯装修。Vika 团队全程负责到底，材料与施工的品质都超出我在这个价位的预期。",
          author: "陈先生",
          meta: "公寓，碧山",
        },
        {
          quote:
            "我们已经六十多岁，原本担心被误导。Vika 很有耐心地把每件事解释清楚，从不催促我们，最终的成果是一个我们乐于向孙子孙女展示的家。",
          author: "黄女士",
          meta: "二手组屋，淡滨尼",
        },
      ],
    },
    partners: {
      eyebrow: "合作品牌",
      heading: "每个项目背后的品牌。",
      sub: "我们与认证供应商及知名品牌合作。每一种材料、装置与饰面，在进入你的家之前都经过质量把关。",
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
    title: "为什么我们的装修不一样",
    subtitle:
      "Vika Design Lab 建立在一个信念上：新加坡的屋主，值得拥有一家真正说到做到的室内设计公司。",
    storyLabel: "我们的故事",
    story: [
      "在 Vika Design Lab 成立之前，只有一名设计师——她在行业里耕耘多年，与承包商和供应商建立了良好关系，完成一个又一个项目，同时也默默看着同样的问题在装修行业一再上演：屋主满怀信任地付了钱，最后却只能苦苦等待。",
      "真正让一切改变的，是一则关于圣淘沙装修项目的新闻报道。屋主支付了大笔费用，工程却几个月毫无进展。这并非个别事件，而是一种普遍现象，也点出了大多数公司宁愿回避的市场缺口：责任感。",
      "这正是全额退款承诺存在的原因。不是营销噱头，而是一种态度。Vika Design Lab 愿意用真金白银为自己的承诺负责。若因我方原因导致工程延迟超过一个月，您将获得全额退款。白纸黑字，写进合约。",
      "Vika Design Lab 是从零开始的。没有捷径，也没有现成的客户名单，只有清晰的愿景，以及一步一步把它建立起来的努力——学习公司经营、修读市场营销课程，从一名设计师成长为一位公司创办人。",
      "五年、超过 400 个家之后，这门生意已不只是一家装修公司，而是一个屋主愿意推荐给家人、父母与朋友的品牌——因为它兑现了自己的承诺。",
    ],
    founderQuote: {
      quote:
        "这代表我对自己团队与施工安排的信心。它不只是一句营销口号。",
      author: "Vika，Vika Design Lab 创办人",
    },
    missionLabel: "我们的使命",
    mission:
      "以低于新加坡市场平均的价格，让优质室内设计真正触手可及，同时绝不在材料、施工与服务体验上妥协。",
    visionLabel: "我们的愿景",
    vision:
      "成为新加坡最值得信赖的室内设计公司：屋主愿意推荐给他们最在乎之人的那个名字。",
    process: {
      heading: "我们的承诺，有一整套流程支撑",
      body: [
        "准时交付靠的是现场监督、与承包商定期协调，以及整个装修过程中清晰的沟通。不是靠运气。",
        "每个项目都有专属团队定期到现场检查施工、跟进进度。出现延误时，我们第一时间告知，解释原因，并给出明确的解决方案。",
        "我们的目标是如期完成每个项目。偶尔会有轻微延误，但您一定会提前知道，而不是事后才被告知。",
      ],
    },
    designers: {
      heading: "认识我们的设计师",
      intro:
        "关怀、细心与耐心不是口号，而是每个项目的实际运作方式，从第一次会面到最终交付，始终如一。",
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
      "设计、施工、动工前完整 3D 预览。一份合约，一个团队，全程负责到底。",
    coreEyebrow: "我们的服务",
    coreHeading: "四项服务，一个团队。",
    coreSub:
      "室内设计、全屋装修、3D 可视化与装修配套。满足不同预算与起点的需求。",
    core: [
      {
        icon: "home",
        title: "室内设计",
        body: "我们从了解你家里的实际生活方式开始——收纳习惯、日常作息、是否有宠物或需要在家办公的家人。设计从这些出发，而不是套用模板来迁就你的空间。",
        includedLabel: "包含内容",
        included: [
          "初步咨询与生活方式了解",
          "概念发展与情绪板",
          "空间规划与布局",
          "材料与饰面挑选",
          "完整 3D 设计走查",
        ],
      },
      {
        icon: "shield",
        title: "全屋装修工程",
        body: "整个工程在一份合约下运作，由我们的团队全程监督。木工、电工、水管、瓷砖、油漆：一个对接负责人，不必协调五个不同工种。",
        includedLabel: "涵盖工程",
        included: [
          "木工——橱柜、衣柜、电视墙、厨柜",
          "电工——重新布线、灯光规划、电源插座",
          "水管——浴室与厨房水务工程",
          "瓷砖——地面、墙面、湿区",
          "油漆——全室内优质饰面",
          "维修与修整工程",
        ],
      },
      {
        icon: "tag",
        title: "装修配套",
        body: "我们的配套把最常见的装修范围整合成一份清晰报价。如果你希望在深入规划之前先掌握费用范围，这是一个实际的起点。",
        includedLabel: "可选配套类型",
        included: [
          "BTO 全屋配套：为新组屋屋主量身打造，即住即用",
          "二手组屋全屋配套：全面升级，包含拆改与重新布线",
          "局部装修：只做厨房或浴室",
          "公寓装修配套：干净、高级的饰面",
        ],
      },
      {
        icon: "cube",
        title: "3D 设计可视化",
        body: "在动工之前，你就能以 3D 方式完整走进自己的新家。大多数新加坡公司在设计阶段不提供这项服务。你能看清空间的实际效果，再进入施工阶段。",
        includedLabel: "为什么重要",
        included: [
          "在砌墙之前发现布局问题",
          "在实际情境中看到材料与配色效果",
          "减少变更与中途返工",
          "带着完整清晰的需求进入施工",
        ],
      },
    ],
    specialityEyebrow: "特色服务",
    specialityHeading: "大多数公司不会承接的服务。",
    specialityIntro:
      "在标准装修范围之外，我们承接一些需要更多专项处理的项目。",
    speciality: [
      {
        icon: "paw",
        title: "宠物友好住宅设计",
        body: "我们围绕猫的实际生活习惯来设计——耐用材料、内建猫爬架与走道，融入室内整体，而不是随意拼凑在空间里。",
      },
      {
        icon: "star",
        title: "儿童主题房配套",
        body: "围绕孩子兴趣打造的主题房间，留有随孩子成长的空间。不必三年后再大改。",
      },
      {
        icon: "bolt",
        title: "智能家居整合",
        body: "智能灯光、自动窗帘与家居控制系统，从装修规划阶段就纳入，而非事后硬加。",
      },
      {
        icon: "key",
        title: "单房高端装修",
        body: "高端单房改造，日后搬离时也可协助恢复原状。",
      },
      {
        icon: "leaf",
        title: "可持续设计：雨水收集系统",
        body: "针对有地住宅，将雨水收集系统纳入设计，长期降低户外用水成本。",
      },
    ],
    materialsEyebrow: "材料品质",
    materials: {
      heading: "我们使用的材料。",
      sub: "选材标准是长期表现：空气质量、耐用性与长期价值。",
      body: [
        "所有木工均采用低甲醛板材，入住后室内空气质量更健康。如有需要，我们也可提供铝制橱柜升级，耐用性远胜传统木材。",
        "部分产品附有厂商保修，从 10 年到终身不等。我们的施工提供 5 年保修——五年内出现问题，我们负责修复。",
      ],
      specs: [
        {
          icon: "leaf",
          title: "低甲醛板材",
          body: "用于所有木工项目。从入住第一天起，室内空气质量更健康。",
        },
        {
          icon: "badge",
          title: "长期厂商保修",
          body: "精选产品附有厂商保修，从 10 年到终身不等，视规格而定。",
        },
        {
          icon: "shield",
          title: "5 年施工保修",
          body: "涵盖所有我们施工的项目。五年内出现问题，我们回来修。",
        },
      ],
    },
    pricingEyebrow: "定价",
    payment: {
      heading: "透明定价，无需一次性大额付款。",
      sub: "付款按完工阶段分期，支持信用卡，退款条款从第一天起就写进合约。",
      body: "我们支持信用卡付款——这是许多新加坡装修公司未提供的便利。付款节点与工程阶段挂钩，随工程进度付款。",
      refundQuote:
        "若因我方原因导致工程延迟超过一个月，你将获得全额退款。这写在你的合约里。",
      refundNote:
        "五年来，我们从未需要动用这项承诺。",
      milestones: [
        {
          icon: "users",
          title: "免费咨询",
          desc: "我们了解你的空间与需求，为你整理一份详细报价。免费，没有附带条件。",
        },
        {
          icon: "cube",
          title: "设计确认",
          desc: "在订购任何材料之前，先完整走查 3D 效果图。每个细节由你确认后，工程才开始。",
        },
        {
          icon: "check",
          title: "按阶段付款",
          desc: "支持信用卡。付款与完工阶段挂钩，你不会为还未完成的工程付钱。",
        },
      ],
    },
    cta: {
      heading: "准备好开始了吗？",
      sub: "告诉我们你的房产情况和想法，我们将在一周内提供详细报价。",
      primary: "免费索取报价",
      secondary: "查看项目展示",
    },
  },

  portfolio: {
    title: "我们的作品",
    subtitle: "遍布新加坡、超过 400 个家。每一个都围绕居住其中的人而设计。",
    filters: ["全部", "组屋", "公寓", "有地住宅"],
    captionPrefix: "项目",
    cta: {
      heading: "喜欢你所看到的吗？",
      body: "这里的每个项目，都始于一次对话。告诉我们你的家和你的想法。",
      primary: "免费索取报价",
      secondary: "立即 WhatsApp 我们",
    },
  },

  contact: {
    title: "聊聊你的家",
    subtitle:
      "无论你已有清晰的想法，还是仍在摸索，我们都乐意帮忙。没有压力，没有承诺负担。",
    detailsHeading: "直接联系我们",
    detailsNote: "我们通常在一个工作日内回复。",
    labels: {
      phone: "电话",
      whatsapp: "WhatsApp",
      email: "邮箱",
      showroom: "展示厅",
      hours: "营业时间",
    },
    hoursValue: "星期一至星期六，上午 10 点 – 晚上 7 点",
    form: {
      heading: "告诉我们你的家",
      sub: "填写表格，我们将在一个工作日内联系你，提供无义务咨询。",
      name: { label: "姓名", placeholder: "你的称呼", required: true },
      phone: {
        label: "联系电话",
        placeholder: "建议提供 WhatsApp 号码",
        required: true,
      },
      email: { label: "电子邮箱", placeholder: "you@example.com" },
      propertyType: {
        label: "房产类型",
        options: ["二手组屋", "BTO", "公寓", "有地住宅", "其他"],
      },
      budget: {
        label: "装修预算",
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
      body: "联系我们的人，大多有理由保持谨慎。朋友的装修拖了好几个月，押金付了却迟迟没有进展。我们创立 Vika，正是为了给出一个不一样的答案：清晰的合约、按阶段付款，以及从第一天起就写进合约的全额退款条款。出了任何状况，你会从我们这里第一个知道。",
      icons: [
        "延迟超过一个月全额退款，写进合约",
        "5 年施工保修",
        "Qanvast Supertrust——项目保险最高 5 万新元",
        "每个项目都配备两位设计师",
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
};
