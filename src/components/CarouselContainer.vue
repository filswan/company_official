<template>
  <div class="carousel-container">
    <el-row class="row-bg" :gutter="props.gutterValue">
      <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="4" v-for="list in props.slideList" :key="list">
        <img :src="list.img" class="img picture-mit" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, computed, nextTick, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  name: 'CarouselContainer',
  props: ['slideList', 'gutterValue'],
  components: {},
  setup (props) {
    const store = useStore()
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => { })
    return {
      props
    }
  }
})
</script>

<style lang="less" scoped>
:deep(.carousel-container) {
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
</style>
