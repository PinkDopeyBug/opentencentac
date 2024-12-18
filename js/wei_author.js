const ip_data = [
  { "title": "位列仙班", bio: "仙界上仙贬入凡尘，终成女儿身？", author: "梦幻星辰", views: 12.3, followers: 2.1 },
  { "title": "少女总裁Love", bio: "不可思议的Love Game", author: "青云直上", views: 15.6, followers: 3.4 },
  { "title": "如梦令", bio: "强势复仇回归", author: "月夜流光", views: 20.5, followers: 4.8 },
  { "title": "拜托别吃我", bio: "这只仓鼠是我的食物", author: "笑看风云", views: 11.2, followers: 1.9 },
  { "title": "师兄请按剧本来", bio: "穿越到了电视剧中", author: "穿越之旅", views: 12.9, followers: 2.3 },
  { "title": "大国师", bio: "前世宿敌娱乐圈重逢相爱相杀", author: "风云再起", views: 14.4, followers: 2.7 },
  { "title": "太古妖圣拿我当炉鼎", bio: "契约太古妖圣靠亲亲抱...", author: "仙途漫漫", views: 13.9, followers: 2.5 },
  { "title": "琅寰书院", bio: "玩世不恭却武力暴表的修仙校长", author: "修仙之路", views: 17.1, followers: 3.2 },
  { "title": "我家大师兄脑子有坑", bio: "这个大师兄没救了", author: "重生之路", views: 22.8, followers: 5.3 },
  { "title": "万渣朝凰", bio: "一时虐渣一时爽，一直虐渣一直爽", author: "快意恩仇", views: 25.4, followers: 6.1 },
  { "title": "我不是教主", bio: "盟主大人！快住手！", author: "古风侠士", views: 19.3, followers: 4.1 },
  { "title": "黑色曼陀罗", bio: "绽放的复仇之花！", author: "推理大师", views: 10.8, followers: 2.0 },
  { "title": "我的天劫女友", bio: "屌丝误入修真路", author: "修真之路", views: 16.5, followers: 3.5 },
  { "title": "修仙就要傍富婆", bio: "不装了，我摊牌了！本尊是仙帝", author: "仙帝归来", views: 14.2, followers: 2.8 },
  { "title": "师兄请按剧本来", bio: "穿越到了电视剧中", author: "穿越之旅", views: 12.9, followers: 2.3 }
];

const ipList = document.querySelector('.wei_ip-list');

ipList.innerHTML = ``;
for (let i = 0; i < ip_data.length; i++) {
  ipList.innerHTML += `
    <li>
      <a title="${ip_data[i].title}">
        <img src="../img/author/${ip_data[i].title}.jpg" alt="${ip_data[i].title}">
      </a>
    </li>
  `;
}

// 获取弹窗元素
// 22001030203魏宇帆
const popup = document.getElementById('wei_popup');
const closeBtn = document.querySelector('.wei_close-btn');
const popupImg = document.getElementById('wei_popup-img');
console.log(popupImg);
const popupTitle = document.getElementById('wei_popup-title');
const popupBio = document.getElementById('wei_popup-bio');
const popupAuthor = document.getElementById('wei_popup-author');
const popupViews = document.getElementById('wei_popup-views');
const popupFollowers = document.getElementById('wei_popup-followers');

// 添加事件监听器到每个a元素
// 22001030203魏宇帆
ipList.addEventListener('click', function (event) {
  if (event.target.tagName === 'A' || event.target.tagName === 'IMG') {
    event.preventDefault();
    let title = event.target.closest('a').getAttribute('title');
    let ipItem = ip_data.find(item => item.title === title);


    if (ipItem !== undefined) {
      popupImg.src = `../img/author/${ipItem.title}.jpg`;
      popupTitle.textContent = ipItem.title;
      popupBio.textContent = ipItem.bio;
      popupAuthor.textContent = ipItem.author;
      popupViews.textContent = ipItem.views;
      popupFollowers.textContent = ipItem.followers;

      popup.style.display = 'block';
    }
  }
});

// 关闭弹窗
// 22001030203魏宇帆
closeBtn.addEventListener('click', function () {
  popup.style.display = 'none';
});

// 点击弹窗外区域关闭弹窗
// 22001030203魏宇帆
window.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

const login = document.querySelectorAll('.wei_login a');
for (let i = 0; i < login.length; i++) {
  login[i].addEventListener("click", function () {
    let agreement = document.querySelector(".wei_agreement input");
    // 如果没有勾选就弹出弹框
    // 22001030203魏宇帆
    if (!agreement.checked) {
      alert("请先勾选腾讯动漫平台服务协议&腾讯动漫隐私保护指引");
    }
  });
}