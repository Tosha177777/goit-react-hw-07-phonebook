import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactDetailsReducer } from './contactFilterReducer';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: 'contacts',
};

const persistedReducer = persistReducer(persistConfig, contactDetailsReducer);

export const store = configureStore({
  reducer: {
    contactDetails: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
