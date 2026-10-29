const references = [
  {
    category: "建筑保护与院史",
    items: [
      ["李美慧：《北京协和医院各历史阶段建筑设计研究》[D]. 北京建筑大学，2020. DOI: 10.26943/d.cnki.gbjzc.2020.000117", "https://doi.org/10.26943/d.cnki.gbjzc.2020.000117"],
      ["新华网 · 让文物“说话”——从协和百年老建筑修缮看文化遗产保护", "http://www.bj.xinhuanet.com/20250303/1cc9299aeb524d8eb5c4116a1ac3c228/c.html"],
      ["北京协和医学院基础医学研究所 · 历史沿革", "https://sbm.pumc.edu.cn/ysgk/lsyg/index.htm"],
      ["澎湃新闻 · 穿越百年的协和后勤光影回顾", "https://m.thepaper.cn/newsDetail_forward_12136334"],
      ["北京协和医学教育基金会 · 壹号礼堂与管风琴", "https://pumcef.pumc.edu.cn/xmgk/xfgfq/index.htm"]
    ]
  },
  {
    category: "人物与医学史",
    items: [
      ["北京协和医院 · 林巧稚相关纪念文章", "https://www.pumch.cn/detail/27613.html"],
      ["北京协和医院 · 协和精神与医学人物", "https://www.pumch.cn/detail/36627.html"],
      ["澎湃新闻 · 协和人的医学记忆", "https://m.thepaper.cn/baijiahao_14206093"],
      ["北京协和医院 · 世纪回顾展与张孝骞笔记", "https://www.pumch.cn/department_ims/doctor/detail/27738.html"],
      ["北京协和医院 · 生化与免疫专业组沿革", "https://ims.pumch.cn/detail/11942.html"],
      ["《协和医学杂志》· 吴宪与协和生物化学研究", "https://xhyxzz.pumch.cn/cn/article/pdf/preview/10.12290/xhyxzz.2022-0335.pdf"],
      ["中国大百科全书 · 步达生", "https://www.zgbk.com/ecph/words?SiteID=1&ID=109534&Type=bkzyb&SubID=170824"],
      ["化石网 · 人类学家步达生：北京人命名者", "http://uua.cn/kxrw/gwgswxj/202212/t20221204_174014.html"],
      ["北京协和医院 · 纪录片《彼岸》相关报道", "https://ims.pumch.cn/detail/17512.html"],
      ["北京大学期刊网 · 兰安生与公共卫生教育研究", "https://ccj.pku.edu.cn/article/info?id=341045039"]
    ]
  },
  {
    category: "现代院区建筑",
    items: [
      ["北京协和医院 · 新门急诊楼启用报道", "https://www.pumch.cn/department_ims/doctor/detail/7145.html"],
      ["北京协和医院 · 旧门诊楼最后一个门诊日", "https://www.pumch.cn/detail/16747.html"],
      ["北京协和医院 · 急诊科百年发展史", "https://ims.pumch.cn/detail/26366.html"],
      ["北京协和医院 · 急诊医学科", "https://www.pumch.cn/department_jizk.html"],
      ["北京协和医院 · 外科楼介绍", "https://www.pumch.cn/detail/8925.html"],
      ["北京协和医院 · 内科学系", "https://www.pumch.cn/department_neikxx.html"],
      ["北京协和医院 · 张孝骞内科青年学术交流会", "https://ims.pumch.cn/detail/42020.html"],
      ["北京协和医院 · 转化医学综合楼启用", "https://www.pumch.cn/detail/26474.html"],
      ["北京协和医院 · 早期接触临床课程", "https://ims.pumch.cn/detail/28361.html"],
      ["北京协和医院 · 教育教学", "https://www.pumch.cn/education.html"],
      ["北京协和医院官方网站", "https://www.pumch.cn/"],
      ["Google Fonts · DM Sans 与 Noto Serif SC", "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"]
    ]
  }
];

const imageCredits = [
  ["卫星 新.jpeg", "首页院区未标注卫星底图", "由网站提供；原始地图服务、拍摄日期及授权信息未随文件提供，来源待核。"],
  ["概览.jpeg", "现代院区楼宇位置示意底图", "由网站提供；底图来源及授权信息未随文件提供，来源待核。"],
  ["老楼/老楼（新）.jpeg", "老楼 A–P 互动卫星底图", "由网站提供；卫星影像来源、日期及授权信息未随文件提供，来源待核。"],
  ["老楼/老楼建筑总平面图.jpg", "老楼 A–P 编号与建筑名称参照图", "由网站提供；图纸的发布出处与使用授权待核。"],
  ["B楼（解剖学楼）.png", "B 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["C楼（校办公室及生物化学楼）.png", "C 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["D楼（生理学、药理学楼）.png", "D 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["E楼（特别病房）.png", "E 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["G、H楼.png", "G 楼、H 楼故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。合照无法独立确认每栋楼的对应关系。"],
  ["I楼.png", "I 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["K楼.png", "K 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["L楼.png", "L 楼建筑故事配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。楼名参照李美慧（2020）建筑史研究。"],
  ["娄公楼.png", "协和医学堂早期楼宇历史影像", "由用户提供；原始影像档案、摄影者及公开展示授权未随文件提供，来源与授权待核。历史楼名及沿革参照李美慧（2020）。"],
  ["哲公楼.png", "协和医学堂早期楼宇历史影像", "由用户提供；原始影像档案、摄影者及公开展示授权未随文件提供，来源与授权待核。历史楼名及沿革参照李美慧（2020）。"],
  ["文海楼.png", "协和医学堂早期楼宇历史影像", "由用户提供；原始影像档案、摄影者及公开展示授权未随文件提供，来源与授权待核。历史楼名及沿革参照李美慧（2020）。"],
  ["礼堂.png", "协和院区礼堂建筑配图", "由用户提供；原始出处、摄影者及公开展示授权未随文件提供，来源与授权待核。"],
  ["百年前的协和空间布局图.png", "院区空间布局历史图", "由用户提供；原始档案出处、制图信息及公开展示授权未随文件提供，来源与授权待核。"],
  ["百年前的协和空间规划图.png", "院区空间规划历史图", "由用户提供；原始档案出处、制图信息及公开展示授权未随文件提供，来源与授权待核。"],
  ["老楼/修缮后的协和医学院壹号礼堂。新华社记者 杨湛菲 摄.jpg", "壹号礼堂修缮后外观", "图片署名：新华社记者杨湛菲；参见新华网相关建筑修缮报道。转载与公开展示授权仍需确认。"],
  ["老楼/管风琴旧照.png", "壹号礼堂管风琴旧照", "页面标注来源为北京协和医学教育基金会；公开展示授权仍需确认。"],
  ["老楼/王辰院校长来到管风琴所在的储藏室.png", "管风琴部件储藏场景", "页面标注来源为北京协和医学教育基金会；公开展示授权仍需确认。"],
  ["老楼/破损管风琴1.jpg", "修复前管风琴键盘与构件", "页面标注来源为北京协和医学教育基金会；公开展示授权仍需确认。"],
  ["老楼/破损管风琴2.png", "修复前管风琴机械部件", "页面标注来源为北京协和医学教育基金会；公开展示授权仍需确认。"],
  ["老楼/管风琴修复项目进展.jpg", "管风琴修复项目时间线", "页面标注来源为北京协和医学教育基金会；公开展示授权仍需确认。"],
  ["老楼/协和人物/这是1956年林巧稚大夫（右）在北京协和医院妇产科病房为病人做检查.png", "林巧稚人物页与人物卡片", "图片说明标注为 1956 年协和妇产科病房场景；原始出处与公开展示授权待核。"],
  ["老楼/协和人物/张孝骞（左三）为患者查体.jpg", "张孝骞人物页与人物卡片", "图片说明标注为张孝骞为患者查体；原始出处与公开展示授权待核。"],
  ["老楼/协和人物/胡正祥.webp", "胡正详人物页与人物卡片", "由网站提供；原始出处、肖像识别和公开展示授权待核。"],
  ["老楼/协和人物/曾宪九教授在图书馆.png", "曾宪九人物页与人物卡片", "由网站提供；原始出处、摄影者及公开展示授权未随文件提供，来源待核。"],
  ["老楼/协和人物/吴宪.webp", "吴宪人物页与人物卡片", "由网站提供；原始出处、肖像识别和公开展示授权待核。"],
  ["老楼/协和人物/步达生.webp", "步达生人物页与人物卡片", "由网站提供；原始出处、肖像识别和公开展示授权待核。"],
  ["老楼/协和人物/兰安生.webp", "兰安生人物页与人物卡片", "由网站提供；原始出处、肖像识别和公开展示授权待核。"]
];

function makeElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

const referenceList = document.querySelector("#referenceList");
references.forEach((group) => {
  const section = makeElement("section", "reference-group");
  section.append(makeElement("h3", "", group.category));
  group.items.forEach(([label, href]) => {
    const link = makeElement("a", "reference-card");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.append(makeElement("strong", "", label));
    link.append(makeElement("span", "", new URL(href).hostname));
    link.append(makeElement("i", "", "↗"));
    section.append(link);
  });
  referenceList.append(section);
});

const imageList = document.querySelector("#imageCredits");
imageCredits.forEach(([file, use, credit]) => {
  const item = makeElement("article", "image-credit-card");
  item.append(makeElement("code", "", file));
  item.append(makeElement("strong", "", use));
  item.append(makeElement("p", "", credit));
  imageList.append(item);
});
