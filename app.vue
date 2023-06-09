<template>
  <img class="pepe open-modal" src="/finalpepe.png" />
  <div style="z-index: 100" class="modal bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-center mb-4">Our Mission</h1>
    <p class="text-justify leading-relaxed">
      Green celebrates the unique cultural impact of Pepe the Frog, along with
      the diverse and creative world of Pepe memes. Our mission is to foster a
      community that cherishes Pepe's endearing qualities, embracing the humor,
      artistic expression, and camaraderie that Pepe represents. As an Affiliate
      of Green we believe that Pepe is not just a meme; it is a symbol of unity,
      freedom of expression, and the power of internet culture. Through our
      project, we strive to promote inclusivity, open dialogue, and mutual
      respect among Pepe enthusiasts. We aim to provide a platform where Pepe
      enthusiasts can connect, collaborate, and contribute to the ongoing legacy
      of Pepe, ensuring its enduring presence in popular culture. Together, let
      us embrace the lightheartedness and joy that Pepe represents, while
      promoting positivity and appreciation for the diverse range of Pepe memes.
      Green is not just a project; it is a declaration of our affiliation, a
      testament to our commitment, and an homage to the everlasting impact of
      Pepe the Frog.
    </p>
  </div>
  <div class="grid-container">
    <a v-for="col in table" :href="col.link">
      <div
        :class="col.class"
        class="square text-green-500 text-lg font-bold text-center p-10 rounded-lg"
      >
        <p>{{ col.text }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Tail {
  text: string;
  link: string;
  class: string;
}

export default defineComponent({
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
      this.keys[0] = { text: "#3FB00B", link: "", class: "square-link" };
      if (this.n === 21) {
        this.keys[2] = {
          text: "VERIFY MEMBERSHIP (coming soon)",
          link: "",
          class: "square-link",
        };
        this.keys[6] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          class: "square-link",
        };
        this.keys[8] = {
          text: "OPENSEA",
          link: "https://www.opensea.com",
          class: "square-link",
        };
        this.keys[10] = {
          text: "DISCORD",
          link: "https://discord.com/invite/YxQ7TXqC",
          class: "square-link",
        };
        this.keys[14] = {
          text: "MINT (coming soon)",
          link: "",
          class: "square-link",
        };
        this.keys[17] = { text: "*/10,000", link: "", class: "square-link shadow-inner shadow-2xl" };
        // this.keys[18] = {
        //   text: "ABOUT",
        //   link: "",
        //   class: "square-link open-modal",
        // };
      }
      if (this.n === 24) {
        this.keys[5] = {
          text: "VERIFY MEMBERSHIP (coming soon)",
          link: "",
          class: "square-link",
        };
        this.keys[2] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          class: "square-link",
        };
        this.keys[22] = {
          text: "OPENSEA",
          link: "https://www.opensea.com",
          class: "square-link",
        };
        this.keys[17] = {
          text: "DISCORD",
          link: "https://discord.com/invite/YxQ7TXqC",
          class: "square-link",
        };
        this.keys[9] = {
          text: "MINT (coming soon)",
          link: "",
          class: "square-link shadow-inner shadow-2xl",
        };
        this.keys[15] = { text: "*/10,000", link: "", class: "square-link" };
        // this.keys[18] = {
        //   text: "ABOUT",
        //   link: "",
        //   class: "square-link open-modal",
        // };
      }
      if (this.n === 50) {
        this.keys[9] = {
          text: "VERIFY MEMBERSHIP (coming soon)",
          link: "",
          class: "square-link",
        };
        this.keys[14] = {
          text: "DISCORD",
          link: "https://discord.com/invite/YxQ7TXqC",
          class: "square-link",
        };
        this.keys[18] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
          class: "square-link",
        };
        this.keys[31] = { text: "*/10,000", link: "", class: "square-link" };
        this.keys[26] = {
          text: "MINT (coming soon)",
          link: "",
          class: "square-link shadow-inner shadow-2xl",
        };
        // this.keys[40] = {
        //   text: "ABOUT",
        //   link: "",
        //   class: "square-link open-modal",
        // };
        this.keys[48] = {
          text: "OPENSEA",
          link: "https://www.opensea.com",
          class: "square-link",
        };
      }
      return this.keys;
    },
  },
  methods: {},
});
</script>
<style>
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.grid-container {
  display:grid;
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
  display: none;
  border: 0.2em solid;
  border-color: hsl(103, 88%, 45%);
  background-color: #3fb00b;
  justify-content: center;
  align-items: center;
  transition: transform 5s fade-in-out;
}

.open-modal:hover + .modal {
  display: block;
  position: absolute;
  margin: 5%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  z-index: 100;
}
</style>
