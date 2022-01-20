import React from "react";

export default function Card(props) {
  const { img, title, subtitle } = props;
  return (
    <section className="cardholder">
      <h2 className="label">Editor's Pick</h2>
      <div className="card">
        <img src={img} alt="mens images" />
        <h3 className="title">{title}</h3>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </section>
  );
}
