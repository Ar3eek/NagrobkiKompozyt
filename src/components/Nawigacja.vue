<template>
  <nav class="bg-black text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo z ikoną nagrobka -->
      <router-link to="/" class="flex items-center  ">
        <div class="w-12 h-12 flex items-center justify-center">
          <!-- Ikona nagrobka (SVG) -->
          <img src="/logo2.svg" alt="logo"  />
        </div>
        <span class="  text-[1rem] px-6 md:text-xl font-semibold tracking-wide uppercase">Nagrobki z Kompozytu</span>
      </router-link>

      <!-- Menu -->
      <ul class="hidden md:flex space-x-8 text-sm font-semibold leading-tight  ">
        <router-link to="/Wzory" class="relative group ">
          Wzory
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
        <router-link to="/Nagrobki" class="relative group ">
          Nagrobki
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
        <router-link to="/Cena" class="relative group ">
          Cena
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
        <router-link to="/Galeria" class="relative group ">
          Galeria
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
        <router-link to="/ListaPytan" class="relative group ">
          Lista Pytań
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
        <router-link to="/PrzedZakupem" class="relative group ">
          Przed zakupem
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
        <router-link to="/Kontakt" class="relative group ">
          Kontakt
          <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </router-link>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden bg-gray-900 text-gray-200 px-4 pb-4 space-y-2">
        <a class="block hover:text-white">Strona główna</a>
        <a class="block hover:text-white">Nagrobki</a>
        <a class="block hover:text-white">Wzory / Ceny</a>
        <a class="block hover:text-white">Galeria</a>
        <a class="block hover:text-white">Lista pytań</a>
        <a class="block hover:text-white">Przed zakupem</a>
        <a class="block hover:text-white">Opinie</a>
        <a class="block hover:text-white">Kontakt</a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
nav {
  font-family: 'Merriweather', serif;
  letter-spacing: 0.03em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
