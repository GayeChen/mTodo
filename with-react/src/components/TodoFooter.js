import React from 'react';
import * as filterTypes from './filter-types'

export default class TodoFooter extends React.Component {
  render() {
    let {activeTodoCount, filterType, changeFilterType, clearCompleted, completedTodoCount} = this.props;
    let btns = [
      {type: filterTypes.ALL, text: "完成"},
      {type: filterTypes.ACTIVE, text: "未完成"},
      {type: filterTypes.COMPLETED, text: "已完成"}
    ];
    return (
    <div className="row text-center">
      {
        activeTodoCount ? (
        <div className="col-xs-4 ">
          <button className="btn btn-primary" disabled={true}>待办事项数量<a href="#" className="badge">{activeTodoCount}</a>
          </button>
        </div>
        ) : null
      }
      <div className="col-xs-5">
        {
          btns.map(btn => (
          <button className={`btn ${filterType !== btn.type ? 'btn-default' : 'btn-success'} btn-sm`}
                  style={{marginLeft: 10}} onClick={() => changeFilterType(btn.type)}>{btn.text}</button>
          ))
        }
      </div>
      {
        completedTodoCount ? (<div className="col-xs-3">
          <button className="btn btn-danger btn-sm" onClick={() => clearCompleted()}>删除已完成</button>
        </div>) : null
      }
    </div>
    )
  }
}


{/*
<button className={`btn ${filterType!==filterTypes.ALL?'btn-default':'btn-success'} btn-sm`} onClick={()=>changeFilterType(filterTypes.ALL)}>全部</button>
<button className={`btn ${filterType!==filterTypes.ACTIVE?'btn-default':'btn-success'} btn-sm`} style={{marginLeft: 10}} onClick={()=>changeFilterType(filterTypes.ACTIVE)}>未完成</button>
<button className={`btn ${filterType!==filterTypes.COMPLETED?'btn-default':'btn-success'} btn-sm`} style={{marginLeft: 10}} onClick={()=>changeFilterType(filterTypes.COMPLETED)}>已完成</button>*/
}
