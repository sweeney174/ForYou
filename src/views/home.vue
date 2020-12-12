<template>
  <div>
    <div class="homeheader">
      <div @click="showPopup" :class="{ newlg: show }">
        <div class="newnew">
          <van-icon name="edit" size="40" color="bgcolor" />
          <p :class="{ newp: show }">新建</p>
        </div>
        <div id="newbtn">
          <button :class="{ choosebtn: show }" hidden @click="newlogin">模板创作</button>
          <button :class="{ choosebtn: show }" hidden @click="undo">自定义创作</button>
          <button :class="{ choosebtn: show }" hidden @click="undo">草稿箱</button>
        </div>
      </div>
      <van-icon name="gift-o" size="40" color="#4b5c6b" />
      
      <div @click="myinfo">
        <van-icon name="user-circle-o" size="40" color="#4b5c6b" />
        <p>我的</p>
      </div>
      
    </div>
    
    <!-- <div id="newbtn">
      <button :class="{choosebtn:show}" hidden>模板创作</button>
      <button :class="{choosebtn:show}" hidden>自定义创作</button>
      <button :class="{choosebtn:show}" hidden>草稿箱</button>
    </div> -->
    <van-icon name="point-gift" class="giftstart" size="200" color="#4b5c6b" />
    <van-popup v-model="show" position="left" :style="{ width: '50%', height: '100%' }" />
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Toast } from "vant";
import { Popup } from "vant";

Vue.use(Popup);

Vue.use(Icon);
export default {
  name: "home",
  data() {
    return {
      show: false,
      bgcolor: "#4b5c6b",
      username: sessionStorage.getItem('username')
    };
  },

  methods: {
    newlogin() {
      this.$router.push("/login");
    },
    showPopup() {
      this.show = true;
    },
    undo(){
      Toast('开发中，敬请期待~')
    },
    myinfo() {
      Toast('Hi,'+sessionStorage.getItem('username'))
    }
  },
};
</script>

<style scoped>
h1{
  margin-left: 50%;
  transform:translateX(-50%)
}
.giftstart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.homeheader {
  height: 15vh;
  margin-top: 5vh;
  display: flex;
  padding: 0 10%;
  justify-content: space-between;
}
p {
  margin-top: 0;
  text-align: center;
  font-weight: 600;
  width: 40px;
}
.newlg {
  z-index: 99999;
  color: darkviolet;
  width: 40px;
  margin-right: 0;
  /* width: 40px;
  margin-right: 0; */
}
#newbtn {
  margin-top: 100px;
}
.choosebtn {
  display: block;
  width: 92px;
  /* padding: 0 2%; */
  color: black;
  margin-bottom: 10px;
  text-align: start;
  background: transparent;
  border: 0;
  outline: 0;
  z-index: 9999;
  cursor: pointer;
}
</style>
