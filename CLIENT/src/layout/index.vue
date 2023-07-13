<template>
  <main class="zy-layout-all-group">
    <!--    顶栏-->
    <section class="zy-theme-header">123</section>
    <!-- 主体内容-->
    <section class="zy-layout-all-content">

    </section>
    <!--    下面 主体-->
    <section class="zy-theme-container">
        <section class="zy-theme-container-main">
          <RouterView/>
        </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
