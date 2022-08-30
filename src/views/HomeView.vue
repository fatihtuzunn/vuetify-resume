<template>
  <div>
  <Header />
  <Projects />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'Home',

  components: {
    Header,
    Projects
  },
}
</script>
