<template>
  <div>
    <Navigation/>
    <section id="TOP" class="h-screen relative main leading-tight">
      <div class="absolute inset-x-0 mt-40">
        <div class="container mx-auto px-8 sm:px-20 pt-32">
          <transition name="fade">
            <h1 v-show="showTitle" class="inline-block tracking-widest absolute -mt-24">
              <span class="block text-3xl sm:text-5xl md:text-6xl font-bold">SPELEOKONFRONTACJE</span>
              <span class="text-2xl sm:text-4xl md:text-5xl font-thin">Podlesice, 15-18/11/2019</span>
            </h1>
          </transition>

          <div class="text-center sm:flex justify-between mt-32 sm:mt-48 md:mt-64 text-xl border-b p-2">
            <button class="px-6 py-4 font-light border border-transparent hover:border-white" v-scroll-to="`#PROGRAM`">Program</button>
            <button class="px-6 py-4 font-light border border-transparent hover:border-white" v-scroll-to="`#ACCOMODATION`">Noclegi</button>
            <button class="px-6 py-4 font-light border border-transparent hover:border-white" v-scroll-to="`#TSHIRT`">Koszulki</button>
            <button class="px-6 py-4 font-light border border-transparent hover:border-white" v-scroll-to="`#MOVIE`">Zgłoszenie prezentacji</button>
          </div>
        </div>

      </div>
      <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)" :sectionHeight="100">
        <img src="@/assets/img/slo_0139.jpg">
      </parallax>
    </section>

    <section id="PROGRAM" class="mt-12 py-6">
      <div class="container mx-auto py-20 px-8 sm:px-20">
        <h2 class="text-3xl font-medium mb-8">Program</h2>

        <div class="text-lg font-light">
          Wstępny rozkład jazdy Speleokonfrontacje 2019<br>
          <br>
          <strong class="font-normal">Piatek:</strong><br>
          Recepcja otwarta od 17:00<br>
          Otwarcie oficjalne 19:00<br>
          <span class="text-red-500">19:05</span> Gala wręczenia Nagrody imienia Waldka Muchy. Grupa LaSalle z pokazami 3D<br>
          <span class="text-red-500">23:00</span> Zakończenie<br>
          <br><br>
          <div class="sm:flex">
            <div class="sm:w-1/2">
              <strong class="font-normal">Sobota:</strong><br>
              Recepcja otwarta od godziny 10:00<br>
              <span class="text-red-500">10:00</span> Otwarcie straganów<br>
              <span class="text-red-500">11:00 - 15:00</span> Prelekcje na górze - mała sala<br>
              <span class="text-red-500">15:00</span> Obiad<br>
              <span class="text-red-500">16:00</span> Otwarcie główne i filmy pozakonkursowe<br>
              <span class="text-red-500">17:00 - 19:00</span> Filmy konkursowe<br>
              <span class="text-red-500">19:00- 18:30</span> Bufet<br>
              <span class="text-red-500">19:30 - 21:30</span> Część 2 prelekcji<br>
              <span class="text-red-500">21:30</span> Grill<br>
              <span class="text-red-500">21:30</span> Oficjalne zakończenie prelekcji<br>
              <span class="text-red-500">22:00</span> Zamkniecie kramów<br>
              <span class="text-red-500">23:00 - 04:00</span> Dyskoteka
            </div>
            <div class="sm:w-1/2 mt-4 sm:mt-0 sm:pl-8">
              <strong class="font-normal">Imprezy towarzyszące</strong><br>
              <span class="text-red-500">10:00 - 14:00</span> Zebranie KTJ<br>
              <span class="text-red-500">11:00 - 13:00</span> Pajak, Puch a warunki jaskiniowe, prezentuje Wojciech Kłapcia<br>
              <span class="text-red-500">13:00 - 14:00</span> Climax Sport, prezentauje Marek Walkowiak<br>
              <span class="text-red-500">14:00 - 15:00</span> Marek Olczak - wejście na 8 szczyt świata - Manaslu<br>

              <br>
              <strong class="font-normal">Dla dzieci</strong><br>

              <span class="text-red-500">11:00 - 13:00</span> Spacer ornitologiczny z Zielonym Puszczykiemla dzieci i dorosłych (ok 2godziny)<br>
              <span class="text-red-500">11:00 - 15:00</span> Zabawy artystyczne dla dzieci z Zielonym Puszczykiem<br>
              <span class="text-red-500">17:00 - 19:00</span> Zabawy i animiacje dla dzieci w Małpim Gaju<br>
              <span class="text-red-500">18:30 - 19:00</span> Kino dla najmłodszych<br>
              <span class="text-red-500">21:30</span> Koniec zabaw dla dzieci
            </div>

          </div>
          <br><br>
          <strong class="font-normal">Niedziela:</strong><br>
          <span class="text-red-500">12:00</span> Otwarcie i ogłoszenie wyników głosowania<br>
          <span class="text-red-500">14:00</span> Zakończenie imprezy
        </div>
      </div>
    </section>

    <section id="ACCOMODATION" class="py-6 min-h-screen">
      <div class="container mx-auto py-20 px-8 sm:px-20">
        <h2 class="text-3xl font-medium mb-8">Noclegi</h2>

        <p class="leading-relaxed mb-8 font-light">
          <strong class="font-normal">Ceny noclegów:</strong><br>
          - tylko piątek - 50 pln<br>
          - sobota (w pakiecie obiad + pokaz) - 100 pln<br>
          - piątek + sobota (w pakiecie obiad + pokaz) - 140 pln
        </p>

        <button v-on:click="getAccommodation = true" class="border rounded p-4 uppercase font-light hover:text-red-500 hover:border-red-500">Zarezerwuj nocleg</button>

        <transition name="modal">
          <div class="modal" v-if="getAccommodation">
            <div class="modal-mask" v-on:click="getAccommodation = false">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-body">
                    <slot name="body">
                      <!-- <iframe src="http://speleokonfrontacje.sdg.org.pl/noclegi19/web/" frameborder="0" marginheight="0" marginwidth="0"></iframe> -->
                      <p class="text-lg text-gray-900 text-center py-10">
                        <span class="inline-block font-bold text-red-500 mb-4">Rezerwacje online noclegów zostały zakończone.</span><br>
                        Zapraszamy do rezerwacji na miejscu w recepcji (płatność tylko gotówką).
                      </p>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        
      </div>
    </section>

    <section id="TSHIRT" class="py-6">
      <div class="container mx-auto py-20 px-4">
        <h2 class="text-3xl font-medium mb-8 px-4 sm:px-16">Koszulki</h2>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvHfs2plSisw6t3_c5_tgyxRenShivfVQ6bcltHNcOqrFE0A/viewform?embedded=true" height="2700" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
        
      </div>
    </section>

    <section id="MOVIE" class="py-6">
      <div class="container mx-auto py-20 px-4">
        <h2 class="text-3xl font-medium mb-8 px-4 sm:px-16">
          Zgłoszenie prezentacji

          <button v-on:click="showTerms = true" class="border rounded p-4 uppercase text-base font-light hover:text-red-500 hover:border-red-500 ml-8">Szczegóły</button>
        </h2>

        <transition name="modal">
          <div class="modal" v-if="showTerms">
            <div class="modal-mask" v-on:click="showTerms = false">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-body">
                    <slot name="body">
                      <iframe src="http://www.sdg.org.pl/index.php/2019/10/11/konkurs-na-najlepsza-prezentacje-2019/" frameborder="0" marginheight="0" marginwidth="0"></iframe>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSJyAKq2PaFUBXj_46n_NCa2YdcO2oXnXMVBnEqKZvpR0V7w/viewform?embedded=true" height="2600" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
        
      </div>
    </section>

  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Navigation from './Navigation.vue';

export default {
  name: 'Home',
  components: {
    Parallax,
    Navigation,
  },
  data () {
    return {
      showTitle: false,
      showTerms: false,
      getAccommodation: false,
    };
  },

  created () {
    setTimeout(() => this.showTitle = true, 100);
  },
}
</script>


<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  transform: scale(2);
}

.main {
  min-height: 40rem;

  /deep/ .Masthead {
    min-height: 40rem;
  }
}

iframe {
  width: 100%;
}

button {
  transition: all .3s;
}

#PROGRAM {
  background: url('../assets/img/img_people.jpg') center top;
  background-size: cover;
}

#ACCOMODATION {
  background: url('../assets/img/spik.jpg') center top;
  background-size: cover;
}

#TSHIRT {
  background: url('../assets/img/slo_0091.jpg');
  background-size: cover;
}

#MOVIE {
  background: url('../assets/img/IMG_01111.jpg') center top;
  background-size: cover;
}

.modal,
.modal-mask {
  @apply .fixed .w-full .h-full .inset-0;
}

.modal {
  @apply .overflow-auto;
  z-index: 9998;
  transition: opacity .5s ease .2s;

  iframe {
    height: 90vh;
  }
}

.modal-mask {
  @apply .flex .items-center .justify-center;
  z-index: 1;
  background-color: rgba(#000, 0.5);
}

.modal-wrapper {
  @apply .relative .mx-auto;
  z-index: 2;
}

.modal-container {
  @apply .relative .bg-white .overflow-auto .rounded .shadow;
  width: 90vw;
  height: 90vh;
  transition: all .3s ease .2s;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

</style>
