import React from 'react';
import { Calendar, Badge } from 'antd';
import JiriBadge from './JiriBadge';

class Jiri extends React.Component {
   render(){
    return(
      <div className='jiri'>
        <Calendar dateCellRender={dateCellRender}
        // monthCellRender={monthCellRender}
        />
      </div>
    );
}}

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'error', content: '结婚吉日' },
      ]; break;
    case 2:
      listData = [
        {type:'success',content:'订婚吉日'}
      ];break;
    case 3:
      listData = [
        { type: 'success', content: '订婚吉日' }
      ]; break;
    case 5:
      listData = [
        { type: 'success', content: '结婚吉日' }
      ]; break;
    case 9:
      listData = [
        { type: 'success', content: '订婚吉日' },
        { type: 'error', content: '结婚吉日' }
      ]; break;
    case 10:
      listData = [
        { type: 'success', content: '订婚吉日' },
        { type: 'error', content: '结婚吉日' }
      ]; break;
    case 15:
      listData = [
        { type: 'success', content: '订婚吉日' },
        { type: 'error', content: '结婚吉日' }
      ]; break;
    case 18:
      listData = [
        { type: 'success', content: '结婚吉日' }
      ]; break;
    case 21:
      listData = [
        { type: 'success', content: '订婚吉日' },
      ]; break;
    case 22:
      listData = [
        { type: 'success', content: '订婚吉日' },
        { type: 'error', content: '结婚吉日' }
      ]; break;
    case 23:
      listData = [
        { type: 'success', content: '结婚吉日' }
      ]; break;
    case 25:
      listData = [
        { type: 'success', content: '结婚吉日' }
      ];
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <span>
      {
        listData.map(item => (
          <JiriBadge type={item.type} key={item.type}/>
          // <li key={item.content}>
            // <Badge status={item.type} text={item.content} />
          // </li>
        ))
      }
    </span>
  );
}

// function getMonthData(value) {
//   if (value.month() === 9) {
//     return 1394;
//   }
// }

// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? (
//     <div className="notes-month">
//       <section>{num}</section>
//       <span>Backlog number</span>
//     </div>
//   ) : null;
// }
export default Jiri;
