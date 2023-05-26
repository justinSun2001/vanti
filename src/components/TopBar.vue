<template>
  <header :class="bgcolor">
    <div class="content">
      <div>
        <div><img class="logo" @click="get_Home" src="../assets/Group-2193.svg" /></div>
      </div>
      <div>
      <nav>
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
          <li>
            <div class="button">
              <div class="text_button">Let's Talk</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  </header>
</template>


<script>
export default {
  props: ["bgcolor"],
  methods: {
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
    }
  }
}
</script>

<style scoped>
.bg1 {
  background-color: #202C36;
}
.bg2 {
  background-color: transparent;
}
.content {
  line-height: 24px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 10.3vw;
  cursor: pointer;
}
nav {
  width:100%;
  padding-right: 50px;
}
.menu {
  display: flex;
}
.menu li {
  display: flex;
  flex: none;
  padding: 5px 10px 0px 10px;
  align-items: center;
  position: relative;
}
.menu div {
  cursor:pointer;
  font-family: "Poppins";
  font-weight: 600;
  color: #fff;
  font-size: 0.5rem;
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
  top: 30px;
  left: 0;
  right:0;
  z-index:10000; 
  background-color: #202C36;
}
.container {
  display: none;
}

.container_listItem {
  flex: 1;
}
.container_listItem div {
  cursor: pointer;
  white-space: nowrap;
  font-size: 0.4rem;
  font-weight: 500;
  font-family: "Poppins";
  color: #fff;
}
.container_listItem div:hover {
  color: #52DE97;
}
.button {
  border: 1px solid #D4145A;
  border-radius: 1.5rem;
  padding: 3px 15px;
  background-color: #fff;
}
.button .text_button {
  color:#D4145A
}
.button:hover {
  background-color: #D4145A;
}
.button:hover .text_button{
  color: #fff;
}

</style>