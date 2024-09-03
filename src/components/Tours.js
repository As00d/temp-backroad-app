import Title from "./Title";
import { toursData } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title initial={"featured"} last={"tours"} />
      <div className="section-center featured-center">
        {toursData.map((data) => {
          const {
            img,
            tourDate,
            tourTitle,
            tourPara,
            country,
            day,
            price,
            id,
          } = data;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{tourDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tourTitle}</h4>
                </div>
                <p>{tourPara}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{day}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
