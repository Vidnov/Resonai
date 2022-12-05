<template>
  <nav class="nav">
    <div class="container space">
      <h1>
        My amazing website
      </h1>
      <v-logo value="НВ"/>
      <div class="right">
        <ul class="list">
          <li>
            <nuxt-link class="active" to="/page">Cтраница 1</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">Cтраница 2</nuxt-link>
          </li>
        </ul>
        <div><img :src="Itranslate" alt="Иконка перевода"> </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Itranslate from "~/assets/icon/translate.svg"
export default {
  name: 'IndexPage',
  data(){
    return {
      Itranslate
    }
  }
}
</script>

<style scoped lang="scss">
@import '/assets/style/variables/_colors.scss';
.nav{
  background: #F7F5F4;
  .container {
    display: flex;
    h1 {
      display: flex;
      color: #F37021;
      align-items: center;
    }
    .list {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .logo {
      padding: 1rem;
      border:1px solid $black;
      border-radius: 50%;
    }
    .right {
      display: flex;
    }
  }
  .space {
    justify-content: space-between;
  }


}
</style>
