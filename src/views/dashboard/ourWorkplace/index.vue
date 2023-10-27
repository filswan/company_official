<template>
  <section id="container-workplace">
    <div class="banner"></div>

    <div class="address-style lang-max">
      <div class="text">
        <div class="tit title-text">{{$t('ourWorkplace.title')}}</div>
        <p class="desc medium-large">{{$t('ourWorkplace.describe')}}</p>
      </div>

      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="t in addressData" :key="t" :label="t.name" :name="t.name">
          <div class="abo flex-row" :style="{'background-image': `url(${t.img})`}">
            <div class="content">
              <div class="small-title describe">{{$t('ourWorkplace.city.office')}}</div>
              <div :class="{'big-tit medium-text':true}">{{t.title}}</div>
              <p class="address describe flex-row">
                <i @click="system.$commonFun.goLink(`https://www.google.com/maps/search/?api=1&query=${t.address}`)"></i>
                <span>{{t.address}}</span>
              </p>
              <p :class="{'desc describe flex-row underline':true}" @click="system.$commonFun.goLink(`https://www.google.com/maps/search/?api=1&query=${t.address}`)">
                {{$t('ourWorkplace.city.get-directions')}}
                <el-icon>
                  <CaretRight />
                </el-icon>
              </p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  CaretRight
} from '@element-plus/icons-vue'
import { useI18n } from "vue-i18n"
export default defineComponent({
  components: {
    CaretRight
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const addressData = ref([
      {
        img: require(`@/assets/images/workplace/Montreal.jpg`),
        link: 'https://www.nebulablock.com/',
        name: 'Montreal',
        title: t('ourWorkplace.city.montreal-name'),
        address: t('ourWorkplace.city.montreal-city')
      },
      {
        img: require(`@/assets/images/workplace/Toronto.jpg`),
        link: 'https://swanchain.io/',
        name: 'Toronto',
        title: t('ourWorkplace.city.toronto-name'),
        address: t('ourWorkplace.city.toronto-city')
      },
      {
        img: require(`@/assets/images/workplace/Shanghai.jpg`),
        link: 'https://en.fogmeta.com/',
        name: 'Shanghai',
        title: t('ourWorkplace.city.shanghai-name'),
        address: t('ourWorkplace.city.shanghai-city')
      },
      {
        img: require(`@/assets/images/workplace/Ho-Chi-Minh.jpg`),
        link: '',
        name: 'Ho Chi Minh',
        title: t('ourWorkplace.city.hochiminh-name'),
        address: t('ourWorkplace.city.hochiminh-city')
      }
    ])
    const activeName = ref('Montreal')

    const handleClick = (tab, event) => { }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      addressData,
      activeName,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
#container-workplace {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .banner {
    position: relative;
    padding: 237px 0;
    background: #8a8b86 url(../../../assets/images/bg-workplace.jpg) center
      no-repeat;
    background-size: cover;
    @media screen and (min-width: 2160px) {
      padding: 200px 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 247px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 210px 0;
    }
  }
  :deep(.address-style) {
    padding: 30px 0 100px;
    @media screen and (min-width: 2160px) {
      padding: 15px 0 50px;
    }
    @media screen and (max-width: 600px) {
      padding: 60px 0 200px;
    }
    .text {
      padding: 100px 0 115px;
      @media screen and (min-width: 2160px) {
        padding: 60px 0;
      }
      @media screen and (max-width: 767px) {
        padding: 200px 0 230px;
      }
      .tit {
        padding: 0 0 20px;
        @media screen and (max-width: 767px) {
          padding: 0 0 40px;
        }
      }
      .desc {
        font-weight: 400;
        line-height: 1.23;
      }
    }
    .el-tabs {
      width: 100%;
      .el-tabs__header {
        padding: 0 0 5px;
        margin: 0;
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
          // overflow-x: scroll;
          .el-tabs__nav {
            .el-tabs__item {
              min-width: 160px;
              height: auto;
              padding: 12px 0;
              margin-right: 55px;
              text-align: center;
              font-size: 30px;
              @media screen and (min-width: 2160px) {
                min-width: 80px;
                margin-right: 28px;
              }
              @media screen and (min-width: 2160px) {
                font-size: 15px;
              }
              @media screen and (max-width: 768px) {
                font-size: 45px;
              }
              @media screen and (max-width: 767px) {
                min-width: 360px;
                padding: 24px 0;
              }
              @media screen and (max-width: 600px) {
                font-size: 90px;
              }
              &.is-active,
              &:hover {
                color: #231f20;
              }
            }
          }
        }
        .el-tabs__nav-wrap::after {
          height: 1px;
          bottom: 3px;
          background-color: #929292;
        }
        .el-tabs__active-bar {
          bottom: 0;
          height: 4px;
          background: url(../../../assets/images/border.png) no-repeat;
          background-size: 100% 100%;
        }
      }
      .el-tabs__content {
        padding: 60px 0;
        @media screen and (min-width: 2160px) {
          padding: 30px 0;
        }
        .el-tab-pane {
          .image {
            width: 100%;
            @media screen and (min-width: 2000px) {
              height: 100%;
            }
            @media screen and (max-width: 767px) {
              width: auto;
              height: 100%;
            }
          }
          .abo {
            padding: 40px 57px;
            background-size: cover;
            @media screen and (min-width: 2160px) {
              padding: 20px 28px;
            }
          }
          .content {
            position: relative;
            min-width: 380px;
            padding: 23px 34px;
            background: rgba(255, 255, 255, 0.75)
              url(../../../assets/images/border.png) no-repeat;
            background-size: 100% 4px;
            color: #231f20;
            @media screen and (min-width: 2160px) {
              min-width: 300px;
              padding: 11px 17px;
            }
            @media screen and (max-width: 767px) {
              padding: 46px 68px;
            }
            .small-title {
              color: #cc0000;
            }
            .big-tit {
              padding: 25px 0;
              font-weight: 600;
              @media screen and (min-width: 2160px) {
                padding: 12px 0;
              }
              @media screen and (max-width: 600px) {
                padding: 50px 0;
              }
            }
            .tit {
              padding: 0;
              line-height: 1.1;
            }
            .address {
              flex-wrap: nowrap;
              align-items: flex-start;
              max-width: 240px;
              padding: 0;
              line-height: 1.3;
              @media screen and (max-width: 768px) {
                max-width: 540px;
              }
              @media screen and (max-width: 767px) {
                max-width: none;
              }
              i {
                width: 20px;
                height: 20px;
                margin: 3px 20px 0 0;
                background: url(../../../assets/images/workplace/icon-01.png)
                  no-repeat center;
                background-size: auto 100%;
                cursor: pointer;
                @media screen and (min-width: 2160px) {
                  width: 10px;
                  height: 10px;
                  margin: 1px 10px 0 0;
                }
                @media screen and (max-width: 767px) {
                  width: 40px;
                  height: 40px;
                  margin: 6px 40px 0 0;
                }
              }
              span {
                width: calc(100% - 40px);
                min-height: 114.4px;
                @media screen and (min-width: 2160px) {
                  width: calc(100% - 20px);
                }
                @media screen and (min-width: 2000px) {
                  min-height: 42.9px;
                }
                @media screen and (max-width: 767px) {
                  width: calc(100% - 80px);
                  min-height: 171.6px;
                }
                @media screen and (max-width: 600px) {
                  min-height: 343.2px;
                }
              }
            }
            .desc {
              margin: 40px 40px 10px;
              line-height: 1.1;
              color: #cc0000;
              opacity: 0.4;
              cursor: no-drop;
              &.underline {
                cursor: pointer;
                opacity: 1;
                &:hover {
                  text-decoration: underline;
                }
              }
              @media screen and (min-width: 2000px) {
                margin: 10px 20px 10px;
              }
              @media screen and (max-width: 767px) {
                margin: 80px 80px 20px;
              }
            }
          }
        }
      }
    }

    .el-row {
      .el-col {
        justify-content: space-between;
        padding: 50px 15px;
        &:nth-child(2n + 2) {
          flex-direction: row-reverse;
        }
        @media screen and (min-width: 2160px) {
          padding: 25px 0 10px;
        }
        @media screen and (max-width: 600px) {
          padding: 140px 0 30px;
        }
        .image,
        .content {
          // height: 50px;
          // cursor: pointer;
          // @media screen and (max-width: 600px) {
          //   height: 100px;
          // }
          // @media screen and (max-width: 540px) {
          //   height: 150px;
          // }
          width: 49%;
          @media screen and (max-width: 600px) {
            width: 100%;
          }
        }
        .content {
          position: relative;
          padding: 20px 0;
          color: #231f20;
          @media screen and (max-width: 768px) {
            padding: 40px 0;
          }
          // &::before {
          //   position: absolute;
          //   content: "";
          //   bottom: -2px;
          //   left: 0;
          //   width: 20px;
          //   height: 6px;
          //   background: url(../../../assets/images/border.png) no-repeat left
          //     bottom;
          //   background-size: 20px 6px;
          //   z-index: 9;
          //   @media screen and (max-width: 600px) {
          //     bottom: -5px;
          //     width: 40px;
          //     height: 12px;
          //     background-size: 40px 12px;
          //   }
          // }
          .big-tit {
            padding: 0 0 25px;
            font-weight: 600;
            &.underline {
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
            @media screen and (max-width: 600px) {
              padding: 0 0 50px;
            }
          }
          .tit {
            padding: 0;
            line-height: 1.1;
          }
          .desc {
            padding: 10px 0 7px;
            // border-bottom: 2px solid #d4d3d3;
            line-height: 1.2;
            @media screen and (max-width: 600px) {
              padding: 20px 0 14px;
            }
          }
        }
      }
    }
  }
}
</style>
