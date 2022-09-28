import img from './asset/logo-sm.svg'
import angle from './asset/right-angle.svg'
import "./nav.css"

export default function Nav() {
    return (
        <nav className='nav'>
            <div className='img'>
                <img className="img-sm" src={img} alt="logo"/>
            </div>
            <div>
                <p>Go to Classroom</p>
                <img src={angle} alt="right-angle" />
            </div>
            
        </nav>
    )
}
