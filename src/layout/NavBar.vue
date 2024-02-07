<template>
  <nav
    class="gap-8 flex items-center w-full lg:py-[3.2rem] md:[py-[2.5rem] px-5 md:px-20 lg:px-28 z-40 justify-between fixed top-0 py-12 bg-transparent"
  >
    <ul class="flex justify-between w-full">
      <li
        class="font-[Raleway] text-[0.99rem] font-medium hover:underline transition-all tracking-tight cursor-pointer capitalize"
      >
        <router-link to="/about">About</router-link>
      </li>
      <li class="w-9">
        <router-link to="/"><img src="../assets/AE.png" /></router-link>
      </li>
    </ul>
  </nav>
</template>

<!-- <style>
li {
  --bg-size: 200%;
  --color-one: #ababab;
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
  animation: move-bg 8s infinite linear;
}
@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}
</style> -->

<!-- <script>
export default {
  data() {
    return {
      navBarItems: [
        { url: "/about", link: "about" },
        { url: "/about", link: "project" },
      ],
    };
  },
};
</script> -->
