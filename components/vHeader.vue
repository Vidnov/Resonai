<template>
  <nav class="nav">
    <div class="container space">
      <v-title @activeLink="activeLink" :title="title" :isTranslate="isTranslate"/>
      <v-logo :value="logo"/>
      <div class="right">
        <ul class="list" v-if="isTranslate">
          <li  v-for="item in link" :key="item.id" @click="activeLink(item)"><nuxt-link :to="item.link" :class="{'active':item.status}" >{{item.translate}}</nuxt-link></li>
        </ul>
        <ul class="list" v-else>
          <li v-for="item in link" :key="item.id" @click="activeLink(item)"><nuxt-link :to="item.link" :class="{'active':item.status}">{{item.title}}</nuxt-link></li>
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
      ],
      title:'',
      first_name:'',
      last_name:''
    }
  },
  computed:{
    ...mapGetters('stateBody',[
      'isTranslate',
    ]),
    logo(){
      return this.first_name[0]+this.last_name[0];
    }
  },
  async fetch(){
    const result =  await this.$axios.$get('https://reqres.in/api/users/2');
    const {data: {first_name, last_name}} = result;
    this.link = data.nav;
    this.title = data.title;
    this.first_name = first_name;
    this.last_name = last_name;
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
