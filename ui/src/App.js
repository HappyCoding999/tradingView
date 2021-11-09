import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
// import './App.css';
import chartImg from './assets/img/chart.png';

function App() {

  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar">
				<div className="p-4 pt-5">
		  		<a href="#" className="img logo rounded-circle mb-5" style={{backgroundImage: 'url(./assets/img/logo.jpg)'}}></a>
	        <ul className="list-unstyled components mb-5">
	          <li className="active">
              <a href="#">Strategies</a>
	            {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Strategies</a>
	            <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <a href="#">Home 1</a>
                </li>
                <li>
                    <a href="#">Home 2</a>
                </li>
                <li>
                    <a href="#">Home 3</a>
                </li>
	            </ul> */}
	          </li>
	          <li>
	              <a href="#">Build Strategy</a>
	          </li>
	          <li>
              <a href="#">My Trading</a>
	          </li>
	        </ul>

	        <div className="footer">
	        	<p>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
						  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
						  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
	        </div>

	      </div>
    	</nav>

        <div id="content" className="p-4 p-md-5">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

              <button type="button" id="sidebarCollapse" className="btn btn-primary">
                <i className="fa fa-bars"></i>
              </button>
              <h2 className="ml-2"> ALGO TRADING</h2>
              <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars"></i>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                      {/* <a href="#" className="img logo rounded-circle" style={{backgroundImage: 'url(./assets/img/logo.jpg)'}}></a> */}
                      <a className="nav-link" href="#">Alexandr</a>
                  </li>
                  {/* <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
                  
          <div className="strategies-pane">
            <h3 className="mb-0">Strategies</h3>
            <p className="ml-4"><span>Rox </span>option trading strategy</p>
            <div className="container text-center">
              <img className="" src={chartImg} style={{width:'100%'}} alt="chart"/>
            </div>
          </div>

          <div>
            <p>GMA 11.1 - NIFTY OPTION BUY 2 LOT ATM-one Trader per Day-with TSL-2X</p>
            <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
