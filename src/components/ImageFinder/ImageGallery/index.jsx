import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ serchImages, onImageClick }) => { 
    return (
        <ImageGalleryList>
            {serchImages.map(serchImage => <ImageGalleryItem key={serchImage.id} imgName={serchImage.largeImageURL} imgSrc={serchImage.webformatURL} imgAlt={serchImage.tags} onImageClick={onImageClick} />)}
        </ImageGalleryList> 
        
    )
};

ImageGallery.propTypes = {
    serchImages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;