<template>
  <div id="nav-model">
    <header>
      <nav>
        <div class="nav">
          <div @click="allEvent" :class="{action: clickEventList[0]}">全部活动</div>
          <div @click="signInEvent" :class="{action: clickEventList[1]}">待签到</div>
          <div @click="proceedEvent" :class="{action: clickEventList[2]}">进行中</div>
          <div @click="overEvent" :class="{action: clickEventList[3]}">已结束</div>
        </div>
      </nav>
    </header>
    <main>
      <section>
        <article>
          <div class="module">
            <div class="content-main">
              <div class="img-left">
                <img class="img-content" src="../assets/nav/1.png" alt>
              </div>
              <div class="content-right">
                <div class="content-right-div">
                  <div class="word-main">
                    <div class="title-content">东大门鱼塘第二次钓鱼大赛东大门鱼塘第二次钓鱼大赛</div>
                    <div class="time-content">比赛时间：2011-11-11</div>
                  </div>
                  <div class="status">
                    <em class="status-content sign">待签到</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="module">
            <div class="content-main">
              <div class="img-left">
                <img class="img-content" src="../assets/nav/1.png" alt>
              </div>
              <div class="content-right">
                <div class="content-right-div">
                  <div class="word-main">
                    <div class="title-content">东大门鱼塘第二次钓鱼大赛</div>
                    <div class="time-content">比赛时间：2011-11-11</div>
                  </div>
                  <div class="status">
                    <em class="status-content proceed">待进行</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="module">
            <div class="content-main">
              <div class="img-left">
                <img class="img-content" src="../assets/nav/1.png" alt>
              </div>
              <div class="content-right">
                <div class="content-right-div">
                  <div class="word-main">
                    <div class="title-content">东大门鱼塘第二次钓鱼大赛</div>
                    <div class="time-content">比赛时间：2011-11-11</div>
                  </div>
                  <div class="status">
                    <em class="status-content">已结束</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      clickEventList: [true, false, false, false],
      a: false
    }
  },
  methods: {
    allEvent () {
      this.clickEventList = [true, false, false, false]
    },
    signInEvent () {
      this.clickEventList = [false, true, false, false]
    },
    proceedEvent () {
      this.clickEventList = [false, false, true, false]
    },
    overEvent () {
      this.clickEventList = [false, false, false, true]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 0.625rem;
  display: flex;
  font-size: 0.75rem;
  background: white;
  text-align: center;
  div {
    flex: 1;
  }
  .action {
    color: #45a0fc;
    padding-bottom: 0.3375rem;
    border-bottom: 0.25rem solid #45a0fc;
  }
}
.module {
  background: white;
  margin-top: 0.4625rem;
  .content-main {
    width: 95%;
    margin: auto;
    display: flex;
    padding: 0.625rem 0;
    .img-left {
      flex: 1;
      .img-content {
        width: 8.3125rem;
        height: 7.125rem;
      }
    }
  }
}
.content-right {
  text-align: left;
  flex: 2;
}
.content-right-div {
  width: 95%;
  margin: auto;
  .word-main {
    height: 5.625rem;
    .title-content {
      word-break: break-all;
      font-size: 0.9375rem;
      line-height: 1.875rem;
    }
    .time-content {
      font-size: 0.625rem;
      margin-top: 0.625rem;
      color: #99a3a4;
    }
  }

  .status {
    font-size: 0.75rem;
    line-height: 1.625rem;
    text-align: right;
    .status-content {
      font-style: normal;
      padding: 0.3rem 1.1375rem;
      border-radius: 0.425rem;
      border: 0.0625rem solid #838383;
      color: #838383;
    }
  }
}
.sign {
  border-color: #65b5ec !important;
  color: #65b5ec !important;
}
.proceed {
  border-color: #ff8503 !important;
  color: #ff8503 !important;
}
@media (max-width: 600px) {
  .content-right-div {
    width: 95%;
    margin: auto;
    .word-main {
      height: 5.625rem;
      .title-content {
        word-break: break-all;
        font-size: 0.8375rem;
        line-height: 1.375rem;
      }
      .time-content {
        font-size: 0.625rem;
        margin-top: 0.625rem;
        color: #99a3a4;
      }
    }

    .status {
      font-size: 0.75rem;
      line-height: 1.625rem;
      text-align: right;
      .status-content {
        font-style: normal;
        padding: 0.3rem 1.1375rem;
        border-radius: 0.425rem;
      }
    }
  }
}
</style>
