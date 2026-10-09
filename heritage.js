const sourceLinks = {
  xinhua: {
    label: "新华网 · 百年建筑修缮",
    href: "http://www.bj.xinhuanet.com/20250303/1cc9299aeb524d8eb5c4116a1ac3c228/c.html"
  },
  institute: {
    label: "北京协和医学院基础医学研究所 · 历史沿革",
    href: "https://sbm.pumc.edu.cn/ysgk/lsyg/index.htm"
  },
  paper: {
    label: "澎湃新闻 · 协和后勤百年回顾",
    href: "https://m.thepaper.cn/newsDetail_forward_12136334"
  },
  foundation: {
    label: "北京协和医学教育基金会 · 壹号礼堂与管风琴",
    href: "https://pumcef.pumc.edu.cn/xmgk/xfgfq/index.htm"
  }
};

const relatedPeople = {
  B: [{ id: "bu-dasheng", name: "步达生", note: "北京人研究与协和教学空间" }],
  C: [{ id: "hu-zhengxiang", name: "胡正详", note: "病理学传统" }],
  E: [{ id: "wu-xian", name: "吴宪", note: "生物化学传统" }],
  F: [
    { id: "lin-qiaozhi", name: "林巧稚", note: "妇产科与老病房群" },
    { id: "zhang-xiaoqian", name: "张孝骞", note: "内科与老病房群" },
    { id: "zeng-xianjiu", name: "曾宪九", note: "外科与老病房群" }
  ],
  G: [
    { id: "lin-qiaozhi", name: "林巧稚", note: "妇产科与老病房群" },
    { id: "zhang-xiaoqian", name: "张孝骞", note: "内科与老病房群" },
    { id: "zeng-xianjiu", name: "曾宪九", note: "外科与老病房群" }
  ],
  H: [
    { id: "lin-qiaozhi", name: "林巧稚", note: "妇产科与老病房群" },
    { id: "zhang-xiaoqian", name: "张孝骞", note: "内科与老病房群" },
    { id: "zeng-xianjiu", name: "曾宪九", note: "外科与老病房群" }
  ],
  K: [{ id: "lan-an-sheng", name: "兰安生", note: "公共卫生史线索" }]
};

const buildings = {
  A: {
    name: "壹号礼堂",
    category: "A 楼 · 集会空间与百年琴声",
    deck: "东单三条 48 号的壹号礼堂，绿瓦飞檐之下藏着一台剧院管风琴。它既见证协和的学术仪式，也让百年校园记忆有了声音。",
    sections: [
      { title: "仪式与相聚", text: "1921 年协和医学院开业典礼在礼堂举行。其后的岁月里，这里还见证了孙中山先生追悼仪式和作家林海音的婚礼。礼堂并不只属于医学课堂：音乐、典礼与校园生活也在这里交汇。壹号礼堂是全国重点文物保护单位协和医学院旧址建筑群的重要组成部分。" },
      { title: "一台琴，沉寂八十一年后复鸣", text: "这台由洛克菲勒家族捐赠、建于 1921 年的剧院管风琴，被北京协和医学教育基金会称为“目前亚洲最古老、中国唯一一台剧院管风琴”。1942 年后，管风琴逐渐沉寂，部分演奏台与组件遗失。修复工作于 2021 年重新启动，历经整理、修复与调试，2023 年 4 月 7 日在礼堂再次奏响。" },
      { title: "传统屋顶下的现代礼堂", text: "绿琉璃瓦与传统屋顶轮廓包裹着西式礼堂空间。礼堂独立于连廊体系之外，既是院落入口处醒目的建筑，也为校园仪式保留了一处独立空间。建筑修缮遵循修旧如旧、最小干预等原则；让历史空间继续使用，也意味着活动、布线和设备安装都要顾及文物本体。" },
      { title: "修缮与使用之间", text: "临床讲求必要、适度的干预，文物修缮也强调尽量保留原有构件，只处理确有需要的部分。观察礼堂的修复，不妨想想：如何在安全使用、保存历史痕迹与满足当代需求之间找到平衡？" }
    ],
    fact: "管风琴于 2023 年 4 月 7 日复鸣。礼堂修缮与乐器修复共同展示了“保护”与“继续使用”如何并行。",
    image: "./老楼/修缮后的协和医学院壹号礼堂。新华社记者 杨湛菲 摄.jpg",
    caption: "修缮后的协和医学院壹号礼堂。新华社记者 杨湛菲 摄。",
    gallery: [
      { src: "./老楼/管风琴旧照.png", caption: "礼堂内的管风琴历史照片。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/王辰院校长来到管风琴所在的储藏室.png", caption: "修复工作启动前，管风琴部件仍在储藏室中。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/破损管风琴1.jpg", caption: "修复前的管风琴键盘与内部构件。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/破损管风琴2.png", caption: "修复前的鼓风与机械部件。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/管风琴修复项目进展.jpg", caption: "管风琴修复项目时间线。图片来源：北京协和医学教育基金会。" }
    ],
    sources: ["foundation", "xinhua"]
  },
  B: {
    name: "原教学楼",
    category: "基础医学 · 教学空间",
    deck: "一栋教学楼，值得从“学生怎样学会医学”这个问题重新看。",
    sections: [
      { title: "从图纸上的 B 楼说起", text: "总平面图将 B 楼标为原教学楼，早期空间包括基础医学教学、教室和标本陈列。把它放回院落中看，课堂、实验空间和相连建筑共同构成了一所医学院的学习环境。" },
      { title: "课堂之外的医学训练", text: "基础医学教育需要把讲授、观察、实验和临床问题连在一起。若 B 楼确为早期教学楼，它所承载的便不只是上课地点，也包括学生初次建立医学观察方法的日常场景。协和的长学制培养传统，适合从这类具体空间讲起。" },
      { title: "一段仍可追寻的课堂记忆", text: "原教室在哪里？标本陈列室是否仍有照片、目录或口述记录？这些细节可以让早期医学教育从制度沿革，变成看得见的学习经验。" }
    ],
    fact: "八年制医学教育不仅是学制安排，也是一套把基础训练、临床实践与高标准考核贯通起来的培养方式。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。用于理解 B 楼与院落其他建筑的相对关系。",
    sources: ["institute"]
  },
  C: {
    name: "原病理楼",
    category: "病理学 · 标本与证据",
    deck: "病理学让疾病留下可观察的证据；建筑里的实验室和标本，曾是这门学科的日常。",
    sections: [
      { title: "一栋楼与一门学科", text: "总平面图将 C 楼对应为原病理楼，曾设病理学系、实验室与标本空间。北京协和医学院基础医学研究所的历史沿革也把病理学列入早期保留的基础学科，说明病理学在协和基础研究与教学中的重要位置。" },
      { title: "标本为什么重要", text: "病理标本把肉眼所见、组织结构与疾病诊断联系起来。它们既是教学材料，也是学科发展过程中不断积累的观察记录。若能找到旧标本目录或教学照片，便能进一步讲清楚一份标本如何进入课堂、实验和临床讨论。" },
      { title: "从标本读懂疾病", text: "组织切片与病理标本把疾病变化留在可观察、可比较的材料中，也让一代代研究者和学习者从细微结构理解疾病。协和病理学家的工作与珍贵教学标本，构成这段学科记忆的重要线索。" }
    ],
    fact: "基础医学研究所沿革资料将病理学列入早期科系；C 楼是理解协和病理教学与研究传统的重要空间。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。C 楼的具体房间与现状仍待院方档案确认。",
    sources: ["institute"]
  },
  D: {
    name: "原解剖楼",
    category: "解剖学 · 医学基础",
    deck: "在成为临床医生之前，认识人体结构是医学训练的重要起点。",
    sections: [
      { title: "从一门基础课看协和", text: "总平面图将 D 楼标为原解剖楼，曾用于解剖教学、实验和标本储藏。协和基础医学研究所的沿革资料也将解剖学列为早期保留的科系之一；由此可以看到基础学科如何支撑临床训练。" },
      { title: "解剖学怎样进入医学训练", text: "解剖学习要求学生把结构观察与临床理解相连接。教学空间、标本和实验制度共同构成了这段教育史。现有影像呈现了解剖楼建筑外观，建筑编号与照片对应关系仍可结合院方建筑档案进一步确认。" },
      { title: "从解剖传统到现代医学", text: "今天的解剖教学已经有了新的工具和规范；回看旧址，关注的是医学教育理念怎样传承，而不是把过去的课程形式简单复制到今天。" }
    ],
    fact: "官方学科沿革支持解剖学是早期基础学科；单体建筑编号仍需档案佐证。",
    image: "./老楼/解剖楼.jpeg",
    caption: "解剖楼建筑外观。",
    sources: ["institute"]
  },
  E: {
    name: "生理／生化楼",
    category: "生理学与生物化学",
    deck: "看不见的生命活动，曾在实验台上被一点点测量、比较和解释。",
    sections: [
      { title: "基础研究的空间", text: "总平面图将 E 楼对应为生理学、生物化学实验空间。基础医学研究所沿革记载，生物化学和生理学都是协和早期保留的学科，后来发展出更完整的基础研究组织。" },
      { title: "从实验走向医学理解", text: "生理学研究身体如何运作，生物化学探问生命活动背后的物质变化。两类实验共同为临床医学提供知识基础。旧实验室的仪器、记录本和实验规程，都是可以继续寻找的院史材料。" },
      { title: "留给参观者的问题", text: "当年研究者如何控制实验条件、记录数据？若后续能找到仪器照片或实验档案，这个点位就能把抽象学科史讲得更具体。" }
    ],
    fact: "生理学与生物化学均见于基础医学研究所早期科系沿革。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。",
    sources: ["institute"]
  },
  F: {
    name: "病房楼 F",
    category: "临床空间 · 住院医疗",
    deck: "F、G、H 楼构成的病房建筑群，是理解早期住院医疗如何组织的一条线索。",
    sections: [
      { title: "病房不是孤立的一间房", text: "F、G、H 楼构成病房主楼群，病房、护士站与手术空间共同支撑住院诊疗；连廊则让建筑群内不同功能空间相互联通。" },
      { title: "临床故事如何落在地点上", text: "林巧稚的妇产科工作、张孝骞的内科诊疗，都是协和临床史的重要篇章。现有公开资料更适合将这些故事放在 F、G、H 病房群中共同讲述；要精确到某一栋楼或房间，还需要建筑档案和科室史料进一步佐证。" },
      { title: "今天看什么", text: "可以继续寻找旧病房照片、护理记录、平面档案和口述史，了解住院照护、教学查房与多学科协作如何在空间里展开。" }
    ],
    fact: "F、G、H 病房群适合串联临床诊疗、护理协作与教学查房的空间故事。",
    image: "./老楼/九号院全景.jpg",
    caption: "九号院建筑群全景，用于呈现院落空间，不代表 F 楼单体照片。",
    sources: ["paper"]
  },
  G: {
    name: "病房楼 G",
    category: "临床空间 · 教学查房",
    deck: "在病房里，诊疗、观察和教学常常同时发生。",
    sections: [
      { title: "住院楼群中的 G 楼", text: "G 楼是 F、G、H 病房主楼群的一部分。楼群曾承担住院医疗功能，内部空间需要容纳病房、护士站以及临床工作流程。" },
      { title: "临床医学在这里发生", text: "查房和病例讨论把病人的变化、检查结果与医学知识放到同一张桌面上。协和的临床传统可以从这些具体的工作场景讲起；关于特定科室或经典病例的楼号归属，仍需院史资料支持。" },
      { title: "一条值得补充的口述史", text: "如果能采访曾在此工作的医护人员，记录病房布局、交班方式与空间变化，G 楼的故事就能从一张总平面图延伸到真实的工作记忆。" }
    ],
    fact: "G 楼的故事可以从病房布局、护理协作与临床教学三个相互连接的日常场景展开。",
    image: "./老楼/九号院全景.jpg",
    caption: "九号院建筑群全景。当前缺少可确认的 G 楼单体照片。",
    sources: ["paper"]
  },
  H: {
    name: "病房楼 H",
    category: "临床空间 · 照护与协作",
    deck: "一组病房楼连接起患者照护、护理协作和临床教学。",
    sections: [
      { title: "病房群的空间关系", text: "H 楼与 F、G 楼共同构成早期病房主楼群。早期院区规划强调建筑之间的联系；总平面图上的通道与连廊，提示了人员和工作如何在楼群中流动。" },
      { title: "从建筑看医疗团队", text: "病房医疗从来不是单一职业的工作。医生、护士和其他支持人员围绕患者连续协作，空间布局也影响观察、沟通和照护。具体到 H 楼的科室与时间线，仍应以医院档案为准。" },
      { title: "空间留下的证据", text: "旧门窗、走廊宽度、病房尺度和后续改造痕迹，可能帮助说明早期医疗空间怎样适应新的诊疗需要。" }
    ],
    fact: "H 楼单体的科室沿革尚待进一步梳理，现阶段以病房群共同历史为主线。",
    image: "./老楼/九号院全景.jpg",
    caption: "九号院建筑群全景。当前缺少可确认的 H 楼单体照片。",
    sources: ["paper"]
  },
  I: {
    name: "原图书馆",
    category: "医学文献 · 自主学习",
    deck: "一所医学院的知识，也存在于它保存、整理和借阅的文献之中。",
    sections: [
      { title: "从阅览室开始", text: "I 楼对应医学院图书馆，包含阅览和文献收藏空间。对于早期师生与研究者来说，图书馆不仅是书架，也是追踪新知识、准备课程和开展研究的基础设施。" },
      { title: "医学知识如何流动", text: "原版期刊、教材与医学文献连接着本地教学和国际学术发展。若能找到馆藏目录、借阅记录或旧阅览室照片，可以进一步说明当时师生如何取得并使用医学信息。" },
      { title: "文献如何穿越时代", text: "外文期刊、医学专著与馆藏档案连接着课堂、临床和国际学术发展。战乱时期馆藏保护的具体经过，可待图书馆档案与校史资料进一步补充。" }
    ],
    fact: "图书馆不仅保存文献，也保存一代代师生与研究者追寻新知的路径。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。I 楼对应图书馆位置。",
    sources: ["paper"]
  },
  J: {
    name: "原动物实验楼",
    category: "实验医学 · 研究设施",
    deck: "医学实验不仅需要问题和方法，也需要让研究得以进行的空间与设施。",
    sections: [
      { title: "图纸上的 J 楼", text: "J 楼对应动物实验楼，包含实验动物饲养和实验空间。它属于一套基础研究设施的组成部分；具体设施年代和设备，可由建筑档案、实验室记录和院史材料继续补充。" },
      { title: "从设施理解研究", text: "动物实验曾用于生理、药理等基础研究。今天的科研伦理与动物实验管理规范已持续发展；回望旧址时，可以同时呈现科学史背景和当代伦理要求，而不把历史做法直接等同于今天的标准。" },
      { title: "值得寻找的实物", text: "旧仪器、实验记录、管理制度和研究人员口述，都能帮助解释研究设施如何支持医学发现。" }
    ],
    fact: "研究设施同样是医学史的一部分：它们决定了实验如何开展、记录如何积累。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。当前没有可确认的 J 楼单体照片。",
    sources: ["institute"]
  },
  K: {
    name: "原行政楼",
    category: "校园治理 · 公共卫生",
    deck: "医学中心如何运转，也是一段由管理、服务与公共责任组成的历史。",
    sections: [
      { title: "楼宇用途", text: "K 楼原为医学院和医院行政办公空间。办公室分布、院务记录和服务部门沿革，可以为理解早期校园治理提供线索。" },
      { title: "从院内管理到城市健康", text: "兰安生参与推动的公共卫生工作，是协和与城市健康史的重要交会点。其具体办公地点与 K 楼的对应关系，仍可由传记、机构档案和院史资料进一步确认。" },
      { title: "管理也是医疗的一部分", text: "医院的诊疗能力依赖日常组织：人员、经费、设施和公共卫生服务如何协同，往往藏在行政档案而不只在临床故事里。" }
    ],
    fact: "医院治理与公共卫生工作共同构成现代医疗体系的基础。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。K 楼对应行政办公空间。",
    sources: ["paper"]
  },
  L: {
    name: "原宿舍",
    category: "校园生活 · 学生成长",
    deck: "医学教育不只发生在课堂；宿舍里的日常，也构成校园历史的一部分。",
    sections: [
      { title: "住在校园里的学生", text: "L 楼对应教师与学生宿舍。它把教学建筑、临床空间和学生日常连接在一起，提醒我们校园史也包括生活史。" },
      { title: "严谨训练背后的日常", text: "课程、值班、复习和同伴生活构成早期校园生活的另一面。关于当年宿舍制度、居住人数或具体名人住址，尚需校史档案或当事人口述，不宜仅凭建筑编号推断。" },
      { title: "可以如何讲述", text: "一张旧宿舍照片、一段校友口述或一份课程表，都可能让这处空间变得具体，同时避免把“严苛”只写成抽象标签。" }
    ],
    fact: "从宿舍、课堂到临床，校园空间共同组成协和的日常生活。",
    image: "./老楼/九号院全景.jpg",
    caption: "九号院建筑群全景，用于呈现校园空间，不代表 L 楼单体照片。",
    sources: ["paper"]
  },
  M: {
    name: "药房／药剂楼",
    category: "药学 · 医院制剂",
    deck: "一所医院如何把药品储备、调配与临床治疗连在一起？",
    sections: [
      { title: "药房也是医疗空间", text: "M 楼对应药剂、药房与制剂工作。医院药学把处方、药品管理和患者治疗连接起来，是医疗体系里不易被看见却不可或缺的一环。" },
      { title: "从院内制剂看早期药学", text: "旧药房可能留下药品目录、制剂配方、器具或工作制度等材料。它们可以说明当时医院如何供应药物；在没有档案佐证之前，不把具体制剂或药品归属于 M 楼。" },
      { title: "面向今天的提问", text: "从早期药房到现代临床药学，药师的职责和药品管理方式经历了哪些变化？这是连接历史建筑与当代医疗实践的一个好问题。" }
    ],
    fact: "药房把处方、药品供应、质量管理与患者治疗连接起来。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。当前没有可确认的 M 楼单体照片。",
    sources: ["paper"]
  },
  N: {
    name: "动力楼",
    category: "基础设施 · 建筑科技",
    deck: "一座医院要保持运转，背后还需要一颗看不见的“能源心脏”。",
    sections: [
      { title: "看不见的医疗基础", text: "N 楼作为动力楼，承载着发电、锅炉、制冰等后勤设施。早期医院规划不仅要安排病房和教室，也要把供电、供热与其他基础保障系统纳入整体设计。" },
      { title: "传统屋顶下的技术空间", text: "动力楼的外部传统式样与内部工业设备并置，呈现出建筑表达与现代医院功能之间的有趣张力。具体设备配置和供应范围，还可结合建筑档案继续了解。" },
      { title: "医疗背后的基础设施", text: "现代医院依赖稳定的电力、温控和气体供应。动力楼让人看到，医疗质量也建立在工程、设备和后勤人员的长期工作之上。" }
    ],
    fact: "动力系统让整组建筑能够运行；医院的现代化，也离不开工程与后勤设施。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图。N 楼对应动力设施空间。",
    sources: ["paper"]
  },
  O: {
    name: "二期 O 楼",
    category: "二期建筑 · 风格变化",
    deck: "当校园继续扩建，建筑的外观和建造方式也可能随之改变。",
    sections: [
      { title: "从一期走向二期", text: "O 楼属于二期扩建，原用途为病房或科研用房。与一期建筑的传统式屋顶外观相比，二期采用更简洁的平顶形式；准确年代和单体用途仍可通过建筑档案继续核对。" },
      { title: "一组建筑，两种表达", text: "一期建筑呈现传统屋顶与现代医疗功能并置的面貌，二期则转向更直接的现代建筑形式。沿着屋顶轮廓、开窗和结构细节比较，可以观察扩建时功能需求与建筑表达如何变化。" },
      { title: "从建筑读出时代选择", text: "建筑的变化也与建设阶段、功能安排和资源条件有关。具体到 O 楼的设计者与造价变化，仍需要同期图纸和工程档案作证；现场则可以先从它与 A–N 楼的外观差异开始观察。" }
    ],
    fact: "O 楼与 P 楼的平顶形式，为观察一期与二期建筑差异提供了线索。",
    image: "./老楼/百年前的协和空间规划图.jpg",
    caption: "百年前的协和空间规划图，可用于观察扩建前后的整体空间线索。",
    sources: ["paper"]
  },
  P: {
    name: "二期 P 楼",
    category: "二期建筑 · 校园扩展",
    deck: "P 楼让人把目光从一栋建筑移向协和校园如何逐步扩展。",
    sections: [
      { title: "二期建筑的线索", text: "P 楼与 O 楼同属二期扩建，原用途为病房或科研用房。总平面图提供了它在院区中的位置索引；准确年代和原始用途可由原设计图与建筑档案进一步核实。" },
      { title: "从规划理解变化", text: "扩建不只是增加面积，也会改变院区动线、医疗功能和校园邻接关系。将 P 楼与一期建筑并置，可以观察建筑群怎样回应不断增长的教学、研究与医疗需要。" },
      { title: "留给导览的下一步", text: "找到 P 楼施工图、同期照片和房间用途表后，可以把“二期风格变化”从整体观察落实到这栋楼的构造与使用史。" }
    ],
    fact: "把 P 楼放回院区总图中观察，可以看见扩建如何改变建筑之间的关系。",
    image: "./老楼/百年前的协和空间规划图.jpg",
    caption: "百年前的协和空间规划图，作为 P 楼定位与院区扩展的研究线索。",
    sources: ["paper"]
  }
};

const buildingProfiles = {
  A: { originalUse: "礼堂与集会空间。", present: "礼堂延续学术会议、讲座和文化活动等公共功能；具体开放安排以院方信息为准。" },
  B: { originalUse: "基础医学教学、教室与标本陈列空间。", present: "教学、科研办公等现状功能以现场和院方信息为准。" },
  C: { originalUse: "病理学系、病理实验室与标本空间。", present: "具体现用功能和标本保存情况以院方信息为准。" },
  D: { originalUse: "解剖教学、实验与标本储藏空间。", present: "具体房间功能和现状以现场及院方信息为准。" },
  E: { originalUse: "生理学、生物化学实验空间。", present: "具体现用功能以院方信息为准。" },
  F: { originalUse: "F、G、H 病房主楼群之一，曾承担住院医疗。", present: "病房群部分空间现用于办公或历史陈列；F 楼单体现状以院方信息为准。" },
  G: { originalUse: "F、G、H 病房主楼群之一，曾承担住院医疗。", present: "病房群部分空间现用于办公或历史陈列；G 楼单体现状以院方信息为准。" },
  H: { originalUse: "F、G、H 病房主楼群之一，曾承担住院医疗。", present: "病房群部分空间现用于办公或历史陈列；H 楼单体现状以院方信息为准。" },
  I: { originalUse: "医学院图书馆、阅览与文献收藏空间。", present: "当前功能以现场和院方信息为准。" },
  J: { originalUse: "实验动物饲养与动物实验空间。", present: "当前功能及设施保存情况以院方信息为准。" },
  K: { originalUse: "医学院与医院行政办公空间。", present: "当前功能以现场和院方信息为准。" },
  L: { originalUse: "教员与学生宿舍。", present: "当前功能以现场和院方信息为准。" },
  M: { originalUse: "药剂、药房与院内制剂空间。", present: "当前功能以现场和院方信息为准。" },
  N: { originalUse: "动力设施空间，包括发电、锅炉与制冰等功能。", present: "动力设备保存状况及建筑当前功能以院方信息为准。" },
  O: { originalUse: "二期建筑，原用于病房或科研。", present: "具体建成年代、现状用途以建筑档案和院方信息为准。" },
  P: { originalUse: "二期建筑，原用于病房或科研。", present: "具体建成年代、现状用途以建筑档案和院方信息为准。" }
};

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

const id = new URLSearchParams(window.location.search).get("place")?.toUpperCase();
const building = buildings[id];
const article = document.querySelector("#storyArticle");

if (!building) {
  window.location.replace("./old-building.html");
} else {
  document.title = `${id} 楼 · ${building.name} · 协和老楼`;
  document.querySelector("#breadcrumbTitle").textContent = `${id} 楼 · ${building.name}`;

  const copy = makeElement("div", "story-copy");
  copy.append(makeElement("span", "section-kicker", `${id} 楼 · ${building.category}`));
  copy.append(makeElement("h1", "", building.name));
  copy.append(makeElement("p", "story-deck", building.deck));
  const profile = buildingProfiles[id];

  const letter = makeElement("div", "building-letter");
  letter.append(makeElement("span", "", id));
  letter.append(makeElement("span", "", "老楼总平面图编号"));
  copy.append(letter);

  const buildingFacts = makeElement("dl", "building-facts");
  buildingFacts.append(makeElement("dt", "", "原始用途"));
  buildingFacts.append(makeElement("dd", "", profile.originalUse));
  buildingFacts.append(makeElement("dt", "", "现状"));
  buildingFacts.append(makeElement("dd", "", profile.present));
  copy.append(buildingFacts);
  building.sections.forEach((section) => {
    copy.append(makeElement("h2", "", section.title));
    copy.append(makeElement("p", "", section.text));
  });
  const fact = makeElement("aside", "building-fact");
  fact.append(makeElement("span", "", "留一条线索"));
  fact.append(makeElement("p", "", building.fact));
  copy.append(fact);

  const people = relatedPeople[id] || [];
  if (people.length) {
    const section = makeElement("section", "building-people");
    section.append(makeElement("h2", "", "与这处空间相关的人物"));
    section.append(makeElement("p", "people-citation-note", "人物与楼宇的关联用于呈现院史主题；除有明确史料支持者外，不指向某一具体房间或唯一工作地点。"));
    const links = makeElement("div", "building-people-links");
    people.forEach((person) => {
      const link = makeElement("a", "building-person-link");
      link.href = `./people.html?person=${person.id}`;
      link.append(makeElement("strong", "", person.name));
      link.append(makeElement("span", "", person.note));
      links.append(link);
    });
    section.append(links);
    copy.append(section);
  }

  const navigation = makeElement("nav", "story-prev-next");
  navigation.setAttribute("aria-label", "相邻建筑");
  const back = makeElement("a", "", "← 返回 A–P 楼地图");
  back.href = "./old-building.html";
  navigation.append(back);
  const ids = Object.keys(buildings);
  const nextId = ids[(ids.indexOf(id) + 1) % ids.length];
  const next = makeElement("a", "", `下一栋：${nextId} 楼 →`);
  next.href = `./heritage.html?place=${nextId}`;
  navigation.append(next);
  copy.append(navigation);

  const imageCard = makeElement("figure", "story-image-card");
  const image = document.createElement("img");
  image.src = building.image;
  image.alt = building.name;
  imageCard.append(image);
  imageCard.append(makeElement("figcaption", "", building.caption));

  const sources = makeElement("div", "story-sources");
  building.sources.forEach((sourceId) => {
    const source = sourceLinks[sourceId];
    const link = makeElement("a", "", source.label);
    link.href = source.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    sources.append(link);
  });
  imageCard.append(sources);
  if (building.gallery) {
    building.gallery.forEach((item) => {
      const galleryImage = document.createElement("img");
      galleryImage.src = item.src;
      galleryImage.alt = item.caption;
      imageCard.append(galleryImage);
      imageCard.append(makeElement("figcaption", "", item.caption));
    });
  }
  imageCard.append(makeElement("p", "story-citation-note", "楼宇名称与空间对应参照历史总平面图；建筑沿革与人物故事以所列公开来源为据，未有公开资料佐证的具体房间和现状以院方信息为准。"));

  article.append(copy, imageCard);
}
