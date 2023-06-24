<template>
  <div class="container bg-3fb00b h-screen w-screen p-10">
    <div style="display: flex">
      <button
        @click="goBack"
        class="font-inconsolata text-lg px-4 py-2 rounded inline-flex items-center mb-8"
      >
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

        <svg
          width="80px"
          height="80px"
          viewBox="0 0 36.00 36.00"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--twemoji"
          preserveAspectRatio="xMidYMid meet"
          fill="#c5fdaf"
          stroke="#c5fdaf"
          stroke-width="0.00036"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.144"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#2c9e00"
              d="M34 3H12.475V1.128c0-1.046-.74-1.435-1.645-.865L.69 6.652c-.905.57-.922 1.527-.038 2.127l10.215 6.931c.884.602 1.607.235 1.607-.811V13H34a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM.024 26.184c0-.727.5-1.137 1.197-1.137H4.13c1.576 0 2.849 1.061 2.849 2.667c0 1.061-.439 1.772-1.409 2.227v.03c1.288.183 2.303 1.258 2.303 2.576c0 2.137-1.424 3.288-3.516 3.288h-3.12c-.697 0-1.212-.439-1.212-1.151v-8.5zm2.273 3.135h1.182c.742 0 1.227-.439 1.227-1.196c0-.713-.561-1.076-1.227-1.076H2.297v2.272zm0 4.516h1.788c.818 0 1.424-.47 1.424-1.318c0-.712-.545-1.197-1.606-1.197H2.297v2.515zm9.217-7.713c.258-.696.85-1.257 1.621-1.257c.805 0 1.365.53 1.621 1.257l2.971 8.243c.092.242.121.454.121.561c0 .591-.484 1-1.045 1c-.637 0-.955-.333-1.107-.788l-.453-1.424H11.03l-.455 1.409c-.15.47-.469.803-1.09.803c-.607 0-1.122-.454-1.122-1.061c0-.242.076-.424.106-.5l3.045-8.243zm.168 5.501h2.879l-1.41-4.395h-.029l-1.44 4.395zm11.378-6.758c1.106 0 3.258.363 3.258 1.696c0 .546-.379 1.016-.94 1.016c-.621 0-1.046-.53-2.318-.53c-1.879 0-2.849 1.591-2.849 3.439c0 1.803.985 3.349 2.849 3.349c1.272 0 1.788-.637 2.409-.637c.682 0 1 .682 1 1.03c0 1.455-2.288 1.788-3.409 1.788c-3.076 0-5.212-2.439-5.212-5.576c0-3.151 2.121-5.575 5.212-5.575zm4.471 1.212c0-.621.455-1.121 1.137-1.121c.651 0 1.137.424 1.137 1.121v3.273l3.727-3.97c.167-.182.455-.424.879-.424c.576 0 1.121.439 1.121 1.091c0 .393-.242.712-.742 1.212l-2.863 2.818l3.5 3.651c.363.364.637.697.637 1.152c0 .712-.562 1.045-1.183 1.045c-.44 0-.727-.258-1.151-.712l-3.924-4.243v3.864c0 .591-.455 1.091-1.137 1.091c-.651 0-1.137-.424-1.137-1.091v-8.757z"
            />
          </g>
        </svg>
      </button>
      <h1 class="text-7xl font-bold ml-20">ABOUT</h1>
    </div>
    <button :onclick="openModal">weqf</button>
    <div v-if="modalVisible" class="smooth-transition visible">This modal will be displayed according to the status when the previous one is closed or the display status is fasle</div>

    <div class="bg-2c9e00 p-10 rounded-lg">
      <p class="text-lg">
        Green celebrates the unique cultural impact of Pepe the Frog, along with
        the diverse and creative world of Pepe memes. Our mission is to foster a
        community that cherishes Pepe's endearing qualities, embracing the
        humor, artistic expression, and camaraderie that Pepe represents. As an
        Affiliate of Green we believe that Pepe is not just a meme; it is a
        symbol of unity, freedom of expression, and the power of internet
        culture. Through our project, we strive to promote inclusivity, open
        dialogue, and mutual respect among Pepe enthusiasts. We aim to provide a
        platform where Pepe enthusiasts can connect, collaborate, and contribute
        to the ongoing legacy of Pepe, ensuring its enduring presence in popular
        culture. Together, let us embrace the lightheartedness and joy that Pepe
        represents, while promoting positivity and appreciation for the diverse
        range of Pepe memes. Green is not just a project; it is a declaration of
        our affiliation, a testament to our commitment, and an homage to the
        everlasting impact of Pepe the Frog.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      modalVisible: true,
    }
  },
  methods: {
    openModal(){
      console.log(this.modalVisible)
      this.modalVisible = !this.modalVisible
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.smooth-transition {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.smooth-transition.visible {
  opacity: 1;
}
.font-inconsolata,
h1,
h2 {
  font-family: "Inconsolata", monospace;
}
.bg-2c9e00 {
  background-color: #2c9e00;
}
.bg-2c9e00 {
  background-color: #2c9e00;
}
.bg-3fb00b {
  background-color: #3fb00b;
}
.text-3fb00b {
  color: #3fb00b;
}
</style>
