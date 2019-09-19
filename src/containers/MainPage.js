import { connect } from 'react-redux';
import React from 'react';
import MainPage from '../components/mainpage';
import * as ActionCreators from '../actions';


class MainPageContainer extends React.Component {
  mulitiplication = () => {
    const n = 9;
    const m = 9;
    const table = [];
    for (let i = 2; i <= n; i += 1) {
      table.push([i]);
      for (let j = 1; j <= m; j += 1) {
        table[i - 2].push(`${i} x ${j} = ${i * j}`);
      }
    }

    return table;
  }

  render() {
    return (
      <div>
        <MainPage table={this.mulitiplication()} />
      </div>
    );
  }
}


export default connect(
  (state) => ({ state }),
  ActionCreators
)(MainPageContainer);
