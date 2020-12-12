<template>
  <div>
    <div
      name="top"
      class="backround"
      :class="{
        bg1: page === 1,
        bg2: page === 2,
        bg3: page === 3,
        bg4: page === 4,
        bg5: page === 5,
      }"
    >
      <button class="btn" id="last" @click="prev" v-if="page !== 1">
        <van-icon name="arrow-left" size="40" />
      </button>
      <span class="head">模板创作</span>
      <button class="btn" id="next" @click="next">
        <van-icon name="arrow" size="40" />
      </button>
    </div>
    <editor v-if="page == 1" @getText="getText" />
    <choosegift v-if="page == 2" />
    <uploadpicture v-if="page == 4" />
    <uploadmusic v-if="page == 3" />
    <choosepackage v-if="page == 5" />
    <div class="pics">
      <img src="../assets/wri.png" alt="" />
      <img src="../assets/gif.png" alt="" />
      <img src="../assets/mus.png" alt="" />
      <img src="../assets/pic.png" alt="" />
      <img src="../assets/pac.png" alt="" />
    </div>
    <div class="containerbtn">
      <div class="progress-container">
        <div
          class="progress"
          id="progress"
          :style="{ width: ((page - 1) / 4) * 100 + '%' }"
        ></div>
        <div class="circle active"></div>
        <div class="circle" :class="{ active: page >= 2 }"></div>
        <div class="circle" :class="{ active: page >= 3 }"></div>
        <div class="circle" :class="{ active: page >= 4 }"></div>
        <div class="circle" :class="{ active: page >= 5 }"></div>
        <!-- <div class="circle" :class="{active:page>=6}">6</div> -->
      </div>
    </div>

    <!-- <bottomchoose /> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
import axios from "axios";
import editor from "../components/editor.vue";
import uploadmusic from "../components/uploadmusic.vue";
// import bottomchoose from "../components/bottomchoose.vue";
import uploadpicture from "../components/uploadpicture.vue";
import choosegift from "../components/choosegift.vue";
import choosepackage from "../components/choosepackage.vue";
export default {
  name: "editors",
  data() {
    return {
      page: 1,
      bgpic: "url(../components/editor.png)",
      content: "下一步",
      text: "",
    };
  },
  components: {
    editor,
    uploadmusic,
    // bottomchoose,
    uploadpicture,
    choosegift,
    choosepackage,
  },
  mounted() {
    axios
      .post("/api/allId", {
        username: "admin",
      })
      .then((res) => {
        sessionStorage.setItem("id", res.data.number + 1);
        sessionStorage.setItem("photo_sum", 0);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getText(msg) {
      this.text = msg;
    },
    prev() {
      this.page--;
      if (this.page == 0) {
        this.page = 1;
      } else if (this.page != 5) {
        this.content = "下一步";
      }
      // update();
    },
    next() {
      if (this.page == 5) {
        sessionStorage.setItem("text", this.text);
        this.$router.push("/endstyle");
        return;
      }
      this.page++;
      if (this.page >= 5) {
        this.content = "完成";
        this.page = 5;
      }
      // update();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Muli&display=swap");

:root {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
}
body {
  font-family: "Microsoft Yahei";
}
.bg1 {
  background: url(../components/editor.png) no-repeat;
}
.bg2 {
  background: url(../components/gift.png) no-repeat;
}
.bg3 {
  background: url(../components/music.png) no-repeat;
}
.bg4 {
  background: url(../components/picture.png) no-repeat;
}
.bg5 {
  background: url(../components/package.png) no-repeat;
}

.pics {
  width: 340px;
  position: absolute;
  bottom: 25vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.backround {
  height: 100vh;
  width: 100vw;
  /* background-color: yellow; */
}
/* .backround {
  position: absolute;
  top: 0;
  width: 100%;
  /* background: white; */
/* border-bottom: black dotted 1px; */
/* } */
#last {
  position: absolute;
  top: 5vh;
  left: 5vw;
  background-color: transparent;
}

#next {
  position: absolute;
  top: 5vh;
  right: 5vw;
  background-color: transparent;
}

.btn {
  color: white;
  outline: 0;
  border: 0;
}
.head {
  position: absolute;
  top: 6vh;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  color: white;
}

/*  */

.containerbtn {
  text-align: center;
  position: absolute;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
}

.progress-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  width: 324px;
  /* margin: 0 auto; */
}

.progress-container::before {
  content: "";
  position: absolute;
  background-color: var(--line-border-empty);
  top: 50%;
  left: 0;
  height: 4px;
  width: 100%;
  z-index: -1;
  transform: translateY(-50%);
}

.progress {
  position: absolute;
  background-color: #92548d;
  top: 50%;
  left: 0;
  height: 4px;
  width: 0%;
  z-index: -1;
  transform: translateY(-50%);
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #999;
  width: 25px;
  height: 25px;
  border: 3px solid var(--line-border-empty);
  transition: 0.4s ease;
}

.circle.active {
  border: 10px;
  border-color: var(--line-border-fill);
  background-color: #eeb0e9;
}
</style>
