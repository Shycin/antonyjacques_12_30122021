import Picto from '../Picto/Picto'
import './MenuHorizontal.scss'

function MenuHorizontal() {
    return (
        <ul>
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
