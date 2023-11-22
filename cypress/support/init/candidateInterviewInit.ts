import { CandidateScheduleInterviewPayload } from "../payload/candidateInterviewPayload";
import GenaricHelper from "../helpers/genericHelper"; 
 
 
export default class CandidateScheduledInterviewInit { 
    static initScheduledInterview(empNumber: number): CandidateScheduleInterviewPayload { 
        let candidateScheduleInterviewPayload: CandidateScheduleInterviewPayload = { 
            ScheduleInterview: { 
                interviewName: "Fresh", 
                interviewDate: "2023-11-25", 
                interviewTime: "01:00", 
                note: "no note", 
                interviewerEmpNumbers: [ 
                    empNumber 
                ] 
            } 
        } 
        return candidateScheduleInterviewPayload 
    } 
}