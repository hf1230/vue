<style>

    .bottom{
        width:586px;
        height:50px;
        background: red;
        position: fixed;
        bottom: 0;
        color:#fff;
        line-height:50px;
        left:75px;
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
    .one{
        color: #fff;
        font-size:18px;
        width:20%;
        line-height:50px;
        margin:0 5%;
    }
</style>

<template>
    <div id="app">
        <div class="bottom">
            <span><router-link to='/one01' class="one">国际</router-link></span>
            <span><router-link to='/two01' class="one">服饰</router-link></span>
            <span><router-link to='/three01' class="one">武侠</router-link></span>
            <span><router-link to='/four01' class="one">高仿</router-link></span>
            <span><router-link to='/five01' class="one">美食电影</router-link></span>
        </div>
    </div>
</template>

<script>
    export default{
        name:'twotab',
        components:{

        }
    }
</script>