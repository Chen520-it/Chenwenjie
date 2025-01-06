const ajandekok = [
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 },
  { img: "https://kep.index.hu/1/0/3052/30529/305297/30529723_2343937_e260a1d167f4cd9605728e3855231af2_wm.jpg", value: 0 }

];

const container = document.getElementById("box-container");
const legtobb = document.getElementById("legtobb");

// 动态生成方块
ajandekok.forEach((item, index) => {
  const box = document.createElement("div");
  box.className = "box";
  box.setAttribute("data-index", index); // 标记方块的索引
  box.setAttribute("data-value", item.value);

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = `Ajándék ${index + 1}`;

  const span = document.createElement("span");
  span.textContent = `${item.value} szavazás`;

  box.appendChild(img);
  box.appendChild(span);

      box.addEventListener("click", () => {
      let szavazas = parseInt(box.getAttribute("data-value"), 10);
      szavazas += 1;
      box.setAttribute("data-value", szavazas);
      span.textContent = `${szavazas} szavazás`;

      ajandekok[index].value=szavazas;

      // 更新票数
      frisites();
  });

  container.appendChild(box);
});

// 更新最高票数
function frisites() {
  let maxValue = 0;
  let maxIndex = -1;

  // 票数最高的显示出来
  ajandekok.forEach((item, index) => {
      const value=item.value;

      if (value > maxValue) {
          maxValue = value;
          maxIndex = index;
      }
  });

  // 更新结果
  if (maxValue > 0) {
      legtobb.textContent = `A legtöbb szavazatot kapott: Ajándék ${maxIndex + 1} ${maxValue} szavazás.`;
  } else {
      legtobb.textContent = "Jelenleg nincs szavazat.";
  }
}