<template>
  <div>
    <div class="cover-layer" v-if="coverLayer">
      <div class="picker-main">
        <div class="picker-header" @click="closeEvent">取消</div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
import { Picker } from 'mint-ui'
import Axios from 'axios'
import Api from '../api/apiName.js'

Vue.component(Picker.name, Picker)

export default {
  mounted () {
    const THAT = this
    Axios.post(Api.production.getClassificationNav)
      .then(function (response) {
        const VALUES = []
        response.data.data.forEach(e => {
          if (e.name !== '') {
            VALUES.push(e.name)
          }
        })
        THAT.slots = [
          {
            flex: 1,
            values: VALUES,
            textAlign: 'center'
          }
        ]
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  props: {
    coverLayer: Boolean
  },
  data () {
    return {
      slots: [], // 活动分类
      classification: '分类' // 分类
    }
  },
  methods: {
    onValuesChange (picker, values) {
      console.log(picker, values)

      picker.setSlotValue(1, values[0])
    },

    // 分类选择器消失
    closeEvent () {
      this.$emit('closeEvent')
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #d7dbdd;
  top: 0;
  left: 0;
  opacity: 0.9;
}
.picker-main {
  position: fixed;
  bottom: 0;
  background: white;
  opacity: 1 !important;
  width: 100%;
  .picker-header {
    display: flex;
    justify-content: flex-end;
    width: 98%;
  }
}
</style>
