import AppBody from '../app-body/app-body';
import AppInfo from '../app-info/app-info';
import './app.css';

function App() {

    const data = [
        {word: 'word-3', translation: 'translation-3', increase: true},
        {word: 'word-4', translation: 'translation-4', increase: false},
        {word: 'word-5', translation: 'translation-5', increase: false},
        {word: 'word-6', translation: 'translation-6', increase: true}
    ];

    return (
        <div className="app-main">
            <AppInfo />
            <AppBody data={data}/>
        </div>
    );
}

export default App;