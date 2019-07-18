<template>
<div class="wrap">
    <div class="owl-carousel owl-theme pricing">
      <div v-for="item in 5" :key="item" class="ff">
        <div class="dd">
                  <img src="../../../public/index.jpg" alt="" srcset="">

        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      img: [
        {color: 'red', index: 0},
        {color: 'green', index: 1},
        {color: 'yellow', index: 2},
        {color: 'gray', index: 3},
        {color: 'brown', index: 4},
        {color: 'blue', index: 5},
      ],
      transl: 0
    }
  },
  computed: {
    // transl () {

    // }
  },
  methods: {
    cl (e) {
      var cont = this.$refs.conteiner;

      var index = Number(e.target.getAttribute('data-index'))
      if(index === 5) {
        index = 0;
      }
      console.log(cont)
      this.transl = `translate3d(-${index*200}px, 0px, 0px)`;
      console.log(this.transl)

    },

    remove (e) {
      e.target.remove();
    }
  },
  mounted () {
    $(document).ready(function() {
      $(".pricing").owlCarousel({
        responsive: {
          //Адаптивность. Кол-во выводимых элементов при определенной ширине.
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        },
        margin: 30,
        items: 3,
        nav: false,
        dots: false,
      });
    });
  }
}
</script>

<style scoped>
.ma-enter {
  opacity: 1;
 transform: translate(0%)
}



.ma-enter-active {
  transition: all 1s linear;
}

.ma-enter-to {
  transform: translate(-100%)
}

.pricing {
  margin-top: 400px;
  width: 100%;
  height: 100px;
}

.ff {
  widows: 100%;
  height: 100%;
}

.dd {
  width: 100%;
  height:1 100%
}



.ma-leave-active {
  /* animation: 3s slid linear;
 */

transition: all 1s linear;
}
.ma-leave-to {
  transform: translateX(-200px);
}

@keyframes slid {
  from {
    transform: translateX(000px);
  }

  to {
    transform: translateX(-200px);
  }

}

img {
  width: 300px;
  height: 200px
}

.slide {
  width: 600px;
  height: 200px;
  border: 1px solid black;
  position: absolute;
  top: 40%;
  left: 30%;
  z-index: 100;

}

.image {
  width: 200px;
  height: 200px;
  display: inline-block;
  position: relative;
  opacity: 0.5;
  transition: all 1s linear;

}

.image-container {
  /* width: auto;
  height: 200px; */
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 90;
   transition: all 1s linear;
}

.toglle {
  height: 20px;
  width: 20px;
  border-radius: 50%;

}

.buttons {
  position: absolute;
  bottom: 30px;
}

.button-active {
  background-color: brown;
}

.wrap {
  width: 500px;
  overflow: hidden;
}

</style>
