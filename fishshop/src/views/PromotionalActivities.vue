<template>
  <div class="promotional-activities">
    <div class="selection">
      <div class="width-main">
        <div class="content-status-main">
          <div>当前状态</div>
          <div class="status">待批复</div>
        </div>
      </div>
    </div>
    <div class="selection">
      <div class="width-main">
        <div class="info">
          <div class="left">公司名称</div>
          <div class="right">大黄蜂</div>
        </div>
      </div>
      <div class="width-main">
        <div class="info">
          <div class="left">职位</div>
          <div class="right">产品</div>
        </div>
      </div>
      <div class="width-main">
        <div class="info">
          <div class="left">姓名</div>
          <div class="right">葛城</div>
        </div>
      </div>
      <div class="width-main">
        <div class="info">
          <div class="left">手机号</div>
          <div class="right">1378777585</div>
        </div>
      </div>
    </div>
    <div class="selection">
      <div class="width-main">
        <div class="content-status-main" @click="showEvent">
          <div>选择分类</div>
          <div>{{classification}}</div>
        </div>
      </div>
    </div>
    <div class="selection">
      <div class="width-main">
        <div class="info">
          <div class="left">比赛名称</div>
          <div class="right">白云公园钓鱼大赛</div>
        </div>
      </div>
      <div class="width-main">
        <div class="info">
          <div class="left">比赛时间</div>
          <div class="right">2011-11-11</div>
        </div>
      </div>
      <div class="width-main">
        <div class="info">
          <div class="left">比赛人数</div>
          <div class="right">22</div>
        </div>
      </div>
      <div class="width-main">
        <div class="info">
          <div class="left">比赛地点</div>
          <div class="right">白云公园</div>
        </div>
      </div>
    </div>
    <div class="selection">
      <div class="width-main">
        <div class="content-status-main">
          <div>报名费用</div>
          <div class="price">10.00元</div>
        </div>
      </div>
    </div>
    <div class="selection">
      <div class="reason-width-main width-main">
        <div class="info">
          <div class="left">申办理由</div>
          <div class="right">促进小区住户的感情交流</div>
        </div>
      </div>
      <div class="img-width-main">
        <div class="info">
          <div class="left">主图</div>
          <div class="right">
            <div class="add">
              <img class="add-img" src="../assets/launching/+.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="img-width-main">
        <div class="info">
          <div class="left">缩略图</div>
          <div class="right">
            <div class="add">
              <img class="add-img" src="../assets/launching/+.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="img-width-main">
        <div class="info">
          <div class="left">详情图</div>
          <div class="right">
            <div class="add">
              <img class="add-img" src="../assets/launching/+.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixation">
      <div class="details">签到详情</div>
      <div class="scan">签到扫码</div>
    </div>
    <ClassificationPicker @closeEvent="closeEvent" :coverLayer="coverLayer"/>
  </div>
</template>
<script>
import ClassificationPicker from '../components/ClassificationPicker'
export default {
  mounted () {

  },
  data () {
    return {
      slots: [], // 活动分类
      coverLayer: false, // 分类选择器
      classification: '分类' // 分类
    }
  },
  methods: {
    // 显示分类选择器
    showEvent () {
      this.coverLayer = true
    },
    // 分类选择器消失
    closeEvent () { this.coverLayer = false }
  },
  // computed: {
  //   coverLayer() {
  //     this.coverLayer = this.coverLayer;
  //   }
  // },
  components: {
    ClassificationPicker
  }
}
</script>

<style lang="scss" scoped>
.promotional-activities {
  padding-bottom: 3.825rem;
}
.selection {
  font-size: 0.8125rem;
  background: white;
  margin-bottom: 0.375rem;
  .width-main {
    line-height: 2.5625rem;
    width: 95%;
    margin: auto;
  }
  .reason-width-main {
    padding-bottom: 0.475rem;
  }
  .img-width-main {
    width: 95%;
    margin: auto;
    padding-bottom: 1.375rem;
  }
}
.content-status-main {
  display: flex;
  justify-content: space-between;
  .status {
    color: #3498db;
  }
  .price {
    color: #ff8503;
  }
}
.info {
  display: flex;
  .left {
    flex: 1;
  }
  .right {
    flex: 3;
    .add-img {
      height: 0.75rem;
      width: 0.75rem;
      padding: 0.6875rem;
      border: 0.0625rem solid #dcdcdc;
      border-radius: 0.325rem;
    }
  }
}
.fixation {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  line-height: 3.125rem;
  font-size: 0.75rem;
  .details {
    flex: 1;
    background: #fb841c;
    color: white;
  }
  .scan {
    flex: 1;
    background: #45a0fc;
    color: white;
  }
}
</style>
