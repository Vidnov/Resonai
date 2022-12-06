<template>
  <div @click="translate" class="icon"><img :src="Itranslate" alt="Иконка перевода"> </div>
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
 .icon{
   cursor: pointer;
 }
 .icon:hover{
   transition:transform .5s;
   transform:scale(1.2) ;
   }
</style>
