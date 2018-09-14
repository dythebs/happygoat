import React from 'react'
import './personalC.css'
import {Icon, Checkbox} from 'antd'


class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // moving:false,
      todo:[
        [ 1, 1, 0, 0],
        [0, 0,],
        0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
      ],
      data:[
       { title: '商议结婚',
        data:[
          '双方父母商议结婚相关事项',
          '拍结婚登记照',
          '办理结婚登记手续',
          '双方商议结婚开支分配'
        ]},
        {title:'婚宴场所',
        data:[
          '选定婚礼时间',
          '选定婚宴酒店'
        ]}
      ]
    }
    this.changeTodoState = this.changeTodoState.bind(this);
    this.sortTodo = this.sortTodo.bind(this);
  }

  changeTodoState(index,innerIndex){
    let temp = this.state.todo;
    temp[index][innerIndex] = 1;
    this.setState({
      todo:temp
    })
  }

  sortTodo(){
    this.setState({
      moving:true
    })
    setTimeout(() => {
      this.setState({
        moving:false
      })
    }, 200);
  }
   render(){
     const {data,todo} = this.state;
    return(
      <div id='todolist' className='todo'>
        <h1>婚礼进度</h1>
        <div className='todoArea'>
        {
          data.map((item,index) => (
            <ul>
            <p>{item.title}</p>
            {
              item.data.map((inner, innerIndex) => (
                <li className={todo[index][innerIndex]?'done':'' }>
                  <span className='label'>{inner}</span>
                  <div className="actions">
                    <div className='btn-picto'>
                        <Checkbox onClick={() => this.changeTodoState(index,innerIndex)} defaultChecked={todo[index][innerIndex]} />
                    </div>
                  </div>
                </li>
              ))
            }
            </ul>
          ))
        }
        </div>
        <div className='togglebutton-wrapper'>
          <label>
            <span className='togglebutton-label'>将已完成移至底部？</span>
            <span className='togglebutton-box'></span>
          </label>
          <input id='todosort' type='checkbox' name='todosort' onClick={this.sortTodo}/>
        </div>
      </div>
    );
}}

export default Todo;