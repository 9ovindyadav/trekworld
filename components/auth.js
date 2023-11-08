class AuthModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Modal -->
                <div
                  class="modal fade"
                  id="login-modal"
                  tabindex="-1"
                  aria-labelledby="login modal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <ul class="nav nav-tabs">
                          <li class="nav-item">
                            <button
                              class="nav-link active"
                              data-bs-toggle="pill"
                              data-bs-target="#login-page"
                            >
                              Login
                            </button>
                          </li>
                          <li class="nav-item">
                            <button
                              class="nav-link"
                              data-bs-toggle="pill"
                              data-bs-target="#register-page"
                            >
                              Register
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div class="tab-content">
                        <div
                          class="tab-pane fade my-3 mx-5 show active"
                          id="login-page"
                        >
                          <form action="">
                            <div class="mb-3">
                              <label for="user-email" class="form-label"
                                >Email</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                id="user-email"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="user-password" class="form-label"
                                >Password</label
                              >
                              <input
                                type="password"
                                class="form-control"
                                id="user-password"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div class="mb-5 d-flex justify-content-center">
                              <button
                                type="submit"
                                class="btn w-100 submit-btn"
                              >
                                Login
                                <i
                                  class="fa-solid fa-right-to-bracket ms-3"
                                ></i>
                              </button>
                            </div>
                          </form>
                        </div>

                        <div class="tab-pane fade my-3 mx-5" id="register-page">
                          <form action="">
                            <div class="row mb-3">
                              <div class="col">
                                <label for="user-email" class="form-label"
                                  >First name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="user-fname"
                                  placeholder="Enter your first name"
                                />
                              </div>
                              <div class="col">
                                <label for="user-email" class="form-label"
                                  >Last name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="user-lname"
                                  placeholder="Enter your last name"
                                />
                              </div>
                            </div>
                            <div class="mb-3">
                              <label for="user-email" class="form-label"
                                >Email</label
                              >
                              <input
                                type="email"
                                class="form-control"
                                id="user-email"
                                placeholder="Enter your email"
                              />
                              <div class="form-text">
                                Enter a mail id that you own for future use.
                              </div>
                            </div>
                            <div class="mb-3">
                              <label for="user-password" class="form-label"
                                >Password</label
                              >
                              <input
                                type="password"
                                class="form-control"
                                id="user-password"
                                placeholder="Enter your password"
                              />
                              <div class="form-text">
                                Password must be minimum 8 character long.
                              </div>
                            </div>
                            <div class="my-3">
                              <button
                                type="submit"
                                class="btn submit-btn w-100"
                              >
                                Register
                                <i
                                  class="fa-solid fa-right-to-bracket ms-3"
                                ></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
  }
}

customElements.define("auth-modal", AuthModal);
