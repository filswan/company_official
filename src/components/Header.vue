<template>
  <section id="container-header" :class="{'bg-color-none': scrollTopVal > 400}">
    <div class="header lang-max flex-row">
      <img :src="nebulaLogo" class="logo-img mit" alt='Nebula AI' @click="goMain" />
      <div class="el-menu-right flex-row menu-width-mit">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :teleported="true" @select="handleSelect">
          <el-menu-item index="1">
            <span class="mit">{{$t('menu.Who-We-Are')}}</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <span class="mit">{{$t('menu.What-We-Do')}}</span>
            </template>
            <el-menu-item index="3-1">
              <span class="mit">{{$t('menu.Decentralized-Computing')}}</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <span class="mit">{{$t('menu.Web3-OS')}}</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <span class="mit">{{$t('menu.Data-Center-Solutions')}}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <span class="mit">{{$t('menu.Our-Workplace')}}</span>
          </el-menu-item>
          <!-- <el-sub-menu index="4">
            <template #title>
              <span class="mit">Partners</span>
            </template>
            <el-menu-item index="4-1">
              <span class="mit">Partners</span>
            </el-menu-item>
            <el-menu-item index="4-2">
              <span class="mit">Foundation</span>
            </el-menu-item>
          </el-sub-menu> -->
          <el-menu-item index="5">
            <span class="mit">{{$t('menu.Contact-Us')}}</span>
          </el-menu-item>
        </el-menu>
        <div class="language flex-row">
          <el-divider direction="vertical" />
          <i class="mit-icon"></i>
          <el-dropdown popper-class="i18n-popper">
            <span class="el-dropdown-link">
              <span class="mit">EN</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <div class="language-menu flex-row">
                    <i class="mit-icon"></i>
                    <span class="mit">EN</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onBeforeUnmount, nextTick, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  CircleCheck, ArrowDown
} from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    CircleCheck, ArrowDown
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require("@/assets/images/logo.png")
    const scrollTopVal = ref(0)
    const activeIndex = ref('1')

    const scrollTop = () => {
      nextTick(() => {
        let elVal = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        scrollTopVal.value = elVal
      })
    }
    function goMain () {
      router.push({ name: 'dashboard' })
    }
    async function handleSelect (key, keyPath) {
      if (key === '1') router.push({ name: 'dashboard' })
      else if (key === '2') router.push({ name: 'ourWorkplace' })
      else if (key === '3-1') router.push({ name: 'swan' })
      else if (key === '3-2') router.push({ name: 'fogmeta' })
      else if (key === '3-3') router.push({ name: 'nebulablock' })
      else if (key === '4-1') router.push({ name: 'partners' })
      else if (key === '4-2') system.$commonFun.goLink('https://nebulaai.org/')
      else if (key === '5') system.$commonFun.goLink('https://us17.list-manage.com/contact-form?u=d00f980f8a4f0c1054e178765&form_id=37f9894eaae77c108c70bd00e30b9841')
    }
    // what-we-do
    async function activeMenu (row) {
      const nameMenu = row || route.name
      if (nameMenu.indexOf('dashboard') > -1) activeIndex.value = '1'
      if (nameMenu.indexOf('ourWorkplace') > -1) activeIndex.value = '2'
      else if (nameMenu.indexOf('swan') > -1) activeIndex.value = '3-1'
      else if (nameMenu.indexOf('fogmeta') > -1) activeIndex.value = '3-2'
      else if (nameMenu.indexOf('nebulablock') > -1) activeIndex.value = '3-3'
      else if (nameMenu.indexOf('partners') > -1) activeIndex.value = '4-1'
      else if (nameMenu.indexOf('contact') > -1) activeIndex.value = '5'
      else activeIndex.value = '1'
    }
    onMounted(() => {
      activeMenu()
      window.addEventListener('scroll', scrollTop, true)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollTop, true);
    })
    watch(route, (to, from) => {
      activeMenu()
      window.scrollTo(0, 0)
    })
    return {
      nebulaLogo,
      scrollTopVal,
      activeIndex,
      handleSelect, goMain
    }
  }
})
</script>
<style lang="less" scoped>
#container-header {
  // transition: all 0.2s;
  &.bg-color {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #000 url(../assets/images/border.png) no-repeat bottom;
    background-size: 100% 6px;
    z-index: 99999;
  }
  .header {
    margin: auto;
    justify-content: space-between;
    padding: 30px 0;
    @media screen and (min-width: 2160px) {
      padding: 10px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 60px 0;
    }
    .logo-img,
    .mit-body {
      height: 25px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        height: 22px;
      }
    }
    .el-menu-right {
      justify-content: flex-end;
      flex-wrap: nowrap;
      :deep(.el-menu) {
        width: calc(100% - 170px);
        background-color: transparent;
        border: 0;
        justify-content: flex-end;
        @media screen and (max-width: 441px) {
          width: calc(100% - 170px);
        }
        .el-menu-item,
        .el-sub-menu,
        .el-sub-menu__title {
          padding: 0;
          margin-left: 30px;
          background-color: transparent !important;
          font-size: 17px;
          border-bottom: 1.6px solid transparent;
          color: #fff;
          @media screen and (min-width: 2160px) {
            line-height: 35px;
          }
          .mit {
            font-size: 17px;
            @media screen and (max-width: 1680px) {
              font-size: 16px;
            }
            @media screen and (max-width: 992px) {
              font-size: 15px;
            }
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }
          &:first-child {
            margin-left: 0;
          }
          &:hover,
          &.is-active {
            border-bottom: 1.6px solid rgb(64, 158, 255);
          }
          .el-icon {
            width: 40px;
            height: 40px;
            @media screen and (max-width: 992px) {
              width: 50px;
              height: 50px;
            }
            @media screen and (max-width: 599px) {
              width: 90px;
              height: 90px;
            }
            svg {
              width: 100%;
              height: 100%;
            }
          }
          .el-sub-menu__icon-arrow {
            position: static;
            width: 10px;
            height: 10px;
            right: 10px;
            margin-left: 8px;
            margin-top: -3px;
            background: url(../assets/images/main/menu.png) no-repeat center;
            background-size: 100%;
            // @media screen and (max-width: 992px) {
            //   width: 20px;
            //   height: 20px;
            // }
            svg {
              display: none;
            }
          }
        }
        .el-sub-menu__title {
          border: 0 !important;
        }
      }
    }
    .language {
      white-space: nowrap;
      flex-wrap: nowrap;
      color: #fff;
      // @media screen and (max-width: 600px) {
      //   display: none;
      // }
      .el-divider {
        margin: 0 20px;
        @media screen and (max-width: 600px) {
          margin: 0 40px;
        }
      }
      i.mit-icon {
        width: 20px;
        height: 20px;
        margin: 0 10px 0 0;
        background: url(../assets/images/i18n-en.jpg) no-repeat left 1px;
        background-size: 100%;
        @media screen and (max-width: 768px) {
          margin: 0 5px 0 0;
        }
      }
      span.mit {
        padding-top: 3px;
        font-size: 17px;
        color: #fff;
        @media screen and (max-width: 1680px) {
          font-size: 16px;
        }
        @media screen and (max-width: 992px) {
          font-size: 15px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .el-dropdown {
        * {
          outline: none !important;
        }
        // cursor: pointer;
        outline: none;
        border: 0;
        i {
          color: #fff;
          display: none;
        }
      }
    }
  }
}
</style>
<style lang="less">
.i18n-popper {
  display: none;
  * {
    outline: none !important;
  }
  .el-dropdown-link:focus-visible {
    outline: none !important;
  }
  .language-menu {
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #303133;
    cursor: no-drop;
    // @media screen and (max-width: 600px) {
    //   display: none;
    // }
    i.mit-icon {
      width: 20px;
      height: 20px;
      margin: 0 10px 0 0;
      background: url(../assets/images/i18n-en.jpg) no-repeat left 1px;
      background-size: 100%;
      @media screen and (max-width: 768px) {
        margin: 0 5px 0 0;
      }
    }
    span.mit {
      font-size: 17px;
      color: #303133;
      @media screen and (max-width: 1680px) {
        font-size: 16px;
      }
      @media screen and (max-width: 992px) {
        font-size: 15px;
      }
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
}
</style>

