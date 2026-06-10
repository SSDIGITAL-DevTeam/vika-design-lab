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
        "在 Vika Design Lab，我们相信家应该体现你是谁，而不只是照片里好看。在过去五年、超过 400 个完成项目中，我们帮助新加坡的组屋屋主、公寓住户与有地住宅业主，把空荡的空间打造成温馨、实用且极具个人风格的家。",
        "每个项目都配有两位专属设计师；每一个工期承诺，我们都写进合约、说到做到。",
      ],
    },
    usp: {
      heading: "Vika Design Lab 的独特之处",
      cards: [
        {
          icon: "shield",
          title: "延迟超过一个月，全额退款",
          body: "如果工程延迟超过一个月，您可获得全额退款——写进合约，绝非空话。至今我们从未需要动用这项承诺。",
        },
        {
          icon: "users",
          title: "每个项目两位设计师",
          body: "每个项目都安排两位设计师，避免因单点失误而停滞，从一开始就保障工程的连续性。",
        },
        {
          icon: "cube",
          title: "3D 全景设计体验",
          body: "在动工之前，您就能透过完整的 3D 体验“走进”未来的家——这种清晰度在新加坡市场十分少见。",
        },
        {
          icon: "clock",
          title: "一周内出报价",
          body: "我们珍惜您的时间。大多数客户在首次咨询后一周内，就能收到详细且透明的报价。",
        },
        {
          icon: "tag",
          title: "实惠而不妥协",
          body: "我们的价格低于新加坡市场一般水平。在 Vika Design Lab，好设计与合理价格从不是二选一。",
        },
        {
          icon: "badge",
          title: "5 年施工保修",
          body: "每一颗钉子、每一片瓷砖、每一扇柜门，我们都负责到底。5 年施工保修，让您入住后依然安心。",
        },
      ],
    },
    servicesOverview: {
      heading: "你的家所需要的一切，一站搞定",
      tiles: [
        { title: "室内设计", desc: "空间规划、概念发展、材料挑选。" },
        { title: "全屋装修工程", desc: "木工、电工、水管、瓷砖、油漆。" },
        { title: "3D 设计可视化", desc: "动工前先“走进”你的家。" },
        { title: "BTO 与二手房配套", desc: "为新旧组屋量身定制的整套方案。" },
        {
          title: "特别空间设计",
          desc: "宠物友好住宅、儿童主题房、智能家居整合。",
        },
      ],
      cta: "查看全部服务",
    },
    testimonials: {
      heading: "屋主们怎么说",
      items: [
        {
          quote:
            "听了不少新加坡装修“惊魂记”后，我们一度很担心。Vika 团队不但准时完工，还在每个环节持续向我们更新进度。我们的组屋焕然一新。",
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
      "Vika Design Lab 建立在一个简单的信念上：新加坡的屋主，值得拥有一家说到做到的室内设计公司。",
    storyLabel: "我们的故事",
    story: [
      "在 Vika Design Lab 成立之前，只有一名设计师——她在行业里耕耘多年，与承包商和供应商建立了良好关系，完成一个又一个项目，同时也默默看着同样的问题在装修行业一再上演：屋主满怀信任地付了钱，最后却只能苦苦等待。",
      "真正让一切改变的，是一则关于圣淘沙装修项目的新闻报道。屋主支付了大笔费用，工程却几个月毫无进展。这并非个别事件，而是一种普遍现象，也点出了大多数公司宁愿回避的市场缺口：责任感。",
      "这正是全额退款承诺存在的原因。它不是营销噱头，而是一种态度——Vika Design Lab 愿意用真金白银为自己的承诺负责。若因我方原因导致工程延迟超过一个月，您将获得全额退款。白纸黑字，写进合约。",
      "Vika Design Lab 是从零开始的。没有捷径，也没有现成的客户名单，只有清晰的愿景，以及一步一步把它建立起来的努力——学习公司经营、修读市场营销课程，从一名设计师成长为一位公司创办人。",
      "五年、超过 400 个家之后，这门生意已不只是一家装修公司，而是一个屋主愿意推荐给家人、父母与朋友的品牌——因为它兑现了自己的承诺。",
    ],
    founderQuote: {
      quote:
        "这不仅仅是一个营销口号，更代表着我对自己团队、施工安排以及交付能力的信心。",
      author: "Vika，Vika Design Lab 创办人",
    },
    missionLabel: "我们的使命",
    mission:
      "以低于新加坡市场平均的价格，让优质室内设计真正触手可及，同时绝不在材料、施工与服务体验上妥协。",
    visionLabel: "我们的愿景",
    vision:
      "成为新加坡最值得信赖的室内设计公司——屋主愿意推荐给他们最在乎之人的那个名字。",
    process: {
      heading: "我们的承诺，有一整套流程支撑",
      body: [
        "准时交付不是靠运气，而是源于专人现场监督、定期与承包商协调，以及在整个装修过程中坚持透明沟通。",
        "每个 Vika 项目都有专属团队从头到尾跟进进度——定期到现场检查施工、及早解决问题、确保工期按计划进行。当出现小延误时（任何工程都难免），我们会第一时间告知您原因，并给出清晰的解决方案。",
        "我们的目标：如承诺般在一个月内完成每个项目。在极少数情况下，可能出现最多一周的轻微延迟——但您一定会提前知道，而不是事后才被告知。",
      ],
    },
    designers: {
      heading: "认识我们的设计师",
      intro:
        "我们团队以关怀、细心与耐心为服务理念，确保每位客户都感到自信与安心。我们持续学习与进步，为客户提供卓越的服务与专业指导，满足每位客户的个别需求。",
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
      "从第一次 3D 走查到最后一层漆，我们全程包办你的装修，让你不必在五个承包商之间来回协调。",
    coreHeading: "我们的服务",
    core: [
      {
        title: "室内设计",
        body: "每个项目都从了解你如何生活开始。我们与你一起发展出贴合你生活方式、个性与预算的设计概念，并在动工之前透过详细的 3D 可视化反复打磨。",
        includedLabel: "包含内容",
        included: [
          "初步咨询与生活方式需求梳理",
          "概念发展与情绪板",
          "空间规划与布局优化",
          "材料与饰面挑选",
          "完整 3D 设计走查（沉浸式体验，新加坡市场少见）",
        ],
      },
      {
        title: "全屋装修工程",
        body: "我们承接装修的全部范围——从拆墙到最后的收尾。我们的自有团队与可信赖的承包商在我们的直接监督下施工，因此工期得以保障、品质始终如一。",
        includedLabel: "涵盖工程",
        included: [
          "木工——定制橱柜、衣柜、电视墙、厨柜",
          "电工——重新布线、灯光规划、电源插座",
          "水管——浴室与厨房水务工程",
          "瓷砖——地面、墙面、湿区",
          "油漆——全室内优质饰面油漆",
          "维修与修整工程",
        ],
      },
      {
        title: "装修配套",
        body: "不知从何开始？我们的配套把最常见的装修范围整合成一份透明的报价——让你清楚知道自己得到什么、花费多少。",
        includedLabel: "可选配套类型",
        included: [
          "BTO 全屋配套——即住即用，为全新组屋屋主量身打造",
          "二手组屋全屋配套——针对旧组屋的全面升级，包含拆改与重新布线",
          "局部装修——只做厨房或浴室，适合预算更聚焦的屋主",
          "公寓装修配套——干净、高级的饰面，契合公寓生活",
        ],
      },
      {
        title: "3D 设计可视化",
        body: "在装修开始之前，你就能“走进”一个完整渲染的 3D 版新家。这不只是锦上添花——而是确保在投入任何施工费用之前，你的空间看起来、用起来都正如你所想。",
        includedLabel: "为什么重要",
        included: [
          "在砌墙之前发现布局问题",
          "在真实情境中查看材料与配色组合",
          "减少变更与中途昂贵的返工",
          "带着完全清晰的需求进入装修",
        ],
      },
    ],
    specialityHeading: "为你的家加点不一样",
    specialityIntro:
      "在标准装修范围之外，我们还提供一些新加坡室内设计公司少见的特别服务。",
    speciality: [
      {
        icon: "paw",
        title: "宠物友好住宅设计",
        body: "针对养猫的家庭，我们围绕宠物真实的生活习惯来设计——耐用、防抓的材料，整合式猫爬架与走道，以及经得起长期使用、又不会让家像宠物店的家具。",
      },
      {
        icon: "star",
        title: "儿童主题房配套",
        body: "围绕孩子兴趣打造的主题卧室，并能随孩子一起成长。从探险风阁楼床到富有创意的学习区，我们让孩子真心喜欢待在自己的房间里。",
      },
      {
        icon: "bolt",
        title: "智能家居整合",
        body: "智能灯光、自动窗帘与整合式家居控制系统——从一开始就纳入装修规划，而非事后加装。",
      },
      {
        icon: "key",
        title: "单房高端装修",
        body: "还没准备好整屋装修？我们提供高端单房改造——并可在你日后搬离时，协助将房间恢复原状。",
      },
      {
        icon: "leaf",
        title: "可持续设计——雨水收集系统",
        body: "针对有地住宅业主，我们可将雨水收集再利用系统纳入设计——降低长期水费，也是我们有地住宅项目中的一大亮点。",
      },
    ],
    materials: {
      heading: "经得起时间——我们坚持的材料",
      body: [
        "我们选用的材料以耐用、安全与价值为准。所有木工均采用低甲醛板材——让你入住后室内空气依然健康。对有需求的客户，我们也可提供铝制橱柜升级，其寿命远胜传统木材方案。",
        "部分产品与材料附有厂商保修，从 10 年到终身不等。我们的施工本身则提供 5 年保修——意味着若我们施作的部分在五年内出现问题，我们负责修复。",
      ],
    },
    payment: {
      heading: "价格透明，绝无意外",
      body: "我们支持信用卡付款——这是许多新加坡装修公司未提供的便利。付款节点与工程阶段挂钩，让你随工程进度付款。",
      refundQuote:
        "若因我方原因导致工程延迟超过一个月，您将获得全额退款。不是折扣，不是一句道歉，而是全额退款——从第一天起就写进您的合约。",
      refundNote:
        "这不是营销承诺，而是一项合约义务。因为我们相信，责任感不该是可有可无的选项。",
    },
    cta: {
      heading: "准备好聊聊你的家了吗？",
      sub: "一周内获得无义务报价。只需告诉我们你的房产与想法，其余交给我们。",
      primary: "免费索取报价",
      secondary: "查看项目展示",
    },
  },

  portfolio: {
    title: "我们的作品",
    subtitle: "遍布新加坡、超过 400 个家——每一个都围绕居住其中的人而打造。",
    filters: ["全部", "组屋", "公寓", "有地住宅"],
    captionPrefix: "项目",
    cta: {
      heading: "喜欢你所看到的吗？",
      body: "你刚刚看到的每个项目，都始于一次对话。告诉我们你的家，我们会让你看到它的可能。",
      primary: "免费索取报价",
      secondary: "立即 WhatsApp 我们",
    },
  },

  contact: {
    title: "聊聊你的家",
    subtitle:
      "无论你已有清晰的想法，还是仍在摸索，我们都乐意帮忙。联系我们，从一次对话开始——没有压力，没有承诺负担。",
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
      body: "我们明白，联系一家装修公司可能会让人却步——尤其当你听过那些出问题的项目。我们创立 Vika Design Lab，正是为了成为那家“不让这种事发生”的公司。没有意外，没有未经告知的延误，只有踏实、做到位的工作。",
      icons: [
        "延迟超过一个月全额退款——写进合约",
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
      "新加坡室内设计与装修——建立在信任、责任感，以及写进合约的退款承诺之上。",
    navHeading: "浏览",
    contactHeading: "联系方式",
    rights: "Vika Design Lab。版权所有。",
  },
};
