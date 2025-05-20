import { useNavigate } from 'react-router-dom';
import ListItems from '../componenets/ListItems';
import QuoteInfo from '../componenets/QuoteInfo.jsx';
import { UserProvider } from '../context/UserContext';
import { useStore } from "../store/store.js";


export default function LineItems() {
    const navigate = useNavigate();
    const resetHasAdded = useStore(state => state.resetHasAdded);


    const handleClick = () => {
        navigate("/");
        
        useStore.getState().resetHasAdded();
        useStore.getState().resetTotal();
    }

    return (
        <div>
            <UserProvider>
                <QuoteInfo />
                <ListItems />
                <button onClick={handleClick}>Edit</button>
            </UserProvider>
        </div>
    )
}