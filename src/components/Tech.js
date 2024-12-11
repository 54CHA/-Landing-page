import { useLocation } from "react-router-dom";

const Tech = () => {
  const location = useLocation();
  const { service } = location.state || {};

  return (
    <div className="service">
      <div className="serviceTitle">
        {service ? service.title : "Oops, что то пошло не так"}
      </div>
      <div className="serviceContent">
        <div className="serviceText">
          {service ? service.description : "Oops, что то пошло не так"}
        </div>
        {service && service.image && (
          <div className="serviceImageContainer">
            <img
              src={service.image}
              alt={service.title}
              className="serviceImage"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tech;
