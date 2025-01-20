const lakasok = [
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, I. kerület",
      szobaszam: "3",
      leiras: "Tágas nappali, jó közlekedés.",
      alapterulet: "80㎡",
      ar: "60 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, II. kerület",
      szobaszam: "4",
      leiras: "Családbarát környék, közel iskola és park.",
      alapterulet: "100㎡",
      ar: "75 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, III. kerület",
      szobaszam: "2",
      leiras: "Csendes környék, fiatal pároknak ideális.",
      alapterulet: "70㎡",
      ar: "50 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, I. kerület",
      szobaszam: "3",
      leiras: "Felújított lakás, közel a várhoz.",
      alapterulet: "80㎡",
      ar: "62 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, II. kerület",
      szobaszam: "3",
      leiras: "Tágas lakás erkéllyel és panorámával.",
      alapterulet: "90㎡",
      ar: "70 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, V. kerület",
      szobaszam: "2",
      leiras: "Belvárosi lakás, közel üzletekhez.",
      alapterulet: "60㎡",
      ar: "55 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, III. kerület",
      szobaszam: "4",
      leiras: "Kertkapcsolatos lakás, ideális családoknak.",
      alapterulet: "100㎡",
      ar: "78 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, VI. kerület",
      szobaszam: "1",
      leiras: "Garzonlakás fiataloknak.",
      alapterulet: "35㎡",
      ar: "38 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, VII. kerület",
      szobaszam: "2",
      leiras: "Jól megközelíthető, kényelmes lakás.",
      alapterulet: "70㎡",
      ar: "48 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, V. kerület",
      szobaszam: "2",
      leiras: "Luxuslakás a belváros szívében.",
      alapterulet: "60㎡",
      ar: "80 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, IV. kerület",
      szobaszam: "3",
      leiras: "Csendes környék, parkok közelében.",
      alapterulet: "85㎡",
      ar: "63 millió Ft"
    },
    {
      img: "https://ingatlan5.hu/public/storage/Ingatlanado2.jpg",
      telepules: "Budapest, VIII. kerület",
      szobaszam: "2",
      leiras: "Panorámás lakás, kiváló közlekedéssel.",
      alapterulet: "75㎡",
      ar: "58 millió Ft"
    }
  ];
  
  // 获取HTML元素
  const container = document.getElementById("box-container");
  const addButton = document.getElementById("add-button");
  
  // 渲染房子信息
  function renderLakasok() {
    container.innerHTML = ""; // 清空容器
    lakasok.forEach((item, index) => {
      const box = document.createElement("div");
      box.className = "box";
  
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = `房源 ${index + 1}`;
  
      const info = document.createElement("div");
      info.className = "info";
      info.innerHTML = `
        Település: ${item.telepules}<br>
        Szobaszám: ${item.szobaszam}<br>
        Alapírás: ${item.leiras}<br>
        Alapterület: ${item.alapterulet}<br>
        Ár: ${item.ar}
      `;
  
      box.appendChild(img);
      box.appendChild(info);
      container.appendChild(box);
    });
  }
  
  // 添加新房源
  addButton.addEventListener("click", () => {
    const telepules = prompt("Adja meg a települést (kerület):");
    const szobaszam = prompt("Adja meg a szobák számát:");
    const leiras = prompt("Adja meg a lakás leírását:");
    const alapterulet = prompt("Adja meg az alapterületet:");
    const ar = prompt("Adja meg az árat:");
    
  
    if (!telepules || !szobaszam || !leiras || !alapterulet || !ar) {
      alert("Minden mezőt ki kell tölteni!");
      return;
    }
  
    // 添加到数组并重新渲染
    lakasok.push({telepules, szobaszam, leiras, alapterulet, ar });
    renderLakasok();
  });
  
  // 初始化渲染
  renderLakasok();
  