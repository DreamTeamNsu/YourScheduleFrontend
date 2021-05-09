import React, { Component } from 'react'
import ScheduleService from '../services/ScheduleService'
class ScheduleTab extends Component {
    constructor(props){
        super(props)
        this.state = {                      //Можно добавить отдельно расписание спецов и группы
            grouId: '',
            ScheduleTab: [                  //Итоговая таблица,в последствии отрисовывается, можно в любом удобном виде
                {
                   MONDAY: '',              //можно удалить, тогда до выбора группы отрисовывается только заголовок
                   TUESDAY : '',
                   WEDNESDAY : '',
                   THURSDAY : '',
                   FRIDAY : '',
                   SATURDAY : '',
                },
                {
                    MONDAY: '',
                    TUESDAY : '',
                    WEDNESDAY : '',
                    THURSDAY : '',
                    FRIDAY : '',
                    SATURDAY : '',
                 },
                 {
                    MONDAY: '',
                    TUESDAY : '',
                    WEDNESDAY : '',
                    THURSDAY : '',
                    FRIDAY : '',
                    SATURDAY : '',
                 },
                 {
                    MONDAY: '',
                    TUESDAY : '',
                    WEDNESDAY : '',
                    THURSDAY : '',
                    FRIDAY : '',
                    SATURDAY : '',
                 },
                 {
                    MONDAY: '',
                    TUESDAY : '',
                    WEDNESDAY : '',
                    THURSDAY : '',
                    FRIDAY : '',
                    SATURDAY : '',
                 },
                 {
                    MONDAY: '',
                    TUESDAY : '',
                    WEDNESDAY : '',
                    THURSDAY : '',
                    FRIDAY : '',
                    SATURDAY : '',
                 },
                 {
                    MONDAY: '',
                    TUESDAY : '',
                    WEDNESDAY : '',
                    THURSDAY : '',
                    FRIDAY : '',
                    SATURDAY : '',
                 }
            ],
            timing : [
                '9:00',
                '10:50',
                '12:40',
                '14:30',
                '16:20',
                '18:10',
            ]
        }
    }

    render() {
        return (
            <div className = "pre-tab">
            <div className = "schedule-tab">
                    <table className = "table  table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>ПН</th>
                                <th>ВТ</th>
                                <th>СР</th>
                                <th>ЧТ</th>
                                <th>ПТ</th>
                                <th>СБ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {          // <====== Отрисовка
                                this.state.ScheduleTab.map(
                                    (item, i)=>                                    
                                <tr key = {i}>
                                    <td>{this.state.timing[i]}</td>
                                    <td>{item.MONDAY}</td>
                                    <td>{item.TUESDAY}</td>
                                    <td>{item.WEDNESDAY}</td>
                                    <td>{item.THURSDAY}</td>
                                    <td>{item.FRIDAY}</td>
                                    <td>{item.SATURDAY}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ScheduleTab;