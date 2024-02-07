<template>
  <div class="flex justify-start items-start gap-4 w-full">
    <h1 :class="' font-medium relative capitalize ' + about">
      <slot name="heading"></slot>
    </h1>
  </div>
  <div class="bg-[#ffffdf] h-[1px] w-[100%] mb-4 -mt-6"></div>
</template>

<script>
export default {
  props: ["about"],
};
</script>
