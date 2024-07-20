import AppBody from '../app-body/app-body';
import AppInfo from '../app-info/app-info';
import './app.css';

function App() {
    return (
        <div className="app-main">
            <AppInfo />
            <AppBody />
        </div>
    );
}

export default App;