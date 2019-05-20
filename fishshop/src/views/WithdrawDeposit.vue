<template>
  <div>
    <form bindsubmit="withdrawFormSubmit">
      <div>
        <div class="withdraw-content">
          <div class="label">提现金额</div>
          <div class="sum-main">
            <input name="sum" value="000" class="sum-input" type="number" placeholder="请输入金额">
          </div>
          <div class="sum-num">金额 3333元</div>
        </div>
        <div class="withdraw">
          <mt-button size="large" type="primary">primary</mt-button>
        </div>
        <div class="see">
          <i class="see-content">查看提现余额</i>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.withdraw-content {
  width: 90%;
  margin: auto;
  /* background: red; */
  padding-top: 28px;
  padding-bottom: 20px;
}

.label {
  color: #bdbdbd;
  font-size: .8rem;
}
.sum-main {
  /* height: 72px; */
  border-bottom: 1px solid #e5e5e5;
}

.sum-input {
  // padding-bottom: 26px;
  margin-top: 10px;
  height: 2.5rem;
  font-size: 1.5rem;
  outline:0;
  border:0;
}
.sum-num {
  height: 26px;
  color: #bdbdbd;
  font-size: 0.8rem;
  margin-top: 10px;
}
.withdraw {
  width: 60%;
  margin: auto;
  margin-top:3rem;
}
.withdraw-button {
  background: #45a0fc;
  font-size: 0.8rem;
  color: white;
  border-radius: 60px;
}
.see {
  margin-top: 27px;
  color: #3eaaf5;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
}
.see-content {
  border-bottom: 1px solid #3eaaf5;
}
</style>
