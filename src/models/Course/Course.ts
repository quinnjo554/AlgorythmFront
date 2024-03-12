export interface Course{
    courseid: number,
    coursename?:string | null,
    coursedescription:string,
    coursesubject:string,
    progress:number,
    coursedifficulty:string,
    userid:number
}