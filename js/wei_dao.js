const comment_data = [
  [
    { title: "位列仙班", comment: "千万不要腰斩 ", dateTime: "2024-12-15 12:36", driver: "Android", agree: 0 },
    { title: "我的孩子是大佬", comment: "比想象中好，真要画那种丑不拉几我反正不乐意", dateTime: "2024-12-14 10:49", driver: "Android", agree: 1 },
    { title: "少女总裁Love", comment: "不用想的，直接五颗星。没想到道异仙竟然出漫画了！", dateTime: "2024-12-15 11:08", driver: "Android", agree: 0 },
    { title: "如梦令", comment: "想看到＂妈，我分不清＂这段，不知道还要多久", dateTime: "2024-12-15 10:14", driver: "Android", agree: 0 },
    { title: "拜托别吃我", comment: "没有看过小说，漫画好看一点还是小说好看啊？", dateTime: "2024-12-14 20:05", driver: "Android", agree: 2 },
    { title: "无缘佛", comment: "放心，白灵淼不会④的，还和白灵淼成亲了，后面去见白灵淼家长时，白家因为被朝廷逼迫，没法回到牛心村去住，差点全部④在外面，幸好火子哥后面找到了白灵淼的父母，和白家上下打成一片，还给他们全家烤火取暖，白灵淼的父亲对李火旺感激涕零，请他吃橘子，很温馨的", dateTime: "2024-12-14 01:22", driver: "Android", agree: 11 },
    { title: "炼气炼了三千年", comment: "放心这次脱白师妹裤子，以后白灵淼掏心掏肺的对他好，这俩人最后很幸福，还有个孩子叫岁岁", dateTime: "2024-12-14 00:18", driver: "Android", agree: 146 },
    { title: "武道巅峰", comment: "放心吧，后面去白灵淼家送温暖了，还有个孩子，然后就....", dateTime: "2024-12-15 04:28", driver: "Android", agree: 1 },
    { title: "太古妖圣拿我当炉鼎", comment: "应该是，丁丑，六丁六甲，道教用法，不能写成繁体字“醜”，就像北斗，斗姆，不能写成“”。作者大大可以了解后，改一下字。", dateTime: "2024-11-23 21:54", driver: "Android", agree: 3 },
    { title: "大国师", comment: "彩蛋是卖火柴的小女孩？点了一根火柴，看到李火旺在杀人放火？", dateTime: "2024-12-15 00:54", driver: "iPad", agree: 2 }
  ],
  [
    { title: "最强氪金", comment: "李火旺才是大夫，而床上是丹阳子啊，另一个世界的剧情中，丹阳子化为了大夫的三尸，最后还登上了南天门，与仙对饮呢，诸位切莫信漫画所画，我不会骗你们的", dateTime: "2024-11-23 00:16", driver: "Android", agree: 1032 },
    { title: "琅寰书院", comment: "这里面最坏的就是主角李火旺，自私自利，只为自己不为别人着想，疑心病特别重，看谁都不像好人，其实自已最坏，主角能在地球和修仙世界来回互传。在修仙世界欺师灭祖，在师傅飞升之时在丹药里面下毒把师傅毒死。因为自己脑袋有问题，怕女主回家其父母看不上自己，就把女主全族杀了，男女老幼一个不剩，然后回到地球又害的地球的父母家破人亡，把在地球的女朋友逼成精神病。主角可以说坏得不像话。还因为自己是精神病就跑到幼儿园去杀小孩", dateTime: "2024-11-20 00:26", driver: "Android", agree: 329 },
    { title: "影杀", comment: "鸣鸣鸣鸣，因为漫画我去看道诡异仙了心都碎了", dateTime: "2024-12-10 18:08", driver: "Android", agree: 0 },
    { title: "我家大师兄脑子有坑", comment: "喜欢看这漫的你们都是疯子，都要癫狂的，啊哈哈哈哈哈香香香香香", dateTime: "2024-12-08 07:09", driver: "Android", agree: 4 },
    { title: "万渣朝凰", comment: "女人会来月事，破祖师爷功力，祖师爷不喜欢!", dateTime: "2024-12-14 18:32", driver: "Android", agree: 1 },
    { title: "黑色曼陀罗", comment: "好癫的评论区真是把抽象玩明白了", dateTime: "2024-12-14 16:55", driver: "Android", agree: 0 },
    { title: "我的天劫女友", comment: "小说有一千多集，这得画到猴年马月", dateTime: "2024-12-14 13:49", driver: "Android", agree: 0 },
    { title: "修仙就要傍富婆", comment: "好好好还好哈哈哈", dateTime: "2024-12-14 12:23", driver: "Android", agree: 1 },
    { title: "一口也不吃", comment: "我什么时候能看见白灵淼说她爹娘的时候不笑啊", dateTime: "2024-12-14 08:58", driver: "Android", agree: 0 },
    { title: "我不是教主", comment: "我靠这药引", dateTime: "2024-12-14 08:33", driver: "Android", agree: 2 }
  ],
  [
    { title: "师兄请按剧本来", comment: "可恶，明知没有，但是还是期待", dateTime: "2024-12-14 04:52", driver: "Android", agree: 0 },
    { title: "黑背信天翁", comment: "不觉得白灵淼每一页画出来的脸感觉都不一样吗3380", dateTime: "2024-12-14 00:46", driver: "iPhone", agree: 2 },
    { title: "开局一条鲲", comment: "看了漫画后就去看了小说，只能说好好珍惜现在的李火旺吧", dateTime: "2024-12-14 01:17", driver: "Android", agree: 0 },
    { title: "大猿魂", comment: "好久不见，想北风了没有，恭喜看官看完了第13话，根据已知情报，药引的药性会影响丹药的品质，而“师傅”是非常注重这方面的，所以火旺会运用这个来救漂亮白毛妹妹的哦，还请看官们不要担心哦", dateTime: "2024-12-14 00:38", driver: "Android", agree: 1 }
  ]
];


const score = document.querySelectorAll(".wei_score i");

// 定义事件处理函数
// 22001030203魏宇帆
function handleMouseEnter(event) {
  if (!this.clicked) {
    for (let j = 0; j <= this.index; j++) {
      score[j].style.color = "#FED336";
    }
  }
}

function handleMouseLeave(event) {
  if (!this.clicked) {
    for (let j = 0; j <= this.index; j++) {
      score[j].style.color = "#E1E1E1";
    }
  }
}

function handleClick(event) {
  for (let j = 0; j <= this.index; j++) {
    score[j].style.color = "#FED336";
    score[j].clicked = true;
    // 标记为已点击
  // 22001030203魏宇帆
  }

  // 移除所有监听事件
  // 22001030203魏宇帆
  for (let j = this.index + 1; j < score.length; j++) {
    score[j].removeEventListener("mouseenter", handleMouseEnter);
    score[j].removeEventListener("mouseleave", handleMouseLeave);
    score[j].removeEventListener("click", handleClick);
  }
}

// 为每个评分图标添加索引和初始状态
// 22001030203魏宇帆
score.forEach((star, index) => {
  star.index = index;
  star.clicked = false; 
  // 初始状态为未点击
  // 22001030203魏宇帆
  star.addEventListener(
    "mouseenter", handleMouseEnter);
  star.addEventListener("mouseleave", handleMouseLeave);
  star.addEventListener("click", handleClick);
});

//收藏或取消
// 22001030203魏宇帆
const collect = document.querySelector(".wei_shoucang");
collect.addEventListener("click", function () {
  // 判断类列表是否有agree如果有则移除,如果没有则添加
  // 22001030203魏宇帆
  if (collect.classList.contains("wei_agree")) {
    collect.classList.remove("wei_agree");
    collect.innerHTML = `<i class="iconfont icon-xingxingshixin"></i>收藏`;
    alert("取消收藏");
  } else {
    collect.classList.add("wei_agree");
    collect.innerHTML = `<i class="iconfont icon-xingxingshixin"></i>取消`;
    alert("收藏成功");
  }
});

//投月票
// 22001030203魏宇帆
const yuepiao = document.querySelector(".wei_yuepiao");
yuepiao.addEventListener("click", function () {
  alert("感谢您的支持");
});

//红票
// 22001030203魏宇帆
const hongpiao = document.querySelector(".wei_opt-list li a .icon-dianzan2");
hongpiao.addEventListener("click", function () {
  //更改背景颜色为#EA6055,字体颜色为#FFFFFF
  // 22001030203魏宇帆
  hongpiao.style.backgroundColor = "#EA6055";
  hongpiao.style.color = "#FFFFFF";
  alert("感谢您的支持");
});

//黑票
// 22001030203魏宇帆
const heipiao = document.querySelector(".wei_opt-list li a .icon-chaping");
heipiao.addEventListener("click", function () {
  //更改背景颜色为#675853,字体颜色为#FFFFFF
  // 22001030203魏宇帆
  heipiao.style.backgroundColor = "#675853";
  heipiao.style.color = "#FFFFFF";
  alert("感谢您的反馈");
});

//更新评论数量
// 22001030203魏宇帆
const result = document.querySelector(".wei_page-switch a strong");
result.innerHTML = comment_data[comment_data.length - 1].length + (comment_data.length - 1) * 10;

//评论区操作逻辑
// 22001030203魏宇帆
const comments = document.querySelector(".wei_comment-list");
let comment = document.querySelectorAll(".wei_comment-list li");
//评论下的点赞添加监听功能
// 22001030203魏宇帆
let count = document.querySelectorAll(".wei_count");
let star = document.querySelectorAll(".wei_comment-opt a:nth-child(3) i");
let flag = 0;

// 添加点赞
// 22001030203魏宇帆
function agreeControl() {
  for (let i = 0; i < star.length; i++) {
    star[i].addEventListener("click", function () {
      if (star[i].classList.contains("wei_agree")) {
        star[i].classList.remove("wei_agree");
        count[i].innerHTML = `${comment_data[flag][i].agree}`;
      } else {
        star[i].classList.add("wei_agree");
        count[i].innerHTML = `${comment_data[flag][i].agree + 1}`;
      }
    });
  }
}


//更新评论区数据
// 22001030203魏宇帆
function updateComment() {
  //清空评论区
  // 22001030203魏宇帆
  comments.innerHTML = "";
  //添加评论
  // 22001030203魏宇帆
  for (let i = 0; i < comment_data[flag].length; i++) {
    comments.innerHTML += `
        <li>
          <span class="wei_user">
            <img src="../img/${comment_data[flag][i].title}.jpg" alt="${comment_data[flag][i].title}" />
            <a>${comment_data[flag][i].title}</a>
          </span>
          <span class="wei_comment-info">
            <p>${comment_data[flag][i].comment}</p>
            <span class="wei_comment-opt">
              <a>${comment_data[flag][i].dateTime}</a>
              <a>来自${comment_data[flag][i].driver}版</a>
              <a><i class="iconfont icon-dianzan2"></i><a class="wei_count">${comment_data[flag][i].agree}</a></a>
            </span>
          </span>
        </li>
    `;
  }
  comment = document.querySelectorAll(".wei_comment-list li");
  count = document.querySelectorAll(".wei_count");
  star = document.querySelectorAll(".wei_comment-opt a:nth-child(3) i");
  agreeControl();
}

updateComment();

//切换评论页
// 22001030203魏宇帆
const page = document.querySelectorAll(".wei_page-switch ul li a");
for (let i = 0; i < page.length; i++) {
  page[i].addEventListener("click", function () {
    //切换active
    // 22001030203魏宇帆
    let active = document.querySelector(".wei_page-switch ul li a.wei_active");
    active.classList.remove("wei_active");
    this.classList.add("wei_active");
    //更新评论区数据
    // 22001030203魏宇帆
    flag = i;
    updateComment();
  });
}

//上一页,下一页切换
// 22001030203魏宇帆
const pre = document.querySelector(".wei_page-switch .wei_pre");
const next = document.querySelector(".wei_page-switch .wei_next");
pre.addEventListener("click", function () {
  if (flag > 0) {
    let active = document.querySelector(".wei_page-switch ul li a.wei_active");
    active.classList.remove("wei_active");
    flag--;
    page[flag].classList.add("wei_active");
    updateComment();
  }
});

next.addEventListener("click", function () {

  if (flag < page.length - 1) {
    let active = document.querySelector(".wei_page-switch ul li a.wei_active");
    active.classList.remove("wei_active");
    flag++;
    page[flag].classList.add("wei_active");
    updateComment();
  }
});


