<template>
    <div id="app">
        <div v-for="posttwo in someDatatwo" class="news-box">
            <img :src="posttwo.picInfo[0].url" alt="">
            <span class="titles">{{posttwo.digest}}</span>
            <span class="newsico">{{posttwo.category}}</span>
            <span>{{posttwo.ptime}}</span>
            <div class="bookico">
                <img src="../../../assets/bookico.png" alt="">
                <span>{{posttwo.tcount}}</span>
            </div>
        </div>
    </div>
</template>

<script>


    export default{
        name:'one01',
        mounted(){
            //请求数据  也可以写在子模块的script标签里面
            this.$http({
                emulateJSON:true,
                url:'http://localhost:8080/src/data/listnew2.json'
            }).then(response =>{
                //get body data
                this.someDatatwo = response.body.list;
//				this.someDatas = response.body.list[1].picInfo[0].url;
				console.log(this.someDatatwo);
//				console.log(this.someData);
            });
        },
        data(){
            return{
                someDatatwo:{},
//                someDatas:{},
            }
        }
    }

</script>

<style>
    .one{
        color: red;
        font-size: 40px;
    }
    html{
        height:1000rem;
    }
    img{
        width:150px;
    }
    .news-box{
        width:100%;
        padding:10px 10px 5px;
        height:140px;
        border-top:1px solid #cccccc;
        position: relative;
        background: #f6f6f6;
    }
    .titles{
        width:419px;
        margin:2px 3px;
        font-size: 28px;
        position: absolute;
        top:1%;
        color: #404040;
        /*text-overflow: ellipsis;*/
        /*white-space:nowrap;*/
        /*overflow: hidden;*/
    }
    .newsico{
        display: inline-block;
        color: #f33;
        font-size:16px;
        padding:4px;
        line-height: 16px;
        margin-right: .5rem;
        background:url("http://img2.cache.netease.com/f2e/wap/common/images/border_red.png") no-repeat;
        background-size: 100% 100%;
    }
    .bookico{
        width:15%;
        position: absolute;
        right:2%;
        bottom:10px;
        line-height:20px;
    }
    .bookico img{
        width:25px;
    }
</style>

