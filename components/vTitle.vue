<template>
  <div class="title" @click="$emit('activeLink')">
    <nuxt-link contentEditable class="h1" to="/" v-if="!isTranslate">{{title.text}}</nuxt-link>
    <nuxt-link contentEditable class="h1" to="/" v-else>{{title.textTranslate}}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "vTitle",
  props:{
    title:{
      type:Object,
    },
    isTranslate:{
      type:Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
.h1 {
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  color: #F37021;
}
</style>
