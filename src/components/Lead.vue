<script>
import Jekinraa from "@/assets/projects/Jekinraa.png";
import Envoy from "@/assets/projects/Envoy.png";
import Niannn from "@/assets/projects/Niann.png";
import FinSyt from "@/assets/projects/FinSyt.png";

export default {
  props: ["imgs"],
  data() {
    return {
      images: [
        { image: Jekinraa, style: "absolute right-[70%]" },
        {
          image: Envoy,
          style: "absolute right-[52.5%] top-[30%]",
        },
        {
          image: Niannn,
          style: "absolute right-[35%] top-[45%]",
        },
        { image: FinSyt, style: "absolute right-[17.5%] top-[60%]" },
      ],
    };
  },
};
// console.log(imgs);
</script>

<template>
  <div
    class="w-full h-[100vh] pr-16 pl-28 -z-20 sticky flex justify-between overflow-x-hidden top-0 bg-[#fffff1]"
  >
    <div class="h-[100%] w-full flex items-center">
      <div class="basis-[50%] space-y-8">
        <h1
          class="lg:text-[7.2rem] text-[4rem] leading-[1] blur-[1px] tracking-tighter font-semibold font-[Raleway] bg-gradient-to-r from-[#6b6b6b] to-[#000000] bg-clip-text text-transparent"
        >
          Projects & Works
        </h1>

        <button
          class="font-[Raleway] max-w-[60%] px-6 text-[1.3rem] tracking-tight text-[#4d4d4d] font-semibold cursor-pointer"
        >
          View More >
        </button>
      </div>
    </div>
    <div class="pt-32 w-[50%] h-[100vh] relative">
      <img
        v-for="x in images"
        v-bind:src="x.image"
        alt="imgs"
        :class="
          'w-[60rem]  scale-90 blur-[0.038rem] h-[auto] shadow-[0_20px_25px_-10px_rgba(0,0,0,0.2),_15px_0px_30px_-10px_rgba(0,0,0,0.25)] rounded-xl ' +
          x.style
        "
      />
    </div>
  </div>
</template>
