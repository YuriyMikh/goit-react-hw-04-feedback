import PropTypes from 'prop-types';
import { StyledLi, StyledP, StyledUl } from './Statistics.styled';

export const Statistics = ({ grades, total, positivePercentage }) => {
  return (
    <>
      <StyledUl>
        {Object.entries(grades).map(([key, value]) => (
          <StyledLi key={crypto.randomUUID()}>
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
  grades: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
