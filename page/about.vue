<template>
  <div class="container mx-auto px-4 py-8">
    <button
      @click="goBack"
      class="bg-2c9e00 text-3fb00b font-inconsolata text-lg px-4 py-2 rounded inline-flex items-center mb-8"
    >
      <i class="material-icons mr-2">arrow_back</i>
      Go Back
    </button>
    <h1 class="text-4xl font-bold mb-4">Heading 1</h1>
    <p class="text-lg mb-8">
      This is a placeholder text for Heading 1. You can replace this with your
      own content.
    </p>
    <h2 class="text-3xl font-bold mb-4">Heading 2</h2>
    <p class="text-lg">
      This is a placeholder text for Heading 2. You can replace this with your
      own content.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.font-inconsolata {
  font-family: "Inconsolata", monospace;
}
.bg-2c9e00 {
  background-color: #2c9e00;
}
.text-3fb00b {
  color: #3fb00b;
}
</style>
