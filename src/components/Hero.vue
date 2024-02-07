<script>
import NavBar from "@/layout/NavBar.vue";

export default {
  components: {
    "nav-bar": NavBar,
  },
};
</script>

<template>
  <div class="h-[100vh] w-[100vw] -z-20 relative top-0">
    <section
      class="md:w-[97%] w-[95%] h-[96%] absolute -translate-x-[50%] left-[50%] -translate-y-[50%] top-[50%] rounded-[1.2rem]"
    >
      <div
        class="w-[100%] h-[100%] mx-auto backdrop-blur-2xl bg-[#0f0f0f50] rounded-[1.2rem] absolute z-40 top-0"
      >
        <div class="h-[100%] w-full flex justify-center items-center">
          <div class="max-w-[80%] lg:max-w-[60%] mx-auto space-y-8">
            <p
              class="xl:text-[1.8rem] lg:text-[1.35rem] font-sembold md:text-[1.1rem] text-[1.1rem] font-[Raleway] font-normal text-[#ffffea]"
            >
              Hello!I'm Anike Ekanola, a
              <strong>Frontend Web Engineer</strong> situated in Lagos, Nigeria.
              I enjoy creating user-centric design through the artful
              integration of cutting-edge technologies, responsive design, and
              intuitive navigation, with a focus on creating seamless and
              engaging digital journeys for diverse audiences in an
              ever-evolving technological landscape.
            </p>

            <p
              class="xl:text-[1.8rem] lg:text-[1.35rem] text-[#ffffea] md:text-[1.1rem] text-[1.1rem] font-[Raleway] font-normal"
            >
              <a
                href="mailto:aniadeadu@gmail.com"
                target="blank"
                class="underline"
                >Contact
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <!-- <div class="g2"></div> -->
          <!-- <div class="g3"></div> -->
          <div class="g4"></div>
          <!-- <div class="g5"></div> -->
          <div class="interactive"></div>
        </div>
      </div>
    </section>
  </div>
</template>
