<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="big-text">{{$t('main.banner.title')}}</h1>
          <p class="small-text">{{$t('main.banner.describe')}}</p>
        </div>
      </div>
    </div>

    <div class="our-mission lang-max flex-row">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
          <img :src="ourmissionImage" class="img" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content">
            <p class="title bigtit-text">{{$t('main.ourMission.title')}}</p>
            <p class="desc describe-small">{{$t('main.ourMission.describe')}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="what-we-do">
      <div class="title lang-max">
        <p class="medium-text">{{$t('main.WhatWeDo.title')}}</p>
      </div>
      <el-row class="row-bg">
        <el-col class="left">
          <div class="image flex-row">
            <img :src="wedoData.wedoImg" class="img" />
          </div>
        </el-col>
        <el-col class="right">
          <div class="content" v-for="we in wedoData.list" :key="we">
            <p class="tit small-large">{{we.title}}</p>
            <p class="desc describe-small">{{we.desc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="our-value lang-max">
      <div class="title">
        <p class="medium-text">{{$t('main.OurValues.title')}}</p>
      </div>
      <el-row class="row-bg" :gutter="40" justify="space-between">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="value in valueData" :key="value">
          <div class="content">
            <img :src="value.img" class="image" />
            <p class="tit medium-large">{{value.title}}</p>
            <p class="desc describe-small">{{value.desc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  CircleCheck
} from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n"
export default defineComponent({
  components: {
    CircleCheck
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const ourmissionImage = require(`@/assets/images/main/our-mission.jpg`)
    const valueData = ref([
      {
        img: require(`@/assets/images/main/value-01.png`),
        title: t('main.OurValues.list.title-1'),
        desc: t('main.OurValues.list.describe-1')
      },
      {
        img: require(`@/assets/images/main/value-02.png`),
        title: t('main.OurValues.list.title-2'),
        desc: t('main.OurValues.list.describe-2')
      },
      {
        img: require(`@/assets/images/main/value-03.png`),
        title: t('main.OurValues.list.title-3'),
        desc: t('main.OurValues.list.describe-3')
      },
      {
        img: require(`@/assets/images/main/value-04.png`),
        title: t('main.OurValues.list.title-4'),
        desc: t('main.OurValues.list.describe-4')
      }
    ])
    const wedoData = ref({
      wedoImg: require(`@/assets/images/main/what-we-do.jpg`),
      list: [
        {
          title: t('main.WhatWeDo.list.title-1'),
          desc: t('main.WhatWeDo.list.describe-1')
        },
        {
          title: t('main.WhatWeDo.list.title-2'),
          desc: t('main.WhatWeDo.list.describe-2')
        },
        {
          title: t('main.WhatWeDo.list.title-3'),
          desc: t('main.WhatWeDo.list.describe-3')
        },
        {
          title: t('main.WhatWeDo.list.title-4'),
          desc: t('main.WhatWeDo.list.describe-4')
        }
      ]
    })

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      ourmissionImage,
      valueData,
      wedoData
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .banner {
    position: relative;
    padding: 230px 0;
    background: #171819 url(../../../assets/images/bg-main.jpg) center no-repeat;
    background-size: cover;
    @media screen and (min-width: 2160px) {
      padding: 200px 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 240px 0;
    }
    @media screen and (max-width: 768px) {
      padding: 350px 0 230px;
    }
    .content {
      .text {
        max-width: 960px;
        color: #fff;
        line-height: 1.23;
        @media screen and (max-width: 1260px) {
          max-width: 1160px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        h1 {
          margin: 0 0 15px;
          @media screen and (max-width: 600px) {
            margin: 0 0 30px;
          }
        }
      }
    }
  }
  :deep(.our-mission) {
    padding: 125px 0 70px;
    @media screen and (min-width: 2160px) {
      padding: 70px 0 50px;
    }
    .el-row {
      width: 100%;
      align-items: center;
      .el-col {
        padding: 0;
        margin: 0;
        color: #231f20;
        .content {
          padding: 30px 0 30px 20px;
          @media screen and (max-width: 600px) {
            padding: 120px 30px 30px;
          }
          .title {
            padding: 0 0 20px;
            line-height: 1.1;
            @media screen and (max-width: 600px) {
              padding: 0 0 40px;
            }
          }
          .desc {
            line-height: 1.35;
          }
        }
      }
    }
  }
  :deep(.what-we-do) {
    .title {
      padding: 25px 0;
      margin: 0 auto 55px;
      border-bottom: 2px solid #d3d2d2;
      @media screen and (min-width: 2160px) {
        margin: 0 auto 25px;
      }
      @media screen and (max-width: 600px) {
        padding: 50px 0;
        margin: 0 auto 110px;
      }
    }
    .el-row {
      padding: 20px 0;
      @media screen and (min-width: 2160px) {
        max-width: 1100px;
        margin: auto;
      }
      .el-col {
        &.left {
          max-width: 50%;
          flex: 0 0 50%;
          @media screen and (max-width: 600px) {
            max-width: 90%;
            flex: 0 0 90%;
            margin: auto;
            .image {
              padding: 0;
            }
          }
        }
        &.right {
          max-width: 30%;
          flex: 0 0 30%;
          @media screen and (max-width: 1680px) {
            max-width: 35%;
            flex: 0 0 35%;
          }
          @media screen and (max-width: 1440px) {
            max-width: 40%;
            flex: 0 0 40%;
          }
          @media screen and (max-width: 1260px) {
            max-width: 45%;
            flex: 0 0 45%;
          }
          @media screen and (max-width: 600px) {
            max-width: 90%;
            flex: 0 0 90%;
            margin: auto;
          }
        }
        .image {
          height: 100%;
          padding: 0 135px 0 0;
          @media screen and (min-width: 2160px) {
            padding: 0 55px 0 0;
          }
        }
        .content {
          padding: 35px 0;
          line-height: 1.4;
          @media screen and (min-width: 2160px) {
            padding: 15px 0;
          }
          @media screen and (max-width: 768px) {
            padding: 35px 30px;
          }
          @media screen and (max-width: 767px) {
            padding: 70px 128px;
          }
          .tit {
            padding: 0 0 10px;
            font-weight: 600;
            @media screen and (max-width: 767px) {
              padding: 0 0 20px;
            }
          }
        }
      }
    }
  }
  :deep(.our-value) {
    padding: 80px 0;
    @media screen and (min-width: 2160px) {
      padding: 50px 0;
    }
    .title {
      border-bottom: 2px solid #d3d2d2;
      padding: 25px 0;
      @media screen and (max-width: 600px) {
        padding: 50px 0;
      }
    }
    .el-row {
      position: relative;
      padding: 75px 0;
      @media screen and (min-width: 2160px) {
        padding: 45px 0;
      }
      @media screen and (max-width: 600px) {
        padding: 150px 0;
      }
      .el-col {
        // padding: 0 22px;
        margin: 0 0 23px;
        @media screen and (max-width: 768px) {
          margin: 0 0 46px;
        }
        @media screen and (max-width: 767px) {
          margin: 60px auto !important;
        }
        .content {
          height: calc(100% - 60px);
          padding: 30px 15px;
          border: 2px solid #dad9d9;
          border-radius: 15px;
          text-align: center;
          // box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
          //   10px 10px 13px rgba(71, 153, 185, 0.1);
          @media screen and (max-width: 767px) {
            height: calc(100% - 120px);
            padding: 60px 30px;
            border-radius: 30px;
          }
          .image {
            height: 80px;
            @media screen and (min-width: 2160px) {
              height: 50px;
            }
            @media screen and (max-width: 600px) {
              height: 150px;
            }
            @media screen and (max-width: 540px) {
              height: 190px;
            }
          }
          .tit {
            padding: 45px 0 15px;
            font-weight: 600;
            line-height: 1.1;
            text-align: center;
            @media screen and (min-width: 2160px) {
              padding: 15px 0 10px;
            }
            @media screen and (max-width: 600px) {
              padding: 90px 0 30px;
            }
          }
        }
      }
    }
  }
}
</style>
