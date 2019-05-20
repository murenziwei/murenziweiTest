<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  // background: #d0d3d4;
  margin: 0;
}
</style>
