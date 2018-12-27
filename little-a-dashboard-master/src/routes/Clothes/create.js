import React from 'react'
import { connect } from 'dva'
import classnames from 'classnames'
import { Row, Col, Card, Icon, Button, Input, Form, Select, AutoComplete, Tooltip, Cascader, message, InputNumber, Radio } from 'antd'
import styles from './profile.less'
import ReactQuill from 'react-quill';
import axios from "axios";
const imgAvatar = require('../../assets/img/marc.jpg')

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}]
const PriceStyle = {
  width: "100%"
};
class Profile extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      category: [],
      name: "",
      categoryId: 0,
      gender : 0,
      price: 0,
      amount: 0,
      image: [],
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    console.log(e);

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const url = "http://localhost:8080/api/clothes/create";
        axios.post( url,JSON.stringify(values) ).then(function(){
          message.success("Thêm thành công");
        })
          .catch(function(){
            message.error("Đã có lỗi");
          });
      }
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
/*  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }*/
 /* checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }*/
/*
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
*/
  componentDidMount() {
    axios.get(`http://localhost:8080/api/category`)
      .then(res => {
        this.setState({category: res.data} );
        console.log(res.data);
      })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    var categoryList = this.state.category.map((item, index)=>{
      return (
        <Option value={item['Id']}>{item["Name"]}</Option>
      )
    });
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 60 }}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    )

  /*  const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))*/
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }],               // custom button values
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ script: 'sub'}, { script: 'super' }],      // superscript/subscript
        [{ indent: '-1'}, { indent: '+1' }],          // outdent/indent
        [{ direction: 'rtl' }],                         // text direction

        [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],          // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean']                                         // remove formatting button
      ],
    };
    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ];
    return (
      <div>
        <Row className={styles.showcase}>
          <Col xs={24} sm={24} md={12} lg={15} xl={15}>
            <Card
              bordered={false}
              noHovering
              title={<div className={classnames(styles['card-header'], { [styles.pink]: true})}>
                <h4><Icon type='user' /></h4>
              </div>}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label='Name'
                >
                  {getFieldDecorator('Name', {
                    rules: [{
                      required: true, message: 'field required not empty'
                    }]
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Category'
                >
                  {getFieldDecorator('CategoryId', {
                    rules: [{
                      required: true, message: 'field required not empty'
                    }]
                  })(
                    <Select
                      showSearch
                    >
                      {categoryList}
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Gender'
                >
                  {getFieldDecorator('Gender', {
                    rules: [{
                      required: true, message: 'Please choose'
                    }]
                  })(
                    <RadioGroup value={1}>
                      <Radio value="Nam">Nam</Radio>
                      <Radio value="Nữ">Nữ</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Price'
                >
                  {getFieldDecorator('Price', {
                    rules: [{
                      required: true, message: 'field required not empty'
                    }]
                  })(
                    <InputNumber style={PriceStyle}/>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label='Amount'
                >
                  {getFieldDecorator('Amount', {
                    rules: [{
                      required: true, message: 'field required not empty'
                    }]
                  })(
                    <InputNumber style={PriceStyle} min={0} max={100} />
                  )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                  <Button type='primary' htmlType='submit'>Create</Button>
                  {' '}
                  <Button type='primary' style={{ marginLeft: 8 }} onClick={this.handleReset}>
                    Cancel
                  </Button>
                </FormItem>
              </Form>

            </Card>
          </Col>
          <Col xs={24} sm={24} md={1} lg={1} xl={1} style={{ marginTop: 60 }} />
          <Col xs={24} sm={24} md={11} lg={8} xl={8}>
            <Card
              bordered={false}
              noHovering
              title={<div className={styles['card-avatar']}>
                <a><img className={styles.img} src={imgAvatar} /></a>
              </div>}>
              <div className={styles['card-content']}>
                <h6>CEO / Co-Founder</h6>
                <h4>Alec Thompson</h4>
                <p>
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <a>
                  <Button type='primary'>FOLLOW</Button>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const ProfileForm = Form.create()(Profile)

export default ProfileForm
