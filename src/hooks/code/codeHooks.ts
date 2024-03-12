import { Code } from "@/models/Code/Code";
import { UseQueryResult, useQuery } from "react-query";

export function getCodeQA(id: number): UseQueryResult<Code[], unknown> {
  return useQuery(['Code'], async () => {
    const response = await fetch(`http://localhost:3001/code/id/${id}`);
    const code = await response.json();
    return code.data.codeQA;
  })
}

const API_BASE_URL = "https://emkc.org/api/v2/piston/execute";

export default async function executeCode(sourceCode: string) {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      language: "c++",
      version: "10.2.0",
      files: [
        {
          content: sourceCode,
        },
      ],
    })
  });

  if (!response.ok) {
    console.log(`HTTP error! status: ${response.status}`);
  }
  const s = await response.json();
  console.log(s);
  return s;
};
