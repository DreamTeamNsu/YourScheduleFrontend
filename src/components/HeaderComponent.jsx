import React, { Component } from 'react';
import ScheduleService from '../services/ScheduleService';
import ScheduleTab from './ScheduleTab';
class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          groupNumber: '',
          b1: '',
          b2: '',
          b3: '',
          groupList: [],
          b1List: [],
          b2List: [],
          b3List: [],
        }
        this.changeGroup = this.changeGroup.bind(this);
        this.changeSpec = this.changeSpec.bind(this);
    }
    componentDidMount(){              //запускаяется автоматически
      ScheduleService.getGroups().then((res) =>{
          this.setState({groupList: res.data})
      });
    }
    changeGroup= (event) =>{
      this.setState({groupNumber: event.target.value}); 
      ScheduleService.getGroupTimetableAndSpecCourses().then((res) =>{
        
        this.setState({b1List: res.data.specCourses['1'],     //не факт что работает как нужно
          b1List: res.data.specCourses['2'],
          b1List: res.data.specCourses['3']
        })

        // res.data.timetable              // <=======
    });
    }
    changeSpec= (block, event) =>{        //Свойство "block" объявлено, но его значение не было прочитано. WTF&&
                                          //не взлетит -> будет отдельно для каждого блока
      this.setState({block: event.target.value}); 
      ScheduleService.getGroupTimetableAndSpecCourses().then((res)=>{
        // res.data              // <=======
    });
    }

    render() {
        return ( 
<div>
  <nav className="navbar navbar-dark bg-dark text-white" >
    <div className = "navbar-brand">Расписание НГУ ФИТ</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark text-white p-3">
      
        <div class="row">
          <div class="col">
            <div>Номер группы:</div>
            <select onChange={this.changeGroup} value={this.state.groupNumber}>
              <option value=''>None</option>
              {
                this.state.groupList.map(
                  item => <option>{item}</option>
                )
              }
            </select>
          </div>
        <div class="col">Спецкурсы:</div>
        <div class="col"> 
        <div class="row">
            <span class="text-muted"> b1:</span>                 
            <select onChange={(e) => this.changeSpec('b1',e)} value={this.state.b1}>
              <option  value=''>None</option>
              {
                this.state.b1List.map(
                  item => <option>{item}</option>
                )
              }
            </select>
          </div>
          <div class="row">
            <span class="text-muted"> b2:</span>                 
            <select onChange={(e) => this.changeSpec('b2',e)} value={this.state.b2}>              
              <option  value=''>None</option>
              {
                this.state.b2List.map(
                  item => <option>{item}</option>
                )
              }
            </select>
          </div>
          <div class="row">
            <span class="text-muted"> b3:</span>                 
            <select onChange={(e) => this.changeSpec('b3',e)} value={this.state.b3}> 
            <option  value=''>None</option>
              {
                this.state.b3List.map(
                  item => <option>{item}</option>
                )
              }
            </select>
            </div>
          </div>
        </div>
     


    </div>
  </div>
</div>                          
        );
    }
}

export default HeaderComponent;