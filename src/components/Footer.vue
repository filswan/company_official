<template>
  <div class="footer lang-max">
    <div class="powered flex-row">
      <el-row class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <img :src="nebulaLogo" class="footer-logo" @click="goMain" />
          <div class="text describe-small">
            <router-link :to="{name: 'privacy'}">{{$t('footer.Privacy-Policy')}}</router-link>
            | {{$t('footer.copy')}}
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="footer-right flex-row">
            <!-- <div class="explore flex-row">
              <div>
                <div class="tit describe">Explore</div>
                <ul>
                  <li class="describe-small">
                    <span @click="system.$commonFun.goLink('https://nbai.io')">NBAI Cloud Platform</span>
                  </li>
                  <li class="describe-small">
                    <span @click="system.$commonFun.goLink('https://nebulaai.org/')">NBAI Foundation</span>
                  </li>
                </ul>
              </div>
            </div> -->
            <div class="foot-media flex-row">
              <div class="">
                <div class="tit describe">{{$t('footer.Follow-Us')}}</div>
                <div class="media-list flex-row">
                  <a href="https://twitter.com/nebula_ai" target="_blank">
                    <svg t="1696839979194" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4093" width="200" height="200">
                      <path d="M868.78260513 350.93851167c-4.19752479 316.58112364-206.64378348 533.42289687-508.84923077 547.04005471-124.62575954 5.70639316-214.91280228-34.551102-293.48715213-84.46745527 92.10982108 14.70125585 206.32520569-22.11723305 267.41045242-74.40833277-90.28704274-8.78247749-143.74276011-54.7393641-168.7552-128.69725356 26.08953618 4.51026781 53.57474644 3.31414245 78.36079771-1.93480569-81.47305755-27.27282508-139.65259487-77.62795213-142.6586621-183.14254588 22.8629151 10.40920798 46.6967339 20.19409687 78.36079772 22.12306782-60.97321937-34.68180056-106.05956011-161.46291966-54.42078633-245.29788718 90.49359316 99.18854928 199.34683533 180.12947692 378.08647293 191.07898346-44.87512251-191.83050029 209.33127293-295.85489687 315.7222473-166.92541994 44.97431338-8.70079088 81.58158405-25.7639567 116.79551453-44.33599088-14.49353846 44.54837607-42.40585299 75.68030997-76.43065983 100.58539031 37.3506188-5.04239772 70.41152364-14.16912593 98.65525243-28.12469971-17.51944388 36.39255157-55.82929687 69.02751909-88.78984388 96.50689458z"
                        fill="#ffffff" p-id="4094"></path>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/NebulaAI/" target="_blank">
                    <svg t="1696839845343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2825" width="200" height="200">
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"
                        p-id="2826" fill="#ffffff"></path>
                    </svg>
                  </a>
                  <a href="https://web.telegram.org/#/im?p=@NebulaAICommunity" target="_blank">
                    <svg t="1696840036645" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5164" width="200" height="200">
                      <path d="M417.28 795.733333l11.946667-180.48 327.68-295.253333c14.506667-13.226667-2.986667-19.626667-22.186667-8.106667L330.24 567.466667 155.306667 512c-37.546667-10.666667-37.973333-36.693333 8.533333-55.466667l681.386667-262.826666c31.146667-14.08 61.013333 7.68 49.066666 55.466666l-116.053333 546.56c-8.106667 38.826667-31.573333 48.213333-64 30.293334L537.6 695.466667l-84.906667 82.346666c-9.813333 9.813333-17.92 17.92-35.413333 17.92z"
                        fill="#ffffff" p-id="5165"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/nebula-ai/about/" target="_blank">
                    <svg t="1696840066236" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6189" width="200" height="200">
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8z m-59.3-434c-38 0-68.8-30.8-68.8-68.8s30.8-68.8 68.8-68.8c37.9 0 68.8 30.8 68.8 68.8-0.1 38-30.9 68.8-68.8 68.8z m503.7 434H675.1V608c0-44.3-0.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                        p-id="6190" fill="#ffffff"></path>
                    </svg>
                  </a>
                  <a href="https://medium.com/nebula-ai" target="_blank">
                    <svg t="1696840088958" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7211" width="200" height="200">
                      <path d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98c-8.7-8.9-12.9-21.3-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297c-1.1-6.5 1.6-13.2 6.8-17.2z"
                        p-id="7212" fill="#ffffff"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/nebulaai" target="_blank">
                    <svg t="1696840107455" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8230" width="200" height="200">
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                        p-id="8231" fill="#ffffff"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require(`@/assets/images/logo.png`)

    function goMain () {
      router.push({ name: 'dashboard' })
    }
    onMounted(() => { })
    return {
      system,
      nebulaLogo,
      goMain
    }
  },
  components: {}
})
</script>
<style  lang="less" scoped>
.footer {
  position: relative;
  justify-content: space-between;
  .powered {
    width: 100%;
    justify-content: space-between;
    padding: 0;
    font-weight: 400;
    color: #fff;
    @media screen and (max-width: 600px) {
      line-height: 2.5;
    }
    .el-row {
      width: 100%;
      @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
      }
      .el-col {
        .footer-logo {
          height: 28px;
          margin: 0 0 70px;
          @media screen and (min-width: 2160px) {
            height: 14px;
            margin: 0 0 35px;
          }
          @media screen and (max-width: 992px) {
            height: 40px;
          }
          @media screen and (max-width: 767px) {
            display: block;
            margin: 0 auto 70px;
          }
          @media screen and (max-width: 600px) {
            height: 50px;
          }
          @media screen and (max-width: 599px) {
            height: 90px;
          }
        }
        .text {
          @media screen and (max-width: 767px) {
            text-align: center;
          }
          a {
            color: inherit;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .footer-right {
          padding-top: 40px;
          align-items: flex-start;
          justify-content: flex-end;
          @media screen and (min-width: 2160px) {
            padding-top: 15px;
          }
          @media screen and (max-width: 767px) {
            padding-top: 0;
            justify-content: flex-start;
          }
          .tit {
            margin: 0 8px 15px;
            @media screen and (max-width: 767px) {
              margin: 0 12px 21px;
              text-align: center;
            }
            @media screen and (max-width: 600px) {
              margin: 0 16px 30px;
            }
            @media screen and (max-width: 540px) {
              margin: 0 24px 30px;
            }
          }
          .explore {
            ul {
              li {
                margin: 0 8px;
                @media screen and (max-width: 768px) {
                  margin: 0 12px;
                }
                @media screen and (max-width: 600px) {
                  margin: 0 16px;
                }
                @media screen and (max-width: 540px) {
                  margin: 0 24px;
                }
                span {
                  line-height: 25px;
                  cursor: pointer;
                  @media screen and (max-width: 768px) {
                    line-height: 45px;
                  }
                  @media screen and (max-width: 600px) {
                    line-height: 55px;
                  }
                  @media screen and (max-width: 540px) {
                    line-height: 85px;
                  }
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
          .foot-media {
            @media screen and (max-width: 767px) {
              margin: 60px 0 100px;
            }
            .media-list {
              a {
                display: block;
                margin: 0 8px;
                @media screen and (min-width: 2160px) {
                  margin: 0 4px;
                }
                @media screen and (max-width: 768px) {
                  margin: 0 12px;
                }
                @media screen and (max-width: 600px) {
                  margin: 0 16px;
                }
                @media screen and (max-width: 540px) {
                  margin: 0 24px;
                }
                img,
                svg {
                  display: block;
                  width: 25px;
                  height: 25px;
                  cursor: pointer;
                  @media screen and (min-width: 2160px) {
                    width: 15px;
                    height: 15px;
                  }
                  @media screen and (max-width: 768px) {
                    width: 45px;
                    height: 45px;
                  }
                  @media screen and (max-width: 600px) {
                    width: 55px;
                    height: 55px;
                  }
                  @media screen and (max-width: 540px) {
                    width: 85px;
                    height: 85px;
                  }
                  &:hover {
                    opacity: 0.9;
                  }
                }
              }
            }
          }
          .explore,
          .foot-media {
            width: 50%;
            justify-content: flex-end;
            @media screen and (max-width: 767px) {
              width: 100%;
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
</style>