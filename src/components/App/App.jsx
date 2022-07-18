import ImageFinder from "../ImageFinder"
import { ToastContainer } from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const App = () => {
  return (
    <div>
      <ImageFinder />
      <ToastContainer autoClose={3000}/>
    </div>
  );
};
