import { useState } from "react"

function Contacts() {
  const [copied, setCopied] = useState(false)

  const email = "summerl0v3@mail.ru"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section className="section contacts" id="contacts">

      <div className="section__head">

        <div className="section__number">
          08
        </div>

        <h2 className="section__title">
          Контакты
        </h2>

      </div>

      <div className="contacts__content">

        <h2 className="contacts__title">
          Есть проект?
          <br />
          Давайте обсудим.
        </h2>

        <div className="contacts__links">

          <a
            href="https://t.me/perfectage"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>

          <a
            href="https://vk.com/vampyrical"
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            VK
          </a>

          <a
              href={`mailto:${email}`}
              className={`contacts__link ${
                copied ? "contacts__link--copied" : ""
              }`}
              onClick={(event) => {
                event.preventDefault()
                copyEmail()
              }}
            >
              {copied ? "Скопировано ✓" : "Email"}
            </a>


        </div>

      </div>

    </section>
  )
}

export default Contacts
