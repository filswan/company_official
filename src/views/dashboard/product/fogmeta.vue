<template>
  <section id="container-fogmeta">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="oversized-text flex-row">
            {{$t('fogmeta.banner.title')}}
            <el-divider /> <img :src="logoImage" alt="" class="logo-img" /></h1>
          <p class="small-large">{{$t('fogmeta.banner.describe')}}</p>
          <div class="learn-more small-large" @click="system.$commonFun.goLink('https://en.fogmeta.com/')">{{$t('public.Learn-More')}}</div>
        </div>
      </div>
    </div>

    <div class="about-tool lang-max">
      <div class="title medium-text">{{$t('fogmeta.about.title')}}</div>
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="11" :sm="5" :md="3" :lg="3" :xl="3" v-for="t in toolData" :key="t">
          <div class="content">
            <img :src="t.img" class="image" />
            <p class="desc describe-small flex-row">{{t.title}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="fogMeta-labs lang-max">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
          <div class="title medium-text">{{$t('fogmeta.labs.title')}}</div>
        </el-col>
        <el-col :xs="24" :sm="17" :md="19" :lg="19" :xl="19">
          <div class="content">
            <p class="desc describe-small">{{$t('fogmeta.labs.describe')}}</p>
          </div>
        </el-col>
      </el-row>
      <ul class="flex-row">
        <li v-for="lab in labsData" :key="lab">
          <b class="oversized-large">{{lab.num}}</b>
          <span class="describe">{{lab.content}}</span>
        </li>
      </ul>
    </div>

    <div class="computing-service lang-max">
      <div class="title medium-text">{{$t('fogmeta.ComputingService.title')}}</div>
      <el-row justify="space-between" :gutter="40">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="service in serviceData" :key="service">
          <el-row class="row-bg" justify="space-between">
            <el-col :xs="24" :sm="3" :md="3" :lg="3" :xl="3">
              <img :src="service.img" class="img" />
            </el-col>
            <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="20">
              <div class="content">
                <p class="tit small-text">{{service.title}}</p>
                <p class="desc small-18">{{service.desc}}</p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="fog-blockchain lang-max">
      <div class="title medium-text">{{$t('fogmeta.BaaS.title')}}</div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="(block, b) in blockchainData" :key="b" :name="block.name">
          <template #label>
            <p class="custom-tabs-label describe" v-html="block.label"></p>
          </template>
          <el-row class="row-bg" justify="space-between">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="flex-row">
              <div class="content">
                <p class="tit small-text">{{block.title}}</p>
                <el-divider />
                <p class="desc describe-small">{{block.desc}}</p>
              </div>
            </el-col>
            <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
              <img :src="block.img" class="img" />
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="meta-os lang-max flex-row">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
          <div class="abo">
            <img :src="serviceImage" class="img" />
            <div class="tit bigtit-text">{{$t('fogmeta.Web3OS.title')}}</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content">
            <p class="title bigtit-text">{{$t('fogmeta.Web3OS.title')}}</p>
            <p class="desc describe-small">{{$t('fogmeta.Web3OS.describe')}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="our-strength lang-max">
      <div class="title medium-text">{{$t('fogmeta.ourStrength.title')}}</div>
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="s in strengthData" :key="s">
          <div class="content">
            <img :src="s.img" class="image" />
            <p class="tit describe-small">{{s.title}}</p>
            <ul class="text">
              <li class="small-18" v-for="desc in s.text" :key="desc">{{desc}}</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="swan-partners lang-max">
      <div class="title medium-text">{{$t('fogmeta.Suppliers')}}</div>
      <CarouselContainer :slide-list="partnersData"></CarouselContainer>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import CarouselContainer from '@/components/CarouselContainer.vue'
import {
  CircleCheck
} from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n"
export default defineComponent({
  components: {
    CircleCheck, CarouselContainer
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const logoImage = require(`@/assets/images/fogmeta/logo-fogmeta.png`)
    const serviceImage = require(`@/assets/images/fogmeta/meta-OS.jpg`)
    const toolData = ref([
      {
        img: require(`@/assets/images/fogmeta/about-01.png`),
        title: t('fogmeta.about.Fog-Computing')
      },
      {
        img: require(`@/assets/images/fogmeta/about-02.png`),
        title: t('fogmeta.about.Edge-Computing')
      },
      {
        img: require(`@/assets/images/fogmeta/about-03.png`),
        title: t('fogmeta.about.High-Performance-Computing')
      },
      {
        img: require(`@/assets/images/fogmeta/about-04.png`),
        title: t('fogmeta.about.Distributed-Storage')
      },
      {
        img: require(`@/assets/images/fogmeta/about-05.png`),
        title: t('fogmeta.about.Blockchain')
      },
      {
        img: require(`@/assets/images/fogmeta/about-06.png`),
        title: t('fogmeta.about.Deep-Learning')
      },
      {
        img: require(`@/assets/images/fogmeta/about-07.png`),
        title: t('fogmeta.about.CDN')
      },
    ])
    const activeName = ref('Rapid')
    const blockchainData = ref([
      {
        label: 'Rapid <br /> Deployment',
        name: 'Rapid',
        title: t('fogmeta.BaaS.tabs.Rapid-Deployment'),
        desc: t('fogmeta.BaaS.tabs.Rapid-Deployment-describe'),
        img: require(`@/assets/images/fogmeta/service-01.jpg`)
      },
      {
        label: 'Monitoring <br /> Services',
        name: 'Monitoring',
        title: t('fogmeta.BaaS.tabs.Monitoring-Services'),
        desc: t('fogmeta.BaaS.tabs.Monitoring-Services-describe'),
        img: require(`@/assets/images/fogmeta/service-02.jpg`)
      },
      {
        label: 'App <br /> Access',
        name: 'App',
        title: t('fogmeta.BaaS.tabs.App-Access'),
        desc: t('fogmeta.BaaS.tabs.App-Access-describe'),
        img: require(`@/assets/images/fogmeta/service-03.jpg`)
      },
      {
        label: 'High <br /> Stability',
        name: 'High',
        title: t('fogmeta.BaaS.tabs.High-Stability'),
        desc: t('fogmeta.BaaS.tabs.High-Stability-describe'),
        img: require(`@/assets/images/fogmeta/service-04.jpg`)
      },
      {
        label: 'Simple to <br /> Use',
        name: 'Simple',
        title: t('fogmeta.BaaS.tabs.Simple-to-Use'),
        desc: t('fogmeta.BaaS.tabs.Simple-to-Use-describe'),
        img: require(`@/assets/images/fogmeta/service-05.jpg`)
      }
    ])
    const partnersData = ref([
      {
        img: require(`@/assets/images/fogmeta/partners/partners-01.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-02.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-03.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-04.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-05.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-06.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-07.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-08.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-09.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-10.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-11.png`)
      },
      {
        img: require(`@/assets/images/fogmeta/partners/partners-12.png`)
      },
    ])
    const strengthData = ref([
      {
        img: require(`@/assets/images/fogmeta/strength-01.png`),
        title: t('fogmeta.ourStrength.content.Security-Confidentiality'),
        text: [
          t('fogmeta.ourStrength.content.Security-Confidentiality-describe1'),
          t('fogmeta.ourStrength.content.Security-Confidentiality-describe2'),
          t('fogmeta.ourStrength.content.Security-Confidentiality-describe3')
        ]
      },
      {
        img: require(`@/assets/images/fogmeta/strength-02.png`),
        title: t('fogmeta.ourStrength.content.Scalability'),
        text: [
          t('fogmeta.ourStrength.content.Scalability-describe1'),
          t('fogmeta.ourStrength.content.Scalability-describe2'),
          t('fogmeta.ourStrength.content.Scalability-describe3')
        ]
      },
      {
        img: require(`@/assets/images/fogmeta/strength-03.png`),
        title: t('fogmeta.ourStrength.content.Recoverability'),
        text: [
          t('fogmeta.ourStrength.content.Recoverability-describe1'),
          t('fogmeta.ourStrength.content.Recoverability-describe2'),
          t('fogmeta.ourStrength.content.Recoverability-describe3')
        ]
      },
      {
        img: require(`@/assets/images/fogmeta/strength-04.png`),
        title: t('fogmeta.ourStrength.content.Deploy-Services'),
        text: [
          t('fogmeta.ourStrength.content.Deploy-Services-describe1'),
          t('fogmeta.ourStrength.content.Deploy-Services-describe2'),
          t('fogmeta.ourStrength.content.Deploy-Services-describe3')
        ]
      }
    ])
    const labsData = ref([
      {
        num: '100+',
        content: t('fogmeta.labs.Lab-Members')
      },
      {
        num: '30+',
        content: t('fogmeta.labs.Full-time-Researchers')
      },
      {
        num: '20+',
        content: t('fogmeta.labs.Project-R&D')
      },
      {
        num: '720+',
        content: t('fogmeta.labs.Researchers')
      }
    ])
    const serviceData = ref([
      {
        img: require(`@/assets/images/fogmeta/cs-01.png`),
        title: t('fogmeta.ComputingService.Fog-Computing'),
        desc: t('fogmeta.ComputingService.Fog-Computing-text')
      },
      {
        img: require(`@/assets/images/fogmeta/cs-02.png`),
        title: t('fogmeta.ComputingService.Edge-Computing'),
        desc: t('fogmeta.ComputingService.Edge-Computing-text')
      }
    ])

    const handleClick = (tab, event) => {
      // console.log(tab, event)
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      logoImage,
      serviceImage,
      toolData,
      activeName,
      blockchainData,
      labsData,
      partnersData,
      serviceData,
      strengthData,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
#container-fogmeta {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .banner {
    position: relative;
    padding: 190px 0;
    background: #171819 url(../../../assets/images/bg-fogmeta.jpg) center
      no-repeat;
    background-size: cover;
    @media screen and (min-width: 2160px) {
      padding: 170px 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 200px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 350px 0 250px;
    }
    .content {
      .text {
        max-width: 800px;
        padding: 0 40px;
        color: #fff;
        line-height: 1.23;
        @media screen and (max-width: 1260px) {
          max-width: 1000px;
        }
        @media screen and (max-width: 600px) {
          padding: 0 80px;
          max-width: none;
        }
        h1 {
          .el-divider {
            width: 40px;
            margin: 0 20px;
            @media screen and (max-width: 600px) {
              width: 80px;
              margin: 0 40px;
            }
          }
          .logo-img {
            height: 55px;
            @media screen and (min-width: 2160px) {
              height: 30px;
            }
            @media screen and (max-width: 768px) {
              height: 80px;
            }
            @media screen and (max-width: 600px) {
              height: 130px;
            }
            @media screen and (max-width: 540px) {
              height: 165px;
            }
          }
        }
        p {
          margin: 15px 0 40px;
          font-weight: 400;
          @media screen and (min-width: 2160px) {
            margin: 15px 0 25px;
          }
          @media screen and (max-width: 600px) {
            margin: 30px 0 80px;
          }
        }
        .learn-more {
          display: inline-block;
          padding: 15px 35px;
          margin: 0;
          background-color: #fff;
          border: 1px solid #ffffff;
          cursor: pointer;
          color: #231f20;
          line-height: 1;
          transition: all 0.2s;
          @media screen and (max-width: 600px) {
            padding: 30px 70px;
          }
          &:hover {
            background-color: transparent;
            color: #fff;
          }
        }
      }
    }
  }
  :deep(.about-tool) {
    padding: 120px 0 90px;
    line-height: 1.1;
    @media screen and (min-width: 2160px) {
      padding: 70px 0 40px;
    }
    @media screen and (max-width: 600px) {
      padding: 140px 0 180px;
    }
    .title {
      margin: 0 0 30px;
      @media screen and (max-width: 600px) {
        margin: 0 0 60px;
      }
    }
    .el-row {
      width: 100%;
      .el-col {
        padding: 30px 10px 20px;
        margin: 0 0 30px;
        box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
          10px 10px 13px rgba(71, 153, 185, 0.1);
        border-radius: 10px;
        @media screen and (min-width: 2160px) {
          padding: 15px 5px 10px;
        }
        @media screen and (max-width: 600px) {
          border-radius: 20px;
          padding: 60px 20px 40px;
          margin: 0 0 60px;
        }
        .content {
          text-align: center;
          .image {
            height: 65px;
            margin: 0 0 10px;
            @media screen and (min-width: 2160px) {
              height: 32px;
              margin: 0;
            }
            @media screen and (max-width: 600px) {
              height: 130px;
              margin: 0 0 20px;
            }
            @media screen and (max-width: 540px) {
              height: 160px;
            }
          }
          .desc {
            justify-content: center;
            min-height: 57.6px;
            padding: 10px 0 15px;
            line-height: 1.2;
            color: #606060;
            word-break: break-word;
            @media screen and (min-width: 2160px) {
              padding: 5px 0 10px;
            }
            @media screen and (max-width: 600px) {
              min-height: 86.4px;
              padding: 20px 0 30px;
            }
            @media screen and (max-width: 540px) {
              min-height: 115.2px;
              padding: 30px 0 45px;
            }
          }
        }
      }
    }
  }
  :deep(.fogMeta-labs) {
    .title {
      padding: 17px 0 25px;
      margin: 0;
      @media screen and (max-width: 600px) {
        padding: 34px 0 68px;
      }
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
        }
      }
    }
    ul {
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      li {
        padding: 0 40px;
        margin: 50px 0;
        line-height: 1;
        text-align: center;
        color: #04020c;
        border-left: 3px solid #04020c;
        &:first-child {
          border: 0;
        }
        @media screen and (min-width: 2160px) {
          margin: 25px 0;
        }
        @media screen and (max-width: 600px) {
          width: 48%;
          padding: 0;
          &:nth-child(2n + 1) {
            border: 0;
          }
        }
        b {
          display: block;
          font-weight: bold;
        }
      }
    }
  }
  :deep(.computing-service) {
    padding: 100px 0 80px;
    margin: 0 auto 60px;
    border-bottom: 2px solid #d3d2d2;
    @media screen and (min-width: 2160px) {
      padding: 50px 0 10px;
      margin: 0 auto 20px;
    }
    @media screen and (max-width: 600px) {
      padding: 200px 0 160px;
      margin: 0 auto 120px;
    }
    .title {
      margin: 0;
    }
    .el-row {
      align-items: center;
      .el-col {
        padding: 0;
        margin: 0;
        color: #fff;
        .img {
          @media screen and (max-width: 767px) {
            max-width: 170px;
          }
        }
        .content {
          padding: 0 0 0 15px;
          @media screen and (min-width: 2160px) {
            padding: 0 0 0 5px;
          }
          @media screen and (max-width: 767px) {
            padding: 50px 0 0;
          }
          .tit {
            padding: 0 0 10px;
            line-height: 1.1;
            @media screen and (max-width: 600px) {
              padding: 0 0 20px;
            }
          }
          .desc {
            font-weight: 400;
            line-height: 1.2;
          }
        }
      }
      &.row-bg {
        padding: 35px 35px;
        margin: 30px 0;
        background-color: #05010f;
        border-radius: 10px;
        @media screen and (min-width: 2160px) {
          padding: 15px 20px;
        }
        @media screen and (max-width: 600px) {
          padding: 70px 100px;
          margin: 60px 0;
          border-radius: 20px;
        }
      }
    }
  }
  :deep(.fog-blockchain) {
    .title {
      padding: 30px 0;
      @media screen and (max-width: 767px) {
        padding: 60px 0;
      }
    }
    .el-tabs {
      width: 100%;
      .el-tabs__header {
        // width: calc(100% + 20px);
        padding: 0 0 5px;
        margin: 0;
        // margin: 0 0 0 -20px;
        .el-tabs__nav-wrap.is-scrollable {
          padding: 0 50px;
          @media screen and (min-width: 2160px) {
            padding: 0 25px;
          }
          @media screen and (max-width: 767px) {
            padding: 0 90px;
          }
        }
        .el-tabs__nav-prev,
        .el-tabs__nav-next {
          width: 50px;
          top: 10%;
          height: 80%;
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: bolder;
          z-index: 9;
          i,
          svg {
            width: 50px;
            height: 50px;
          }
          @media screen and (min-width: 2160px) {
            width: 25px;
            font-size: 12px;
            i,
            svg {
              width: 25px;
              height: 25px;
            }
          }
          @media screen and (max-width: 767px) {
            width: 90px;
            font-size: 48px;
            i,
            svg {
              width: 90px;
              height: 90px;
            }
          }
        }
        .el-tabs__nav-scroll {
          .el-tabs__nav {
            min-width: 100%;
            overflow-x: scroll;
            &::-webkit-scrollbar-track {
              background: #f7f7f7;
            }

            &::-webkit-scrollbar {
              height: 2px;
              background: #fff;
            }

            &::-webkit-scrollbar-thumb {
              background: #fff;
            }
            .el-tabs__item {
              height: auto;
              // min-width: 180px;
              padding: 15px 40px;
              margin: 0 8px 0 0;
              background-color: #f5f9ff;
              text-align: center;
              color: #000000;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              white-space: normal;
              word-break: break-word;
              line-height: 1.1;
              white-space: nowrap;
              @media screen and (min-width: 2160px) {
                padding: 10px 20px;
              }
              @media screen and (max-width: 767px) {
                min-width: 400px;
              }
              @media screen and (max-width: 600px) {
                padding: 30px 80px;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
              }
              &.is-active,
              &:hover {
                background-color: #05010f;
                color: #fff;
              }
              .custom-tabs-label {
                font-weight: 400;
                line-height: 1.1;
              }
            }
          }
        }
        .el-tabs__nav-wrap::after {
          height: 0;
          bottom: 5px;
          background-color: #bdbbbc;
        }
        .el-tabs__active-bar {
          bottom: 0;
          height: 0;
          background: url(../../../assets/images/border.png) no-repeat;
          background-size: 100%;
        }
      }
      .el-tabs__content {
        padding: 50px 0 120px;
        @media screen and (min-width: 2160px) {
          padding: 25px 0 60px;
        }
        .el-row {
          padding: 10px;
          align-items: stretch;
          background-color: #05010f;
          color: #fff;
          @media screen and (max-width: 600px) {
            padding: 20px;
          }
          .el-col {
            padding: 0;
            margin: 0;
            .img {
              border-radius: 12px;
              @media screen and (max-width: 600px) {
                border-radius: 24px;
              }
            }
            .content {
              padding: 30px 0 30px 30px;
              @media screen and (min-width: 2160px) {
                padding: 20px 0 20px 20px;
              }
              @media screen and (max-width: 600px) {
                padding: 60px 30px;
              }
              .tit {
                font-weight: 600;
                line-height: 1.1;
              }
              .el-divider {
                width: 10%;
                height: 6px;
                max-width: 70px;
                margin: 20px 0;
                @media screen and (max-width: 600px) {
                  margin: 40px 0;
                }
              }
              .desc {
                font-weight: 400;
                line-height: 1.55;
              }
            }
          }
        }
      }
    }
  }
  :deep(.meta-os) {
    padding: 0 0 110px;
    @media screen and (min-width: 2160px) {
      padding: 0 0 60px;
    }
    @media screen and (max-width: 600px) {
      padding: 0 0 220px;
    }
    .el-row {
      width: 100%;
      align-items: center;
      .el-col {
        padding: 0;
        margin: 0;
        color: #231f20;
        .abo {
          position: relative;
          .tit {
            position: absolute;
            top: 50%;
            left: 60px;
            margin-top: -20px;
            line-height: 40px;
            color: #fff;
          }
        }
        .content {
          padding: 30px 0 30px 30px;
          @media screen and (min-width: 2160px) {
            padding: 20px 0 20px 20px;
          }
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
            line-height: 1.4;
          }
        }
      }
    }
  }
  :deep(.our-strength) {
    padding: 0;
    .title {
      padding: 34px 0 15px;
      text-align: center;
      @media screen and (max-width: 600px) {
        padding: 68px 0 30px;
      }
    }
    .el-row {
      width: 100%;
      .el-col {
        margin: 40px 0 0;
        text-align: center;
        @media screen and (max-width: 600px) {
          margin: 80px 0 0;
        }
        .content {
          width: calc(100% - 50px);
          height: calc(100% - 50px);
          padding: 35px 10px 15px;
          margin-left: 30px;
          box-shadow: 0px 0px 23px rgba(71, 153, 185, 0.05),
            10px 10px 23px rgba(71, 153, 185, 0.1);
          border-radius: 10px;
          @media screen and (max-width: 768px) {
            width: calc(100% - 150px);
            height: calc(100% - 110px);
            padding: 80px 60px 30px;
            border-radius: 20px;
          }
          @media screen and (max-width: 600px) {
            width: calc(100% - 150px);
            height: calc(100% - 140px);
            padding: 110px 60px 30px;
          }
          &:first-child {
            margin-left: 0;
          }
          .image {
            height: 55px;
            margin: 0 0 20px;
            @media screen and (min-width: 2160px) {
              height: 30px;
              margin: 0 0 5px;
            }
            @media screen and (max-width: 600px) {
              height: 110px;
              margin: 0 0 40px;
            }
            @media screen and (max-width: 540px) {
              height: 130px;
            }
          }
          .tit {
            max-width: 200px;
            min-height: 60.2px;
            padding: 0;
            margin: auto;
            line-height: 1.1;
            color: #000000;
            @media screen and (min-width: 2160px) {
              min-height: 40px;
            }
            @media screen and (max-width: 1260px) {
              max-width: 400px;
            }
            @media screen and (max-width: 600px) {
              max-width: none;
              min-height: 95.7px;
            }
            @media screen and (max-width: 540px) {
              min-height: 127.6px;
            }
          }
          .text {
            padding: 0 0 0 15px;
            text-align: left;
            @media screen and (min-width: 2160px) {
              padding: 0 0 0 10px;
            }
            @media screen and (max-width: 600px) {
              padding: 0 0 0 30px;
            }
            li {
              padding: 0 0 10px;
              line-height: 1.4;
              color: #606060;
              list-style: disc;
              @media screen and (max-width: 600px) {
                padding: 0 0 20px;
              }
            }
          }
        }
      }
    }
  }
  :deep(.swan-partners) {
    padding: 130px 0 80px;
    @media screen and (min-width: 2160px) {
      padding: 100px 0 60px;
    }
    @media screen and (max-width: 600px) {
      padding: 160px 0 160px;
    }
    .title {
      text-align: center;
    }
    .row-bg {
      padding: 40px 0;
      @media screen and (max-width: 600px) {
        padding: 80px 0;
      }
      .el-col {
        padding: 10px 15px;
        @media screen and (min-width: 2160px) {
          padding: 5px 10px;
        }
        @media screen and (max-width: 768px) {
          padding: 20px 22px;
        }
        @media screen and (max-width: 600px) {
          padding: 40px 30px;
        }
        img {
          border-radius: 10px;
          box-shadow: 1px 1px 3px rgba(70, 123, 209, 0.05),
            5px 5px 10px rgba(70, 123, 209, 0.15);
          @media screen and (min-width: 2160px) {
            border-radius: 5px;
          }
          @media screen and (max-width: 768px) {
            box-shadow: 1px 1px 3px rgba(70, 123, 209, 0.05),
              8px 8px 25px rgba(70, 123, 209, 0.15);
          }
          @media screen and (max-width: 600px) {
            border-radius: 20px;
            box-shadow: 1px 1px 3px rgba(70, 123, 209, 0.05),
              10px 10px 50px rgba(70, 123, 209, 0.15);
          }
        }
      }
    }
  }
}
</style>
