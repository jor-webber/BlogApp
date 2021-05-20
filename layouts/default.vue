<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSideNav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader';
import TheSideNav from '@/components/navigation/TheSideNav'

export default {
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      displaySidenav: false,
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
