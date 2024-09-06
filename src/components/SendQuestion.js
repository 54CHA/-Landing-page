const SendQuestion = () => {
  return (
    <div className="sendQuestion">
      <form className="sendQuestionForm" action="">
        <div className="sendQuestionFormRow">
          <div className="sendQuestionFormRow1">
            <input type="text" name="firstName" placeholder="Имя" />
            <input type="tel" name="phoneNumber" placeholder="Телефон" />
          </div>
          <div className="sendQuestionFormRow2">
            <input type="text" name="lastName" placeholder="Фамилия" />
            <input type="email" name="email" placeholder="E-mail" />
          </div>
        </div>
        <textarea
          type="text"
          name="description"
          placeholder="Дополнительная информация"
        />

        <button type="submit" className="sendQuestionSubmit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default SendQuestion;
