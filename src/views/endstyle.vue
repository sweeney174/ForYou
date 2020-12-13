<template>
  <div class="bgimg">
    <img src="../assets/share.png" alt="" id="share" @click="shareview" />
    <h3 class="tp">礼物传送门：</h3>
    <h3 class="tpurl">{{receiveUrl}}</h3>
    <button class="endstylebtn" @click="shareview">将它分享给Ta吧!</button>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { ShareSheet } from "vant";
import Axios from "axios";
Axios.defaults.headers.post["Authorization"] =
  "Bearer" + " " + sessionStorage.getItem("userToken");
Vue.use(ShareSheet);

export default {
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      receiveUrl:''+sessionStorage.getItem('share_code')
    };
  },

  beforeMount() {
    console.log(parseInt(sessionStorage.getItem('id')))
    Axios.post("/api/user/upload",{
      username: sessionStorage.getItem('username'),
      text:sessionStorage.getItem('text'),
      photo_sum:parseInt(sessionStorage.getItem('photo_sum')),
      background_link:sessionStorage.getItem('background_link'),
      gift_box_link:sessionStorage.getItem('gift_box_link'),
      music_link:sessionStorage.getItem('music_link'), 
      gift_link:sessionStorage.getItem('gift_link'),
      customized:parseInt(sessionStorage.getItem('customized')),
      id:parseInt(sessionStorage.getItem('id')),
    }).then(res=>{
      console.log(res)
      sessionStorage.setItem('share_code',res.data.share_code)
      sessionStorage.setItem('share_code',encodeURIComponent(res.data.share_code)) 
      // sessionStorage.setItem('share_code',res.data.share_code+encodeURIComponent(name))
      // sessionStorage.setItem('share_code',encodeURI(res.data.share_code))
      this.receiveUrl='https://a1.onesnowwarrior.cn/show?share_code='+sessionStorage.getItem('share_code')
      console.log(sessionStorage.getItem('share_code'))
    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {
    shareview() {
      this.showShare = true;
    },
  },
};
</script>

<style>
.tp{
  display: block;
  position: absolute;
  top: 65%;
  left: 50%;
  font-size: 24px;
  color: white;
  transform: translate(-50%, -50%);
}
.tpurl{
  display: block;
  position: absolute;
  top: 75%;
  left: 50%;
  font-size: 15px;
  color: white;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 10vh;
  word-wrap: break-word;
  word-break: break-all;
}
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
  background-color: white;
}
.bgimg {
  height: 100vh;
  width: 100vw;
  background: url(../assets/endpic.png) no-repeat;
}
#share {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.endstylebtn {
  display: block;
  position: absolute;
  top: 80%;
  left: 50%;
  font-size: 24px;
  color: white;
  transform: translate(-50%, -50%);
  border: 0;
  outline: 0;
  background-color: transparent;
}
</style>
