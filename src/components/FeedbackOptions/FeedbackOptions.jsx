import PropTypes from 'prop-types';
import { ButtonContainer, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(item => {
        return (
          <StyledButton
            key={item}
            type="button"
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </StyledButton>
        );
      })}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
