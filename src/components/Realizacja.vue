<script setup>
import { Phone, Clock, Truck } from "lucide-vue-next";
</script>

<template>
  <section class="w-full bg-stone-50 py-20">
    <div class="max-w-6xl mx-auto px-6 text-center text-gray-800">
      <!-- Nagłówek -->
      <h2 class="text-3xl md:text-4xl font-serif font-semibold tracking-wide mb-12">
        Szybka realizacja
      </h2>

      <!-- KROKI -->
      <div
          class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
      >
        <!-- KROK 1 -->
        <div class="flex flex-col items-center">
          <Phone class="w-12 h-12 text-gray-700 mb-4" stroke-width="1.5" />
          <h3 class="font-semibold text-lg tracking-wide mb-1">KROK 1</h3>
          <p class="text-gray-500 text-sm md:text-base">
            Wycena telefoniczna
          </p>
        </div>

        <!-- Strzałka -->
        <div class="hidden md:block text-gray-400 text-3xl">→</div>

        <!-- KROK 2 -->
        <div class="flex flex-col items-center">
          <Clock class="w-12 h-12 text-gray-700 mb-4" stroke-width="1.5" />
          <h3 class="font-semibold text-lg tracking-wide mb-1">KROK 2</h3>
          <p class="text-gray-500 text-sm md:text-base">
            Wysłanie danych do graweru
          </p>
        </div>

        <!-- Strzałka -->
        <div class="hidden md:block text-gray-400 text-3xl">→</div>

        <!-- KROK 3 -->
        <div class="flex flex-col items-center">
          <Truck class="w-12 h-12 text-gray-700 mb-4" stroke-width="1.5" />
          <h3 class="font-semibold text-lg tracking-wide mb-1">KROK 3</h3>
          <p class="text-gray-500 text-sm md:text-base">
            Dostawa i montaż
          </p>
        </div>
      </div>

      <!-- Przycisk -->
      <div class="mt-16">
        <button
            class="px-8 py-3 border border-gray-800 text-gray-800 font-medium tracking-wide hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Zadzwoń do nas
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
