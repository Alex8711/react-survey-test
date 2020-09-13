import React, { useState } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";

const SurveyPage = () => {
  let json = {
    questions: [
      {
        type: "text",
        name: "name",
        title: "Your name:",
      },
      {
        type: "text",
        name: "email",
        title: "Your e-mail",
      },
      {
        type: "checkbox",
        name: "car",
        title: "What car are you driving?",
        isRequired: true,
        colCount: 4,
        choices: [
          "None",
          "Ford",
          "Vauxhall",
          "Volkswagen",
          "Nissan",
          "Audi",
          "Mercedes-Benz",
          "BMW",
          "Peugeot",
          "Toyota",
          "Citroen",
        ],
      },
    ],
  };

  const [isCompleted, setIsCompleted] = useState(false);
  const onCompleteComponent = () => {
    setIsCompleted(true);
  };
  const surveyRender = !isCompleted ? (
    <Survey.Survey
      json={json}
      showCompletedPage={false}
      onComplete={onCompleteComponent}
    />
  ) : null;
  const onSurveyCompletion = isCompleted ? (
    <div>Thanks for completing the survey </div>
  ) : null;
  return (
    <div>
      <h3>This is Survey Page</h3>
      {surveyRender}
      {onSurveyCompletion}
    </div>
  );
};

export default SurveyPage;
