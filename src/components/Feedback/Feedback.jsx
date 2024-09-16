import s from "./Feedback.module.css";

const Feedback = ({ feedbackData, totalFeedback, positiveFeedback }) => (
  <div className={s.wrap}>
    <ul>
      <li className={s.item}>Good: {feedbackData.good}</li>
      <li className={s.item}>Neutral: {feedbackData.neutral}</li>
      <li className={s.item}>Bad: {feedbackData.bad}</li>
      <li className={s.item}>Total: {totalFeedback}</li>
      <li className={s.item}>Positive:{positiveFeedback}%</li>
    </ul>
  </div>
);

export default Feedback;
