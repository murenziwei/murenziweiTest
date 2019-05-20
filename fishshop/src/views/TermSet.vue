<template>
  <div class="set-div">
    <div set-main>
      <div class="set" v-for="item in 4" :key="item">
        <div class="set-user-img">
          <img class="user-img" src="../assets/term-set/1.png" alt>
        </div>
        <div class="info">
          <div class="name">羽大象</div>
          <div class="phone">1341323133</div>
        </div>
        <div class="weight">请输入重量</div>
        <div class="num">请输入数量</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.set-view {
  padding-bottom: 47px;
  background: white;
}

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
</style>
