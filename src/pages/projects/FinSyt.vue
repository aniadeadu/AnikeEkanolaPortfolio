<script>
import Project from "@/components/Project.vue";
import FinSyt from "@/assets/projects/FinSyt.png";
import FinSytLG from "@/assets/projects/FinSytLG.png";
import FinSytMD from "@/assets/projects/FinSytMD.png";
import FinSytSM from "@/assets/projects/FinSytSM.png";

export default {
  components: {
    projects: Project,
  },
  data() {
    return {
      technologies: [
        "React JS",
        "TypeScript",

        "Firebase Google Authentication",
        "Firebase Database",

        "Tailwind CSS",
      ],
      features: [
        "Budgeting and Expense Tracking",
        "Financial Planning Tools",
        "Educational Resources",
      ],
      gradientOverlay: "from-[#0f0f0f50] to-[#60606065]",
      backgroundImage: FinSyt,
      largeImage: FinSytLG,
      mediumImage: FinSytMD,
      smallImage: FinSytSM,
    };
  },
};
</script>

<template>
  <div>
    <projects
      description="finanacial assistant"
      dutie="technologies used"
      :duties="technologies"
      date="2023"
      heading="finsyt"
      context="key features"
      :content="features"
      :backgroundImage="backgroundImage"
      :gradientOverlay="gradientOverlay"
      :largeImage="largeImage"
      :mediumImage="mediumImage"
      :smallImage="smallImage"
      isProject="true"
    />
  </div>
</template>
