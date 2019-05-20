<template>
  <div>
    <div class="withdraw-content">
      <div class="label">提现金额</div>
      <div class="sum-main">
        <input class="sum-input" type="number" placeholder="请输入金额">
      </div>
    </div>
    <div class="status-main">
      <div class="icon">
        <img class="icon-image" src="../assets/withdraw-log/blue.png">
      </div>
      <div class="time">2022年12月20日</div>
      <div class="sum">+1000</div>
      <div class="status proceed">审核中</div>
    </div>
    <div class="status-main">
      <div class="icon">
        <img class="icon-image" src="../assets/withdraw-log/red.png">
      </div>
      <div class="time">2022年12月20日</div>
      <div class="sum">+1000</div>
      <div class="status defeated">失败</div>
    </div>
    <div class="status-main">
      <div class="icon">
        <img class="icon-image" src="../assets/withdraw-log/black.png">
      </div>
      <div class="time">2022年12月20日</div>
      <div class="sum">+1000</div>
      <div class="status">审核成功</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.log-main {
  background: white;
  padding-bottom: 34px;
  box-shadow: 0 3px 8px 1px rgba(196, 196, 196, 0.15);
}
.withdraw-content {
  width: 90%;
  margin: auto;
  /* background: red; */
  padding-top: 28px;
}
.label {
  color: #bdbdbd;
  font-size: .8rem;
}
.sum-main {
  /* height: 72px; */
  border-bottom: 1px solid #e5e5e5;
}
.sum-inuut:focus{
  outline:0;
  border:0;
}
.sum-input {
  // padding-bottom: 26px;
  margin-top: 10px;
  height: 2.5rem;
  font-size: 1.5rem;
  outline:0;
  border:0;
}
.status-main {
  display: flex;
  margin: auto;
  margin-top: 42px;
  width: 90%;
  font-size: .9rem;
  padding-bottom: 26px;
  border-bottom: solid 1px #e5e5e5;
}
.icon {
  margin-right: 10px;
}
.icon-image {
  width: 1.375rem;
  height: 1.375rem;
}
.time {
  flex: 2;
}
.sum {
  flex: 1;
}
.status {
  flex: 1;
  text-align: right;
}
.proceed {
  color: #1296db;
}
.defeated {
  color: red;
}
</style>
