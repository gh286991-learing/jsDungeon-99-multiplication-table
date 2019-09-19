import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.sass';


class MainPage extends React.Component {
  render() {
    const { table } = this.props;

    return (
      <div className="container">
        <div className="title card">
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

        { table.map((El) => (

          <div key={El[0]} className="card">
            <div className="result-container">
              {El.map((value, idx) => {
                if (idx === 0) {
                  return <div key={value} className="num">{value}</div>;
                }
                return (
                  <div key={value} className="content">
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="footer"> Copyright © 2019 HexSchool. All rights reserved.</div>
      </div>
    );
  }
}


MainPage.propTypes = {
  table: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default MainPage;
