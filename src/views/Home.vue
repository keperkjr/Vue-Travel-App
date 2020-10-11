<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>

    <div class="destinations">
      <section 
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link :to="getNavigationPath(destination)" >
          <h2>{{destination.name}}</h2>
        </router-link>

        <figure>
          <router-link :to="getNavigationPath(destination)">
            <img :src="getImgPath(destination.image)"
              :alt="destination.name"
            >
          </router-link>
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js"

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      destinations: store.destinations
    }
  },
  methods: {
    getImgPath(image) {
      let path = require(`@/assets/${image}`);
      return path;
    },
    getNavigationPath(destination) {
      return {
        name: 'DestinationDetails',
         params: {
           id: destination.id, 
           slug: destination.slug
          }
      };
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
}

a {
  color: lightseagreen;
  text-decoration: none;
}

a:visited, a:hover {
  text-decoration: underline;
}
</style>
