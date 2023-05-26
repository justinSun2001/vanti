<script>
import TopBar from '../components/TopBar.vue'
import Footer from '../components/Footer.vue'
import gadi from '../assets/gadi.jpeg'
import omer from '../assets/omer.jpeg'

export default {
  components: {
    TopBar,
    Footer
  },
  data() {
    return {
      bgcolor:'bg2',
      items: [{
        src: gadi,
        name: 'Gadi Meik',
        intro: 'Director Engineer Manager at Flex, one of the largest global electronics manufacturing services.',
        detail: '"We were looking for a solution that will be able to retrieve data from different sources and combined them into one analytics solution. Vanti provided a really fast understanding of our needs and provide a comprehensive fast solution that met the expectations" .'
      },{
        src: omer,
        name: 'Omer Keliaf',
        intro: 'CEO and co-founder of Innoviz Technologies, a leading supplier of LiDAR for the automotive industry.',
        detail: '"As a manufacturer in a very competitive environment, we\'re always looking to speed up ramp-up time and serve our customers with the highest quality, volume and price," said "That\'s exactly where Vanti\'s platform comes into the picture. We liked how fast it was integrated and demonstrated value leveraging our operations data".'
      }]
    }
  },
  created() {
    window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > window.innerHeight*0.1 + 53){
        document.querySelector('.topBar').style.position='fixed';
        document.querySelector('.topBar').style.top='0px';
        this.bgcolor='bg1';
      };
      if(scrollTop <= window.innerHeight*0.1 + 53){
        document.querySelector('.topBar').style.position='absolute';
        document.querySelector('.topBar').style.top='10%';
        this.bgcolor='bg2';
      }
    }
  }
}
</script>

<template>
  <div class="homePage">
    <!-- 导航栏 -->
    <section class="topBar">
      <TopBar :bgcolor="bgcolor" />
    </section>
    <!-- 第一部分 -->
    <section class="sec1">
      <div class="bg">
      </div>
      <div class="container1">
        <div class="left">
          <div class="left_container">
            <div class="content1">
              <h1>Intelligent Manufacturing That Works<span style="color: #52DE97;">.</span> Your Experts<span style="color: #52DE97;">.</span>Our AI<span style="color: #52DE97;">.</span></h1>
            </div>
            <div class="content2">
              <p>AI-Powered Intelligent Manufacturing Platform, purpose-built for factory professionals, utilizing existing data and sensors to increase quality, efficiency, and throughput within days.</p>
            </div>
            <div class="content3">
              <div class="text_button">Let's Talk</div>
            </div>
          </div>
        </div>
        <div class="right">
        </div>
      </div>
    </section>
    <!-- 第二部分 -->
    <section class="sec2">
      <div class="container2">
        <div class="content1">
          <div class="content1_1">
            Accelerate Manufacturing Outcomes in Days
          </div>
          <div class="img_container">
            <img src="../assets/Group-2187.svg" />
          </div>
          <div class="content1_2">
            <p>Increase production yield, product quality, process efficiency, and more, with Vanti’s rapidly deployable AI-platform to realize manufacturing agility – within days, not months.</p>
          </div>
        </div>
        <div class="content1">
          <div class="content1_1">
            Democratize AI For Manufacturing Professionals
          </div>
          <div class="img_container">
            <img src="../assets/Group-2187.svg" />
          </div>
          <div class="content1_2">
            <p>Empower your manufacturing experts to uncover continuous improvement opportunities using Vanti’s no-code, visually intuitive, data scientist-in-a-box solution — no AI/ML expertise needed.</p>
          </div>
        </div>
        <div class="content1">
          <div class="content1_1">
            Transform Your Business With Adaptive AI
          </div>
          <div class="img_container">
            <img src="../assets/Group-2187.svg" />
          </div>
          <div class="content1_2">
            <p>Ensure AI models perform without degradation with Vanti’s proprietary, real-time, adaptive AI technology that eliminates drift and enables ongoing  analytics, decision support, and close-loop optimization.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 第三部分 -->
    <section class="sec3">
      <div class="container3">
        <div class="content1">
          Data Scientist-in-a-Box<br>No AI/ML Expertise Needed
        </div>
        <div class="content2">
          <video class="content2_video" controls autoplay muted>
            <source src="../assets/IJbsmlQ4ws5wdwv4.mp4" type="video/mp4">
          </video>
        </div>
        <div class="content3">
          <div class="content3_shadow">
          </div>
        </div>
      </div>
    </section>
    <!-- 第四部分 -->
    <section class="sec4">
      <div class="container4">
        <div class="content">
          Built-In Manufacturing Optimization Applications Accelerating Outcomes Within Days, Not Months
        </div>
      </div>
    </section>
    <!-- 第五部分 -->
    <section class="sec5">
      <div class="container5">
        <div class="container5_1">
          <div class="content">
            <div class="content1">
              <div class="content1_1">
                <img class="content1_img" src="../assets/Group-5103.svg" />
              </div>
              <div class="content1_2">
                Early Fault Prediction
              </div>
              <div class="content1_3">
                Predict Faulty units early in the process to cut fail rates by<span style="color: #d4145a; font-weight: bold;"> 50%</span> 
              </div>
            </div>
          </div>
          <div class="content1_4">
            <div class="button">
              <div class="text_button">See the full use case</div>
            </div>
          </div>
        </div>
        <div class="container5_1">
          <div class="content">
            <div class="content1">
              <div class="content1_1">
                <img class="content1_img" src="../assets/Group-5105.svg" />
              </div>
              <div class="content1_2">
                Visual Anomaly Detection
              </div>
              <div class="content1_3">
                Visually identify defects to replace manual effort & increase quality
              </div>
            </div>
          </div>
          <div class="content1_4">
            <div class="button">
              <div class="text_button">See the full use case</div>
            </div>
          </div>
        </div>
        <div class="container5_1">
          <div class="content" style="border: none;">
            <div class="content1">
              <div class="content1_1">
                <img class="content1_img" src="../assets/Group-5104.svg" />
              </div>
              <div class="content1_2">
                Process Optimization
              </div>
              <div class="content1_3">
                Tune processes to improve efficiency by reducing cycle times by <span style="color: #d4145a; font-weight: bold;">10%</span> 
              </div>
            </div>
          </div>
          <div class="content1_4">
            <span class="button">
              <span class="text_button">See the full use case</span>
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- 第六部分 -->
    <section class="sec6">
      <div class="container6">
        <div class="content">
          <el-carousel indicator-position="outside" arrow="always">
            <el-carousel-item v-for="item in items" :key="item.name">
              <div class="main_content">
                <div class="content_img"><img :src="item.src" /></div>
                <div class="content_name">{{ item.name }}</div>
                <div class="content_intro">{{ item.intro }}</div>
                <div class="content_detail">{{ item.detail }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
    <!-- 第七部分 -->
    <section class="sec7">
      <div class="container7">
        <div class="container7_1">
          <div class="content">
            Latest from our blog
          </div>
        </div>
        <div class="container7_2">
          <div class="content_container">
            <div class="content1">
              <a href="www.baidu.com"><div class="bg"><img src="../assets/OIP-C.jpeg" width="100%" /></div></a>
            </div>
            <div class="content2">
              Boosting Manufacturing Availability with AI-Powered No-Code Platform
            </div>
            <div class="content3">
              Read More
            </div>
          </div>
          <div class="content_container">
            <div class="content1">
              <a href="www.baidu.com"><div class="bg"><img src="../assets/banner.jpg" width="100%" /></div></a>
            </div>
            <div class="content2">
              Manufacturing Performance Management: Why Is It So Important?
            </div>
            <div class="content3">
              Read More
            </div>
          </div>
          <div class="content_container">
            <div class="content1">
              <a href="www.baidu.com"><div class="bg"><img src="../assets/banner.jpg" width="100%" /></div></a>
            </div>
            <div class="content2">
              How to Choose Your Production Optimization Software: The Complete Guide
            </div>
            <div class="content3">
              Read More
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 第八部分 -->
    <section class="sec8">
      <div class="container8">
        <div class="content1">
          Improve Your Manufacturing Throughput & Quality
        </div>
        <div class="content2_container">
            <span class="content2">Get a FREE Discovery Session With a Vanti Expert</span>
        </div>
      </div>
    </section>
    <!-- 页脚部分 -->
    <section class="footer">
      <Footer />
    </section>
  </div>
</template>

<style scoped>
/* 导航栏 */
  .topBar {
    position: absolute;
    top: 10%;
    right: 0;
    left: 0;
    z-index: 5;
  }
/* 第一部分 */
  .sec1 {
    /* height:500px; */
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../assets/banner.jpg);
    padding: 11% 9.3% 12% 14%;
    background-color: white;
    position:relative;
  }
  .bg {
    background-color: #000000;
    opacity: 0.65;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  .container1 {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    margin-top: 10px;
  }
  .container1 .left {
    width: 77.52%;
    position: relative;
    min-height: 1px;
    display: flex
  }
  .container1 .left_container {
    display: flex;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .container1 .content1 {
    margin-bottom: 20px;
    width: 100%;
    color: #fff;
    font-family: "Poppins";
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.5em;
  }
  .container1 .content2 {
    margin-bottom: 20px;
    width: 100%;
    color: #fff;
    font-family: "Poppins";
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.2em;
  }
  .container1 .content3 {
  border: 1px solid #D4145A;
  border-radius: 1.5rem;
  padding: 3px 15px;
  background-color: #D4145A;
  margin: 5% 0% 0% 0%;
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 600;
}
.container1 .content3 .text_button {
  color:#fff
}
.container1 .content3:hover {
  background-color: #fff;
}
.container1 .content3:hover .text_button{
  color: #D4145A;
}
.container1 .right {
  width: 22.425%;
}
/* 第二部分 */
.sec2{
  margin-top: 8%;
  margin-bottom: 0%;
  padding: 0% 6% 0% 12%;

}
.container2 {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.container2 .img_container {
  left: -2.8vw;
  top: -1.7vw;
  position: absolute;
  z-index: -1;
}
.container2 img {
  width: 5.5vw;
}
.container2 .content1 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0% 12% 0% 0%;
  position:relative;
}
.container2 .content1_1 {
  color: #182132;
  font-family: "Poppins";
  font-size: 1.8vw;
  font-weight: 500;
  line-height: 1.2em;
}
.container2 .content1_2 {
  padding: 5% 0% 0% 0%;
  font-family: "Montserrat";
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 1.3em;
}
/* 第三部分 */
.sec3 {
  margin-top: 8%;
  margin-bottom: 4%;
  padding: 0% 15%;
}
.container3 {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  align-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
}
.container3 .content1 {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  color: #1B1464;
  font-family: "Poppins";
  font-size: 3.13vw;
  font-weight: 900;
  line-height: 1.2em;
}
.container3 .content2 {
  padding: 2% 8% 0% 8%;
}
.container3 .content2_video {
  height: 100%;
  width: 100%;
  border: none;
  background-color: #fff;
}
.container3 .content3 {
  width: 100%;
  padding: 0 8%;
  z-index: -1;
}
.container3 .content3_shadow {
  width: 100%;
  height: 100px;
  margin-top: -110px;
  background: linear-gradient(to top, black, white);
  opacity: 0.1;
}
/* 第四部分 */
.sec4 {
  margin-top: 8%;
  margin-bottom: 0%;
  padding: 0% 20%;
}
.container4 {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  width: 100%;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.container4 .content {
  text-align: center;
  padding: 0;
  margin: 0;
  color: #1B1464;
  font-family: "Poppins";
  font-size: 3.13vw;
  font-weight: 900;
  line-height: 1.2em;
}
/* 第五部分 */
.sec5 {
  margin-top: 5%;
  margin-bottom: 0%;
  padding: 0% 18.3% 0% 18.3%;
}
.container5 {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0%;
  margin-bottom: 0%;
  padding: 0% 6% 0% 6%;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
}
.container5 .container5_1 {
  width: 31.584%;
  position: relative;
}
.container5 .content {
  width: 100%;
  border-style: solid;
  border-width: 0px 1px 0px 0px;
  padding: 0% 5% 30% 15%;
}
.container5 .content1 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.container5 .content1_1 {
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
}
.container5 .content1_img {
  width: 3.8vw;
  vertical-align: middle;
  height: 3.8vw;
  object-fit: contain;
}
.container5 .content1_2 {
  color: #1B1464;
  font-family: "Montserrat";
  font-size: 1.5vw;
  font-weight: 600;
  line-height: 1.2em;
  margin-bottom: 20px
}
.container5 .content1_3 {
  color: #1B1464;
  font-family: "Montserrat";
  font-size: 1.35vw;
  font-weight: 400;
  line-height: 1.2em;
  margin-bottom: 20px
}
.container5 .content1_4 {
  position: absolute;
  left: 15%;
  bottom: 0;
  border: 1px solid #1B1464;
  border-radius: 20em;
  background-color: #F8F8F8;
  box-shadow: 0px 3px 6px 0px rgb(27 20 100 / 16%);
  padding: 0.75vw 1.7vw;
}
.container5 .button {
  display: flex;
  justify-content: center;
}
.container5 .text_button {
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  flex-grow: 1;
  order: 10;
  color:#1B1464
}
.container5 .content1_4:hover {
  background-color: #1B1464;
  cursor: pointer;
}
.container5 .content1_4:hover .text_button{
  color: #F8F8F8;
}
/* 第六部分 */
.sec6 {
  padding: 10% 12.5% 1% 12.5%;
}
.container6 {
  width:100%;
}
.container6 .content {
  width:100%;
  padding: 4% 5% 0% 5%;
  background-color: #FFFFFF;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #267370;
  box-shadow: 0px 3px 6px 0px rgb(24 33 50 / 16%);
}
.container6 .main_content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 17%;
}
.container6 .content_img {
  flex-shrink: 0;
  cursor: grab;
}
.container6 img {
  width: 50px;
  height: 50px;
  border-radius: 999px;
}
.container6 .content_name {
  font-family: "Poppins";
  font-size: 1.6vw;
  font-weight: 600;
  font-style: normal;
  cursor: grab;
}
.container6 .content_intro {
  color: #182132;
  font-family: "Poppins", Sans-serif;
  font-size: 0.75vw;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 0.12vw;
  cursor: grab;
}
.container6 .content_detail {
  font-family: "Montserrat";
  font-size: 1.05vw;
  font-weight: 400;
  font-style: normal;
  line-height: 1.6em;
  margin: 3% 0 0 0;
  cursor: grab;
}
:deep(.el-carousel__arrow) {
  background-color: transparent;
  top: 40%;
}
:deep(.el-carousel__arrow:hover) {
  background-color: transparent;
}
:deep(.el-icon) {
  color:black;
}
:deep(.el-icon svg) {
  width:2em;
  height:2em;
}
:deep(.el-carousel) {
  --el-carousel-indicator-width: 7px;
  --el-carousel-indicator-height: 7px;
  --el-carousel-arrow-font-size: 30px;
}
:deep(.el-carousel__button) {
  border-radius: 7px;
}
:deep(.el-carousel__indicators--outside button) {
  background-color: #000000;
}
/* 第七部分 */
.sec7 {
  margin-top: 0%;
  margin-bottom: 0%;
  padding: 8% 20% 0% 20%;
  z-index: 10;
}
.container7 {
  margin: 0% 0% -30% 0%;
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  width:100%;
}
.container7_1 {
  margin-bottom: 20px;
  width: 100%;
}
.container7_1 .content {
  text-align: center;
  color: #182132;
  font-family: "Poppins";
  font-size: 2.1vw;
  font-weight: 700;
}
.container7_2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5% 0% 0% 0%;
}
.container7_2 .content_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  background-color: #fff;
}
.container7_2 .content1 {
  width: 100%;
  margin-bottom: 20px;
}
.container7_2 .bg {
  position: relative;
  background-color: transparent;
  opacity: 1;
}
.container7_2 .content2 {
  color: #182132;
  font-family: "Poppins",;
  font-size: 1.05vw;
  font-weight: 300;
  line-height: 1.5em;
  margin-bottom: 20px;
  padding: 0 30px;
  cursor: pointer;
}
.container7_2 .content3 {
  color: #182132;
  font-family: "Poppins",;
  font-size: 1.05vw;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 20px;
  padding: 0 30px;
  cursor: pointer;
}
/* 第八部分 */
.sec8 {
  background-color: #202C36;
  margin-top: 0%;
  margin-bottom: 0%;
  padding: 23% 15% 0% 15%;
}
.container8 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: auto;
  padding: 0% 0% 8% 0%
}
.container8 .content1 {
  margin: 20px 0;
  text-align: center;
  width: 100%;
  color: #000;
  font-family: "Poppins";
  font-size: 3.7vw;
  font-weight: 600;
  line-height: 1.2em;
}
.container8 .content2_container {
  width: 100%;
  text-align: center;
  padding-top: 0.5%;
}
.container8 .content2 {
  display: inline-block;
  font-family: "Poppins";
  font-size: 1.6vw;
  font-weight: 800;
  color:#D4145A;
  border: 1px solid #D4145A;
  border-radius: 2rem;
  padding: 15px 35px;
  background-color: #fff;
  text-align: center;
}
.container8 .content2:hover {
  background-color: #D4145A;
  color: #fff;
  cursor: pointer;
}
/* 页脚部分 */
.footer {
  background-color: #202C36;
  padding: 0% 5% 2% 5%;
}
</style>