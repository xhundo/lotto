import React, { Component } from 'react'
import Lottery from './Lottery'

class App extends Component {
    render() {
        return (
            <div className="flex h-screen flex-col items-center justify-center">
                <Lottery numBall={6} maxNum={40} />
            </div>
        )
    }
}

export default App
