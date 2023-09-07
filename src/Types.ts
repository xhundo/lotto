import Lottery from './Lottery';
export type LottoProps = typeof Lottery.defaultProps & {
  title: string;
  numBall: number;
  maxNum: number;
};

export interface LottoBallProps {
  num: number;
}

export interface LottoState {
  nums: number[];
}
