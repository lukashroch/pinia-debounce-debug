import { defineStore } from 'pinia';

export type AppState = {
  app: {
    name: string;
  };
};

export const useApp = defineStore('app', {
  state: (): AppState => ({
    app: {
      name: import.meta.env.VITE_APP_NAME,
    },
  }),
  debounce: {
    doSomething: 2500,
  },
  actions: {
    doSomething() {
      console.log('doSomething');
    },
  },
});
