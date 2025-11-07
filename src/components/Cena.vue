<script setup>
</script>

<template>
  <section class="w-full bg-stone-50 py-20">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <!-- Nagłówek -->
      <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-6">
        Zapytaj o cenę
      </h2>

      <!-- Opis -->
      <p class="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
        Każdy nagrobek kompozytowy wyceniamy indywidualnie — dopasowując projekt, rozmiar
        oraz wykończenie do Twoich potrzeb.
        Skontaktuj się z naszym doradcą, aby uzyskać szczegółową ofertę.
      </p>

      <!-- Przycisk -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-6">
        <button
            class="px-10 py-3 border border-gray-800 text-gray-800 font-medium tracking-wide hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Zapytaj o cenę
        </button>

        <div class="text-gray-700 text-lg mt-4 md:mt-0">
          <span class="block md:inline text-gray-500">lub zadzwoń:</span>
          <a
              href="tel:+48123456789"
              class="text-gray-900 font-semibold hover:underline ml-2"
          >
            +48 123 456 789
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
