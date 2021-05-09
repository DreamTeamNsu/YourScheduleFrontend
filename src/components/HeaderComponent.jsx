import React, { Component } from 'react';
import ScheduleService from '../services/ScheduleService';
import ScheduleTab from './ScheduleTab';

class HeaderComponent extends Component {
  constructor(props) {
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
  componentDidMount() {              //запускаяется автоматически
    ScheduleService.getGroups().then((res) => {
      this.setState({ groupList: res.data })
    });
  }
  changeGroup = (event) => {
    this.setState({ groupNumber: event.target.value });
    ScheduleService.getGroupTimetableAndSpecCourses(event.target.value).then((res) => {
      // console.log(res.data.specCourses);
      if (res.data.specCourses['1']) {

        this.setState({
          b1List: res.data.specCourses['1'],     
          b2List: res.data.specCourses['2'],
          b3List: res.data.specCourses['3']
        })
      }
      // res.data.timetable              // <=======
    });
  }
  changeSpec = (block, event) => {    
    this.setState({ block: event.target.value });
    ScheduleService.getSpecCourseTimetable(event.target.value).then((res) => {
      // res.data              // <=======
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark text-white" >
          <div className="navbar-brand">Расписание НГУ ФИТ</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark text-white p-3">
            <div className="header-form">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col">
                    <div>Номер группы:</div>
                    <select onChange={this.changeGroup} value={this.state.groupNumber}>
                      <option value=''>None</option>
                      {
                        this.state.groupList.map(
                          item => <option value={item.groupNumber} key={item.groupNumber}>{item.groupNumber}</option>
                        )
                      }
                    </select>
                  </div>
                  <div id="spec">
                    <div className="col">Спецкурсы:</div>
                    <div className="col">
                      <div className="row">
                        <span className="text-muted"> b1:</span>
                        <select className="select-spec" onChange={(e) => this.changeSpec('b1', e)} value={this.state.b1.id}>
                          <option value=''>None</option>
                          {
                            this.state.b1List.map(
                              item => <option value={item.id} key={item.id} >{item.name}</option>
                            )
                          }
                        </select>
                      </div>
                      <div className="row">
                        <span className="text-muted"> b2:</span>
                        <select className="select-spec" onChange={(e) => this.changeSpec('b2', e)} value={this.state.b2.id}>
                          <option value=''>None</option>
                          {
                            this.state.b2List.map(
                              item => <option value={item.id} key={item.id}>{item.name}</option>
                            )
                          }
                        </select>
                      </div>
                      <div className="row">
                        <span className="text-muted"> b3:</span>
                        <select className="select-spec" onChange={(e) => this.changeSpec('b3', e)} value={this.state.b3.id}>
                          <option value=''>None</option>
                          {
                            this.state.b3List.map(
                              item => <option value={item.id} key={item.id}>{item.name}</option>
                            )
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScheduleTab groupNumber={this.state.groupNumber}/>
      </div>
    );
  }
}

export default HeaderComponent;