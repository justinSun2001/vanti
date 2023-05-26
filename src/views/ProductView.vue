<template>
  <div>
    <div class="top">
      <TopBar bgcolor="bg1" />
    </div>
    <div class="main">
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    TopBar,
    Footer
  },
}
</script>

<style scoped>
.top {
  position: fixed;
  top: 0;
  width:100%;
  z-index: 100;
}
.main {
  position: relative;
  height: 2000px;
  margin-top: 69px;
  background-color: rgba(18, 243, 243, 0.424);
}
</style>>
