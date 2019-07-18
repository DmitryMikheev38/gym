<template>
  <div class="app-container">
    <my-header></my-header>
    <my-header class="my-header" ref="myHeader"></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import header from "@/components/header";
import footer from "@/components/footer";
import content from "@/components/content";

export default {
  name: "App",
  components: {
    myHeader: header,
    myFooter: footer,
    myContent: content
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

/* .app-container {
  width: 100%;
} */
</style>
