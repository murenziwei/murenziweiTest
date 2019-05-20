<template>
  <div>
      <form action="">
		  <div class='sd-row'>
			  
			  <div class='sr-left sr-w1'>
			  		<div class='sr-name'>请填写下发资料，参与报名：</div>
			  
			  </div>
		  </div>
		  <div class='sd-list'>
			  <div class='sd-row'>
				<div class='sr-left'>
					<div class='sr-name'>公司名称</div> 
				</div>
				<div class='sr-right'>
					<input type="text" class='sr-r-input' placeholder="请输入公司名称" />
				</div>
			  </div>
			  <div class='sd-row'>
			  				<div class='sr-left'>
			  					<div class='sr-name'>职位</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<input type="text" class='sr-r-input' placeholder="请输入职位" />
			  				</div>
			  </div>
			  <div class='sd-row'>
			  				<div class='sr-left'>
			  					<div class='sr-name'>姓名</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<input type="text" class='sr-r-input' placeholder="请输入姓名" />
			  				</div>
			  </div>
			  <div class='sd-row'>
			  				<div class='sr-left'>
			  					<div class='sr-name'>手机号</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<input type="text" class='sr-r-input' placeholder="请输入手机号" />
			  				</div>
			  </div>
		  </div>
		  <div class='sd-list'>
		  			  <div class='sd-row'>
		  				<div class='sr-left'>
		  					<div class='sr-name'>报名费用</div> 
		  				</div>
		  				<div class='sr-right'>
		  					<span class='price-color'>￥30.00</span>
		  				</div>
		  			  </div>
		  </div>
		  
		  <div class=''>
		  			  <div class='sd-row'>
		  				<div ><input type="checkbox" /></div>
						<div class='read-text'>阅读并同意</div>
						<router-link to='/home' class='nav'>《活动协议》</router-link>
		  			  </div>
		  </div>
		  
		  <div class='ra'>
		  	<mt-button size="large" type="primary" class='circle'>立即报名</mt-button>
		  </div>
	  </form>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='scss' scoped>
.read-text{
	font-size:.9rem;
}
.nav{
	color:#45A0FC;
	text-decoration: none;
	font-size:.9rem;
	&:hover{
		background: transparent;
	}
}
.circle{
	border-radius:50px;
	width:80%;
	margin:2rem auto;
}
.price-color{
	color:#FB841C;
	font-size:.9rem;
}
.sd-list{
	border-bottom:.7rem solid #eee;
	&:last-child{
		border-bottom:0;
	}
}
.sd-row{
	display:flex;
	align-items:center;
	box-sizing: border-box;
	margin:1rem 0;
	padding:0 .5rem;
	.sr-left{
		width:25%;
	}
	.sr-w1{
		width:100%;
	}
	.sr-right{
		width:74%;
		display:flex;
	}
	.sr-name{
		font-size:0.9rem;
		color:#000;
		font-weight:bold;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.sr-r-input{
		outline:0;
		border:0;
		flex:1;
		line-height:1rem;
		font-size:0.9rem;
	}
}
</style>
