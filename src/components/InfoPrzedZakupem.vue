<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { AlertCircle, Ruler, Cross, Layers } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.fade-section').forEach((section, i) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
      },
    })
  })

  gsap.from('.main-heading', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
  })
})
</script>

<template>
  <section class="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
    <div class="absolute inset-0 bg-[url('/Wzory/pomnik1.jpg')] bg-cover bg-center opacity-5"></div>

    <div class="relative max-w-6xl mx-auto px-6 space-y-24">
      <!-- 🩶 Nagłówek -->
      <div class="text-center main-heading">
        <h1 class="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6">
          Informacja przed zakupem
        </h1>
        <p class="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Zanim dokonasz zakupu, upewnij się, że wybrany model nagrobka jest zgodny z wymiarami
          miejsca na cmentarzu. W razie wątpliwości przygotujemy projekt indywidualny.
        </p>
      </div>

      <!-- 🔸 1. Informacja przedzakupowa -->
      <div class="fade-section bg-white/80 border border-gray-200 rounded-2xl shadow-sm p-10">
        <div class="flex items-center gap-3 mb-5">
          <AlertCircle class="w-8 h-8 text-amber-600" />
          <h2 class="text-2xl font-serif font-semibold text-gray-800">Informacja przedzakupowa</h2>
        </div>
        <p class="text-gray-700 leading-relaxed mb-4">
          Przed dokonaniem zakupu prosimy upewnić się, że wybrany nagrobek jest zgodny z wymiarem
          placu na cmentarzu. W przypadku innego wymiaru należy wybrać
          <span class="font-semibold">nagrobek indywidualny</span>.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Klient, dokonując zakupu, oświadcza, że zapoznał się z
          <span class="font-semibold">regulaminem</span> i go akceptuje. Jeżeli potrzebna jest faktura,
          prosimy o informację <span class="font-semibold">przed zakupem</span>.
        </p>
        <p class="text-gray-600 italic">~ Zespół KOMPOZE</p>
      </div>

      <!-- 🔸 2. Nowy wzór krzyża -->
      <div class="fade-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <Cross class="w-7 h-7 text-gray-700" />
            <h2 class="text-3xl font-serif font-semibold text-gray-800">Nowy wzór krzyża od 2024</h2>
          </div>
          <p class="text-gray-700 leading-relaxed mb-4">
            Wszystkie nagrobki zamówione po <span class="font-semibold">styczniu 2024</span>
            posiadają nowy wzór krzyża o minimalistycznym wyglądzie. Unowocześniono również napisy —
            są cieńsze i delikatniejsze.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Co roku zbieramy opinie klientów, dzięki czemu wprowadzamy ulepszenia i podnosimy jakość
            naszych produktów.
          </p>
          <p class="text-gray-600 text-sm italic mt-3">
            *Tablica po wyprodukowaniu jest czarna, napisy i krzyż są srebrne.
          </p>
        </div>
        <img
            src="/Wzory/tablica.png"
            alt="Wzór tablic na rok 2024"
            class="rounded-2xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>

      <!-- 🔸 3. Wymiary nagrobków -->
      <div class="fade-section bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <div class="flex items-center gap-3 mb-4">
          <Ruler class="w-7 h-7 text-gray-700" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">Wymiary nagrobków</h2>
        </div>
        <p class="text-gray-700 leading-relaxed mb-3">
          Aktualne wymiary modeli dostępne są w zakładce
          <span class="font-semibold">Wzory / Ceny</span>. Wykonujemy również
          <span class="font-semibold">nagrobki indywidualne</span> dopasowane do placu.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Pamiętaj, że nagrobek nie może przekraczać wymiarów wykupionego miejsca na cmentarzu.
        </p>
      </div>

      <!-- 🔸 4. Podłoże: ziemia / piwnica -->
      <div class="fade-section bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-10">
        <div class="flex items-center gap-3 mb-6">
          <Layers class="w-7 h-7 text-gray-700" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">Podłoże: ziemia i piwnica</h2>
        </div>

        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Grób ziemny</h3>
            <p class="text-gray-700 leading-relaxed">
              W przypadku grobu ziemnego sprawa jest prosta. Nagrobek stawiany jest na wyznaczonym
              miejscu i mocowany przy pomocy kotew. Przed montażem należy wyrównać podłoże i
              usunąć znicze, ramy lub grys.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Piwnica</h3>
            <p class="text-gray-700 leading-relaxed mb-3">
              Piwnice często posiadają wymiar <span class="font-semibold">200×100 cm</span> lub więcej.
              W takim przypadku standardowy nagrobek będzie mniejszy od piwnicy.
            </p>
            <ul class="list-disc list-inside text-gray-700 mb-4">
              <li>
                <span class="font-semibold">Opcja 1:</span> zamów nagrobek standardowy i zamaskuj beton
                grysem, kostką lub płytkami.
              </li>
              <li>
                <span class="font-semibold">Opcja 2:</span> zamów nagrobek indywidualny na wymiar piwnicy.
                Płyty betonowe muszą być równe i wypoziomowane, aby woda spływała z pomnika.
              </li>
            </ul>

            <p class="text-gray-700 leading-relaxed mb-4">
              <span class="font-semibold">Przykład:</span><br />
              • Piwnica – płyty betonowe: 250×120 cm<br />
              • Podstawa nagrobka: 250×120 cm<br /><br />
              • Piwnica – zewnętrzny wymiar: 260×130 cm<br />
              • Nagrobek indywidualny: 260×130 cm
            </p>
            <p class="text-gray-700 leading-relaxed">
              Kluczowe: nagrobek <span class="font-semibold">nie może przekraczać</span> wymiaru
              placu. Jeśli miejsce ma 260×130 cm, zamów podstawę 250×120 cm.
            </p>
          </div>
        </div>

        <!-- Wizualizacje -->
        <div class="mt-12">
          <h3 class="text-center text-lg font-medium text-gray-700 mb-6">
            Przykładowe wizualizacje piwnic
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
                v-for="(img, i) in [
                { src: '/Wzory/wymiary.png', title: 'Piwnica – wizualizacja pustej piwnicy', size: 'wymiar zew. 260×130 cm' },
                { src: '/Wzory/Prawybok.png', title: 'Piwnica – nagrobek standardowy', size: 'wymiar zew. 180×80 cm' },
                { src: '/Wzory/lewybok.png', title: 'Piwnica – nagrobek indywidualny', size: 'wymiar zew. 260×130 cm' }
              ]"
                :key="i"
                class="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <img :src="img.src" :alt="img.title" class="rounded-lg shadow w-full mb-4 object-contain" />
              <h4 class="font-semibold text-gray-800">{{ img.title }}</h4>
              <p class="text-sm text-gray-600">{{ img.size }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 🔸 5. Nagrobki indywidualne -->
      <div class="fade-section bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <div class="flex items-center gap-3 mb-4">
          <Cross class="w-7 h-7 text-gray-700" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">
            Nagrobki indywidualne – powyżej 130 cm szerokości
          </h2>
        </div>
        <p class="text-gray-700 leading-relaxed mb-4">
          Nagrobki o szerokości płyty głównej powyżej 130 cm wykonujemy z kilku płyt połączonych
          czarnym paskiem. Rozwiązanie to ułatwia transport i dodaje eleganckiego wyglądu.
        </p>
      </div>

      <!-- 🔸 6. Zgoda z kancelarii -->
      <div class="fade-section bg-white/80 border border-gray-200 rounded-2xl shadow-sm p-10">
        <div class="flex items-center gap-3 mb-4">
          <AlertCircle class="w-7 h-7 text-blue-600" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">
            Zgoda z kancelarii cmentarza / od księdza
          </h2>
        </div>
        <p class="text-gray-700 leading-relaxed mb-4">
          Każdy klient otrzymuje od nas szkic techniczny nagrobka. Dokument należy uzupełnić danymi
          dysponenta grobu i zanieść do kancelarii cmentarza lub do księdza w celu uzyskania zgody
          na montaż i wjazd.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          Opłaty w kancelarii są po stronie klienta. Jeżeli nasza firma dokona opłat, zostaną one
          doliczone do końcowej sumy.
        </p>
        <div class="p-6 mt-8 bg-blue-50 border border-blue-200 rounded-xl">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Gdzie wysłać zgodę?</h3>
          <p class="text-gray-700">
            Prosimy przesłać skan dokumentu na adres:
            <a href="mailto:nagrobkikompozytowe@gmail.com" class="font-semibold text-blue-700 hover:underline">
              nagrobkikompozytowe@gmail.com
            </a>
          </p>
        </div>
      </div>

      <!-- 🔸 7. Wykończenie grobu -->
      <div class="fade-section bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-10">
        <div class="flex items-center gap-3 mb-6">
          <Layers class="w-7 h-7 text-red-600" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">WAŻNE – Wykończenie grobu</h2>
        </div>
        <p class="text-gray-700 leading-relaxed">
          Po stronie klienta zawsze jest samodzielne wykończenie placu wokół nagrobka. Kluczowe jest
          to zwłaszcza w przypadku fundamentów, na których stawiany jest pomnik, aby zamaskować
          wystający beton.
        </p>
        <p class="text-gray-700 leading-relaxed mt-4">
          Najczęściej wybierane opcje to <span class="font-semibold">grys, kostka brukowa</span> lub
          <span class="font-semibold">płytki</span>. Takie rozwiązania nadają estetyczny wygląd i
          ułatwiają utrzymanie czystości.
        </p>
      </div>

      <!-- 🔸 8. Zdjęcia -->
      <div class="fade-section bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
        <div class="flex items-center gap-3 mb-6">
          <Layers class="w-7 h-7 text-gray-700" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">Zdjęcia</h2>
        </div>

        <p class="text-gray-700 leading-relaxed mb-4">
          Szczególną uwagę należy zwrócić na jakość przesyłanych nam zdjęć. Fotografie muszą być
          <span class="font-semibold">bardzo dobrej jakości</span> – minimalna waga pliku to
          <span class="font-semibold">1 MB</span>. Dobre zdjęcie stanowi piękny akcent, nadający
          nagrobkowi indywidualny i elegancki wygląd.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          Zalecany wymiar zdjęcia to około <span class="font-semibold">9×12 cm</span>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-center">
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 class="font-semibold text-red-600 mb-3">Złe zdjęcie</h4>
            <img
                src="/Wzory/zdjecienie.png"
                alt="Złe zdjęcie"
                class="rounded-lg shadow w-full mb-4 object-contain h-72 mx-auto"
            />
            <p class="text-gray-700 text-sm">
              Niewyraźne, rozmazane, wykonane z daleka, z niejednolitym tłem lub niewidocznymi
              rysami twarzy.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 class="font-semibold text-green-700 mb-3">Dobre zdjęcie</h4>
            <img
                src="/Wzory/zdjecietak.png"
                alt="Dobre zdjęcie"
                class="rounded-lg shadow w-full mb-4 object-contain h-72 mx-auto"
            />
            <p class="text-gray-700 text-sm">
              Wyraźne, dobrze oświetlone, widać rysy twarzy oraz popiersie. Wykonane z bliska na
              jednolitym tle.
            </p>
          </div>
        </div>
      </div>

      <!-- 🔸 9. Zabezpieczenie wazonu -->
      <div class="fade-section bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-sm p-10">
        <div class="flex items-center gap-3 mb-6">
          <AlertCircle class="w-7 h-7 text-blue-600" />
          <h2 class="text-3xl font-serif font-semibold text-gray-800">Zabezpieczenie wazonu zimą</h2>
        </div>

        <p class="text-gray-700 leading-relaxed mb-4">
          Prosimy o zwrócenie <span class="font-semibold">szczególnej uwagi</span> na zabezpieczenie
          wazonów w okresie zimowym. W czasie ujemnych temperatur wazony należy
          <span class="font-semibold">koniecznie zabezpieczyć</span>, aby uniknąć ich pęknięcia.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          W tym celu można użyć <span class="font-semibold">folii ochronnej</span>, którą nakładamy
          na górną część wazonu, a następnie zabezpieczamy taśmą lub gumkami.
        </p>
      </div>
    </div>
  </section>
</template>
