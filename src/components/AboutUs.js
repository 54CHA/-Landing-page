const AboutUs = () => {
  return (
    <div>
      <div>
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
      <div>
        <img src="/Building1.svg" alt="Building 1" />
        <img src="/Building2.svg" alt="Building 2" />
        <div className="smallBlocks">
          <div>{">"}500 обследовано зданий и сооружений</div>
          <div>{">"}600 квартир прошли проверку на качество ремонта</div>
        </div>
        <div>{">"}2500 квартирам мы оказали помощь при затоплении</div>
      </div>
    </div>
  );
};

export default AboutUs;
