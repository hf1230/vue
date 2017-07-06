<script src="route.js"></script>
<template>
  <div id="app">
    <up class='up'></up>
    <router-view class='main'>
    </router-view>
    <!--<down class='foot'></down>-->
    <!--<onetab class="onetab"></onetab>-->
    <!--<twotab></twotab>-->
    <!--<threetab></threetab>-->
    <!--<fourtab></fourtab>-->
    <!--<fivetab></fivetab>-->
  </div>
</template>


<script>

  import Nav from './components/nav/Up.vue'
  import Foot from './components/footer/Foot.vue'
//  import Onetab from './components/nav/onetab.vue'
//  import Twotab from './components/nav/twotab.vue'
//  import Threetab from './components/nav/threetab.vue'
//  import Fourtab from './components/nav/fourtab.vue'
//  import Fivetab from './components/nav/fivetab.vue'

  export default {
    name: 'app',
    components:{
      Up : Nav,
      Down:Foot,
//      Onetab:Onetab,
//      Twotab:Twotab,
//      Threetab:Threetab,
//      Fourtab:Fourtab,
//      Fivetab:Fivetab
    }
  }
</script>

<style lang="scss">
  #app{
    width:640px;
    padding:5%;
  }
</style>
