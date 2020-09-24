<template>
  <div class="layout-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style scoped>
  .layout-header {
    margin: auto;
    background-color: #E6A23C;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    box-shadow: 0 1px 1px rgba(100,100,100,.2);
    display: flex;
    line-height: 44px;
    text-align: center;
  }
</style>
