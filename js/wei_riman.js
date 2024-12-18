const carousel_data = [
  "排球少年",
  "终结的炽天使",
  "世上的另一个我",
  "约定的梦幻岛"
]

const last_update_data = [
  [
    { title: "网球王子", update: 435 },
    { title: "美食的俘虏", update: 396 },
    { title: "航海王", update: 1131 }
  ],
  [
    { title: "航海王", update: 1131 },
    { title: "排球少年2", update: 403 },
    { title: "bleach", update: 689 }
  ]
]

const mod_comic_data = [
  // 22001030203魏宇帆
  //全部
  [
    { title: "航海王", update: 1131, bio: "翻翻动漫 x 尾田荣一郎" },
    { title: "火影忍者(全彩版)", update: 162, bio: "" },
    { title: "火影忍者", update: 713, bio: "翻翻动漫×岸本齐史" },
    { title: "美食的俘虏", update: 396, bio: "翻翻动漫×岛袋光年" },
    { title: "死神境界", update: 689, bio: "翻翻动漫×久保带人" },
    { title: "新网球王子", update: 435, bio: "翻翻动漫×许斐刚" },
    { title: "排球少年", update: 403, bio: "翻翻动漫×古馆春" },
    { title: "龙珠", update: 519, bio: "翻翻动漫×鸟山明" },
    { title: "家庭教师", update: 409, bio: "翻翻动漫×天野明" },
    { title: "航海王(番外篇)", update: 1, bio: "翻翻动漫×集英社" },
    { title: "龙珠(番外篇)", update: 1, bio: "翻翻动漫×集英社" },
    { title: "死神(番外篇)", update: 19, bio: "翻翻动漫×集英社" },
    { title: "银魂(番外篇)", update: 4, bio: "翻翻动漫×集英社" },
    { title: "排球少年(番外篇)", update: 11, bio: "翻翻动漫×集英社" },
    { title: "家庭教师(番外篇)", update: 8, bio: "翻翻动漫×集英社" },
  ],
  // 22001030203魏宇帆
  //连载中
  [
    { title: "火影忍者(全彩版)", update: 162, bio: "" }
  ],
  // 22001030203魏宇帆
  //已完结
  [
    { title: "航海王", update: 1131, bio: "翻翻动漫 x 尾田荣一郎" },
    { title: "火影忍者", update: 713, bio: "翻翻动漫×岸本齐史" },
    { title: "美食的俘虏", update: 396, bio: "翻翻动漫×岛袋光年" },
    { title: "死神境界", update: 689, bio: "翻翻动漫×久保带人" },
    { title: "新网球王子", update: 435, bio: "翻翻动漫×许斐刚" },
    { title: "排球少年", update: 403, bio: "翻翻动漫×古馆春" },
    { title: "龙珠", update: 519, bio: "翻翻动漫×鸟山明" },
    { title: "家庭教师", update: 409, bio: "翻翻动漫×天野明" },
    { title: "航海王(番外篇)", update: 1, bio: "翻翻动漫×集英社" },
    { title: "龙珠(番外篇)", update: 1, bio: "翻翻动漫×集英社" },
    { title: "死神(番外篇)", update: 19, bio: "翻翻动漫×集英社" },
    { title: "银魂(番外篇)", update: 4, bio: "翻翻动漫×集英社" },
    { title: "排球少年(番外篇)", update: 11, bio: "翻翻动漫×集英社" },
    { title: "家庭教师(番外篇)", update: 8, bio: "翻翻动漫×集英社" }
  ],
  // 22001030203魏宇帆
  //番外篇
  [
    { title: "航海王(番外篇)", update: 1, bio: "翻翻动漫×集英社" },
    { title: "龙珠(番外篇)", update: 1, bio: "翻翻动漫×集英社" },
    { title: "死神(番外篇)", update: 19, bio: "翻翻动漫×集英社" },
    { title: "银魂(番外篇)", update: 4, bio: "翻翻动漫×集英社" },
    { title: "排球少年(番外篇)", update: 11, bio: "翻翻动漫×集英社" },
    { title: "家庭教师(番外篇)", update: 8, bio: "翻翻动漫×集英社" }
  ],
  // 22001030203魏宇帆
  //全彩版
  [
    { title: "火影忍者(全彩版)", update: 162, bio: "" }
  ]
]





let indicatorItem = document.querySelectorAll(".wei_indicator-item");
const bigImg = document.querySelector(".wei_carousel a");
const indicatorTitle = document.querySelector(".wei_indicator-title");
const carousel = document.querySelector(".wei_carousel");
// 22001030203魏宇帆
//轮播图左右切换按钮
const indicatorLeft = document.querySelector(".wei_indicator-list .wei_indicator-left");
const indicatorRight = document.querySelector(".wei_indicator-list .wei_indicator-right");
// 22001030203魏宇帆
let flag = 0
// 控制左右按钮切换图片


// 22001030203魏宇帆
//轮播图切换
for (let i = 0; i < indicatorItem.length; i++) {
  indicatorItem[i].addEventListener("mouseenter", function () {
    flag = i;
    document.querySelector(".wei_indicator-item.wei_active").classList.remove("wei_active");
    this.classList.add("wei_active");

    bigImg.title = carousel_data[i];
    bigImg.innerHTML = `<img src="../img/${carousel_data[i]}.jpg">`;

    indicatorTitle.title = carousel_data[i];
    indicatorTitle.innerHTML = `${carousel_data[i]}`;

  });
}


indicatorLeft.addEventListener("click", function () {
  if (flag == 0) {
    flag = indicatorItem.length - 1;
  } else {
    flag--;
  }
  indicatorItem[flag].dispatchEvent(new Event("mouseenter"));
});

indicatorRight.addEventListener("click", function () {
  if (flag == indicatorItem.length - 1) {
    flag = 0;
  } else {
    flag++;
  }
  indicatorItem[flag].dispatchEvent(new Event("mouseenter"));
});

// 22001030203魏宇帆
//自动播放
let timer = setInterval(function () {
  indicatorRight.click();
}, 2000);

// 22001030203魏宇帆
//鼠标进入大盒子停止定时器
carousel.addEventListener("mouseenter", function () {
  clearInterval(timer);
});

// 22001030203魏宇帆
//鼠标离开大盒子开始定时器
carousel.addEventListener("mouseleave", function () {
  timer = setInterval(function () {
    indicatorRight.click();
  }, 2000);
});




// 22001030203魏宇帆
//最近更新

// 22001030203魏宇帆
//书籍列表
const signList = document.querySelectorAll(".wei_sign-list .wei_signbook");

// 22001030203魏宇帆
//左右按钮
const pre = document.querySelector(".wei_banner-right .wei_indicator-left");
const next = document.querySelector(".wei_banner-right .wei_indicator-right");
let indicatorFlag = 0;

// 22001030203魏宇帆
// 切换
let handoff = function () {
  if (indicatorFlag == 0) {
    indicatorFlag = 1;
  } else {
    indicatorFlag = 0;
  }
  for (let i = 0; i < signList.length; i++) {
    signList[i].innerHTML = `
          <a title="${last_update_data[indicatorFlag][i].title}" href="">
            <img src="../img/${last_update_data[indicatorFlag][i].title}.jpg" alt="${last_update_data[indicatorFlag][i].title}">
          </a>
          <p class=""><a href="">更新至${last_update_data[indicatorFlag][i].update}话</a></p>`;
  }
}

pre.addEventListener("click", function () {
  handoff();
});

next.addEventListener("click", function () {
  handoff();
});





// 22001030203魏宇帆
//漫画列表

// 22001030203魏宇帆
//头部分类
const signTitle = document.querySelectorAll(".wei_mod-comic-list-title ul li");
// 22001030203魏宇帆
//分页
const page = document.querySelector(".wei_selling-content-switch .wei_page-number");
// 22001030203魏宇帆
//上一页下一页
const pagePre = document.querySelector(".wei_selling-content-switch .wei_jian");
const pageNext = document.querySelector(".wei_selling-content-switch .wei_jia");

// 22001030203魏宇帆
//列表 ul
const content = document.querySelector(".wei_mod-comic-list-item");
// 22001030203魏宇帆
//分页当前页数
let pageFlag = 1;
let titleFlag = 0;
// 22001030203魏宇帆
//章节列表 ul
// 22001030203魏宇帆
let contentList = document.querySelectorAll(".clearfix");

// 22001030203魏宇帆
//刷新漫画的章节列表
let flushList = function (index, start) {
  let contentList = document.querySelectorAll(".wei_clearfix");
  // 22001030203魏宇帆
  // 确保不会超出 contentList 的范围
  let end = Math.min(start + 12, contentList.length, mod_comic_data[index].length);
  for (let i = 0; i < end; i++) {
    if (mod_comic_data[index][i + start].update > 7) {
      for (let j = 0; j < 5; j++) {
        let updateNumber = mod_comic_data[index][i + start].update - j;
        contentList[i].innerHTML += `<li><a href="">[${updateNumber.toString().padStart(3, '0')}]</a></li>`;
      }
      contentList[i].innerHTML += `<li><a href="">. . .</a></li>`;
    } else if (mod_comic_data[index][i + start].update < 7 && mod_comic_data[index][i + start].update > 1) {
      for (let j = mod_comic_data[index][i + start].update; j > 1; j--) {
        contentList[i].innerHTML += `<li><a href="">[00${j}]</a></li>`;
      }
    }

    contentList[i].innerHTML += `
              <li><a href="">[001]</a></li>
              <li><a href="">更多&gt;&gt;</a></li>`;
  }
};

// 22001030203魏宇帆
//头部分类切换
for (let i = 0; i < signTitle.length; i++) {
  signTitle[i].addEventListener("click", function () {
    document.querySelector(".wei_mod-comic-list-title ul li.wei_active").classList.remove("wei_active");
    this.classList.add("wei_active");
    pageFlag = 1;
    titleFlag = i;
    page.innerHTML = `${pageFlag}/${Math.ceil(mod_comic_data[titleFlag].length / 12)}`;

    content.innerHTML = '';

    for (let j = 0; j < Math.min(mod_comic_data[i].length, 12); j++) {
      content.innerHTML += `
          <li class="wei_mod-comic-list-item-box wei_signbook">
            <a title="${mod_comic_data[i][j].title}" href="">
              <img src="../img/漫画列表/${mod_comic_data[i][j].title}.jpg" alt="${mod_comic_data[i][j].title}">
            </a>
            <p class="">
              <a href="">【${mod_comic_data[i][j].title}】${mod_comic_data[i][j].bio}</a>
              <a>全${mod_comic_data[i][j].update}话</a>
            </p>
            <ul class="wei_clearfix">
            </ul>
          </li>`;
    }

    flushList(i, (pageFlag - 1) * 12);
  });
}

// 22001030203魏宇帆
//左右按钮切换

pagePre.addEventListener("click", function () {
  if (pageFlag > 1) {
    pageFlag--;
    page.innerHTML = `${pageFlag}/${Math.ceil(mod_comic_data[titleFlag].length / 12)}`;
    content.innerHTML = '';
    for (let j = 0; j < Math.min(mod_comic_data[titleFlag].length, 12); j++) {
      content.innerHTML += `
          <li class="wei_mod-comic-list-item-box wei_signbook">
            <a title="${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}" href="">
              <img src="../img/漫画列表/${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}.jpg" alt="${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}">
            </a>
            <p class="">
              <a href="">【${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}】${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].bio}</a>
              <a>全${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].update}话</a>
            </p>
            <ul class="wei_clearfix">
            </ul>
          </li>`;
    }

    flushList(titleFlag, (pageFlag - 1) * 12);


  }
});

pageNext.addEventListener("click", function () {
  if (pageFlag < Math.ceil(mod_comic_data[titleFlag].length / 12)) {
    pageFlag++;
    page.innerHTML = `${pageFlag}/${Math.ceil(mod_comic_data[titleFlag].length / 12)}`;

    content.innerHTML = '';

    for (let j = 0; j < Math.min(mod_comic_data[titleFlag].length - (pageFlag - 1) * 12, 12); j++) {
      content.innerHTML += `
          <li class="wei_mod-comic-list-item-box wei_signbook">
            <a title="${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}" href="">
              <img src="../img/漫画列表/${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}.jpg" alt="${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}">
            </a>
            <p class="">
              <a href="">【${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].title}】${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].bio}</a>
              <a>全${mod_comic_data[titleFlag][j + (pageFlag - 1) * 12].update}话</a>
            </p>
            <ul class="wei_clearfix">
            </ul>
          </li>`;
    }
    flushList(titleFlag, (pageFlag - 1) * 12);
  }
});
