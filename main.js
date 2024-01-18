const $txt = document.querySelector(".txt-title");
const content = "안녕하세요:) 양평 리버파크 공인중개사 사무소입니다.";
let contentIndex = 0;

// typing 함수
let typing = function () {
  if (contentIndex >= content.length) {
    console.log("안녕하세요:) 양평 리버파크 공인중개사 사무소입니다.");
  } else {
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
  }
};

// 0.1초간격으로 typing 함수 실행
setInterval(typing, 100);


//시계
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
        hours %= 12;
    }

    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    Target_apm.innerText = `${AmPm}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행

//top버튼
function clickme() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}

//스크롤
const clicks = document.querySelectorAll(".click");
const sections = document.querySelectorAll("section");
const firstTop = sections[0].offsetTop;
const secondTop = sections[1].offsetTop;
const thirdTop = sections[2].offsetTop;
const fourthTop = sections[3].offsetTop;

clicks[0].onclick = function () {
  window.scroll({ top: firstTop, behavior: "smooth" });
};
clicks[1].onclick = function () {
  window.scroll({ top: secondTop, behavior: "smooth" });
};
clicks[2].onclick = function () {
  window.scroll({ top: thirdTop, behavior: "smooth" });
};
clicks[3].onclick = function () {
  window.scroll({ top: fourthTop, behavior: "smooth" });
};