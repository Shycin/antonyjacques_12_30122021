import Picto from '../Picto/Picto'
import './index.scss'

/**
 * Create and display vertical Menu
 * @module MenuVertical
 * @category 2 - Navigation
 * @example
 * return (
 *   <MenuVertical/>
 * )
*/
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