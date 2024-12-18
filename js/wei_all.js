/**
 * 1为热门人气数据
 * 2为更新时间顺序
 */
// 22001030203魏宇帆
const hot_data = [
  [
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
  ],
  [
    [
      { title: "黑色曼陀罗", bio: "绽放的复仇之花！", category: "推理 惊悚", update: 85 },
      { title: "我的天劫女友", bio: "屌丝误入修真路", category: "战斗 神仙", update: 812 },
      { title: "修仙就要傍富婆", bio: "不装了，我摊牌了！本尊是仙帝", category: "穿越 reversal", update: 254 },
      { title: "一口也不吃", bio: "越美味的食物越有毒，爱情也是", category: "美食 战斗", update: 87 },
      { title: "师兄请按剧本来", bio: "穿越到了电视剧中", category: "穿越 战斗", update: 161 },
      { title: "黑背信天翁", bio: "高冷吸血鬼×软萌小僵尸", category: "职场 大女主", update: 95 },
      { title: "开局一条鲲", bio: "高能预警，鲲系列漫画诞生！", category: "重生 战斗", update: 185 },
      { title: "大猿魂", bio: "妖怪大道，险象环生！", category: "妖怪 战斗", update: 80 },
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
    ]
  ]
];

//顶部标题栏
// 22001030203魏宇帆
const title = document.querySelectorAll('.wei_container-right .wei_container-title .wei_title-left a');
const result = document.querySelector('.wei_result');
const pre = document.querySelector('.wei_pre');
const next = document.querySelector('.wei_next');
const list = document.querySelector('.wei_title-right ul');
let children = document.querySelectorAll('.wei_title-right ul li a');
let flag = 0;
let title_flag = 0;

//内容
// 22001030203魏宇帆
const content = document.querySelector('.wei_recommend-list');
console.log(content);

function flushContent(title_flag, flag) {
  //内容切换
  // 22001030203魏宇帆
  content.innerHTML = '';
  for (let j = 0; j < hot_data[title_flag][flag].length; j++) {
    content.innerHTML += `
          <li class="wei_bx-clone">
            <a title="${hot_data[title_flag][flag][j].title}" href="">
              <img src="../img/${hot_data[title_flag][flag][j].title}.jpg" alt="${hot_data[title_flag][flag][j].title}" />
            </a>
            <p class="wei_cover-updata"><a href="">更新至${hot_data[title_flag][flag][j].update}话</a></p>
            <div class="wei_cover-info">
              <h5 href="">${hot_data[title_flag][flag][j].title}</h5>
              <p class="wei_cover-tag">${hot_data[title_flag][flag][j].category}</p>
              <p class="wei_cover-intro">${hot_data[title_flag][flag][j].bio}</p>
              <span><a>开始阅读</a></span>
            </div>
          </li>`;
  }
}

//children点击切换到对应的
// 22001030203魏宇帆
function addNumberListener() {
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("click", function () {
      
      let active=document.querySelector('.wei_title-right ul .wei_number .wei_active');
      active.classList.remove("wei_active");
      console.log(active);
      children[i].classList.add("wei_active");
      console.log(children[i]);
      flag = i;
      flushContent(title_flag, flag);
      console.log('title_flag:', title_flag);
      console.log('flag:', flag);
    });
  }
}

addNumberListener();

//热门人气与更新时间排序切换
// 22001030203魏宇帆
for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function () {
    document.querySelector('.wei_container-right .wei_container-title .wei_title-left .wei_active').classList.remove("wei_active");
    this.classList.add("wei_active");
    title_flag = i;
    let n = hot_data[i].length;
    result.innerHTML = `共<strong>${n}</strong>个结果`;
    flag = 0
    if (n > 4) {
      list.innerHTML = `
              <li class="wei_number"><a class="wei_active">1</a></li>
              <li class="wei_number"><a>2</a></li>
              <li><a>...</a></li>
              <li class="wei_number"><a>${n}</a></li>
      `;
    } else if (n == 4) {
      list.innerHTML = `
              <li class="wei_number"><a class="wei_active">1</a></li>
              <li class="wei_number"><a>2</a></li>
              <li class="wei_number"><a>3</a></li>
              <li class="wei_number"><a>4</a></li>`;
    } else if (n < 4 && n > 0) {
      list.innerHTML = '';
      for (let j = 0; j < n; j++) {
        if (j == 0) {
          list.innerHTML += `<li class="wei_number"><a class="wei_active">${j + 1}</a></li>`;
        } else {
          list.innerHTML += `<li class="wei_number"><a>${j + 1}</a></li>`;
        }
      }
    }
    children = document.querySelectorAll('.wei_title-right ul li a');
    flushContent(title_flag, flag);
    addNumberListener();
  });
}

//上一页 下一页切换
// 22001030203魏宇帆
pre.addEventListener("click", function () {
  if (flag > 0) {
    flag--;
    list.children[flag + 1].children[0].classList.remove("wei_active");
    list.children[flag].children[0].classList.add("wei_active");
    flushContent(title_flag, flag);
  }
});

next.addEventListener("click", function () {
  if (flag < hot_data[title_flag].length - 1) {
    flag++;
    list.children[flag - 1].children[0].classList.remove("wei_active");
    list.children[flag].children[0].classList.add("wei_active");
    flushContent(title_flag, flag);
  }
});






