import React, { Component } from 'react'
import { LottoBallProps } from './interfaces'

class LotteryBall extends Component<LottoBallProps> {
    constructor(props: LottoBallProps) {
        super(props)
    }
    render() {
        return (
            <div className=" flex h-[30px] w-[30px] flex-col items-center rounded-full bg-orange-600">
                <p className="text-center text-white">{this.props.num}</p>
            </div>
        )
    }
}

export { LotteryBall }
