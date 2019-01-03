import React from 'react';
import { connect } from 'dva';
import { Table, Icon, Switch, Radio, Form, Row, Col, Pagination, Popconfirm, message, Modal, Upload, Progress  } from 'antd';
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
      totalPage: 0,
      show: false,
      IdClick: 0,
      List: [],
      ModalImage: false,
      progress: 0,
      isUploading: false,
      previewVisible: false,
      previewImage: "",
      fileList: [
        /*{
          uid: "-1",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }*/
      ]
    };
    this.Delete = this.Delete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.uploadImageToFirebase = this.uploadImageToFirebase.bind(this);
    this.loadList = this.loadList.bind(this);
  }
  /* ant load image */
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  ShowModalImage(bool, id){

    this.setState({
      ModalImage: bool,
      IdClick: id,
      show: false
    });
    if(bool){
      axios.get(`http://localhost:8080/api/clothes/image/`+id)
        .then(res => {
          console.log(res.data);
          var rs = []
          res.data.map((item)=>{
            rs.push({uid: item["Id"], url: item["Link"]})
          })
          this.setState({fileList: rs})
        });
    }
    else{
      this.state.fileList = [];
    }
  }

  uploadImageToFirebase = file => {
    this.setState({show: true, progress: 0})
    var that = this;
    console.log(file.name);
    console.log("asdasd");

    // Create the file metadata
    var metadata = {
      contentType: "image/*"
    };
    var storageRef = firebase.storage().ref();
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef
      .child("images/" + file.name)
      .put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        that.setState({progress: progress})
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function(error) {
        console.log(error);
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
          console.log(that.state.IdClick);
          var data = {
            link: downloadURL,
            clothesId: that.state.IdClick
          }
          const api = "http://localhost:8080/api/clothes/uploadImage";
          axios.post( api,JSON.stringify(data)).then(function(){
            that.setState({show: false})
            message.success('Tải lên thành công');
          })
            .catch(function(){
              message.error("Đã có lỗi");
            });
        });
      }
    );
  };
  /*------------------------------ */

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

  removeImage(id){
    var that = this;
    console.log(this.state.List);
    axios.delete("http://localhost:8080/api/clothes/image/delete/"+id)
      .then(function(response) {
        message.success('Xóa thành công');
      })
      .catch(function(error) {
        console.log(error)
        message.success('Đã có lỗi');
      })

  }
  loadList(page){
    var that = this;
    axios.get(`http://localhost:8080/api/clothesList/`+(page-1))
      .then(res => {
        this.setState({List: res.data});
        console.log(this.state.List);
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
    axios.get(`http://localhost:8080/api/clothesList/0`)
      .then(res => {
        this.setState({List: res.data} );
        console.log(res.data);
      })
    axios.get(`http://localhost:8080/api/clothes/countPage`)
      .then(res => {
        this.setState({totalPage: res.data} );
        console.log(res.data);
      })
  }
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
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
          <Pagination style={style} defaultCurrent={1} total={this.state.totalPage} onChange={this.loadList}/>
          <Modal
            title="Image"
            centered
            visible={this.state.ModalImage}
            onOk={() => this.ShowModalImage(true)}
            onCancel={() => this.ShowModalImage(false)}
          >
            <div className={this.state.show ? "" : styles['hidden']}>
              <Progress percent={this.state.progress}/>
            </div>
            <div className="clearfix">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                data={this.uploadImageToFirebase}

              >
                {uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleCancel}
              >
                <img alt="example" style={{ width: "100%" }} src={previewImage} />

              </Modal>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

AntdTable.propTypes = {};

export default connect(({ table }) => ({ table }))(AntdTable);
