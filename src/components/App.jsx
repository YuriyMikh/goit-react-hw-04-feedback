import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { AppContainer } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = button => {
    switch (button) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']} //для кнопок передаем массив названий кнопок
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            grades={{ good, neutral, bad }} //короткая форма записи объекта, когда имя ключа совпадает со значением ключа
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </AppContainer>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({ [key]: prevState[key] + 1 }));
//   };

// countTotalFeedback = () => {
//   return Object.values(this.state).reduce((acc, elem) => acc + elem, 0);
// };

// countPositiveFeedbackPercentage = () => {
//   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// };

//   render() {
// return (
//   <AppContainer>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={Object.keys(this.state)}
//         onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </Section>

//     <Section title="Statistics">
//       {this.countTotalFeedback() === 0 ? (
//         <Notification message="There is no feedback" />
//       ) : (
//         <Statistics
//           grades={Object.entries(this.state)}
//           total={this.countTotalFeedback}
//           positivePercentage={this.countPositiveFeedbackPercentage}
//         />
//       )}
//     </Section>
//   </AppContainer>
// );
//   }
// }
