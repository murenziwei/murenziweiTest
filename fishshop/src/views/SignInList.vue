<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一{{list[0]}}</mt-tab-item>
      <mt-tab-item id="2">选项二{{list[1]}}</mt-tab-item>
      <mt-tab-item id="3">选项三{{list[2]}}</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="set">
          <div class="set-user-img">
            <img class="user-img" src="../assets/term-set/1.png" alt>
          </div>
          <div class="info">
            <div class="name">羽大象</div>
            <div class="phone">1341323133</div>
          </div>
          <div class="weight">11-11 11:11</div>
          <div class="num sign">签到</div>
        </div>
        <div class="set">
          <div class="set-user-img">
            <img class="user-img" src="../assets/term-set/1.png" alt>
          </div>
          <div class="info">
            <div class="name">羽大象</div>
            <div class="phone">1341323133</div>
          </div>
          <div class="weight"></div>
          <div class="num">未签到</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n"/> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n"/> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
export default {
  data () {
    return {
      selected: '1',
      list: [31, 12, 3]
    }
  }
}
</script>
<style lang="scss" scoped>
.set {
  display: flex;
  width: 95%;
  margin: auto;
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  padding-top: 2.3rem;
}

.set-user-img {
  flex: 3;
  margin-bottom: 10px;
}
.user-img {
  border-radius: 50%;
  width: 4.125rem;
  height: 4.125rem;
}

.info {
  flex: 3;
  text-align: left;
}
.name {
  font-size: 0.775rem;
  margin-bottom: 24px;
}
.phone {
  font-size: 0.775rem;
  color: #bdc3c7;
}
.weight,
.num {
  font-size: 0.775rem;
  color: #bdc3c7;
  flex: 2;
  margin-top: 30px;
}
.sign {
  color: #1296db;
}
</style>
