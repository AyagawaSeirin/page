<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <ThemeToggle />
  <SiteHeader />
  <RouterView />
</template>
