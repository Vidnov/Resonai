<template>
  <div class="logo">
    <h3>{{ value }}</h3>
  </div>
</template>

<script>
export default {
  name: "vLogoTranslate",
  props: {
    value : {
      type: String,
      default:'?'
    }
  }
}
</script>
