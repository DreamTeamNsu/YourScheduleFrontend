import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          showMenu: false,
          groupNumber: '',
          b1: '',
          b2: '',
          b3: '',
          b1List: '',
          b2List: '',
          b3List: '',
        }
        this.changeGroupNumber = this.changeGroupNumber.bind(this);
    }
    changeGroupNumber= (event) =>{
      this.setState({groupNumber: event.target.value}); 
    }

    render() {
        return (               
            <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                <div className = "navbar-brand">Расписание НГУ ФИТ</div>
                <div class="btn-group">
                  <button className="btn btn-black" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="dropdown-menu p-1 mb-2 bg-dark text-white" aria-labelledby="dropdownMenu2">
                    <form inline autoComplete="off">
                      <div>Номер группы:</div>
                      <input placeholder = "№" name = "groupNumber" className = "form-control"
                          value = {this.state.groupNumber} onChange = {this.changeGroupNumber}/>
                      <div className = "text-up">Спецкурсы:</div>
                      <input placeholder = "B.1" name = "spec" className = "form-control"/>   
                      <input placeholder = "B.2" name = "spec" className = "form-control"/>  
                      <input placeholder = "B.3" name = "spec" className = "form-control"/>  
                    </form>
                  </div>
                </div>
            </nav>


        );
    }
}

export default HeaderComponent;