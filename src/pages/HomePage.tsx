import {useStores} from "../context/StoreComponent";
import {observer} from "mobx-react-lite";

const CountViewComponent = observer(() => {
    const {calcStore} = useStores()
    return <h1>{calcStore.count}</h1>
});

const HomePage = () => {
    const {calcStore} = useStores()
    return (<>
        Home page

        <div className="App bg-red-600">
            <button type="button" className={"bg-orange-300 py-2 px-4 rounded hover:bg-teal-100"}
                    onClick={() => {
                        calcStore.increment()
                    }}>
                +
            </button>
            <CountViewComponent/>
            <button type="button" className={"bg-orange-300 py-2 px-4 rounded hover:bg-teal-100"}
                    onClick={() => {
                        calcStore.decrement()
                    }}>
                -
            </button>
        </div>
    </>)
}
export default HomePage