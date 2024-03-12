import { Course } from "@/models/Course/Course";
import { UseQueryResult, useQuery } from "react-query";

 export function getCourses(): UseQueryResult<Course[], unknown>{
    return useQuery(['Course'], async ()=>{
             const response = await fetch(`http://localhost:3001/course`);
             const courses = await response.json();
             return courses.data.course;
    })
}

 export function getCoursesByUserId(userId:number): UseQueryResult<Course[], unknown>{
    return useQuery(['Course',userId], async ()=>{
             const response = await fetch(`http://localhost:3001/course/id/${userId}`);
             const courses = await response.json();
             return courses.data.course;
    })
}