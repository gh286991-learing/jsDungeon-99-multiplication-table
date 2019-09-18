import React from 'react';
import '../css/main.sass';


class MainPage extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="title">
          <div className="linbox">
            <div className="cross"> X</div>
            <div className="line" />
            <div className="cross"> X</div>

          </div>
          <div className="text text-top">
         九九乘法表
          </div>
          <div className="text englsh">
            MULTIPLICATION CHART
          </div>

          <div className="linbox bottom">
            <div className="cross"> X</div>
            <div className="line" />
            <div className="cross"> X</div>
          </div>

        </div>
        <div className="card" />
      </div>
    );
  }
}

export default MainPage;
