import { defineStore, acceptHMRUpdate } from "pinia"

export const useAlertStore = defineStore("alert", {
  state: () => ({
    
  }),
  getters: {},
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlertStore, import.meta.hot))
}
