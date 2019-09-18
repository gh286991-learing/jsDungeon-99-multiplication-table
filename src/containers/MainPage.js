import { connect } from 'react-redux';
import MainPage from '../components/mainpage';
import * as ActionCreators from '../actions';

export default connect(
  (state) => ({ state }),
  ActionCreators
)(MainPage);
