<template>
  <div class="container">
    <div class="home">
      <div class="home__prallax" data-parallax="scroll" data-speed="0.7" bleed="100"></div>
      <div class="home__overlay"></div>
      <div class="home__container">
        <h1 class="header-1 home__header bold">Classes</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

    $(".home__prallax").parallax({ imageSrc: "static/images/classes.jpg" });

  },
  beforeDestroy() {
    const mirror = $(".parallax-mirror");
    for (let i = 0; i < mirror.length; i++) {
      mirror[i].remove();
    }
  }
};
</script>

<style scoped>

.home {
  position: relative;
  width: 100%;
  min-height: 371px;
}

.home__prallax {
  position: absolute;
  width: 100%;
  min-height: 371px;
  background: transparent;
}

.home__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(120, 0, 255, 0.34),
    rgba(255, 14, 59, 0.34)
  );
}

.home__header {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 12px;
}

.home__container {
  min-height: 371px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  padding-top: 162px;
  position: relative;
}

.home__header {
  margin-top: 65px;
  text-align: center;
  vertical-align: middle;
}



</style>
