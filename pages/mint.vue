<template>
  <div class="flex flex-col h-full">
    <header class="w-full p-4 z-20 flex justify-between items-center bg-green shadow">
      <div>
        <a href="#" class="text-green">BASE #3FB00B</a>
      </div>
      <div class="flex gap-4">
        <button disabled class="text-white is-green px-2 py-1 rounded">MINT coming soon</button>
      </div>
    </header>
    <div class="h-screen shadow bg-gray-100 p-4">
      <div class="flex gap-4">
        <div class="w-1/2">
          <!-- <img src="/path-to-your-image" alt="Some Desc" class="object-cover w-full h-64" /> -->
          <div class="is-green z-20 shadow place-content-end"
            style="
              margin-left: auto; 
              margin-right: 0;
              height: 45vw;
              width: 45vw;
              text-align: right;
          "></div>
        </div>
        <div class="w-1/2">
          <h1 class="text-4xl font-bold mb-4 text-green">BASE #3FB00B</h1>
          <!-- <h2 class="text-2xl font-bold mb-4 text-green">Lorem Ipsum text</h2> -->
          <p class="mb-4 text-green text-sm">Verify your membership via the “3FB00B” NFT, establishing color consensus and accessing premium features enabled by our organization. Benefit from the proprietary Lily-Pad and have access to unique utilities and experiences.</p>
          <div class="flow-root">
            <p class="text-green text-xs">View Contract<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></p>
          </div>
        
        </div>
      </div>
    </div>
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t shadow md:flex md:items-center md:justify-between md:p-6">
        <span class="text-sm text-green sm:text-center">
          © #3FB00B. All rights reserved.
        </span>
    </footer>     
  </div>
</template>

<style scoped>
html,
body,
#__nuxt,
#__layout,
.flex {
  height: 100%;
  margin: 0;
}
button, a, span, p, h1 {
  font-family: "Inconsolata", monospace;
}
.text-green {
  color: #3fb00b;
}
.is-green {
  background-color: #3fb00b;
}
</style>
