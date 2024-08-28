import './word-set-items.css';

const WordSetItems = ({word, translation, increase}) => {

    let classNames ='word-set-items list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }

    return (
        <li className={classNames}>
            <span className='list-group-item-label'>{word}</span>
            <span className=''>{translation}</span>
            <div classname='d-flex justify-content-center align-items-center'>
                <button type='button'
                        className='btn-cookie btn-sm'>
                            <i className='fas fa-cookie'></i>
                </button>
                <button type='button'
                        className='btn-cookie btn-sm'>
                            <i className='fas fa-trash'></i>
                </button>
            </div>
        </li>
    )
}

export default WordSetItems;