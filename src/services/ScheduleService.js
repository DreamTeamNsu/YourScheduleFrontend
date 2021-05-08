import axios from 'axios'
const SCHEDULE_API_BASE_URL = "http://localhost:8081/api/v1/employees";
class ScheduleService{ 
    getSchedule(){
        return axios.get(SCHEDULE_API_BASE_URL)
    }
}
export default new ScheduleService()