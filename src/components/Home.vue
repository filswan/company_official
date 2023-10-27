<template>
  <div class="wrapper" id="wrapper" ref="area">
    <el-container>
      <el-header>
        <v-head></v-head>
      </el-header>
      <el-main>
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <el-backtop :right="20" :bottom="50" />
        </div>
      </el-main>
      <el-footer>
        <v-foot></v-foot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import vHead from './Header.vue';
import vFoot from './Footer.vue';
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

    onMounted(() => { })
    return {}
  },
  components: {
    vFoot, vHead
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
  .content {
    :deep(.el-backtop) {
      background-color: #ffffff;
      color: #231f20;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 600px) {
        width: 110px;
        height: 110px;
      }
      .el-icon,
      svg {
        @media screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
        @media screen and (max-width: 600px) {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .el-container {
    .el-header,
    .el-footer,
    .el-main {
      width: 100%;
      height: auto;
      padding: 0;
    }
    .el-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
    }
    .el-footer {
      padding: 60px 0 35px;
      background: #000 url(../assets/images/border.png) no-repeat;
      background-size: 100% 7px;
      @media screen and (max-width: 768px) {
        padding: 70px 0;
      }
    }
  }
}
</style>

<style lang="less">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.3s;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }

.mt-border {
  margin: 30px auto;
  border-top: 1px solid #8c878d;
}
.lang-max {
  width: 82%;
  max-width: 1100px;
  padding: 0;
  margin: auto;
  @media screen and (min-width: 2160px) {
    width: 100%;
    max-width: 1240px;
  }
  @media screen and (min-width: 2664px) {
    max-width: 1440px;
  }
  @media screen and (min-width: 4090px) {
    max-width: 1680px;
  }
  @media screen and (min-width: 5120px) {
    max-width: 1920px;
  }
  @media screen and (max-width: 1200px) {
    width: calc(100% - 64px);
    padding: 0 32px;
  }
}
.oversized-text {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  @media screen and (min-width: 2160px) {
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 84px;
  }
  @media screen and (max-width: 600px) {
    font-size: 168px;
  }
}
.oversized-large {
  font-size: 52px;
  font-weight: 400;
  line-height: 1.1;
  @media screen and (min-width: 2160px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 78px;
  }
  @media screen and (max-width: 600px) {
    font-size: 122px;
  }
}
.big-text {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  @media screen and (min-width: 2160px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 72px;
  }
  @media screen and (max-width: 600px) {
    font-size: 120px;
  }
}
.bigsmall-text {
  font-size: 44px;
  font-weight: 600;
  @media screen and (min-width: 2160px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 66px;
  }
  @media screen and (max-width: 600px) {
    font-size: 118px;
  }
}
.bigtit-text {
  font-size: 42px;
  font-weight: 600;
  @media screen and (min-width: 2160px) {
    font-size: 21px;
  }
  @media screen and (max-width: 768px) {
    font-size: 63px;
  }
  @media screen and (max-width: 600px) {
    font-size: 116px;
  }
}
.title-text {
  padding: 34px 0;
  font-size: 38px;
  font-weight: 600;
  @media screen and (min-width: 2160px) {
    font-size: 19px;
  }
  @media screen and (max-width: 768px) {
    font-size: 57px;
  }
  @media screen and (max-width: 600px) {
    padding: 68px 0;
    font-size: 114px;
  }
}
.medium-oversized {
  font-size: 35.5px;
  @media screen and (min-width: 2160px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 53.25px;
  }
  @media screen and (max-width: 600px) {
    font-size: 106.5px;
  }
}
.medium-text {
  font-size: 33px;
  @media screen and (min-width: 2160px) {
    font-size: 16.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 49.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 99px;
  }
}
.medium-large {
  font-size: 29px;
  @media screen and (min-width: 2160px) {
    font-size: 14.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 43.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 87px;
  }
}
.small-large {
  font-size: 27px;
  @media screen and (min-width: 2160px) {
    font-size: 13.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 71px;
  }
}
.small-text {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  @media screen and (min-width: 2160px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    font-size: 72px;
  }
}
.describe {
  font-size: 22px;
  line-height: 1.55;
  @media screen and (min-width: 2160px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
    font-size: 33px;
  }
  @media screen and (max-width: 600px) {
    font-size: 66px;
  }
}
.describe-small {
  font-size: 20px;
  line-height: 1.2;
  @media screen and (min-width: 2160px) {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 60px;
  }
}
.small-18 {
  font-size: 18px;
  line-height: 1.2;
  @media screen and (min-width: 2160px) {
    font-size: 9px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    font-size: 54px;
  }
}
.small-ultra {
  font-size: 16px;
  line-height: 1.1;
  @media screen and (min-width: 2160px) {
    font-size: 8px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 48px;
  }
}
.small-min {
  font-size: 14px;
  line-height: 1.1;
  @media screen and (min-width: 2160px) {
    font-size: 7px;
  }
  @media screen and (max-width: 768px) {
    font-size: 21px;
  }
  @media screen and (max-width: 600px) {
    font-size: 42px;
  }
}

.flex-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.img {
  display: block;
  width: 100%;
}

.picture-mit {
  max-width: 170px;
  margin: auto;
}

.menu-width-mit {
  width: calc(100% - 230px);
  @media screen and (max-width: 540px) {
    width: calc(100% - 200px);
  }
}
</style>

