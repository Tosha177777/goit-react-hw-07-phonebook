import { configureStore } from '@reduxjs/toolkit';
import { contactDetailsReducer } from './contactFilterReducer';

export const store = configureStore({
  reducer: {
    contactDetails: contactDetailsReducer,
  },
});
