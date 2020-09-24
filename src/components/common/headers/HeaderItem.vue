<template>
  <div class="layout-header-item" @click="itemClick" @mousemove="isMouseup=true" @mouseleave="isMouseup=false">
    <div class="layout-header-item-div" v-if="isShow('item-home')" id="layout-home-portrait-div"><slot name="item-home"></slot></div>
    <div class="layout-header-item-div" v-if="isShow('search')" id="layout-search-portrait-div"><slot name="search"></slot></div>
    <div class="layout-header-item-div" v-if="isShow('item-text')" :style="activeStyle"><slot name="item-text"></slot></div>
    <div class="layout-header-item-div" v-if="isShow('portrait')" id="layout-header-portrait-div"><slot name="item-portrait-img"></slot><slot name="item-portrait-name"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "HeaderItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff4968'
      },
      activeDiv: String
    },
    data() {
      return {
        isMouseup: false
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isMouseup ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        console.log(this.$router.currentRoute.fullPath, this.path)
        if (this.$router.currentRoute.fullPath !== this.path) {
          this.$router.push(this.path);
        }
      },
      isShow(div) {
        let showStatus = false;
        if (this.activeDiv === div) {
          showStatus = true;
        }
        return showStatus;
      }
    }
  }
</script>




<style scoped>
  .layout-header-item {
    text-align: center;
    font-size: 25px;
    /*margin: 10px 0 0 10px;*/
    height: 10%;
  }



  .layout-header-item img {
    width: 40px;
    height: 40px;
    margin-top: 1px;
  }
  .layout-header-item {
    margin-right: 50px;
  }

  .layout-header-item-div {
    word-break:keep-all;
    white-space:nowrap;
  }

  #layout-search-portrait-div {
    margin-left: 600px;
  }
  #layout-header-portrait-div {
    margin-left: 30px;
  }
  #layout-home-portrait-div {
    margin-right: 100px;
  }
  .layout-header-item #layout-header-portrait-div span {
    vertical-align: top;
    font-size: 15px;
  }
</style>
