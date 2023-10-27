export const selectContacts = state => state.contactDetails.contacts.items;
export const selectFilter = state => state.contactDetails.filter;
export const selectIsLoading = state => state.contactDetails.contacts.isLoading;
export const selectError = state => state.contactDetails.contacts.error;
