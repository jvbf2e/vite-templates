export function createViteCss() {
  return {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/layout.scss" as *;`,
      },
    },
  }
}
