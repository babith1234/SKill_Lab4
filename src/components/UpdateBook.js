import { Outlet, Link } from "react-router-dom";

import "./Login.css";
import Navbar from "./Navbar";
const UpdateBook = () => {
  return (
    <>
      <Navbar />

      <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col my-5">
              <div class="card">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">UPDATE BOOK</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label"
                      ></label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder=" Enter the title or Author "
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                  </form>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Link to="/setbook" class="text-decoration-none p-5">
                      <button
                        type="submit"
                        className="btn btn-primary me-2 bg-warning"
                      >
                        SEARCH
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
