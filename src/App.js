import Mainbody from "./components/Mainbody";
import { GlobalStyle } from "./components/styles/Global-Style";
import { ToastContainer} from 'react-toastify';


const App = () => {


    return (
        <>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        />

        
        <GlobalStyle/>
        <Mainbody/>
        </>
    );
};

export default App;