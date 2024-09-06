import { useState } from 'react';
import RegWindow from "./RegWindow";

const FrontPage = () => {
  const [isRegWindowOpen, setIsRegWindowOpen] = useState(false);

  const openRegWindow = () => setIsRegWindowOpen(true);
  const closeRegWindow = () => setIsRegWindowOpen(false);

  return (
    <div className="bgImage">
      <div className="frontPage">
        <div className="title">Центр комплексной экспертизы</div>
        <div className="underTitle">
          Проведём экспертизу любого профиля: строительно-техническую,
          оценочную, экспертизу пожарной безопасности. Профессиональное
          заключение от квалифицированных специалистов.{" "}
        </div>
        <button className="consultation" onClick={openRegWindow}>
        Бесплатная консультация
        </button>
        <div className="smallUnderTitle">
          *Узнаем всё о вашей ситуации, дадим предварительную оценку экспертизы,
          ответим на все вопросы.
        </div>
      </div>
      <RegWindow isOpen={isRegWindowOpen} onClose={closeRegWindow} />
    </div>
  );
};

export default FrontPage;
