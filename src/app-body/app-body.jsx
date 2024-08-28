import './app-body.css';
import ContentTabulation from './content tabulation/content-tabulation';
import WordSetItems from './word-set-items/word-set-items'

const AppBody = ({data}) => {

    const elements = data.map(item => {
        return (
            <WordSetItems {...item} />
        )
    })

    return (
        <div className="app-body">
            <ContentTabulation />
            {elements}
            {/* <WordSetItems word="word_1" translation="translation_1" />
            <WordSetItems word="word_2" translation="translation_2" /> */}
        </div>
    );
}

export default AppBody;