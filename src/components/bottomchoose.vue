<template>
  <div id="ft" style="height: 22vh">
    <div style="height: 2vh">
    </div>
    <div id="container">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <van-uploader style="width:88px;height:44px">
        <van-button icon="plus" type="primary">上传文件</van-button>
      </van-uploader>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import { Uploader } from "vant";

Vue.use(Uploader);

Vue.use(Button);
export default {
  name: "bottomchoose",
};
</script>

<style>
#ft {
  position: absolute;
  bottom: 0;
  width: 100%;
}

#container {
  height: 14vh;
  padding: 2vh 4vw 4vh;
  background-color: #b3adf3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:flex-end;
}
.choosestyle {
  width: 29vw;
  height: 7vh;
  background: black;
}
</style>
