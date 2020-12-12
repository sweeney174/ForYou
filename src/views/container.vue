<template>
  <div class="container">
    <div class="login-form animate__animated animate__fadeIn" v-if="isFlase">
      <input
        type="text"
        name="username"
        id="user"
        placeholder="用户名"
        v-model="user"
        style="height: 59px"
      />
      <input
        type="password"
        name="password"
        id="pass"
        placeholder="密码"
        v-model="pass"
        style="height: 59px"
      />
      <button type="submit" id="join" @click="login" style="height: 59px">
        登录
      </button>
      <button type="submit" id="register" @click="remove" style="height: 59px">
        注册
      </button>
    </div>
    <div
      class="msg animate__animated animate__fadeIn"
      id="msg"
      style="overflow: hidden"
      hidden
    >
      <input
        type="text"
        placeholder="用户名"
        id="newuser"
        style="width: 222px; height: 59px"
        v-model="newuser"
      />
      <input
        type="password"
        placeholder="密码"
        id="newpass"
        style="width: 222px; height: 59px"
        v-model="newpass"
      />
      <button
        class="registerform"
        style="margin: 40px 0 20px"
        @click="newlogin"
      >
        立即注册
      </button>
      <button class="registerform" @click="close">取消</button>
    </div>
    <bottombtn />
    <p style="position: absolute; bottom: 2%; color: khaki">
      developed by marryteam
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Bottombtn from "../components/bottombtn.vue";
import { Toast } from "vant";

axios.defaults.baseURL = "https://a1.onesnowwarrior.cn:8080";
export default {
  name: "container",
  components: {
    Bottombtn,
  },
  data() {
    return {
      isFlase: true,
      user: "",
      pass: "",
      newuser: "",
      newpass: "",
    };
  },
  methods: {
    login() {
      if (this.user == "") {
        alert("请输入账号");
        return false;
      } else if (this.pass == "") {
        alert("请输入密码");
        return false;
      }

      //封装好的模块
      // post('/api/token',{
      //   username: this.user,
      //   password: this.pass
      // }).then(res=>{
      //   console.log(res)
      // }).catch(err=>{console.log(err)})

      // post1({
      //   username:this.user,
      //   password:this.pass
      // }).then(res=>{
      //   console.log(res)
      //   this.$router.push('/login')
      // }).catch(err=>{
      //   console.log(err)
      // })

      
      //登录
      //获取token
      axios
        .post("/api/token", {
          username: this.user,
          password: this.pass,
        })
        .then((res) => {
          if (res.data.status == 1) {
            //存储鉴权令牌到session
            sessionStorage.setItem("userToken", res.data.token);
            sessionStorage.setItem("username", this.user);
            axios.defaults.headers.post["Authorization"] =
              "Bearer" + " " + sessionStorage.getItem("userToken");
            //获取sts_token
            axios
              .post("/api/user/sts_token", {
                username: this.user,
              })
              .then((res1) => {
                // console.log(res1);
                sessionStorage.setItem("SecurityToken", res1.data.sts_token);
                sessionStorage.setItem("AccessKeyId", res1.data.access_key_id);
                sessionStorage.setItem(
                  "AccessKeySecret",
                  res1.data.access_key_secret
                );
              })
              .catch((err1) => {
                console.log(err1);
              });
            // console.log(res)
            Toast('登录成功，开始制造惊喜吧！');
            this.$router.push("/home");
          } else {
            Toast(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //注册
    newlogin() {
      if (this.newuser == "") {
        alert("请输入账号");
        return false;
      } else if (this.newpass == "") {
        alert("请输入密码");
        return false;
      }
      axios
        .post("/api/registration", {
          username: this.newuser,
          password: this.newpass,
        })
        .then((res) => {
          if (res.data.status == 1) {
            // alert(res.data.msg);
            axios
              .post("/api/token", {
                username: this.newuser,
                password: this.newpass,
              })
              .then((res2) => {
                if (res2.data.status == 1) {
                  //存储鉴权令牌到session
                  sessionStorage.setItem("userToken", res2.data.token);
                  sessionStorage.setItem("username", this.newuser);
                  axios.defaults.headers.post["Authorization"] =
                    "Bearer" + " " + sessionStorage.getItem("userToken");
                  //获取sts_token
                  axios
                    .post("/api/user/sts_token", {
                      username: this.newuser,
                    })
                    .then((res1) => {
                      console.log(res1);
                      sessionStorage.setItem(
                        "SecurityToken",
                        res1.data.sts_token
                      );
                      sessionStorage.setItem(
                        "AccessKeyId",
                        res1.data.access_key_id
                      );
                      sessionStorage.setItem(
                        "AccessKeySecret",
                        res1.data.access_key_secret
                      );
                    })
                    .catch((err1) => {
                      console.log(err1);
                    });
                } else {
                  console.log(res2.data.msg)
                }
              })
              .catch((err2) => {
                console.log(err2);
              });
            Toast(res.data.msg+',开始制造惊喜吧！');
            this.$router.push("/home");
          } else {
            Toast(res.data.msg);
          }
          console.log(res);
        });
    },
    close() {
      document.getElementById("msg").hidden = true;
      this.isFlase = true;
      // this.$router.push("/Login");
    },
    remove() {
      document.getElementById("msg").removeAttribute("hidden");
      this.isFlase = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
@import "../assets/containerstyle.css";
</style>
