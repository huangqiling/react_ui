import { combineReducers } from 'redux';
import Todo from '../pages/Home/reducer';

export default combineReducers({
  todo: Todo
});
