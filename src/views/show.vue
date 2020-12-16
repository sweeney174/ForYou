<template>
  <div class="box">
    <div
      class="page1 animate__animated animate__fadeIn"
      :style="{ backgroundColor: ispackage ? 'F0E2DB' : '#EFA5B2' }"
      v-if="page === 1"
    >
      <!-- <div class="page1header">
        <h1>This is For You!</h1>
      </div> -->
      <!-- @click="() => {this.giftBoxShow = false;this.textShow = true;this.giftShow = true;}" -->
      <div class="giftpackage packageshake" @click="changepackage" v-if="ispackage">
        <img :src="this.gift_box_link" alt="" />
      </div>
      <div
        class="giftheader animate__animated animate__fadeIn"
        v-if="!ispackage"
        @click="addpage"
      >
        <h1>This is For You!</h1>
        <h1>check it out</h1>
        <i id="packageicon">
          <svg
            t="1607245256615"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11803"
            width="20"
            height="20"
          >
            <path
              d="M455.68 404.032l91.264 529.152s67.456-69.44 123.136-117.888L792.512 979.2c4.928 6.656 15.68 7.104 23.872 1.088l52.288-38.208c8.256-6.016 10.944-16.32 5.952-22.976L755.52 759.68c62.208-25.088 164.672-53.632 164.672-53.632L455.68 404.032zM308.352 648.384L172.48 747.712c-20.544 15.04-24.256 43.968-8 65.408 16.256 21.376 46.272 27.008 66.752 12.032l135.872-99.328c20.992-15.36 24.512-45.504 8.256-66.88-16.192-21.44-46.016-25.92-67.008-10.56z m641.344-409.408C933.44 217.6 904.064 212.8 882.624 228.48l-134.912 98.688c-21.44 15.68-25.152 44.672-8.896 66.048 16.256 21.376 46.272 27.008 67.712 11.328l134.912-98.688c21.44-15.68 24.512-45.504 8.256-66.88z m-630.4-102.144c-15.936-20.928-45.248-25.728-66.752-10.048-20.096 14.72-24.256 43.968-8.32 64.896L349.76 330.496c15.936 20.992 45.696 25.408 65.792 10.688 21.44-15.68 25.216-44.608 9.28-65.6L319.296 136.832zM585.792 301.76c26.176 4.224 50.24-13.376 53.632-39.232L660.608 94.72c3.392-25.792-14.976-49.984-41.536-54.656-26.176-4.224-50.24 13.376-53.632 39.168l-21.248 167.872c-3.264 25.856 15.104 49.984 41.6 54.656zM329.728 489.024c2.56-25.92-15.808-50.048-41.536-54.656L118.144 406.4c-27.072-3.584-50.688 13.696-53.632 39.232-3.904 26.944 14.464 51.072 41.536 54.656l170.048 27.968c25.728 4.48 49.408-12.8 53.632-39.232z"
              p-id="11804"
              fill="#ffffff"
            ></path>
          </svg>
        </i>
      </div>
    </div>
    <div class="showgift" v-if="page === 2">
      <div class="music">
        <audio :src="this.music_link" autoplay controls></audio>
      </div>
      <div class="page2 animate__animated animate__fadeIn" v-if="page === 2">
        <img :src="gift_link" alt="" width="25%" id="giftgift" />
        <div class="slider">
          <div class="slide" v-for="index in photo_sum" :key="index">
            <img
              class="photos"
              :src="
                'https://foryou-store.oss-cn-shanghai.aliyuncs.com/templates/' +
                id +
                '/photos/' +
                index +
                '.jpg'
              "
            />
          </div>
        </div>

        <!-- <div class="slider">
          <div class="slide">
            <img src="../assets/pic.png" style="object-fit: contain" />
            <p>JHONSON</p>
          </div>
          <div class="slide">
            <img src="../assets/share.png" />
            <p>BEBONAD</p>
          </div>
          <div class="slide">
            <img src="../assets/share.png" />
            <p>KARAIOKE</p>
          </div>
          <div class="slide">
            <img src="../assets/wri.png" />
            <p>ROHANDSON</p>
          </div>
        </div> -->
        <button
          type="button"
          aria-label="open a form"
          class="envelop envy"
          id="envelop"
          @click="openenvelop"
          :class="{
            'open-envelop': isopen,
            'scale-envelop': isopen,
            left: isopenn,
            'close-form': isopenn,
          }"
          tabindex=""
        >
          <form
            id="form"
            :style="{ backgroundImage: 'url(' + this.background_link + ')' }"
          >
            <input
              type="button"
              id="closeBttn"
              value="x"
              class="formEl"
              aria-label="close a form"
              @click="closeenvlop"
            />
            <p id="textshow">{{ text }}</p>
          </form>
        </button>
        <div id="message"></div>
        <div>
          <button
            class="login"
            @click="
              () => {
                this.$router.push('/');
              }
            "
          >
            我也要送礼物
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div
    class="box animate__animated animate__fadeIn"
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
    </div> -->
  <!-- <p>{{id}}</p> -->

  <!-- <div class="pictures" v-show="picturesShow == true">
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
      /> -->

  <!-- <div v-for="item in pictures_link" :key="item.id">
        //不会写
          <img :src="item" alt="">{{item}}
        
      </div> -->
  <!-- </div>
    <div  v-show="loginBtnShow">
      <button class="login" @click="()=>{this.$router.push('/')}">我也要送礼物</button>
    </div>
  </div> -->
</template>
<script>
const formEls = document.getElementsByClassName("formEl");
import "../assets/elasitc.js";
import Axios from "axios";
import { getQueryVariable } from "@/assets/getQueryVariable.js";
import { onWndLoad } from "@/assets/elasitc.js";

// window.addEventListener('load', onWndLoad, false);
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
      id: 0,
      pictures_link: [],
      page: 1,
      ispackage: true,
      isopen: false,
      justopened: true,
      isopenn: false,
    };
  },
  beforeMount() {
    this.share_code = getQueryVariable();
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
  },
  methods: {
    openenvelop() {
      this.isopen = true;
    },
    closeenvlop() {
      this.isopenn = true;
    },
    setTabIndex(arg) {
      for (let formEl of formEls) {
        formEl.setAttribute("tabindex", arg);
      }
    },
    changepackage() {
      this.ispackage = false;
    },
    addpage() {
      this.page++;
    },
  },
  updated(){
    console.log(123);
    onWndLoad();
  },
};

// window.addEventListener('load', onWndLoad, false);
</script>

<style>
@import url("../assets/showgiftstyle.css");
@import url("https://fonts.googleapis.com/css?family=Raleway:200");
@import url("../assets/style.css");
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
.page1 {
  width: 100%;
  height: 100%;
  /* background-color: #F0E2DB; */
  /* display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; */
}
.giftpackage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#giftgift {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.giftheader {
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 10px;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
}
.packageshake {
  transform-origin: 0% 0%;
  cursor: pointer;
  animation: packageshake 0.5s infinite;
}
#packageicon {
  position: absolute;
  top: 54%;
  left: 85%;
}

@keyframes packageshake {
  0% {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  25% {
    transform: rotate(1deg) translate(-50%, -50%);
  }

  50% {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  70% {
    transform: rotate(-1deg) translate(-50%, -50%);
  }

  100% {
    transform: rotate(0deg) translate(-50%, -50%);
  }
}
@keyframes box-down {
  0% {
    top: 0px;
    opacity: 1;
  }

  100% {
    top: 50px;
    opacity: 0;
  }
}
.showgift {
  width: 100%;
  height: 100%;
  background-color: rgb(253, 234, 198);
}
.music {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.3;
}
.this {
  position: relative;
  top: 20%;
  text-align: center;
}
/* .gift_box {
  position: relative;
  left: 30%;
  top: 30%;
  zoom: 1.5;
  /* transform: translateX(-50%); */
/* } */
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
  width: 150px;
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
  /* font-size: 10px; */
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
