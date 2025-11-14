/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_API_KEY: string
  // boshqa env o‘zgaruvchilarni ham shu yerga qo‘shish mumkin
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}