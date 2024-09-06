import SendQuestion from "./SendQuestion";

const Questions = () => {
  return (
    <div className="questionsContainer">
      <div className="questions">
        <div className="questionsTitle">Остались <br/> вопросы?</div>
        <div className="questionsText">
          Оставьте заявку, мы свяжемся с вами в течении нескольких минут и
          обсудим вашу проблему
        </div>
      </div>
      <SendQuestion />
    </div>
  );
};

export default Questions;
