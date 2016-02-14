'use strict';

import { TOGGLE_WEBVR } from '../actions/webvr';
const INITIAL_STATE = {vrMode:false};

export function toggleWebVR(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_WEBVR:
      return Object.assign({}, state, {vrMode: !state.vrMode});
    default:
      return state;
  }
}
