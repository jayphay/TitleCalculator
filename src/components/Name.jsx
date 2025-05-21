import { useStore } from "../store/store"

export default function Name() {
    const name = useStore(state => state.name);
    const setName = useStore(state => state.setName);

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter address or name of quote"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    )
}