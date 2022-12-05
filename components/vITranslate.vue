<template>
  <div><img :src="Itranslate" alt="Иконка перевода"> </div>
</template>
<script>
import Itranslate from "~/assets/icon/translate.svg"
export default {
  name: "ITranslate",
  data(){
    return {
      Itranslate
    }
  }
}
</script>

<style scoped lang="scss">

</style>
