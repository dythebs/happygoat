import React from 'react'
import './personalC.css'
import {Switch, Checkbox} from 'antd'


class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      moving:false,
      todo:[
        [ true, true, false, false],
        [false, false],
        0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
      ],
      move: [
        [true, true, false, false],
        [false, false],
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
    temp[index][innerIndex] = !temp;
    this.setState({
      todo:temp
    })
  }

  sortTodo(){
    console.log('-');
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
     const {data,todo,moving} = this.state;
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
                    <li className={[todo[index][innerIndex] ? 'done' : '', moving ?'.todolist-move':''].join(' ') }>
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
            <span className='togglebutton-box' onClick={this.sortTodo}></span>
            < Switch defaultChecked onChange={this.sortTodo} />
          </label>
          <input id='todosort' type='checkbox' name='todosort'/>
        </div>
      </div>
    );
}}

export default Todo;

// Vue.component('togglebutton', {
//   props: ['label', 'name'],
//   template: `<div class="togglebutton-wrapper" v-bind:class="isactive ? 'togglebutton-checked' : ''">
//       <label v-bind:for="name">
//         <span class="togglebutton-label">{{ label }}</span>
//         <span class="tooglebutton-box"></span>
//       </label>
//       <input v-bind:id="name" type="checkbox" v-bind:name="name" v-model="isactive" v-on:change="onToogle">
//   </div>`,
//   model: {
//     prop: 'checked',
//     event: 'change'
//   },
//   data: function () {
//     return {
//       isactive: false
//     }
//   },
//   methods: {
//     onToogle: function () {
//       this.$emit('clicked', this.isactive)
//     }
//   }
// });

// var todolist = new Vue({
//   el: '#todolist',
//   data: {
//     newitem: '',
//     sortByStatus: false,
//     todo: [
//       { id: 1, label: "Learn VueJs", done: true },
//       { id: 2, label: "Code a todo list", done: false },
//       { id: 3, label: "Learn something else", done: false }
//     ]
//   },
//   methods: {
//     addItem: function () {
//       this.todo.push({ id: Math.floor(Math.random() * 9999) + 10, label: this.newitem, done: false });
//       this.newitem = '';
//     },
//     markAsDoneOrUndone: function (item) {
//       item.done = !item.done;
//     },
//     deleteItemFromList: function (item) {
//       let index = this.todo.indexOf(item)
//       this.todo.splice(index, 1);
//     },
//     clickontoogle: function (active) {
//       this.sortByStatus = active;
//     }
//   },
//   computed: {
//     todoByStatus: function () {

//       if (!this.sortByStatus) {
//         return this.todo;
//       }

//       var sortedArray = []
//       var doneArray = this.todo.filter(function (item) { return item.done; });
//       var notDoneArray = this.todo.filter(function (item) { return !item.done; });

//       sortedArray = [...notDoneArray, ...doneArray];
//       return sortedArray;
//     }
//   }
// });