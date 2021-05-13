import axios from 'axios'
const SCHEDULE_API_BASE_URL = "https://your-schedule-nsu-server.herokuapp.com/api";
class ScheduleService{ 
    getGroups(){
        // console.log(axios.get(SCHEDULE_API_BASE_URL+"/get/groups"));
        return axios.get(SCHEDULE_API_BASE_URL+"/get/groups");
    }
    getSpecCourses(group){
        return axios.get(SCHEDULE_API_BASE_URL+"/get/spec-courses?groupNumber="+group)
    }
    getGroupTimetableAndSpecCourses(group){
        return axios.get(SCHEDULE_API_BASE_URL+"/get/group-timetable?groupNumber="+group)
    }
    getSpecCourseTimetable(specId){
        console.log(specId)
        return axios.get(SCHEDULE_API_BASE_URL + "/get/spec-timetable?specId=" + specId)
    }

    getMultipleSpecCoursesTimetable(id) {
        return axios.get(`${SCHEDULE_API_BASE_URL}/get/spec-array-timetable`, { params: { id: id + '' } });
    }

    getOnlyGroupTimetable(groupNumber) {
        return axios.get(`${SCHEDULE_API_BASE_URL}/get/only-group-timetable`, { params: { groupNumber } });
    }
}
export default new ScheduleService()