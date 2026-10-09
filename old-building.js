const buildings = [
  { id: "A", name: "壹号礼堂", position: [50.4, 90.4] },
  { id: "B", name: "原教学楼", position: [30.8, 71.5] },
  { id: "C", name: "原病理楼", position: [50.0, 62.8] },
  { id: "D", name: "原解剖楼", position: [70.0, 71.6] },
  { id: "E", name: "生理／生化楼", position: [15.0, 56.6] },
  { id: "F", name: "病房楼 F", position: [14.3, 38.4] },
  { id: "G", name: "病房楼 G", position: [39.6, 40.4] },
  { id: "H", name: "病房楼 H", position: [62.3, 40.5] },
  { id: "I", name: "原图书馆", position: [76.4, 28.8] },
  { id: "J", name: "原动物实验楼", position: [50.4, 28.8] },
  { id: "K", name: "原行政楼", position: [29.2, 27.9] },
  { id: "L", name: "原宿舍", position: [15.3, 13.4] },
  { id: "M", name: "药房／药剂楼", position: [92.3, 10.7] },
  { id: "N", name: "动力楼", position: [90.6, 31.8] },
  { id: "O", name: "二期 O 楼", position: [42.6, 15.8] },
  { id: "P", name: "二期 P 楼", position: [39.6, 6.8] }
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
