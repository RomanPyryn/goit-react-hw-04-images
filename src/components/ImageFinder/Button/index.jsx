import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
    return (
        <ButtonLoadMore onClick={onClick}>Load more</ButtonLoadMore>
    )
};

Button.protoTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;