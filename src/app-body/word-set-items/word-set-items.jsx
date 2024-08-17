import './word-set-items.css';

const WordSetItems = () => {
    return (
        <li className='word-set-items list-group-item d-flex justify-content-between'>
            <span className='list-group-item-label'>word 1</span>
            <span className=''>translation 1</span>
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