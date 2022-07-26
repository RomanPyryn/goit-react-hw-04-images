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
        const fetchFunc = async (request, page) => {

            setStatus('pending');

            try {
                const results = await imageApi.fetchImage(request, page)
                console.log(results.hits)
                setImages([...images, ...results.hits]);
                setStatus('resolved')
            } catch (error) {
                setError(error);
                toast.error('Write something else!');
                setStatus('rejected')
            }
        };
        
        if (request !== '') {fetchFunc(request, page);}       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, request]);
    

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

    const toggleModal = () => {
        console.log('Toggle');
        setShowModal(!showModal);
    };

    const getImageUrl = e => {
        setModalImg(e.currentTarget.name);
        toggleModal();
    }

     const loadMore = () => {
         setPage(page + 1);
    }

    return (
        <div>
            <Searchbar onSubmitFom={handleSubmit} />
            {status === 'pending' && <Loader/> }
            {status === 'rejected'  && <h1>{error.message}</h1>}
            <ImageGallery onImageClick={getImageUrl} serchImages={images} />
            {images.length > 0 && <Button onClick={loadMore} />}
            {showModal && <Modal onClose={toggleModal}><img src={modalImg} alt={modalImg}/></Modal>}
        </div>
    );
};