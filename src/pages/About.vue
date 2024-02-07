<style>
p {
  font-size: 0.99em;
  font-weight: 500;
}
</style>

<script>
import NavBar from "@/layout/NavBar.vue";
import Heading from "@/components/Heading.vue";

export default {
  components: {
    "nav-bar": NavBar,
    Heading: Heading,
  },
};
</script>

<template>
  <div class="h-[100%] w-full pt-28">
    <nav-bar />

    <div class="px-28">
      <Heading about="text-[2rem] font-extrabold pb-10 tracking-tighter">
        <template #heading> About </template>
      </Heading>
      <div class="lg:flex-row-reverse flex-col-reversve flex justify-between">
        <div>
          <div class="tracking-tighter font-medium text-[0.94rem]">
            Also available on
          </div>
        </div>
        <p>
          <a
            href="mailto:aniaadeadu@gmail.com "
            target="_blank"
            class="underline"
          >
            Email</a
          >
        </p>
        <div class="basis-[50%] space-y-6">
          <p>
            I am a <strong>Frontend Web Engineer</strong> living in Lagos
            Nigeria, with a passion for exploring the synergy between people and
            software to enhance and enrich lives. My journey in the tech world
            has been an exciting one, where I've not only honed my skills as a
            Frontend Web Engineer but also delved into the realm of Search
            Optimization.
          </p>
          <p>
            My professional background includes valuable experience at Jekinraa,
            where I served as a Frontend Web Engineer and Search Optimization
            Specialist. In this dynamic role, I played a pivotal part in
            crafting user interfaces that seamlessly melded functionality with
            aesthetics. Simultaneously, my focus on search optimization aimed at
            ensuring that digital content reached its intended audience
            effectively, maximizing online visibility.
          </p>
          <p>
            Aside my professional experience, I spearheaded a number of projects
            as a Frontend Web Developer. These projects were not merely lines of
            code but endeavors aimed at creating impactful digital experiences.
            From designing intuitive user interfaces to optimizing website
            performance, each project reflected my commitment to excellence in
            web development.
          </p>
          <p>
            In my free time, I enjoy staying connected with the tech community,
            and participating in discussions that delve into the evolving
            landscape of software development. I also enjoy reading book
            especially romantic and suspensefull novels. Music is my core
            existence through which i unwind and find inspirations.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
