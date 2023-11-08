class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer class="bg-dark">
      <div class="container">
        <div class="row pb-4" style="border-bottom: 2px solid white">
          <div class="col-md-3 d-flex d-md-block" id="footer-logo">
            <img src="/trekworld/assets/icons/logo.svg" alt="" />
          </div>
          <div class="col-md-3 d-flex d-md-block">
            <h4>TrekWorld</h4>
            <p>10899, Lokhandipada,</p>
            <p>Boisar, Palghar - 401501</p>
            <p>+91 9875129830</p>
            <p>trekworld.com</p>
          </div>
          <div class="col-md-3 d-flex d-md-block">
            <a href=""><h4>Blogs</h4></a>
            <a href=""><h4>Treks</h4></a>
            <a href=""><h4>News</h4></a>
            <a href=""><h4>Calender</h4></a>
            <a href=""><h4>Our team</h4></a>
            <a href=""><h4>Career</h4></a>
          </div>
          <div class="col-md-3 d-flex d-md-block">
            <h4>Connect with us</h4>
            <div class="social">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <h4>Join our mail list</h4>
            <button class="btn footer-btn">Sign up now</button>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6 d-flex justify-content-between text-center text-md-start">
           
              <a href="">About us</a>
              <a href="">Terms</a>
              <a href="">Policy</a>
              <a href="">Teams</a>
           <a href="">&copy; 2023</a>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <h4>&copy; Made by Govind yadav</h4>
          </div>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define("custom-footer", Footer);
