<script setup lang="ts">
const links = [
  { to: '/', label: '首页' },
  { to: '/guestbook', label: '留言板' },
  { to: '/friends', label: '友情链接' },
]
</script>

<template>
  <header class="site-header">
    <nav class="site-nav">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  padding: 1.625rem 1.25rem 0;
}

.site-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.875rem;
}

.site-nav a {
  color: var(--fg-muted);
  transition: color 0.2s ease;
}

.site-nav a:hover {
  color: var(--fg);
}

.site-nav a[aria-current='page'] {
  color: var(--fg);
}

@media (max-width: 480px) {
  .site-nav {
    gap: 1.5rem;
  }
}
</style>
