import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner'
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import imageApi from "../../services/image-api"

class ImageFinder extends Component {
    state = {
        request: '',
        images: [],
        page: 1,
        showModal: false,
        modalImg: '',
        error: null,
        status: 'idle',
    }

    componentDidUpdate(_, prevState) {
        if (prevState.request !== this.state.request || prevState.page !== this.state.page) {
            this.setState({ status: 'pending'})
            
            imageApi.fetchImage(this.state.request, this.state.page)
                .then(image => this.setState(state => ({ images: [...state.images, ...image.hits], status: 'resolved' })))
                .catch(error => this.setState({error, status: 'rejected'}))
        }        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const request = form.elements.serch.value;

        if (request.trim() === '') {
            return toast.error('Write something!');
        }
        this.setState(({
            request,
            page: 1,
            
        }));
        form.reset();
    }

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1}))
    }

    getImageUrl = e => {
        this.setState(({
            modalImg: e.currentTarget.name,
            showModal: true,
        }));
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({showModal: !showModal}))
    }

    render() {
        // if (this.state.status === 'idle') {
        //     return <Searchbar onSubmitFom={this.handleSubmit} />
        // }

        // if (this.state.status === 'pending') {
        //     return <div>
        //         <Searchbar onSubmitFom={this.handleSubmit} />
        //         <Bars height="100" width="100" color='skyblue' ariaLabel='loading' /></div>
        // }

        // if (this.state.status === 'rejected') {
        //     return <div>
        //         <Searchbar onSubmitFom={this.handleSubmit} />
        //         <h1>{this.state.error.message}</h1></div>
            
        // }

        // if (this.state.status === 'resolved') {
        //     return <div>
        //         <Searchbar onSubmitFom={this.handleSubmit} />
        //         <ImageGallery onImageClick={this.getImageUrl} serchImages={this.state.images} />
        //         <Button onClick={this.loadMore} />
        //         <Modal onClose={this.toggleModal} imageUrl={this.state.modalImg} /></div>
        // }

        return <div>
                <Searchbar onSubmitFom={this.handleSubmit} />
                {this.state.status === 'pending' && <Bars height="100" width="100" color='skyblue' ariaLabel='loading'/>}
                {this.state.status === 'rejected'  && <h1>{this.state.error.message}</h1>}
                <ImageGallery onImageClick={this.getImageUrl} serchImages={this.state.images} />
                {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
                {this.state.showModal && <Modal onClose={this.toggleModal} imageUrl={this.state.modalImg} />}</div>
    }
}

export default ImageFinder;