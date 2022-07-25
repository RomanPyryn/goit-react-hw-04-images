import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import imageApi from "../../services/image-api"

export default function ImageFinder() {
    const [request, setRequest] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');
    
    useEffect(() => {
        if (!request) {
            return;
        };

        setStatus('pending');

        if (page === 1) {
            imageApi.fetchImage(request, page)
            .then(image => {
                console.log(image.hits)
                setImages([...image.hits]);
                setStatus('resolved')
            })
            .catch(error => {
                setError(error);
                setStatus('rejected')
            })
        } else {
            imageApi.fetchImage(request, page)
            .then(image => {
                setImages([...images, ...image.hits]);
                setStatus('resolved')
            })
            .catch(error => {
                setError(error);
                setStatus('rejected')
            })
        }
    }, [images, page, request]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formRequest = e.currentTarget.elements.serch.value;

        if (formRequest.trim() === '') {
            return toast.error('Write something!');
        }

        setRequest(formRequest);
        setPage(1);
        setImages([]);

        e.currentTarget.reset();
    };

    const getImageUrl = e => {
        setModalImg(e.currentTarget.name);
        setShowModal(true);
    }

    return (
        <div>
            <Searchbar onSubmitFom={handleSubmit} />
            {status === 'pending' && <Loader/> }
            {status === 'rejected'  && <h1>{error.message}</h1>}
            <ImageGallery onImageClick={getImageUrl} serchImages={images} />
            {images.length > 0 && <Button onClick={setPage(prevPage => prevPage + 1)} />}
            {showModal && <Modal onClose={setShowModal(!showModal)} imageUrl={modalImg} />}
        </div>
    );
};