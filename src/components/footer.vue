<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__container">
        <a class="logo footer__logo">
          <img src="../assets/logo_2.png" alt srcset />
        </a>
        <div class="footer__contacts">
          <div
            v-for="contact in contacts"
            :key="contact.heading"
            class="footer__contacts__block contact-block"
          >
            <div class="contact-block-icon">
              <img :src="contact.icon" alt />
            </div>
            <h3 class="contact-block__neader">{{contact.heading}}</h3>
            <span class="contact-block__string-1">{{contact.stringOne}}</span>
            <span class="contact-block__string-2">{{contact.stringTwo}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bar">
      <div class="copyright">
        <p>
          Copyright © 2019 All rights reserved
          | This template is made with
          <i class="copyrigth__icon">
            <svg class="icon icon-heart">
              <use xlink:href="#icon-heart">
                <symbol id="icon-heart" viewBox="0 0 32 32">
                  <title>heart</title>
                  <path
                    d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  />
                </symbol>
              </use>
            </svg>
          </i> by
          <a href="https://colorlib.com/" class="colorlib" >Colorlib</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          icon: "static/images/phone.png",
          heading: "TALK TO US",
          stringOne: "+34 5667 4332 244",
          stringTwo: "+224 667 889"
        },
        {
          icon: "static/images/mail.png",
          heading: "E-MAIL",
          stringOne: "CONTACT@SPORTIFY25.COM",
          stringTwo: "OFFICE@SPORTIFY25.COM"
        },
        {
          icon: "static/images/contact.png",
          heading: "LOCATION",
          stringOne: "MAIN STR. 25",
          stringTwo: "458811 CA"
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  min-height: 502px;
  background: #190a49;
}

.footer__content {
  width: 100%;
  min-height: 446px;
  padding: 99px 0 30px 0;
}

.footer__logo {
  margin-left: auto;
  margin-right: auto;
}

.footer__container {
  max-width: 1140px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.footer__contacts {
  width: 100%;
  display: flex;
  margin: 59px 0px 0 0px;
}

.footer__bar {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;
}

.copyright {
  font-size: 11px;
  font-weight: 700;
  color: #443586;
}



.icon-heart {
  fill: #443586;
  height: 12px;
}
.colorlib {
  color: #007bff;
  text-decoration: none;
  transition: all 0.3s;
}

.colorlib:hover {
  color: #047a8a;
}

@media (max-width: 900px) {
  .footer__contacts {
    display: block;
  }

  .footer__contacts__block {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    width: auto;
  }

}

</style>
