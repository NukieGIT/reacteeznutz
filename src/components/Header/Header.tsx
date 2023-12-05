import PathConstants from '../../views/PathConstants'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header>
                <div className="left">
                    <h1>REACTitties</h1>
                </div>
                <div className="right">
                    <NavLink to={PathConstants.HOME}>home</NavLink>
                    <NavLink to={PathConstants.KCLICKER}>kalqlus clicker</NavLink>
                </div>
            </header>
        </>
    )
}

export default Header