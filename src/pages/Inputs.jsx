import Dropdown from '../componenets/Dropdown';
import TransactionInputs from '../componenets/TransactionInputs';
import CalculateButton from '../componenets/CalculateButton';
import { UserProvider } from '../context/UserContext';

export default function Inputs() {
    return (
        <div>
            <UserProvider>
                <Dropdown/>
                <TransactionInputs />
                <CalculateButton />
            </UserProvider>
        </div>
    )
}