import type { AppState } from '../types';
import { TOGGLE_MOBILE_MENU } from './actions';

const initialState: AppState = {
  mobileMenuOpen: false
};

export const rootReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        mobileMenuOpen: !state.mobileMenuOpen
      };
    default:
      return state;
  }
};