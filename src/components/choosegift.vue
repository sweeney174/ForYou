<template>
  <div>
    <!-- <h2 class="chooseheader">你想送给ta什么样的礼物?</h2>
    <div class="container">
      <div class="gift dukdik editorsgift">
        <div class="giftTop"></div>
        <div>
          <i>
            <svg
              t="160724525615"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11803"
              width="30"
              height="30"
            >
              <path
                d="M455.68 404.032l91.264 529.152s67.456-69.44 123.136-117.888L792.512 979.2c4.928 6.656 15.68 7.104 23.872 1.088l52.288-38.208c8.256-6.016 10.944-16.32 5.952-22.976L755.52 759.68c62.208-25.088 164.672-53.632 164.672-53.632L455.68 404.032zM308.352 648.384L172.48 747.712c-20.544 15.04-24.256 43.968-8 65.408 16.256 21.376 46.272 27.008 66.752 12.032l135.872-99.328c20.992-15.36 24.512-45.504 8.256-66.88-16.192-21.44-46.016-25.92-67.008-10.56z m641.344-409.408C933.44 217.6 904.064 212.8 882.624 228.48l-134.912 98.688c-21.44 15.68-25.152 44.672-8.896 66.048 16.256 21.376 46.272 27.008 67.712 11.328l134.912-98.688c21.44-15.68 24.512-45.504 8.256-66.88z m-630.4-102.144c-15.936-20.928-45.248-25.728-66.752-10.048-20.096 14.72-24.256 43.968-8.32 64.896L349.76 330.496c15.936 20.992 45.696 25.408 65.792 10.688 21.44-15.68 25.216-44.608 9.28-65.6L319.296 136.832zM585.792 301.76c26.176 4.224 50.24-13.376 53.632-39.232L660.608 94.72c3.392-25.792-14.976-49.984-41.536-54.656-26.176-4.224-50.24 13.376-53.632 39.168l-21.248 167.872c-3.264 25.856 15.104 49.984 41.6 54.656zM329.728 489.024c2.56-25.92-15.808-50.048-41.536-54.656L118.144 406.4c-27.072-3.584-50.688 13.696-53.632 39.232-3.904 26.944 14.464 51.072 41.536 54.656l170.048 27.968c25.728 4.48 49.408-12.8 53.632-39.232z"
                p-id="11804"
                fill="#ffffff"
              ></path>
            </svg>
          </i>
        </div>
        <div class="giftBox"></div>
      </div>
    </div> -->
    <div id="ft">
      <div class="choosegift gift1" @click="gift1"></div>
      <div class="choosegift gift2" @click="gift2"></div>
      <div class="choosegift gift3" @click="gift3"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
// import {putGift} from '@/assets/client'
export default {
  name: "choosegift",
  data(){
    return{
      gift:1,
    }

  },
  methods:{
    gift1(){
      this.gift=1
      sessionStorage.setItem('gift_link','https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/gift/gift1.png')
      Toast('蛋糕已放入礼物盒~')
    },
    gift2(){
      this.gitf=2
      sessionStorage.setItem('gift_link','https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/gift/gift2.png')
      Toast('气球已放入礼物盒~')
    },
    gift3(){
      this.gift=3
      sessionStorage.setItem('gift_link','https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/gift/gift3.png')
      Toast('鲜花已放入礼物盒~')
    }
  }
};
</script>

<style>
.choosegift{
  width: 30vw;
  height: 80%;
  margin-top: 5%;
  background-color: white;
}

.gift1{
  background: url(https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/gift/gift1.png) no-repeat;
  background-color: transparent;
}
.gift2{
  background: url(https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/gift/gift2.png) no-repeat;
  background-color: transparent;
  overflow: hidden;
}
.gift3{
  background: url(https://foryou-store.oss-cn-shanghai.aliyuncs.com/pre_templates/gift/gift3.png) no-repeat;
  background-color: transparent;

}
</style>
