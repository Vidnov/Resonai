<template>
  <div @click="translate"><img :src="Itranslate" alt="Иконка перевода"> </div>
</template>
<script>
import Itranslate from "~/assets/icon/translate.svg"
export default {
  name: "ITranslate",
  data(){
    return {
      Itranslate
    }
  },
  methods: {
    translate(){
      this.$store.commit('stateBody/increment')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
