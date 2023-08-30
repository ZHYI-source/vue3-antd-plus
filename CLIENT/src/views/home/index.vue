<template>
  <section class="zy-container">
    <div class="img-box">
      <ZyLogo :showTitle="false" size="80"/>
    </div>
    <hr/>
    <section class="one">
      <header class="major">
        <h1>Vue3-Antd-Plus-前台</h1>
        <p class="sub-title">基于 Vue 3 + js + Pinia +Vite + <a href="https://www.antdv.com/docs/vue/getting-started-cn">Ant
          Design Vue</a>.</p>
        <p>Vue3-Antd-Plus是一个现代化的管理系统，提供了一系列功能丰富的组件和工具，帮助开发者快速搭建和开发前后台管理应用。
          <br>
          对快速构建Vue3全栈项目有很大的帮助，解决每次新建项目基础配置的烦恼.
          <br>
        <p style="font-weight: bold">项目如果对您有帮助，希望能得到您的 star ✨</p>
        </p>

        <a href="https://gitee.com/Z568_568/vue3-antd-plus.git" target="_blank">
          <a-button type="primary">源码 gitee</a-button>
        </a>
        <a href="https://github.com/ZHYI-source/vue3-antd-plus.git" target="_blank">
          <a-button type="primary">源码 github</a-button>
        </a>
        <a href="http://www.zhouyi.run" target="_blank">
          <a-button type="primary">个人主页</a-button>
        </a>
        <a-button type="primary" @click="getDataList">请求数据</a-button>
      </header>
      <div class="zy-code">
        <code>
          $ https://gitee.com/Z568_568/vue3-antd-plus.git
        </code>
        <code>$ npm i</code>
        <code>$ npm run dev</code>
        <code>$ npm run build</code>
      </div>
    </section>
    <section class="intro">
      <div class="social-list">
        <a target="_blank" title="github" href="https://github.com/ZHYI-source"><i class="iconfont icon-github"></i></a>
        <a target="_blank" title="gitee" href="https://gitee.com/Z568_568"><i class="iconfont icon-gitee"></i></a>
        <a target="_blank" title="bilibili" href="https://space.bilibili.com/346070659"><i
            class="iconfont icon-bilibili1"></i></a>
        <a target="_blank" title="csdn" href="https://blog.csdn.net/html0010?spm=1011.2124.3001.5343"><i
            class="iconfont icon-csdn"></i></a>
      </div>
      <ZySectionHeader title="其他开源项目" titleNum="01"/>
      <ZyWorksSection :dataList="worksList"/>

      <ZySectionHeader title="赞赏 (谢谢支持)" titleNum="02"/>
      <div class="zs-list">
        <img class="zs" :src="img_7">
        <img class="zs" :src="img_8">
      </div>
    </section>
  </section>
</template>

<script setup>
import {watchEffect, reactive, ref} from 'vue'
import {users_opt_logsList} from "../../api/modules/api.users_opt_logs";
import {ZyMessage} from "../../libs/util.toast";
import ZyLogo from "../../components/common/ZyLogo.vue";
import img_7 from "../../assets/img/img_7.png";
import img_8 from "../../assets/img/img_8.png";
import ZyWorksSection from "../../components/common/ZyWorksSection.vue";
import ZySectionHeader from "../../components/common/ZySectionHeader.vue";

const getDataList = async function () {
  try {
    const data = await users_opt_logsList()
    console.log(data)
    ZyMessage.success('请求成功')
  } catch (err) {
    console.log(err)
  }
}

const worksList = reactive([
  {
    "_id": "64eec6a1a0d58a3cda8ce1ce",
    "title": "vue3个人主页简历个人博客前后端分离系统",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1693369948544.png",
    "abstract": "👍个人主页、简历、个人博客基于Vue3、Express、MongoDB、JavaScript搭建集成网站和开发管理后台应用。前后端分离完整系统。",
    "sourceUrl": "https://gitee.com/Z568_568/ZHOUYI-Homepage.git",
    "demoUrl": "http://www.zhouyi.run",
    "category": "个人主页",
    "framework": " Vue3、Express、MongoDB、JavaScript",
    "recommended": true,
    "status": true,
    "createdAt": "2023-08-30T04:33:37.869Z",
    "updatedAt": "2023-08-30T04:33:37.869Z"
  },
  {
    "_id": "64d2f6bf97ad53aea60d4f4f",
    "title": "ZY.Crawler",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    "abstract": "zy-crawler是一个基于Node.js的简单易用的爬虫工具，可以方便地获取指定网页的内容并进行自定义格式化处理。",
    "sourceUrl": "https://github.com/ZHYI-source/ZY.Crawler.git",
    "demoUrl": "https://github.com/ZHYI-source/ZY.Crawler.git",
    "category": "爬虫",
    "framework": "Node.js",
    "recommended": false,
    "status": true,
    "createdAt": "2023-08-09T02:15:27.881Z",
    "updatedAt": "2023-08-09T02:15:27.881Z"
  },
  {
    "_id": "64d2f64d97ad53aea60d4f43",
    "title": "maple-react",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691547162485.png",
    "abstract": "🍁create-react-app创建的 React 脚手架 前端模板 标准的 React+Redux 分层结构 React-router-v6 最新路由配置 学习React18 hook新知识，采用函数组件构建页面。",
    "sourceUrl": "https://gitee.com/Z568_568/maple-react.git",
    "demoUrl": "http://www.zhouyi.run:5226",
    "category": "个人主页",
    "framework": "React18",
    "recommended": false,
    "status": true,
    "createdAt": "2023-08-09T02:13:33.885Z",
    "updatedAt": "2023-08-09T02:13:33.885Z"
  },
  {
    "_id": "64d2f5aa97ad53aea60d4f35",
    "title": "个人博客 mysql ",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    "abstract": "👀👀简单小型的全栈开发个人博客系统,前台展示和后台管理一体化。vue2 + node.js + express + mysql 包含前端博客展示、后台管理、node后端。整套博客系统开箱即用,对elemen-ui二次封装组件非常便利，管理端权限模块还未完成，已完成用户登录，验证码，token验证，文章编辑，修改，查看，发布，评论，分类查询，站点配置，音乐配置等等",
    "sourceUrl": "https://gitee.com/Z568_568/blog.git",
    "demoUrl": "http://www.zhouyi.run/#/",
    "category": "博客",
    "framework": "vue2、node.js 、express.js、mysql",
    "recommended": false,
    "status": true,
    "createdAt": "2023-08-09T02:10:50.179Z",
    "updatedAt": "2023-08-09T02:10:50.179Z"
  },
  {
    "_id": "64d2f55097ad53aea60d4f29",
    "title": "ZY.Hexo.Blog",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546787133.png",
    "abstract": "Hexo博客框架搭建响应式、简约清爽款个人博客站点，基于Ocean主题 做了改动,增加了分类、标签、音乐菜单、页脚个人资源和站点运行时间等配置",
    "sourceUrl": "https://gitee.com/Z568_568/zy-hexo-blog.git",
    "demoUrl": "http://hexo.blog.zhouyi.run/",
    "category": "Hexo",
    "framework": "hexo",
    "recommended": false,
    "status": true,
    "createdAt": "2023-08-09T02:09:20.462Z",
    "updatedAt": "2023-08-09T02:09:20.462Z"
  },
  {
    "_id": "64d2f43a97ad53aea60d4ef1",
    "title": "vue2 个人博客完整版",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546535717.png",
    "abstract": "😜博客全栈系统，个人blog+vue2 + node.js + express +sequalize+ mysql+uniapp 包含前端博客展示、后台管理、node后端服务。包括前后台完整基础功能，微信小程序，H5，web前台站点一键置灰，配置新年特效，支持移动端适配,excel数据导入/导出，sql文件已附上，整套博客系统开箱即用,已完成代码生成器，权限模块，菜单管理等等",
    "sourceUrl": "https://gitee.com/Z568_568/all-blog-sys.git",
    "demoUrl": "http://blog.zhouyi.run/#/",
    "category": "博客",
    "framework": "vue2、node.js、 express、sequalize、 mysql、uniapp",
    "recommended": true,
    "status": true,
    "createdAt": "2023-08-09T02:04:42.429Z",
    "updatedAt": "2023-08-30T04:34:51.422Z"
  },
  {
    "_id": "64d2f38497ad53aea60d4edf",
    "title": "Vue3-Antd-Plus",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546282594.png",
    "abstract": "👍 提供了一个基于最新的技术栈（Vue 3、Vite、Ant Design Vue 3、JavaScript、Pinia、Hooks和vue-router）的完整开发模板，旨在帮助初学者更快地入门并加入团队开发。该模板包含了一系列功能模块，如大屏展示、自定义主题、角色用户、菜单授权、数据权限和系统参数等，并且所有模块都经过了完整的组件封装",
    "sourceUrl": "https://gitee.com/Z568_568/vue3-antd-plus.git",
    "demoUrl": "https://gitee.com/Z568_568/vue3-antd-plus.git",
    "category": "后台管理系统、大屏数据可视化",
    "framework": "Vue 3、Vite、Ant Design Vue 3、JavaScript、Pinia、Hooks和vue-router",
    "recommended": true,
    "status": true,
    "isMe": true,
    "createdAt": "2023-08-09T02:01:40.456Z",
    "updatedAt": "2023-08-09T02:16:08.554Z"
  },
  {
    "_id": "64d2f28997ad53aea60d4ec7",
    "title": "个人文件管理+图床管理服务系统",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691546113455.png",
    "abstract": "🎉轻量级个人文件管理、图床管理服务系统，对文本文件、图片、视频、音频、音乐等各类文件的存储管理，基于node.js、mysql、vue2实现。内置用户登录和其他相关接口可扩展功能",
    "sourceUrl": "https://gitee.com/Z568_568/zy.files.sys.git",
    "demoUrl": "http://files.zhouyi.run",
    "category": "文件管理",
    "framework": "node.js、mysql、vue2",
    "recommended": true,
    "status": true,
    "createdAt": "2023-08-09T01:57:29.791Z",
    "updatedAt": "2023-08-09T02:16:03.719Z"
  },
  {
    "_id": "64d2f1e097ad53aea60d4eb1",
    "title": "个人主页模板ZY-Portofolio",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545619525.png",
    "abstract": "基于vue3+js实现个人主页模板ZY-Portofolio",
    "sourceUrl": "https://gitee.com/Z568_568/zy-portofolio.git",
    "demoUrl": "https://gitee.com/Z568_568/zy-portofolio.git",
    "category": "个人主页",
    "framework": "vue3、javaScript",
    "recommended": true,
    "status": true,
    "createdAt": "2023-08-09T01:54:40.202Z",
    "updatedAt": "2023-08-30T04:16:52.755Z"
  },
  {
    "_id": "64d2eff397ad53aea60d4ea3",
    "title": "ZY.Node.Mysql",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    "abstract": "基于 Node.js、Express.js 和 Mysql 通过Sequalize 驱动进行 REST API 开发的轻量级样板。集成了Swagger UI、JWT、session、登录token、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。",
    "sourceUrl": "https://gitee.com/Z568_568/zy-express-sequelize-mysql.git",
    "demoUrl": "https://gitee.com/Z568_568/zy-express-sequelize-mysql.git",
    "category": "Mysql",
    "framework": "Node.js、Express.js 和 Mysql",
    "recommended": true,
    "status": true,
    "createdAt": "2023-08-09T01:46:27.859Z",
    "updatedAt": "2023-08-09T09:27:14.922Z"
  },
  {
    "_id": "64d2ef7797ad53aea60d4e7f",
    "title": "ZY.Node.Mongodb",
    "cover": "http://www.zhouyi.run:3089/v1/common/files/preview/img/1691545299360.png",
    "abstract": "基于 Node.js、Express.js 和 MongoDB 通过Mongoose驱动进行 REST API 开发的轻量级样板。集成了Swagger UI、JWT、session、发送邮箱验证、日志管理、统一的预定义状态码响应格式等，对于为前端平台构建纯净的Web API非常有用。",
    "sourceUrl": "https://gitee.com/Z568_568/node.mongodb.git",
    "demoUrl": "https://gitee.com/Z568_568/node.mongodb.git",
    "category": "MongoDB",
    "framework": "Node.js、Express.js、MongoDB",
    "recommended": true,
    "status": true,
    "createdAt": "2023-08-09T01:44:23.703Z",
    "updatedAt": "2023-08-09T01:44:23.703Z"
  }
].sort((a, b) => b.recommended - a.recommended))

</script>

<style lang="scss" scoped>
.img-box {
  width: 120px;
  height: auto;
  margin: 2rem auto 0;
}

.intro {
  max-width: 1200px;
  margin: 0 auto;

  .social-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;

    .iconfont {
      font-size: 2rem;
      margin: 5px;
    }
  }

  .zs-list {
    display: flex;

    .zs {
      display: inline-block;
      width: 120px;
      margin: 1rem;
    }

  }
}

.one {
  max-width: 1200px;
  margin: 2rem auto;

  .major {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
      margin-bottom: 1rem;
    }

    p:nth-child(3) {
      margin-bottom: 1rem;
    }

    a {
      margin: .5rem;
    }
  }
}
</style>
