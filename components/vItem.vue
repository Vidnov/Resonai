<template>
  <section class="item" id="section2">
    <h2 v-if="isTranslate">{{translateTitle}}</h2>
    <h2 v-else>{{title}}</h2>
    <p v-if="isTranslate">
      {{translateText}}
    </p>
    <p v-else>
      {{text}}
    </p>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "vItem",
  computed:{
    ...mapGetters('stateBody',[
      'isTranslate',
    ]),
  },
  props:{
    title: {
      type:String,
    },
    text: {
      type:String,
    },
    translateTitle: {
      type:String
    },
    translateText: {
      type:String
    }
  }
}
</script>

<style scoped>

</style>
