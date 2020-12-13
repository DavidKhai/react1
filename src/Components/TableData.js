import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


class TableData extends Component {
    deleteButtonClick = (idUser) => {
        //console.log(idUser);
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value,key) =>(
        <TableDataRow 
        deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFun(value)} 
        stt={key} 
        userName={value.name} 
        tel={value.tel} 
        permission={value.permission} 
        key={key}
        id={value.id}/>
    ))
    //this.props.editFun
    render() {
        //console.log(this.props.dataUserProps);
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;