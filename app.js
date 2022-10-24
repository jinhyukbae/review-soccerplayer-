// local reviews data
const reviews = [
  {
    id: 1,
    name: "zinedine zidan",
    job: "soccer player",
    img:"zidan.jpg",
    text:
      "지네딘 지단은 프랑스의 전 축구선수 현 감독으로 레알마드리드 에서 뛰었다.",

  },

  {
    id: 2,
    name: "luka modrich",
    job: "soccer player",
    img:"luka.png",
    text:
      "루카 모드리치는 크로아티아의 프로 축구 선수로, 스페인 레알 마드리드 소속이며, 크로아티아 국가대표팀의 현 주장이다.",

  },

  {
    id: 3,
    name: "tony cross",
    job: "soccer player",
    img:"tony.jpg",
    text:"토니 크로스는 독일의 프로 축구 선수로, 현재 스페인 라 리가의 레알 마드리드에서 활약하고 있다. ",

  },

  {
    id: 4,
    name: "iniesta",
    job: "soccer player",
    img:"ini.jpg",
    text:
      "안드레스 이니에스타 루한은 스페인의 축구 선수로, 현재 일본 J1리그의 비셀 고베 소속으로 포지션은 중앙 미드필더이다. 정확하고 창의적인 패스능력 뿐만 아니라 일명 팬텀 드리블이라 불리는 '라 크로케타'를 자주 쓰는 것으로도 유명하다. 역대 최고의 선수중 한 명이다.",

  },

  {
    id: 5,
    name: "xavi",
    job: "soccer player",
    img:"xavi.jpg",
    text:
      "사비에르 에르난데스 크레우스는 스페인의 전 축구 선수, 현 축구 감독으로, 현재 바르셀로나의 감독으로 활동하고 있다. 선수 시절 포지션은 중앙 미드필더이다.",

  },

];

// select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  // set starting item
  let currentItem = 0;

  // load intial item
  window.addEventListener("DOMcontentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

  });

// show person based on items
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//info.textcontent = item.info;라 써서 info가 출력 됐었음 

// show next showPerson

nextBtn.addEventListener('click', function (){
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
    showPerson(currentItem);




});

// show prev person

prevBtn.addEventListener('click', function (){
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length -1;
  }
    showPerson(currentItem);




});

//show random person

randomBtn.addEventListener('click', function (){
  console.log("hello");


  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);





});
