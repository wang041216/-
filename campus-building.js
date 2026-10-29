const sources = {
  outpatientMove: {
    label: "北京协和医院 · 新门急诊楼启用报道",
    href: "https://www.pumch.cn/department_ims/doctor/detail/7145.html"
  },
  outpatientMemory: {
    label: "北京协和医院 · 旧门诊楼最后一个门诊日",
    href: "https://www.pumch.cn/detail/16747.html"
  },
  emergencyHistory: {
    label: "北京协和医院 · 急诊科百年发展史",
    href: "https://ims.pumch.cn/detail/26366.html"
  },
  emergencyDepartment: {
    label: "北京协和医院 · 急诊医学科",
    href: "https://www.pumch.cn/department_jizk.html"
  },
  surgery: {
    label: "北京协和医院 · 外科楼介绍",
    href: "https://www.pumch.cn/detail/8925.html"
  },
  internal: {
    label: "北京协和医院内科学系",
    href: "https://www.pumch.cn/department_neikxx.html"
  },
  internalTradition: {
    label: "北京协和医院 · 张孝骞内科青年学术交流会",
    href: "https://ims.pumch.cn/detail/42020.html"
  },
  transformation: {
    label: "北京协和医院 · 转化医学综合楼启用",
    href: "https://www.pumch.cn/detail/26474.html"
  },
  education: {
    label: "北京协和医院 · 早期接触临床课程",
    href: "https://ims.pumch.cn/detail/28361.html"
  },
  educationHome: {
    label: "北京协和医院 · 教育教学",
    href: "https://www.pumch.cn/education.html"
  }
};

const places = {
  surgery: {
    name: "外科楼",
    category: "现代临床空间 · 外科诊疗",
    deck: "从九号院老病房到现代手术中心，协和外科的故事既是诊疗条件的更迭，也是外科传统在新空间中的延续。",
    originalUse: "外科住院、手术与围手术期诊疗空间。",
    present: "外科住院与手术诊疗功能；院内通道与门诊、急诊及内科楼相连。",
    sections: [
      { title: "为复杂手术而建", text: "外科楼于 2013 年 5 月开始试运行，地上 11 层、地下 3 层，设有 47 间手术室和 900 张床位。多个外科科室陆续迁入，集中诊疗空间让手术、住院和相关支持流程更便于衔接。" },
      { title: "从老病房走向现代手术室", text: "协和外科的历史始于老院区。早年手术与住院医疗在九号院病房楼中开展；随着手术方式和设备持续发展，现代手术对洁净环境、空间尺度和设备管线提出了更高要求。新楼承接了这些临床功能，也让百年外科传统拥有适应当代医疗的工作空间。" },
      { title: "新与老的对望", text: "外科楼与南侧老建筑群形成新旧并置的院区景观。它提醒人们，历史保护不等于把所有医疗功能都留在老建筑里：在适当位置建设现代设施，也是在延续医疗服务、减轻文物建筑承载压力。" }
    ],
    fact: "官方资料记载，外科楼于 2013 年 5 月试运行，共有 47 间手术室、900 张床位。",
    image: "./概览.jpeg",
    caption: "院区建筑示意图。外科楼位于北区门急诊综合体西侧。",
    sources: ["surgery"]
  },
  emergency: {
    name: "急诊楼",
    category: "现代临床空间 · 急危重症救治",
    deck: "急诊楼背后，是一门学科从早期急救空间走向独立、系统化救治的历程。",
    originalUse: "急诊接诊、抢救及急危重症诊疗空间。",
    present: "承担急诊诊疗与急危重症救治。院区示意图显示急诊功能位于新门急诊综合体北侧。",
    sections: [
      { title: "从急诊室到独立学科", text: "协和急诊医学科的历史可以追溯到 1983 年。随着急诊医学发展，急诊不再只是医院入口处的一间诊室，而逐渐形成涵盖分诊、抢救、重症救治与多科室协作的专业体系。" },
      { title: "紧急时刻的空间设计", text: "急诊楼于 2012 年随新门急诊综合体启用。独立的急诊入口和抢救空间，有助于患者快速进入评估与救治流程；它与外科等临床空间相连，也让需要进一步处置的患者能够更快衔接后续治疗。" },
      { title: "一条持续发展的救治传统", text: "从老院区有限的急诊空间，到专门设置的现代急诊区域，变化的不只是面积和设备，也包括急救流程、团队协作和学科建设。协和急诊发展的历史，折射出中国现代急诊医学逐步建立的过程。" }
    ],
    fact: "北京协和医院官方科史将 1983 年列为急诊医学科建设的重要起点。",
    image: "./概览.jpeg",
    caption: "院区建筑示意图。急诊楼位于门急诊综合体北侧。",
    sources: ["emergencyHistory", "emergencyDepartment", "outpatientMove"]
  },
  outpatient: {
    name: "门诊楼",
    category: "门诊楼 · 历史沿革",
    deck: "从 1978 年开诊的门诊楼到新的门急诊综合空间，建筑记录着协和如何回应不断增长的就医需求。",
    originalUse: "门诊接诊、检查、检验、药房及相关患者服务空间。",
    present: "门诊服务已逐步迁入新的门急诊综合空间；本页介绍旧门诊楼历史与门诊空间变迁。",
    sections: [
      { title: "1978 年：专门门诊楼开诊", text: "这座门诊楼于 1975 年奠基、1978 年开诊，建筑面积约 1.3 万平方米。它的建成，让门诊接待有了专门空间；在当时的协和，也成为院区扩容的重要一步。早年的回忆中，人们称它宽敞、先进，曾吸引不少媒体前来报道。" },
      { title: "从宽敞到拥挤：就医需求的变化", text: "随着更多患者进京求医，门诊量持续攀升。到新楼启用前，日门诊高峰一度超过 1.2 万人次，约为建设初期的六倍。人流汇集在有限空间里，候诊和接诊环境日渐嘈杂拥挤；医护人员和患者曾用“百货商店”“菜市场”等比喻形容当时的繁忙景象。这些声音也记录了医疗服务需求的变化。" },
      { title: "门诊迁入新楼，旧址开启新篇", text: "2012 年新门急诊楼建成后，门诊服务逐步迁入新的综合空间。旧门诊楼结束数十年的接诊使命，原址随后转向转化医学研究。院区由此在改善就医条件的同时，为历史建筑群减轻使用压力，让一处空间继续服务医学，只是承担了新的工作。" }
    ],
    fact: "门诊楼于 1975 年奠基、1978 年开诊，约 1.3 万平方米；启用新门急诊楼前，日门诊高峰已超过 1.2 万人次。",
    image: "./概览.jpeg",
    caption: "院区建筑示意图。新门诊楼位于综合体东侧。",
    sources: ["outpatientMove", "outpatientMemory"]
  },
  internal: {
    name: "内科楼",
    category: "现代临床空间 · 内科诊疗",
    deck: "内科楼连接着日常诊疗与学术讨论；在新建筑中延续的，是协和以病例为中心的临床传统。",
    originalUse: "内科住院、诊疗、教学与病例讨论空间。",
    present: "内科诊疗及相关临床工作空间；具体科室位置请以院方信息和现场导引为准。",
    sections: [
      { title: "从老病房延续的内科传统", text: "协和内科的历史与九号院老病房紧密相连。张孝骞等前辈重视细致观察、反复推敲病情与严谨讨论，查房和病例讨论由此成为协和临床文化的重要组成部分。" },
      { title: "病例讨论，让不同视角相遇", text: "内科诊疗常需把病史、体征、检查结果和病程变化放在一起判断。围绕疑难病例展开的查房与讨论，体现了临床经验的传承，也让不同专业的知识在同一病例中交汇。院方持续举办以张孝骞为名的内科学术交流活动，延续严谨求实的学术传统。" },
      { title: "空间迁移，传统继续", text: "随着医院发展，内科诊疗从老院区逐步进入现代化临床空间。建筑和设施发生变化，但重视病史、认真查体、审慎判断并开展学术讨论的工作方式，仍是理解协和内科的重要线索。" }
    ],
    fact: "张孝骞内科青年学术交流会以协和内科前辈命名，体现临床传统与当代学术交流的延续。",
    image: "./概览.jpeg",
    caption: "院区建筑示意图。内科楼位于老楼以北、现代门急诊综合体以南。",
    sources: ["internal", "internalTradition"]
  },
  transformation: {
    name: "转化医学楼",
    category: "科研空间 · 转化医学",
    deck: "在旧门诊楼原址上，一座科研综合楼开启了地块的新篇章：让实验室里的发现更接近临床问题。",
    originalUse: "转化医学研究、临床研究与科研平台空间。",
    present: "转化医学国家重大科技基础设施（北京协和）的重要载体，服务临床研究与医学创新。",
    sections: [
      { title: "同一地块，不同使命", text: "旧门诊楼曾在这里服务数十年。随着门诊功能迁入新楼，原址迎来转化医学综合楼。地块从集中接诊转向科研与临床研究，展现了院区功能随时代需求持续更新的过程。" },
      { title: "让基础研究与临床相连", text: "转化医学关注如何把基础研究发现转化为临床诊疗进步，也让临床中遇到的问题反过来启发新的研究。转化医学综合楼于 2021 年 9 月 5 日正式启用，是转化医学国家重大科技基础设施（北京协和）项目的重要载体。" },
      { title: "百年节点上的新地标", text: "综合楼的启用与协和建院百年相逢。它既是现代科研设施，也是院区土地功能演变的一个注脚：旧建筑完成历史使命后，新的空间继续承载医学发展，同时与周边历史建筑共同构成不断变化的城市院区。" }
    ],
    fact: "转化医学综合楼于 2021 年 9 月 5 日启用，是国家重大科技基础设施（北京协和）项目的重要载体。",
    image: "./概览.jpeg",
    caption: "院区建筑示意图。转化医学楼位于院区东侧。",
    sources: ["transformation", "outpatientMemory"]
  },
  teaching: {
    name: "教学楼",
    category: "医学教育 · 现代教学空间",
    deck: "在老教学楼的历史之外，现代教学空间展示了医学教育如何继续适应新的课程、技术与临床实践。",
    originalUse: "现代医学课程、教学研讨与临床实践训练空间。",
    present: "用于医学教育及相关教学活动；具体课程安排与开放情况以院方信息为准。",
    sections: [
      { title: "从老 B 楼到现代课堂", text: "协和早期医学教育与老院区教学楼相伴而生。随着教学规模、课程内容和教学设备不断发展，现代教学空间为讲授、研讨和实践训练提供了新的场所，与老 B 楼共同呈现医学教育从早期课堂走向当代多元教学的变化。" },
      { title: "课堂之外的实践", text: "现代医学教育不止于听课，也包含临床观摩、情景模拟、沟通训练与跨专业协作。协和的早期接触临床课程将基础医学知识与真实医疗环境联系起来，也让人看到医学人才培养如何回应临床工作的实际需要。" },
      { title: "百年传承与教学更新", text: "从基础理论、临床实践到严谨的专业训练，协和医学教育在保持传统的同时不断探索新的教学方法。把现代教学楼与老教学楼放在一起观察，能看到传承并非停留在旧空间，而是在新的环境中持续发生。" }
    ],
    fact: "协和早期接触临床课程结合临床观摩、情景模拟和沟通训练，呈现现代医学教育的实践性。",
    image: "./概览.jpeg",
    caption: "院区建筑示意图。教学楼位于现代综合体中部。",
    sources: ["education", "educationHome"]
  }
};

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

const id = new URLSearchParams(window.location.search).get("place");
const place = places[id];
const article = document.querySelector("#storyArticle");

if (!place) {
  window.location.replace("./index.html");
} else {
  document.title = `${place.name} · 协和院区漫游`;
  document.querySelector("#breadcrumbTitle").textContent = place.name;

  const copy = makeElement("div", "story-copy");
  copy.append(makeElement("span", "section-kicker", place.category));
  copy.append(makeElement("h1", "", place.name));
  copy.append(makeElement("p", "story-deck", place.deck));

  const facts = makeElement("dl", "building-facts");
  facts.append(makeElement("dt", "", "主要功能"));
  facts.append(makeElement("dd", "", place.originalUse));
  facts.append(makeElement("dt", "", "今天"));
  facts.append(makeElement("dd", "", place.present));
  copy.append(facts);

  place.sections.forEach((section) => {
    copy.append(makeElement("h2", "", section.title));
    copy.append(makeElement("p", "", section.text));
  });

  const fact = makeElement("aside", "building-fact");
  fact.append(makeElement("span", "", "建筑小记"));
  fact.append(makeElement("p", "", place.fact));
  copy.append(fact);

  const navigation = makeElement("nav", "story-prev-next");
  navigation.setAttribute("aria-label", "院区导览");
  const back = makeElement("a", "", "← 返回院区地图");
  back.href = "./index.html";
  navigation.append(back);
  copy.append(navigation);

  const imageCard = makeElement("figure", "story-image-card");
  const image = document.createElement("img");
  image.src = place.image;
  image.alt = place.caption;
  imageCard.append(image, makeElement("figcaption", "", place.caption));

  const sourceList = makeElement("div", "story-sources");
  place.sources.forEach((sourceId) => {
    const source = sources[sourceId];
    const link = makeElement("a", "", source.label);
    link.href = source.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    sourceList.append(link);
  });
  imageCard.append(sourceList);
  imageCard.append(makeElement("p", "story-citation-note", "楼宇功能与沿革参照院方公开资料整理；院内科室位置、开放安排及就诊流程以现场标识和院方最新信息为准。"));

  article.append(copy, imageCard);
}
