const RegWindow = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="BgDark" onClick={onClose}></div>
      <div className="window">
        <button className="closeButton" onClick={onClose}>
          <span className="closeIcon"></span>
        </button>
        <div className="hReg1">Получить бесплатную консультацию</div>
        <div className="hReg2">
          Заполните форму, наш специалист свяжется с вами в течении нескольких
          минут, чтобы обсудить все ваши пожелания.
        </div>
        <form action="">
          <input
            type="text"
            className="inputWindow"
            placeholder="Как вас зовут?"
          />
          <input
            type="tel"
            className="inputWindow"
            placeholder="+7 (999) 999-99-99"
          />
          <input
            type="email"
            className="inputWindow"
            placeholder="Ваша почта"
          ></input>
          <input
            type="textarea"
            className="inputWindow"
            placeholder="Ваши пожелания"
          ></input>
          <input
            type="submit"
            value="Отправить"
            className="submitWindow"
          ></input>
        </form>
      </div>
    </>
  );
};

export default RegWindow;
