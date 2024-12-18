
/**
 * 热门排行数据
 */
// 22001030203魏宇帆
const hot_ranking_data = [
  [
    { title: "星甲魂将传", flag: "hengxian1" },
    { title: "绍宋", flag: "shangsheng" },
    { title: "传武", flag: "shangsheng" },
    { title: "地球尽头", flag: "shangsheng" },
    { title: "开局一座山", flag: "xiajiang" },
    { title: "钢铁契约", flag: "xiajiang" },
    { title: "大象无形", flag: "shangsheng" },
    { title: "道诡异仙", flag: "xiajiang" },
    { title: "我的徒弟都是大反派", flag: "hengxian1" },
    { title: "恰似寒光遇骄阳", flag: "shangsheng" },
    { title: "斗破苍穹", flag: "xiajiang" },
    { title: "中国惊奇先生", flag: "shangsheng" },
    { title: "我是大神仙", flag: "hengxian1" },
    { title: "穿越成倒霉NP", flag: "shangsheng" },
    { title: "人之下", flag: "hengxian1" },
    { title: "掌门低调点", flag: "hengxian1" }
  ],
  [
    { title: "航海王", flag: "shangsheng" },
    { title: "金田一少年事件", flag: "shangsheng" },
    { title: "名侦探柯南", flag: "shangsheng" },
    { title: "龙珠(全彩版)", flag: "hengxian1" },
    { title: "胆大党", flag: "shangsheng" },
    { title: "死神/境·界", flag: "shangsheng" },
    { title: "博人传-火影次", flag: "hengxian1" },
    { title: "致死至强", flag: "shangsheng" },
    { title: "我把自己献给了", flag: "xiajiang" },
    { title: "黑色四叶草", flag: "shangsheng" },
    { title: "火影忍者", flag: "xiajiang" },
    { title: "排球少年", flag: "xiajiang" },
    { title: "龙珠", flag: "shangsheng" },
    { title: "猎人", flag: "shangsheng" },
    { title: "怪兽8号", flag: "xiajiang" },
    { title: "新网球王子", flag: "shangsheng" }
  ],
  [
    { title: "星甲魂将传", flag: "shangsheng" },
    { title: "重生封神游戏", flag: "shangsheng" },
    { title: "斗破苍穹", flag: "shangsheng" },
    { title: "我为邪帝", flag: "hengxian1" },
    { title: "我的徒弟都是大反派", flag: "shangsheng" },
    { title: "钢铁契约", flag: "shangsheng" },
    { title: "道诡异仙", flag: "xiajiang" },
    { title: "驭灵师", flag: "shangsheng" },
    { title: "一人之下", flag: "shangsheng" },
    { title: "恰似寒光遇骄阳", flag: "xiajiang" },
    { title: "开局一座山", flag: "xiajiang" },
    { title: "黑白双龙", flag: "shangsheng" },
    { title: "传武", flag: "xiajiang" },
    { title: "午时三刻", flag: "shangsheng" },
    { title: "不当舔狗", flag: "shangsheng" },
    { title: "万渣朝凰", flag: "shangsheng" }
  ]
]

/**
 * 推荐数据
 */
const recommend_data = [
  [
    { title: "位列仙班", bio: "仙界上仙贬入凡尘，终成女儿身？", category: "重生 妖怪", update: 61 },
    { title: "我的孩子是大佬", bio: "故事从路云廷，被按倒在床上开始", category: "战斗 修仙", update: 153 },
    { title: "少女总裁Love", bio: "不可思议的Love Game", category: "职场 神仙", update: 90 },
    { title: "如梦令", bio: "强势复仇回归", category: "古风 复仇", update: 151 },
    { title: "拜托别吃我", bio: "这只仓鼠是我的食物", category: "妖怪 搞笑", update: 106 },
    { title: "无缘佛", bio: "古代画本巨巨VS骗妖渡灵师", category: "古风 妖怪", update: 148 },
    { title: "炼气炼了三千年", bio: "沉迷练气，无法自拔！", category: "古风 女神", update: 382 },
    { title: "大国师", bio: "前世宿敌娱乐圈重逢相爱相杀", category: "古风 职场", update: 79 }
  ],
  [
    { title: "武道巅峰", bio: "我要带着师姐登顶巅峰！", category: "女神 战斗", update: 79 },
    { title: "太古妖圣拿我当炉鼎", bio: "契约太古妖圣靠亲亲抱...", category: "妖怪 战斗", update: 79 },
    { title: "最强氪金", bio: "合成人也有七情六欲！", category: "系统 女神", update: 81 },
    { title: "琅寰书院", bio: "玩世不恭却武力暴表的修仙校长", category: "古风 女神", update: 127 },
    { title: "影杀", bio: "薄如纸的杀手！", category: "推理 惊悚", update: 44 },
    { title: "我家大师兄脑子有坑", bio: "这个大师兄没救了", category: '穿越 重生', update: 541 },
    { title: "万渣朝凰", bio: "一时虐渣一时爽，一直虐渣一直爽", category: "复仇 系统", update: 813 },
    { title: "我不是教主", bio: "盟主大人！快住手！", category: "古风 战斗", update: 337 }
  ],
  [
    { title: "黑色曼陀罗", bio: "绽放的复仇之花！", category: "推理 惊悚", update: 85 },
    { title: "我的天劫女友", bio: "屌丝误入修真路", category: "战斗 神仙", update: 812 },
    { title: "修仙就要傍富婆", bio: "不装了，我摊牌了！本尊是仙帝", category: "穿越 reversal", update: 254 },
    { title: "一口也不吃", bio: "越美味的食物越有毒，爱情也是", category: "美食 战斗", update: 87 },
    { title: "师兄请按剧本来", bio: "穿越到了电视剧中", category: "穿越 战斗", update: 161 },
    { title: "黑背信天翁", bio: "高冷吸血鬼×软萌小僵尸", category: "职场 大女主", update: 95 },
    { title: "开局一条鲲", bio: "高能预警，鲲系列漫画诞生！", category: "重生 战斗", update: 185 },
    { title: "大猿魂", bio: "妖怪大道，险象环生！", category: "妖怪 战斗", update: 80 },
  ]
];

/**
 * 动画数据
 */
const exclusive_data = [
  {
    title: "幻界王",
    update: 20,
    description: "平凡小子成为幻兽之王",
    author: "绘漫",
    bio: "《幻界王》主要讲述在大多数人天生就拥有“幻魂力”的幻兽大陆上，一名天生没有能力的少年从小就梦想成为下一任幻界王。可是，没有半点能力的他能实现自己的梦想吗？在天武考试前的某一天，他遇见了上次大战中落败的魔武的间谍少女。就这样，背负着复兴魔武而潜入天武的间谍少女与梦想单排成王的“零天赋”的青铜少年，将卷入这个幻兽大陆中天武和魔武两大势力的各种阴谋和斗争中.…·【这就去看】",
  },
  {
    title: "狐妖小红娘",
    update: 13,
    description: "每周五更新",
    author: "夏天岛",
    bio: " 道士不一定都仙风道骨，也可能贪财无节操；天降的不一定是天使，也可能是惹祸小狐妖！国内首部人“妖”恋爱动画，二次元古风美翻天！唯美，玄幻，搞笑，恋爱多元素一网打尽！【这就去看】"
  },
  {
    title: "妖怪名单",
    update: 17,
    description: "每周四更新",
    author: "糖人家",
    bio: "魅惑众生的九尾狐狸？吸人精气的合欢树妖？道家妹子求双修，仙家女神若即离。游走在这些危险分子中间可不是容易的事情。但为了世界和平，少年封夕豁出去啦!【这就去看】"
  },
  {
    title: "通灵妃",
    update: 16,
    description: "每周五更新",
    author: "肉肉",
    bio: " 丞相府大小姐千云兮自小身负异能，被视为不详之人养在灵云山上，16岁这年代替妹妹千云裳嫁入夜王府，传说夜幽冥性情古怪，冷酷残暴，千云兮将面临的会是怎样的处境呢·……【这就去看】"
  }
];


/**
 * 热门排行
 */
// 22001030203魏宇帆
let rankingTabs = document.querySelectorAll(".wei_hot-ranking .wei_ranking-handle .wei_ranking-tab li");
let rankingList = document.querySelectorAll(".wei_hot-ranking .wei_ranking-content .wei_ranking-list li");
for (let i = 0; i < rankingTabs.length; i++) {
  rankingTabs[i].addEventListener("mouseenter", function () {
    document.querySelector(".wei_hot-ranking .wei_ranking-handle .wei_ranking-tab .wei_active").classList.remove("wei_active");
    this.classList.add("wei_active");
    for (let j = 0; j < rankingList.length; j++) {
      rankingList[j].innerHTML = `<a href="">${hot_ranking_data[i][j].title}</a><i class="iconfont icon-${hot_ranking_data[i][j].flag}"></i>`
    }
  });
}


/**
 * 强档推荐
 * 
 */
// 22001030203魏宇帆
let dots = document.querySelectorAll(".wei_dots .wei_dot");
let lis = document.querySelectorAll(".wei_recommend .wei_recommend-list li"); // 声明并初始化 lis 变量


for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    document.querySelector(".wei_dots .wei_active").classList.remove("wei_active");
    this.classList.add("wei_active");

    for (let j = 0; j < recommend_data[i].length; j++) {
      lis[j].innerHTML = `
          <a title="${recommend_data[i][j].title}" href="">
            <img src="../img/${recommend_data[i][j].title}.jpg" alt="${recommend_data[i][j].title}" />
          </a>
          <p class="wei_cover-updata"><a href="">更新至${recommend_data[i][j].update}话</a></p>
          <div class="wei_cover-info">
            <h5 href="">${recommend_data[i][j].title}</h5>
            <p class="wei_cover-intro">${recommend_data[i][j].bio}</p>
            <p class="wei_cover-tag">${recommend_data[i][j].category}</p>
          </div>`;
    }
  });
}



/**
 * 畅销漫画
 */
// 22001030203魏宇帆
// 获取元素

const pageNumber = document.querySelector('.wei_page-number');
const jian = document.querySelector('.wei_jian');
const jia = document.querySelector('.wei_jia');

// 22001030203魏宇帆
// 初始化当前页码

let currentPage = parseInt(pageNumber.textContent.split('/')[0]);
const totalPages = parseInt(pageNumber.textContent.split('/')[1]);

let sellingList = document.querySelectorAll('.wei_selling-list li');

// 22001030203魏宇帆
// 添加点击事件监听器

jian.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    pageNumber.textContent = `${currentPage}/${totalPages}`;

    for (let i = 0; i < sellingList.length; i++) {
      // recommend_data
      // 22001030203魏宇帆
      sellingList[i].innerHTML = `
        <a title="${recommend_data[currentPage - 1][i].title}" href="">
          <img src="../img/${recommend_data[currentPage - 1][i].title}.jpg" alt="${recommend_data[currentPage - 1][i].title}" />
        </a>
        <p class="wei_cover-updata"><a href="">更新至${recommend_data[currentPage - 1][i].update}话</a></p>
        <div class="wei_cover-info">
          <h5 href="">${recommend_data[currentPage - 1][i].title}</h5>
          <p class="wei_cover-intro">${recommend_data[currentPage - 1][i].bio}</p>
          <p class="wei_cover-tag">${recommend_data[currentPage - 1][i].category}</p>
        </div>`;
    }
  }
});

jia.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    pageNumber.textContent = `${currentPage}/${totalPages}`;

    for (let i = 0; i < sellingList.length; i++) {
      // recommend_data
      // 22001030203魏宇帆
      sellingList[i].innerHTML = `
        <a title="${recommend_data[currentPage - 1][i].title}" href="">
          <img src="../img/${recommend_data[currentPage - 1][i].title}.jpg" alt="${recommend_data[currentPage - 1][i].title}" />
        </a>
        <p class="wei_cover-updata"><a href="">更新至${recommend_data[currentPage - 1][i].update}话</a></p>
        <div class="wei_cover-info">
          <h5 href="">${recommend_data[currentPage - 1][i].title}</h5>
          <p class="wei_cover-intro">${recommend_data[currentPage - 1][i].bio}</p>
          <p class="wei_cover-tag">${recommend_data[currentPage - 1][i].category}</p>
        </div>`;
    }
  }
});


// 22001030203魏宇帆
//签约作品

let signList = document.querySelectorAll('.wei_sign .wei_sign-content .wei_sign-book .wei_sign-books .wei_sign-list li');
let mainBook = document.querySelector('.wei_main-book');
let mainBookInfo = document.querySelector('.wei_main-book-info');

for (let i = 0; i < signList.length; i++) {
  signList[i].addEventListener('mouseenter', function () {
    mainBook.innerHTML = `
          <a href="">
            <img src="../img/${recommend_data[0][i].title}.jpg" alt="" />
          </a>`;

    mainBookInfo.innerHTML = `
          <a href="">
            <h2>${recommend_data[0][i].title}</h2>
          </a>
          <p class="wei_cover-intro">${recommend_data[0][i].bio}</p>
          <p class="wei_cover-tag">${recommend_data[0][i].category}</p>`;
  });
}

/**
 * 独家漫画
 */
// 22001030203魏宇帆
let exclusiveList = document.querySelectorAll('.wei_exclusive-list li');
let exclusiveBook = document.querySelector('.wei_exclusive-content .wei_main-book');
let exclusiveBookInfo = document.querySelector('.wei_exclusive-info');

for (let i = 0; i < exclusiveList.length; i++) {
  let icon = exclusiveList[i].querySelector('.icon-bofang');
  exclusiveList[i].addEventListener('mouseenter', function () {
    if (icon) {
      icon.style.color = '#F07364'; // 可以根据需要更改颜色
      // 22001030203魏宇帆
    }

    exclusiveBook.innerHTML = `
        <a href="">
          <img src="../img/${exclusive_data[i].title}.jpg" alt="" />
        </a>`;

    exclusiveBookInfo.innerHTML = `
      <a href="">
            <h3>${exclusive_data[i].title}</h3>
            <h3>[更新至${exclusive_data[i].update}集]</h3>
          </a>
          <h4>${exclusive_data[i].description}</h4>
          <p class="wei_cover-intro">作者：${exclusive_data[i].author}</p>
          <p class="wei_cover-tag">
            ${exclusive_data[i].bio}
          </p>`;
  });
  // 鼠标离开时恢复颜色
  // 22001030203魏宇帆
  exclusiveList[i].addEventListener('mouseleave', () => {
    if (icon) {
      icon.style.color = ''; 
      // 恢复默认颜色
      // 22001030203魏宇帆
    }
  });
}

