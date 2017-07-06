<template>
    <div id="app">
        <div v-for="jm in jmData">
            <div class="jumei">
                <div class="imgss">
                    <img :src="jm.image_url_set.s640" alt="" class="jumeiimg">
                </div>
                <div class="money">
                    <div class="titles">
                        {{ jm.name}}
                    </div>
                    <div class="moneys">
                        <span class="jumei_price">{{jm.rmb}}{{jm.jumei_price}}</span>
                        <span class="market_price">{{jm.rmb}}{{jm.market_price}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'two01',
        mounted(){
            this.$http({
                emulateJSON:true,
                url:'http://localhost:8080/src/data/jumei.json'
            }).then(response =>{

                this.jmData = response.body.item_list;
//                this.jmDatas = response.body.item_list.image_url_set;
//                this.jmsDatas = [];
                console.log(this.jmData);
//                console.log(this.jmDatas);

            });
        },
        data(){
            return{
                jmData:{},
//                jmDatas:{}
            }
        }
    }
</script>

<style>
    #app{
        width:640px;
        position: relative;
        padding:5%;
    }
    .jumei{
        width:640px;
        position: relative;
    }
    .imgss{
        width:640px;
        /*padding:5%;*/
    }
    .jumeiimg{
        width:586px;
    }
    .money{
        width:315px;
        height:100%;
        position:absolute;
        top:0;
        right:71px;
    }
    .titles{
        width:315px;
        height:50px;
        color: #333;
        line-height:18px;
        font-size:14px;
        max-height: 51px;
        overflow: hidden;
        margin-top: 18px;
        margin-right: 71px;
    }
    .moneys{
        position: absolute;
        bottom: 30px;
    }
    .jumei_price{
        color: #fe4070;
        font-size:20px;
    }
    .market_price{
        color: #999;
        font-size:12px;
        text-decoration: line-through;
    }
</style>

















