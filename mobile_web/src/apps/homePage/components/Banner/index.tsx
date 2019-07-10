import * as React from 'react';
import { Carousel } from 'antd-mobile';
import Banner_01 from 'Images/banner/banner_04.jpg';
import Banner_02 from 'Images/banner/banner_02.jpg';
import Banner_03 from 'Images/banner/banner_03.jpg';
import './index.less';

interface IProps {
  //
}
interface IState {
  data: any;
  imgHeight: number | string;
  slideIndex: number | string;
}

class BannerBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [Banner_01, Banner_02, Banner_03],
      imgHeight: 176,
      slideIndex: 0
    }
  }

  public render() {
    return <Carousel className="space-carousel"
      frameOverflow="visible"
      cellSpacing={10}
      slideWidth={0.8}
      autoplay
      infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => this.setState({ slideIndex: index })}
    >
      {this.state.data.map((val: any, index: number) => (
        <span
          key={val}
          style={{
            display: 'block',
            position: 'relative',
            top: this.state.slideIndex === index ? -10 : 0,
            height: this.state.imgHeight,
            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <img
            src={val}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </span>
      ))}
    </Carousel>
  }
}

export default BannerBar;