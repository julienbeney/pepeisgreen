<template>
  <img class="pepe" src="pepe.png" />
  <div class="grid grid-cols-10">
    <div
      v-for="col in table"
      :key="col"
      class="square text-green-500 text-lg font-bold text-center p-10"
    >
      {{ col }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      keys: Array(50).fill(null),
    };
  },
  computed: {
    table() {
      this.keys[26] = "MINT COMING SOON";
      return this.keys;
    },
  },
});
</script>
<style>
.pepe {
  position: fixed;
  bottom: 20.2%;
  right: 44.95%;
  width: 25%;
}
.grid {
  background-color: #2c9e00;
}
.square {
  height: 20vh;
  width: 10vw;
  border: 0.1em solid #3fb00b;
  background-color: #3fb00b;
  cursor: pointer;
}
.square:hover {
  border-color: #2c9e00;
  background-color: #2c9e00;
}
</style>
