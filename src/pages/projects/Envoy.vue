<script>
import Project from "@/components/Project.vue";
import Envoy from "@/assets/projects/Envoy.png";
import EnvoyLG from "@/assets/projects/EnvoyLG.png";
import EnvoyMD from "@/assets/projects/EnvoyMD.png";
import EnvoySM from "@/assets/projects/EnvoySM.png";

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
        "Firebase Storage",
        "Tailwind CSS",
      ],
      features: [
        "user Registration and Authentication",
        "Real-Time Messaging",
        "multimedia support",
        "Search ",
        "scalability",
      ],
      gradientOverlay: "from-[#0f0f0f70] to-[#94960d65]",
      backgroundImage: Envoy,
      largeImage: EnvoyLG,
      mediumImage: EnvoyMD,
      smallImage: EnvoySM,
    };
  },
};
</script>

<template>
  <div>
    <projects
      description="messaging web app"
      dutie="technologies used"
      :duties="technologies"
      date="2023"
      heading="envoy"
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
