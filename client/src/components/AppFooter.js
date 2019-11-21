import React, { Component } from "react"; 

class AppFooter extends Component {
  render() {
    return (
        <footer className="page-footer font-small unique-color-dark">
          <div className="container text-center text-md-left mt-5">
            <div className="row mt-3">
         <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase font-weight-bold">About the license</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                <p>This project has a MIT License and anyone can use it as far as they are using it for good.</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
               
                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                <p>
                  <a href="https://portfolio-nehal-ahmad.herokuapp.com/">Portfolio</a>
                </p>
                <p>
                  <a href="https://github.com/nehal119">Github</a>
                </p>
                <p>
                  <a href="https://twitter.com/NehalAh23870525">Twitter</a>
                </p>
        
              </div>
              
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
        
           
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                <p>
                   New Dellhi, 110025, INDIA </p>
                <p>
                   ahmadnehal119@gmail.com</p>
                <p>
                   +91 8750 66 9536</p>
        
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://twitter.com/NehalAh23870525"> Nehal Ahmad</a>
          </div>
          
        
        </footer>
    );
  }
}

export default AppFooter;