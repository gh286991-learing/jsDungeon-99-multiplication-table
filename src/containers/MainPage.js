import { connect } from 'react-redux';
import React from 'react';
import MainPage from '../components/mainpage';
import * as ActionCreators from '../actions';


class MainPageContainer extends React.Component {
  render() {
    return (
      <div>
        <MainPage />
      </div>
    );
  }
}


export default connect(
  (state) => ({ state }),
  ActionCreators
)(MainPageContainer);
