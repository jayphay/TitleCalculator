import Dropdown from '../components/Dropdown';
import TransactionInputs from '../components/TransactionInputs';
import CalculateButton from '../components/CalculateButton';
import Name from '../components/Name';
import { UserProvider } from '../context/UserContext';

export default function Inputs() {
    return (
        <div>
            <UserProvider>
                <Name />
                <Dropdown/>
                <TransactionInputs />
                <CalculateButton />
            </UserProvider>
        </div>
    )
}