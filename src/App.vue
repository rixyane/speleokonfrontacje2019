<template>
  <div id="app">
    <Home/>
    <footer id="CONTACT" class="bg-red-500 py-12">
      <div class="container mx-auto px-8 lg:pl-20 md:flex">
        <div class="flex-1 text-xl">
          <strong class="block font-semibold text-3xl">Speleokonfrontacje 2019</strong>
          <strong class="block font-medium">Podlesiowo, 15-17/11/2019</strong>

          <p class="font-light mt-4">
            Zajazd Jurajski<br>
            42-425 Podlesice 1
            <a href="https://goo.gl/maps/9m7Gjr57NsTti9KD9" target="_blank" class="ml-3">
              <i class="fas fa-map-marker-alt text-green-300"/>
            </a>
          </p>
        </div>
        <div class="flex-1 pl-8 mt-12 md:mt-0">
          <p class="border-l pl-12 font-light leading-loose">
            <span class="uppercase">Speleoklub Dąbrowa Górnicza</span><br>
            <a href="http://www.sdg.org.pl" target="_blank" class="underline">www.sdg.org.pl</a><br>
            <a href="mailto:zarzad@sdg.org.pl" target="_blank" class="underline">zarzad@sdg.org.pl</a><br>
            Adres: 41-300 Dąbrowa Górnicza, ul. 3-go Maja 12<br>
            Konto: ING 82 1050 1360 1000 0090 3025 7639
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Oswald', sans-serif;
  font-size: 12pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
