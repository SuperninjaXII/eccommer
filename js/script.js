const mainContainer = document.querySelector("main")
const data = [{
  title: "toaster",
  img: "./imgs/toaster.jpeg",
  description: "nice toaster"
}, {
  title: "fridge",
  img: "./imgs/fridge.jpeg",
  description: "nice fridge"
}, {
  title: "microwave",
  img: "./imgs/microwave.jpeg",
  description: "amazing microwave"
}]

function load() {
  mainContainer.innerHTML = ""
  for (let i = 0; i <= data.length - 1; i++) {

    mainContainer.innerHTML += `
  <div class="card">
      <img src="${data[i].img}" alt="bag" />
      <div id="color-container">
        <div id="first-color" class="colors"></div>
        <div id="second-color" class="colors"></div>
        <div id="third-color" class="colors"></div>
        <div id="fourth-color" class="colors"></div>

      </div>
      <h1>${data[i].title}</h1>
      <div class="secondary">
        <p>4.2</p>
        <div class="stars">
          <img src="./imgs/star.svg" alt="star" />
          <img src="./imgs/star.svg" alt="star" />
          <img src="./imgs/star.svg" alt="star" />
          <img src="./imgs/star.svg" alt="star" />
        </div>
        <p>(13.4k)</p>
      </div>
      <p>${data[i].description}</p>
      <button>
        <a href="https://www.amazon.com/Toaster-Fits-anywhereTM-Kitchenware-Setting-Removable/dp/B0CYJBB2JQ">
          See Options
        </a>
      </button>

    </div>
`
  }
}

load()
