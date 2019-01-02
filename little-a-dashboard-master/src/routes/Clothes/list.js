import React from 'react';
import { connect } from 'dva';
import { Table, Icon, Switch, Radio, Form, Row, Col, Pagination, Popconfirm, message, Modal } from 'antd';
import styles from './table.less';
import axios from 'axios';
import firebase from "firebase";
import FileUploader from 'react-firebase-file-uploader';
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
      IdClick: 0,
      List: [],
      ModalImage: false,
      ImageUrl: [],
      progress: 0,
      isUploading: false
    };
    this.Delete = this.Delete.bind(this);

  }
  ShowModalImage(bool, id){
    this.setState({ModalImage: bool});
    this.setState({IdClick: id})
  }
  /*----upload image to firebase------ */

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = (progress) => this.setState({ progress });
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }
  handleUploadSuccess = (filename) => {
    let link="";
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url =>
    {
      this.setState({ avatarURL: url });
      var data = {
        link: url,
        clothesId: this.state.IdClick
      }
      const api = "http://localhost:8080/api/clothes/uploadImage";
      axios.post( api,JSON.stringify(data)).then(function(){
        message.success('Tải lên thành công');
      })
        .catch(function(){
          message.error("Đã có lỗi");
        });
    });


  };
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
  getFile(e) {
    e.target.value = null;
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
      <a id={id} className="ant-dropdown-link" onClick={() => this.ShowModalImage(true, id)}>
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
            <form >
            <FileUploader
              id="myImage"
              multiple
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}

            />
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

AntdTable.propTypes = {};

export default connect(({ table }) => ({ table }))(AntdTable);
