<template>
  <section id="container-nebulablock">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="oversized-text flex-row">
            {{$t('nebulaBlock.banner.title')}}
            <el-divider /> <img :src="logoImage" alt="" class="logo-img" /></h1>
          <p class="small-large" v-html="$t('nebulaBlock.banner.describe')"></p>
          <div class="learn-more small-large" @click="system.$commonFun.goLink('https://www.nebulablock.com')">{{$t('public.Learn-More')}}</div>
        </div>
      </div>
    </div>

    <div class="nebula-about lang-max">
      <div class="content flex-row">
        <div class="text">
          <h1 class="bigtit-text">{{$t('nebulaBlock.about.title')}}</h1>
          <p class="describe-small">{{$t('nebulaBlock.about.describe')}}</p>
        </div>
      </div>
    </div>

    <div class="What-We-Have lang-max">
      <div class="title medium-text">{{$t('nebulaBlock.WhatWeHave.title')}}</div>
      <el-row class="row-bg">
        <el-col v-for="we in wehaveData" :key="we">
          <div class="content">
            <p class="tit small-large">{{we.title}}</p>
            <p class="desc describe-small">{{we.desc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="What-We-Do lang-max">
      <div class="title">
        <p class="small-large">{{$t('nebulaBlock.portfolio.title')}}</p>
      </div>
      <div class="carousel-container">
        <el-row class="row-bg" justify="space-between">
          <el-col :xs="24" :sm="8" :md="11" :lg="11" :xl="11" class="flex-row">
            <div class="content">
              <p class="headline medium-large" v-html="$t('nebulaBlock.portfolio.describe')"></p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="15" :md="12" :lg="12" :xl="12">
            <el-carousel :height="carouselHeight" trigger="click" :interval="10000" :direction="bodyWidth" type="card" :autoplay="true">
              <el-carousel-item v-for="d in weDoData" :key="d">
                <div class="content">
                  <p class="tit small-text">{{d.title}}</p>
                  <p class="desc small-18">{{d.desc}}</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="our-value lang-max">
      <div class="title">
        <p class="medium-text">{{$t('nebulaBlock.ourValues.title')}}</p>
        <p class="small-large">{{$t('nebulaBlock.ourValues.describe')}}</p>
      </div>
      <el-row class="row-bg" :gutter="35" justify="space-between">
        <el-col v-for="value in ourValueData" :key="value">
          <div class="content">
            <img :src="value.img" class="image" />
            <p class="tit small-text">{{value.title}}</p>
            <p class="desc small-18">{{value.desc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="can-content">
      <div class="title lang-max">
        <p class="medium-text">{{$t('nebulaBlock.DataCenter.title')}}</p>
      </div>
      <div class="introduction bg flex-row">
        <el-row class="lang-max" :gutter="65" justify="center">
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="flex-row list-img">
              <div class="left">
                <div class="content flex-row">
                  <div class="tit describe">CAN-1</div>
                  <div>
                    <p class="small-18">WORLD’S
                      <span>#1</span>
                    </p>
                    <p class="small-18">DATA CENTER OPERATOR</p>
                  </div>
                </div>
                <img :src="introduImg01" class="image img" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="flex-row list-img">
              <div class="left">
                <div class="content flex-row">
                  <div class="tit describe">CAN-2</div>
                  <div>
                    <p class="small-18">FULLY CUSTOMIZABLE</p>
                    <p class="small-18">DATA CENTER</p>
                  </div>
                </div>
                <img :src="introduImg02" class="image img" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="flex-row list-img">
              <div class="left">
                <div class="content flex-row">
                  <div class="tit describe">RAL</div>
                  <div>
                    <p class="small-18">
                      <span>RAL STATE-OF-THE-ART</span>
                    </p>
                    <p class="small-18">RALEIGH DATA CENTER</p>
                  </div>
                </div>
                <img :src="introduImg03" class="image img" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="introduction flex flex-row">
        <el-row class="lang-max" :gutter="65" justify="center">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="content content-stretch flex-row">
              <div class="subtit describe-small">
                {{$t('nebulaBlock.DataCenter.text1')}}
              </div>
              <div class="subtit describe-small">
                {{$t('nebulaBlock.DataCenter.text2')}}
              </div>
              <div class="text flex-row">
                <div class="small-18">{{$t('nebulaBlock.DataCenter.text3')}}</div>
                <ul class="flex-row">
                  <li class="small-min" v-for="soc in introduText" :key="soc">{{soc}}</li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <div class="content content-stretch">
              <div class="subtit describe-small">
                BGP DATA CENTERS
              </div>
              <el-row class="data-area" :gutter="35" justify="space-between">
                <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="(datas, d) in dataCenterData" :key="d">
                  <div class="content">
                    <p :class="{'tit small-text':true, 'describe': d === 1 || d === 3 }">{{datas.title}}</p>
                    <p class="desc small-ultra">{{datas.desc}}</p>
                  </div>
                </el-col>
              </el-row>
              <el-row class="logo-area">
                <el-col v-for="center in centersData" :key="center">
                  <img :src="center.img" class="img" />
                </el-col>
                <el-col class="text-service flex-row">
                  <div class="small-ultra">WEB3 DATA CENTER SERVICES</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="our-clients lang-max">
      <div class="title medium-text">{{$t('nebulaBlock.OurClients')}}</div>
      <CarouselContainer :slide-list="clientsData" :gutterValue="20"></CarouselContainer>
    </div>

    <div class="our-clients lang-max">
      <div class="title medium-text">{{$t('nebulaBlock.Partners')}}</div>
      <CarouselContainer :slide-list="partnersData" :gutterValue="20"></CarouselContainer>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import CarouselContainer from '@/components/CarouselContainer.vue'
import {
  Right
} from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n"
export default defineComponent({
  components: {
    Right, CarouselContainer
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth > 768 ? 'vertical' : 'horizontal')
    const carouselHeight = ref(document.body.clientWidth >= 1600 ? '550px' : document.body.clientWidth <= 768 ? '300px' : '400px')
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const logoImage = require(`@/assets/images/nebulablock/logo-nebulablock.png`)
    const introduImg01 = require(`@/assets/images/nebulablock/can-01.png`)
    const introduImg02 = require(`@/assets/images/nebulablock/can-02.jpg`)
    const introduImg03 = require(`@/assets/images/nebulablock/can-03.png`)
    const wehaveData = ref([
      {
        title: '4',
        desc: t('nebulaBlock.WhatWeHave.Data-Centers')
      },
      {
        title: '75 million',
        desc: t('nebulaBlock.WhatWeHave.Asset-management')
      },
      {
        title: '800+',
        desc: t('nebulaBlock.WhatWeHave.GPUs')
      },
      {
        title: '3000+',
        desc: t('nebulaBlock.WhatWeHave.Servers')
      },
      {
        title: '500+',
        desc: t('nebulaBlock.WhatWeHave.Cabinets')
      },
      {
        title: '70+',
        desc: t('nebulaBlock.WhatWeHave.Countries-supply-chain')
      },
      {
        title: '6+',
        desc: t('nebulaBlock.WhatWeHave.Language')
      },
      {
        title: '10+',
        desc: t('nebulaBlock.WhatWeHave.Blockchains')
      },
      {
        title: '8MWs',
        desc: t('nebulaBlock.WhatWeHave.Power')
      },
      {
        title: '700+',
        desc: t('nebulaBlock.WhatWeHave.PB-Storage')
      },
    ])
    const clientsData = ref([
      {
        img: require(`@/assets/images/nebulablock/clients/clients-01.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-02.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-03.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-04.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-05.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-06.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-07.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-08.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-09.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-10.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-11.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-12.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-13.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-14.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-15.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-16.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-17.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/clients/clients-18.png`)
      },
    ])
    const partnersData = ref([
      {
        img: require(`@/assets/images/nebulablock/partners/partners-01.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-02.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-03.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-04.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-05.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-06.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-07.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-08.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-09.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-10.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-12.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-13.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-14.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-15.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-16.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-17.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-18.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-19.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-20.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-21.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-22.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-23.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-25.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/partners/partners-26.png`)
      },
    ])
    const weDoData = ref([
      {
        title: t('nebulaBlock.portfolio.carousel.Decentralized-Computing'),
        desc: t('nebulaBlock.portfolio.carousel.Decentralized-Computing-describe')
      },
      {
        title: t('nebulaBlock.portfolio.carousel.Data-Center-Services'),
        desc: t('nebulaBlock.portfolio.carousel.Data-Center-Services-describe')
      },
      {
        title: t('nebulaBlock.portfolio.carousel.RPC-Node-Services'),
        desc: t('nebulaBlock.portfolio.carousel.RPC-Node-Services-describe')
      }
    ])
    const ourValueData = ref([
      {
        img: require(`@/assets/images/nebulablock/value-04.png`),
        title: t('nebulaBlock.ourValues.data.Security'),
        desc: t('nebulaBlock.ourValues.data.Security-describe')
      },
      {
        img: require(`@/assets/images/nebulablock/value-02.png`),
        title: t('nebulaBlock.ourValues.data.Customer-Centric'),
        desc: t('nebulaBlock.ourValues.data.Customer-Centric-describe')
      },
      {
        img: require(`@/assets/images/nebulablock/value-03.png`),
        title: t('nebulaBlock.ourValues.data.Best-Economics'),
        desc: t('nebulaBlock.ourValues.data.Best-Economics-describe')
      },
      {
        img: require(`@/assets/images/nebulablock/value-01.png`),
        title: t('nebulaBlock.ourValues.data.Innovation'),
        desc: t('nebulaBlock.ourValues.data.Innovation-describe')
      },
      {
        img: require(`@/assets/images/nebulablock/value-05.png`),
        title: t('nebulaBlock.ourValues.data.Collaboration'),
        desc: t('nebulaBlock.ourValues.data.Collaboration-describe')
      }
    ])
    const introduText = ref([
      'SOC 1 Type II',
      'SOC 2 Type II',
      'HIPAA',
      'SOC 2 + HITRUST',
      'GLBA',
      'PCI-DSS1',
      'NIST SP 800-53 rev 41',
    ])
    const centersData = ref([
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-01.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-02.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-03.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-04.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-05.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-06.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-07.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-08.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-09.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-10.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-11.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-12.png`)
      },
      {
        img: require(`@/assets/images/nebulablock/dataCenters/dataCenters-13.png`)
      },
    ])
    const dataCenterData = ref([
      {
        title: '100+',
        desc: 'Directly connects to all major clouds'
      },
      {
        title: 'Below 10ms',
        desc: 'Ultra-low latency'
      },
      {
        title: '2,900+',
        desc: 'Cloud & IT providers'
      },
      {
        title: '35',
        desc: 'Top-tier castern american operators'
      },
    ])

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      carouselHeight,
      logoImage,
      clientsData,
      wehaveData,
      weDoData,
      ourValueData,
      introduImg01,
      introduImg02,
      introduImg03,
      introduText,
      centersData,
      dataCenterData,
      partnersData
    }
  }
})
</script>

<style lang="less" scoped>
#container-nebulablock {
  padding: 0 0 130px;
  background: #fff url(../../../assets/images/nebulablock/background-image.jpg)
    center bottom no-repeat;
  background-size: 65%;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  @media screen and (min-width: 2160px) {
    padding: 0 0 80px;
  }
  .banner {
    position: relative;
    padding: 190px 0;
    background: #171819 url(../../../assets/images/bg-nebulablock.jpg) center
      right no-repeat;
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
        color: #fff;
        line-height: 1.23;
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
          max-width: 800px;
          margin: 15px 0 40px;
          font-weight: 400;
          @media screen and (min-width: 2160px) {
            margin: 15px 0 25px;
          }
          @media screen and (max-width: 1260px) {
            max-width: 1000px;
          }
          @media screen and (max-width: 600px) {
            max-width: none;
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
  :deep(.nebula-about) {
    padding: 130px 0 90px;
    line-height: 1.1;
    @media screen and (min-width: 2160px) {
      padding: 90px 0 60px;
    }
    @media screen and (max-width: 600px) {
      padding: 260 0 180px;
    }
    .content {
      padding: 40px 70px 0;
      background: url(../../../assets/images/nebulablock/about-bg01.jpg) center
        no-repeat;
      background-size: cover;
      @media screen and (min-width: 2160px) {
        padding: 20px 30px 0;
      }
      @media screen and (max-width: 600px) {
        padding: 80px 140px 0;
      }
      .text {
        max-width: 760px;
        color: #fff;
        line-height: 1.23;
        @media screen and (max-width: 1260px) {
          max-width: 960px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        h1 {
          padding: 10px 0;
          @media screen and (max-width: 600px) {
            line-height: 1.1;
          }
        }
        p {
          margin: 20px 0 35px;
          font-weight: 400;
          line-height: 1.4;
          @media screen and (max-width: 600px) {
            margin: 40px 0 70px;
          }
        }
      }
    }
  }
  :deep(.What-We-Have) {
    padding: 0;
    .title {
      padding: 30px 0;
      @media screen and (max-width: 600px) {
        padding: 60px 0;
      }
    }
    .el-row {
      width: calc(100% + 26px);
      padding: 0;
      margin-left: -13px;
      .el-col {
        max-width: 20%;
        flex: 0 0 20%;
        padding: 0 13px;
        margin: 0 0 23px;
        @media screen and (max-width: 768px) {
          max-width: 25%;
          flex: 0 0 25%;
          margin: 0 0 46px;
        }
        @media screen and (max-width: 600px) {
          max-width: 33.33%;
          flex: 0 0 33.33%;
        }
        @media screen and (max-width: 540px) {
          max-width: 50%;
          flex: 0 0 50%;
        }
        .content {
          position: relative;
          height: calc(100% - 30px);
          padding: 25px 10px 5px;
          border: 2px solid #a9b2ce;
          border-radius: 10px;
          text-align: center;
          // box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
          //   10px 10px 13px rgba(71, 153, 185, 0.1);
          @media screen and (min-width: 2160px) {
            height: calc(100% - 20px);
            padding: 15px 5px 5px;
          }
          @media screen and (max-width: 767px) {
            height: calc(100% - 60px);
            padding: 50px 20px 1px;
            border-radius: 20px;
          }
          &::before {
            position: absolute;
            content: "";
            right: -10px;
            top: 20px;
            bottom: 20px;
            width: 9px;
            background-color: rgba(177, 193, 239, 0.5);
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            @media screen and (max-width: 600px) {
              right: -16px;
              top: 20px;
              bottom: 20px;
              width: 15px;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            }
          }
          .tit {
            padding: 0 0 5px;
            line-height: 1.1;
            color: #263472;
            @media screen and (max-width: 600px) {
              padding: 0 0 10px;
            }
          }
          .desc {
            min-height: 44px;
            line-height: 1.1;
            color: #827f86;
            text-transform: capitalize;
            @media screen and (min-width: 2160px) {
              min-height: 22px;
            }
            @media screen and (max-width: 600px) {
              min-height: 66px;
            }
            @media screen and (max-width: 540px) {
              min-height: 88px;
            }
          }
        }
      }
    }
  }
  :deep(.What-We-Do) {
    padding: 140px 0 15px;
    @media screen and (min-width: 2160px) {
      padding: 100px 0 10px;
    }
    @media screen and (max-width: 600px) {
      padding: 40px 0 30px;
    }
    .title {
      border-bottom: 2px solid #d3d2d2;
      .title-text {
        padding: 0;
        @media screen and (max-width: 600px) {
          padding: 0;
        }
      }
      .small-large,
      .small-text {
        max-width: 1000px;
        padding: 15px 0 20px;
        font-weight: 400;
        line-height: 1.1;
        @media screen and (max-width: 1260px) {
          max-width: 1200px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
      }
    }
    .carousel-container {
      padding: 80px 0 40px;
      .el-row {
        .el-col {
          .el-carousel {
            overflow: inherit;
            @media screen and (max-width: 767px) {
              padding-top: 400px;
            }
            .el-carousel__item {
              display: flex;
              align-items: center;
              background-color: #263572;
              color: #fff;
              opacity: 0.3;
              border-radius: 15px;
              @media screen and (max-width: 767px) {
                border-radius: 30px;
              }
              &.is-active {
                opacity: 1;
              }
            }
            .el-carousel__indicators {
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              top: 50%;
              bottom: auto;
              right: 115%;
              left: auto;
              width: 125px;
              height: 254px;
              transform: translateY(-50%);
              background: url(../../../assets/images/nebulablock/background-image02.png)
                no-repeat center right;
              background-size: 100%;
              @media screen and (min-width: 2160px) {
                width: 100px;
                height: 202px;
              }
              @media screen and (max-width: 1024px) {
                width: 155px;
                height: 314px;
                right: 102%;
              }
              @media screen and (max-width: 992px) {
                right: 105%;
              }
              @media screen and (max-width: 767px) {
                width: 230px;
                height: 465px;
                margin-right: -115px;
                right: 50%;
                top: -3%;
                transform: rotate(90deg);
              }
              @media screen and (max-width: 600px) {
                width: 300px;
                height: 607px;
                margin-right: -150px;
                top: -5%;
              }
              li {
                position: relative;
                width: 100%;
                flex: 0 33.33%;
                padding: 0;
                .el-carousel__button {
                  display: none;
                }
                &::before {
                  position: absolute;
                  content: "A";
                  color: #fff;
                  font-size: 30px;
                  z-index: 9;
                  @media screen and (max-width: 767px) {
                    transform: rotate(-90deg);
                    font-size: 45px;
                  }
                  @media screen and (max-width: 600px) {
                    font-size: 60px;
                  }
                }
                // &.is-active {
                //   &::before {
                //     color: #fff;
                //   }
                // }
                &:nth-child(1) {
                  &::before {
                    content: "A";
                    left: 28%;
                    top: 32%;
                  }
                }
                &:nth-child(2) {
                  &::before {
                    content: "B";
                    right: 15%;
                    top: 35%;
                  }
                }
                &:nth-child(3) {
                  &::before {
                    content: "C";
                    left: 28%;
                    bottom: 23%;
                  }
                }
              }
            }
          }
          .content {
            padding: 0 35px;
            @media screen and (min-width: 2160px) {
              padding: 0 10px;
            }
            .tit {
              position: relative;
              padding: 0 0 10px 21px;
              line-height: 1.1;
              @media screen and (min-width: 2160px) {
                padding: 0 0 10px 16px;
              }
              @media screen and (max-width: 768px) {
                padding: 0 0 20px 42px;
              }
              @media screen and (max-width: 600px) {
                padding: 0 0 20px 62px;
              }
              &::before {
                position: absolute;
                content: "";
                left: 0;
                top: 6px;
                width: 6px;
                height: 6px;
                border: 4px solid #fff;
                border-radius: 20px;
                @media screen and (min-width: 2160px) {
                  top: 0;
                  width: 4px;
                  height: 4px;
                }
                @media screen and (max-width: 768px) {
                  top: 12px;
                  width: 12px;
                  height: 12px;
                  border: 6px solid #fff;
                }
                @media screen and (max-width: 600px) {
                  top: 14px;
                  width: 20px;
                  height: 20px;
                  border: 12px solid #fff;
                }
              }
            }
            .headline {
              padding: 0 140px 0 0;
              text-align: left;
              font-weight: 400;
              line-height: 1.1;
              @media screen and (min-width: 2160px) {
                padding: 0 100px 0 0;
              }
            }
            .desc {
              text-align: left;
              font-weight: 400;
              line-height: 1.25;
            }
          }
        }
      }
    }
  }
  :deep(.our-value) {
    padding: 60px 0;
    @media screen and (min-width: 2160px) {
      padding: 30px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 120px 0;
    }
    .title {
      border-bottom: 2px solid #d3d2d2;
      .title-text {
        padding: 0;
        @media screen and (max-width: 600px) {
          padding: 0;
        }
      }
      .small-large,
      .small-text {
        max-width: 1000px;
        padding: 15px 0 20px;
        font-weight: 400;
        line-height: 1.1;
        @media screen and (max-width: 1260px) {
          max-width: 1200px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
      }
    }
    .el-row {
      position: relative;
      padding: 65px 0 0;
      @media screen and (min-width: 2160px) {
        padding: 35px 0 0;
      }
      @media screen and (max-width: 600px) {
        padding: 130px 0 0;
      }
      .el-col {
        max-width: 20%;
        flex: 0 0 20%;
        padding: 0 22px;
        margin: 0 0 23px;
        @media screen and (min-width: 2160px) {
          padding: 0 11px;
          margin: 0 0 13px;
        }
        @media screen and (max-width: 768px) {
          max-width: 25%;
          flex: 0 0 25%;
          margin: 0 0 46px;
        }
        @media screen and (max-width: 767px) {
          margin: 60px auto !important;
        }
        @media screen and (max-width: 600px) {
          max-width: 33.33%;
          flex: 0 0 33.33%;
        }
        @media screen and (max-width: 540px) {
          max-width: 50%;
          flex: 0 0 50%;
        }
        &:nth-child(2n + 1) {
          margin-top: 75px;
          @media screen and (min-width: 2160px) {
            margin-top: 35px;
          }
          @media screen and (max-width: 600px) {
            margin-top: 150px;
          }
        }
        .content {
          padding: 25px 20px;
          background-color: #263572;
          border: 1px solid #263572;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
            10px 10px 13px rgba(71, 153, 185, 0.1);
          color: #fff;
          @media screen and (min-width: 2160px) {
            padding: 15px 10px;
          }
          @media screen and (max-width: 767px) {
            padding: 50px 40px;
            border-radius: 30px;
          }
          .image {
            height: 35px;
            @media screen and (min-width: 2160px) {
              height: 20px;
            }
            @media screen and (max-width: 600px) {
              height: 70px;
            }
            @media screen and (max-width: 540px) {
              height: 100px;
            }
          }
          .tit {
            padding: 15px 0 15px;
            font-weight: 600;
            line-height: 1.1;
            text-align: center;
            @media screen and (min-width: 2160px) {
              padding: 10px 0 10px;
            }
            @media screen and (max-width: 600px) {
              padding: 50px 0 30px;
            }
          }
          .desc {
            font-weight: 400;
          }
        }
      }
    }
  }
  :deep(.can-content) {
    padding: 0 0 20px;
    @media screen and (max-width: 600px) {
      padding: 0 0 40px;
    }
    .title {
      padding: 15px 0 20px;
      border-bottom: 2px solid #d3d2d2;
    }
    .introduction {
      justify-content: center;
      &.bg {
        padding: 60px 0 5px;
        background: url(../../../assets/images/nebulablock/background-image01.jpg)
          no-repeat center;
        background-size: 100% 100%;
        @media screen and (min-width: 2160px) {
          padding: 30px 0 5px;
        }
      }
      .el-row {
        @media screen and (max-width: 1200px) {
          width: 100%;
          padding: 0;
        }
      }
      .image {
        margin: 40px auto 35px;
        border-radius: 10px;
        @media screen and (min-width: 2160px) {
          margin: 20px auto 15px;
        }
        @media screen and (max-width: 600px) {
          margin: 80px auto 70px;
        }
      }
      .content {
        padding: 0;
        text-transform: uppercase;
        line-height: 1;
        .tit {
          padding: 2px 10px 0px;
          margin: 0 8px 0 0;
          background-color: #253c82;
          font-weight: 600;
          border-radius: 8px;
          color: #fff;
          @media screen and (max-width: 600px) {
            padding: 20px 30px;
            border-radius: 20px;
          }
        }
        p {
          padding: 0;
          color: #060707;
          line-height: 1.1;
          span {
            color: #253c82;
          }
          &:first-child {
            font-weight: bold;
          }
        }
        .subtit {
          position: relative;
          padding: 30px 0 10px 25px;
          font-weight: bold;
          color: #253c82;
          line-height: 1.2;
          @media screen and (max-width: 600px) {
            padding: 60px 0 20px 50px;
          }
          &::before {
            position: absolute;
            content: "";
            top: 31px;
            left: 0;
            width: 15px;
            height: 15px;
            background-color: #263572;
            border-radius: 30px;
            @media screen and (max-width: 600px) {
              top: 62px;
              width: 30px;
              height: 30px;
            }
            @media screen and (max-width: 540px) {
              top: 66.75px;
            }
          }
        }
        .text {
          padding: 5px 0 20px 25px;
          text-transform: initial;
          @media screen and (max-width: 768px) {
            padding: 10px 0 40px 25px;
          }
          @media screen and (max-width: 600px) {
            padding: 15px 0 60px 50px;
          }
          .describe {
            line-height: 1.2;
          }
          ul {
            flex-wrap: wrap;
            justify-content: flex-start;
            li {
              padding: 6px 15px 3px;
              margin: 10px 7px 0 0;
              background-color: #253c82;
              font-weight: 400;
              border-radius: 40px;
              color: #fff;
              white-space: nowrap;
              @media screen and (max-width: 600px) {
                padding: 12px 30px 6px;
                margin: 20px 14px 0 0;
              }
            }
          }
        }
        .data-area {
          padding: 20px 0 0 0;
          @media screen and (max-width: 600px) {
            padding: 40px 0 0 0;
          }
          .el-col {
            position: relative;
            margin: 0 0 50px;
            @media screen and (min-width: 2160px) {
              margin: 0 0 25px;
            }
            @media screen and (max-width: 767px) {
              margin: 0 0 100px;
              &:nth-child(2n + 1) {
                &::before {
                  left: 50%;
                }
                .content {
                  &::before {
                    display: none;
                  }
                }
              }
              &:nth-child(2n + 2) {
                &::before {
                  right: 50%;
                }
                .content {
                  &::after {
                    display: none;
                  }
                }
              }
            }
            &::before {
              position: absolute;
              content: "";
              top: 50%;
              left: 0;
              right: 0;
              height: 1px;
              background-color: #8e9abe;
              z-index: 1;
            }
            &:first-child {
              &::before {
                left: 50%;
              }
              .content {
                &::before {
                  display: none;
                }
              }
            }
            &:last-child {
              &::before {
                right: 50%;
              }
              .content {
                &::after {
                  display: none;
                }
              }
            }
            .content {
              position: relative;
              height: calc(100% - 25px);
              padding: 15px 10px 10px;
              background-color: #fff;
              border: 1px solid #909fc4;
              border-radius: 10px;
              text-align: left;
              box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
                10px 10px 13px rgba(71, 153, 185, 0.1);
              text-transform: none;
              z-index: 9;
              @media screen and (min-width: 2160px) {
                height: calc(100% - 15px);
                padding: 10px 5px 5px;
              }
              @media screen and (max-width: 767px) {
                height: calc(100% - 50px);
                padding: 30px 20px 20px;
                border-radius: 20px;
              }
              &::before,
              &::after {
                position: absolute;
                content: "";
                top: 50%;
                left: 0;
                width: 11px;
                height: 11px;
                margin: -6px 0 0 -6px;
                background-color: #fff;
                border: 1px solid #909fc4;
                border-radius: 16px;
                z-index: 10;
                @media screen and (min-width: 2160px) {
                  width: 6px;
                  height: 6px;
                  margin: -3px 0 0 -3px;
                }
              }
              &::after {
                left: auto;
                right: 0;
                margin: -6px -6px 0 0;
                @media screen and (min-width: 2160px) {
                  margin: -3px -3px 0 0;
                }
              }
              .tit {
                padding: 0 0 6px;
                margin: 0;
                background-color: transparent;
                font-weight: bold;
                line-height: 23px;
                color: #00269f;
                @media screen and (max-width: 600px) {
                  padding: 0 0 12px;
                  line-height: 34px;
                }
                @media screen and (max-width: 540px) {
                  line-height: 46px;
                  padding-bottom: 25px;
                }
              }
              .desc {
                min-height: 26.4px;
                line-height: 1.1;
                color: #05010f;
                @media screen and (max-width: 600px) {
                  min-height: 39.6px;
                }
                @media screen and (max-width: 540px) {
                  min-height: 52.8px;
                }
              }
            }
          }
        }
        .logo-area {
          // width: 100%;
          // margin: 0 0 0 10px;
          .el-col {
            max-width: 20%;
            flex: 0 0 20%;
            padding: 0;
            margin: 0;
            &.text-service {
              max-width: 40%;
              flex: 0 0 40%;
              font-style: italic;
              font-weight: bolder;
              color: #253c82;
              justify-content: center;
              @media screen and (max-width: 768px) {
                max-width: 50%;
                flex: 0 0 50%;
              }
              @media screen and (max-width: 600px) {
                max-width: 66%;
                flex: 0 0 66%;
              }
              @media screen and (max-width: 540px) {
                max-width: 100%;
                flex: 0 0 100%;
              }
            }
            @media screen and (max-width: 768px) {
              max-width: 25%;
              flex: 0 0 25%;
              margin: 0;
            }
            @media screen and (max-width: 600px) {
              max-width: 33.33%;
              flex: 0 0 33.33%;
            }
            @media screen and (max-width: 540px) {
              max-width: 50%;
              flex: 0 0 50%;
            }
            .content {
              height: calc(100% - 40px);
              padding: 30px 10px 10px;
              border: 1px solid #909fc4;
              border-radius: 20px;
              text-align: center;
              box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
                10px 10px 13px rgba(71, 153, 185, 0.1);
              @media screen and (max-width: 767px) {
                height: calc(100% - 70px);
                padding: 50px 20px 20px;
                border-radius: 40px;
              }
            }
          }
        }
      }
      .list-img {
        flex-wrap: wrap;
        justify-content: space-between;
        .left {
          @media screen and (max-width: 992px) and (min-width: 768px) {
            max-width: 500px;
          }
        }
      }
    }
  }
  :deep(.our-clients) {
    padding: 95px 0 0;
    @media screen and (min-width: 2160px) {
      padding: 55px 0 0;
    }
    @media screen and (max-width: 600px) {
      padding: 160px 0 0;
    }
    .title {
      text-align: center;
    }
    .row-bg {
      padding: 50px 0 35px;
      @media screen and (max-width: 600px) {
        padding: 100px 0 70px;
      }
    }
  }
}
</style>
