<template>
  <section id="container-partners">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="oversized-text">Partner with us to grow your business:</h1>
          <el-row class="row-bg" justify="space-between">
            <el-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11" v-for="list in 2" :key="list">
              <div class="list">
                <div class="small-text" v-for="(part, pIndex) in partnersText" :key="pIndex">
                  <p v-if="list === 1 && pIndex < 3">{{part}}</p>
                  <p v-else-if="list === 2 && pIndex >= 3">{{part}}</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <router-link :to="{name: 'contact'}" class="learn-more small-large">Contact Us for Partnership</router-link>
        </div>
      </div>
    </div>

    <div class="partners-area lang-max">
      <div class="title">
        <p class="title-text">Partnering with industry experts</p>
        <p class="small-text">We support our customers to meet their specific needs</p>
      </div>
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
    const partnersText = ref([
      'Providing a variety of solutions and rich resources together with a wide array of AI cloud products',
      'Boost data center management efficiency by quickly launching node and swiftly deploy new data center, provide low latency among centers',
      'Using blockchain technology to protect data ownership, prevent fraud and data theft',
      'Using distributed ledger technology with decentralized ID system for GPU servers',
      'Using multi-data center bidding model, enterprise resource sharing technology and container-based GPU timeshare to reduce cost by 70%',
      'Using smart contract-based technology for machine learning task processing and transparent credit system',
    ])

    onMounted(() => { })
    return {
      bodyWidth,
      partnersData,
      partnersText
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
    padding: 160px 0 80px;
    background: #171819 url(../../../assets/images/background-image.jpg) center
      no-repeat;
    background-size: cover;
    color: #fff;
    @media screen and (max-width: 1440px) {
      padding: 180px 0 100px;
    }
    @media screen and (max-width: 600px) {
      padding: 350px 0 250px;
    }
    .content {
      .text {
        padding: 30px 0 20px;
        @media screen and (max-width: 600px) {
          padding: 60px 0 40px;
        }
        color: #fff;
        line-height: 1.23;
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
        .list {
          padding: 40px 0;
          text-align: left;
          @media screen and (max-width: 600px) {
            padding: 80px 0;
          }
          p {
            position: relative;
            padding: 0 0 20px 20px;
            line-height: 1.1;
            color: #fff;
            list-style: disc;
            @media screen and (max-width: 600px) {
              padding: 0 0 40px 40px;
            }
            &::before {
              position: absolute;
              left: 0;
              top: 8.55px;
              content: "";
              width: 6px;
              height: 6px;
              border-radius: 14px;
              background-color: #fff;
              @media screen and (max-width: 600px) {
                top: 11.05px;
                width: 12px;
                height: 12px;
              }
              @media screen and (max-width: 540px) {
                top: 16.1px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }
  :deep(.partners-area) {
    padding: 155px 0;
    @media screen and (max-width: 600px) {
      padding: 310px 0;
    }
    .title {
      padding: 0 0 30px;
      text-align: center;
      @media screen and (max-width: 600px) {
        padding: 0 0 60px;
      }
      .title-text {
        padding-bottom: 0 !important;
      }
      .small-text {
        padding: 20px 0;
        @media screen and (max-width: 600px) {
          padding: 40px 0;
        }
      }
    }
    .row-bg {
      padding: 50px 0 35px;
      @media screen and (max-width: 600px) {
        padding: 100px 0 70px;
      }
      .el-col {
        margin-top: -15px;
      }
    }
  }
}
</style>
