
<template>
    <div id="app">
    <router-view class="main"></router-view>
        <twotop></twotop>
    </div>
</template>

<script>
import Twotop from './components/main/two/twotop.vue'
    export default{
        name:'twotop',
        components:{
            Twotop:Twotop
        }
    }
</script>


<style>

</style>
