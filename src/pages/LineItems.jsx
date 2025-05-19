import { useNavigate } from 'react-router-dom';
import ListItems from '../componenets/ListItems';
import { UserProvider } from '../context/UserContext';
import { useStore } from "../store/store.js";


export default function LineItems() {
    const navigate = useNavigate();
    const resetHasAdded = useStore(state => state.resetHasAdded);


    const handleClick = () => {
        navigate("/");
        
        // console.log("hasAdded before reset:", useStore.getState().hasAdded);
        useStore.getState().resetHasAdded();
        useStore.getState().resetTotal();
        // console.log("hasAdded after reset:", useStore.getState().hasAdded);    
    }

    return (
        <div>
            <UserProvider>
                <ListItems />
                <button onClick={handleClick}>Edit</button>
            </UserProvider>
        </div>
    )
}