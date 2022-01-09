import Picto from '../Picto/Picto'
import './index.scss'

/**
 * Create and display horizontal Menu
 * @module MenuHorizontal
 * @category 3 - Navigation
 * @component
 * @example
 * return (
 *   <MenuHorizontal/>
 * )
*/
function MenuHorizontal() {
    return (
        <ul className='MenuHorizontal'>
            <li>
                <Picto type='logo' />
            </li>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
        </ul>
    )
}
export default MenuHorizontal