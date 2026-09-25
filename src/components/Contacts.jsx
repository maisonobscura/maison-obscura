function Contacts() {
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

          <a href="https://t.me/perfectage" className="contacts__link" target="_blank">
            Telegram
          </a>

          <a href="https://vk.com/vampyrical" className="contacts__link" target="_blank">
            VK
          </a>

          <a
            href="mailto:summerl0v3@mail.ru"
            className="contacts__link"
          >
            Email
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contacts
