class PasswordGenerator {
  boutons = {};
  #elements;
  constructor(
    buttonsSelectors,
    btnGenerate,
    resultSelector,
    inputSelector,
    spanSelector
  ) {
    this.input = document.getElementById(inputSelector);
    this.span = document.getElementById(spanSelector);
    this.displayPassword = document.querySelector(resultSelector);
    this.#elements = document.querySelectorAll(buttonsSelectors);
    this.btnGenerate = document.querySelector(btnGenerate);
    this.lowercase = "";
    this.uppercase = "";
    this.numbers = "";
    this.symbols = "";

    this.#elements.forEach((bouton) => {
      const action = bouton.dataset.action;
      this.boutons[action] = bouton;
    });

    this.#init();
  }

  #init() {
    this.input.addEventListener("input", () => this.upDateSpan());
    this.boutons.miniscule.addEventListener("click", () =>
      this.activerMiniscule()
    );
    this.boutons.majuscule.addEventListener("click", () =>
      this.activerMajuscule()
    );
    this.boutons.number.addEventListener("click", () => this.activerNumber());
    this.boutons.caractere.addEventListener("click", () => this.activerChar());
    this.btnGenerate.addEventListener("click", () => this.generer());
  }

  upDateSpan() {
    this.span.textContent = this.input.value;
  }
  activerMiniscule() {
    this.boutons.miniscule.classList.toggle("active");
    if (this.boutons.miniscule.classList.contains("active")) {
      this.lowercase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      this.lowercase = "";
    }
  }
  activerMajuscule() {
    this.boutons.majuscule.classList.toggle("active");
    if (this.boutons.majuscule.classList.contains("active")) {
      this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      this.uppercase = "";
    }
  }
  activerNumber() {
    this.boutons.number.classList.toggle("active");
    if (this.boutons.number.classList.contains("active")) {
      this.numbers = "0123456789";
    } else {
      this.numbers = "";
    }
  }
  activerChar() {
    this.boutons.caractere.classList.toggle("active");
    if (this.boutons.caractere.classList.contains("active")) {
      this.symbols = "!@#$%^&*()_+[]{}|;:,.<>?~-=\\/";
    } else {
      this.symbols = "";
    }
  }

  generer() {
    if (this.lowercase + this.uppercase + this.numbers + this.symbols === "") {
      this.displayPassword.textContent = `Choissisez sur les boutons`;
      return;
    }
    let pwd = `${this.lowercase}${this.uppercase}${this.numbers}${this.symbols}`;
    console.log(pwd);
    const values = this.input.value;
    console.log(values);
    let val = "";
    let i = 0;

    for (i = 0; i < values; i++) {
      let index = Math.floor(Math.random() * pwd.length);
      val = val + pwd[index];
    }

    this.displayPassword.textContent = val;
  }
}
const password = new PasswordGenerator(
  ".btn",
  ".btnGenerer",
  ".result",
  "range",
  "rangeValue"
);
