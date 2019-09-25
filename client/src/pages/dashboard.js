import React from 'react';
import {connect} from 'react-redux';


const Dash = (props)=>{

const listItems = props.users.map((x, i) =>
    <li key={'user'+i}><strong>Email: </strong>{`${x.email}`} <strong className="margin-l50">UserName: </strong>{`${x.username}`}</li>
);

return (
    <div className="w100 auto white fill-h">
        <h2 className="auto underline p15">List of Users</h2>
        <ol>
            {listItems}
        </ol>
    </div>)
};

const getInfoFromStore = state =>{
    return{
        users: state.users
    };
}
    
export default connect(getInfoFromStore)(Dash);