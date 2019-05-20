<template>
  <div>
    <div class="portrait-model">
      <div>
        <img class="portrait" src="../assets/my/my.png" alt>
      </div>
      <div>
        呦呦呦
        <img class="edit" src="../assets/my/tianxie.png" alt>
      </div>
    </div>
    <div class="info">
      <div class="credit">
        <div>
          <img src="../assets/my/bisai-2.png" alt>
        </div>
        <div class="info-content">我的信用分</div>
      </div>
      <div class="apply">
        <div>
          <img src="../assets/my/bisai.png" alt>
        </div>
        <div class="info-content">报名活动</div>
      </div>
      <div class="bid">
        <div>
          <img src="../assets/my/bisairiqi-2.png" alt>
        </div>
        <div class="info-content">申办活动</div>
      </div>
    </div>
    <div class="add">
      <router-link tag="div" to="/launching-details" class="add-ico-div game">
        <div class="game-title">发起比赛</div>
      </router-link>
      <router-link tag="div" to="/promotional-activities" class="add-ico-div activity">
       <div class="activity-title">发起活动</div>
      </router-link>
      <div class="add-ico-div">
        <!-- <img class="add-ico" src="../assets/my/+-touming.png" alt> -->
        <div class="add-ico"></div>
      </div>
    </div>
    <div class="bottom-nav">
      <TabBar :index="2"></TabBar>
    </div>
  </div>
</template>
<script>
import TabBar from '../components/TabBar.vue'
export default {
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
body {
  // background: white;
}
@mixin relative($right, $bottom) {
  position: relative;
  right: $right;
  bottom: $bottom;
}
.flex-one {
  flex: 1;
  text-align: center;
  // margin-top: .9375rem;
  padding-top: 2.8375rem;
  padding-bottom: 1.1125rem;
}
.portrait-model {
  font-size: 0.875rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1.0625rem;
  .portrait {
    width: 3.875rem;
    height: 3.875rem;
  }
  .edit {
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.35rem;
  }
}
.info {
  font-size: 0.75rem;
  box-shadow: 0 0.375rem 1.625rem 0.0625rem rgba(69, 160, 252, 0.15);
  width: 90%;
  margin: auto;
  display: flex;
  background-color: #ffffff;
  color: #a6acaf;
  .credit,
  .apply,
  .bid {
    @extend .flex-one;
    .info-content {
      margin-top: 0.7rem;
    }
  }
  img {
    width: 2.1875rem;
    width: 2.1875rem;
  }
}
.add {
  // background: red;
  position: fixed;
  right: 0.85rem;
  bottom: 5.375rem;
  .add-ico-div {
    padding: 1.0625rem;
    width: 0.9475rem;
    height: 0.9475rem;
    border-radius: 50%;
    background: #45a0fc;
    .add-ico {
      width: 0.9475rem;
      height: 0.9475rem;
      background-image: url("../assets/my/+-touming.png");
      background-repeat: no-repeat;
      background-size: 0.9475rem;
    }
  }
  .game {
    @include relative(0.35rem, -3.125rem);
		padding:0;
    background: #fb9f3b !important;
    font-size: 0.625rem;
    color: white;
		width: 3.875rem;
		height: 3.875rem;
		line-height:3.875rem;
		text-align:center;
		.game-title{
			white-space:nowrap;
		}
  }
  .activity {
    @include relative(4.5rem, -3rem);
    padding:0;
    background: #fb9f3b !important;
    font-size: 0.625rem;
    color: white;
    width: 3.875rem;
    height: 3.875rem;
    line-height:3.875rem;
    text-align:center;
    .activity-title {
      white-space:nowrap;
    }
  }
}
.bottom-nav {
  padding-top: 0.8125rem;
  border-top: 1px solid #9e9e9e29;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
