<template>
    <div id="app">

            <div class="aqy-box" v-for="aqy in aqyDatas">
                <div class="aqy-img">
                    <img :src="aqy.imageUrl" alt="">
                    <span class="showContent">{{aqy.showContent}}</span>
                </div>
                <div class="aqy-voname">
                    <span class="aqy-mainTitle">{{aqy.mainTitle}}</span>
                </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'five01',
        mounted(){
            //请求数据  也可以写在子模块的script标签里面
            this.$http({
                emulateJSON:true,
                url:'http://localhost:8080/src/data/aiqiyi2.json'
            }).then(response => {
                //get body data
                this.aqyDatas = response.body.data.videos;
//				this.someDatas = response.body.list[1].picInfo[0].url;
//				console.log(this.someDatas);
                console.log(this.aqyDatas);
            });
        },
        data(){
            return{
                aqyDatas:{},
//				someDatas:{},
            }
        }
    }
</script>

<style>
    #app{
        width:640px;
    }
    .five{
        color:green;
        font-size:40px;
    }
    .aqy-box{
        float: left;
        width:30%;
    }
    .aqy-img{
        width:100%;
        position: relative;
    }
    .aqy-img img{
        width:185px;
    }
    .aqy-box:nth-child(2){
        margin:0 25px;
    }
    .aqy-box:nth-child(3n+2){
        margin:0 25px;
    }
    .aqy-mainTitle{
        word-break:break-all;
    }
    .aqy-voname{
        font-size:16px;
        /*margin:.375rem;*/
        color: #969ba3;
        height:45px;
        width:100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
    .showContent{
        position: absolute;
        right:-9px;
        bottom:4px;
        background:rgba(0,0,0,0.75);
        font-size: 20px;
        color:#ff4e00;
        padding:0 5px;
    }
</style>

