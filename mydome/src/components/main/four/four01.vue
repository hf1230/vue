<style>
    html{
        height:1000rem;
    }
    img{
        width:150px;
    }
    .three{
        color: orange;
        font-size:40px;
    }
    .gf-box{
        margin-bottom:10px;
        width:100%;
        height:420px;
        /*margin-bottom:10px;*/
        background: #fff;
    }
    .gfimg{
        width:100%;
        height:300px;
        text-align:center;
        margin-bottom:8px;
    }
    .gfimg img{
        width:300px;
    }
    .gf-right{
        width:100%;
        position: relative;
    }
    .gf-country img{
        width:25px;
    }
    .gf-name{
        font-size:24px;
        color: #999;
        text-align: center;
        margin-bottom:20px;
        padding:2px;
    }
    .gf-price{
        color: #fd2341;
        font-size:18px;
        width:50px;
        display: inline-block;
    }
    .gf-country{
        display: inline-block;
        font-size:18px;
        width:120px;
        position: absolute;
        right:0;
        bottom: 1px;
    }
</style>

<template>
    <div id="app">
        <div v-for="gf in gfData" class="gf-box">
            <div class="gfimg">
                <img :src="gf.pic" class="gf-img">
            </div>
            <div class="gf-right">
                <div class="gf-name">
                    <span>{{gf.name}}</span>
                </div>
                <div class="gf-price">
                    <span>¥{{gf.price}}</span>
                </div>
                <div class="gf-country">
                    <img :src="gf.sellerInfo.countryIconUrl" alt="">
                    <span>{{gf.sellerInfo.countryName}}</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>


    export default{
        name:'four01',
        mounted(){
            //请求数据  也可以写在子模块的script标签里面
            this.$http({
                emulateJSON:true,
                url:'http://localhost:8080/src/data/app1.json'
            }).then(response => {
                //get body data
                this.gfData = response.body.likeProductInfo;
//				this.someDatas = response.body.list[1].picInfo[0].url;
//				console.log(this.someDatas);
                console.log(this.gfData);
            });
        },
        data(){
            return{
                gfData:{},
//				someDatas:{},
            }
        }
    }

</script>




