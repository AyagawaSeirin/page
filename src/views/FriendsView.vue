<script setup lang="ts">
import friends from '../data/friends.json'
</script>

<template>
  <main class="page page-wide">
    <h1>友情链接</h1>
    <p class="page-desc">一些朋友们。</p>
    <ul class="friend-list">
      <li v-for="f in friends" :key="f.link">
        <a class="friend-card" :href="f.link" target="_blank" rel="noopener noreferrer">
          <img class="friend-avatar" :src="f.avatar" :alt="`${f.name} 的头像`" loading="lazy" />
          <span class="friend-info">
            <span class="friend-name">{{ f.name }}</span>
            <span class="friend-desc">{{ f.description }}</span>
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.page-wide {
  max-width: 800px;
}

.friend-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.75rem;
}

.friend-card {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: border-color 0.2s ease;
}

.friend-card:hover {
  color: inherit;
  border-color: var(--fg-faint);
}

.friend-avatar {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.friend-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.friend-name {
  font-weight: 600;
  font-size: 0.95rem;
}

.friend-desc {
  font-size: 0.85rem;
  color: var(--fg-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .friend-list {
    grid-template-columns: 1fr;
  }
}
</style>
