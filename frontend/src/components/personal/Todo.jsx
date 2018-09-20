import React from 'react'
import './personalC.css'
import { Switch, Checkbox } from 'antd'

import { connect } from "react-redux";
import * as Actions from "../../action/ActionType"
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moving: false,
      // todo: [
      //   true, true, false, false,
      //   false, false,
      //   0, 0, 0, 0,
      //   0, 0, 0, 0, 0,
      //   0, 0, 0, 0, 0,
      //   0, 0, 0, 0, 0,
      //   0, 0, 0, 0, 0,
      //   0, 0, 0, 0, 0,
      // ],
      toggle:false,
      progress:this.props.progress,
      initdata: [
        {
          title: '商议结婚',
          data: [
            {
              content: '双方父母商议结婚相关事项',
              todo: false
            }, {
              content: '拍结婚登记照',
              todo: false
            }, {
              content: '办理结婚登记手续',
              todo: true
            }, {
              content:
                '双方商议结婚开支分配',
              todo: false
            }
          ]
        },
        {
          title: '婚宴场所',
          data: [
            {
              content: '选定婚礼时间',
              todo: true
            }, {
              content: '选定婚宴酒店',
              todo: false
            }
          ]
        }
        // true 已完成
      ],
      data: [
        {
          title: '商议结婚',
          data: [
            {
              content: '双方父母商议结婚相关事项',
              todo: false
            },{
              content: '拍结婚登记照',
              todo: false
            }, {
              content: '办理结婚登记手续',
              todo: true
            }, {
              content:
                '双方商议结婚开支分配',
              todo: false
            }
          ]
        },
        {
          title: '婚宴场所',
          data: [
            {
              content:'选定婚礼时间',
              todo:true
            },{
              content:'选定婚宴酒店',
              todo:false
            }
          ]
        }
        // true 已完成
      ]
    }
    this.changeTodoState = this.changeTodoState.bind(this);
    this.sortTodo = this.sortTodo.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        progress:nextProps.progress
      })
    }
  }

  changeTodoState(index,innerIndex) {
    let temp = this.state.data;
    let init = this.state.initdata;
    let progress = this.state.progress;
    temp[index].data[innerIndex].todo = !temp[index].data[innerIndex].todo;
    init[index].data[innerIndex].todo = !init[index].data[innerIndex].todo;
    if(temp[index].data[innerIndex].todo){
      progress += 16
    } else {
      progress -= 16
    }
    this.props.setprogress(progress);
    this.setState({
      data:temp,
      initdata:init,
      progress:progress
    })
    // console.log(this.state.todo)
  }

  sortTodo() {
    const {toggle} = this.state;
    if(toggle){
      this.setState({
        toggle:false,
        data:this.state.initdata
      })
    }else{
      console.log('-');
      let { data } = this.state;
      let arr = new Array();
      let arrO;
      let flag = false;
      for (let index = data.length - 1; index >= 0; index--) {
        if (data[index].title === '已完成') {
          arrO = data[index].data;
        } else {
          let ele = data[index].data;
          console.log(ele, 'el');
          for (let inner = 0; inner < ele.length; inner++) {
            console.log(ele[inner]);
            if (ele[inner].todo) {
              if (flag) {
                arrO.push(ele[inner]);
                ele.splice(inner, 1);
              } else {
                arr.push(ele[inner]);
                ele.splice(inner, 1);
              }
            }
          }
        }
        console.log(arr);
      }

      if (arr.length !== 0) {
        if (flag) {
          data[data.length].data = arrO;
        } else {
          data.push({
            title: '已完成',
            data: arr
          })
        }
      }
      this.setState({
        moving: true,
        data: data,
        toggle: true
      })
      console.log(this.state.data);
      setTimeout(() => {
        this.setState({
          moving: false
        })
      }, 3000);
    }
  }
  render() {
    const { data, moving ,toggle} = this.state;
    return (
      <div id='todolist' className='todo'>
        <h1 className='title'>婚礼进度</h1>
        <div className='todoArea'>
          {
            data.map((item, index) => (
              <ul>
                <p>{item.title}</p>
                {
                  item.data.map((inner, innerIndex) => (
                    <li className={[inner.todo ? 'done' : '',  'todolist-move'].join(' ')}>
                      <span className='label'>{inner.content}</span>
                      <div className="actions">
                        <div className='btn-picto'>
                          <Checkbox onChange={() => this.changeTodoState(index,innerIndex)} checked={inner.todo} />
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            ))
          }
        </div>
        <div className={['togglebutton-wrapper', toggle ?'togglebutton-checked':''].join(' ')}>
          <label>
            <span className='togglebutton-label'>将已完成移至底部？</span>
            <span className='togglebutton-box' onClick={this.sortTodo}></span>
          </label>
          <input id='todosort' type='checkbox' name='todosort' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress
})
const mapDispatchToProps = dispatch => ({
  setprogress:progress => dispatch(Actions.setProgress(progress))
  // clearCart: () => dispatch(Actions.clear_cart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo);