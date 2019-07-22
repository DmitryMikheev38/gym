<template>
<transition name="sh" appear>
  <div class="burger-main" ref="burgerMain">
    <div class="left-gate gate" ref="left"></div>
    <div class="rigth-gate gate" ref="rigth"></div>
    <div class="burger-nain__wrapper" ref="wrap">
      <div class="main burger-nain__main" @click="close">
        <router-link tag="a" to="/" class="main-button main__main-button">Home</router-link>
        <router-link tag="a" to="/aboutUs" class="main-button main__main-button">About us</router-link>
        <router-link tag="a" to="/classes" class="main-button main__main-button">Classes</router-link>
        <router-link tag="a" to="/blog" class="main-button main__main-button">Blog</router-link>
        <router-link tag="a" to="/contact" class="main-button main__main-button">Contact</router-link>
      </div>

      <a href="#" class="burger-main__close close-btn" @click="close">Close</a>

      <div class="social-network burger-main__social-network">
        <router-link tag="a" to class="social-network__icon pintres">
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
        </router-link>

        <router-link tag="a" to class="social-network__icon facebook">
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
        </router-link>

        <router-link tag="a" to class="social-network__icon tw">
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
        </router-link>

        <router-link tag="a" to class="social-network__icon ball">
          <svg class="icon icon-dribbble">
            <use xlink:href="#icon-dribbble">
              <symbol id="icon-dribbble" viewBox="0 0 32 32">
                <title>dribbble</title>
                <path
                  d="M16 32c-8.825 0-16-7.175-16-16s7.175-16 16-16c8.825 0 16 7.175 16 16s-7.175 16-16 16v0zM29.494 18.188c-0.469-0.15-4.231-1.269-8.512-0.581 1.788 4.912 2.512 8.912 2.656 9.744 3.063-2.075 5.25-5.356 5.856-9.163v0zM21.337 28.6c-0.206-1.2-0.994-5.375-2.913-10.363-0.031 0.012-0.063 0.019-0.087 0.031-7.713 2.688-10.481 8.031-10.725 8.531 2.319 1.806 5.231 2.887 8.387 2.887 1.894 0 3.7-0.387 5.338-1.087v0zM5.844 25.156c0.313-0.531 4.063-6.738 11.106-9.019 0.175-0.056 0.356-0.113 0.538-0.162-0.344-0.775-0.719-1.556-1.106-2.319-6.819 2.044-13.444 1.956-14.044 1.95-0.006 0.137-0.006 0.275-0.006 0.419 0 3.506 1.331 6.712 3.512 9.131v0zM2.625 13.219c0.612 0.006 6.244 0.031 12.637-1.662-2.262-4.025-4.706-7.412-5.069-7.906-3.825 1.806-6.688 5.331-7.569 9.569v0zM12.8 2.731c0.375 0.506 2.863 3.888 5.1 8 4.863-1.819 6.919-4.588 7.163-4.938-2.413-2.144-5.587-3.444-9.063-3.444-1.1 0.006-2.175 0.138-3.2 0.381v0zM26.581 7.381c-0.288 0.388-2.581 3.325-7.631 5.388 0.319 0.65 0.625 1.313 0.906 1.981 0.1 0.238 0.2 0.469 0.294 0.706 4.55-0.569 9.069 0.344 9.519 0.438-0.031-3.225-1.188-6.188-3.087-8.512v0z"
                />
              </symbol>
            </use>
          </svg>
        </router-link>

        <router-link tag="a" to class="social-network__icon be">
          <svg class="icon icon-behance">
            <use xlink:href="#icon-behance">
              <symbol id="icon-behance" viewBox="0 0 32 32">
                <title>behance</title>
                <path
                  d="M9.281 6.412c0.944 0 1.794 0.081 2.569 0.25 0.775 0.162 1.431 0.438 1.988 0.813 0.55 0.375 0.975 0.875 1.287 1.5 0.3 0.619 0.45 1.394 0.45 2.313 0 0.994-0.225 1.819-0.675 2.481-0.456 0.662-1.119 1.2-2.006 1.625 1.213 0.35 2.106 0.962 2.706 1.831 0.6 0.875 0.887 1.925 0.887 3.163 0 1-0.194 1.856-0.575 2.581-0.387 0.731-0.912 1.325-1.556 1.781-0.65 0.462-1.4 0.8-2.237 1.019-0.831 0.219-1.688 0.331-2.575 0.331h-9.544v-19.688h9.281zM8.719 14.363c0.769 0 1.406-0.181 1.906-0.55 0.5-0.363 0.738-0.963 0.738-1.787 0-0.456-0.081-0.838-0.244-1.131-0.169-0.294-0.387-0.525-0.669-0.688-0.275-0.169-0.588-0.281-0.956-0.344-0.356-0.069-0.731-0.1-1.113-0.1h-4.050v4.6h4.388zM8.956 22.744c0.425 0 0.831-0.038 1.213-0.125 0.387-0.087 0.731-0.219 1.019-0.419 0.287-0.194 0.531-0.45 0.706-0.788 0.175-0.331 0.256-0.756 0.256-1.275 0-1.012-0.287-1.738-0.856-2.175-0.569-0.431-1.325-0.644-2.262-0.644h-4.7v5.419h4.625z"
                />
                <path
                  d="M22.663 22.675c0.587 0.575 1.431 0.863 2.531 0.863 0.788 0 1.475-0.2 2.044-0.6s0.913-0.825 1.044-1.262h3.45c-0.556 1.719-1.394 2.938-2.544 3.675-1.131 0.738-2.519 1.113-4.125 1.113-1.125 0-2.131-0.181-3.038-0.538-0.906-0.363-1.663-0.869-2.3-1.531-0.619-0.663-1.106-1.45-1.45-2.375-0.337-0.919-0.512-1.938-0.512-3.038 0-1.069 0.175-2.063 0.525-2.981 0.356-0.925 0.844-1.719 1.494-2.387s1.413-1.2 2.313-1.588c0.894-0.387 1.881-0.581 2.975-0.581 1.206 0 2.262 0.231 3.169 0.706 0.9 0.469 1.644 1.1 2.225 1.887s0.994 1.694 1.25 2.706c0.256 1.012 0.344 2.069 0.275 3.175h-10.294c0 1.119 0.375 2.188 0.969 2.756zM27.156 15.188c-0.462-0.512-1.256-0.794-2.212-0.794-0.625 0-1.144 0.106-1.556 0.319-0.406 0.213-0.738 0.475-0.994 0.787-0.25 0.313-0.425 0.65-0.525 1.006-0.1 0.344-0.163 0.663-0.181 0.938h6.375c-0.094-1-0.438-1.738-0.906-2.256z"
                />
                <path d="M20.887 8h7.981v1.944h-7.981v-1.944z" />
              </symbol>
            </use>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  methods: {
    close (e) {
      e.preventDefault();
      console.log(this.$refs.rigth)
      const left = this.$refs.left;
      const right = this.$refs.rigth;
      const wrap = this.$refs.wrap;

      Object.assign(left.style, {
        transitionDelay: "0.3s",
        width: "0"
      })

      Object.assign(right.style, {
        transitionDelay: "0.3s",
        width: "0"
      })

      wrap.style.opacity = '0';
       wrap.style.transitionDelay = '0s'
      // right.style.width = '0';
      // left.style.width = '0';

      setTimeout(() => {
        this.$refs.burgerMain.style.display = 'none';
      }, 1500)
    }
  }
};
</script>

<style scoped>
.burger-main {
  position: fixed;
  width: 100%;
  top: 0;
  min-height: 100%;
  /* background-color: rgba(25, 10, 73, 0.85); */
  z-index: 10000;
  display: none;
}

.gate {
  position: absolute;
  width: 0%;
  height: 100%;
  background-color: rgba(25, 10, 73, 0.85);
  transition: all 1.2s;
}

.left-gate {
  right: 50%;
}

.rigth-gate {
  left: 50%;
}

.burger-nain__wrapper {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
}

.burger-nain__main {
  display: block;
  width: 200px;
  height: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto 0 auto;
  text-align: center;
}

.main__main-button {
  display: block;
  margin: 0;
  font-size: 30px;
  margin-top: 6px;
  letter-spacing: 6px;
}

.burger-main__social-network {
  position: absolute;
  bottom: 25px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  width: 200px;
}

.social-network__icon{
  margin-right: 25px;
}

.social-network__icon:last-child {
margin-right: 0;
}

.sh-enter {
 width: 0%;
 opacity: 0;
}

.sh-enter-active {
  transition: all 1s;
}

.sh-enter-to {
  width: 100%;
  opacity: 1;
}

</style>
