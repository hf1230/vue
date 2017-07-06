<style>
    html{
        height:1000rem;
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
        height:300px;
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
        width:50px;
        height:50px;
        position: absolute;
        right:30px;
        bottom: -10px;
    }
    .gf-country img{
        width:35px;
        height:35px;
    }
</style>

<template>
    <div id="app">
        <div v-for="gfs in gfDatas.hits" class="gf-box">
            <div class="gfimg">
                <img :src="gfs.Items[0].PicUrl" class="gf-img">
            </div>
            <div class="gf-right">
                <div class="gf-name">
                    <span>{{gfs.Items[0].Name}}</span>
                </div>
                <div class="gf-price">
                    <span>¥{{gfs.Items[0].Price}}</span>
                </div>
                <div class="gf-country">
                    <img src="../../assets/btn.png" alt="">
                </div>
            </div>

        </div>
        <div v-for="gfs in gfDatas.hits" class="gf-box">
            <div class="gfimg">
                <img :src="gfs.Items[1].PicUrl" class="gf-img">
            </div>
            <div class="gf-right">
                <div class="gf-name">
                    <span>{{gfs.Items[1].Name}}</span>
                </div>
                <div class="gf-price">
                    <span>¥{{gfs.Items[1].Price}}</span>
                </div>
                <div class="gf-country">
                    <img src="../../assets/btn.png" alt="">
                </div>
            </div>
        </div>
        <div v-for="gfs in gfDatas.hits" class="gf-box">
            <div class="gfimg">
                <img :src="gfs.Items[2].PicUrl" class="gf-img">
            </div>
            <div class="gf-right">
                <div class="gf-name">
                    <span>{{gfs.Items[2].Name}}</span>
                </div>
                <div class="gf-price">
                    <span>¥{{gfs.Items[2].Price}}</span>
                </div>
                <div class="gf-country">
                    <img src="../../assets/btn.png" alt="">
                </div>
            </div>
        </div>
        <div v-for="gfs in gfDatas.hits" class="gf-box">
            <div class="gfimg">
                <img :src="gfs.Items[3].PicUrl" class="gf-img">
            </div>
            <div class="gf-right">
                <div class="gf-name">
                    <span>{{gfs.Items[3].Name}}</span>
                </div>
                <div class="gf-price">
                    <span>¥{{gfs.Items[3].Price}}</span>
                </div>
                <div class="gf-country">
                    <img src="../../assets/btn.png" alt="">
                </div>
            </div>
        </div>
        <fourtab></fourtab>
    </div>
</template>

<script>
    import Fourtab from '../nav/fourtab.vue'

    export default{
        name:'four',
        components:{
            Fourtab:Fourtab
        },
        mounted(){
            //请求数据  也可以写在子模块的script标签里面
            this.$http({
                emulateJSON:true,
                url:'http://localhost:8080/src/data/app2.json'
            }).then(response => {
                //get body data
                this.gfDatas = response.body;
//				this.someDatas = response.body.list[1].picInfo[0].url;
//				console.log(this.someDatas);
                console.log(this.gfDatas);
            });
        },
        data(){
            return{
                gfDatas:{},
//				someDatas:{},
            }
        }
    }
</script>



