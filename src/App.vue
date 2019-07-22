<template>
  <div class="app-container">
    <my-header></my-header>
    <my-header class="my-header" ref="myHeader"></my-header>
    <my-content></my-content>
    <transition name="show" appear>
      <my-burger-main></my-burger-main>
     </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
import content from "@/components/content";
import burgerMain from "@/components/burgerMain"

export default {
  name: "App",
  components: {
    myHeader: header,
    myFooter: footer,
    myContent: content,
    myBurgerMain: burgerMain
  },

  beforeCreate() {
    console.log("beforeCreate from App");
  },
  created() {
    console.log("created from App");
  },
  beforeMount() {
    console.log("beforeMount from App");
  },
  mounted() {
    const header = $(".my-header")[0];
    let height = header.offsetHeight
    header.style.transform = `translateY(-${height}px)`;
    window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
       if (scrolled > 133) {
         header.style.transform = `translateY(0px)`;
       } else {
          header.style.transform = `translateY(-${height}px)`;
       }
    };
  },
  beforeUpdate() {
    console.log("beforeUpdate from App");
  },
  updated() {
    console.log("updated from App");
  }
};
</script>

<style>
/* .my-header {
  position: absolute;
} */

.hidden-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.show-enter {
 transform: scale(0,0)
}

.show-enter-active {
  transition: all 1s;
}

.show-enter-to {
  transform: scale(1,0)
}

.show-leave-active {
  transition: transform 0.8s ease;
}

.show-leave-to {
  transform: translateX(-100%);
}

/* .app-container {
  width: 100%;
} */
</style>
