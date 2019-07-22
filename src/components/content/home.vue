<template>
  <div class="home">
    <div class="preview">
      <div class="preview__images">
        <div class="preview__images__group" ref="group" data-it="0" :style="{'width': groupWidth}">
          <transition name="ma">
            <div
              v-for="image in cImg"
              :key="image.index"
              :data-index="image.index"
              ref="image"
              :class="{'active-image': image.class}"
              class="preview__images__image"
              :style="{'width': windowWidth}"
            >
              <transition appear name="info">
                <div class="preview__images__image__info">
                  <span class="text text--bold text--upper info__text">Go to the gym now!</span>
                  <h1 class="header-1 info__header">
                    <span class="bold">Never</span> limit yourself
                  </h1>
                  <button class="btn-one image__info__btn-one" @click="getWidth" ref="button">
                    <span class="bth-one__text text--upper">read more</span>
                  </button>
                </div>
              </transition>
            </div>
          </transition>
        </div>
        <div class="preview__images__bth-group" @click="active">
          <button
            class="btn-switch bth-group__btn-switch"
            :data-index="image"
            ref="button"
            v-for="image in 3"
            :key="image"
          >{{image}}</button>
        </div>
      </div>
    </div>

    <div class="programs">
      <div class="aerobics pr-card">
        <div class="pr-card__logo aerobics__logo"></div>
        <h3 class="header-3 pr-card__header aerobics__header">AEROBICS PROGRAM</h3>
        <p class="pr-card__description aerobics__description text">
          Aenean auctor nisl vitae auctor faucibus.
          Pellentesque imperdiet auctor eros,
          sit amet ornare mauris malesuada in.
          Duis rutrum nisi tempus finibus luctus.
        </p>
      </div>

      <div class="hard pr-card">
        <div class="pr-card__logo hard__logo"></div>
        <h3 class="header-3 pr-card__header hard__header">TRAIN HARD</h3>
        <p class="pr-card__description hard__description text">
          Sed porta vel lacus quis lacinia.
          Vestibulum nec justo lectus.
          In hac habitasse platea dictumst.
          Proin vulputate rhoncus nibh eu vehicula.
          Sed porta vel lacus quis lacinia.
        </p>
      </div>

      <div class="basic pr-card">
        <div class="pr-card__logo basic__logo"></div>
        <h3 class="header-3 pr-card__header basic__header">BASIC PROGRAM</h3>
        <p class="pr-card__description basic__description text">
          Aenean auctor nisl vitae auctor faucibus.
          Pellentesque imperdiet auctor eros,
          sit amet ornare mauris malesuada in.
          Duis rutrum nisi tempus finibus luctus.
        </p>
      </div>
    </div>

    <div class="about-sportify">
      <div class="about-sportify__container">
        <div class="about">
          <h4 class="header-4 about__aerobic-program">AEROBICS PROGRAM</h4>
          <h2 class="header-2 about__sportify-header">ABOUT SPORTIFY</h2>
          <p class="text about__description">
            Aenean auctor nisl vitae auctor faucibus.
            Pellentesque imperdiet auctor eros,
            sit amet ornare mauris malesuada in.
            Duis rutrum nisi tempus finibus luctus.
            Sed porta vel lacus quis lacinia. Vestibulum nec
            justo lectus. In hac habitasse platea dictumst.
            Proin vulputate rhoncus nibh eu vehicula.
            Donec vitae laoreet quam, ac feugiat nibh.
            Aenean auctor nisl vitae auctor faucibus.
            Pellentesque imperdiet auctor eros,
            sit amet ornare mauris malesuada in.
            Duis rutrum nisi tempus finibus luctus.
          </p>
          <button class="btn-one about__button">
            <span class="bth-one__text text--upper">read more</span>
          </button>
        </div>
        <div class="about-sportify_logo"></div>
      </div>
      <hr />
    </div>

    <div class="quote">
      <div class="quote__conteiner">
        <blockquote class="blackquote-text quote__blackquote-text">
          “Training gives us an outlet
          for suppressed energies created
          by stress and thus tones the spirit
          just as exercise conditions the body.”
        </blockquote>
        <p class="text quote__name">– Arnold Schwarzenegger</p>
      </div>
    </div>

    <div class="cta">
      <div class="cta__image"></div>
      <div class="cta__content">
        <div class="cta__content__cantainer">
          <h4 class="header-4 cta__aerobic-program">AEROBICS PROGRAM</h4>
          <h2 class="header-2 cta__gym-header">JOIN OUR GYM</h2>
          <ul class="cta__list list">
            <li class="list__cell" v-for="cell in list" :key="cell.key">{{cell.li}}</li>
          </ul>
          <button class="btn-one cta__button">
            <span class="bth-one__text text--upper">read more</span>
          </button>

          <button class="btn-two cta__button">
            <span class="bth-two__text text--upper">read more</span>
          </button>
        </div>
      </div>
    </div>

    <div class="classes">
      <div class="classes__container">
        <div class="classes__header-container">
          <h4 class="header-4 classes__our-programs-header">OUR PROGRAMS</h4>
          <h2 class="header-2 classes__classes-header">CLASSES</h2>
        </div>
        <div class="classes-slider" ref="slider">
          <div class="classes-slider__carousel">
            <div class="carousel__container" ref="itemContainer">
              <div class="carousel__item" v-for="item in classes" :key="item.index" ref="items">
                <div class="item__content">
                  <h3 class="header-3 item__content__yoga-header">{{item.header}}</h3>
                  <p class="text-gray item__content__text">{{item.text}}</p>
                  <img class="content__item-photo" :src="item.photo" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pricing">
      <div
        class="pralax-background"
        data-parallax="scroll"
        data-speed="0.7"
        data-bleed="100"
        data-natural-height="1300"
      ></div>
      <div class="pricing__container">
        <div class="pricing__header-container">
          <h4 class="header-4 pricing__our-programs-header">OUR PROGRAMS</h4>
          <h2 class="header-2 pricing__classes-header">PRICING</h2>
        </div>
        <div class="pricing__slider__cantainer">
          <div class="owl-carousel owl-theme pricing__slider">
            <div
              class="pricing__item"
              v-for="item in prising"
              :key="item.price"
              :class="{'promo-item': item.promo}"
            >
              <div class="pricing__title-box" :class="{'promo': item.promo}">
                <div>
                  <div class="pricing__name">{{item.name}}</div>
                  <div class="pricing__price">
                    {{item.price}}
                    <span>{{item.cent}}</span>
                  </div>
                  <div class="pricing__per">{{item.per}}</div>
                </div>
              </div>
              <div class="pricing__content">
                <div class="pricing__list">
                  <ul>
                    <li>{{item.email}}</li>
                    <li>{{item.gb}}</li>
                    <li>{{item.support}}</li>
                    <li>{{item.doc}}</li>
                    <li>{{item.seo}}</li>
                  </ul>
                </div>
                <div class="pricing__info">
                  <a href="#">i</a>
                </div>

                <button class="btn-two pricing__button" v-if="item.promo">
                  <span class="bth-two__text text--upper">Order plan</span>
                </button>
                <button class="btn-one pricing__button" v-else>
                  <span class="bth-one__text text--upper">Order plan</span>
                </button>
              </div>
            </div>
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
      scrollWidth: null,
      iterator: 2,
      iteratorClasses: 6,
      timer: null,
      timerClasses: null,
      disabled: true,
      timeout: 5000,
      img: [
        { url: "url(../../../public/index.jpg)", class: false, index: 0 },
        { url: "url(../../../public/index.jpg)", class: false, index: 1 },
        { url: "url(../../../public/index.jpg)", class: true, index: 2 }
      ],
      list: [
        {
          li:
            "Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in.",
          key: 0
        },
        {
          li:
            "Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis lacinia.",
          key: 1
        },
        {
          li: "Vestibulum nec justo lectus. In hac habitasse platea dictumst.",
          key: 2
        },
        {
          li:
            "Proin vulputate rhoncus nibh eu vehicula. Donec vitae laoreet quam, ac feugiat nibh.",
          key: 3
        }
      ],
      classes: [
        {
          header: "Aerobics",
          text:
            "Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel.",
          photo: "static/images/instructor_1.jpg",
          index: 1
        },
        {
          header: "Pilates",
          text:
            "Nsl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis lacinia.",
          photo: "static/images/instructor_2.jpg",
          index: 0
        },
        {
          header: "Yoga",
          text:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis.",
          photo: "static/images/instructor_3.jpg",
          index: 2
        }
      ],
      prising: [
        {
          name: "beginner",
          price: "Free",
          cent: "",
          per: "1 day",
          email: "2 E-mail Addresess",
          gb: "25 GB Space",
          support: "24h Live Support",
          doc: "Documetation inside",
          seo: "SEO Plan",
          promo: false
        },
        {
          name: "beginner",
          price: "$29",
          cent: "90",
          per: "Per Month",
          email: "2 E-mail Addresess",
          gb: "25 GB Space",
          support: "24h Live Support",
          doc: "Documetation inside",
          seo: "SEO Plan",
          promo: true
        },
        {
          name: "beginner",
          price: "$59",
          cent: "90",
          per: "Per Month",
          email: "2 E-mail Addresess",
          gb: "25 GB Space",
          support: "24h Live Support",
          doc: "Documetation inside",
          seo: "SEO Plan",
          promo: false
        }
      ]
    };
  },
  computed: {
    cImg() {
      var image = [];
      for (let i = 0; i < this.img.length; i++) {
        if (this.img[i].class === true) {
          image.push(this.img[i]);
        }
      }
      return image;
    },
    groupWidth() {
      return document.documentElement.clientWidth * 3 + "px";
    },

    windowWidth() {
      return document.documentElement.clientWidth + "px";
    }
  },
  methods: {
    getWidth() {},
    active(e) {
      if (e.target.tagName !== "BUTTON") return;
      if (!this.disabled) return;
      this.disabled = false;
      var elements = e.target.parentNode.childNodes;
      var index = e.target.getAttribute("data-index") - 1;
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("button-active");
      }
      e.target.classList.add("button-active");
      this.iterator = index;

      setTimeout(() => {
        for (let i = 0; i < this.img.length; i++) {
          this.img[i].class = false;
        }
        this.img[index].class = true;
      }, 100);

      setTimeout(() => {
        this.disabled = true;
      }, 800);
    }
  },
  beforeCreate() {
    console.log("beforeCreate from Home");
  },
  created() {
    console.log("created from Home");
  },
  beforeMount() {
    console.log("beforeMount from Home");
  },
  mounted() {
     $('.pralax-background').parallax({imageSrc: 'static/images/pricing.jpg',
});

    //---------found scroll width---------//

    var div = document.createElement("div");

    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth + 1;
    document.body.removeChild(div);
    this.scrollWidth = scrollWidth;

    //---------init adaptive preview---------//

    window.onresize = function() {
      var width = document.documentElement.clientWidth + scrollWidth;
      var images = document.querySelectorAll(".preview__images__image");
      var imageGroup = document.querySelector(".preview__images__group");
      var active = document.querySelector(".active-image");
      var imageIndex = active.getAttribute("data-index");

      for (let i = 0; i < images.length; i++) {
        images[i].style.width = width + "px";
      }
      imageGroup.style.width = width * 2 + "px";
      imageGroup.style.transform = `translate(-${width * 0}px)`;
    };

    //---------init preview slider---------//

    var buttons = this.$refs.button;
    buttons[1].classList.add("active");

    this.timer = setTimeout(
      function tick() {
        if (this.iterator >= buttons.length - 1) {
          this.iterator = 0;
        }
        buttons[this.iterator].click();
        this.iterator++;
        this.timer = setTimeout(tick.bind(this), 5000);
      }.bind(this),
      5000
    );

    //---------init classes slider---------//

    let items = this.$refs.items,
      itemsContainer = this.$refs.itemContainer,
      beforeEl = itemsContainer.children[0],
      sliderWidth = this.$refs.slider.offsetWidth;
    const startChildren = itemsContainer.children.length;

    for (let i = 0; i < items.length; i++) {
      let clonebefore = items[i].cloneNode(true),
        cloneAfter = items[i].cloneNode(true);

      clonebefore.classList.add("clone");
      cloneAfter.classList.add("clone");
      itemsContainer.appendChild(cloneAfter);
      itemsContainer.insertBefore(clonebefore, beforeEl);
    }

    let elemWidth = beforeEl.offsetWidth,
      elemMargin = +getComputedStyle(beforeEl).marginRight.slice(0, -2);
    itemsContainer.style.width =
      (elemWidth + elemMargin) * itemsContainer.children.length + "px";
    let translateContainer = (elemWidth + elemMargin) * startChildren;
    itemsContainer.style.transform = `translateX(-${translateContainer}px)`;
    // itemsContainer.style.transition = "all 1s";

    this.iteratorClasses = startChildren;

    this.timerClasses = setTimeout(
      function tick() {
        this.timeout = 5000;
        itemsContainer.style.transition = "all 1s";
        this.iteratorClasses++;
        if (
          this.iteratorClasses >
          itemsContainer.children.length - startChildren
        ) {
          this.iteratorClasses = startChildren;
          itemsContainer.style.transition = null;
          this.timeout = 100;
          setTimeout(
            function() {
              itemsContainer.style.transform = `translateX(-${translateContainer}px)`;
            }.bind(this),
            100
          );

          setTimeout(
            function() {
              itemsContainer.style.transition = "all 1s";
            }.bind(this),
            100
          );
        }

        itemsContainer.style.transform = `translateX(-${(elemWidth +
          elemMargin) *
          this.iteratorClasses}px)`;

        this.timerClasses = setTimeout(tick.bind(this), this.timeout);
      }.bind(this),
      this.timeout
    );

    $(document).ready(function() {
      $(".pricing__slider").owlCarousel({
        responsive: {
          //Адаптивность. Кол-во выводимых элементов при определенной ширине.
          0: {
            items: 1
          },
          766: {
            items: 2
          },
          1000: {
            items: 3
          }
        },
        margin: 30,
        items: 3
      });
    });
  },
  beforeUpdate() {},
  updated() {
    var el = document.querySelectorAll(".preview__images__image");
    var width = document.documentElement.clientWidth + this.scrollWidth;
    for (let i = 0; i < el.length; i++) {
      el[i].style.width = width + "px";
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {}
};
</script>

<style>
.info-enter {
  opacity: 0;
}

.info-enter-active {
  transition: opacity 1.2s;
  transition-delay: 0.6s;
}

.info-enter-to {
  opacity: 1;
}

.ma-enter {
  opacity: 1;
  transform: translate(0%);
}

.ma-enter-active {
  transition: transform 0.8s ease;
}

.ma-enter-to {
  transform: translate(-100%);
}

.ma-leave-active {
  transition: transform 0.8s ease;
}

.ma-leave-to {
  transform: translateX(-100%);
}

.pricing {
  width: 100%;
  min-height: 900px;
  position: relative;
  padding: 100px 0px;
}

.pricing__header-container {
  text-align: center;
}

.pricing__container {
  width: 1140px;
  min-height: 566px;
  padding: 0 15px;
  margin: 0 auto;
}

.pricing__classes-header {
  color: white;
  margin-top: 8px;
}

.pricing__item {
  min-height: 620px;
  width: 350px;
}
.pralax-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.classes {
  width: 100%;
  padding: 97px 0px 100px 0px;
}

.classes__container {
  width: 1140px;
  min-height: 566px;
  padding: 0 15px;
  margin: 0 auto;
}

.classes__header-container {
  text-align: center;
}

.classes__classes-header {
  margin-top: 8px;
}

.classes-slider {
  width: 100%;
  min-height: 401px;
  margin-top: 90px;

  position: relative;
  overflow: hidden;
}

.cta {
  display: flex;
  width: 100%;
  min-height: 665px;
  position: relative;
}

.cta__image {
  box-sizing: border-box;
  min-height: 100%;
  width: 40%;
  background-image: url(../../../public/cta.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.list__cell::before {
  background: url(../../../public/check.png);
}

.cta__content {
  background-color: #190a49;
  width: 60%;
}

.cta__content__cantainer {
  padding: 95px 160px 88px 140px;
  min-height: 100%;
}

.cta__gym-header {
  margin: 0;
  margin-top: 8px;
}

.cta__gym-header {
  color: #ffffff;
}

.cta__button {
  margin-top: 49px;
  margin-right: 20px;
}

.quote__name {
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: #2c2c2c;
  margin-top: 42px;
  text-align: center;
}

.quote__blackquote-text {
  text-align: center;
  margin-top: 89px;
}

.quote {
  padding-bottom: 97px;
}

.about-sportify {
  padding: 96px 0 99px 0;
  position: relative;
}

.about-sportify hr {
  position: absolute;
  height: 0.5px;
  border: none;
  margin: 0;
  background-color: lightgrey;
  width: calc(100% - 250px);
  bottom: 0;
  margin-left: 70px;
}

.about-sportify__container {
  display: flex;
  max-width: 1140px;
  margin: 0 auto 0 auto;
  padding: 0 15px;
}

.quote__conteiner {
  max-width: 1140px;
  margin: 0 auto 0 auto;
  padding: 0 15px;
}

.about__sportify-header {
  margin-top: 8px;
}

.about__description {
  margin-top: 25px;
}

.about__button {
  margin-top: 36px;
}

.about {
  margin-right: 30px;
}

.preview {
  width: 100%;
}

.preview__images {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.preview__images__group {
  height: 919px;
  transition: all 0.8s;
}

.preview__images__image {
  position: relative;
  height: 100%;
  background-image: url(../../../public/index.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  margin: 0;
  margin-left: 0px;
}

.preview__images__image__info {
  position: absolute;
  max-width: 700px;
  left: 205px;
  top: 355px;
}

.info__text {
  font-size: 18px;
  letter-spacing: 3px;
  word-spacing: 3px;
  margin-left: 4px;
}

.info__header {
  font-size: 70px;
  letter-spacing: 15px;
  word-spacing: 3px;
  line-height: 80px;
  margin-top: 12px;
}

.bth-one__text {
  font-weight: bolder;
  font-size: 14px;
}

.image__info__btn-one {
  margin: 40px 0 0 8px;
}

.preview__images__bth-group {
  position: absolute;
  bottom: 50px;
  left: 200px;
}

.programs {
  width: 100%;
  display: flex;
}

.aerobics {
  background-color: #190a49;
}

.aerobics__logo {
  background-image: url(../../../public/icon_1.svg);
}

.hard {
  background-color: #3c098d;
}

.hard__logo {
  background-image: url(../../../public/icon_2.svg);
}

.basic {
  background-color: #ff0e3b;
}

.basic__logo {
  background-image: url(../../../public/icon_3.svg);
}

.about-sportify_logo {
  width: 350px;
  height: 350px;
  flex-shrink: 0;
  background-image: url(../../../public/about.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.pralax-background {
  background: transparent;
}

.classes-slider__carousel{
  width: 100%;
}

@media (max-width: 1350px) {
  .preview__images__image__info {
    left: 95px;
  }

  .about-sportify {
    padding-left: 60px;
    padding-right: 60px;
  }

  .about-sportify_logo {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 1200px) {
  .cta {
    display: block;
  }

  .cta__image {
    width: 100%;
    height: 600px;
  }

  .cta__content {
    width: 100%;
  }

  .cta__content__cantainer {
    padding-left: 200px;
  }

  .classes__container {
    width: 960px;
  }

  .carousel__item {
    width: 290px;
  }

  .classes-slider {
    height: 430px;
  }

  .pricing__container {
    width: 960px;
  }

  .pricing__item {
    width: 290px;
  }
}

@media (max-width: 1050px) {
  .preview__images__image__info {
    left: 150px;
  }

  .info__header {
    font-size: 56px;
    line-height: 60px;
    letter-spacing: 8px;
  }

  .programs {
    display: block;
  }

  .pr-card {
    display: block;
    padding-top: 109px;
  }

  .pr-card__logo {
    margin-top: 0;
  }

  .about-sportify__container {
    display: block;
  }

  .about {
    margin-right: 0px;
  }

  .about__description {
    padding: 0;
  }

  .about-sportify_logo {
    width: 350px;
    height: 350px;
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta__content__cantainer {
    padding-left: 100px;
    padding-right: 100px;
  }
  .classes__container {
    width: 720px;
  }

  .carousel__item {
    width: 330px;
  }
}

@media (max-width: 990px) {
  .pricing__container {
    width: 720px;
  }

  .pricing__item {
    width: 330px;
  }
}

@media (max-width: 850px) {
  .preview__images__image__info {
    left: 60px;
  }

   .cta__content__cantainer {
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 766px) {
  .pricing__container {
    width: 540px;
  }

  .pricing__item {
    width: 100%;
  }
}

@media (max-width: 730px) {
  .classes__container {
    width: 540px;
  }

  .carousel__item {
    width: 510px;
  }
}

@media (max-width: 560px) {
  .info__header {
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 8px;
  }

  .info__text {
    font-size: 15px;
  }

  .preview__images__image__info {
    left: 20px;
    top: 230px;
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

  .preview__images__bth-group {
    display: none;
  }

  .preview__images__group {
    height: 600px;
  }

  .pr-card {
    padding-right: 30px;
    padding-left: 30px;
  }

  .about-sportify {
    padding-left: 15px;
    padding-right: 15px;
  }



  .about-sportify_logo {
    width: 250px;
    height: 250px;
  }

  .about-sportify__container{
    padding-left: 0px;
    padding-right: 0px;
  }

  .about__sportify-header,
  .cta__gym-header,
  .classes__classes-header,
  .pricing__classes-header {
    font-size: 36px;
  }

  .about-sportify hr {
    width: calc(100% - 110px);
  }

  .quote__blackquote-text {
    font-size: 20px;
  }

  .quote__name {
    font-size: 14px;
    font-weight: 400;
  }

  .cta__content__cantainer {
    padding-left: 15px;
    padding-right: 15px;
  }

  .classes__container {
    width: 510px;
  }

  .carousel__item {
    width: 480px;
  }

  .pricing__container {
    width: 100%;
  }

  .item__content {
    width: 100%;
  }
}

@media (max-width: 530px) {
.classes__container {
    width: 460px;
  }

  .carousel__item {
    width: 430px;
  }
}

@media (max-width: 480px) {
.classes__container {
    width: 410px;
  }

  .carousel__item {
    width: 380px;
  }
}

@media (max-width: 425px) {
.classes__container {
    width: 360px;
  }

  .carousel__item {
    width: 330px;
  }

  .classes-slider {
    height: 100%;
  }
}

.classes__container {
  height: 610px;
}


@media (max-width: 380px) {
.classes__container {
    width: 310px;
  }

  .carousel__item {
    width: 280px;
  }
}

@media (max-width: 330px) {
.classes__container {
    width: 280px;
  }

  .carousel__item {
    width: 250px;
  }
}
</style>
