export const imgLocalUrl = (imgPath: string) => {
  try {
    const handlePath = imgPath.replace('@', '..')
    return new URL(handlePath, import.meta.url).href
  } catch (error) {
    console.error(error)
  }
}
