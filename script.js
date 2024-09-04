window.addEventListener("selectstart", (e) => {
  e.preventDefault();
});
let mixedString = "abcdefjhijklmnopqrstuvwxyz1234567890!@#$%^&*"; //44

document.querySelector("#press").addEventListener("click", () => {
  document.querySelector("#errors").innerHTML = "";
  let count = prompt("What's the Lenght ? ");
  if (count < 5 || count > 15) {
    document.querySelector("#errors").textContent = "Out of Range !";
  } else if (isNaN(count)) {
    document.querySelector("#errors").textContent = "Invalid Infos !";
  } else {
    document.querySelector(
      "#errors"
    ).innerHTML = `<h3 id="answer" class="display-6 fs-"><i class="bi bi-caret-right-fill"></i>${generator(
      count
    )}<i class="bi bi-caret-left-fill"></i></h3>
`;
    document.querySelectorAll("button").forEach((el) => {
      if (el.hidden == true) {
        el.hidden = false;
      }
    });
    document.querySelector("#Regenarate").addEventListener("click", () => {
      document.querySelector(
        "#errors"
      ).innerHTML = `<h3 id="answer" class="display-6 fs-"><i class="bi bi-caret-right-fill"></i>${generator(
        count
      )}<i class="bi bi-caret-left-fill"></i></h3>
      `;
    });
    document.querySelector("#copy").addEventListener("click", () => {
      navigator.clipboard.writeText(
        document.querySelector("#answer").textContent
      );
      alert("Copied!");
    });
  }
});
function generator(nm) {
  let output = "";
  for (let i = 1; i <= nm; i++) {
    let randomIndex = Math.trunc(Math.random() * 44);
    output += mixedString[randomIndex];
  }
  return output;
}
