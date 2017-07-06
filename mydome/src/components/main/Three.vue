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

	.qidian-box{
		margin-bottom:10px;
		width:100%;
		height:112px;
	}
	.qidianimg img{
		width:84px;
		height:112px;
		float: left;
	}
	.qidianbook{
		width:80%;
		height:112px;
		float: left;
		margin-left:10px;
	}
	.bName{
		font-size:22px;
	}
	.jianjie{
		font-size:16px;
		overflow: hidden;
		/*margin:.375rem;*/
		color: #969ba3;
		height:45px;
		width:100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.desc{
		font-size:16px;
		/*margin:.375rem;*/
		color: #969ba3;
		word-break:break-all;
	}
	.bAuth{
		font-size:.825rem;
		/*display: block;*/
		/*overflow: hidden;*/
		/*white-space: nowrap;*/
		/*text-overflow: ellipsis;*/
		color: brown;
	}
	.cat{
		font-size:1rem;
		line-height:1.5;
		display: inline-block;
		margin:0 .15em;
		padding:0 .25em;
		vertical-align: bottom;
		border:1px solid #969ba3;
	}
	.state{
		font-size:1rem;
		line-height:1.5;
		display: inline-block;
		margin:0 .15em;
		padding:0 .25em;
		vertical-align: bottom;
		border:1px solid #ed424b;
		color: #ed424b;
	}
	.cnt{
		font-size:1rem;
		line-height:1.5;
		display: inline-block;
		margin:0 .15em;
		padding:0 .25em;
		vertical-align: bottom;
		border:1px solid #4284ed;
		color: #4284ed;
	}
	.bAuth-a{
		float: left;
		margin-top:15px;
	}
	.csc{
		float: right;
		margin-top:15px;
	}
</style>

<template>
	<div id="app">
		<div v-for="qidian in qidianData" class="qidian-box">
			<div class="qidianimg">
				<img :src="qidian.img" alt="">
			</div>
			<div class="qidianbook">
				<div class="bookname">
					<h4 class="bName">{{qidian.bName}}</h4>
				</div>
				<div class="jianjie">
					<p class="desc">{{qidian.desc}}</p>
				</div>
				<div class="zuozhe">
					<div class="bAuth-a">
					<span class="bAuth">{{qidian.bAuth}}</span>
				</div>
					<div class="csc">
					<span class="cat">{{qidian.cat}}</span>
					<span class="state">{{qidian.state}}</span>
					<span class="cnt">{{qidian.cnt}}</span>
				</div>
				</div>
			</div>
		</div>
		<threetab></threetab>
	</div>
</template>

<script>

	import Threetab from '../nav/threetab.vue'

	export default{
		name:'three',
		components:{
			Threetab:Threetab
		},
		mounted(){
			//请求数据  也可以写在子模块的script标签里面
			this.$http({
				emulateJSON:true,
				url:'http://localhost:8080/src/data/qidian.json'
			}).then(response => {
				//get body data
				this.qidianData = response.body.data.records;
//				this.someDatas = response.body.list[1].picInfo[0].url;
//				console.log(this.someDatas);
				console.log(this.qidianData);
			});
		},
		data(){
			return{
				qidianData:{},
//				someDatas:{},
			}
		}
	}

</script>




