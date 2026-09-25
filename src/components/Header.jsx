import { useEffect, useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#about, #cases, #skills, #works, #contacts"
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.35,
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <header className="header">
      <div className="header__inner">

        <a
          href="#"
          className="logo"
          onClick={closeMenu}
        >
          MAISON OBSCURA
        </a>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={closeMenu}
          >
            Обо мне
          </a>

          <a
            href="#cases"
            className={activeSection === "cases" ? "active" : ""}
            onClick={closeMenu}
          >
            Кейсы
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={closeMenu}
          >
            Навыки
          </a>

          <a
            href="#works"
            className={activeSection === "works" ? "active" : ""}
            onClick={closeMenu}
          >
            Работы
          </a>

          <a
            href="#contacts"
            className={activeSection === "contacts" ? "active" : ""}
            onClick={closeMenu}
          >
            Контакты
          </a>

        </nav>

        <button
          className={`menu-btn ${menuOpen ? "menu-btn--open" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          Меню
        </button>

      </div>
    </header>
  )
}

export default Header

