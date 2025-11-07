<script setup>
</script>

<template>
  <div class="w-full bg-black py-16">
    <div class="max-w-6xl mx-auto px-6 text-white text-center">
      <!-- Nagłówek -->
      <h1 class="text-3xl md:text-5xl font-serif font-semibold mb-4">
        Sprawdź wzory nagrobków
      </h1>
      <p class="text-gray-300 mb-12 text-lg">
        Poznaj nasze eleganckie wzory nagrobków kompozytowych — trwałe, estetyczne i ponadczasowe.
      </p>

      <!-- Zdjęcia obok siebie -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Pomnik pojedynczy -->
        <div class="flex flex-col items-center">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img
                src="/Wzory/pomnik1.jpg"
                alt="Pomnik pojedynczy"
                class="w-full h-[550px] object-contain bg-neutral-900 p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div class="mt-6 text-center">
            <h2 class="text-xl font-semibold tracking-wide">Pomnik pojedynczy</h2>
          </div>
        </div>

        <!-- Pomnik podwójny -->
        <div class="flex flex-col items-center">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img
                src="/Wzory/pomnik2.jpg"
                alt="Pomnik podwójny"
                class="w-full h-[550px] object-contain bg-neutral-900 p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div class="mt-6 text-center">
            <h2 class="text-xl font-semibold tracking-wide">Pomnik podwójny</h2>
          </div>
        </div>
      </div>

      <!-- Przycisk -->
      <div class="mt-16">
        <button
            class="px-8 py-3 border border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition duration-300"
        >
          Zobacz wszystkie wzory
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
