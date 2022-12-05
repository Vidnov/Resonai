<template>
  <nav class="nav">
    <div class="container space">
      <div class="title" @click="activeLink"><nuxt-link class="h1" to="/" >My amazing website</nuxt-link></div>
      <v-logo value="НВ"/>
      <div class="right">
        <ul class="list" v-if="isTranslate">
          <li v-for="item in link" :key="item.id" @click="activeLink(item)"><nuxt-link :to="item.link" :class="{'active':item.status}" >{{item.translate}}</nuxt-link></li>
        </ul>
        <ul class="list" v-else>
          <li v-for="item in link" :key="item.id" @click="activeLink(item)"><nuxt-link :to="item.link" :class="{'active':item.status}" >{{item.title}}</nuxt-link></li>
        </ul>
        <v-i-translate/>
      </div>
    </div>
  </nav>
</template>
<script>
import data from '~/static/data'
import {mapGetters} from "vuex";
export default {
  name: 'IndexPage',
  data(){
    return {
      link:[
      ]
    }
  },
  computed:{
    ...mapGetters('stateBody',[
      'isTranslate',
    ]),
  },
  fetch(){
    this.link = data.nav
  },
  methods: {
    activeLink(el) {
      this.link=this.link.filter(item=>{
        if(item.id==el.id)
        {
          item.status=true
        }
        else
        {
          item.status=false
        }
        return item;
      });
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
    .title {
      display: flex;
      align-items: center;
    }
    .h1 {
      font-size: 2rem;
      font-weight: 600;
      display: flex;
      color: #F37021;
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
