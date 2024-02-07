<script>
import Project from "@/components/Project.vue";
import Jekinraa from "@/assets/projects/Jekinraa.png";
import JekinraaLG from "@/assets/projects/JekinraaLG.png";
import JekinraaMD from "@/assets/projects/JekinraaMD.png";
import JekinraaSM from "@/assets/projects/JekinraaSM.png";

export default {
  components: {
    projects: Project,
  },
  data() {
    return {
      responsibilities: [
        "User Interface (UI) Design",
        "Cross-Browser Compatibility",
        "Responsive Design",
        "Cross-Browser Compatibility",
      ],

      backgroundImage: Jekinraa,
      largeImage: JekinraaLG,
      mediumImage: JekinraaMD,
      smallImage: JekinraaSM,
      gradientOverlay: "from-[#0f0f0f90] to-[#47055c95]",
    };
  },
};
</script>

<template>
  <div>
    <projects
      index="01"
      description="landing page"
      url="jekinraa.com"
      role="role"
      roles="frontend web developer"
      dutie="responsibilties"
      :duties="responsibilities"
      date="2023"
      heading="jekinraa"
      context="context"
      content="Jekinraa is an e-commerce
         platform; it's a thriving community that celebrates individuality and
         craftsmanship. The platform empowers local artisans and small-scale
         entrepreneurs to showcase their one-of-a-kind creations to a global audience.
         We provide the stage where dreams come to life."
      :gradientOverlay="gradientOverlay"
      :backgroundImage="backgroundImage"
      :largeImage="largeImage"
      :mediumImage="mediumImage"
      :smallImage="smallImage"
    />
  </div>
</template>
