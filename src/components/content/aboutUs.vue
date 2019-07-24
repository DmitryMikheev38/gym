<template>
  <div class="about-us">
    <div class="about">
      <div
        class="abount__prallax"
        data-parallax="scroll"
        data-image-src="static/images/about.jpg"
        data-speed="0.7"
        bleed="100"
      ></div>
      <div class="about__overlay"></div>
      <div class="about__container">
        <h1 class="header-1 about__header bold">About us</h1>
      </div>
    </div>

    <div class="sportify">
      <div class="sportify__container">
        <div class="sportify__content">
          <h4 class="header-4 sportify__aerobic-program">AEROBICS PROGRAM</h4>
          <h2 class="header-2 sportify__header">ABOUT SPORTIFY</h2>
          <p class="text sportify__description">
            Aenean auctor nisl vitae auctor faucibus.
            Pellentesque imperdiet auctor eros,
            sit amet ornare mauris malesuada in.
            Duis rutrum nisi tempus finibus luctus.
            Sed porta vel lacus quis lacinia.
            Vestibulum nec justo lectus.
            In hac habitasse platea dictumst.
            Proin vulputate rhoncus nibh eu vehicula.
            Donec vitae laoreet quam, ac feugiat nibh.
            Aenean auctor nisl vitae auctor faucibus.
            Pellentesque imperdiet auctor eros,
            sit amet ornare mauris malesuada in.
            Duis rutrum nisi tempus finibus luctus.
          </p>
          <button class="btn-one sportify__button">
            <span class="bth-one__text text--upper">read more</span>
          </button>
        </div>
        <div class="sportify__image">
          <div class="image__wrap">
            <img src="static/images/about_2.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="quote">
      <div class="quote__container">
        <blockquote class="quote__text blackquote-text">“Train like a beast look like a beauty”</blockquote>
      </div>
    </div>

    <div class="trainers">
      <div class="trainers__container">
        <h4 class="header-4 trainers__aerobic-program">AEROBICS PROGRAM</h4>
        <h2 class="header-2 trainers__header">OUR TRAINERS</h2>
        <div class="trainers__cards">
          <div class="trainer-card" v-for="card in trainersCards" :key="card.photo">
            <div class="trainer-card__photo">
              <img :src="card.photo" alt class="trainer-card__image" />
              <div class="trainer-card__info">
                <p class="trainer-card__info__name">{{card.name}}</p>
                <p class="trainer-card__info__work">{{card.work}}</p>
                <div class="trainer-card__info__network">
                  <a href class="network__link pinterest">
                    <svg class="icon icon-pinterest">
                      <use xlink:href="#icon-pinterest">
                        <symbol id="icon-pinterest" viewBox="0 0 32 32">
                          <title>pinterest</title>
                          <path
                            d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z"
                          />
                        </symbol>
                      </use>
                    </svg>
                  </a>
                  <a href class="network__link facebook">
                    <svg class="icon icon-facebook">
                      <use xlink:href="#icon-facebook">
                        <symbol id="icon-facebook" viewBox="0 0 32 32">
                          <title>facebook</title>
                          <path
                            d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
                          />
                        </symbol>
                      </use>
                    </svg>
                  </a>
                  <a href class="network__link twitter">
                    <svg class="icon icon-twitter">
                      <use xlink:href="#icon-twitter">
                        <symbol id="icon-twitter" viewBox="0 0 32 32">
                          <title>twitter</title>
                          <path
                            d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
                          />
                        </symbol>
                      </use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="trainer-card__descrioption">
              <p class="text-gray">
                {{card.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta">
      <div class="cta__container">
        <div class="cta__image"></div>
        <div class="cta__content">
          <h4 class="header-4 cta__aerobic-program">AEROBICS PROGRAM</h4>
          <h2 class="header-2 cta__header">GET A PERSONAL TRAINER</h2>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      trainersCards: [
        {
          photo: "/static/images/trainer_1.jpg",
          name: "michael shmith",
          work: "Pilates Trainer",
          description:
            "Nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in."
        },
        {
          photo: "static/images/trainer_2.jpg",
          name: "jenny williams",
          work: "Pilates Trainer",
          description:
            "Nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in."
        },
        {
          photo: "static/images/trainer_3.jpg",
          name: "james shmith",
          work: "Pilates Trainer",
          description:
            "Nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in."
        },
        {
          photo: "static/images/trainer_4.jpg",
          name: "cris white",
          work: "Pilates Trainer",
          description:
            "Nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in."
        }
      ]
    };
  },
  mounted() {
    $(".abount__prallax").parallax({ imageSrc: "static/images/about.jpg" });
  },
  beforeDestroy() {
    const mirror = $('.parallax-mirror')
    for (let i =0; i<mirror.length; i++) {
      mirror[i].remove()
    }
  }
};
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  min-height: 371px;
}

.abount__prallax {
  position: absolute;
  width: 100%;
  min-height: 371px;
  background: transparent;
}

.about__overlay {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34));
}

.about__header {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 12px;
}

.about__container {
  min-height: 371px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  padding-top: 162px;
  position: relative;
}

.about__header {
  margin-top: 65px;
  text-align: center;
  vertical-align: middle;
}

.sportify__container {
  display: flex;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}

.sportify__content {
  max-width: 66.666%;
  padding-right: 15px;
  padding-top: 125px;
  padding-bottom: 62px;
}

.sportify__image {
  max-width: 33.333333%;
  padding-left: 15px;
}

.sportify__header {
  margin-top: 8px;
}

.image__wrap {
  height: 100%;
}

.image__wrap > img {
  display: block;
  max-width: none;
  min-height: 100%;
}

.sportify__description {
  color: #909090;
  font-size: 14px;
  line-height: 2.145;
  font-weight: 400;
  padding-right: 60px;
  margin-top: 25px;
}

.sportify__button {
  margin-top: 36px;
}

.quote {
  min-height: 187px;
  width: 100%;
  background: linear-gradient(to right, #7800ff, #ff0e3b);
}

.quote__container {
  display: flex;
  min-height: 187px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
}

.blackquote-text {
  color: white;
  text-align: center;
}

.trainers {
  padding-top: 97px;
  padding-bottom: 39px;
}

.trainers__container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}

.trainers__aerobic-program,
.trainers__header {
  text-align: center;
}

.trainers__header {
  margin-top: 8px;
}

.trainers__cards {
  margin-top: 90px;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.cta__container {
  display: flex;
}

.cta__image {
  width: 40%;
  min-height: 100%;
  background: url(/static/images/cta_2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cta__content {
 width: 60%;
min-height: 770px;
background-color: #0f0432;
padding: 171px 120px 149px 100px;
}

.cta__header {
  margin-top: 8px;
  color: white;
}

.cta__description {
  text-align: left;
  padding-right: 50px;
  margin-top: 29px;
}

.cta__button {
  margin-top: 56px;
}

@media (max-width: 1350px) {

}

@media (max-width: 1200px) {
  .sportify__container,
  .quote__container,
  .trainers__container {
    width: 960px;
  }

  .cta__container {
    display: block;
  }

  .cta__image,
  .cta__content {
    width: 100%;
  }

  .cta__content {
    padding-left: 200px;
    padding-right: 220px;
    min-height: 710px;
  }

  .cta__image {
    height: 600px;
  }

  .trainer-card {
    width: 480px;
  }
}

@media (max-width: 1050px) {

}

@media (max-width: 990px) {
 .sportify__container {
    max-width: 720px;
    display: block;
  }

  .trainers__container,
  .quote__container {
    max-width: 720px;
  }

  .sportify__description {
    padding-right: 0;
  }

  .trainer-card {
    width: 360px;
  }

  .sportify__image, .sportify__content {
    max-width: 100%;
    display: block;
    margin: 0;
    padding-right: 0;
    padding-left: 0;
  }

  .cta__content {
    padding-left: 100px;
    padding-right: 120px;
  }
}

@media (max-width: 850px) {

}

@media (max-width: 770px) {
.sportify__container,
.quote__container,
.trainers__container {
    max-width: 540px;
}

.image__wrap > img {
  display: block;
  width: 100%;
}

.trainer-card {
    width: 100%;
  }

.cta__content {
    padding-left: 60px;
    padding-right: 80px;
  }
}

@media (max-width: 730px) {

}

@media (max-width: 575px) {

  .blackquote-text {
    font-size: 24px;
  }

  .about__header {
    font-size: 48px;
  }

  .sportify__container,
  .quote__container,
  .trainers__container {
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

  .cta__content {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 124px;
    padding-bottom: 120px;
  }

  .cta__description {
    padding-right: 0;
  }

}

@media (max-width: 530px) {

}

@media (max-width: 480px) {

}

@media (max-width: 425px) {

}



@media (max-width: 380px) {

}

@media (max-width: 330px) {

}

</style>
