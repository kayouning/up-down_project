//랜덤번호 지정
//유저가 번호입력 -> 고 버튼누름
//유저가 랜덤번호 맞추면 맞췄다
//유저가 랜덤번호보다 작으면 up
//유저가 랜던번호보다 크면 down
//5번의 기회 다쓰면 게임끗 버튼이 disable
//유저가 1~100 범위밖 숫자를 입력하면 알려줌(기회안깎음)
//이미 입력 숫자입력하면 알려줌(기회안깎음)


let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
  computerNum = Math.floor(Math.random()*100)+1;
  console.log(computerNum);
}
function play(){
let userValue = userInput.value;

if(userValue < 1 || userValue > 100){
  resultArea.textContent = "1~100 사이의 값을 입력해주세요"
  return
}

if(history.includes(userValue)){
  resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요"
  return
}

chances --;
chanceArea.textContent = `${chances}회`;
console.log("찬스",chances)

if(userValue<computerNum){
  resultArea.textContent = "up!";
}else if(userValue > computerNum){
  resultArea.textContent = "down!";
}else{
  resultArea.textContent = "정답!"
  gameOver = true
}

history.push(userValue)

if (chances < 1){
gameOver = true
}
if (gameOver == true){
  playButton.disabled = true;
}
}

function reset(){
userInput.value = "";
pickRandomNum();
resultArea.textContent = "숫자를 맞춰보세요";
gameOver = false;
playButton.disabled = false;
chances = 3;
chanceArea.textContent = `${chances}회`;
history = [];
}

 
pickRandomNum()


//랜덤 번호 받고
//play버튼에 클릭 이벤트 추가 -> play함수 실행되게끔
//play 함수 만들기
//play 함수안에 유저가 입력한 값value 을 가져온다 ->userValue 변수에 넣기
//if문으로 up down 정답 나오게 만들어
//결과값 보여줄 html에서 결과값 가져오기 resultArea.textContent =""
//리셋버튼 만들어주고 js에 가져오기 -> 클릭이벤트 추가
//리셋 : 유저인풋의 값을 깨끗하게 정리, 새로운 컴퓨터넘버
//찬스 3번 -> 플레이버튼 누를때마다 -1 , 1보다 작아지면 버튼 비활성화
//3번의 기회 다쓰면 게임끗 버튼이 disable
//유저가 1~100 범위밖 숫자를 입력하면 알려줌(기회안깎음)- 유효성검사
//이미 입력 숫자입력하면 알려줌(기회안깎음) -유효성검사
//history 배열에 유저밸류 담아
//history에 이미 유저가 쓴 값이있다면 resultArea에 알려주기

//다음숫자입력시 기존 숫자 사라지게