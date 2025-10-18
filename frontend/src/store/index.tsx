// // src/store/index.ts
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // src/hooks/redux.ts
// import { useDispatch, useSelector } from 'react-redux';
// import type { TypedUseSelectorHook } from 'react-redux';
// // import type { RootState, AppDispatch } from '@/store';

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import { createStore } from 'redux';
// import { rootReducer } from './reducer';

// export const store = createStore(rootReducer);

// export type RootState = ReturnType<typeof rootReducer>;

import { createStore } from 'redux';
import { rootReducer } from './reducer';

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;