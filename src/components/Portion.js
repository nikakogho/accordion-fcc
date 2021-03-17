import { useState } from 'react'

const Portion = ({ title, info }) => {
    const [showing, setShowing] = useState(false)

    const toggleShowing = () => {
        setShowing(old => !old)
    }

    return <div class='portion'>
        <div class='top'>
            <p>{title}</p>
            <button onClick={toggleShowing}>{showing ? '-' : '+'}</button>
        </div>
        {showing && <div class='info'>{info}</div>}
    </div>
}

export default Portion