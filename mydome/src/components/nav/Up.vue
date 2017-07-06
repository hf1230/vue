<style>
nav{
    width:100%;
    height:50px;
    background: red;
}
    nav span{
        width:20%;
        font-size:24px;
        line-height:50px;
        display: block;
        float: left;
        padding:0 3%;
        color: #fff;
    }
    .tops{
        color: #fff;
    }

</style>

<template>
    <div id="app">
        <nav>
            <span><router-link class="tops" to='/one'>网易</router-link></span>
            <span><router-link class="tops" to='/two'>聚美</router-link></span>
            <span><router-link class="tops" to='/three'>修真</router-link></span>
            <span><router-link class="tops" to='/four'>A货</router-link></span>
            <span><router-link class="tops" to='/five'>爱奇艺</router-link></span>
        </nav>
        <!--<onetab></onetab>-->
    </div>
</template>

<script>

//    import Onetab from './components/nav/onetab.vue'

    export default {
        name: 'up',
        components:{
//            Onetab:Onetab,
    }
}
</script>