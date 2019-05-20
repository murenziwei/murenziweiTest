<template>
  <div>
    <div class="nav-list">
      <router-link class="nav" to="/home">
        <div>
          <img v-if="homeActive" src="../assets/bottom-nav/home-active.png" alt>
          <img v-else src="../assets/bottom-nav/home.png" alt>
        </div>
        <div :class="{active: homeActive}">首页</div>
      </router-link>
      <router-link class="nav" to="/activity">
        <div>
          <img v-if="activityActive" src="../assets/bottom-nav/activity-active.png" alt>
          <img v-else src="../assets/bottom-nav/activity.png" alt>
        </div>
        <div :class="{active: activityActive}">活动</div>
      </router-link>
      <router-link class="nav" to='/'>
        <div>
          <img v-if="myActive" src="../assets/bottom-nav/my-active.png" alt>
          <img v-else src="../assets/bottom-nav/my.png" alt>
        </div>
        <div :class="{active: myActive}">我的</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    switch (Number(this.index)) {
      case 0:
        this.homeActive = true
        break
      case 1:
        this.activityActive = true
        break
      case 2:
        this.myActive = true
        break
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      homeActive: false,
      activityActive: false,
      myActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  text-align: center;
  font-size: 0.625rem;
  color: #bfbfbf;
  .nav {
		dsiplay:block;
		text-decoration: none;
    flex: 1;
		color:#bfbfbf;
    .active {
      color: #1296db;
    }
    img {
      width: 1.55rem;
      height: 1.55rem;
    }
  }
}
</style>
