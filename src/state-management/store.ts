import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      count: 0,
      person: {
        firstName: 'Arun',
        lastName: 'Kumar',
      },
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
    decrement(state: any) {
      state.count--;
    },
    updateFirstName(state: any, newFirstName: string) {
      console.log('mutation');
      state.person.firstName = newFirstName;
    },
  },
  actions: {
    updateFirstName(context: any, newFirstName: string) {
      console.log('action');
      // validate...
      setTimeout(() => {
        console.log('triggered');
        context.commit('updateFirstName', newFirstName);
      }, 2000);
    },
  },
});
