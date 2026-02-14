function showMessage() {
  document.getElementById("slide2").style.transform = "translateY(0)";
  typeWriter();
}

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("touchmove", e => {
  cursor.style.left = e.touches[0].clientX + "px";
  cursor.style.top = e.touches[0].clientY + "px";
});

const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", moveNoButton);
document.addEventListener("touchmove", moveNoButton);

function moveNoButton(e) {
  const rect = noBtn.getBoundingClientRect();
  const mouseX = e.clientX || e.touches[0].clientX;
  const mouseY = e.clientY || e.touches[0].clientY;

  const distance = Math.sqrt(
    Math.pow(mouseX - (rect.left + rect.width/2), 2) +
    Math.pow(mouseY - (rect.top + rect.height/2), 2)
  );

  if (distance < 120) {
    const newX = Math.random() * (window.innerWidth - 120);
    const newY = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
}

const message = `Bae, what I did today was terrible and I’m really sorry. I didn’t mean to hurt you when I accidentally hit you with the scooty. I felt embarrassed and guilty the same way you did. I wish I could take that moment back instantly. I don’t know how to recover from it right now, but all I can do is sincerely apologize. I just want to be there for you and make things better. I should have given you good moments today, but I messed that up too. If you don’t want to talk to me right now, I’ll understand, my love. But please forgive me. I beg you. I love you a lot. More than my ego. More than my pride. Always`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typeText").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}