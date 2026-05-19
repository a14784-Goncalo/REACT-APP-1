import viteLogo from './assets/vite.svg'

function Header() {
    return (
        <div>
            <div>
                <img src={viteLogo} className="vite" alt="Vite logo" align="left" />
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <a href='/home'>Home</a>
            </div>
            <div style={{ textAlign: 'right', width: '100%' }}>
                <a href='/contacto'>Contacto</a>
            </div>
        </div>
    )
}

export default Header