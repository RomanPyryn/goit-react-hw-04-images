// import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ serchImages, onImageClick }) => { 
    return (
        <ImageGalleryList>
            <ImageGalleryItem serchImages={serchImages} onImageClick={onImageClick} />
        </ImageGalleryList> 
        
    )
};

ImageGallery.propTypes = {
    
};

export default ImageGallery;