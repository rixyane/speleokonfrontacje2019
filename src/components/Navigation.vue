<template>
  <nav class="fixed inset-x-0 text-right px-4 z-10 text-sm sm:text-base">
    <ul class="py-2">
      <li v-for="item in menu" :key="item.code" class="inline-block">
        <a v-if="item.code !== 'FB'" class="block p-4 font-light hover:text-red-500" v-scroll-to="`#${item.code}`">
          {{item.label}}
        </a>
        <a v-else class="block p-4 font-light hover:text-red-500" href="https://www.facebook.com/events/2274041152717417/" target="_blank">
          <i class="fab fa-facebook"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import nav from '../constants/nav.json'

export default {
  name: 'Navigation',
  data() {
    return {
      menu: [ ...nav ],
    }
  },
}
</script>

<style scoped lang="scss">
nav {
  background-color: rgba(#000, 0.5);
}
a {
  transition: color .3s;
  cursor: pointer;
}
</style>
