<template>
  <div class="main">
    <div class="container1">
      <div class="content1">
        <img src="../assets/Group-2193.svg" />
      </div>
      <div class="content2">
        <a href='/'><span>Copyright © 2022 by Vanti.</span></a>
      </div>
      <div class="content3">
        <ul>
          <li><a href='/'><span class="text">Terms & Conditions</span></a></li>
          <li><a href='/'><span class="text">Privacy Policy</span></a></li>
          <li><a href='/'><span class="text">Service Agreement</span></a></li>
        </ul>
      </div>
    </div>
    <div class="container2">
      <div class="container2_1">
        <ul>
          <li><a href='/'><span class="text1">Product</span></a></li>
          <li><a href='/'><span class="text2">Early Fault Prediction</span></a></li>
          <li><a href='/'><span class="text2">Defect Detection</span></a></li>
          <li><a href='/'><span class="text2">Process Tuning Time Optimization</span></a></li>
        </ul>
      </div>
      <div class="container2_1">
        <ul>
          <li><span class="text1">Solution</span></li>
          <li><a href='/'><span class="text2">Predictive Quality</span></a></li>
          <li><a href='/'><span class="text2">Next-generation Visual Defect Detection</span></a></li>
          <li><a href='/'><span class="text2">Industrial Process Optimization</span></a></li>
          <li><a href='/'><span class="text2">Early Fault Prediction</span></a></li>
          <li><a href='/'><span class="text2">Defect Detection</span></a></li>
          <li><a href='/'><span class="text2">Process Tuning Time Optimization</span></a></li>
          <li><a href='/'><span class="text2">Predictive Quality In Processes</span></a></li>
          <li><a href='/'><span class="text2">AI-Powered Visual Defect Detection</span></a></li>
        </ul>
      </div>
      <div class="container2_1">
        <ul>
          <li><a href='/'><span class="text1">Case Studies</span></a></li>
          <li><a href='/'><span class="text2">Increasing Throughput in Plastics Manufacturing</span></a></li>
          <li><a href='/'><span class="text2">Unsupervised Anomaly Detection</span></a></li>
          <li><a href='/'><span class="text2">Virtual metrology with Drift Recovery</span></a></li>
          <li><a href='/'><span class="text2">Visual Defect Detection</span></a></li>
          <li><a href='/'><span class="text2">Seagate - Anomaly Detection</span></a></li>
        </ul>
      </div>
      <div class="container2_1">
        <ul>
          <li><span class="text1">Industry</span></li>
          <li><a href='/'><span class="text2">Automotive</span></a></li>
          <li><a href='/'><span class="text2">Electronics</span></a></li>
          <li><a href='/'><span class="text2">Rubber & Plastics</span></a></li>
          <li><a href='/'><span class="text2">Chemicals</span></a></li>
          <li><a href='/'><span class="text2">Food & Beverage</span></a></li>
        </ul>
      </div>
      <div class="container2_1">
        <ul>
          <li><span class="text1">Resources</span></li>
          <li><a href='/'><span class="text2">Ebooks</span></a></li>
          <li><a href='/'><span class="text2">Technical Overview</span></a></li>
          <li><a href='/'><span class="text2">Case Study</span></a></li>
          <li><a href='/'><span class="text2">Glossary</span></a></li>
          <li><a href='/'><span class="text2">Blog</span></a></li>
        </ul>
      </div>
      <div class="container2_1">
        <ul>
          <li><span class="text1">Company</span></li>
          <li><a href='/'><span class="text2">Contact Us</span></a></li>
          <li><a href='/'><span class="text2">Careers</span></a></li>
          <li><a href='/'><span class="text2">FAQ</span></a></li>
          <li><a href='/'><span class="text2">Partners</span></a></li>
        </ul>
      </div>
    </div>
    <div class="container3">
      <div class="content1">
        Want to learn more?
      </div>
      <div class="content2">
          <input type="email" class="input" id="email" pattern=".+@globex\.com" size="30" placeholder="Email*" required>
          <input type="submit" value="Submit" class="submit">
      </div>
      <div class="content3">
        By clicking "Submit" I agree to the Vanti Cookie Policy and <u>Privacy Policy</u>.
      </div>
      <div class="content4">
        <div class="img1"><img src="../assets/MemberSeal2021.webp" /></div>
        <div class="img2"><img src="../assets/aws-marketplace-logo_white.webp" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

</script>


<style scoped>
ul {
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
} 
a {
  color:#fff;
  display: flex;
  font-size: 0.73vw;
  font-weight: 400;
  line-height: 1.5em;
  align-items: center;
}
u {
  cursor: pointer;
}
.main {
  width: 100%;
  display: flex;
  background-color: #202C36;
}
.container1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 20px;
}
.container1 .content1 {
  text-align: left;
  margin-bottom: 20px;
  width: 100%
}
.container1 .content1 img {
  width: 6vw;
  padding-bottom: 16px
}
.container1 .content2 {
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  color: #fff;
  font-size: 12px;
}
.container1 .content3 {
  text-align: left;
  margin-bottom: 20px;
  width: 100%
}
.container1 .content3 .text {
  color: #D4145A;
  transition: color 0.3s;
  font-family: "Open Sans", Sans-serif;
  font-size: 0.7vw;
  font-weight: 400;
  line-height: 1.5em;
}
.container1 .content3 .text:hover {
  color: #fff;
  transition: color 0.3s;
}
.container2 {
  display: flex;
  justify-content: flex-start;
}
.container2_1 {
  width: 50%;
}
.container2 .text1 {
  color: #52de97;
  font-size: 0.73vw;
  font-weight: 700;
  line-height: 1.5em;
}
.container2 .text2 {
  color: #fff;
  transition: color 0.3s;
  font-size: 0.73vw;
  font-weight: 400;
  line-height: 1.5em;
}
.container2 .text2:hover {
  color: #52de97;
}
.container2_1 {
  padding-right: 10px;
}
.container3 {
  display: flex;
  flex-direction: column;
  padding-left: 50px;
}
.container3 .content1 {
  color: #000;
  font-family: "Montserrat";
  font-size: 0.8vw;
  font-weight: 400;
  padding-bottom: 10px;
}
.container3 .content2 {
  width: 100%;
  position: relative;
}
.container3 .input {
  width:100%;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 2em;
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 0.8vw;
  padding: 0.4vw 1vw;
  line-height: 1.5em;
}
.container3 .submit {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.8vw;
  font-family: 'Poppins';
  font-weight: 600;
  background-color: #ffffff;
  color: #00818A;
  border: 1px solid #00818A;
  border-radius: 2em;
  padding: 0.4vw 1.5vw;
  line-height: 1.5em;
  cursor: pointer;
}
.container3 .content3 {
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 0.65vw;
}
.container3 .content4 {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding-top: 20%;
}
.container3 .img1 {
  margin-right: 20%;
}
.container3 img {
  height: 4vw;
}
@media (max-width: 960px) {
li {
  display: flex;
  padding-bottom: 16px;
} 
a {
  font-size: 3.8vw;
}
.main {
  flex-wrap: wrap;
}
.container1 .content1 img {
  width: 25vw;
}
.container1 .content2 {
  font-size: 3.8vw;
}
.container1 .content3 .text {
  font-size: 3.7vw;
  line-height: 1em;
}
.container1 .content3 .text:hover {
  color: #fff;
  transition: color 0.3s;
}
.container2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.container2 .text1 {
  font-size: 4vw;
}
.container2 .text2 {
  font-size: 3.8vw;
}
.container3 {
  padding-left: 0;
}
.container3 .content1 {
  color: #fff;
  font-size: 4vw;
  padding: 20px 0 10px 0;
}
.container3 .input {
  font-size: 4vw;
}
.container3 .submit {
  font-size: 4vw;
}
.container3 .content3 {
  font-size: 2.5vw;
  margin: 0.9rem 0;
}
.container3 .content4 {
  padding-top: 5%;
  justify-content: space-around;
}
.container3 .img1 {
  margin-right: 0;
}
.container3 img {
  height: 20vw;
}
}
</style>