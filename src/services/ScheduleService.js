import axios from 'axios'
const SCHEDULE_API_BASE_URL = "localhost:8080/api";
class ScheduleService{ 
    getGroups(){
        return axios.get(SCHEDULE_API_BASE_URL+"/get/groups")
    }
    getGroupTimetableAndSpecCourses(group){
        return axios.get(SCHEDULE_API_BASE_URL+"/get/group-timetable?groupNumber="+group)
    }
    getSpecCourseTimetable(specId){
        return axios.get(SCHEDULE_API_BASE_URL+"/get/spec-timetable?specId="+specId)
    }
}
export default new ScheduleService()