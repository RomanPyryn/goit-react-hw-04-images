import PropTypes from 'prop-types';
import { ImageGalleryItemBox, ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ serchImages, onImageClick }) => {
    return (
        <ImageGalleryItemBox>
            {serchImages.map(serchImage => (<ImageGalleryItemLi key={serchImage.id}>
                <ImageGalleryItemImage onClick={onImageClick} name={serchImage.largeImageURL} src={serchImage.webformatURL} alt={serchImage.tags} />
                </ImageGalleryItemLi>))}
        </ImageGalleryItemBox>
    )
};

ImageGalleryItem.protoTypes = {
    serchImages: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;