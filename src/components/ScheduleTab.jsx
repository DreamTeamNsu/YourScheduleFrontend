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
    LECTURE: "Лекция",
    LAB: "Семинар",
    UNKNOWN: ""
}

class ScheduleTab extends React.PureComponent {

    fillRows(data, initRows) {

        let rows = {
            ...initRows ?? {}
        }

        data?.forEach(t => {
            if (!rows[t.cell.startTime])
                rows = {
                    ...rows,
                    [t.cell.startTime]: new DaysOfWeek()
                }
        })

        data?.forEach(t => {
            rows[t.cell.startTime][t.cell.dayOfWeek].push({
                name: t.lesson.name,
                type: lessonTypes[t.lesson.type] ?? t.lesson.type,
                room: t.lesson.room,
                isSpec: initRows !== undefined,
            })
        })

        return rows;
    }

    componentDidUpdate(prevProps) {

        if ((this.props.groupNumber?.length ?? 0 > 0)
            && ((prevProps.groupNumber ?? '') !== (this.props.groupNumber ?? '')
                || (prevProps.specCourses ?? []) !== (this.props.specCourses ?? []))
        ) {

            ScheduleService.getOnlyGroupTimetable(this.props.groupNumber).then(res => {

                return this.fillRows(res.data);

            }).then(initRows => {

                if (this.props.specCourses.length > 0)
                    ScheduleService.getMultipleSpecCoursesTimetable(this.props.specCourses).then(res => {

                        const rows = this.fillRows(res.data, initRows);

                        this.setState({ rows });

                    });
                else
                    this.setState({ rows: initRows });
            });
        }

    }

    state = {
        rows: {}
    }

    renderCell(data) {
        return (data.map((d, index) =>
            <div key={index} style={{ backgroundColor: d.isSpec ? "lightblue" : undefined }}>
                <b>{d.name}</b><br />
                {d.type}<br />
                {d.room}
            </div>
        ))
    }

    render() {

        const rows = this.state.rows

        return (
            <div class="overflow-auto">
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
            </div>
        );
    }
}

export default ScheduleTab;