import PropTypes from 'prop-types';
import { StyledLi, StyledP, StyledUl } from './Statistics.styled';

export const Statistics = ({ grades, total, positivePercentage }) => {
  return (
    <>
      <StyledUl>
        {grades.map(([key, value]) => (
          <StyledLi key={key}>
            {key}: {value}
          </StyledLi>
        ))}
      </StyledUl>
      <StyledP>Total: {total()}</StyledP>
      <StyledP>Positive feedback: {positivePercentage()}%</StyledP>
    </>
  );
};

Statistics.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
