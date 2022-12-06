<template>
  <section class="item" id="section2">
    <h2 contenteditable v-if="isTranslate">{{translateTitle}}</h2>
    <h2 contenteditable v-else>{{title}}</h2>
    <p  contenteditable v-if="isTranslate">
      {{translateText}}
    </p>
    <p contenteditable v-else>
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
