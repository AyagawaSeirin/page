import { ref, readonly } from 'vue'

export type Theme = 'light' | 'dark'

const media = window.matchMedia('(prefers-color-scheme: dark)')

function systemTheme(): Theme {
  return media.matches ? 'dark' : 'light'
}

function storedTheme(): Theme | null {
  try {
    const v = localStorage.getItem('theme')
    return v === 'light' || v === 'dark' ? v : null
  } catch {
    return null
  }
}

// 模块级单例：与 index.html 内联脚本设置的初始值保持一致
const theme = ref<Theme>(
  (document.documentElement.dataset.theme as Theme) ?? storedTheme() ?? systemTheme(),
)

function apply(t: Theme) {
  theme.value = t
  document.documentElement.dataset.theme = t
}

// 用户未手动选择时跟随系统变化
media.addEventListener('change', () => {
  if (!storedTheme()) apply(systemTheme())
})

export function useTheme() {
  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem('theme', next)
    } catch {}
    apply(next)
  }
  return { theme: readonly(theme), toggle }
}
