import React from 'react';
import uuid from 'uuid';
import { useState, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import { AddButton, AddInput,FilterBtn,DeleteBtn,DoneIcon,TodoItem,Wrapper,TodoWrapper } from "./AppStyles";
import { ITodoItem } from "./ITodoItem";

function Apph() {

    const [data, setData] = useState<Array<ITodoItem>>([
      {
        status: false,
        text: "1",
        id: uuid()
      },
      {
        status: false,
        text: "2",
        id: uuid()
      },
      {
        status: false,
        text: "3",
        id: uuid()
      }
    ]);
    const [filter, setFilter] = useState<string>('All');
    const [newTodo, setNewTodo] = useState<string>('');
    const todoClick = useCallback(
        (id: String) => {
            setData(data.map(v => {
                if (v.id === id)
                    return {
                        text: v.text,
                        status: !v.status,
                        id: v.id
                    }

                return v;
            }))
        },
        [data],
    )
    const deleteTodo = useCallback(
        (id: string) => {
            setData(data.filter(v => v.id!==id ))
        },
        [data],
    )
    const addTodo = useCallback(
        () => {
            setData([...data, {
                status: false,
                text: newTodo,
                id: uuid()
            }])
        },
        [data, newTodo],
    )
    const renderList = (v: ITodoItem) => {
      return (
        <TodoItem key={v.id}>
          <DoneIcon done={v.status} onClick={() => todoClick(v.id)} />
          {v.text}
          <DeleteBtn onClick={() => deleteTodo(v.id)}></DeleteBtn>
        </TodoItem>
      );
    };
    
    return ( 
      <Wrapper>
        <h1>TODOs</h1>
        <div>{
            ['All', 'Done', 'Undone'].map(v => {
              return <FilterBtn active={v === filter} key={v} onClick={() => setFilter(v)}>{v}</FilterBtn>
            })
          }</div>
        <TodoWrapper>
          {
            data.filter(v => {
              return filter === 'All' || (filter === 'Done' && v.status) || (filter === 'Undone' && !v.status)
            }).map(v => renderList(v))
          }
        </TodoWrapper>
        <br />
        <div>
          <AddInput onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' ? addTodo() : ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type="text" value={newTodo} />
            <AddButton onClick={addTodo}>ADD</AddButton>
        </div>
      </Wrapper>
    );
}

export default Apph;
