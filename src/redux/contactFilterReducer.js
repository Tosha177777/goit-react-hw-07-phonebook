import { createSlice } from '@reduxjs/toolkit';

const appState = {
  contacts: [],
  filters: '',
};

const contactDetailsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: appState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.name !== action.payload
      );
    },
    filtersChange(state, action) {
      state.filters = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact, filtersChange } =
  contactDetailsSlice.actions;
// Редюсер слайсу
export const contactDetailsReducer = contactDetailsSlice.reducer;
