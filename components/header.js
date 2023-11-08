class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container">
          <a class="navbar-brand" id="logo" href="/trekworld/index.html">
          <img src="/trekworld/assets/icons/logo.svg" alt="" />
            TrekWorld
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mobile-menu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="/trekworld/index.html"
                >
                  <span class="d-inline-block">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/trekworld/pages/blogs.html">Blogs</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Treks
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Treks by Season</a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="">Spring</a></li>
                      <li><a class="dropdown-item" href="">Summer</a></li>
                      <li><a class="dropdown-item" href="">Monsoon</a></li>
                      <li><a class="dropdown-item" href="">Autumn</a></li>
                      <li><a class="dropdown-item" href="">Winter</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="#">Trek by Months</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Weekend Treks</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Story
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">About us</a></li>
                  <li><a class="dropdown-item" href="#">Gallery</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Our explorations</a>
                  </li>
                  <li><a class="dropdown-item" href="#">Meet the team</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/trekworld/pages/gears.html">Gears</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/trekworld/calender.html">Calender</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#login-modal"
                  style="cursor: pointer"
                >
                  Login
                  <!-- <i class="fa-solid fa-user"></i> -->
                </a>

                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("custom-header", Header);
