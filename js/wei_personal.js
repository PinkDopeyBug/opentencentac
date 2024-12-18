const book_data = [
  [
    { title: "无缘佛", update: 456, read: 12, readtime: "2024-10-05", updatetime: "2024-11-15" },
    { title: "大国师", update: 234, read: 5, readtime: "2024-09-20", updatetime: "2024-10-25" }
  ],
  [
    { title: "武道巅峰", update: 678, read: 34, readtime: "2024-08-10", updatetime: "2024-09-30" },
    { title: "万渣朝凰", update: 123, read: 7, readtime: "2024-07-25", updatetime: "2024-08-31" },
    { title: "最强氪金", update: 890, read: 0, readtime: "2024-06-15", updatetime: "2024-07-20" },
    { title: "琅寰书院", update: 567, read: 0, readtime: "2024-05-01", updatetime: "2024-06-10" }
  ],
  [
    { title: "黑色曼陀罗", update: 345, read: 9, readtime: "2024-04-10", updatetime: "2024-05-20" },
    { title: "我的天劫女友", update: 789, read: 0, readtime: "2024-03-25", updatetime: "2024-04-30" }
  ],
  [
    { title: "黑背信天翁", update: 44, read: 5, readtime: "2024-02-15", updatetime: "2024-03-20" },
    { title: "黑色曼陀罗", update: 541, read: 6, readtime: "2024-01-10", updatetime: "2024-02-25" },
    { title: "万渣朝凰", update: 813, read: 2, readtime: "2023-12-05", updatetime: "2024-01-15" },
    { title: "我不是教主", update: 337, read: 19, readtime: "2023-11-20", updatetime: "2023-12-30" }
  ]
];

const navBox = document.querySelectorAll(".wei_content-left ul li a");
let books = document.querySelector(".wei_books");
let bookList = document.querySelectorAll(".wei_books .wei_book");
let noBtn = document.querySelectorAll(".wei_books .wei_book .wei_btn a:nth-child(2)");
const buy1 = document.querySelector(".wei_personal-data .wei_data .wei_buy1");
const buy2 = document.querySelector(".wei_personal-data .wei_data .wei_buy2");
const asset = document.querySelectorAll(".wei_personal-data .wei_data p a:nth-child(1)");
// 22001030203魏宇帆
let point = 0; 
//点券和阅点,阅点=点券*10
// 22001030203魏宇帆
let yuepiao = 0; 
//月票
let flag = 0;

buy1.addEventListener("click", function () {
  point += 10;
  asset[0].innerHTML = `<i class="iconfont icon-dianquan"></i>我的点券: ${point}`;
  asset[1].innerHTML = `<i class="iconfont icon-31jifen"></i>我的阅点: ${point * 10}`;
});

buy2.addEventListener("click", function () {
  yuepiao += 1;
  asset[2].innerHTML = `<i class="iconfont icon-yuepiao"></i>我的月票: ${yuepiao}张`;
});


function flushContent(books, flag) {
  let data = book_data[flag];
  books.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    books.innerHTML += `
              <li class="wei_book">
                <span class="wei_title">
                  <a href=""><img src="../img/${data[i].title}.jpg"></a>
                  <a href=""><strong>${data[i].title}</strong></a>
                  <a>${data[i].read > 0 ? "有更新" : "未阅读"}</a>
                </span>
                <span class="wei_update">
                  <a>更新至${data[i].update}话</a><a>${data[i].updatetime}</a>
                </span>
                <span class="wei_status">
                  <a>${flag % 2 ? "购买" : "阅读"}至${data[i].read}话</a><a>${data[i].readtime}</a>
                </span>
                <span class="wei_btn">
                  <a href="">已知更新</a>
                  <a>取消${flag % 2 ? "订购" : "收藏"}</a>
                </span>
              </li>`;
  }
}

for (let j = 0; j < bookList.length; j++) {
  bookList[j].addEventListener("mouseenter", function () {
    let noCollection = bookList[j].querySelector(".wei_btn a:nth-child(2)");
    // 22001030203魏宇帆
    // 显示opacity: 1;
    noCollection.style.opacity = 1;
  });

  bookList[j].addEventListener("mouseleave", function () {
    let noCollection = bookList[j].querySelector(".wei_btn a:nth-child(2)");
    // 22001030203魏宇帆
    // 隐藏opacity: 0;
    noCollection.style.opacity = 0;
  });
}

// 22001030203魏宇帆
// 当点击nobtn时当前按钮所属的li被清除
for (let i = 0; i < noBtn.length; i++) {
  noBtn[i].addEventListener("click", function () {
    let li = this.parentNode.parentNode;
    li.parentNode.removeChild(li);
  });
}

// 22001030203魏宇帆
//faq跳转故不设置监听
for (let i = 0; i < navBox.length - 1; i++) {
  navBox[i].addEventListener("click", function () {
    document.querySelector(".wei_content-left ul .wei_active").classList.remove("wei_active");
    this.classList.add("wei_active");
    flag = i;
    flushContent(books, flag);
    bookList = document.querySelectorAll(".wei_books .wei_book");
    for (let j = 0; j < bookList.length; j++) {
      bookList[j].addEventListener("mouseenter", function () {
        let noCollection = bookList[j].querySelector(".wei_btn a:nth-child(2)");
        // 22001030203魏宇帆
        // 显示opacity: 1;
        noCollection.style.opacity = 1;
      });

      bookList[j].addEventListener("mouseleave", function () {
        let noCollection = bookList[j].querySelector(".wei_btn a:nth-child(2)");
        // 22001030203魏宇帆
        // 隐藏opacity: 0;
        noCollection.style.opacity = 0;
      });
    }

    noBtn = document.querySelectorAll(".wei_books .wei_book .wei_btn a:nth-child(2)");
    // 22001030203魏宇帆
    // 当点击nobtn时当前按钮所属的li被清除
    for (let i = 0; i < noBtn.length; i++) {
      noBtn[i].addEventListener("click", function () {
        let li = this.parentNode.parentNode;
        li.parentNode.removeChild(li);
      });
    }
  });
}
