export function createViteCss() {
  return {
    requireModuleExtension: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/plugin/styles/layout.scss" as *;`,
      },
    },
  }
}
