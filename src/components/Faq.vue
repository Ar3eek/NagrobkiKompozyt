<script setup>
</script>

<template>
  <!-- GŁÓWNA SEKCJA INFORMACYJNA -->
  <section class="w-full bg-stone-50 py-20">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Obrazek -->
      <div class="flex justify-center">
        <img
            src="/Wzory/diagram.jpg"
            alt="Budowa płyty typu Dibond"
            class="rounded-2xl shadow-lg w-full max-w-md object-contain"
        />
      </div>

      <!-- Tekst o budowie -->
      <div>
        <h2 class="text-4xl font-serif font-semibold text-gray-800 mb-6">
          Z czego zbudowana jest płyta kompozytowa typu Dibond?
        </h2>
        <p class="text-gray-700 leading-relaxed mb-5 text-lg">
          Płyty <span class="font-semibold text-gray-900">kompozytowe typu Dibond</span> to nowoczesne rozwiązanie
          w produkcji nagrobków. Składają się z dwóch warstw aluminium oraz lekkiego
          <span class="font-semibold">rdzenia z polietylenu</span>, który odpowiada za ich trwałość
          i odporność na czynniki zewnętrzne.
        </p>
        <p class="text-gray-700 leading-relaxed mb-5 text-lg">
          Dzięki takiej strukturze Dibond jest jednocześnie
          <span class="font-semibold text-gray-900">sztywny, lekki i odporny na korozję</span>.
          To sprawia, że nagrobki z tego materiału są nie tylko solidne, ale też łatwe w montażu.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg">
          Materiał zachowuje estetyczny wygląd przez wiele lat, łącząc
          <span class="font-semibold text-gray-900">trwałość, nowoczesny design i przystępną cenę</span>.
        </p>
      </div>
    </div>
  </section>

  <!-- 🔹 NOWA SEKCJA FAQ Z OBRAZKIEM -->
  <section
      class="relative w-full bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24 border-t border-gray-200 overflow-hidden"
  >
    <!-- Dekoracyjne tło -->
    <div
        class="absolute inset-0 bg-[url('/wzory/pomnik1.jpg')] bg-cover bg-center opacity-10"
    ></div>

    <div class="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Tekst FAQ -->
      <div>
        <h2 class="text-4xl font-serif font-semibold text-gray-800 mb-10">
          Najczęściej zadawane pytania o nagrobki kompozytowe
        </h2>

        <div class="space-y-8 text-gray-700 text-lg leading-relaxed">
          <div>
            <h3 class="font-semibold text-gray-900 text-xl mb-2">
              Czym są nagrobki kompozytowe?
            </h3>
            <p>
              To lekkie, ale wyjątkowo trwałe konstrukcje z płyt aluminiowych
              połączonych rdzeniem z polietylenu. Dzięki temu są odporne na
              deszcz, mróz i promieniowanie UV, a przy tym znacznie tańsze od kamienia.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 text-xl mb-2">
              Jak długo wytrzymuje pomnik z kompozytu?
            </h3>
            <p>
              Średnia trwałość pomników kompozytowych wynosi
              <span class="font-semibold">10–15 lat</span>. Ich powierzchnia
              zachowuje kolor i strukturę nawet w trudnych warunkach atmosferycznych.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 text-xl mb-2">
              Ile trwa realizacja zamówienia?
            </h3>
            <p>
              Standardowy czas realizacji to od <span class="font-semibold">30 do 60 dni roboczych</span>.
              Termin montażu zależy od pogody, ale na każdym etapie utrzymujemy kontakt z klientem.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 text-xl mb-2">
              Czy montujecie pomniki w całej Polsce?
            </h3>
            <p>
              Tak. Realizujemy zamówienia w całym kraju. Nasza siedziba w Łodzi
              pozwala nam na <span class="font-semibold">szybką i korzystną logistykę</span>
              niezależnie od regionu.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 text-xl mb-2">
              Czy oferujecie demontaż starych nagrobków?
            </h3>
            <p>
              Tak, na terenie do 50 km od Łodzi wykonujemy usługę demontażu.
              W innych regionach współpracujemy z lokalnymi firmami kamieniarskimi.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 text-xl mb-2">
              Jak dbać o nagrobek kompozytowy?
            </h3>
            <p>
              Wystarczy ciepła woda, miękka ściereczka i delikatny detergent.
              Unikaj silnych środków chemicznych i twardych gąbek – to gwarancja
              długotrwałego połysku.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center lg:text-left">
          <button
              class="px-10 py-3 border border-gray-800 text-gray-800 font-medium tracking-wide hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Zadzwoń do nas
          </button>
        </div>
      </div>

      <!-- Obraz po prawej stronie -->
      <div class="hidden lg:block relative">
        <img
            src="/Wzory/pomnik1.jpg"
            alt="Nagrobek kompozytowy KOMPOZE"
            class="rounded-2xl shadow-2xl w-full object-cover max-h-[600px]"
        />
        <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
