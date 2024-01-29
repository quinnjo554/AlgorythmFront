import { Course } from "@/models/Course/Course";
import { Lesson } from "@/models/Lesson/lesson";
import { UseQueryResult, useQuery } from "react-query";

 export function useLessonsByCourseId(courseId:number): UseQueryResult<Lesson[], unknown>{
    return useQuery(['Lesson',courseId], async ()=>{
             const response = await fetch(`http://localhost:3001/lesson/id/${courseId}`);
             const lessons = await response.json();
             return lessons.data.lessons;
    })
}