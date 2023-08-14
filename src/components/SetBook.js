import Navbar from "./Navbar";
const SetBook = () => {
    return ( 
        <>
          <Navbar />
          <div class="login-container">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col my-5">
              <div class="card p-5">
                <div class="card-body">
                  <center>
                    <h5 class="card-title mb-5">UPDATE DETAILS</h5>
                  </center>
                  <form>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Title"
                        aria-describedby="emailHelp"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Author"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Genre"
                      ></input>
                    </div>

                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Publication Date"
                      ></input>
                    </div>
                  </form>
                 <div className="mb-3 d-flex align-items-center justify-content-between">
                  <button type="submit" className="btn btn-primary me-2">
                      UPDATE
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-12"></div>
          </div>
        </div>
      </div>

        </>
     );
}
 
export default SetBook;