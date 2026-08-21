<script setup lang="ts">
import { computed } from 'vue'
import Giscus from '@giscus/vue'
import { giscusConfig } from '../config/giscus'
import { useTheme } from '../composables/useTheme'

const { theme } = useTheme()
const giscusTheme = computed(() => (theme.value === 'dark' ? 'dark' : 'light'))
</script>

<template>
  <main class="page">
    <h1>留言板</h1>
    <p class="page-desc">欢迎留言，需要登录 GitHub 账号。</p>
    <Giscus
      :repo="giscusConfig.repo"
      :repo-id="giscusConfig.repoId"
      :category="giscusConfig.category"
      :category-id="giscusConfig.categoryId"
      :mapping="giscusConfig.mapping"
      :term="giscusConfig.term"
      :strict="giscusConfig.strict"
      :reactions-enabled="giscusConfig.reactionsEnabled"
      :input-position="giscusConfig.inputPosition"
      :lang="giscusConfig.lang"
      :theme="giscusTheme"
      emit-metadata="0"
      loading="lazy"
    />
  </main>
</template>
