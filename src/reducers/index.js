import { combineReducers } from 'redux';
import ProjectList from './reducer_projectlist';

const rootReducer = combineReducers({
  projectlist: ProjectList,
});

export default rootReducer;