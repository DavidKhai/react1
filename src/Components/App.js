import React, { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json'

const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  
  componentWillMount() {
    //Kiểm tra xem có localStorage ?
    if(localStorage.getItem('userData') === null ){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
    //console.log(localStorage.getItem("userData"));
  }
  

  deleteUser = (idUser) => {
    // var arr = [1,2,3];
    // var x =2;
    // arr = arr.filter(item => item !== x);
    // console.log(arr);


    //console.log(idUser);
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser); //dùng filter lọc 
    console.log(tempData);
    
    this.setState({
      data: tempData
    });

    //Đẩy vào dữ liệu 
    localStorage.setItem('userData',JSON.stringify(tempData));

    // tempData.forEach((value,key) => {  //dùng cách cũ duyệt từng phần tử
    //   if(value.id === idUser){
    //     console.log(key);
    //   }
    // })
  }
  getUserEditInfoApp = (info) => {
    //console.log('Thông tin đã sửa xong là: ' + info.name);
    this.state.data.forEach((value,key) => {
      //console.log(value.name);
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
     //Đẩy vào dữ liệu 
     localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
    //console.log("Đã kết nối ok");

   
    
    
  }

  getNewUserData = (name,tel,permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });

    //Đẩy vào dữ liệu 
    localStorage.setItem('userData',JSON.stringify(items));

    //console.log('Kết nối ok ok ');
    //console.log(this.state.data);
    
    // console.log(name);
    // console.log(tel);
    // console.log(permission);
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  render() {
    // localStorage.setItem("key1","haha");
    // console.log(localStorage.getItem("key1"));
    // localStorage.removeItem("key1");

    //localStorage.setItem("userData",JSON.stringify(DataUser));





    //console.log(this.state.data);
    var ketqua = [];
    this.state.data.forEach((item) => {
        if(item.name.indexOf(this.state.searchText) !== -1){
          ketqua.push(item);
        }
    })
    //console.log(ketqua);
    return (
      <div>
       <Header/>
       <div className="searchForm">
         <div className="container">
            <div className="row">
               <Search 
               getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
               userEditObject={this.state.userEditObject}
               ketNoi={() => this.doiTrangThai()} 
               hienThiForm={this.state.hienThiForm} 
               checkConnectProps={(dl) => this.getTextSearch(dl)}
               editUserStatus={this.state.editUserStatus}
               changeEditUserStatus={() => this.changeEditUserStatus()}/>
               <TableData 
               deleteUser={(idUser) => this.deleteUser(idUser)}
               editFun={(user) => this.editUser(user)} 
               dataUserProps={ketqua}
               changeEditUserStatus={() => this.changeEditUserStatus()}/>
               <AddUser add={(name,tel,permission) => this.getNewUserData(name,tel,permission)} hienThiForm={this.state.hienThiForm}/>
             </div>
         </div>
       </div>  
    </div>
    );
  }
}

export default App;
