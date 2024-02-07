<script>
// import { routerLink } from "vue-router";
import NavBar from "@/layout/NavBar.vue";
import Jekinraa from "@/assets/projects/JekinraaLG.png";
import Envoy from "@/assets/projects/EnvoyLG.png";
import Niannn from "@/assets/projects/NiannLG.png";
import FinSyt from "@/assets/projects/FinSytLG.png";

export default {
  components: {
    "nav-bar": NavBar,
    // "router-link": routerLink,
  },

  data() {
    return {
      images: [
        {
          name: "Jekinraa",
          date: "2023",
          image: Jekinraa,
          url: "/jekinraa",
          reverse: "flex-col-reverse lg:flex-row",
          gradientOverlay: "from-[#0f0f0f50] to-[#47055c65]",
        },
        {
          name: "Envoy",
          image: Envoy,
          date: "2023",
          url: "/envoy",
          gradientOverlay: "from-[#0f0f0f70] to-[#94960d65]",
          reverse: "lg:flex-row-reverse flex-col-reverse",
        },
        {
          name: "Niann",
          image: Niannn,
          date: "2023",
          url: "/niann",
          reverse: " lg:flex-row flex-col-reverse",
          gradientOverlay: "from-[#0f0f0f50] to-[#be401d43]",
        },
        {
          name: "FinSyt",
          image: FinSyt,
          date: "2023",
          url: "/finsyt",
          gradientOverlay: "from-[#0f0f0f50] to-[#60606065]",
          reverse: "lg:flex-row-reverse flex-col-reverse",
        },
      ],
    };
  },
};
// console.log(imgs);
</script>

<style>
h1 {
  --bg-size: 200%;
  --color-one: #8f8f8f;
  --color-two: #ffffe1;
  font-size: clamp(3rem, 25vmin, 8rem);
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 3s infinite linear;
}
@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}
</style>
<!--  -->
<template>
  <div class="h-[100%] w-full overflow-hidden py-10">
    <!-- <header id="navbar section">
      <nav-bar />
    </header> -->
    <div
      class="pt-32 space-y-16 lg:px-16 lg:space-y-8 h-[100%] cursor-pointer w-[100%] flex flex-col justify-center items-center"
    >
      <div
        class="flex flex-col lg:flex-row cursor-pointer w-[90%]"
        v-for="(value, index) in images"
      >
        <div
          :class="
            'flex lg:items-center  gap-2 lg:gap-10 w-full ' + value.reverse
          "
        >
          <div class="-space-y-2 lg:-space-y-7 items-start">
            <h1
              class="lg:text-[5rem] text-[2.5rem] md:text-[3rem] cursor-pointer xl:text-[5.5rem] lg:tracking-tight"
            >
              {{ value.name }}
            </h1>
            <div class="text-sm">&#169; {{ value.date }}</div>
          </div>

          <router-link :to="value.url">
            <div class="w-[100%] lg:w-[35rem] cursor-pointer h-auto relative">
              <div
                :class="
                  'w-[100%] z-10 h-[100%] hover:cursor-pointer absolute bg-gradient-to-r ' +
                  value.gradientOverlay
                "
              ></div>

              <img
                v-bind:src="value.image"
                :alt="value.name"
                :class="
                  'w-[100%] object-cover bg-transparent cursor-pointer pointer-events-auto drop-shadow-lg   h-[auto] shadow-[0_20px_25px_-10px_rgba(0,0,0,0.2),_15px_0px_30px_-10px_rgba(0,0,0,0.25)]  ' +
                  value.style
                "
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
