const WhyUs = () => {
  return (
    <div className="whyUs" id="whyUs">
      <div className="whyUsContainer">
        <div className="whyUsTextContainer">
          <div className="whyUsTitle">Почему выбирают нас?</div>
          <div className="whyUsText">
            Имеем все необходимые гарантии качества работ
          </div>
        </div>
        <img src="/buildingPhoto.svg" alt="WhyUs" className="whyUsImage" />
      </div>
      <div className="points">
        <div className="point1">
          Состоим в профильных СРО, предоставляющей разрешение на работы и
          страхование до 30 млн рублей
        </div>
        <div className="point2">
          Застрахованы в Британском страховом доме на 10 млн рублей
        </div>
        <div className="point3">
          Имеем сертификат ISO-9001, подтверждающий высокое качество наших работ
        </div>
        <div className="point4">
          Некачественная экспертиза, приводящая к ущербу, уголовно наказуема,
          поэтому мы обязаны работать качественно
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
