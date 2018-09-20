import { Upload, Icon, message, Button } from 'antd';
import React from 'react'
import ajaxhost from '../../ajaxhost';


const Dragger = Upload.Dragger;


const props = {
  name: 'file',
  multiple: true,
  action: '//localhost:8080/login',
  onChange(info) {
    const status = info.file.status;
    if (status !== '上传中') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} 上传成功.`);
    } else if (status === 'error') {
      message.success(`${info.file.name} 上传成功.`);
    }
  },
};


class Story extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      story:''
    }
  }

  story = () => {
    let that = this;
    fetch(ajaxhost + '/story', {
      method:'GET'
    }).then((res) => {
      if(res.ok) {
        console.log(res);
        // console.log(res.code);
        //   that.setState({
        //     story:res
        //   })

        res.json().then(function (result) {
          console.log(result);
          that.setState({
            story:result.data
          })
        })
      }
    })
  }

   render(){

    return(
     <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击或拖拽图片上传</p>
          <p className="ant-upload-hint">上传图片，给您专属祝福~</p>
        </Dragger>

        <div className='story-content'>
          <Button onClick={this.story}>生成</Button>

          <p>{this.state.story}</p>
        </div>
     </div>
    );
}}
export default Story