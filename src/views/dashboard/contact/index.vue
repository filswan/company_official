<template>
  <section id="container-partners">
    <div class="banner"></div>

    <div class="offices-area lang-max">
      <div class="title">
        <p class="title-text">{{$t('contactUs.title')}}</p>
      </div>
      <el-form ref="contactRef" v-loading="addLoad" class="flex-row" :model="contactForm" label-position="top" :rules="rulesData" status-icon>
        <el-form-item prop="first_name" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.first_name" :placeholder="$t('contactUs.First-Name')" pattern="^[a-zA-Z0-9]{1,12}$" />
          </div>
        </el-form-item>
        <el-form-item prop="last_name" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.last_name" :placeholder="$t('contactUs.Last-Name')" pattern="^[a-zA-Z0-9]{1,12}$" />
          </div>
        </el-form-item>
        <el-form-item prop="email" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.email" :placeholder="$t('contactUs.Email')" />
          </div>
        </el-form-item>
        <el-form-item prop="phone" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.phone" :placeholder="$t('contactUs.Phone-Number')" onkeyup="value=value.replace(/[^\d]/g,'')" minlength="10" />
          </div>
        </el-form-item>
        <el-form-item prop="company_name" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.company_name" :placeholder="$t('contactUs.Company-Name')" />
          </div>
        </el-form-item>
        <el-form-item prop="job" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.job" :placeholder="$t('contactUs.Job-Role')" />
          </div>
        </el-form-item>
        <el-form-item prop="subject" class="item-half">
          <div class="flex-row describe">
            <el-input v-model="contactForm.subject" :placeholder="$t('contactUs.Subject')" />
          </div>
        </el-form-item>
        <el-form-item prop="requst" class="item-half">
          <div class="flex-row describe">
            <el-checkbox v-model="contactForm.requst" :label="$t('contactUs.Request')" size="large" />
          </div>
        </el-form-item>
        <el-form-item prop="help">
          <div class="flex-row describe">
            <el-input v-model="contactForm.help" :rows="4" type="textarea" :placeholder="$t('contactUs.help')" class="textarea" />
          </div>
        </el-form-item>
        <el-form-item>
          <div class="submit-more describe" @click="submitAdd('contactRef')">
            {{$t('contactUs.Submit')}}
          </div>
        </el-form-item>
      </el-form>
    </div>

    <div class="contact-style lang-max">
      <div class="content">
        <div class="text">
          <h1 class="title-text">{{$t('contactUs.Connect-Us')}}</h1>
          <el-row class="media flex-row">
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="media-more flex-row medium-large" @click="system.$commonFun.goLink('https://twitter.com/nebula_ai')">
              <svg t="1696839979194" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4093" width="200" height="200">
                <path d="M868.78260513 350.93851167c-4.19752479 316.58112364-206.64378348 533.42289687-508.84923077 547.04005471-124.62575954 5.70639316-214.91280228-34.551102-293.48715213-84.46745527 92.10982108 14.70125585 206.32520569-22.11723305 267.41045242-74.40833277-90.28704274-8.78247749-143.74276011-54.7393641-168.7552-128.69725356 26.08953618 4.51026781 53.57474644 3.31414245 78.36079771-1.93480569-81.47305755-27.27282508-139.65259487-77.62795213-142.6586621-183.14254588 22.8629151 10.40920798 46.6967339 20.19409687 78.36079772 22.12306782-60.97321937-34.68180056-106.05956011-161.46291966-54.42078633-245.29788718 90.49359316 99.18854928 199.34683533 180.12947692 378.08647293 191.07898346-44.87512251-191.83050029 209.33127293-295.85489687 315.7222473-166.92541994 44.97431338-8.70079088 81.58158405-25.7639567 116.79551453-44.33599088-14.49353846 44.54837607-42.40585299 75.68030997-76.43065983 100.58539031 37.3506188-5.04239772 70.41152364-14.16912593 98.65525243-28.12469971-17.51944388 36.39255157-55.82929687 69.02751909-88.78984388 96.50689458z"
                  fill="#000000" p-id="4094"></path>
              </svg>
              Twitter
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="media-more flex-row medium-large" @click="system.$commonFun.goLink('https://www.facebook.com/NebulaAI/')">
              <svg t="1696839845343" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2825" width="200" height="200">
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"
                  p-id="2826" fill="#000000"></path>
              </svg>
              Facebook
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="media-more flex-row medium-large" @click="system.$commonFun.goLink('https://www.linkedin.com/company/27161337/admin/')">
              <svg t="1696840066236" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6189" width="200" height="200">
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8z m-59.3-434c-38 0-68.8-30.8-68.8-68.8s30.8-68.8 68.8-68.8c37.9 0 68.8 30.8 68.8 68.8-0.1 38-30.9 68.8-68.8 68.8z m503.7 434H675.1V608c0-44.3-0.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                  p-id="6190" fill="#000000"></path>
              </svg>
              LinkedIn
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="media-more flex-row medium-large" @click="system.$commonFun.goLink('https://medium.com/nebula-ai')">
              <svg t="1696840088958" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7211" width="200" height="200">
                <path d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98c-8.7-8.9-12.9-21.3-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297c-1.1-6.5 1.6-13.2 6.8-17.2z"
                  p-id="7212" fill="#000000"></path>
              </svg>
              Medium
            </el-col>
          </el-row>
        </div>
      </div>
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
export default defineComponent({
  components: {
    Right, CarouselContainer
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const partnersData = ref([
      {
        img: require(`@/assets/images/partners/partners-01.png`)
      },
      {
        img: require(`@/assets/images/partners/partners-02.png`)
      },
      {
        img: require(`@/assets/images/partners/partners-03.png`)
      },
      {
        img: require(`@/assets/images/partners/partners-04.png`)
      },
      {
        img: require(`@/assets/images/partners/partners-05.png`)
      },
      {
        img: require(`@/assets/images/partners/partners-06.png`)
      }
    ])
    const productData = ref([
      {
        img: require(`@/assets/images/contact/MTLcity.jpg`),
        title: 'Montreal',
        text: '666 Sherbrooke Ouest, Montreal, Quebec'
      },
      {
        img: require(`@/assets/images/contact/Xiamencity.jpg`),
        title: 'Xiamen',
        text: 'Huaxun Building, Software Park Phase I, Huli, Xiamen, Fujian, China'
      }
    ])
    const addLoad = ref(false)
    const contactRef = ref(null)
    const contactForm = reactive({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      company_name: '',
      job: '',
      subject: '',
      help: '',
      requst: false
    })
    const rulesData = reactive({
      first_name: [
        { required: true, message: 'Please enter your first name', trigger: 'blur' }
      ],
      last_name: [
        { required: true, message: 'Please enter your last name', trigger: 'blur' }
      ],
      email: [
        { required: true, message: 'Please enter your email address', trigger: 'blur' },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        }
      ],
      subject: [
        { required: true, message: 'Please enter your subject', trigger: 'blur' }
      ],
      help: [
        { required: true, message: 'Please enter your message', trigger: 'blur' }
      ]
    })

    async function submitAdd (formEl) {
      if (!formEl) return
      await contactRef.value.validate(async (valid, fields) => {
        if (valid) {
          addLoad.value = true
          const params = {
            comment: contactForm.help,
            company_name: contactForm.company_name,
            email: contactForm.email,
            first_name: contactForm.first_name,
            last_name: contactForm.last_name,
            source: "nebula-ai.com",
            subject: contactForm.subject,
            title: contactForm.job
          }
          if (contactForm.requst) params.inquiry = ""
          const addRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}orionrest/customers/contactInfo`, 'post', params)
          // if (addRes.message) system.$commonFun.messageTip('error', addRes.message)
          addLoad.value = false
        } else {
          console.log('error submit!', fields)
          return false
        }
      })
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      partnersData,
      addLoad,
      productData,
      contactRef,
      contactForm,
      rulesData,
      submitAdd
    }
  }
})
</script>

<style lang="less" scoped>
#container-partners {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .banner {
    position: relative;
    padding: 237px 0;
    background: #bfcbcf url(../../../assets/images/bg-contactus.jpg) center
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
  :deep(.offices-area) {
    padding: 100px 0;
    @media screen and (min-width: 2160px) {
      padding: 70px 0;
    }
    .title {
      padding-bottom: 50px;
      text-align: center;
      @media screen and (min-width: 2160px) {
        padding-bottom: 0;
      }
    }
    .el-row {
      padding: 0 0 60px;
      @media screen and (min-width: 2160px) {
        padding: 0 0 30px;
      }
      @media screen and (max-width: 600px) {
        padding: 0 0 120px;
      }
      .el-col {
        justify-content: space-between;
        padding: 50px 15px;
        &:nth-child(2n + 1) {
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
          width: 49%;
          border-radius: 5px;
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
            padding: 0;
            line-height: 1.2;
          }
        }
      }
    }
    .el-form {
      justify-content: space-between;
      flex-wrap: wrap;
      .el-form-item {
        width: 100%;
        margin: 15px 0;
        font-weight: 500;
        @media screen and (min-width: 2160px) {
          margin: 10px 0;
        }
        @media screen and (max-width: 600px) {
          margin: 30px 0;
        }
        &.item-half {
          width: 48%;
        }
        .el-form-item__content {
          word-break: break-word;
          .flex-row {
            width: 100%;
          }
          .el-form-item__error {
            font-size: inherit;
          }
          .el-input,
          .el-textarea {
            font-size: inherit;
            &.textarea {
              .el-textarea__inner {
                height: 150px;
                @media screen and (min-width: 2160px) {
                  height: 75px;
                }
                @media screen and (max-width: 600px) {
                  height: 220px;
                }
              }
            }
            .el-input__inner,
            .el-textarea__inner {
              height: 50px;
              padding: 0 20px;
              font-size: inherit;
              border-color: #c4c4c4;
              border-radius: 10px;
              line-height: 50px;
              @media screen and (min-width: 2160px) {
                height: 35px;
                padding: 0 10px;
                line-height: 35px;
              }
              @media screen and (max-width: 600px) {
                height: 120px;
                line-height: 120px;
                border-radius: 20px;
              }
            }
            .el-input__wrapper {
              border-radius: 10px;
              @media screen and (max-width: 600px) {
                border-radius: 20px;
              }
            }
          }
          .el-checkbox {
            font-size: inherit;
            .el-checkbox__label {
              font-size: inherit;
            }
            .el-checkbox__inner {
              width: 25px;
              height: 25px;
              margin-right: 10px;
              border-color: #c4c4c4;
              @media screen and (min-width: 2160px) {
                width: 15px;
                height: 15px;
                margin-right: 5px;
              }
              @media screen and (max-width: 600px) {
                width: 50px;
                height: 50px;
              }
            }
            .el-checkbox__inner::after {
              height: 12px;
              top: 3px;
              left: 10px;
              border-width: 2px;
            }
          }
          .submit-more {
            display: inline-block;
            padding: 8px 35px;
            margin: 20px auto 0;
            border: 1px solid #4799b9;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 10px;
            // @media screen and (max-width: 600px) {
            //   padding: 8px 20px;
            //   border-radius: 10px;
            // }
            &:hover {
              background-color: #4799b9;
              color: #fff;
            }
          }
        }
      }
      .el-form-item.is-required:not(.is-no-asterisk)
        > .el-form-item__label-wrap
        > .el-form-item__label:before,
      .el-form-item.is-required:not(.is-no-asterisk)
        > .el-form-item__label:before {
        display: none;
      }
    }
  }
  :deep(.contact-style) {
    position: relative;
    padding: 30px 0 100px;
    @media screen and (min-width: 2160px) {
      padding: 10px 0 50px;
    }
    @media screen and (max-width: 1440px) {
      padding: 15px 0 60px;
    }
    @media screen and (max-width: 768px) {
      padding: 60px 0 100px;
    }
    .content {
      .text {
        padding: 0 60px;
        color: #000;
        line-height: 1.23;
        text-align: center;
        @media screen and (max-width: 600px) {
          padding: 0 60px;
        }
        .media {
          justify-content: center;
          margin: 60px 0;
          @media screen and (min-width: 2160px) {
            margin: 10px 0 30px;
          }
          @media screen and (max-width: 600px) {
            margin: 120px 0;
          }
          .media-more {
            justify-content: center;
            padding: 15px 0;
            margin: 0;
            cursor: pointer;
            color: #000;
            line-height: 1;
            transition: all 0.2s;
            @media screen and (max-width: 600px) {
              padding: 30px 0;
              margin: 10px 50px;
            }
            &:hover {
              opacity: 0.9;
            }
            svg {
              display: block;
              width: 40px;
              height: 40px;
              margin: -3px 15px 0 0;
              cursor: pointer;
              @media screen and (min-width: 2160px) {
                width: 20px;
                height: 20px;
              }
              @media screen and (max-width: 768px) {
                width: 60px;
                height: 60px;
                margin: 0 30px 0 0;
              }
              @media screen and (max-width: 600px) {
                width: 70px;
                height: 70px;
              }
              @media screen and (max-width: 540px) {
                width: 100px;
                height: 100px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
