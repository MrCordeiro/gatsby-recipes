import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ErrorPageNotFound = () => {
  return (
    <>
      <Layout>
        <Seo title="Erro" />
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h3>Page not found</h3>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ErrorPageNotFound;
