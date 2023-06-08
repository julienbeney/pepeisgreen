<template>
  <img class="pepe" src="/finalpepe.png" />
  <div class="grid-container">
    <a v-for="col in table" :href="col.link">
      <div
        class="square text-green-500 text-lg font-bold text-center p-10 rounded-lg"
        id="table"
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
      return Array(this.n).fill({ text: null, link: null });
    },
    table() {
      this.keys[0] = { text: "#3FB00B", link: "" };
      if (this.n === 21) {
        this.keys[2] = { text: "VERIFY MEMBERSHIP (coming soon)", link: "" };
        this.keys[6] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
        };
        this.keys[8] = { text: "OPENSEA", link: "https://www.opensea.com" };
        this.keys[10] = { text: "DISCORD (coming soon)", link: "" };
        this.keys[14] = { text: "MINT COMING SOON", link: "" };
        this.keys[17] = { text: "*/10,000", link: "" };
        this.keys[18] = { text: "ABOUT", link: "" };
      }
      if (this.n === 24) {
        this.keys[5] = { text: "VERIFY MEMBERSHIP (coming soon)", link: "" };
        this.keys[2] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
        };
        this.keys[22] = { text: "OPENSEA", link: "https://www.opensea.com" };
        this.keys[17] = { text: "DISCORD (coming soon)", link: "" };
        this.keys[9] = { text: "MINT COMING SOON", link: "" };
        this.keys[15] = { text: "*/10,000", link: "" };
        this.keys[18] = { text: "ABOUT", link: "" };
      }
      if (this.n === 50) {
        this.keys[9] = { text: "VERIFY MEMBERSHIP (coming soon)", link: "" };
        this.keys[14] = { text: "DISCORD (coming soon)", link: "" };
        this.keys[18] = {
          text: "TWITTER",
          link: "https://twitter.com/pepeisgreen",
        };
        this.keys[22] = { text: "*/10,000", link: "" };
        this.keys[26] = { text: "MINT COMING SOON", link: "" };
        this.keys[40] = { text: "ABOUT", link: "" };
        this.keys[48] = { text: "OPENSEA", link: "https://www.opensea.com" };
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  height: 100%;
  width: 100%;
  background-color: #4ed419;
}
.square {
  border: 0.05em solid hsl(103, 88%, 45%);
  background-color: #3fb00b;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease-in-out;
}
.square:hover {
  border-color: hsl(103, 87%, 30%);
  background-color: hsl(103, 87%, 30%);
  transform: rotate(10deg);
}
p {
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
    bottom: 27.2%;
    right: 55.4%;
    width: 25%;
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
    bottom: 20.2%;
    right: 50.4%;
    width: 19%;
  }
}
</style>
