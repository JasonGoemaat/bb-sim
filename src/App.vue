<script setup>
  // const props = defineProps(['routes', 'name'])
  const props = defineProps({
    routes: Object,
    name: String
  })

  console.log('props:', props)
</script>

<template>
  <div class="main">
    <nav>
      <ul>
        <li v-for="route in routes">
          <!-- <a :href="route.path">{{ route.name }}</a> -->
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
</style>
