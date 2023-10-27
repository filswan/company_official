<template>
  <section id="container-swan">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="oversized-text flex-row">
            {{$t('swan.banner.title')}}
            <el-divider /> <img :src="logoImage" alt="" class="logo-img" />
          </h1>
          <p class="small-text">{{$t('swan.banner.describe')}}</p>
          <div class="learn-more small-large" @click="system.$commonFun.goLink('https://swanchain.io/')">{{$t('public.Learn-More')}}</div>
        </div>
      </div>
    </div>

    <div class="swan-about lang-max flex-row">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
          <img :src="aboutImage" class="img" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="content">
            <p class="title bigtit-text">{{$t('swan.about.title')}}</p>
            <p class="desc describe-small">
              {{$t('swan.about.describe-1')}}
              <br /><br /> {{$t('swan.about.describe-2')}}
            </p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="suite-tools lang-max">
      <div class="title medium-text">{{$t('swan.tools.title')}}</div>
      <div class="content flex-row">
        <div class="text">
          <h1 class="medium-oversized">{{$t('swan.tools.sub-title')}}</h1>
          <p class="small-text">{{$t('swan.tools.describe')}}</p>
          <div class="learn-more describe-small" @click="system.$commonFun.goLink('https://lagrangedao.org')">
            <span class="flex-row">
              {{$t('public.Learn-More')}}
              <el-icon>
                <Right />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="swan-product lang-max flex-row">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" v-for="t in productData" :key="t">
          <div class="content" @click="system.$commonFun.goLink(t.link)">
            <img :src="t.logoImg" class="product-logo img" />
            <div class="image">
              <img :src="t.img" class="image img" />
              <div class="paragraph flex-row">
                <p class="title small-large" v-html="t.title"></p>
              </div>
            </div>
            <div class="text">
              <p class="describe-small" v-for="desc in t.text" :key="desc">{{desc}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="swan-funded lang-max">
      <div class="title medium-text">{{$t('swan.funded')}}</div>
      <CarouselContainer :slide-list="fundedData"></CarouselContainer>
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
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const logoImage = require(`@/assets/images/swan/logo-swan.png`)
    const aboutImage = require(`@/assets/images/swan/swan-about.jpg`)
    const productData = ref([
      {
        img: require(`@/assets/images/swan/swan-product1.jpg`),
        logoImg: require(`@/assets/images/swan/logo-01.png`),
        title: t('swan.product.Multi-Chain'),
        link: 'https://www.multichain.storage/home',
        text: [
          t('swan.product.Multi-Chain-text1'),
          t('swan.product.Multi-Chain-text2')
        ]
      },
      {
        img: require(`@/assets/images/swan/swan-product2.jpg`),
        logoImg: require(`@/assets/images/swan/logo-02.png`),
        title: t('swan.product.Swan-Platform'),
        link: 'https://swanchain.io/product/swan_platform',
        text: [
          t('swan.product.Swan-Platform-text1'),
          t('swan.product.Swan-Platform-text2')
        ]
      },
      {
        img: require(`@/assets/images/swan/swan-product3.jpg`),
        logoImg: require(`@/assets/images/swan/logo-03.png`),
        title: t('swan.product.Swan-Provider'),
        link: 'https://swanchain.io/product/swan_provider',
        text: [
          t('swan.product.Swan-Provider-text1')
        ]
      },
      {
        img: require(`@/assets/images/swan/swan-product4.jpg`),
        logoImg: require(`@/assets/images/swan/logo-04.png`),
        title: t('swan.product.Swan-Client'),
        link: 'https://swanchain.io/product/swan_client',
        text: [
          t('swan.product.Swan-Client-text1')
        ]
      }
    ])
    const fundedData = ref([
      {
        img: require(`@/assets/images/swan/funded/funded-01.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-02.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-03.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-04.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-05.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-06.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-07.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-08.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-09.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-10.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-11.png`)
      },
      {
        img: require(`@/assets/images/swan/funded/funded-12.png`)
      },
    ])

    onMounted(() => { })
    return {
      system,
      bodyWidth,
      logoImage,
      aboutImage,
      fundedData,
      productData
    }
  }
})
</script>

<style lang="less" scoped>
#container-swan {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .banner {
    position: relative;
    padding: 190px 0;
    background: #171819 url(../../../assets/images/bg-swan.jpg) center no-repeat;
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
          margin: 15px 0 40px;
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
  :deep(.swan-about) {
    padding: 125px 0 105px;
    @media screen and (min-width: 2160px) {
      padding: 70px 0 55px;
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
  :deep(.suite-tools) {
    padding: 0 0 60px;
    line-height: 1.1;
    @media screen and (min-width: 2160px) {
      padding: 0 0 30px;
    }
    @media screen and (max-width: 600px) {
      padding: 0 0 150px;
    }
    .title {
      padding: 25px 0;
      margin: 0 0 30px;
      border-bottom: 2px solid #bdbbbc;
      @media screen and (min-width: 2160px) {
        padding: 15px 0;
      }
      @media screen and (max-width: 600px) {
        padding: 50px 0;
        margin: 0 0 60px;
      }
    }
    .content {
      padding: 50px 75px 40px;
      background: url(../../../assets/images/swan/swan-bg.jpg) center no-repeat;
      background-size: cover;
      @media screen and (min-width: 2160px) {
        padding: 20px 45px;
      }
      .text {
        max-width: 750px;
        color: #fff;
        line-height: 1.23;
        @media screen and (max-width: 1260px) {
          max-width: 950px;
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
          line-height: 1.3;
          @media screen and (min-width: 2160px) {
            margin: 10px 0 25px;
          }
          @media screen and (max-width: 600px) {
            margin: 40px 0 70px;
          }
        }
        .learn-more {
          display: inline-block;
          padding: 15px 20px;
          margin: 0;
          background-color: #fff;
          border: 1px solid #ffffff;
          cursor: pointer;
          color: #231f20;
          border-radius: 50px;
          line-height: 1;
          transition: all 0.2s;
          @media screen and (min-width: 2160px) {
            padding: 5px 15px;
          }
          @media screen and (max-width: 600px) {
            padding: 30px 40px;
          }
          &:hover {
            background-color: transparent;
            color: #fff;
          }
          .el-icon {
            margin: 0 0 0 20px;
            font-size: 20px;
            @media screen and (max-width: 600px) {
              font-size: 50px;
            }
          }
        }
      }
    }
  }
  :deep(.swan-product) {
    padding: 0;
    .el-row {
      width: 100%;
      .el-col {
        padding: 0;
        margin: 100px 0 0;
        background-color: transparent;
        border: 2px solid #7d8187;
        border-top: 0;
        border-top-left-radius: 21px;
        border-top-right-radius: 21px;
        border-bottom-left-radius: 11px;
        border-bottom-right-radius: 11px;
        cursor: pointer;
        @media screen and (min-width: 2160px) {
          margin: 70px 0 0;
          border-radius: 21px;
        }
        @media screen and (max-width: 600px) {
          margin: 290px 0 0;
          border-top-left-radius: 41px;
          border-top-right-radius: 41px;
          border-bottom-left-radius: 31px;
          border-bottom-right-radius: 31px;
        }
        &:hover {
          box-shadow: 0px 0px 23px rgba(71, 153, 185, 0.5);
        }
        .content {
          position: relative;
          .product-logo {
            position: absolute;
            width: 90px;
            height: 90px;
            left: 50%;
            top: -45px;
            margin-left: -45px;
            z-index: 9;
            @media screen and (min-width: 2160px) {
              width: 45px;
              height: 45px;
              top: -28px;
              margin-left: -28px;
            }
            @media screen and (max-width: 600px) {
              width: 180px;
              height: 180px;
              top: -90px;
              margin-left: -90px;
            }
          }
          .image {
            position: relative;
            margin: 0 auto;
            border-top-left-radius: 21px;
            border-top-right-radius: 21px;
            @media screen and (max-width: 600px) {
              border-top-left-radius: 41px;
              border-top-right-radius: 41px;
            }
            .paragraph {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              z-index: 9;
              .title {
                padding: 0 0 0 50px;
                font-style: italic;
                font-weight: 900;
                line-height: 1.1;
                color: #fff;
                cursor: pointer;
                @media screen and (min-width: 2160px) {
                  padding: 0 0 0 25px;
                }
                @media screen and (max-width: 600px) {
                  padding: 0 50px;
                }
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
          .text {
            padding: 25px 30px;
            @media screen and (min-width: 2160px) {
              padding: 15px 20px;
            }
            @media screen and (max-width: 600px) {
              padding: 50px 60px;
            }
            p {
              padding: 0 0 15px;
              line-height: 1.3;
              @media screen and (max-width: 600px) {
                padding: 0 0 30px;
              }
            }
          }
        }
      }
    }
  }
  :deep(.swan-funded) {
    padding: 105px 0 70px;
    @media screen and (min-width: 2160px) {
      padding: 50px 0 35px;
    }
    @media screen and (max-width: 600px) {
      padding: 210px 0 140px;
    }
    .title {
      padding: 20px 0;
      border-bottom: 2px solid #bdbbbc;
      text-align: center;
      @media screen and (max-width: 600px) {
        padding: 40px 0;
      }
    }
    .row-bg {
      padding: 45px 0 35px;
      @media screen and (min-width: 2160px) {
        padding: 25px 0 75px;
      }
      @media screen and (max-width: 600px) {
        padding: 100px 0 70px;
      }
      .el-col {
        margin-top: -10px;
        @media screen and (min-width: 2160px) {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
