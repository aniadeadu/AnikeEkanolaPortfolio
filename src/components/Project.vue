<script>
import NavBar from "@/layout/NavBar.vue";
import Heading from "./Heading.vue";

export default {
  components: {
    "nav-bar": NavBar,
    Heading: Heading,
  },

  props: [
    "index",
    "url",
    "description",
    "role",
    "roles",
    "dutie",
    "duties",
    "date",
    "heading",
    "image",
    "context",
    "content",
    "backgroundImage",
    "gradientOverlay",
    "largeImage",
    "mediumImage",
    "smallImage",
    "isProject",
  ],
};
</script>

<style>
h4 {
  font-size: medium;
  font-weight: 800;
  letter-spacing: 0.025rem;
  font-variant: small-caps;
}
</style>

<template>
  <div class="w-full h-full space-y-[4.85rem]">
    <header id="navbar section">
      <nav-bar />
    </header>
    <div class="w-full h-full space-y-8">
      <div
        class="w-full flex flex-col items-center gap-8 z-40 px-5 md:px-20 lg:px-36 pt-10 lg:pt-20"
      >
        <Heading about="md:text-[3.5rem] text-[2.5rem]">
          <template #heading>
            {{ heading }}
          </template>
        </Heading>
        <div class="flex-col md:flex-row flex w-full justify-between">
          <div>
            <div
              class="font-semibold tracking-wide"
              style="font-variant: small-caps"
            >
              {{ description }}
            </div>
            <a
              :href="'https://' + url"
              target="_blank"
              class="font-medium text-[0.99rem] cursor-pointer underline"
              style="font-variant: small-caps"
              >visit</a
            >
          </div>
          <div class="flex space-x-16">
            <div>
              <h4 class="font-semibold text-[1.1rem] tracking-tight">
                {{ role }}
              </h4>
              <p style="font-variant: small-caps">{{ roles }}</p>
            </div>
            <div>
              <h4 class="" style="font-variant: small-caps">
                {{ dutie }}
              </h4>
              <p
                class="tracking-wide lowercase"
                style="font-variant: small-caps"
                v-for="duty in duties"
              >
                {{ duty }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full justify-end pr-16 flex">
          <div class="text-sm">&#169; {{ date }}</div>
        </div>

        <div class="flex pt-7 items-center justify-center">
          <img :src="backgroundImage" class="w-[90%] rounded-md" />
        </div>
        <div
          class="w-full lg:w-[40%] flex justify-between mx-0 lg:mx-auto"
          v-if="isProject"
        >
          <div>
            <h4 class="" style="font-variant: small-caps">{{ context }}:</h4>
          </div>
          <div>
            <ul class="" v-for="content in content">
              <li
                class="text-[0.87rem] md:text-base lowercase tracking-wide"
                style="font-variant: small-caps"
              >
                {{ content }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="w-full lg:w-[50%] flex justify-between py-6 mx-0 lg:mx-auto"
          v-else
        >
          <h4 style="font-variant: small-caps">{{ context }}:</h4>
          <p class="max-w-[60%] md:text-base text-[0.87rem]">
            {{ content }}
          </p>
        </div>
      </div>
      <div class="w-[100vw] overflow-hidden h-[100%] relative">
        <div
          :class="
            'w-[100%] z-10 h-full absolute scale-125 bg-gradient-to-r ' +
            gradientOverlay
          "
        ></div>
        <img :src="backgroundImage" class="w-[100vw] h-full" />
        <div
          class="absolute w-full z-40 left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]"
        >
          <div class="flex w-full -space-">
            <div class="flex">
              <img
                :src="mediumImage"
                class="w-[35rem] scale-50 lg:scale-[.85] rounded-md lg:rounded-3xl"
              />
            </div>
            <div class="flex">
              <div class="flex items-center pb-20">
                <img
                  :src="smallImage"
                  class="z-40 scale-[.64] rounded-md lg:rounded-3xl"
                />
              </div>
              <div class="flex items-end">
                <img
                  :src="largeImage"
                  class="w-[35rem] scale-100 lg:scale-110 rounded-md lg:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[40%] mx-auto">
        <h4 class="" style="font-variant: small-caps">responsive design</h4>
        <p style="font-variant: small-caps">
          every page is adapted to mobile,tablets and desktop solutions
        </p>
      </div>
    </div>
  </div>
</template>
