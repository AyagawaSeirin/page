<script setup lang="ts">
import avatarUrl from '../assets/avatar.png'

interface SocialLink {
  name: string
  href: string
  // simple-icons 风格 24x24 fill path
  path: string
}

const socials: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/AyagawaSeirin',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/AyagawaSeirin',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/AyagawaSeirin',
    path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
  },
  {
    name: 'Email',
    href: 'mailto:AyagawaSeirin@outlook.com',
    path: 'M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z',
  },
  {
    name: 'Blog',
    href: 'https://blog.seir.in',
    path: 'M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z',
  },
]
</script>

<template>
  <main class="home">
    <img class="avatar" :src="avatarUrl" alt="綾川星凛的头像" width="112" height="112" />

    <h1 class="name">
      <ruby>綾川<rt>あやがわ</rt></ruby>
      <ruby>星凛<rt>せいりん</rt></ruby>
    </h1>
    <p class="name-latin">AyagawaSeirin</p>

    <p class="intro">Developer · Network Engineer · Startup</p>

    <ul class="socials">
      <li v-for="s in socials" :key="s.name">
        <a
          :href="s.href"
          :title="s.name"
          :aria-label="s.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path :d="s.path" />
          </svg>
        </a>
      </li>
    </ul>

    <nav class="site-nav">
      <RouterLink to="/guestbook">留言板</RouterLink>
      <RouterLink to="/friends">友情链接</RouterLink>
    </nav>
  </main>
</template>

<style scoped>
.home {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1.25rem;
}

.avatar {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  margin: 1.75rem 0 0;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
}

.name ruby {
  margin: 0 0.15em;
}

.name rt {
  font-size: 0.55rem;
  font-weight: 400;
  color: var(--fg-muted);
  letter-spacing: 0.1em;
  padding-bottom: 0.35em;
}

.name-latin {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--fg-faint);
  letter-spacing: 0.02em;
}

.intro {
  margin: 1.5rem 0 0;
  font-size: 0.95rem;
  color: var(--fg-muted);
}

.socials {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 1.75rem 0 0;
  padding: 0;
}

.socials a {
  display: flex;
  color: var(--fg-muted);
  transition: color 0.2s ease;
}

.socials a:hover {
  color: var(--accent);
}

.site-nav {
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
}

.site-nav a {
  color: var(--fg-faint);
  transition: color 0.2s ease;
}

.site-nav a:hover {
  color: var(--accent);
}

@media (max-width: 480px) {
  .avatar {
    width: 6rem;
    height: 6rem;
  }

  .name {
    font-size: 1.5rem;
  }

  .socials {
    gap: 1.25rem;
  }
}
</style>
