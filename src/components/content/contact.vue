<template>
  <div class="container">
    <div class="home">
      <div class="home__prallax" data-parallax="scroll" data-speed="0.8" bleed="100"></div>
      <div class="home__overlay"></div>
      <div class="home__container">
        <h1 class="header-1 home__header bold">Classes</h1>
      </div>
    </div>

    <div class="contact">
      <div class="contact__container">
        <div class="contact__row">
          <div class="contact__info">
            <div class="logo contact__logo">
              <img src="static/images/logo_2.png" alt srcset />
            </div>
            <h4 class="contact__title">Our Contact Info</h4>
            <div class="contact__description">
              <div class="contact__description__left">
                <p class="text-gray">
                  Auctor nisl vitae auctor faucibus.
                  Pellentesque imperdiet auctor eros,
                  sit amet ornare mauris malesuada in.
                  Duis rutrum nisi tempus finibus luctus.
                  Sed porta vel lacus quis.
                </p>
              </div>
              <div class="contact__description__right">
                <ul class="description__right__list">
                  <li>Main Str, no 23, New York</li>
                  <li>+546 990221 123</li>
                  <li>gymsportify@contact.com</li>
                </ul>
              </div>
            </div>
            <div class="contact__form">
              <div class="contact__form__row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  class="input contact__form__input--name"
                  required="required"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  class="input contact__form__input--email"
                  required="required"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Subject"
                  class="input contact__form__input--subject"
                  required="required"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  class="textarea contact__textarea--message"
                ></textarea>
              </div>

              <button class="btn-two btn-two--send contact__button">
                <span class="bth-two__text text--upper">Send message</span>
              </button>
            </div>
          </div>

          <div class="contact__map">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.453716006388!2d39.81903401558298!3d47.26638457916363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b730478b239f%3A0xc9b4f4268e120a5c!2z0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YM!5e0!3m2!1sru!2sru!4v1564411722114!5m2!1sru!2sru"
                frameborder="0"
                height="1008"
              ></iframe>
            </div>
          </div>
        </div>
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

.contact__row {
  display: flex;
}

.contact__info,
.contact__map {
  min-width: 50%;
}

.contact__info {
  padding: 100px 0 100px 90px;
}

.contact__title {
  font-size: 24px;
  font-weight: 700;
  color: #2c2c2c;
  margin-top: 36px;
}

.contact__description {
  min-width: 100%;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 30px;
  display: flex;
}

.contact__description__right,
.contact__description__left {
  width: 50%;
  padding: 0 15px;
}

.contact__description__left > p {
  text-align: left;
}

.description__right__list {
  list-style: none;
}

.description__right__list li {
  position: relative;
  padding-left: 27px;
  font-size: 15px;
  font-weight: 400;
  color: #2c2c2c;
  height: 22px;
  line-height: 22px;
}

.description__right__list li::before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 50%;
  width: 11px;
  height: 11px;
  background: #ff0e3b;
  top: 6px;
  left: 0;
}

.description__right__list li:not(:last-of-type) {
  margin-bottom: 22px;
}

.contact__form {
  margin-top: 76px;
}

.contact__form__row {
  min-width: 100%;
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
}

.input {
  margin: 0 15px 25px 15px;
}

.contact__form__input--email,
.contact__form__input--name {
  width: calc(50% - 30px);
}

.contact__form__input--subject {
  width: 100%;
}

.contact__textarea--message {
  width: 100%;
  margin: 0 15px;
}

.contact__button {
  margin-top: 25px;
}

.contact__map {
  min-height: 100%;
  padding-left: 110px;
}

.map {
  min-height: 100%;
  min-width: 100%;
  display: block;
}

.map > iframe {
  display: block;
  max-height: 100%;
  min-width: 100%;
}

@media (max-width: 1200px) {
  .contact__container {
    width: 960px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .contact__description__left {
    width: 100%;
  }

  .contact__row,
  .contact__description {
    display: block;
  }

  .contact__info,
  .contact__map {
    padding-left: 0;
  }

  .description__right__list {
        margin-top: 41px;
  }

  .contact__container {
    padding-bottom: 100px;
  }

  .contact__map {
    height: 600px;
    overflow: hidden;
  }
}

@media (max-width: 990px)  {
  .contact__container {
    width: 720px;
  }
}

@media (max-width: 770px) {
  .contact__container {
    width: 540px;
  }


  .contact__form__input--name,
  .contact__form__input--email {
    width: 100%;
  }
}

@media (max-width: 575px) {
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
  .contact__container {
    width: 100%;
  }
}
</style>
