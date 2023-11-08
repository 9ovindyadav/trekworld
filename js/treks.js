function displayTrekCards(treks) {
  const trekCardContainer = document.getElementById("trek-cards-container");

  const trekCards = treks.map((trek, i) => {
    const description = limitWords(removeHTMLTags(trek.description), 100);

    return `
            <div class="col-md-4">
              <div class="card" id="trek-card-${i}">
                <img src="${trek.img}" class="card-img " style="height:12rem" />
                <a class="card-img-overlay trek-card" href="/trekworld/pages/trek-page.html?id=${i}">
                  <h4 class="card-title">${trek.title}</h4>
                  <p class="card-text">
                  ${description}
                  </p>
                  <p class="card-text trek-card-footer">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </a>
              </div>
            </div>
            `;
  });

  trekCardContainer.innerHTML = trekCards.join(" ");
}

document.addEventListener("DOMContentLoaded", displayTrekCards(treks));
