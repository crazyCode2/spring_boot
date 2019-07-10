import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Grid } from 'antd-mobile';
import Case_01 from 'Images/cases/case_08.jpg';
import './index.less';

const data1 = Array.from(new Array(9)).map(() => ({
  icon: Case_01,
}));

interface IProps extends RouteComponentProps<any> {
  //
}

interface IState {
  //
}

class CaseList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <div className="case_content">
      <div className="sub-title">产品列表</div>
      <Grid data={data1}
        columnNum={3}
        renderItem={(dataItem: any) => (
          <div style={{ padding: '12.5px' }} onClick={() => this.props.history.push('/homePage/home/detail')}>
            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
              <span>案例1</span>
            </div>
          </div>
        )}
      />
    </div>
  }
}

export default withRouter(CaseList);