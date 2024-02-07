<script>
import NavBar from "../layout/NavBar.vue";
// import Feature from "../components/Feature.vue";
import Hero from "../components/Hero.vue";
import Lead from "@/components/Lead.vue";
import Projects from "@/pages/Projects.vue";

// import anikeImage from "../assets/anikeImage.jpg";

export default {
  components: {
    "nav-bar": NavBar,

    hero: Hero,
    lead: Lead,
    projects: Projects,
  },

  data() {
    return {};
  },
};
</script>
<template>
  <header id="navbar section">
    <nav-bar />
  </header>
  <main class="w-[100%] h-[100%] relative">
    <hero />
    <projects />
    <!-- <section class="lg:pt-[45rem] pt-[55rem]">
      <feature heading="Skills" />
    </section> -->
    <!-- <section class="">
      <feature heading="Experience" />
    </section> -->
  </main>
</template>
