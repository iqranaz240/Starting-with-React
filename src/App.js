import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <img src="../images/img.png" width="50" alt="logo" />
            <div>
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>BLOG</li>
              </ul>
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>Learn To Lead</span> <br /> There is nothing Win or Loss, <br />
            Every time there is a learning.
          </div>

<img src="../images/img.png" alt="NED Endeavours" height="350" width="400" />
        </section>

        <section>
          <footer>
            <p>A  demo  Landing  Page  designed  by  Iqra  Naz</p>
          </footer>
        </section>
      </div>

    );
  }
}

export default App;