<template>
  <div class="bg-white">
    <keep-alive :include="cachedViews" :max="10">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    cachedViews() {
      return this.$store.state.auth.cachedRoutes
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
    .cla{
        font-size: 20px;
    }
</style>
