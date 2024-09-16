import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./index.css";

const App = () => {
  const [feedbackData, setFeedbackData] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("savedFeedbackData")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    window.localStorage.setItem(
      "savedFeedbackData",
      JSON.stringify(feedbackData)
    );
  }, [feedbackData]);

  const updateFeedback = (variant) => {
    setFeedbackData((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  };

  const resetFeedback = () => {
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const positiveFeedback = totalFeedback
    ? Math.round((feedbackData.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackData={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
