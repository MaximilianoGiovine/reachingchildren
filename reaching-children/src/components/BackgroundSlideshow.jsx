import { useEffect, useRef, useState } from 'react'

const backgroundModules = import.meta.glob(
  '../assets/background/*.{png,jpg,jpeg,webp,avif,gif,svg}',
  {
    eager: true,
    import: 'default',
  },
)

const backgroundImages = Object.values(backgroundModules)
  .filter((image) => typeof image === 'string')
  .sort()

const slideInterval = 8000
const fadeDuration = 1200

function getNextImage(currentImage) {
  if (!backgroundImages.length) {
    return null
  }

  if (!currentImage) {
    return backgroundImages[0]
  }

  const currentIndex = backgroundImages.indexOf(currentImage)
  const nextIndex = (currentIndex + 1) % backgroundImages.length

  return backgroundImages[nextIndex]
}

function BackgroundSlideshow() {
  const [currentImage, setCurrentImage] = useState(backgroundImages[0] ?? null)
  const [previousImage, setPreviousImage] = useState(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches)
    }

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => {
      mediaQuery.removeEventListener('change', updatePreference)
    }
  }, [])

  useEffect(() => {
    if (backgroundImages.length < 2 || reducedMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrentImage((image) => {
        const nextImage = getNextImage(image)

        if (!nextImage || nextImage === image) {
          return image
        }

        setPreviousImage(image)

        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = window.setTimeout(() => {
          setPreviousImage(null)
        }, fadeDuration)

        return nextImage
      })
    }, slideInterval)

    return () => {
      window.clearInterval(intervalId)
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [reducedMotion])

  const activeImage = currentImage ?? backgroundImages[0] ?? null

  return (
    <div className="background-stage" aria-hidden="true">
      {activeImage ? (
        <>
          {previousImage ? (
            <div
              key={previousImage}
              className="background-stage__image background-stage__image--previous"
              style={{ backgroundImage: `url("${previousImage}")` }}
            />
          ) : null}
          <div
            key={activeImage}
            className="background-stage__image background-stage__image--current"
            style={{ backgroundImage: `url("${activeImage}")` }}
          />
        </>
      ) : (
        <div className="background-stage__fallback" />
      )}
      <div className="background-stage__overlay" />
      <div className="background-stage__glow background-stage__glow--one" />
      <div className="background-stage__glow background-stage__glow--two" />
    </div>
  )
}

export default BackgroundSlideshow
