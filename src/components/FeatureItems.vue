<script>
export default {
  data() {
    return {
      headingSix: "uppercase font-bold text-[#966fdc] font-[Raleway] ",
      headingSixParagraph:
        "text-[#454545]  font-semibold text-[0.9rem] leading-tight font-[Raleway]",
    };
  },
  props: [
    "name",
    "year",
    "desc",
    "role",
    "roletitle",
    "responsibilities",
    "responsibilitiesList",
    "technologiesUsed",
    "technologiesUsedList",
    "videoURLL",
    "isJekinraaLandingPage",
    "skills",
  ],
};
</script>

<template>
  <div class="space-y-20 rounded-xl px-4 py-3 mx-auto">
    <section class="space-y-10" v-if="name">
      <div class="space-y-10">
        <div class="space-y-1">
          <h1
            class="capitalize text-[4.85rem] font-[Raleway] font-bold text-purple"
          >
            {{ name }}
          </h1>

          <p
            class="font-semibold text-[1.35rem] max-w-[60%] font-[Raleway] text-[#3e3e3e]"
          >
            {{ desc }}
          </p>
        </div>
        <div class="w-[65%] relative left-[45%]" v-show="isJekinraaLandingPage">
          
        </div>
      </div>
      <div class="space-y-2">
        <headingSix v-bind:class="headingSix">{{ role }}</headingSix>
        <p v-bind:class="headingSixParagraph">{{ roletitle }}</p>
      </div>
      <div
        class="bg-[#f8f8f8] px-4 py-5 gap-10 border rounded-xl flex w-[60%] mx-auto"
      >
        <div class="space-y-3 basis-[50%]">
          <headingSix v-bind:class="headingSix">
            {{ responsibilities }}
          </headingSix>
          <ul class="space-y-3">
            <li
              v-bind:class="headingSixParagraph + ' text-[0.88rem]'"
              v-for="responsibility in responsibilitiesList"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>

        <div class="space-y-3 basis-[50%]">
          <headingSix v-bind:class="headingSix">{{
            technologiesUsed
          }}</headingSix>
          <ul class="space-y-3 p-0">
            <li
              v-bind:class="headingSixParagraph + ' text-[0.88rem]'"
              v-for="technology in technologiesUsedList"
            >
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="skills">
      <ul class="flex w-full justify-between">
        <li class="font-[Raleway] font-semibold" v-for="skill in skills">
          {{ skill.skill }}
        </li>
      </ul>
    </section>
  </div>
</template>
