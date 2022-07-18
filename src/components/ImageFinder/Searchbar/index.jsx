// import PropTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

const Searchbar = ({ onSubmitFom }) => { 
    return (
        <SearchbarHeader>
            <SearchForm onSubmit={onSubmitFom}>
                <SearchFormButton type="submit" className="button">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    name="serch"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
            
        </SearchbarHeader>   
    )
};

// Searchbar.propTypes = {
    
// };

export default Searchbar;