const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUsLeft">
        <div>Коротко о нас</div>
        <div>Более 9 лет на рынке</div>
        <div>
          В нашей организации работают дипломированные специалисты, кандидат
          технических наук, инженеры с большим стажем работы и квалифицированный
          сметчик
        </div>
        <div>
          Наработан огромный опыт, позволяющий провести экспертизу даже в самых
          сложных ситуациях
        </div>
        <div>Работаем как с юридическими, так и с физическими лицами</div>
        <div>Не накручиваем цены и не навязываем ненужные допуслуги</div>
      </div>

      <div className="aboutUsRight">
        <div className="leftHalf">
          <img src="/Building1.svg" alt="Building 1" className="leftHalfImg" />
          <div className="leftHalfSmallBlocks">
            <div className="smallBlock1">
              <div className="smallBlock1Text">{">"}500</div> обследовано зданий и сооружений
            </div>
            <div className="smallBlock1">
              <div className="smallBlock1Text">{">"}600 </div>квартир прошли проверку на качество ремонта
            </div>
          </div>
        </div>

        <div className="rigthHalf">
          <img src="/Building2.svg" alt="Building 2" />
          <div className="smallBlock2">
            <div className="smallBlock1Text">{">"}2500</div> квартирам мы оказали помощь при затоплении
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
