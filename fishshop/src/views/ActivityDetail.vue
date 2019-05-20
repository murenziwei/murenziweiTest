<template>
	<div class='homedetail'>
		<div class='hd-header sd-list'>
			<div class='hh-top'>
				<img src="../assets/logo.png" alt="" class='ht-img'>
			</div>
			<ul class='hh-ul'>
				<li class='hh-li'>
					<div class='h-l-item'>
						<div class='hli-name'>活动名称</div>
						<div class='hli-value'>天堂天安门</div>
					</div>
				</li>
				<li class='hh-li'>
					<div class='h-l-item'>
						<div class='hli-name'>活动时间</div>
						<div class='hli-value'>2019-05-20</div>
					</div>
				</li>
				<li class='hh-li'>
					<div class='h-l-item'>
						<div class='hli-name'>活动地址</div>
						<div class='hli-value'>2019-05-20</div>
					</div>
				</li>
			</ul>
		</div>
		<div class='hd-content sd-list'>
			<div>
				<div class='hc-tabs'>
					<template v-for="(item,index) in tabs">
						
						<div :class="{'ht-item':true,'active':tabActive===index}" @click='tabFn(index)'>
							<span>{{item}}</span>
						</div>
					</template>
				</div>
			</div>
			<div>
				<div class='hc-t-content'>
					<div class='htc-item' >
						<div class='h-i-left'>
							<img src="../assets/logo.png" alt="" class='hil-img'>
						</div>
						<div class='h-i-center'>
							<div class='hic-name'>你好</div>
							<div class='hic-time'>2019-05-20 12:12:12</div>
						</div>
						<div class='h-i-status yet'>
							已签到
						</div>
					</div>
					<div class='htc-item' v-for='item in 3'>
						<div class='h-i-left'>
							<img src="../assets/logo.png" alt="" class='hil-img'>
						</div>
						<div class='h-i-center'>
							<div class='hic-name'>你好</div>
							<div class='hic-time'>2019-05-20 12:12:12</div>
						</div>
						<div class='h-i-status no'>
							未签到
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style='height:3rem;'></div>
		<div class='hd-footer'>
			<div class='hf-btn flex info'>签到</div>
			<div class='hf-btn flex success'>报名参赛</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tabActive:0,
				tabs:['报名用户','活动详情']
			}
		},
		methods:{
			tabFn(ind){
				this.tabActive=ind||0;
			}
		}
	}
</script>

<style lang='scss' scoped>
	.hd-footer{
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		width:100%;
		z-index:2;
		display:flex;
		align-items:center;
		flex-wrap:nowrap;
		box-shadow: 0 0 10px rgba(0,0,0,0.1);
		.hf-btn{
			padding:0 1.5rem;
			color:#000;
			font-size:.9rem;
			height:3rem;
			line-height:3rem;
			background-color:#fff;
			text-align: center;
			&.success{
				background-color:#45A0FC;
				color:#fff;
			}
			&.info{
				background-color:#fb841c;
				color:#fff;
			}
			&.flex{
				flex:1;
			}
		}
	}
	.htc-item{
		display:flex;
		align-items:center;
		width:100%;
		box-sizing: border-box;
		padding:1rem;
		.hil-img{
			width:3rem;
			height:3rem;
			border-radius:50%;
		}
		.h-i-center{
			height:3rem;
			display:flex;
			flex-direction: column;
			justify-content: space-between;
			flex:1;
			margin:0 .5rem;
		}
		.hic-name{
			font-size:.9rem;
			color:#000;
		}
		.hic-time{
			font-size:.8rem;
			color:#999999;
		}
		.h-i-status{
			font-size:.9rem;
		}
		.yet{
			color:#45A0FC;
		}
		.no{
			color:#6e6e6e;
		}
	}
	.hc-tabs{
		display:flex;
		align-items:center;
		height:3rem;
		justify-content: space-around;
		border-bottom:1px solid #eee;

		.ht-item{
			height:3rem;
			
			span{
				color:#696969;
				text-overflow:ellipsis;
				overflow:hidden;
				white-space: nowrap;
				line-height:3rem;
				display:inline-block;
				height:3rem;
				border-bottom:.2rem solid transparent;
				transition:all .3s;
				font-size:1rem;
			}
			&.active span{
				color:#45A0FC;
				border-bottom-color:#45a0fc;
			}
		}
	}
	.sd-list{
		border-bottom:.7rem solid #eee;
		&:last-child{
			border-bottom:0;
		}
	}
	.ht-img{
		width:100%;
		height:10rem;
	}
	.hh-ul{
		list-style:none;
		padding:0;
		margin:0;
		width:100%;
		box-sizing: border-box;
		padding:1rem;
		.hh-li{
			.h-l-item{
				display:flex;
				margin:.7rem 0;
				.hli-name{
					color:#7f7f7f;
					font-size:1rem;
				}
				.hli-value{
					flex:1;
					font-size:1rem;
					margin-left:1rem;
					color:#000;
				}
			}
		}
	}
</style>
