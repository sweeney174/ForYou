<template>
  <div
    class="box"
    :style="{ backgroundImage: 'url(' + this.background_link + ')' }"
  >
    <div class="music" v-show="musicShow == true">
      <audio :src="this.music_link" autoplay controls></audio>
    </div>
    <div class="this" v-show="titleShow">
      <h1>This is For You!</h1>
    </div>
    <div class="text" v-show="textShow == true">
      <p>{{ text }}</p>
    </div>
    <div
      class="gift_box"
      v-show="giftBoxShow == true"
      @click="
        () => {
          this.giftBoxShow = false;
          this.textShow = true;
          this.giftShow = true;
        }
      "
    >
      <img :src="this.gift_box_link" alt="" />
    </div>

    <div
      class="gift"
      v-show="giftShow == true"
      @click="
        () => {
          this.giftShow = false;
          this.textShow = false;
          this.picturesShow = true;
          this.titleShow = false;
          this.loginBtnShow = true;
        }
      "
    >
      <img :src="this.gift_link" alt="" />
    </div>
    <!-- <p>{{id}}</p> -->
    <div class="pictures" v-show="picturesShow == true">
      <img
        :src="
          'https://foryou-store.oss-cn-shanghai.aliyuncs.com/templates/' +
          this.id +
          '/photos/1.jpg'
        "
        alt=""
      />
      <img
        :src="
          'https://foryou-store.oss-cn-shanghai.aliyuncs.com/templates/' +
          this.id +
          '/photos/2.jpg'
        "
        alt=""
      />
      <img
        :src="
          'https://foryou-store.oss-cn-shanghai.aliyuncs.com/templates/' +
          this.id +
          '/photos/3.jpg'
        "
        alt=""
      />
      <!-- <div v-for="item in pictures_link" :key="item.id">
        //不会写
          <img :src="item" alt="">{{item}}
        
      </div> -->
    </div>
    <div  v-show="loginBtnShow">
      <button class="login" @click="()=>{this.$router.push('/')}">我也要送礼物</button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { getQueryVariable } from "@/assets/getQueryVariable.js";
export default {
  data() {
    return {
      share_code: "",
      text: "",
      photo_sum: 1,
      background_link: "",
      gift_box_link: "",
      music_link: "",
      gift_link: "",
      customized: 1,
      id: 999,
      pictures_link: [],
      textShow: false,
      giftBoxShow: true,
      musicShow: true,
      giftShow: false,
      picturesShow: false,
      titleShow: true,
      loginBtnShow: false,
    };
  },
  beforeMount() {
    this.share_code = getQueryVariable();
    // console.log(GetRequest())
    // this.share_code=getQueryVariable('share_code')
    Axios.post("/api/user/download", {
      share_code: this.share_code,
    })
      .then((res) => {
        if (res.data.status !== 1) {
          alert(res.data.msg);
        }
        this.text = res.data.data.text;
        this.photo_sum = res.data.data.photo_sum;
        this.background_link = res.data.data.background_link;
        this.gift_box_link = res.data.data.gift_box_link;
        this.music_link = res.data.data.music_link;
        this.gift_link = res.data.data.gift_link;
        this.customized = res.data.data.customized;
        this.id = res.data.data.id;

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //   for (let i=1;i<=this.photo_sum;i++){
    //   this.pictures_link.push('https://foryou-store.oss-cn-shanghai.aliyuncs.com/templates/'+ String(this.id)+'/photos/'+String(i)+'.jpg')
    // }
  },
  methods: {
    // giftBoxClick(){
    //   this.giftBoxShow=false;
    // }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  /* min-width: 1000px; */

  z-index: -10;

  zoom: 1;

  background-color: #fff;

  background-repeat: no-repeat;

  background-size: cover;

  -webkit-background-size: cover;

  -o-background-size: cover;

  background-position: center 0;
}
.music {
  margin-left: 10%;
  opacity: 0.4;
}
.this {
  position: relative;
  top: 20%;
  text-align: center;
}
.gift_box {
  position: relative;
  left: 30%;
  top: 30%;
  zoom: 1.5;
  /* transform: translateX(-50%); */
}
.gift {
  position: relative;
  z-index: -1;
  top: 23%;
  left: 37%;
}
.text {
  margin: 10%;
  position: relative;
  top: 25%;
  font-size: 18px;
}
.pictures {
  position: relative;
  zoom: 0.1;
  top: 30%;
  left: 20%;
  /* display: flex; */
}
.login {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  width: 200px;
  height: 50px;
  background: linear-gradient(90deg, skyblue, pink, yellow, skyblue);
  background-size: 200%;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
}
.login::after {
  content: "";
  position: absolute;
  left: -5px;
  top: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(90deg, skyblue, pink, yellow, skyblue);
  background-size: 200%;
  border-radius: 30px;
  filter: blur(25px);
  z-index: -1;
}
.login:start {
  animation: sun 4s infinite;
}
.login:start::after {
  animation: sun 4s infinite;
}
@keyframes sun {
  100% {
    background-position: -200% 0;
  }
}
</style>