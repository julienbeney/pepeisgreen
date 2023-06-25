<template>
  <img class="pepe" src="/finalpepecolor.png" />
  <div class="grid-container">
    <div v-for="col in table" @click="col.click">
      <a v-if="col.link !== ''" :href="col.link">
        <div
          :class="col.class"
          class="square text-green-500 text-lg font-bold text-center p-10 rounded-lg"
        >
          <p>{{ col.text }}</p>
        </div>
      </a>
      <div
        v-else
        :class="col.class"
        class="square text-green-500 text-lg font-bold text-center p-10 rounded-lg"
      >
        <p>{{ col.text }}</p>
      </div>
    </div>
  </div>
  <div
    v-if="ABOUT"
    style="z-index: 100"
    class="smooth-transition visible modal page-display fixed inset-x-0 inset-y-0 bg-gray-400 m-1 p-1 lg:m-12 lg:p-12 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-xl"
  >
    <button
      @click="openModalAbout"
      class="fixed top-15 right-15 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full inline-flex items-center"
    >
      <svg
        class="fill-current w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </button>
    <div class="justify-center">
      <h1 class="text-3xl font-bold text-center my-4">ABOUT</h1>
      <h2  class="mx-2">WHAT IS #3FB00B?</h2>
      <p         
        class="text-sm md:text-xl text-justify leading-relaxed sm:px-2 p-8 md:px-30 xl:px-40">
        #3FB00B is a distinctive Proof of Involvement NFT that serves multiple purposes within the $PEPE Community. This NFT not only symbolizes your membership to #3FB00B but also represents your stake in promoting and raising awareness about the community as a whole.
        <br/>The captivating colors used in the #3FB00B NFT artwork are carefully chosen to reflect and embody the essence and spirit of the $PEPE Community. The vibrant and engaging visuals serve as a visual representation of the community's energy, creativity, and shared values.
        <br/>By owning a #3FB00B NFT, you gain exclusive utilities and opportunities. These utilities may include early access to new features, events, or projects within the $PEPE ecosystem. Additionally, as a #3FB00B NFT holder, you become eligible for future utilities and benefits that are specifically designed to enhance your experience and engagement within the community.
        <br/>Being an #3FB00B NFT holder not only grants you access to exciting opportunities but also positions you as an active participant and supporter of the $PEPE Community. Your ownership of this unique NFT demonstrates your dedication and involvement in the community's growth and development.
        <br/>
      </p>
      <h2>WHY WAS #3FB00B CREATED?</h2>
      <p    
        class="text-sm md:text-xl text-justify leading-relaxed sm:px-2 p-8 md:px-30 xl:px-40">
        #3FB00B was created as a dedicated sub-community within the broader $PEPE ecosystem. Its primary purpose is to foster an environment where passionate $PEPE enthusiasts can come together and actively engage with various artists, creators, and builders. By being a part of #3FB00B, members gain exclusive access to curated Web3 projects, enabling them to discover and support new talent and innovative initiatives.
        <br/>The creation of #3FB00B serves as a platform for the community to explore and embrace the diverse and evolving world of digital art and creativity. Through this sub-community, members have the unique opportunity to connect with emerging artists and creators, discovering their unique perspectives and contributing to their growth and success.
        <br/>By focusing on curated Web3 projects, #3FB00B ensures that the initiatives supported are carefully selected and aligned with the ethos and interests of the $PEPE Community. This curated approach not only helps members find exciting and innovative projects but also empowers artists and builders by providing them with a dedicated audience and potential support for their work.
        <br/>Overall, #3FB00B aims to create a thriving ecosystem within the $PEPE Community, fostering collaboration, discovery, and support for artists, creators, and builders in the Web3 space.
      </p>
      <h1 class="text-3xl font-bold text-center my-4">OUR MISSION</h1>

    </div>
  </div>

  <div
    v-if="PROOF"
    style="z-index: 100"
    class="smooth-transition visible modal page-display fixed inset-x-0 inset-y-0 bg-gray-400 m-1 p-1 lg:m-12 lg:p-12 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-xl"
  >
    <button
      @click="openModalProof"
      class="fixed top-15 right-15 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full inline-flex items-center"
    >
      <svg
        class="fill-current w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </button>
    <div class="justify-center">
      <h1 class="text-3xl font-bold text-center my-4">PROOF BASE</h1>
      <h2>BASE #3FB00B</h2>
      <p 
        
        class="text-sm md:text-xl text-justify leading-relaxed sm:px-2 p-8 md:px-30 xl:px-40">
        Verify your membership via the “3FB00B” NFT, establishing color consensus and accessing premium features enabled by our organization. Benefit from the proprietary Lily-Pad and have access to unique utilities and experiences.
      </p>
      <h2>PROOF #3FB00B</h2>
      <p 
      
      class="text-sm md:text-xl text-justify leading-relaxed sm:px-2 p-8 md:px-30 xl:px-40">
        Link your Twitter handle and verify your membership via the “3FB00B” Affiliate Badge, establishing color consensus and accessing premium features enabled by our organization. Benefit from the proprietary Lily-Pad and have access to unique utilities and experiences.
      </p>
    </div>
  </div>
  <div
    v-if="APPLY"
    style="z-index: 100"
    class="smooth-transition visible modal page-display fixed inset-x-0 inset-y-0 bg-gray-400 m-1 p-1 lg:m-12 lg:p-12 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-xl"
  >
    <button
      @click="openModalApply"
      class="fixed top-15 right-15 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full inline-flex items-center"
    >
      <svg
        class="fill-current w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </button>
    <div class="justify-center">
      <h1 class="text-3xl font-bold text-center my-4">LILY-PAD</h1>
      <p
        
        class="text-sm md:text-xl text-justify leading-relaxed sm:px-2 p-8 md:px-30 xl:px-40"
      >
        Dear Artists, Creators, and Builders,
        <br />
        <br />
        <br />We are excited to invite you to apply and become a part of #3FB00B
        LILY-PAD, the curated sub-community within the vibrant $PEPE ecosystem.
        As passionate advocates for digital art and creativity, we are actively
        seeking talented individuals like you who are dedicated to pushing the
        boundaries of innovation and creating captivating experiences.
        <br /><br />#3FB00B LILY-PAD serves as a platform for discovering new artists,
        creators, and builders who are shaping the future of Web3 projects. We
        believe in the power of collaboration and the potential to support and
        showcase exceptional talent within our community. By joining #3FB00B,
        you’ll have the opportunity to connect with a dedicated audience and
        receive the recognition your work deserves.
        <br /><br />If you have an innovative project that aligns with the ethos of
        #3FB00B, values and spirit of the $PEPE Community, we encourage you to
        apply for curation within #3FB00B. Our curated selection process ensures
        that only the most exceptional projects are showcased to our passionate
        community members. By being a part of #3FB00B, you’ll have access to
        invaluable resources, support, and opportunities for growth.
        <br />
        <br />To apply, please submit your project for consideration by
        providing relevant details, such as a description, portfolio, or demo,
        showcasing the unique qualities and vision of your work. Our team of
        experienced curators will carefully review each submission, evaluating
        its alignment with the community’s values and potential impact.
        <br />
        <br />We look forward to discovering the incredible talent within the
        artist, creator, and builder community and supporting your initiatives
        to thrive within the #3FB00B sub-community. Together, we can shape the
        future of Web3 projects and create a dynamic environment that fosters
        creativity, collaboration, and success. Apply now and let your vision
        shine within the vibrant $PEPE Community!
        <br />
        <br />
        Best regards,<br />
        #3FB00B Curatorial Team
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Tail {
  text: string;
  link: string;
  class: string;
  click: Function;
}

export default defineComponent({
  data() {
    return {
      ABOUT: false,
      MISSION: false,
      PROOF: false,
      APPLY: false,
    };
  },
  computed: {
    n() {
      if (window.innerWidth < 900) {
        return 21;
      }
      if (window.innerWidth < 1200) {
        return 24;
      } else {
        return 50;
      }
    },
    keys(): Array<Tail> {
      return Array(this.n).fill({ text: null, link: null, class: null });
    },
    table() {
      this.keys[0] = {
        text: "#3FB00B",
        link: "",
        click: this.openModalAbout,
        class: "square-link",
      };
      if (this.n === 21) {
        this.keys[1] = {
          text: "LILY-PAD ",
          link: "",
          click: this.openModalApply,
          class: "square-link",
        };
        this.keys[2] = {
          text: "BASE & PROOF VERIFICATION ",
          link: "",
          click: this.openModalProof,
          class: "square-link",
        };
        this.keys[6] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          click: () => null,
          class: "square-link",
        };
        this.keys[8] = {
          text: "OPENSEA",
          link: "https://www.opensea.com",
          click: () => null,
          class: "square-link",
        };
        this.keys[19] = {
          text: "DISCORD",
          link: "https://discord.com/invite/Vy2rjVAk",
          click: () => null,
          class: "square-link",
        };
        this.keys[14] = {
          text: "MINT",
          link: "",
          click: () => null,
          class: "square-link",
        };
        // this.keys[18] = {
        //   text: "ABOUT",
        //   link: "", click: () => null,
        //   class: "square-link open-modal",
        // };
      }
      if (this.n === 24) {
        this.keys[5] = {
          text: "BASE & PROOF VERIFICATION",
          link: "",
          click: this.openModal,
          class: "square-link",
        };
        this.keys[2] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          click: () => null,
          class: "square-link",
        };
        this.keys[6] = {
          text: "LILY-PAD",
          link: "",
          click: this.openModalApply,
          class: "square-link",
        };
        this.keys[5] = {
          text: "BASE & PROOF VERIFICATION",
          link: "",
          click: this.openModalProof,
          class: "square-link",
        };
        this.keys[22] = {
          text: "OPENSEA",
          link: "https://www.opensea.com",
          click: () => null,
          class: "square-link",
        };
        this.keys[17] = {
          text: "DISCORD",
          link: "https://discord.com/invite/Vy2rjVAk",
          click: () => null,
          class: "square-link",
        };
        this.keys[9] = {
          text: "MINT",
          link: "",
          click: () => null,
          class: "square-link shadow-inner shadow-2xl",
        };

        // this.keys[18] = {
        //   text: "ABOUT",
        //   link: "", click: () => null,
        //   class: "square-link open-modal",
        // };
      }
      if (this.n === 50) {
        this.keys[5] = {
          text: "LILY-PAD",
          link: "",
          click: this.openModalApply,
          class: "square-link",
        };
        this.keys[9] = {
          text: "BASE & PROOF VERIFICATION",
          link: "",
          click: this.openModalProof,
          class: "square-link",
        };
        this.keys[14] = {
          text: "DISCORD",
          link: "https://discord.com/invite/Vy2rjVAk",
          click: () => null,
          class: "square-link",
        };
        this.keys[18] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          click: () => null,
          class: "square-link",
        };

        this.keys[26] = {
          text: "MINT",
          link: "",
          click: () => null,
          class: "square-link shadow-inner shadow-2xl",
        };
        // this.keys[40] = {
        //   text: "MISSION",
        //   link: "",
        //   click: this.openModalMission,
        //   class: "square-link",
        // };
        this.keys[48] = {
          text: "OPENSEA",
          link: "https://www.opensea.com",
          click: () => null,
          class: "square-link",
        };
      }
      return this.keys;
    },
  },
  methods: {
    openModalAbout() {
      console.log(this.ABOUT);
      this.ABOUT = !this.ABOUT;
      console.log(this.ABOUT);
    },
    openModalMission() {
      console.log(this.MISSION);
      this.MISSION = !this.MISSION;
      console.log(this.MISSION);
    },
    openModalProof() {
      console.log(this.PROOF);
      this.PROOF = !this.PROOF;
      console.log(this.PROOF);
    },
    openModalApply() {
      console.log(this.APPLY);
      this.APPLY = !this.APPLY;
      console.log(this.APPLY);
    },
  },
});
</script>
<style>
.smooth-transition {
  transition: opacity 0.5s ease-in-out;
}
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  height: 100%;
  width: 100%;
  background-color: #4ed419;
}
.square {
  border: 0.05em solid hsl(103, 88%, 45%);
  background-color: #3fb00b;
  display: flex;
}
.square-link {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;
}
.square:hover {
  border-color: hsl(103, 87%, 30%);
  background-color: hsl(103, 87%, 30%);
}
.square-link:hover {
  border-color: hsl(103, 87%, 30%);
  background-color: hsl(103, 87%, 30%);
  transform: rotate(20deg);
}
.pepe {
  z-index: 10;
}
p {
  font-family: "Inconsolata", monospace;
  font-size: 12px;
  line-height: 10px;
  color: hsl(103, 95%, 84%);
}

@media (min-width: 300px) {
  #long-text {
    font-family: "Inconsolata", monospace;
    font-size: 12px;
    line-height: 10px;
    color: hsl(103, 95%, 84%);
  }
}
h1, h2 {
  font-family: "Inconsolata", monospace;
  color: hsl(103, 95%, 84%);
}
@media (min-width: 300px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .square {
    height: 14.28vh;
  }
  .pepe {
    position: fixed;
    bottom: 17%;
    right: 40.4%;
    width: 50%;
  }
}
@media (min-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(6, 1fr);
  }
  .square {
    height: 25vh;
  }
  .pepe {
    position: fixed;
    bottom: 10%;
    right: 55.4%;
    width: 32%;
  }
}
@media (min-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(10, 1fr);
  }
  .square {
    height: 20vh;
  }
  .pepe {
    position: fixed;
    bottom: 5.2%;
    right: 50.4%;
    width: 27%;
  }
}
.modal {
  overflow-y: scroll;
  border: 0.2em solid;
  border-color: hsl(103, 88%, 45%);
  background-color: #3fb00b;
  justify-content: center;
  align-items: center;
  transition: transform 5s fade-in-out;
}
.modal::-webkit-scrollbar {
  display: none;
}
</style>
