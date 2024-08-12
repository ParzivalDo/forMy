const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Tân cũng iu cậu nhìu lắmmm  (⁠⁠ﾉ⁠ω⁠＼⁠)♥️";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  if (randomX < 0) randomX = 0;
  if (randomY < 0) randomY = 0;
  if (randomX > maxX) randomX = maxX;
  if (randomY > maxY) randomY = maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
