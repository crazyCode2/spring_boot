import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { NavBar, Icon, InputItem, TextareaItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';
import './index.less';

interface IProps extends RouteComponentProps<any> {
  //
}

interface IState {
  //
}

class LeaveMessage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.goBack()}
      >留言</NavBar>
      <InputItem
        clear
        placeholder="请输入您的姓名"
      >姓名</InputItem>
      <InputItem
        clear
        placeholder="请输入您的联系方式"
      >联系方式</InputItem>
      <InputItem
        clear
        placeholder="请输入您的邮箱"
      >邮箱</InputItem>
      <TextareaItem
        title="留言"
        placeholder="请输入您的留言"
        data-seed="logId"
        rows={5}
        autoHeight
      />
      <WingBlank>
        <WhiteSpace />
        <Button type="primary" onClick={() => this.props.history.push('/homePage/leaveMessage/result')}>提交</Button>
      </WingBlank>
    </div>
  }
}

export default withRouter(LeaveMessage);