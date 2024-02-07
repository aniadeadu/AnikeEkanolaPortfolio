<script>
import Project from "@/components/Project.vue";
import Niann from "@/assets/projects/Niann.png";
import NiannLG from "@/assets/projects/NiannLG.png";
import NiannMD from "@/assets/projects/NiannMD.png";
import NiannSM from "@/assets/projects/NiannSM.png";

export default {
  components: {
    projects: Project,
  },
  data() {
    return {
      technologies: [
        "React JS",
        "JavaScript",
        "PayStack API",
        "Firebase Google Authentication",
        "Tailwind CSS",
      ],
      features: [
        "user Registration and Authentication",
        "Product Catalog",
        "Search and Filters",
        "Shopping Cart and Checkout",
      ],
      gradientOverlay: "from-[#0f0f0f90] to-[#be401d80]",
      backgroundImage: Niann,
      largeImage: NiannLG,
      mediumImage: NiannMD,
      smallImage: NiannSM,
    };
  },
};
</script>

<template>
  <div>
    <projects
      description="ecommerce"
      url="niann-61538.web.app"
      dutie="technologies used"
      :duties="technologies"
      date="2023"
      heading="niann"
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
