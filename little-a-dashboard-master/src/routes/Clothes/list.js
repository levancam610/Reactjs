import React from 'react';
import { connect } from 'dva';
import { Table, Icon, Switch, Radio, Form, Row, Col, Pagination, Popconfirm, message, Modal } from 'antd';
import styles from './table.less';
import axios from 'axios';
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyD634xUquHDI7VftKFS_o8gKH8pvsJ3FLI",
  authDomain: "shopcode-cd861.firebaseapp.com",
  databaseURL: "https://shopcode-cd861.firebaseio.com",
  projectId: "shopcode-cd861",
  storageBucket: "shopcode-cd861.appspot.com",
  messagingSenderId: "387176100957"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Danh sách quần';
const style ={
  margin:"20px",
  "textAlign":"right"
};

class AntdTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      List: [],
      ModalImage: false,
      ImageUrl: [],
    };
    this.Delete = this.Delete.bind(this);

  }
  ShowModalImage(bool){
    this.setState({ModalImage: bool});
  }
  Delete(id){
    var that = this;
    console.log(this.state.List);
    axios.delete("http://localhost:8080/api/clothes/delete/"+id)
      .then(function(response) {
        message.success('Xóa thành công');
        that.setState((prevState) => ({
          List: prevState.List.filter((item) => item["Id"] !== id)
        }));
      })
      .catch(function(error) {
        console.log(error)
        message.success('Đã có lỗi');
      })

  }
   cancel(e) {
    console.log(e);
    message.error('Đã có lỗi');
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/clothes`)
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
            <input type="file"/>
          </Modal>
        </div>
      </div>
    );
  }
}

AntdTable.propTypes = {};

export default connect(({ table }) => ({ table }))(AntdTable);
