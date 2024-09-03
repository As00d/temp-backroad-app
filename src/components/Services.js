import Title from "./Title";
import { serviceData } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title initial={"our"} last={"services"} />
      <div className="section-center services-center">
        {serviceData.map((data) => {
          return (
            <article key={data.id} className="service">
              <span className="service-icon">
                <i className={data.class}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{data.text}</h4>
                <p className="service-text">{data.paragraph}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
