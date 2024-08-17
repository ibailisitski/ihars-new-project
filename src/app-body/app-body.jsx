import './app-body.css';
import ContentTabulation from './content tabulation/content-tabulation';
import WordSetItems from './word-set-items/word-set-items'

const AppBody = () => {
    return (
        <div className="app-body">
            <ContentTabulation />
            <WordSetItems />
        </div>
    );
}

export default AppBody;