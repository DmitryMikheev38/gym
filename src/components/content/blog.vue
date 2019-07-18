<template>
  <div class="wrap">
    <div class="slide">

        <div class="image-container" ref="conteiner" @click="run">
          <transition name="ma" >
          <div class="image" v-for="image in  cImg" :key="image.index" :data-index='image.index' :style="{'background-color': image.color}"></div>
          </transition>
        </div>

      <div class="buttons" @click="toglle">
        <button class="toglle" ref="button" v-for="image in img" :key="image.index" :data-index="image.index">t</button>
      </div>

    </div>

  </div>

</template>

<script>
import { timeout } from 'q';
export default {
  data () {
    return {
      ff: false,
      img: [
          {url: 'url(../../../public/index.jpg)', class: true, index: 0, color: 'red'},
          {url: 'url(../../../public/cta.jpg)', class: false, index: 1, color: 'blue'},
          {url: 'url(../../../public/promo.jpg)', class: false, index: 2, color: 'green'}
        ],
      timer: '',
      iterator: 0,
      tr: 200
    }
  },
  computed: {
    cImg() {
      var image = [];
      for (let i =0; i<this.img.length; i++) {
        if (this.img[i].class === true) {
          image.push(this.img[i])
        }
      }
      return image
    }
  },
  methods: {
    run() {

    },
    toglle (e) {
      if (e.target.tagName !== 'BUTTON') return
      var index = e.target.getAttribute('data-index');
      var children = e.target.parentNode.children
      for (let i =0; i<children.length; i++) {
        children[i].classList.remove('button-active');
      }
      e.target.classList.add('button-active');
      this.iterator = index;
      setTimeout( () => {
        for (let i =0; i<this.img.length; i++) {
        this.img[i].class = false;
      }
      this.img[index].class = true;


      }, 1);




      // console.log(mounted.interval)
    }


  },
  mounted() {

    var buttons = this.$refs.button;
    // var iterator = this.iterator;
    this.timer = setTimeout(function tick () {
      console.log(this.iterator + 'fdfd')
      if(this.iterator > buttons.length - 1) {
        this.iterator = 0;
      }
      buttons[this.iterator].click()
      this.iterator++
      this.timer = setTimeout(tick.bind(this), 3000)
    }.bind(this), 3000)

  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  destroyed() {
    console.log('destroyd from Blog')
  }

}
</script>

<style scoped>

.slide {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  position: absolute;
  top: 400px;
  left: 500px;

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

.image-container {
  display: block;
  height: 100%;
  width: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  /* transform: translateX(-200px); */
}

.image {
  width: 200px;
  height: 100%;
  /* background-image: url(../../../public/index.jpg); */
  background-size: cover;
  transform: translate(00px);
  float: left;
  display: block;
}

.active {
  display: inline-block;
   transition: all 1s;
}

.button-active {
  background-color: brown;
}

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



.ma-leave-active {
  /* animation: 3s slid linear;
 */

transition: all .1s linear;
transition-delay: 1s;
}
.ma-leave-to {
  opacity: 0;
}

@keyframes slid {
  from {
    transform: translateX(000px);
  }

  to {
    transform: translateX(-200px);
  }

}
</style>

