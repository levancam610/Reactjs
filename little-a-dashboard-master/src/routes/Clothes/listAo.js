import React from 'react';
import { connect } from 'dva';
import { Table, Icon, Switch, Radio, Form, Row, Col } from 'antd';
import styles from './table.less';

const FormItem = Form.Item;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
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
    pagination: true,
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
        </div>
      </div>
    );
  }
}

AntdTable.propTypes = {};

export default connect(({ table }) => ({ table }))(AntdTable);
