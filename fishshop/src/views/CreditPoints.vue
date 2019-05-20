<template>
	<div class='credit'>
		<div class='c-header'>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class='c-footer'>
			 <div class='cf-body'>
				 <div class='c-b-topic'>
					 变动记录
				 </div>
				 <ul class='cbt-ul'>
					 <li class='cbt-li'>
						 <div class='c-l-topic'>
							 <div class='clt-left add'>+10</div>
							 <div class='clt-right'>2019-04-18 20:54:02</div>
						 </div>
						 <div class='c-l-introduce'>
							 变动原因变动原因变动原因变动原因变动原因变动原因变动原因 
						 </div>
					 </li>
					 <li class='cbt-li'>
						 <div class='c-l-topic'>
							 <div class='clt-left less'>-10</div>
							 <div class='clt-right'>2019-04-18 20:54:02</div>
						 </div>
						 <div class='c-l-introduce'>
							 变动原因变动原因变动原因变动原因变动原因变动原因变动原因 
						 </div>
					 </li>
				 </ul>
			 </div>
		</div>
	</div>
</template>

<script>
</script>

<style lang='scss' scoped>
	.cf-body{
		width:100%;
		padding:0 1rem;
		box-sizing: border-box;
		.c-b-topic{
			font-size:1rem;
			color:#45A0FC;
			line-height:3rem;
			border-bottom:1px solid #eee;
		}
		.cbt-ul{
			padding:0;
			margin:0;
			list-style:none;
			.cbt-li{
				border-bottom:1px solid #eee;
				padding-bottom:1rem;
				.c-l-topic{
					display:flex;
					align-items:center;
					height:3rem;
				}
				.clt-left{
					flex:1;
					font-size:1rem;
					&.add{
						color:#45A0FC;
					}
					&.less{
						color:#ff0303;
					}
				}
				.clt-right{
					color:#999;
					font-size:.8rem;
				}
				.c-l-introduce{
					color:#000;
					opacity:.7;
				}
			}
		}
	}
</style>
