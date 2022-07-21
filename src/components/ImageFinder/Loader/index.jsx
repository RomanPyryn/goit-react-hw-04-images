import { Bars } from 'react-loader-spinner'
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox>
            <Bars height="100" width="100" color='skyblue' ariaLabel='loading'/>
        </LoaderBox>
    )
};

export default Loader;