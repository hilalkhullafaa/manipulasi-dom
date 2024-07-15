// pilihan computer
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// rules
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah")
    return comp == "orang" ? "Anda MENANG!" : "Anda KALAH!";
  if (player == "orang")
    return comp == "gajah" ? "Anda KALAH!" : "Anda MENANG!";
  if ((player = "semut"))
    return comp == "orang" ? "Anda KALAH!" : "Anda MENANG!";
}

// tangkap pilihan player
const pilihan = document.querySelectorAll("li img");

function putar() {
  const imgComp = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// hasil
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
