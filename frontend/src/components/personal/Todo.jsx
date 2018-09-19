import React from 'react'
import './personalC.css'
import { Switch, Checkbox } from 'antd'


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

  changeTodoState(index,innerIndex) {
    let temp = this.state.data;
    let init = this.state.initdata;
    temp[index].data[innerIndex].todo = !temp[index].data[innerIndex].todo;
    init[index].data[innerIndex].todo = !init[index].data[innerIndex].todo;
    this.setState({
      data:temp,
      initdata:init
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
//   },e
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