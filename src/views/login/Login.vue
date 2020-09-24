<template>
  <div class="login-page">
    <div class="login" id="login">
      <a href="javascript:;" class="log-close"><i class="icons close"></i></a>
      <div class="log-bg">
        <div class="log-cloud cloud1"></div>
        <div class="log-cloud cloud2"></div>
        <div class="log-cloud cloud3"></div>
        <div class="log-cloud cloud4"></div>
        <div class="log-logo">Welcome!</div>
        <div class="log-text">
          <img class="round_icon" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"/>
        </div>
      </div>
      <div class="log-email" key="login" v-if="isLogin">
        <input type="text" placeholder="Email" :class="'log-input' + (account===''?' log-input-empty':'')" v-model="account">
        <input type="password" placeholder="Password" :class="'log-input' + (password===''?' log-input-empty':'')"  v-model="password">
        <a href="javascript:;" class="log-btn" @click="login">登陆</a>
        <span class="log-btn" @click="changeLoginAndRegisterStatus(false)">去注册</span>
      </div>
      <div class="log-email" key="register" v-else>
        <input type="text" placeholder="Email" :class="'log-input' + (account===''?' log-input-empty':'')" v-model="account">
        <input type="password" placeholder="Password" :class="'log-input' + (password===''?' log-input-empty':'')"  v-model="password">
        <a href="javascript:;" class="log-btn" @click="register">注册</a>
        <span class="log-btn" @click="changeLoginAndRegisterStatus(true)">去登陆</span>
      </div>
      <Loading v-if="isLoging" marginTop="-30%"></Loading>
    </div>
  </div>
</template>

<script>
  import Loading from './Loading.vue'
  import { login, register } from '@/api/user/user'
  import { validEmail } from '@/utils/validate'
  import { Message } from 'element-ui'
  export default {
    name: 'Login',
    data(){
      return {
        isLoging: false,
        isLogin: true,
        account: '',
        password: '',
        toRegisterCount: 0,
        toRegisterTips: [
          "啊哈哈哈哈 笑死我了 不用注册",
          "都说了不用注册 你怎么还点",
          "快去登陆别注册了",
          "算了和你说不通",
          "你这人咋这么轴呢",
          "不管你了爱咋咋地吧",
        ]
      }
    },
    components:{
      Loading
    },
    methods:{
      changeLoginAndRegisterStatus(loginAndRegisterStatus){
        this.isLogin = loginAndRegisterStatus;
      },
      //登录逻辑
      login() {
        if(!validEmail(this.account)){
          Message.warning({
            message:"邮箱格式不正确",
            duration:2000,
            offset:100
          })
        }else if (this.password === '' || this.password.length < 5) {
          Message.warning({
            message:"密码长度不符",
            duration:2000,
            offset:100
          })
        }else {
          this.toLogin();
        }
      },
      //登录请求
      toLogin() {
        login(this.account, this.password)
          .then(res => {
            console.log("用户信息", res)
            console.log(res.operate_code === '0000' , res.operate_result != null , res.operate_reslut !== 'undefined')
            if (res.operate_code === '0000' && res.operate_result != null && res.operate_result !== 'undefind'){
              localStorage.setItem("user", JSON.stringify(res.operate_result))
              // //设置在登录状态
              this.isLoging = true;
              this.toRegisterCount = 0
              const redirect = this.$route.query.redirectPath
              console.log("我要跳转的路径", redirect, "真实路径", redirect || "/")
              console.log("路径参数query", this.$route.query)
              Message.success({
                message:"恭喜你登陆成功",
                duration:2000,
                offset:100
              })
              this.$router.push({path: redirect|| "/"})
            } else {
              Message.warning({
                message:"用户不存在",
                duration:2000,
                offset:100
              })
            }
          })
      },
      register() {
        if(!validEmail(this.account)){
          Message.warning({
            message:"邮箱格式不正确",
            duration:2000,
            offset:100
          })
        }else if (this.password === '' || this.password.length < 5) {
          Message.warning({
            message:"密码长度不符",
            duration:2000,
            offset:100
          })
        }else {
          this.toRegister();
        }
      },
      toRegister() {
        register(this.account, this.password)
          .then(res => {
            if (res.operate_code === '0000' && res.operate_result != null && res.operate_result !== 'undefind'){
              localStorage.setItem("user", JSON.stringify(res.operate_result))
              // //设置在登录状态
              this.isLoging = true;
              this.toRegisterCount = 0
              const redirect = this.$route.query.redirectPath
              console.log("我要跳转的路径", redirect, "真实路径", redirect || "/")
              console.log("路径参数query", this.$route.query)
              Message.success({
                message:"恭喜你登陆成功",
                duration:2000,
                offset:100
              })
              this.$router.push({path: redirect|| "/"})
            } else {
              Message.warning({
                message:"注册失败",
                duration:2000,
                offset:100
              })
            }
          })
        // if (this.toRegisterCount < this.toRegisterTips.length){
        //   alert(this.toRegisterTips[this.toRegisterCount])
        //   this.toRegisterCount++
        // }else {
        //   alert("算了让你直接登陆吧")
        //   this.toLogin();
        // }
      }
    }
  }
</script>

<style scoped>
  .login-page {
    width: 100%;
    height: 100%;
    position: fixed;
    background: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2710675620,770403405&fm=26&gp=0.jpg");
  }
  .login {
    position: fixed;
    overflow: hidden;
    left: 50%;
    margin-left: -250px;
    top:50%;
    margin-top: -350px;
    width: 500px;
    min-height: 555px;
    z-index: 10;
    right: 140px;
    background: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow:  0px 3px 16px -5px #070707;
    box-shadow:  0px 3px 16px -5px #070707;
  }
  .log-close{display: block; position: absolute; top:12px; right: 12px; opacity: 1;}
  .log-close:hover .icons{transform: rotate(180deg);}
  .log-close .icons{opacity: 1; transition: all .3s}
  .log-cloud{background-image: url(~assets/images/login-cloud.png); width: 63px ;height: 40px; position: absolute; z-index: 1}
  .login .cloud1{top:21px; left: -30px; transform: scale(.6); animation: cloud1 20s linear infinite;}
  .login .cloud2{top:87px; right: 20px; animation: cloud2 19s linear infinite;}
  .login .cloud3{top:160px; left: 5px;transform: scale(.8);animation: cloud3 21s linear infinite;}
  .login .cloud4{top:150px; left: -40px;transform: scale(.4);animation: cloud4 19s linear infinite;}
  .log-bg{background: url(~assets/images/login-bg.jpg); width: 100%; height: 312px; overflow: hidden;}
  .log-logo{height: 80px; margin: 120px auto 25px; text-align: center; color: #1fcab3; font-weight: bold; font-size: 40px;}
  .log-text{color: #57d4c3; font-size: 13px; text-align: center; margin: 0 auto;}
  .log-logo,.log-text{z-index: 2}
  .icons{background:url(~assets/images/icons.png) no-repeat; display: inline-block;}
  .close{height:16px;width:16px;background-position:-13px 0;}
  .login-email{height:17px;width:29px;background-position:-117px 0;}

  .log-btns{padding: 15px 0; margin: 0 auto;}
  .log-btn{width:402px; display: block; text-align: left; line-height: 50px;margin:0 auto 15px; height:50px; color:#fff; font-size:13px;-webkit-border-radius: 5px; background-color: #3B5999;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    position: relative;}
  .log-btn.tw{background-color: #13B4E9}
  .log-btn.email{background-color: #50E3CE}
  .log-btn:hover,.log-btn:focus{color: #fff; opacity: .8;}

  .log-email{text-align: center; margin-top: 20px;}
  .log-email .log-btn{background-color: #50E3CE;text-align: center;}
  .log-input-empty{border: 1px solid #f37474 !important;}
  .isloading{background: #d6d6d6}
  .log-btn .icons{margin-left: 30px; vertical-align: middle;}
  .log-btn .text{left: 95px; line-height: 50px; text-align: left; position: absolute;}
  .log-input{width: 370px;overflow: hidden; padding: 0 15px;font-size: 13px; border: 1px solid #EBEBEB; margin:0 auto 15px; height: 48px; line-height: 48px; -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;}
  .log-input.warn{border: 1px solid #f88787}

  .round_icon{
    border-radius: 50%;
  }

  @-webkit-keyframes cloud1 {
    0%{left: 200px}
    100%{left:-130px;}
  }
  @keyframes cloud1{
    0%{left: 200px}
    100%{left:-130px;}
  }

  @-webkit-keyframes cloud2 {
    0%{left:500px;}
    100%{left:-90px;}
  }
  @keyframes cloud2{
    0%{left:500px;}
    100%{left:-90px;}
  }

  @-webkit-keyframes cloud3 {
    0%{left:620px;}
    100%{left:-70px;}
  }
  @keyframes cloud3{
    0%{left:620px;}
    100%{left:-70px;}
  }@-webkit-keyframes cloud4 {
     0%{left:100px;}
     100%{left:-70px;}
   }
  @keyframes cloud4{
    0%{left:100px;}
    100%{left:-70px;}
  }

</style>
