<template>
  <div class="container">
    <div class="home">
      <div class="home__prallax" data-parallax="scroll" data-speed="0.8" bleed="100"></div>
      <div class="home__overlay"></div>
      <div class="home__container">
        <h1 class="header-1 home__header bold">Classes</h1>
      </div>
    </div>

    <div class="classes">
      <div class="classes__container">
        <div class="classes__trainers-cards">
          <div
            class="carousel__item"
            :class="{'new': item.new}"
            v-for="item in classes"
            :key="item.index"
            ref="items"
          >
            <div class="item__content">
              <h3 class="header-3 item__content__yoga-header">{{item.header}}</h3>
              <p class="text-gray item__content__text">{{item.text}}</p>
              <p class="item__content__name">
                <span>Instructor:&ensp;</span>James Smith
              </p>
              <img class="content__item-photo" :src="item.photo" alt />
            </div>
          </div>
        </div>
        <button class="btn-one classes__button">
          <span class="bth-one__text text--upper">join our gym now</span>
        </button>
      </div>
    </div>

    <div class="cta">
      <div class="cta__prallax" data-parallax="scroll" data-speed="0.8"></div>
      <div class="cta__container">
        <div class="cta__content">
          <h4 class="header-4 cta__aerobic-program">AEROBICS PROGRAM</h4>
          <h2 class="header-2 cta__header">GET A DISCOUNT</h2>
          <p class="text-gray cta__description">
            Aenean auctor nisl vitae auctor faucibus.
            Pellentesque imperdiet auctor eros,
            sit amet ornare mauris malesuada in.
            Duis rutrum nisi tempus finibus luctus.
            Aenean auctor nisl vitae auctor faucibus.
            Pellentesque imperdiet auctor eros,
            sit amet ornare mauris malesuada in.
            Duis rutrum nisi tempus finibus luctus.
          </p>
          <button class="btn-one cta__button">
            <span class="bth-one__text text--upper">read more</span>
          </button>
        </div>
      </div>
    </div>

    <div class="icon-boxes">
      <div class="icon-boxes__container">
        <div class="icon-boxes__row">
          <div class="icon-box row__icon-box" v-for="box in iconBoxes" :key="box.icon">
            <div class="icon-box__icon">
              <img :src="box.icon" alt />
            </div>
            <h3 class="icon-box__header">{{box.header}}</h3>
            <p class="icon-box__description text-gray">{{box.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        {
          header: "Aerobics",
          text:
            "Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel.",
          photo: "static/images/instructor_1.jpg",
          index: 0,
          new: false
        },
        {
          header: "Pilates",
          text:
            "Nsl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis lacinia.",
          photo: "static/images/instructor_2.jpg",
          index: 1,
          new: false
        },
        {
          header: "Yoga",
          text:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis.",
          photo: "static/images/instructor_3.jpg",
          index: 2,
          new: false
        },
        {
          header: "Spinning",
          text:
            "Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel.",
          photo: "static/images/instructor_2.jpg",
          index: 3,
          new: false
        },
        {
          header: "Crossfit",
          text:
            "Nsl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis lacinia.",
          photo: "static/images/instructor_4.jpg",
          index: 4,
          new: true
        },
        {
          header: "Tae bo",
          text:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis.",
          photo: "static/images/instructor_5.jpg",
          index: 5,
          new: false
        }
      ],
      iconBoxes: [
        {
          icon: "static/images/icon_4.svg",
          header: "EQUIPPED",
          description:
            "Aenean auctor nisl vitae auctor faucibus. Pellentes imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus."
        },
        {
          icon: "static/images/icon_5.svg",
          header: "HEALTHY DIET",
          description:
            "Aenean auctor nisl vitae auctor faucibus. Pellentes imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus."
        },
        {
          icon: "static/images/icon_6.svg",
          header: "TRAINERS",
          description:
            "Aenean auctor nisl vitae auctor faucibus. Pellentes imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus."
        }
      ]
    };
  },
  mounted() {
    $(".home__prallax").parallax({ imageSrc: "static/images/classes.jpg" });
    $(".cta__prallax").parallax({ imageSrc: "static/images/cta_3.jpg" });
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

.classes {
  padding: 100px 0 99px 0;
  min-height: 1325px;
}

.classes__container {
  width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.classes__trainers-cards {
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
}

.carousel__item {
  width: 380px;
  margin: 0 0 100px 0;
  padding: 0 15px;
}

.item__content {
  padding-bottom: 89px;
}

.classes__button {
  width: 246px;
  margin: 35px auto 0 auto;
  display: block;
}

.cta {
  position: relative;
  width: 100%;
  min-height: 653.2px;
  padding: 171px 0 161px 0;
}

.cta__prallax {
  position: absolute;
  background: transparent;
  top: 0;
  width: 100%;
  min-height: 100%;
}

.cta__container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.cta__content {
  width: 920px;
  margin: 0 auto;
}

.cta__aerobic-program {
  text-align: center;
}

.cta__header {
  text-align: center;
  color: white;
  margin-top: 8px;
}

.cta__description {
  padding: 0 60px;
  margin-top: 29px;
  text-align: center;
}

.cta__button {
  margin: 56px auto 0 auto;
  display: block;
}

.icon-boxes {
  min-height: 454px;
  width: 100%;
  padding: 100px 0 15px 0;
}

.icon-boxes__container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}

.icon-boxes__row {
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
}

@media (max-width: 1200px) {
  .classes__container,
  .cta__container,
  .icon-boxes__container {
    width: 960px;
  }

  .carousel__item {
    width: 480px;
  }

  .icon-box {
    width: 320px;
  }
}

@media (max-width: 1050px) {
}

@media (max-width: 990px) {
  .classes__container,
  .cta__container,
  .icon-boxes__container {
    width: 720px;
  }

  .icon-boxes__row {
    display: block;
  }

  .carousel__item {
    width: 360px;
  }

  .item__content {
    min-height: 445px;
  }

  .cta__content {
    width: 100%;
  }

  .icon-box {
    width: 100%;
  }
}

@media (max-width: 850px) {
}

@media (max-width: 770px) {
  .classes__container,
  .cta__container,
  .icon-boxes__container {
    width: 540px;
  }

  .carousel__item {
    width: 100%;
  }

  .item__content {
    min-height: 300px;
  }

  .cta__description {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (max-width: 730px) {
}

@media (max-width: 575px) {
  .classes__container,
  .cta__container,
  .icon-boxes__container {
    width: 100%;
  }

  .header-2 {
    font-size: 36px;
    line-height: 1.2;
    letter-spacing: 8px;
  }

  .btn-one,
  .btn-two {
    width: 157px;
    height: 56px;
  }

  .btn-one > span,
  .btn-two > span {
    font-size: 12px;
  }

  .header-1 {
    font-size: 48px;
  }
}
</style>
