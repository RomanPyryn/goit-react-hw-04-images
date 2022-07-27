import PropTypes from 'prop-types';
import { ImageGalleryItemBox, ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imgName, imgSrc, imgAlt,  onImageClick }) => {
    return (
        <ImageGalleryItemBox>
            <ImageGalleryItemLi>
            <ImageGalleryItemImage onClick={onImageClick} name={imgName} src={imgSrc} alt={imgAlt} />
            </ImageGalleryItemLi>
        </ImageGalleryItemBox>
    )
};

ImageGalleryItem.protoTypes = {
    imgName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;