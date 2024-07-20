import './app-info.css';
import SearchPanel from "./search-panel/search-panel";

const AppInfo = () => {
    return (
        <div className="app-info">
            <h2>My dictionary</h2>
            <p>Amount of words: </p>
            <SearchPanel />
        </div>
    );
}

export default AppInfo;