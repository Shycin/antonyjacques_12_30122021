import Picto from '../Picto/Picto'
import './index.scss'

function MenuVertical() {
    return (
        <ul className='MenuVertical'>
            <li>
                <Picto type='lotus' />
            </li>
            <li>
                <Picto type='swim' />
            </li>
            <li>
                <Picto type='bike' />
            </li>
            <li>
                <Picto type='muscu' />
            </li>
            <li id="copyright">Copiryght, SportSee 2020</li>
        </ul>
    )
}
export default MenuVertical