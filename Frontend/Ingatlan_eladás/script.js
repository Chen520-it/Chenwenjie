const ajandekok = [
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 },
  { img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg", value: 0 }

];

const container = document.getElementById("box-container");
const legtobb = document.getElementById("legtobb");

// 动态生成方块
ajandekok.forEach((item, index) => {
  const box = document.createElement("div");
  box.className = "box";
  // 标记方块的索引
  box.setAttribute("data-index", index); 
  box.setAttribute("data-value", item.value);

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = `Ajándék ${index + 1}`;

  const span = document.createElement("span");
  span.textContent = `${item.value} szavazás`;

  box.appendChild(img);
  box.appendChild(span);

  const buttonContainer =



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
      legtobb.textContent = `A legtöbb szavazatot kapott: ${maxIndex + 1},   ${maxValue}db szavazás.`;
  } else {
      legtobb.textContent = "Jelenleg nincs szavazat.";
  }
}