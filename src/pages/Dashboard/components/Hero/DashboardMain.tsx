"use client";
import { cardArray } from "@/utils/constants/algoCardConstants";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AlgoCard from "../AlgoCard";
import { getCourses, getCoursesByUserId } from "@/hooks/courses/courseHooks";
import { User } from "@/models/User/User";
import { Course } from "@/models/Course/Course";
import Link from "next/link";

function DashboardMain({ user }: { user: User }) {
  const { data: courses, isLoading: coursesLoading } = getCourses();
  const { data: userCourses, isLoading: userCourseLoading } =
    getCoursesByUserId(user.data.user.userid);

  const mergedCourses = useMergedCourses(courses, userCourses);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <Box className="flex items-center">
        <Typography variant="h2" className="font-semibold text-lg md:text-2xl">
          Algorithms
        </Typography>
      </Box>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mergedCourses?.map((course, index) => (
          <Link
            href={
              "/dashboard/" +
              course.coursename?.toLowerCase().replace(/\s/g, "") +
              `/${course.courseid}/0/`
            }
          >
            <AlgoCard
              key={index}
              header={course.coursename ?? " "}
              definition={course.coursedescription ?? ""}
              progress={String(course.progress)}
              category={course.coursesubject}
              difficulty={course.coursedifficulty}
            />
          </Link>
        ))}
      </Box>
    </main>
  );
}

function useMergedCourses(
  courses: Course[] | undefined,
  userCourses: Course[] | undefined
) {
  const [mergedCourses, setMergedCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (courses && userCourses) {
      const merged = courses.map((course) => {
        const userCourse = userCourses.find(
          (userCourse) => userCourse.courseid === course.courseid
        );
        return {
          ...course,
          progress: userCourse ? userCourse.progress : 0,
        };
      });
      setMergedCourses(merged);
    }
  }, [courses, userCourses]);

  return mergedCourses;
}

export default DashboardMain;
