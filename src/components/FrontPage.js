import AboutUs from "./AboutUs";

const FrontPage = () => {
  return (
    <div className="bgImage">
      <div className="frontPage">
        <div className="title">Центр комплексной экспертизы</div>
        <div className="underTitle">
          Проведём экспертизу любого профиля: строительно-техническую,
          оценочную, экспертизу пожарной безопасности. Профессиональное
          заключение от квалифицированных специалистов.{" "}
        </div>
        <a className="consultation" href="./">
          Бесплатная консультация
        </a>
        <div className="smallUnderTitle">
          *Узнаем всё о вашей ситуации, дадим предварительную оценку экспертизы,
          ответим на все вопросы.
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default FrontPage;
