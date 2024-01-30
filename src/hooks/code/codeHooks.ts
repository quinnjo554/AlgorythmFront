import { Code } from "@/models/Code/Code";
import { UseQueryResult, useQuery } from "react-query";

 export function getCodeQA(id:number): UseQueryResult<Code[], unknown>{
    return useQuery(['Code'], async ()=>{
             const response = await fetch(`http://localhost:3001/code/id/${id}`);
             const code = await response.json();
             return code.data.codeQA;
    })
}
