import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const works = [
  {
    id: 1,
    category: "video",
    number: "01",
    label: "VIDEO",
    name: "Short-form video",
    type: "TikTok / Reels",
    description:
      "Создание коротких видео для социальных сетей: разработка идеи, сценария, монтаж и адаптация контента под формат площадки.",
  },
  {
    id: 2,
    category: "social",
    number: "02",
    label: "SOCIAL",
    name: "Social media",
    type: "VK / Telegram",
    description:
      "Работа с социальными сетями: контент-план, посты, визуальная подача, публикация и анализ эффективности контента.",
  },
  {
    id: 3,
    category: "design",
    number: "03",
    label: "DESIGN",
    name: "Visual content",
    type: "Design / Photoshop",
    description:
      "Создание визуальных материалов для социальных сетей и рекламных задач с учётом общей стилистики проекта.",
  },
]

function Works() {
  const [filter, setFilter] = useState("all")
  const [selectedWork, setSelectedWork] = useState(null)

  const filteredWorks =
    filter === "all"
      ? works
      : works.filter((work) => work.category === filter)

  useEffect(() => {
    if (!selectedWork) return

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedWork(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedWork])

  const modal = selectedWork
    ? createPortal(
        <div
          className="work-modal"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="work-modal__box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="work-modal__close"
              onClick={() => setSelectedWork(null)}
              aria-label="Закрыть"
            >
              ×
            </button>

            <div className="work-modal__visual">
              <span className="work-modal__visual-number">
                {selectedWork.number}
              </span>

              <span className="work-modal__visual-label">
                {selectedWork.label}
              </span>

              <span className="work-modal__visual-symbol">
                {selectedWork.number}
              </span>
            </div>

            <div className="work-modal__info">
              <div className="work-modal__meta">
                {selectedWork.type}
              </div>

              <h3 className="work-modal__title">
                {selectedWork.name}
              </h3>

              <div className="work-modal__line" />

              <div className="work-modal__description-label">
                Описание
              </div>

              <p className="work-modal__description">
                {selectedWork.description}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <section className="section works" id="works">
        <div className="section__head">
          <div className="section__number">05</div>
          <h2 className="section__title">Работы</h2>
        </div>

        <div className="works__toolbar">
          <div className="works__filters">
            <button
              type="button"
              className={`filter ${
                filter === "all" ? "filter--active" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              Все
            </button>

            <button
              type="button"
              className={`filter ${
                filter === "video" ? "filter--active" : ""
              }`}
              onClick={() => setFilter("video")}
            >
              Видео
            </button>

            <button
              type="button"
              className={`filter ${
                filter === "design" ? "filter--active" : ""
              }`}
              onClick={() => setFilter("design")}
            >
              Дизайн
            </button>

            <button
              type="button"
              className={`filter ${
                filter === "social" ? "filter--active" : ""
              }`}
              onClick={() => setFilter("social")}
            >
              Соцсети
            </button>
          </div>

          <div className="works__count">
            {filteredWorks.length.toString().padStart(2, "0")} работы
          </div>
        </div>

        <div className="works__grid">
          {filteredWorks.map((work) => (
            <article
              className="work"
              key={work.id}
              onClick={() => setSelectedWork(work)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setSelectedWork(work)
                }
              }}
            >
              <div className="work__visual">
                <div className="work__visual-top">
                  <span>{work.number}</span>
                  <span>{work.label}</span>
                </div>

                <div className="work__symbol">
                  {work.number}
                </div>

                <div className="work__view">
                  Смотреть ↗
                </div>
              </div>

              <div className="work__caption">
                <div>
                  <h3>{work.name}</h3>
                  <span>{work.type}</span>
                </div>

                <span className="work__caption-number">
                  {work.number}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {modal}
    </>
  )
}

export default Works
