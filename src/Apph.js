import React from 'react';
// import uuid from 'uuid';
import { useState, useCallback } from 'react';
import styled from '@emotion/styled'


function Apph() {


    const Child = styled.div({
    color: 'red'
    })

    const Parent = styled.div({
    [Child]: {
        color: 'green'
    }
    })

    return (
    <div>
        <Parent>
        <Child>green</Child>
        </Parent>
        <Child>red</Child>
    </div>);

    // const [data, setData] = useState([{
    //         status: false,
    //         text: "1",
    //         id: uuid()
    //     },
    //     {
    //         status: false,
    //         text: "2",
    //         id: uuid()
    //     },
    //     {
    //         status: false,
    //         text: "3",
    //         id: uuid()
    //     },
    // ]);
    // const [filter, setFilter] = useState('All');
    // const [newTodo, setNewTodo] = useState('');
    // const todoClick = useCallback(
    //     (id) => {
    //         setData(data.map(v => {
    //             if (v.id === id)
    //                 return {
    //                     text: v.text,
    //                     status: !v.status,
    //                     id: v.id
    //                 }

    //             return v;
    //         }))
    //     },
    //     [data],
    // )
    // const deleteTodo = useCallback(
    //     (id) => {
    //         setData(data.filter(v => v.id!=id ))
    //     },
    //     [data],
    // )
    // const addTodo = useCallback(
    //     (id) => {
    //         setData([...data, {
    //             status: false,
    //             text: newTodo,
    //             id: uuid()
    //         }])
    //     },
    //     [data, newTodo],
    // )
    // return ( 
    //   <div>
    //     <h1>TODOs</h1>
    //     <div>{
    //         ['All', 'Done', 'Undone'].map(v => {
    //           return <button onClick={() => setFilter(v)}>{v}</button>
    //         })
    //       }</div>
    //     <ul>
    //       {
    //         data.filter(v => {
    //           return filter === 'All' || (filter == 'Done' && v.status == 1) || (filter == 'Undone' && v.status == 0)
    //         }).map(v => <li key={v.id}> <i>{v.status ? 'done' : 'undone'}</i> <input checked={v.status ? 'checked' : ''} onChange={() => todoClick(v.id)} type="checkbox"></input> {v.text} <button onClick={() => deleteTodo(v.id)}>X</button></li>)
    //       }
    //     </ul>
    //     <br />
    //     <input onChange={(e) => setNewTodo(e.target.value)} type="text" value={newTodo} />
    //     <button onClick={addTodo}>ADD</button>
    //   </div>
    // );
}

export default Apph;
