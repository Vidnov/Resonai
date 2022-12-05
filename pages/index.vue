<template>
  <div class="container">
    <div class="content">
      <v-item v-for="item in data"
              :key="item.key"
              :title="item.title"
              :text="item.text"
              :translate-title="item.translateTitle"
              :translate-text="item.translateText"
      />
    </div>
  </div>

</template>

<script>
import data from '~/static/data'
export default {
  name:'IndexPage',
  data(){
    return {
      data:[]
    }
  },
  fetch(){
    this.data=data.result;
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-flow:wrap;
  gap: 15px;
  .item {
    text-align: left;
    max-width: 100%;

    h2 {
      font-size: 26px;
      font-weight: 500;
    }

    p {
      font-size: 18px;
      font-weight: 400;
    }

    @media (max-width: 840px){
      max-width: 100%;
    }
  }
}
</style>


