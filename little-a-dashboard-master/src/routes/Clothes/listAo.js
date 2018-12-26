import React from 'react';
import { connect } from 'dva';
import {Table, Icon, Switch, Radio, Form, Row, Col, Pagination} from 'antd';
import styles from './table.less';

const FormItem = Form.Item;
const style ={
  margin:"20px",
  "text-align":"right"
};
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 250,
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
}, {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
},{
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
},{
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
},{
  title: 'Action',
  key: 'action',
  width: 200,
  render: (text, record) => (
    <span>
      <a href="#">Edit</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Danh sách áo';

class AntdTable extends React.Component {

  state = {
    bordered: false,
    loading: false,
    pagination: false,
    size: 'default',
    title,
    scroll: undefined,

  }
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({ type: 'table/query' });
  }
  render() {
    const state = this.state;
    return (
      <div>
        <div className={styles['showcase-container']}>
          <Table {...this.state} columns={columns} dataSource={data} />
          <Pagination style={style} defaultCurrent={1} total={50} />
        </div>
      </div>
    );
  }
}

AntdTable.propTypes = {};

export default connect(({ table }) => ({ table }))(AntdTable);
