<template>
  <div>
      <form action="">
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
			  					<div class='sr-name'>公司名称</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<input type="text" class='sr-r-input' placeholder="请输入公司名称" />
			  				</div>
			  </div>
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
			  					<div class='sr-name'>公司名称</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<input type="text" class='sr-r-input' placeholder="请输入公司名称" />
			  				</div>
			  </div>
		  </div>
		  
		  <div class='sd-list'>
			  <div class='sd-row'>
				<div class='sr-left'>
					<div class='sr-name'>性别</div> 
				</div>
				<div class='sr-right'>
					<div class='cur-val'>
						<div class='cv-text'>未知</div>
						<div class='cv-logo'></div>
					</div>
				</div>
			  </div>
			  <div class='sd-row'>
			  				<div class='sr-left'>
			  					<div class='sr-name'>性别</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<div class='cur-val'>
			  						<div class='cv-text'>未知</div>
			  						<div class='cv-logo'></div>
			  					</div>
			  				</div>
			  </div>
			  <div class='sd-row'>
			  				<div class='sr-left'>
			  					<div class='sr-name'>性别</div> 
			  				</div>
			  				<div class='sr-right'>
			  					<div class='cur-val'>
			  						<div class='cv-text'>未知</div>
			  						<div class='cv-logo'></div>
			  					</div>
			  				</div>
			  </div>
		  </div>
	  </form>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='scss' scoped>
.cur-val{
	display:flex;
	align-items:center;
	justify-content: flex-end;
	align-items: center;
	width:100%;
	.cv-text{
		font-size:.9rem;
		color:#000;
	}
	.cv-logo{
		width:0.9rem;
		height:0.8rem;
		background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACzUlEQVRoQ9WZvYsTQRiH33eTDZcgxDqlrZUogpyeRBCsrC7FYWEaU5mwC/4BqcMKs/kqgp0gKnLKcYiIciBWimJzqM1hZSFIgh+BkM2OTMhCWCfZy87H3m27OzPPM/N787EvwjG/UJTftu1zo9HoS7fb/SM6V5zxQgK2bZ/3ff81AHw2TbPoOM7fOBAiY2ILVKvVM4ZhvEHEEwyAUvo+CYlYArZtn6KUfgSAfGj33k0mk6utVuuXyK6uMjaWAACgZVn3AeAGZ7FPmUxmo9Fo/F4FJO6zcQXYekdCQkTgSEiICgQSjwFgM4k4yRCAer1uDAaDR4skAKBICBnEzfmycVIE2AIREvsAcFGFhDSBpCSkCiQhIV0gkOj3+08R8Tonv/vj8fhyp9P5KaMmlAgwsFKplCoUCts8CUrpV8/z1mVIKBPQJaFUQIeEcoE5iV1EvBbOvWictAgw6EqlYmaz2Z1FEqZpbjiO82PVwtYmECUBAAfpdPrCqhJaBVRIaBeQLZGIQCCRy+VeAMAVTu4PPM+71G63v0fVRGICDKxcLq/l8/m3iHiWA/ptOBye7vV6Qy2/RqN2ine/VqsVDcNgp5DhfLzecV33btS8iZ0Ag0fE54i4Fhd++m8qylDF/WXwAHCbENI57LraBWTCaz8B2fBaBSzLWqeUvuJlftXYzMdLS4Rm8C8RMcfJ9i1CyL3DZj78nHIBlfDKI6QaXqnAInhKKUXEikhslNfArG+wF878DP4mIYS9GJZySa+BoOkR9A0CShXw0iOkG16qQBLw0gSWwQPAluu67MWvkku4BsK9svnMq4YXPgEGn0ql9sK9MlawOuCFBJbAT1jvTGVshL8HZl3KDwBwMhxs3/e3ms3mQyWB50watwb+a/BRSieIuEkIeaYLXihCsy7ltDeWFLyowHSjLct6AADbhJAnOnc+WCtuhJJg5a557AX+ASbLj0Bb8FjMAAAAAElFTkSuQmCC');
		background-size:0.9rem;
		background-position:center;
		background-repeat:no-repeat;
	}
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
