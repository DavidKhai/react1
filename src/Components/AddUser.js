import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        });
        //Đóng gói
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return(
                <div className="col">
                    <form method="post">
                        <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                            <div className="card-header text-center">Thêm mới User vào hệ thống</div>
                            <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control"  placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control"  placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} name="permission" className="custom-select" required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={() => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới"/>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>    
            )
        }
        else{
            return true;
        }
    }
    render() {
        // console.log(this.props.hienThiForm);
        //console.log(this.state);
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
                
                
           

        );
    }
}

export default AddUser;