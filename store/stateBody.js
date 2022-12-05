  export const state = () => ({
   translate:false
 })
  export const getters = {
    isTranslate: (state) => {
      return state.translate;
    },
  }
  export const actions = {
  }
  export const mutations = {
    increment (state) {
      state.translate=!state.translate
    }
}
