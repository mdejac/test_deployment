import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const GameBar = ({gameNumber}) => {

    const [state, setState] = useState(Number(gameNumber)); 

    return (
        <div className='text-center'>
            {state > 1 && <Link className='mx-2' onClick={e => setState(state-1)}>&lt;</Link>}
            <Link className='mx-2' to={`/status/game/${state}`}>Game {state}</Link> |
            <Link className='mx-2' to={`/status/game/${state+1}`}>Game {state+1}</Link> |
            <Link className='mx-2' to={`/status/game/${state+2}`}>Game {state+2}</Link>
            <Link className='mx-2' onClick={e =>setState(state+1)}>&gt;</Link>
        </div>
  )
}

export default GameBar