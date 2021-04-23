import { combineReducers } from 'redux';

import { session } from './session.reducer';
import { posts } from './post.reducer';

export default combineReducers({ session, posts });