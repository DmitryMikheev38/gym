<template>
  <div class="container">
    <div class="home">
      <div class="home__prallax" data-parallax="scroll" data-speed="0.8" bleed="100"></div>
      <div class="home__overlay"></div>
      <div class="home__container">
        <h1 class="header-1 home__header bold">BLOG</h1>
      </div>
    </div>

    <div class="blog">
      <div class="blog__container">
        <div class="blog__row">
          <div class="blog__posts">
            <div class="post-card posts__post-card" v-for="post in posts" :key="post.image">
              <a href="#" class="post-card__date">
                <span class="date__day">{{post.day}}</span>
                <span class="date__month">{{post.month}}</span>
                <span class="date__year">{{post.year}}</span>
              </a>
              <a href="#" class="post-card__photo">
                <img :src="post.image" />
              </a>
              <h3 class="header-3 post-card__title">
                <a href="#">{{post.title}}</a>
              </h3>
              <div class="post-card__info">
                <img :src="post.authorPhoto" alt class="post-card__info__icon" />
                <div class="post-card__info__author-name">
                  <span>Written by</span>
                  &ensp;
                  <a href="#">{{post.authorName}}</a>
                </div>
              </div>
              <p class="post-card__description text-gray">{{post.description}}</p>
              <button class="btn-two btn-two--blog post-card__button">
                <span class="bth-two__text text--upper">read more</span>
              </button>
            </div>
            <div class="blog__posts__btn-group">
              <button class="btn-switch button-active">1.</button>
              <button class="btn-switch">2.</button>
              <button class="btn-switch">3.</button>
            </div>
          </div>

          <div class="blog__slidebar">
            <div class="slidebar__search">
              <h3 class="header-3 slidebar__search__title">Search</h3>
              <div class="input-search slidebar__search__input-search">
                <input type="text" placeholder="Search" />
                <a href="#"></a>
              </div>
            </div>

            <div class="slidebar__categories">
              <h3 class="header-3 slidebar__categories__title">Categories</h3>
              <ul class="slidebar__categories__catigories-list text-gray">
                <li>
                  <a href="#">
                    Fitness (<span>11</span>)
                  </a>
                </li>
                <li>
                  <a href="#">
                    Gym (<span>9</span>)
                  </a>
                </li>
                <li>
                  <a href="#">
                    Crossfit (<span>17</span>)
                  </a>
                </li>
                <li>
                  <a href="#">
                    Trainings (<span>15</span>)
                  </a>
                </li>
              </ul>
            </div>

            <div class="slidebar__archives">
              <h3 class="header-3 slidebar__archives__title">Archives</h3>
              <ul class="slidebar__archives__catigories-list text-gray">
                <li>
                  <a href="#">September 2018</a>
                </li>
                <li>
                  <a href="#">June 2018</a>
                </li>
                <li>
                  <a href="#">May 2018</a>
                </li>
                <li>
                  <a href="#">April 2018</a>
                </li>
              </ul>
            </div>

            <div class="slidebar__promo">
              <h3 class="header-3 slidebar__promo__title">Promo</h3>
              <div class="slidebar__promo__photo">
                <a href="#">
                  <div class="background"></div>
                </a>
                <a href="#" class="sliderbar__promo__sail">
                  <div class="sail__row">
                    <span>30%</span>
                    <span class="discount">
                      <span>Promo</span>
                      <span>Discount</span>
                    </span>
                  </div>
                  <span class="sail__text">
                    Eteam vehicula arcu in libero pretium, parttitor
                  </span>
                </a>
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
      posts: [
        {
          day: 22,
          month: "Dec",
          year: 2019,
          image: "static/images/blog_1.jpg",
          title: "How to train your abs",
          authorPhoto: "static/images/blog_post_author.jpg",
          authorName: "Tina Smith",
          description:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis."
        },
        {
          day: 22,
          month: "Dec",
          year: 2019,
          image: "static/images/blog_2.jpg",
          title: "How to train your abs",
          authorPhoto: "static/images/blog_post_author.jpg",
          authorName: "Nick Brown",
          description:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis."
        },
        {
          day: 22,
          month: "Dec",
          year: 2019,
          image: "static/images/blog_3.jpg",
          title: "101 Pilates training",
          authorPhoto: "static/images/blog_post_author.jpg",
          authorName: "Tina Smith",
          description:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis."
        },
        {
          day: 22,
          month: "Dec",
          year: 2019,
          image: "static/images/blog_4.jpg",
          title: "How to train your abs",
          authorPhoto: "static/images/blog_post_author.jpg",
          authorName: "Nick Brown",
          description:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis."
        },
        {
          day: 22,
          month: "Dec",
          year: 2019,
          image: "static/images/blog_5.jpg",
          title: "Butt exercises for begginers",
          authorPhoto: "static/images/blog_post_author.jpg",
          authorName: "Tina Smith",
          description:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis."
        },
        {
          day: 22,
          month: "Dec",
          year: 2019,
          image: "static/images/blog_6.jpg",
          title: "How to train your abs",
          authorPhoto: "static/images/blog_post_author.jpg",
          authorName: "Nick Brown",
          description:
            "Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis."
        }
      ]
    };
  },
  mounted() {
    $(".home__prallax").parallax({ imageSrc: "static/images/blog.jpg" });
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

.blog {
  padding: 100px 0;
}

.blog__container {
  width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}

.blog__row {
  min-width: 100%;
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
}

.blog__posts {
  width: 760px;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.blog__slidebar {
  width: 380px;
  padding: 0 15px;
}

.posts__post-card {
  margin-bottom: 89px;
}

.blog__posts__btn-group > button {
  color: black;
}

.blog__posts__btn-group > button:hover {
  color: #ff0e3b;
}

.blog__posts__btn-group .button-active {
  color: white;
}

.blog__posts__btn-group .button-active:hover {
  color: white;
}

.slidebar__search__title,
.slidebar__categories__title,
.slidebar__archives__title,
.slidebar__promo__title {
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  color: #2c2c2c;
  line-height: 1.2;
  padding-bottom: 11px;
  text-transform: none;
  letter-spacing: 0;
  border-bottom: 1.5px solid #ff0e3b;
}

.slidebar__search__input-search {
  margin-top: 50px;
}

.slidebar__categories {
  margin-top: 78px;
}

.slidebar__categories__catigories-list,
.slidebar__archives__catigories-list {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 44px;
}

.slidebar__categories__catigories-list>li,
.slidebar__archives__catigories-list>li
 {
  height: 21px;
  vertical-align: middle;
}

.slidebar__categories__catigories-list>li>a,
.slidebar__archives__catigories-list>li>a {
  display: inline-block;
  height: 100%;
  line-height: 21px;
  text-decoration: none;
  color: #909090;
  transition: all 0.3s;
}

.slidebar__categories__catigories-list>li>a:hover,
.slidebar__archives__catigories-list>li>a:hover {
  color:#ff0e3b;
}

.slidebar__categories__catigories-list>li:not(:last-child),
.slidebar__archives__catigories-list>li:not(:last-child) {
  margin-bottom: 15px;
}

.slidebar__archives {
   margin-top: 76px;
}

.slidebar__promo {
  margin-top: 72px;
}

.slidebar__promo__photo {
  margin-top: 50px;
  width: 100%;
  height: 463px;
  position: relative;
}

.slidebar__promo__photo .background {
  width: 100%;
  height: 100%;
  background: url(../../../static/images/promo.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.sliderbar__promo__sail {
  display: block;
  position: absolute;
  bottom: 24px;
  left: 24px;
  width: calc(100% - 49px);
  height: 135px;
  background: #ff0e3b;
  padding-top: 33px;
  padding-left: 27px;
  color: white;
  text-decoration: none;
}

.sail__row {
  display: flex;
  width: 100%;
  align-items: center;
}

.sail__row span:first-child {
      font-size: 72px;
    font-weight: 700;
    color: #ffffff;
    line-height: 0.75;
}

.sail__row .discount{
  margin-left: 17px;
  display: inline-block;
  height: 42px;
}

.sail__row .discount>span {
  font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 0.75;
    display: block;
}

.sail__row .discount>span:first-child {
  margin-bottom: 18px;
}

.sail__text {
  display: block;
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  color: #ffffff;
  margin-top: 12px;
}

@media (max-width: 1200px) {
  .blog__container {
    width: 960px;
  }

  .blog__posts {
    width: 640px;
  }

  .blog__slidebar {
    width: 320px;
  }

  .posts__post-card {
    width: 100%;
  }

  .post-card__photo {
    height: 489px;
  }

  .sail__row > span:first-child {
    font-size: 56px;
  }

  .sail__row .discount > span {
    font-size: 12px;
  }
}

@media (max-width: 990px) {
  .blog__container {
    width: 720px;
  }

  .blog__row {
    display: block;
  }

  .blog__slidebar {
    width: 100%;
    margin-top: 97px;
  }

  .sail__row > span:first-child {
    font-size: 72px;
  }

  .sail__row .discount > span {
    font-size: 16px;
  }
}

@media (max-width: 770px) {
  .blog__container {
    width: 540px;
  }

  .blog__posts {
    width: 100%;
  }

  .post-card__photo {
    height: 408px;
  }
}

@media (max-width: 575px) {
  .blog__container {
    width: 100%;
  }

  .post-card__photo {
     height: auto;
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

@media (max-width: 380px) {
   .sail__row > span:first-child {
    font-size: 56px;
  }

  .sail__row .discount > span {
    font-size: 12px;
  }
}
</style>

