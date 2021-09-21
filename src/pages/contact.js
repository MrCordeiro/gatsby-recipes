import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3>Want to get in touch?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                illum nihil eveniet explicabo commodi nostrum impedit sit rem,
                maiores voluptas eos possimus officiis perferendis nam itaque
                blanditiis exercitationem quasi ad!
              </p>
              <p>
                Chuck shank tri-tip turkey andouille prosciutto tongue leberkas.
                Ground round buffalo andouille kielbasa.
              </p>
              <p>
                Prosciutto drumstick spare ribs jowl ham fatback shank shoulder
                tenderloin ball tip bresaola frankfurter pork loin beef. Ham
                andouille t-bone boudin, bacon pork loin short loin leberkas.
              </p>
            </article>
            <article>
              <form className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="btn btn-block">
                  submit
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
