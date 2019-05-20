<template>
	
	<div class='home'>
		<div class='h-tabs' id="htabs">
			<div class='tab-frame' :style="{width:(tabs.length*4)+'rem'}">
				<template v-for="(item,index) in tabs">
					
					<div :class="{'ht-item':true,'active':tabActive===index}" @click='tabFn(index)'>
						<span>{{item}}</span>
					</div>
				</template>
			</div>
		</div>
		<div class='tab-content'>
			<div class='t-c-frame'>
				<router-link hover-class='none' class='tcf-item' to='/homedetail' v-for='item in 4'>
					<div class='t-i-top'>
						<img src="../assets/logo.png" alt="" class='tit-img'>
						
						<div class='tit-status'><div class='ts-abs'>进行中</div></div>
					</div>
					<div class='t-i-bottom'>
						<p class='tib-title'>东大门鱼塘第二次钓鱼大赛</p>
						<p class='tib-time'>比赛时间：2019-02-20</p>
					</div>
				</router-link>
			</div>
		</div>
		
		<div class="bottom-nav">
		  <TabBar :index="0"></TabBar>
		</div>
	</div>
	
</template>

<script>
	import TabBar from '../components/TabBar.vue'
	export default{
		data(){
			return {
				tabActive:0,
				tabs:['全部','钓鱼','休闲赛','茶道','香道','芳香调养','全部','钓鱼','休闲赛','茶道','香道','芳香调养']
			}
		},
		methods:{
			tabFn(ind){
				this.tabActive=ind||0;
			}
		},
		components:{
			TabBar
		}
	}
</script>

<style lang="scss" scoped>
	@mixin fixed($top,$right,$bottom,$left){
		position:fixed;
		left:$left;
		right:$right;
		top:$top;
		bottom:$bottom;
	}
	.bottom-nav{
		@include fixed('',0,0,0);
	}
	
	.h-tabs{
		padding:0 1rem;
		box-sizing: border-box;
		width:100%;
		overflow:hidden;
		animation:all .3s;
		transform:translateX(0);
		border-bottom:1px solid #eee;
		overflow-x:scroll;
		overflow-y:hidden;
		
		.ht-item{
			display:inline-block;
			width:4rem;
			height:2.5rem;
			
			span{
				color:#696969;
				text-overflow:ellipsis;
				overflow:hidden;
				white-space: nowrap;
				line-height:2.5rem;
				display:inline-block;
				height:2.5rem;
				border-bottom:.1rem solid transparent;
				transition:all .3s;
				font-size:.8rem;
			}
			&.active span{
				color:#45A0FC;
				border-bottom-color:#45a0fc;
			}
		}
	}
	.tab-content{
		
		.tcf-item{
			display:block;
			text-decoration: none;
			padding:1rem;
			box-sizing: border-box;
			border-bottom:.7rem solid #eee;
			&:last-child{
				border-bottom:0;
			}
			.t-i-top{
				position:relative;
				width:100%;
				padding-bottom:50%;
				border-radius:10px;
				overflow:hidden;
			}
			.tit-status{
				position:absolute;
				left:-50px;
				top:-50px;
				transform:rotateZ(-45deg);
				width:100px;
				height:100px;
				background: #ffb400;
				.ts-abs{
					position:absolute;
					width:100px;
					text-align:center;
					bottom:5px;
					color:#fff;
					font-size:14px;
				}
			}
			.tit-img{
				position:absolute;
				width:100%;
				height:100%;
				top:0;
				left:0;
				right:0;
				bottom:0;
				border-radius:10px;
			}
			.t-i-bottom{
				.tib-title{
					font-size:1rem;
					color:#000;
				}
				.tib-time{
					color:#999;
					font-size:0.8rem;
				}
			}
		}
	}
</style>
