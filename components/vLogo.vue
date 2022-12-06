<template>
  <div @click="avatarEdit">
    <div v-if="!showAvatar" class="logo" >
      <h3 >{{ value }}</h3>
    </div>
    <img height="58" width="58" v-else :src="avatar" alt="avatar" class="rounded">
  </div>

</template>

<script>
export default {
  name: "vLogo",
  data() {
    return {
      showAvatar:false
    }
  },
  methods:{
    avatarEdit(){
      this.showAvatar=!this.showAvatar
    }
  },
  props: {
    value : {
      type: String,
      default:'?'
    },
    avatar: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.logo {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  height:58px;
  width:58px;
  display: flex;
  align-items: center;
}
.rounded{
  border-radius: 50%;
  box-shadow: 0 0 7px #666; /* Параметры тени */
}
</style>
