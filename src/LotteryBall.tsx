import React, { Component } from 'react';
import { LottoBallProps } from './Types';

class LotteryBall extends Component<LottoBallProps> {
  constructor(props: LottoBallProps) {
    super(props);
  }
  render() {
    return (
      <div className="bg-orange-600 flex flex-col items-center w-[30px] h-[30px] rounded-full">
        <p className="text-white text-center">{this.props.num}</p>
      </div>
    );
  }
}

export { LotteryBall };
