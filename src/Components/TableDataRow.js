import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(parseInt(this.props.permission) === 1){ return "Admin"; }
        else if(parseInt(this.props.permission) === 2){ return "Moderator";}
        else{ return "Normal"; }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser) => {
        //console.log('Id của phẩn tử: '+ idUser);
        this.props.deleteButtonClick(idUser);
    }
    render() {
        //this.props.editFunClick
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={() => this.editClick()}><i className="fa  fa-edit" /> Sửa </div>
                    <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa  fa-remove" /> Xóa </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;