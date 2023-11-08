function displayGearsCards(gears) {
  const gearsCardContainer = document.getElementById("gears-card-container");

  const gearCards = gears.map((gear, i) => {
    return `
            <div class="col-md-3 mt-5">
                <div class="card">
                  <div class="card-body">
                    <img src="${gear.img}" alt="" />

                    <h4>${gear.name}</h4>
                    <div class="row">
                      <div class="col">
                        <p>Starting from</p>
                        <h4>&#8377; ${gear.price}.00</h4>
                      </div>
                      <div class="col">
                        <button class="btn mt-2 view-gear">View Gear</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `;
  });

  gearsCardContainer.innerHTML = gearCards.join(" ");
}

document.addEventListener("DOMContentLoaded", displayGearsCards(gears));
