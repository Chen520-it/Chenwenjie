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
  box.setAttribute("data-index", index);
  box.setAttribute("data-value", item.value);

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = `Lakás ${index + 1}`;

  const span = document.createElement("span");
  span.textContent = `${item.value} szavazás`;

  const button = document.createElement("button");
  button.textContent = "Érdeklődés";
  button.className = "erdeklodes";

  // 按钮点击事件 - 发送邮件
  button.addEventListener("click", (event) => {
      event.stopPropagation(); // 防止触发父级点击事件

      // 获取用户输入的信息
      const userName = prompt("请输入您的名字：");
      const userPhone = prompt("请输入您的电话：");
      

      if (!userName || !userPhone) {
          alert("所有信息不能为空！");
          return;
      }

      
      emailjs.init("service_zuc6ubu"); 

      // 邮件数据
      const emailAdatok = {
          to_email: "chenwenjie0505@gmaail.com", // 替换为接收邮件的邮箱
          user_name: userName,
          user_phone: userPhone,
          
          subject: `Érdeklődés a(z) ${index + 1} számú lakás iránt`,
      };

      // 发送邮件
      emailjs.send("service_zuc6ubu", "template_6lvcxha", emailAdatok)
             .then((response) => {
              alert("邮件已成功发送！");
          })
            .catch((error) => {
              console.error("邮件发送失败:", error);
              alert("邮件发送失败，请稍后再试！");
          });
  });

  box.appendChild(img);
  box.appendChild(span);
  box.appendChild(button);

  box.addEventListener("click", () => {
      let szavazas = parseInt(box.getAttribute("data-value"), 10);
      szavazas += 1;
      box.setAttribute("data-value", szavazas);
      span.textContent = `${szavazas} szavazás`;
      lakasok[index].value = szavazas;
      frisites();
  });

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
