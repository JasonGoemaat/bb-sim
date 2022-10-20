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
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
div.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: auto;
  /* margin-bottom: 50px; */
}

nav {
  height: 100vh;
  min-width: 200px;
  background-color: lightblue;
}

div.content {
  flex-grow: 1;
  margin-left: 1em;
  overflow: auto;
  background-color: orange;
}
</style>
