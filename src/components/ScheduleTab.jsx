import * as React from 'react'
import ScheduleService from '../services/ScheduleService'

class DaysOfWeek {
    constructor() {
        this.MONDAY = [];
        this.TUESDAY = [];
        this.WEDNESDAY = [];
        this.THURSDAY = [];
        this.FRIDAY = [];
        this.SATURDAY = [];
    }
}

const lessonTypes = {
    SEMINAR: "Семинар",
}

class ScheduleTab extends React.PureComponent {

    componentDidUpdate(prevProps) {

        if (prevProps.groupNumber !== this.props.groupNumber) {
            ScheduleService.getGroupTimetableAndSpecCourses(this.props.groupNumber).then((res) => {
                let rows = {}
                res.data.timetable?.forEach(t => {
                    if (!rows[t.cell.startTime])
                        rows = {
                            ...rows,
                            [t.cell.startTime]: new DaysOfWeek()
                        }
                })

                res.data.timetable?.forEach(t => {
                    rows[t.cell.startTime][t.cell.dayOfWeek].push({
                        name: t.lesson.name,
                        type: lessonTypes[t.lesson.type] ?? t.lesson.type,
                        room: t.lesson.room,
                    })
                })

                this.setState({ rows })
            });
        }

    }

    state = {
        rows: {}
    }

    renderCell(data) {
        return (data.map((d, index) =>
            <div key={index}>
                <b>{d.name}</b><br />
                {d.type}<br />
                {d.room}
            </div>
        ))
    }

    render() {

        const rows = this.state.rows

        return (
            <table className="table table-stripped table-bordered">
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
                    {Object.keys(rows).sort().map((rowKey, index) =>
                        <tr key={index}>
                            <td style={{ width: "100px" }}>{rowKey}</td>
                            <td>{this.renderCell(rows[rowKey]['MONDAY'])}</td>
                            <td>{this.renderCell(rows[rowKey]['TUESDAY'])}</td>
                            <td>{this.renderCell(rows[rowKey]['WEDNESDAY'])}</td>
                            <td>{this.renderCell(rows[rowKey]['THURSDAY'])}</td>
                            <td>{this.renderCell(rows[rowKey]['FRIDAY'])}</td>
                            <td>{this.renderCell(rows[rowKey]['SATURDAY'])}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default ScheduleTab;