const buildings = [
  { id: "A", name: "壹号礼堂", position: [50.4, 90.4] },
  { id: "B", name: "解剖学楼", position: [30.8, 71.5] },
  { id: "C", name: "校办公室及生物化学楼", position: [50.0, 62.8] },
  { id: "D", name: "生理学、药理学楼", position: [70.0, 71.6] },
  { id: "E", name: "特别病房", position: [15.0, 56.6] },
  { id: "F", name: "医院行政及住院医生宿舍", position: [14.3, 38.4] },
  { id: "G", name: "外科病房", position: [39.6, 40.4] },
  { id: "H", name: "内科病房", position: [62.3, 40.5] },
  { id: "I", name: "病理学楼", position: [76.4, 28.8] },
  { id: "J", name: "门诊楼", position: [50.4, 28.8] },
  { id: "K", name: "妇科、总务及儿科病房", position: [29.2, 27.9] },
  { id: "L", name: "护士楼／图书馆", position: [15.3, 13.4] },
  { id: "M", name: "动力房", position: [92.3, 10.7] },
  { id: "N", name: "动物房及仓库", position: [90.6, 31.8] },
  { id: "O", name: "专科门诊及住院医师宿舍", position: [42.6, 15.8] },
  { id: "P", name: "传染病楼", position: [39.6, 6.8] }
];

const layer = document.querySelector("#heritageHotspots");
const selectedId = new URLSearchParams(window.location.search).get("place")?.toUpperCase();
const selectedBuilding = buildings.find((building) => building.id === selectedId);

buildings.forEach((building) => {
  const link = document.createElement("a");
  link.className = "heritage-hotspot";
  if (building.id === selectedId) {
    link.classList.add("is-selected");
    link.setAttribute("aria-current", "location");
  }
  link.href = `./heritage.html?place=${building.id}`;
  link.style.left = `${building.position[0]}%`;
  link.style.top = `${building.position[1]}%`;
  link.setAttribute("aria-label", `查看 ${building.id} 楼：${building.name}`);
  link.title = `${building.id} 楼 · ${building.name}`;

  const letter = document.createElement("span");
  letter.textContent = building.id;
  link.append(letter);

  const label = document.createElement("span");
  label.className = "heritage-hotspot-label";
  label.textContent = building.name;
  link.append(label);
  layer.append(link);
});

if (selectedBuilding) {
  const locationNote = document.querySelector("#mapLocationNote");
  locationNote.hidden = false;
  locationNote.textContent = `已定位：${selectedBuilding.id} 楼 · ${selectedBuilding.name}。点击高亮点位，查看建筑故事。`;
}
