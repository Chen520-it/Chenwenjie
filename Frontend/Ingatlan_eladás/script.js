const lakasok= [
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
//获取html的元素
const container = document.getElementById("box-container");
const legtobb = document.getElementById("legtobb");

// 动态生成方块
lakasok.forEach((item, index) => {
  const box = document.createElement("div");
  box.className = "box";
  // 设计方块属性
  box.setAttribute("data-index", index); 
  box.setAttribute("data-value", item.value);

  //让每个方块都添加图片 并且标记成房子几号
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = `Lakás ${index+1}`;

  //创建显示票数的文本
  const span = document.createElement("span");
  span.textContent = `${item.value} szavazás`;

  //创建按钮
  const button = document.createElement("button");
  button.textContent = "Érdeklődés";
  button.className = "erdeklodes"

  //将图片和文字添加到方块里面
  box.appendChild(img);
  box.appendChild(span);
  box.appendChild(button);

  //点击事件，增加票数然后更新票数
  box.addEventListener("click", () => {
  let szavazas = parseInt(box.getAttribute("data-value"), 10);
  szavazas += 1;
  box.setAttribute("data-value", szavazas);
  span.textContent = `${szavazas} szavazás`; 
  //更新全局的数据
  lakasok[index].value=szavazas;

  // 更新票数排名
  frisites();
  });
  //将方块添加到box里
  container.appendChild(box);
});

// 更新最高票数
function frisites() {
  let maxValue = 0;
  let maxIndex = -1;

  // 票数最高的显示出来
  lakasok.forEach((item, index) => {
      const value=item.value;

      if (value > maxValue) {
          maxValue = value;
          maxIndex = index;
      }
  });

  // 更新结果
  if (maxValue > 0) {
      legtobb.textContent = `A legtöbb szavazatot kapott: ${maxIndex + 1},   ${maxValue}db szavazás.`;
  } 
  else {
      legtobb.textContent = "Jelenleg nincs szavazat.";
  }
}