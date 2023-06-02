<template>
  <header class="topBarM">
    <div class="contentM">
      <div>
        <div><img class="logo" @click="get_Home" src="../assets/Group-2193.svg" /></div>
      </div>
      <div>
        <div><img class="menu_bar" @click="get_menu" src="../assets/菜单.svg" /></div>
      </div>
    </div>
      <div class="list">
        <ul class="menu">
          <li>
            <div @click="get_Product">Product</div>
          </li>
          <li>
            <div class="dropdown text">Solution</div>
            <ul class="container">
              <div class="container_listItem">
                <div @click="get_Predictive_Quality">Predictive Quality</div>
              </div>
              <div class="container_listItem">
                <div @click="get_Next_generation_Visual_Defect_Detection">Next-generation Visual Defect Detection</div>
              </div>
              <div class="container_listItem">
                <div>Early Fault Prediction</div>
              </div>
              <div class="container_listItem">
                <div>Defect Detection</div>
              </div>
            </ul>
          </li>
          <li>
            <div class="dropdown text" >Industries</div>
            <ul class="container">
              <div class="container_listItem">
                <div>Automotive</div>
              </div>
              <div class="container_listItem">
                <div>Electronics</div>
              </div>
              <div class="container_listItem">
                <div>Rubber & Plastic</div>
              </div>
              <div class="container_listItem">
                <div>Chemicals</div>
              </div>
            </ul>
          </li>
          <li>
            <div class="dropdown" @click="get_Case_Studies">Case Studies</div>
            <ul class="container">
              <div class="container_listItem">
                <div>Increasing Throughput in Plastics Manufacturing</div>
              </div>
              <div class="container_listItem">
                <div>Unsupervised Anomaly Detection</div>
              </div>
              <div class="container_listItem">
                <div>Virtual metrology with Drift Recovery</div>
              </div>
              <div class="container_listItem">
                <div>Visual Defect Detection</div>
              </div>
            </ul>
          </li>
          <li>
            <div class="dropdown text" >Resources</div>
            <ul class="container">
              <div class="container_listItem">
                <div>Blog</div>
              </div>
              <div class="container_listItem">
                <div>Podcasts & Webinars</div>
              </div>
              <div class="container_listItem">
                <div>Books</div>
              </div>
              <div class="container_listItem">
                <div>Technical Overview</div>
              </div>
            </ul>
          </li>
          <li>
            <div class="dropdown" >Company</div>
            <ul class="container">
              <div class="container_listItem">
                <div>About Us</div>
              </div>
              <div class="container_listItem">
                <div>Careers</div>
              </div>
              <div class="container_listItem">
                <div>Partners</div>
              </div>
              <div class="container_listItem">
                <div>FAQ</div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
  </header>
</template>


<script>
export default {
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
    let video = document.querySelector('video');
    video.play();
  },
  methods: {
    handleScroll () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 53){
        document.querySelector('.topBar').style.position='fixed';
        document.querySelector('.topBar').style.top='0px';
        document.querySelector('.content').style.backgroundColor='#202C36';
        document.querySelector('.topBarM').style.position='fixed';
        document.querySelector('.topBarM').style.top='0px';
        document.querySelector('.contentM').style.backgroundColor='#202C36';
      };
      if(scrollTop <= 53){
        document.querySelector('.topBar').style.position='absolute';
        document.querySelector('.topBar').style.top='0';
        document.querySelector('.content').style.backgroundColor='transparent';
        document.querySelector('.topBarM').style.position='absolute';
        document.querySelector('.topBarM').style.top='0';
        document.querySelector('.contentM').style.backgroundColor='transparent';
      }
    },
    get_Home(){
      this.$router.push({
        path:"/"
      });
    },
    get_Product(){
      this.$router.push({
        path:"/product"
      });
    },
    get_Predictive_Quality(){
      this.$router.push({
        path:"/predictive-quality"
      });
    },
    get_Next_generation_Visual_Defect_Detection(){
      this.$router.push({
        path:"/next-generation-visual-defect-detection"
      });
    },
    get_Case_Studies(){
      this.$router.push({
        path:"/case-studies"
      });
    },
    get_menu() {
        let a=document.querySelector('.list').style.display;
        console.log(a);
        if(a==''||a=='none'){
        document.querySelector('.list').style.display='block';
        document.querySelector('.list').style.position='absolute';
        document.querySelector('.list').style.top='60';
        }
        else {
          document.querySelector('.list').style.display='none'
        }
    }
  }
}
</script>

<style scoped>
.topBarM {
  position:absolute;
  top:0;
  background-color: transparent;
  z-index: 5;
  width: 100%;
  margin-bottom: 30px;
}
.contentM {
  line-height: 24px;
  /* padding-left:5%;
  padding-right:5%; */
  padding: 1% 5%;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.logo {
  width: 35vw;
  cursor: pointer;
}
.menu_bar {
  width: 8.3vw;
  cursor: pointer;
  background-color: #52DE97;
}
.list {
  display: none;
  width: 100%;
}
nav {
  width:100%;
}
.menu {
  display: flex;
  width:100%;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #202C36;
}
.menu li {
  display: flex;
  padding: 5px 10px 0px 10px;
  position: relative;
}
.menu div {
  cursor:pointer;
  font-family: "Poppins";
  font-weight: 600;
  color: #fff;
  font-size: 1.5rem;
}
.menu .text {
  cursor:text;
}
.menu div:hover{
  color: #52DE97;
}
.menu li:hover .container {
  display: flex;
  flex-direction: column;
  width:fit-content;
  padding: 0.5rem;
  text-align:left;
  position: absolute;
  top: 40px;
  left:0;
  z-index:10000; 
  background-color: #202C36;
}
.container {
  display: none;
}
.container_listItem div {
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Poppins";
  color: #fff;
}
.container_listItem div:hover {
  color: #52DE97;
}

</style>