export function createViteCss() {
  return {
    requireModuleExtension: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/layout.scss" as *;`,
      },
    },
  }
}
