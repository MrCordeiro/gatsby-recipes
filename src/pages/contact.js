import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3>Quer falar conosco?</h3>
              <p>
                Você está com dúvidas em relação a alguma receita? Tem ideias para partilhar?
              </p>
              <p>
                Então nos envie uma mensagem!
              </p>
              <p>
                Lemos todos os emails com muito carinho e atenção!
              </p>
            </article>
            <article>
              <form className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">seu nome</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">seu email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">messagem</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="btn btn-block">
                  enviar
                </button>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Contact
