function limitWords(stringOfWords, maxWords) {
  return stringOfWords.split("").splice(0, maxWords).join("") + "...";
}

function removeHTMLTags(input) {
  return input.replace(/<[^>]*>/g, ""); // Matches and removes HTML tags
}

// Navbar Scroll behaviour
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var navlink = document.querySelectorAll(".nav-link");
  const topLink = document.querySelector(".top-link");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky-top");
    topLink.classList.add("show-link");
  } else {
    navbar.classList.remove("sticky-top");
    topLink.classList.remove("show-link");
  }
});

const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 5);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});

function displayBlogCards(blogs) {
  const blogsContainer = document.getElementById("blogs-container");

  const blogCardsArr = blogs.map((blog, i) => {
    const title = limitWords(blog.title, 35);
    const description = limitWords(removeHTMLTags(blog.description), 150);
    return `<div class="col-md-3">
          <div class="card blog-card" id="blog-card-${i}">
            <div class="card-body p-0">
              <img src="${blog.img}" alt="">
             
              <a href="/trekworld/pages/blog-page.html?id=${i}">
              <h5 class="card-title mt-2 blog-card-title">${title}</h5>
              <p class="card-text blog-card-desc">
                ${description}
              </p>
              
              <p class="card-text">
                <small 
                  >By ${blog.author}</small
                >
              </p>
              <p class="card-text mb-3">
                <small 
                  >Last updated on ${blog.lastUpdated}</small
                >
              </p>
              </a>
    
            </div>
          </div>
        </div>`;
  });

  blogsContainer.innerHTML = blogCardsArr.join(" ");
}

function displayBlogHero(blogs) {
  const blogHerosContainer = document.getElementById("blog-hero");

  const blogHeroArr = blogs.map((blog, i) => {
    const title = limitWords(blog.title, 40);
    const description = limitWords(removeHTMLTags(blog.description), 150);
    if (i === 0) {
      return `
            <div class="carousel-item active" data-bs-interval="500">
              <img src="${blog.img}" alt="${title}">
              <div class="carousel-caption">
                      <p>${blog.author} . ${blog.lastUpdated}</p>
                      <h4>${title}</h4>
                      <p>${description}</p>
              </div>
            </div>`;
    } else {
      return `
            <div class="carousel-item" data-bs-interval="500">
              <img src="${blog.img}" alt="${title}">
              <div class="carousel-caption">
                      <p>${blog.author} . ${blog.lastUpdated}</p>
                      <h4>${title}</h4>
                      <p>${description}</p>
              </div>
            </div>`;
    }
  });

  blogHerosContainer.innerHTML = blogHeroArr.join(" ");
}
document.addEventListener(
  "DOMContentLoaded",
  displayBlogHero(blogs),
  displayBlogCards(blogs),
);
