import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProjectList from './reducer_projectlist';

const rootReducer = combineReducers({
  projectlist: ProjectList,
  form: formReducer,
});

export default rootReducer;