import React from 'react'

const Login = () => {
  return (
    <>
      {/* <!-- Page Header--> */}
        <header class="masthead" style={{backgroundImage: 'url(assets/img/home-bg.jpg)'}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog LOGIN</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Main Content--> */}
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="my-5">
                    <h1>User Login</h1>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        
                        <div class="form-floating">
                            <input class="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                            <label for="email">Email address</label>
                            
                        </div>
                        <div class="form-floating">
                            <input class="form-control" id="phone" type="password" placeholder="Enter your phone number..." data-sb-validations="required" />
                            <label for="phone">Password</label>
                           
                        </div>
                        <br/>
                        
                        
                        <button class="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
