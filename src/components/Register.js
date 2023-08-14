import "./Login.css";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-12"></div>
            <div class="col my-5">
              <div class="card">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">SIGN UP</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Name"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contact No"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Email"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="School/College name"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="City"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="State"
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <button type="submit" className="btn btn-primary me-2">
                      Submit
                    </button>
                    <div className="mb-3">
                      <a href="/" className="text-muted text-decoration-none">
                        Login?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
