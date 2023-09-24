class Bird {
  constructor() {
    this.height = 256;
    this.acceleration = 2;
    this.deg = 0;
    this.falls;
    this.spin;
  }

  fall() {
    const bird = document.querySelector(".bird");

    const fallId = setInterval(() => {
      this.acceleration = this.acceleration * 1.07;
      this.height = this.height + this.acceleration;
      bird.style.top = `${this.height}px`;
      bird.style.transform = `translate(-50%,-50%) rotate(${
        -20 + this.acceleration * 2
      }deg)`;
    }, 30);
    // this.spin = spinId;
    this.falls = fallId;
  }

  wingFlap() {
    const bird = document.querySelector(".bird");
    this.deg = 0;
    clearInterval(this.fall);
    clearInterval(this.spin);
    document.addEventListener("keydown", () => {
      this.acceleration = 2;
      bird.style.top = `${(this.height = this.height - 100)}px`;
      // console.log(bird.innerHTML);
      bird.innerHTML = `<img src="./objects/yellowbird-midflap.png" alt="">`;
      setTimeout(() => {
        bird.innerHTML = `<img src="./objects/yellowbird-downflap.png" alt="">`;
      }, 40);
      setTimeout(() => {
        bird.innerHTML = `<img src="./objects/yellowbird-upflap.png" alt="">`;
      }, 150);
    });
    this.fall();
  }

  animation() {}
}
