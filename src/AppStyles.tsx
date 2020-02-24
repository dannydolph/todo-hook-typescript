// @ts-ignore
import {Delete, CheckCircle} from 'emotion-icons/material'
import styled from '@emotion/styled'

export const AddButton = styled.button({
    color: 'red',
    padding: '5px',
    margin: '5px',
    fontSize: '16px',
    borderRadius: '5px',
})
export const AddInput = styled.input `
        padding: 5px;
        margin: 5px;
        font-size: 16px;
    `;

type IFilterBtnProps = {
    active: Boolean
}
export const FilterBtn = styled.button`
    border: 0;
    border-radius: 5px;
    background-color: ${(props: IFilterBtnProps) => props.active ? 'green' : '#ccc'};
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
`;
export const DeleteBtn = styled(Delete)`
    color: red;
    cursor: pointer;
    padding: 5px;
    margin: 5px;
    &: hover{
        box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.75);
    }
`;
type IDoneIconProps = {
    done: Boolean
}
export const DoneIcon = styled(CheckCircle)`
         color: ${(props: IDoneIconProps) => (props.done ? "green" : "#ccc")};
         padding: 5px;
         margin: 5px;
         cursor: pointer;
         font-size: 14px;
         &: hover {
           box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.75);
         }
       `;
export const TodoItem =  styled.li`
    list-style: none;
    border-bottom: 1px solid #eaeaea;
    margin: 10px;
    padding: 5px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Wrapper = styled.div `
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const TodoWrapper = styled.ul `
    margin: 0;
    padding: 0;
`;
