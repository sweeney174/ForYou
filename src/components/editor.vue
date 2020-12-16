<template>
  <div>
    <!-- <h2 class="writeheader">先来，写封信吧</h2> -->
    <div class="editors" id="jkl">
      <textarea
      @change="sendText"
        name=""
        id="writearea"
        v-model="message"
        cols="31"
        rows="12"
        placeholder="很高兴看到你的h5成功上线，为了这次成功的经验，我为你准备了一份特殊的礼物！希望你能够喜欢。"
      ></textarea>
    </div>
    <div id="ft">
      <div class="choosemodel model1" @click="style1" ></div>
      <div class="choosemodel model2" @click="style2" ></div>
      <div class="choosemodel model3" @click="style3" ></div>
      <!-- <div class="choosemodel head-img" id="my-img"> -->
        <label for="file" class="choosemodel head-img" id="my-img"><img src="/images/model4.png" alt="" style="overflow:hidden;height:100%;"></label>
        <!-- <input type="file" id="img-upload"  accept="image/png" multiple="multiple"  onchange="changeFile()"/> -->
      <!-- </div> -->
    </div>
    <input type="file" id="img-upload" multiple="multiple" @change="changeFile" accept="image/*"/>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Toast } from "vant";
import { putBackground } from "../assets/client.js";
// import { Uploader } from "vant";

// Vue.use(Uploader);

Vue.use(Button);

export default {
  name: "editor",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendText(){
      this.$emit('getText',this.message)
    },
    store() {
      alert("已保存");
    },
    style1() {
      this.message =
        "本次列车是通往2021的列车 严禁携带熬夜、颓废、消沉等危险品上车，带上你热诚、活力、勇猛鲜活的心，上车吧。惟愿今年你更多勇气，更多高光时刻，更多喜极而泣。有人懂你的奇奇怪怪可可爱爱，有人珍惜你心里的柔软。希望xxx永远相信：远方那颗星星刹住车，只为照亮你。 ";
      Toast('信纸背景图片改变咯~')
      sessionStorage.setItem('background_link','https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/background/model1.png');
      // document.getElementById("jkl").style.background-"url(1.png) fixed center no-repeat;"
      // console.log(document.querySelector(".editors").getAttribute("background-image"))
    },

    style2() {
      this.message =
        "初雪和热咖啡，麋鹿和圣诞树，新年的钟声和倒数计时，所有糟糕的都是经历，所有的美好都会在最后相遇。要更加努力的热爱生活，要走好多好多路，见许多许多人，品尝各种各样的美食，和喜欢的人站在一起，和热爱的一切站在一起。希望圣诞老爷爷呀，一定要把我最宝贝最宝贝的xxx，送到我梦里来。";
        Toast('信纸背景图片改变咯~')
        sessionStorage.setItem('background_link','https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/background/model2.png');
    },
    style3() {
      this.message =
        "杏子黄时的雨，皓婉皎月旁的光晕，初冬第一片六角形的雪花，樱桃上聚散的水珠，抬头就能看到的璀璨星河，家里茉莉花开时的香气，咬第一口脆桃时的声响，还有留在手上的彩虹。呐，从九色鹿的眼睛里看到的山峦河川，都不及牵着你的手走过余生的四季。xxx，与世界交手的xx年，兴趣盎然，乐此不疲。";
        Toast('信纸背景图片改变咯~')
        sessionStorage.setItem('background_link','https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/background/model3.png');
    },
    changeFile(e) {
      let file = e.target.files[0];
      // console.info(file);
      putBackground(file);
      Toast('信纸背景图片改变咯~')
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
}

.editors {
position: absolute;
  top: 45%;
  width: 80%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 350px;
  /* margin-top: 120px; */
}

.model1{
  background: url(https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/background/model1.png)  fixed center no-repeat;
  background-size: cover;
  width: 100%;
  object-fit: contain;
}

.model2{
  background: url(https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/background/model2.png);
  background-size: cover;
  object-fit: contain;
}

.model3{
  background: url(https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/background/model3.png);
  background-size: cover;
  object-fit: contain;
}

.head-img{
    text-align: center;
}

#img-upload{
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 20vw;
    height: 20vh;
    right: 2vw;
}


#writearea {
  width: 90%;
  /* border: #7a707088 solid 2px; */
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 18px;
  padding: 5%;
  text-indent: 2em;
  background-color: rgba(181, 150, 190, 0.05);
  box-shadow: 0 0 20px #8783ac;

  /* background: url(1.png) fixed center no-repeat; */
  /* background:   fixed center no-repeat; */
}
#ft {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 20vh;
  justify-content: space-around;
}
.choosemodel {
  width: 20vw;
  height: 90%;
  /* background-color: #fff; */
  margin-top: 2%;
}

#container {
  height: 14vh;
  padding: 2vh 4vw 4vh;
  /* background-color: #b3adf3; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
}
.choosestyle {
  width: 29vw;
  height: 7vh;
  background: black;
}
</style>
