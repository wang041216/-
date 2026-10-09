const places = [
  {
    id: "surgery",
    name: "外科楼",
    category: "临床空间",
    summary: "从图上的这栋楼出发，了解外科诊疗空间，以及协和外科相关的发展故事。",
    points: ["楼宇功能与空间布局", "外科发展中的代表性故事", "可配合老照片或口述内容"],
    position: [24, 19]
  },
  {
    id: "emergency",
    name: "急诊楼",
    category: "临床空间",
    summary: "以急诊空间为入口，讲述急救服务如何组织，以及急诊医学的发展。",
    points: ["急诊空间与服务流程", "急救知识与就医指引", "一线医护团队的故事"],
    position: [10, 8]
  },
  {
    id: "outpatient",
    name: "门诊楼",
    category: "临床空间",
    summary: "从门诊楼认识患者就诊体验、门诊服务变化与医院日常。",
    points: ["门诊服务与就医流程", "空间与导诊体验", "门诊发展相关的故事"],
    position: [71, 19]
  },
  {
    id: "teaching",
    name: "教学楼",
    category: "医学教育",
    summary: "走近医学教育场景，了解临床教学、人才培养与医学传承。",
    points: ["课堂与临床如何衔接", "师生与带教故事", "协和医学教育的历史线索"],
    position: [54, 31]
  },
  {
    id: "old",
    name: "老楼",
    category: "建筑与院史",
    summary: "从建筑本身开始，收集老楼的沿革、细节与院区记忆。",
    points: ["建筑外观与空间细节", "历史照片与今昔对比", "与院区发展有关的人物和故事"],
    position: [25, 62]
  },
  {
    id: "internal",
    name: "内科楼",
    category: "临床空间",
    summary: "了解内科诊疗空间，并以经过核实的科室资料补充相关医学故事。",
    points: ["内科诊疗与学科介绍", "代表性医学故事", "面向公众的疾病科普"],
    position: [55, 62]
  },
  {
    id: "transformation",
    name: "转化楼",
    category: "科研创新",
    summary: "以“从研究到临床”为主题，介绍医学研究如何服务临床需求。",
    points: ["临床问题如何启发研究", "科研成果转化的基本过程", "科研与临床协作故事"],
    position: [77, 45]
  },
];

const hotspotLayer = document.querySelector("#hotspots");
const buildingList = document.querySelector("#buildingList");
let activePlace = -1;

function selectPlace(index) {
  activePlace = (index + places.length) % places.length;
  const place = places[activePlace];
  if (place.id === "old") {
    window.location.href = "./old-building.html";
    return;
  }
  window.location.href = `./campus-building.html?place=${place.id}`;
}

places.forEach((place, index) => {
  const hotspot = document.createElement("button");
  hotspot.type = "button";
  hotspot.className = "hotspot";
  hotspot.classList.toggle("hotspot-featured", place.id === "old");
  hotspot.style.left = `${place.position[0]}%`;
  hotspot.style.top = `${place.position[1]}%`;
  hotspot.textContent = String(index + 1).padStart(2, "0");
  hotspot.setAttribute("aria-label", `查看${place.name}概览`);
  hotspot.setAttribute("aria-pressed", "false");
  hotspot.addEventListener("click", () => selectPlace(index));
  hotspotLayer.append(hotspot);

  const listButton = document.createElement("button");
  listButton.type = "button";
  listButton.className = "list-item";
  listButton.textContent = place.name;
  listButton.setAttribute("aria-pressed", "false");
  listButton.addEventListener("click", () => selectPlace(index));
  buildingList.append(listButton);
});

document.querySelector("#nextButton").addEventListener("click", () => {
  selectPlace(activePlace < 0 ? 0 : activePlace + 1);
});

document.querySelector("#detailCard").classList.add("is-welcome");
document.querySelector(".building-list-wrap").hidden = true;
