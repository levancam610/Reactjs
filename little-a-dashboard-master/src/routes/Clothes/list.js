import React from 'react';
import { connect } from 'dva';
import { Table, Icon, Switch, Radio, Form, Row, Col, Pagination, Popconfirm, message, Modal } from 'antd';
import styles from './table.less';
import axios from 'axios';

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Danh sách quần';
const style ={
  margin:"20px",
  "text-align":"right"
};

class AntdTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      List: [],
      ModalImage: false
    };
    this.Delete = this.Delete.bind(this);

  }
  ShowModalImage(bool){
    this.setState({ModalImage: bool});
  }
  Delete(id){
    console.log(id);
    message.success('Deleted  ');
  }
   cancel(e) {
    console.log(e);
    message.error('Cancelled');
  }
  componentDidMount() {
    axios.get(`http://localhost:8000/api/clothes`)
      .then(res => {
        this.setState({List: res.data} );
        console.log(res.data);
      })
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'Name',
      key: 'name',
      width: 250,
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Category',
      dataIndex: 'CategoryId',
      key: 'category',
      render: rs => {
        if(rs==1){
          return "Quần"
        }
        else{
          return "Áo"
        }
      }
    }, {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'gender',
    }, {
      title: 'Amount',
      dataIndex: 'Amount',
      key: 'amount',
    },{
      title: 'Price',
      dataIndex: 'Price',
      key: 'price',
    },{
      title: 'Type',
      dataIndex: 'Type',
      key: 'type',
    },{
      title: 'Action',
      dataIndex: 'Id',
      key: 'action',
      width: 200,
      render: id => (
        <span>
      <a id={id} >Edit</a>
      <span className="ant-divider" />
          <Popconfirm title="Are you sure delete?"  onConfirm={() => {this.Delete(id)}} onCancel={this.cancel} okText="Yes" cancelText="No">
        <a id={id}>Delete</a>
      </Popconfirm>
      <span className="ant-divider" />
      <a id={id} className="ant-dropdown-link" onClick={() => this.ShowModalImage(true)}>
        Hình
      </a>
    </span>
      ),
    }];

    return (
      <div>
        <div className= { styles['showcase-container']} >
          <Table  pagination={false} columns={columns} dataSource={this.state.List} />
          <Pagination style={style} defaultCurrent={1} total={50} />
          <Modal
            title="Image"
            centered
            visible={this.state.ModalImage}
            onOk={() => this.ShowModalImage(true)}
            onCancel={() => this.ShowModalImage(false)}
            okText = "Ok"
            cancelText = "Cancel"
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </div>
      </div>
    );
  }
}

AntdTable.propTypes = {};

export default connect(({ table }) => ({ table }))(AntdTable);
