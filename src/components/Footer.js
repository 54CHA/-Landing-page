const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContacts">
      <img src="/logo.svg" alt="Logo" />
        <p className="footerLocationTitle">Контакты</p>
        <p>+7 (916) 830-58-58</p>
        <p>
          <a href="mailto:ckeproekt@yandex.ru">ckeproekt@yandex.ru</a>
        </p>
      </div>
      <div className="footerLinks">
        <p className="footerLinksTitle">
          {" "}
          <a href="./">О нас</a>
          <a href="./">Порядок работ</a>
        </p>
        <p className="footerLinksTitle">
          <a href="./">Услуги</a>
          <a href="./">Почему выбирают нас</a>
        </p>
      </div>
      <div className="footerLocation">
        <p className="footerLocationTitle"><img src="/location.svg" alt="Location" className="footerLocationIcon"/>Где мы находимся?</p>
        <p>г.Москва,ул.Пресненская,<br/> д.6, ст. 2</p>
        <p>ПН-ПТ 8:00 - 20:00</p>
      </div>
    </div>
  );
};

export default Footer;
