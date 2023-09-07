import React, { Component } from 'react';
import type { LottoProps, LottoState } from './Types';
import { LotteryBall } from './LotteryBall';

class Lottery extends Component<LottoProps, LottoState> {
  constructor(props: LottoProps) {
    super(props);
  }
  state: LottoState = {
    nums: Array.from({ length: this.props.numBall }, () =>
      Math.floor(Math.random() * this.props.maxNum + 1),
    ),
  };

  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
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
        Math.floor(Math.random() * this.props.maxNum + 1),
      ),
    };
  }

  generateNum(): void {
    this.setState(this.getRand);
  }

  render(): React.ReactNode {
    console.log(
      this.getBall().map(() => Math.floor(Math.random() * this.props.maxNum)),
      'nums',
    );
    return (
      <div className="border-4 bg-red-600 flex flex-col items-center justify-center rounded-md border-black w-[500px] h-[300px]">
        <h1 className="font-bold text-2xl uppercase mb-4 text-white">
          {this.props.title}
        </h1>
        <main className="flex justify-around mb-5">
          {this.state.nums.map((n: number, idx: number) => (
            <LotteryBall key={idx} num={n} />
          ))}
        </main>
        <button
          onClick={this.generateNum.bind(this)}
          className="bg-blue-700 hover:duration-700 hover:ease-in-out hover:bg-amber-400 rounded-lg text-sm w-[80px] h-[30px] text-white"
        >
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
