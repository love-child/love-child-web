<template>
  <Header>
    <header-item path="/home" active-div="item-home">
      <img slot="item-home" src="~assets/logo.png"/>
    </header-item>
    <header-item path="/home" active-div="item-text">
      <div slot="item-text">首页</div>
    </header-item>
    <header-item path="/photo" active-div="item-text">
      <div slot="item-text">相册</div>
    </header-item>
    <header-item path="/games" active-div="item-text">
      <div slot="item-text">小游戏</div>
    </header-item>
    <header-item path="/search" active-div="search">
      <div slot="search">
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </header-item>
    <header-item path="/profile" active-div="portrait">
        <img @click="logout" slot="item-portrait-img" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt=""/>
        <span slot="item-portrait-name">用户名</span>
    </header-item>
  </Header>
</template>

<script>
  import Header from "components/common/headers/Header";
  import HeaderItem from "components/common/headers/HeaderItem";
  export default {
    name: "MainHeader",
    components: {
      HeaderItem,
      Header
    },
    methods: {
      logout() {
        localStorage.removeItem("user")
      }
    }
  }
</script>

<style scoped>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
