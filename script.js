function getTimeFromSecond(second) {
  const data = new Date(second * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

const relogio = document.querySelector(".relogio");

let second = 0;
let timer;

function startClock() {
  timer = setInterval(function () {
    second++;
    relogio.innerHTML = getTimeFromSecond(second);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const element = e.target;

  if (element.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    startClock();
  }
  if (element.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }
  if (element.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.classList.remove("pausado");
    relogio.innerHTML = "00:00:00";
    second = 0;
  }
});
