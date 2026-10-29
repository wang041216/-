const sourceLinks = {
  architectureStudy: {
    label: "李美慧 ·《北京协和医院各历史阶段建筑设计研究》",
    href: "https://doi.org/10.26943/d.cnki.gbjzc.2020.000117"
  },
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
  },
  outpatientMove: {
    label: "北京协和医院 · 新门急诊楼启用报道",
    href: "https://www.pumch.cn/department_ims/doctor/detail/7145.html"
  }
};

const relatedPeople = {
  C: [{ id: "wu-xian", name: "吴宪", note: "生物化学传统" }],
  G: [{ id: "zeng-xianjiu", name: "曾宪九", note: "外科病房与临床传统" }],
  H: [{ id: "zhang-xiaoqian", name: "张孝骞", note: "内科病房与临床传统" }],
  K: [{ id: "lin-qiaozhi", name: "林巧稚", note: "妇产科与病房史" }]
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
      { src: "./礼堂.png", caption: "礼堂历史建筑影像。图片由网站提供，原始出处、摄影者及对应关系待核。" },
      { src: "./老楼/建筑历史影像/A楼-历史影像.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）。" },
      { src: "./老楼/管风琴旧照.png", caption: "礼堂内的管风琴历史照片。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/王辰院校长来到管风琴所在的储藏室.png", caption: "修复工作启动前，管风琴部件仍在储藏室中。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/破损管风琴1.jpg", caption: "修复前的管风琴键盘与内部构件。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/破损管风琴2.png", caption: "修复前的鼓风与机械部件。图片来源：北京协和医学教育基金会。" },
      { src: "./老楼/管风琴修复项目进展.jpg", caption: "管风琴修复项目时间线。图片来源：北京协和医学教育基金会。" }
    ],
    sources: ["foundation", "xinhua"]
  },
  B: {
    name: "解剖学楼",
    category: "B 楼 · 解剖学与医学教育",
    deck: "从解剖学楼看协和如何把人体结构观察纳入早期医学训练。",
    sections: [
      { title: "从楼名理解早期课程", text: "建筑史研究将 B 楼记为解剖学楼。解剖学训练帮助医学生认识人体结构，是基础医学教育的重要组成部分；这处空间也提示了教学、实验与临床训练之间的联系。" },
      { title: "让建筑与影像互证", text: "本页使用的 B 楼照片由网站提供，楼名依据建筑史研究及图片文件名整理。若要进一步确认楼宇细部、房间用途和沿革，仍需结合原始图纸或院方档案。" }
    ],
    fact: "B 楼对应解剖学楼；楼名与用途参照李美慧的建筑史研究，现状用途以院方信息为准。",
    image: "./B楼（解剖学楼）.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    sources: ["architectureStudy", "institute"]
  },
  C: {
    name: "校办公室及生物化学楼",
    category: "C 楼 · 行政与基础研究",
    deck: "一栋楼里并置的办公室与实验空间，呈现校园治理和基础研究如何共同运作。",
    sections: [
      { title: "行政与实验并置", text: "建筑史研究将 C 楼记为校办公室及生物化学楼。它把校园行政工作与实验研究放在同一建筑中，提示医学教育和科研不仅依赖课堂，也需要组织、管理和实验设施的支持。" },
      { title: "从生物化学看基础医学", text: "生物化学研究生命活动中的物质变化，为理解生理过程和疾病机制提供基础。北京协和医学院基础医学研究所的沿革资料可作为学科背景参照；C 楼具体房间及后续用途仍待档案核实。" }
    ],
    fact: "建筑史研究记载 C 楼兼有校办公室与生物化学楼用途。",
    image: "./C楼（校办公室及生物化学楼）.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    gallery: [
      { src: "./老楼/建筑历史影像/C楼-历史影像.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）。" }
    ],
    sources: ["architectureStudy", "institute"]
  },
  D: {
    name: "生理学、药理学楼",
    category: "D 楼 · 生理与药理研究",
    deck: "生理学与药理学从不同角度研究人体机能与药物作用，是临床医学的重要基础。",
    sections: [
      { title: "观察人体机能", text: "建筑史研究将 D 楼记为生理学、药理学楼。生理学关注人体机能及其调节，药理学研究药物作用；两类学科的实验与教学为临床判断提供知识基础。" },
      { title: "一张建筑照片的边界", text: "本页照片由网站提供，文件名标注为 D 楼。建筑史研究支持楼名对应，具体设备、房间布局和现状尚未由图片本身证实。" }
    ],
    fact: "D 楼的建筑史研究名称为生理学、药理学楼。",
    image: "./D楼（生理学、药理学楼）.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    sources: ["architectureStudy", "institute"]
  },
  E: {
    name: "特别病房",
    category: "E 楼 · 临床照护空间",
    deck: "特别病房的名称提示早期医疗空间除学科楼、实验室外，也有专门服务患者的病房设置。",
    sections: [
      { title: "病房功能的线索", text: "建筑史研究将 E 楼记为特别病房。与实验楼和办公楼相比，这一用途直接指向患者照护空间；“特别”所指的具体对象、服务方式和使用年代仍需要医院档案进一步解释。" },
      { title: "从建筑回到患者经验", text: "病房的布局会影响照护、观察和医护协作。此处历史照片出自李美慧《北京协和医院各历史阶段建筑设计研究》，不据此推断具体患者或科室史。" }
    ],
    fact: "建筑史研究将 E 楼列为特别病房。",
    image: "./E楼（特别病房）.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    gallery: [
      { src: "./老楼/建筑历史影像/E楼-历史影像.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）。" }
    ],
    sources: ["architectureStudy"]
  },
  F: {
    name: "医院行政及住院医生宿舍",
    category: "F 楼 · 行政与住院医师生活",
    deck: "医院行政与住院医生宿舍并置，展现医疗工作背后的管理与生活空间。",
    sections: [
      { title: "医疗服务与日常生活", text: "建筑史研究将 F 楼用途记为医院行政及住院医生宿舍。医院的诊疗活动依赖管理组织，也依赖医师值班、休息和学习的日常空间；两类功能并置，让楼宇故事超越单一临床科室。" },
      { title: "影像与楼名的对应", text: "目前没有可确认的 F 楼单体照片。页面以总平面图作位置参照，不把相邻建筑照片误作 F 楼，也不推断其当前用途。" }
    ],
    fact: "建筑史研究记载 F 楼兼有医院行政与住院医生宿舍用途；暂缺可确认的单体照片。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图，作为 F 楼位置参照；并非 F 楼单体照片。",
    gallery: [
      { src: "./百年前的协和空间布局图.png", caption: "历史院区布局图。用于对照 F 楼位置，不是 F 楼单体照片；楼宇功能按所列建筑史研究整理。" }
    ],
    sources: ["architectureStudy"]
  },
  G: {
    name: "外科病房",
    category: "G 楼 · 外科住院医疗",
    deck: "G 楼被建筑史研究记为外科病房；照片中的楼群是理解早期住院诊疗的入口。",
    sections: [
      { title: "外科病房的空间", text: "建筑史研究将 G 楼记为外科病房。病房空间承接住院照护，也与手术、护理和临床教学等工作相连；具体病区布局和沿革应以原始档案为准。" },
      { title: "建筑与人物记忆", text: "协和外科人物与临床传统可帮助理解这类空间的工作背景，但目前资料不足以把具体医生或手术定位到 G 楼某一房间。" }
    ],
    fact: "建筑史研究将 G 楼记为外科病房；曾宪九人物页提供外科史的延伸阅读。",
    image: "./G、H楼.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。合照中 G 楼在左、H 楼在右。",
    gallery: [
      { src: "./老楼/建筑历史影像/G-H楼-历史合照.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）；图中 G 楼在左、H 楼在右。" }
    ],
    sources: ["architectureStudy"]
  },
  H: {
    name: "内科病房",
    category: "H 楼 · 内科住院医疗",
    deck: "H 楼被建筑史研究记为内科病房，连接患者照护、查房与临床讨论。",
    sections: [
      { title: "内科病房与临床观察", text: "建筑史研究将 H 楼记为内科病房。内科诊疗依赖连续观察、病史采集与团队讨论，病房因此也是临床教学和经验传递的重要场景。" },
      { title: "不要把主题关联误作房间定位", text: "张孝骞的临床实践可作为协和内科史的延伸阅读，但现有资料不支持指认其在 H 楼的具体房间或单一工作地点。" }
    ],
    fact: "建筑史研究将 H 楼记为内科病房；张孝骞人物资料可供了解相关临床传统。",
    image: "./G、H楼.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。合照中 G 楼在左、H 楼在右。",
    gallery: [
      { src: "./老楼/建筑历史影像/G-H楼-历史合照.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）；图中 G 楼在左、H 楼在右。" }
    ],
    sources: ["architectureStudy"]
  },
  I: {
    name: "病理学楼",
    category: "I 楼 · 病理与实验诊断",
    deck: "病理学、微生物学和检验工作汇聚于一栋楼，展现医学诊断所依赖的实验基础。",
    sections: [
      { title: "多个实验与诊断功能", text: "建筑史研究将 I 楼记为病理学楼，并记载寄生虫学、微生物学、病理学、太平间及检验室等功能。它提示早期医院如何将实验观察与临床诊断连接起来。" },
      { title: "谨慎阅读历史用途", text: "这些功能名称是研究文献中的历史记录，不代表楼宇今天仍承担相同用途。建筑照片由网站提供，现状及房间沿革尚待院方资料确认。" }
    ],
    fact: "建筑史研究记载 I 楼包含病理、微生物、寄生虫学及检验等空间。",
    image: "./I楼.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    gallery: [
      { src: "./老楼/建筑历史影像/I楼-历史影像.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）。" }
    ],
    sources: ["architectureStudy", "institute"]
  },
  J: {
    name: "门诊楼",
    category: "J 楼 · 门诊与临床服务",
    deck: "从门诊空间看医院如何组织接诊、检查、放射学与临床工作。",
    sections: [
      { title: "门诊与诊断功能", text: "建筑史研究将 J 楼记为门诊楼，包含各科门诊、科室办公室及实验室，并设放射学科和手术室等功能。它体现门诊诊疗与检查、治疗空间在院区中的组织关系。" },
      { title: "和后来的门诊建筑区分", text: "此处所说 J 楼是建筑史研究中的老楼编号，不是 1975 年奠基、1978 年开诊的后期门诊楼。两者年代、用途和位置不同。" }
    ],
    fact: "建筑史研究将 J 楼记为门诊楼；当前缺少可确认的 J 楼单体照片。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图，用于 J 楼位置参照；并非 J 楼单体照片。",
    gallery: [
      { src: "./百年前的协和空间布局图.png", caption: "历史院区布局图。用于对照 J 楼门诊空间位置，不是 J 楼单体照片；楼宇功能按所列建筑史研究整理。" }
    ],
    sources: ["architectureStudy", "outpatientMove"]
  },
  K: {
    name: "妇科、总务科及儿科病房",
    category: "K 楼 · 妇儿诊疗与院务服务",
    deck: "K 楼的历史用途将妇科、儿科病房与总务服务放在同一院区空间中。",
    sections: [
      { title: "医疗与支持功能并置", text: "建筑史研究记载 K 楼设有妇科、儿科病房及总务科，并包含急诊室、住院处、药房和病案室等功能。不同部门相邻，反映早期医院空间同时处理临床照护与日常运行事务。" },
      { title: "从空间看妇儿医疗", text: "妇科和儿科病房构成理解早期专科服务的线索。林巧稚长期从事妇产科临床工作，可作为相关医学史阅读入口；楼宇与个人具体工作地点仍需独立史料证明。" }
    ],
    fact: "建筑史研究所列 K 楼功能包括妇儿病房、急诊、住院、药房及病案等。",
    image: "./K楼.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    gallery: [
      { src: "./老楼/建筑历史影像/K楼-历史影像.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）。" }
    ],
    sources: ["architectureStudy"]
  },
  L: {
    name: "护士楼／图书馆",
    category: "L 楼 · 护理生活与知识空间",
    deck: "从护士楼到图书馆，L 楼用途的变化折射出院区功能随时间调整。",
    sections: [
      { title: "功能随时间转变", text: "建筑史研究记载 L 楼早期为护士楼，后改为图书馆。护理人员的生活空间与医学文献收藏空间先后落在同一建筑，呈现院区功能不断重组的过程。" },
      { title: "从护理到知识传播", text: "护士楼的具体使用年代、图书馆迁入时间和馆藏沿革仍可由院方档案补充。当前照片由网站提供，楼名与历史用途以论文记录为参照。" }
    ],
    fact: "建筑史研究记录 L 楼由护士楼改作图书馆。",
    image: "./L楼.png",
    caption: "图片出处：李美慧，《北京协和医院各历史阶段建筑设计研究》[D]，北京建筑大学，2020。",
    gallery: [
      { src: "./老楼/建筑历史影像/L楼-历史影像.png", caption: "图片出处：李美慧《北京协和医院各历史阶段建筑设计研究》（北京建筑大学，2020）。" }
    ],
    sources: ["architectureStudy"]
  },
  M: {
    name: "动力房",
    category: "M 楼 · 医院基础设施",
    deck: "病房和实验室之外，供电、动力与洗涤设备也是医院能够持续运转的基础。",
    sections: [
      { title: "看不见的医院系统", text: "建筑史研究将 M 楼记为动力房，列有发电机、蒸汽机、洗衣机等设备。医疗建筑的运行不仅依赖诊疗空间，也依赖能源与后勤设施。" },
      { title: "技术设施也是院史", text: "设备的具体型号、使用年代和供应范围尚待工程档案核实。回看这类建筑，可以关注现代医院如何把工程技术纳入整体院区规划。" }
    ],
    fact: "动力房服务于院区运转；具体设备信息参照建筑史研究，仍待档案细化。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图，作为 M 楼位置参照；并非 M 楼单体照片。",
    gallery: [
      { src: "./百年前的协和空间布局图.png", caption: "历史院区布局图。用于对照 M 楼动力设施位置，不是 M 楼单体照片；楼宇功能按所列建筑史研究整理。" }
    ],
    sources: ["architectureStudy"]
  },
  N: {
    name: "动物房及仓库",
    category: "N 楼 · 实验与储藏设施",
    deck: "N 楼的用途记录提示，医学研究和临床服务都需要专门的后勤与实验设施。",
    sections: [
      { title: "动物房与仓储", text: "建筑史研究将 N 楼记为动物房及仓库。动物房为当时的医学研究提供设施条件，仓储则支撑院区日常运行；现有文字资料未进一步说明其具体年代和管理方式。" },
      { title: "以历史语境理解科研", text: "历史用途不代表今天的科研规范或伦理标准。现阶段适合将 N 楼作为院区功能史线索，避免把未核实的实验项目归到具体楼宇。" }
    ],
    fact: "建筑史研究将 N 楼用途记为动物房及仓库；具体设施和使用年代待档案核对。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图，作为 N 楼位置参照；并非 N 楼单体照片。",
    gallery: [
      { src: "./百年前的协和空间布局图.png", caption: "历史院区布局图。用于对照 N 楼动物房及仓库位置，不是 N 楼单体照片；楼宇功能按所列建筑史研究整理。" }
    ],
    sources: ["architectureStudy"]
  },
  O: {
    name: "专科门诊、实验室与住院医师宿舍",
    category: "O 楼 · 专科服务与教学生活",
    deck: "O 楼用途记录展现专科门诊、实验空间和住院医师宿舍在同一栋楼里的组合。",
    sections: [
      { title: "多层空间的不同功能", text: "建筑史研究记载 O 楼地下层设眼科及耳鼻喉科门诊，一层设皮肤科及神经科门诊，二层为外科和放射科实验室，三、四层为实习医生及男住院医生宿舍。" },
      { title: "把楼层记录当作历史线索", text: "上述楼层用途来自建筑史研究的历史描述，并不代表当前功能。原始图纸和院方档案可进一步核对各功能的具体年代与调整过程。" }
    ],
    fact: "O 楼的楼层功能记录展现门诊、实验与住院医师生活空间的复合布局。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图，作为 O 楼位置参照；并非 O 楼单体照片。",
    gallery: [
      { src: "./百年前的协和空间布局图.png", caption: "历史院区布局图。用于对照 O 楼功能区位置，不是 O 楼单体照片；楼宇功能按所列建筑史研究整理。" }
    ],
    sources: ["architectureStudy"]
  },
  P: {
    name: "传染病楼",
    category: "P 楼 · 传染病诊疗与隔离",
    deck: "P 楼的历史用途记录聚焦传染病门诊、病房和院区隔离设计。",
    sections: [
      { title: "诊疗与隔离空间", text: "建筑史研究记载 P 楼为传染病楼，地下层设置传染病门诊并设有直通院外的出入口，一、二层为传染病病房。研究将其空间安排解释为与普通患者区域隔离，以减少交叉感染。" },
      { title: "从历史设计看感染控制", text: "这段描述呈现特定历史时期的建筑应对方式，不应直接视为现行医疗规范。关于建筑建成年代、实际运行和后续改造，应继续查验原始档案。" }
    ],
    fact: "P 楼历史用途参照建筑史研究；当前功能和感染控制要求以院方最新信息为准。",
    image: "./老楼/老楼建筑总平面图.jpg",
    caption: "老楼建筑总平面图，作为 P 楼位置参照；并非 P 楼单体照片。",
    gallery: [
      { src: "./百年前的协和空间布局图.png", caption: "历史院区布局图。用于对照 P 楼传染病诊疗空间位置，不是 P 楼单体照片；楼宇功能按所列建筑史研究整理。" }
    ],
    sources: ["architectureStudy"]
  }
};

const buildingProfiles = {
  A: { originalUse: "礼堂与集会空间。", present: "礼堂延续学术会议、讲座和文化活动等公共功能；具体开放安排以院方信息为准。" },
  B: { originalUse: "解剖学楼。", present: "现状用途以现场和院方信息为准。" },
  C: { originalUse: "校办公室及生物化学楼。", present: "现状用途以现场和院方信息为准。" },
  D: { originalUse: "生理学、药理学楼。", present: "现状用途以现场和院方信息为准。" },
  E: { originalUse: "特别病房。", present: "现状用途以现场和院方信息为准。" },
  F: { originalUse: "医院行政及住院医生宿舍。", present: "现状用途以现场和院方信息为准；暂缺可确认的单体照片。" },
  G: { originalUse: "外科病房。", present: "现状用途以现场和院方信息为准。" },
  H: { originalUse: "内科病房。", present: "现状用途以现场和院方信息为准。" },
  I: { originalUse: "病理学楼，包括寄生虫学、微生物学、病理学、太平间及检验室等功能。", present: "现状用途以现场和院方信息为准。" },
  J: { originalUse: "门诊楼，含各科门诊、办公室、实验室、放射学科及手术室等功能。", present: "现状用途以现场和院方信息为准；此处为老楼编号。" },
  K: { originalUse: "妇科、总务科及儿科病房，并含急诊室、住院处、药房和病案室等功能。", present: "现状用途以现场和院方信息为准。" },
  L: { originalUse: "护士楼，后改为图书馆。", present: "现状用途以现场和院方信息为准。" },
  M: { originalUse: "动力房，设发电机、蒸汽机、洗衣机等设备。", present: "现状用途和设备保存情况以院方信息为准。" },
  N: { originalUse: "动物房及仓库。", present: "现状用途以现场和院方信息为准。" },
  O: { originalUse: "专科门诊、实验室及实习医生和住院医生宿舍；楼层功能见建筑史研究。", present: "现状用途以现场和院方信息为准。" },
  P: { originalUse: "传染病楼及隔离病房。", present: "现状用途以现场和院方信息为准。" }
};function makeElement(tag, className, text) {
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
  copy.append(makeElement("span", "section-kicker", building.category));
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
  if (id === "J") {
    const laterOutpatient = makeElement("a", "building-history-crosslink", "查找 1978 年门诊楼与后续门诊发展 →");
    laterOutpatient.href = "./campus-building.html?place=outpatient";
    copy.append(laterOutpatient);
    const fullHistory = makeElement("a", "building-history-crosslink", "了解协和历史发展 →");
    fullHistory.href = "./building-history.html#campus";
    copy.append(fullHistory);
  }
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

  const imageCard = makeElement("div", "story-image-card");
  const mainFigure = makeElement("figure", "story-main-image");
  const image = document.createElement("img");
  image.src = building.image;
  image.alt = building.caption;
  const imageLink = makeElement("a");
  imageLink.href = building.image;
  imageLink.target = "_blank";
  imageLink.rel = "noreferrer";
  imageLink.setAttribute("aria-label", `打开${building.name}配图原图`);
  imageLink.append(image);
  mainFigure.append(imageLink, makeElement("figcaption", "", building.caption));
  imageCard.append(mainFigure);

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
      const galleryFigure = makeElement("figure", "story-gallery-item");
      const galleryImage = document.createElement("img");
      galleryImage.src = item.src;
      galleryImage.alt = item.caption;
      const galleryLink = makeElement("a");
      galleryLink.href = item.src;
      galleryLink.target = "_blank";
      galleryLink.rel = "noreferrer";
      galleryLink.setAttribute("aria-label", "打开图片原图");
      galleryLink.append(galleryImage);
      galleryFigure.append(galleryLink, makeElement("figcaption", "", item.caption));
      imageCard.append(galleryFigure);
    });
  }
  imageCard.append(makeElement("p", "story-citation-note", "楼宇编号与历史功能参照所列建筑史研究；地图热点仅作位置示意。未经档案证实的具体房间和当前用途，以院方信息为准。"));

  article.append(copy, imageCard);
}
