import axios from 'axios'
const SCHEDULE_API_BASE_URL = "https://your-schedule-nsu-server.herokuapp.com/api";
class ScheduleService{ 
    getGroups(){
        // console.log(axios.get(SCHEDULE_API_BASE_URL+"/get/groups"));
        return axios.get(SCHEDULE_API_BASE_URL+"/get/groups");
    }
    getGroupTimetableAndSpecCourses(group){
        return axios.get(SCHEDULE_API_BASE_URL+"/get/group-timetable?groupNumber="+group)
    }
    getSpecCourseTimetable(specId){
        console.log(specId)
        return axios.get(SCHEDULE_API_BASE_URL+"/get/spec-timetable?specId="+specId)
    }
}
export default new ScheduleService()