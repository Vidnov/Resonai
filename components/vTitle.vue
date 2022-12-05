<template>
  <div class="title" @click="$emit('activeLink')">
    <nuxt-link class="h1" to="/" v-if="!isTranslate">{{title.text}}</nuxt-link>
    <nuxt-link class="h1" to="/" v-else>{{title.textTranslate}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "vTitle",
  props:{
    title:{
      type:String,
    },
    isTranslate:{
      type:Boolean
    }
  }
}
</script>

<style scoped>

</style>
