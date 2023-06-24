<template>
  <img class="pepe" src="/finalpepecolor.png" />
  <div class="grid-container">
    <div v-for="col in table" :onclick="col.click">
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
    class="smooth-transition visible modal page-display fixed inset-x-0 inset-y-0 bg-gray-400 m-10 p-5 p-0-sm rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-xl"
  >
    <button
      :onclick="openModalAbout()"
      class="fixed top-3 right-3 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full inline-flex items-center"
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
    <div class="justify-center space-x-8">
      <h1 class="text-3xl font-bold text-center m-4">Our Mission</h1>
      <p class="text-justify leading-relaxed sm:px-6 p-8 md:px-30 xl:px-40">
        WHAT IS #3FB00B? #3FB00B is a distinctive Proof of Involvement NFT that
        serves multiple purposes within the $PEPE Community. This NFT not only
        symbolizes your membership to #3FB00B but also represents your stake in
        promoting and raising awareness about the community as a whole. The
        captivating colors used in the #3FB00B NFT artwork are carefully chosen
        to reflect and embody the essence and spirit of the $PEPE Community. The
        vibrant and engaging visuals serve as a visual representation of the
        community's energy, creativity, and shared values. By owning a #3FB00B
        NFT, you gain exclusive utilities and opportunities.\n These utilities
        may include early access to new features, events, or projects within the
        $PEPE ecosystem. Additionally, as a #3FB00B NFT holder, you become
        eligible for future utilities and benefits that are specifically
        designed to enhance your experience and engagement within the community.
        Being an #3FB00B NFT holder not only grants you access to exciting
        opportunities but also positions you as an active participant and
        supporter of the $PEPE Community. Your ownership of this unique NFT
        demonstrates your dedication and involvement in the community's growth
        and development. WHY WAS #3FB00B CREATED? #3FB00B was created as a
        dedicated sub-community within the broader $PEPE ecosystem. Its primary
        purpose is to foster an environment where passionate $PEPE enthusiasts
        can come together and actively engage with various artists, creators,
        and builders. By being a part of #3FB00B, members gain exclusive access
        to curated Web3 projects, enabling them to discover and support new
        talent and innovative initiatives. The creation of #3FB00B serves as a
        platform for the community to explore and embrace the diverse and
        evolving world of digital art and creativity. Through this
        sub-community, members have the unique opportunity to connect with
        emerging artists and creators, discovering their unique perspectives and
        contributing to their growth and success. By focusing on curated Web3
        projects, #3FB00B ensures that the initiatives supported are carefully
        selected and aligned with the ethos and interests of the $PEPE
        Community. This curated approach not only helps members find exciting
        and innovative projects but also empowers artists and builders by
        providing them with a dedicated audience and potential support for their
        work. Overall, #3FB00B aims to create a thriving ecosystem within the
        $PEPE Community, fostering collaboration, discovery, and support for
        artists, creators, and builders in the Web3 space.
      </p>
    </div>
  </div>
  <div
    v-if="MISSION"
    style="z-index: 100"
    class="smooth-transition visible modal page-display fixed inset-x-0 inset-y-0 bg-gray-400 m-10 p-5 p-0-sm rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-xl"
  >
    <button
      :onclick="openModalMission()"
      class="fixed top-3 right-3 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full inline-flex items-center"
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
    <div class="justify-center space-x-8">
      <h1 class="text-3xl font-bold text-center m-4">Our Mission</h1>
      <p class="text-justify leading-relaxed sm:px-6 p-8 md:px-30 xl:px-40">
        WHAT IS #3FB00B? #3FB00B is a distinctive Proof of Involvement NFT that
        serves multiple purposes within the $PEPE Community. This NFT not only
        symbolizes your membership to #3FB00B but also represents your stake in
        promoting and raising awareness about the community as a whole. The
        captivating colors used in the #3FB00B NFT artwork are carefully chosen
        to reflect and embody the essence and spirit of the $PEPE Community. The
        vibrant and engaging visuals serve as a visual representation of the
        community's energy, creativity, and shared values. By owning a #3FB00B
        NFT, you gain exclusive utilities and opportunities.\n These utilities
        may include early access to new features, events, or projects within the
        $PEPE ecosystem. Additionally, as a #3FB00B NFT holder, you become
        eligible for future utilities and benefits that are specifically
        designed to enhance your experience and engagement within the community.
        Being an #3FB00B NFT holder not only grants you access to exciting
        opportunities but also positions you as an active participant and
        supporter of the $PEPE Community. Your ownership of this unique NFT
        demonstrates your dedication and involvement in the community's growth
        and development. WHY WAS #3FB00B CREATED? #3FB00B was created as a
        dedicated sub-community within the broader $PEPE ecosystem. Its primary
        purpose is to foster an environment where passionate $PEPE enthusiasts
        can come together and actively engage with various artists, creators,
        and builders. By being a part of #3FB00B, members gain exclusive access
        to curated Web3 projects, enabling them to discover and support new
        talent and innovative initiatives. The creation of #3FB00B serves as a
        platform for the community to explore and embrace the diverse and
        evolving world of digital art and creativity. Through this
        sub-community, members have the unique opportunity to connect with
        emerging artists and creators, discovering their unique perspectives and
        contributing to their growth and success. By focusing on curated Web3
        projects, #3FB00B ensures that the initiatives supported are carefully
        selected and aligned with the ethos and interests of the $PEPE
        Community. This curated approach not only helps members find exciting
        and innovative projects but also empowers artists and builders by
        providing them with a dedicated audience and potential support for their
        work. Overall, #3FB00B aims to create a thriving ecosystem within the
        $PEPE Community, fostering collaboration, discovery, and support for
        artists, creators, and builders in the Web3 space.
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
      ABOUT: true,
      MISSION: false,
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
        this.keys[2] = {
          text: "BASE & PROOF",
          link: "",
          click: () => null,
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
        this.keys[10] = {
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
          text: "BASE & PROOF",
          link: "",
          click: () => null,
          class: "square-link",
        };
        this.keys[2] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          click: () => null,
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
          text: "APPLY",
          link: "",
          click: () => null,
          class: "square-link",
        };
        this.keys[9] = {
          text: "BASE & PROOF",
          link: "",
          click: () => null,
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
        this.keys[40] = {
          text: "MISSION",
          link: "",
          click: this.openModalMission,
          class: "square-link",
        };
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
      this.ABOUT = !this.ABOUT;
    },
    openModalMission() {
      this.MISSION = !this.MISSION;
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
h1 {
  font-family: "Inconsolata", monospace;
  font-size: 12px;
  line-height: 10px;
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
