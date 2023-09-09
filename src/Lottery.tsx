import React, { Component } from 'react';
import type { LottoProps, LottoState } from './interfaces';
import { LotteryBall } from './LotteryBall';

class Lottery extends Component<LottoProps, LottoState> {
  constructor(props: LottoProps) {
    super(props);
  }
  state: LottoState = {
    nums: Array.from({ length: this.props.numBall }, () =>
      Math.floor(Math.random() * this.props.maxNum + 1)
    )
  };

  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  };

  // Alt way to generate nums
  getBall() {
    let arr = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      arr.push(i);
    }
    return arr;
  }

  // Generate new lotto #'s
  getRand(prevState: LottoState) {
    return {
      nums: prevState.nums.map(() =>
        Math.floor(Math.random() * this.props.maxNum + 1)
      )
    };
  }

  generateNum(): void {
    this.setState(this.getRand);
  }

  render(): React.ReactNode {
    console.log(
      this.getBall().map(() => Math.floor(Math.random() * this.props.maxNum)),
      'nums'
    );
    return (
      <div className="flex h-[300px] w-[500px] flex-col items-center justify-center rounded-md border-4 border-black bg-red-600">
        <h1 className="mb-4 text-2xl font-bold uppercase text-white">
          {this.props.title}
        </h1>
        <main className="mb-5 flex justify-around">
          {this.state.nums.map((n: number, idx: number) => (
            <LotteryBall key={idx} num={n} />
          ))}
        </main>
        <button
          onClick={this.generateNum.bind(this)}
          className="h-[30px] w-[80px] rounded-lg bg-blue-700 text-sm text-white hover:bg-amber-400 hover:duration-700 hover:ease-in-out"
        >
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
