<template>
  <div class="layout">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <main-header class="main-header"/>
        </div>
      </el-col>
    </el-row>
    <router-view class="router-content"/>
  </div>
</template>

<script>
  import MainHeader from "components/content/MainHeader/MainHeader";
  export default {
    name: "Layout",
    components: {
      MainHeader
    }
  }
</script>

<style scoped>
  .router-content {
    width: 100%;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
  }
</style>
