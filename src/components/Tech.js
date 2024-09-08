import { useLocation } from "react-router-dom";

const Tech = () => {
  const location = useLocation();
  const { service } = location.state || {};

  return (
    <div className="service">
      <div className="serviceTitle">
        {service ? service.title : "Техническое обследование"}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-between",
        }}
      >
        <div className="serviceText">
          {service
            ? service.description
            : "Обследование технического состояния зданий и сооружений – один из видов инженерных изысканий..."}
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
