function fetchImage(request, page) {
    return  fetch(`https://pixabay.com/api/?key=27640726-9b55f8bbb95505cb3dfdadc58&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
        .then(res => {
            if (res.ok) {
                    return res.json()
            }
            return Promise.reject(new Error('No image with this name!'));    
        })
};

const api = { fetchImage, };

export default api;