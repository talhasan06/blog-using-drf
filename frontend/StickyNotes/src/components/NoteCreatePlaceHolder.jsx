import { Link } from 'react-router-dom'
import PlusSvg from '../assets/plus.svg'

const NoteCreatePlaceHolder = () => {
  return (
    <div className='note-create-placeholder'>
    <Link to={`/note/create/`}>
        <div className="note-listitem">
            <img src={PlusSvg} alt="" />
        </div>
    </Link>
    </div>
  )
}

export default NoteCreatePlaceHolder