import { useState, useCallback, useEffect, useRef } from 'react'

const allModules = import.meta.glob(
  '../assets/carrusel-dinamico-cmm/*.{jpg,jpeg,JPG,JPEG,png,webp}',
  { eager: true, import: 'default' }
)

const allImages = Object.values(allModules)

function pickRandom(pool, count) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

const AUTO_ADVANCE_MS = 5000
const FADE_MS = 600
const SHOW_COUNT = 20

function DynamicCarousel({ title }) {
  const [images] = useState(() => pickRandom(allImages, SHOW_COUNT))
  const [displayed, setDisplayed] = useState(0)
  const [incoming, setIncoming] = useState(null)
  const timerRef = useRef(null)
  const fadeTimerRef = useRef(null)

  const goTo = useCallback((index) => {
    if (incoming !== null || index === displayed) return
    setIncoming(index)
    clearTimeout(fadeTimerRef.current)
    fadeTimerRef.current = setTimeout(() => {
      setDisplayed(index)
      setIncoming(null)
    }, FADE_MS)
  }, [displayed, incoming])

  const next = useCallback(() => {
    goTo((displayed + 1) % images.length)
  }, [displayed, goTo, images.length])

  const prev = useCallback(() => {
    goTo((displayed - 1 + images.length) % images.length)
  }, [displayed, goTo, images.length])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDisplayed((d) => {
        const nextIndex = (d + 1) % images.length
        setIncoming(nextIndex)
        clearTimeout(fadeTimerRef.current)
        fadeTimerRef.current = setTimeout(() => {
          setDisplayed(nextIndex)
          setIncoming(null)
        }, FADE_MS)
        return d
      })
    }, AUTO_ADVANCE_MS)
  }, [images.length])

  useEffect(() => {
    resetTimer()
    return () => {
      clearInterval(timerRef.current)
      clearTimeout(fadeTimerRef.current)
    }
  }, [resetTimer])

  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }
  const handleDot = (i) => { goTo(i); resetTimer() }

  if (!images.length) return null

  const activeIndex = incoming !== null ? incoming : displayed

  return (
    <section className="carousel-section">
      <div className="section-heading">
        <p className="card-label">CMM Chile</p>
        <h2>{title}</h2>
      </div>

      <div className="carousel glass-card">
        <img
          src={images[displayed]}
          alt={`${title} — foto ${displayed + 1} de ${images.length}`}
          className="carousel__image carousel__image--base"
          draggable={false}
        />

        {incoming !== null && (
          <img
            key={incoming}
            src={images[incoming]}
            alt={`${title} — foto ${incoming + 1} de ${images.length}`}
            className="carousel__image carousel__image--incoming"
            draggable={false}
          />
        )}

        <button
          className="carousel__btn carousel__btn--prev"
          onClick={handlePrev}
          aria-label="Imagen anterior"
        >
          ‹
        </button>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={handleNext}
          aria-label="Imagen siguiente"
        >
          ›
        </button>

        <div className="carousel__dots" role="tablist" aria-label="Seleccionar imagen">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Imagen ${i + 1}`}
              className={`carousel__dot ${i === activeIndex ? 'carousel__dot--active' : ''}`}
              onClick={() => handleDot(i)}
            />
          ))}
        </div>

        <div className="carousel__counter" aria-live="polite" aria-atomic="true">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  )
}

export default DynamicCarousel
