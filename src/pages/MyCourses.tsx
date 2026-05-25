import { useState,useEffect,startTransition } from "react";
import {
    Table,
    Badge,
    Button,

} from "@mantine/core";

import { useNavigate } from "react-router-dom";
type Course = {
  CourseId: string;
  CourseName: string;
  Category: string;
  Duration: string;
  StartDate: string;
  EndDate: string;
  Price : string;
  SkillLevel: string;
  Language: string;
};

export const MyCourses = () => {
    const navigate = useNavigate();

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const storedCourses = localStorage.getItem("courses");
        if (storedCourses) {
            startTransition(() =>{
            setCourses(JSON.parse(storedCourses));
        });
        }
    }, []);

    const rows = courses.map((Course, index) => {
        let badgeColor = "blue";
        if (Course.SkillLevel === "Beginner") {
            badgeColor = "green";
        } else if (Course.SkillLevel === "Intermediate") {
            badgeColor = "orange";
        } else if (Course.SkillLevel === "Advanced") {
            badgeColor = "red";
        }
        return (
            <Table.Tr key={index}>
                <Table.Td>{Course.CourseId}</Table.Td>

                <Table.Td>{Course.CourseName}</Table.Td>

                <Table.Td>{Course.Category}</Table.Td>

                <Table.Td>{Course.Duration}</Table.Td>

                <Table.Td>{Course.StartDate}</Table.Td>

                <Table.Td>{Course.EndDate}</Table.Td>

                <Table.Td>{Course.Price}</Table.Td>

                <Table.Td>
                    <Badge color={badgeColor}>{Course.SkillLevel}</Badge>
                </Table.Td>

                <Table.Td>{Course.Language}</Table.Td>
            </Table.Tr>
        );
    });
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-beween mb-6">
                    <h1 className="text-xl font=semibold">My Courses</h1>
                    <Button
                        color="blue"
                        onClick={() => {
                            navigate("/courses/new");
                        }}
                    >
                        + New
                    </Button>
                </div>

                <Table striped highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Course ID</Table.Th>
                            <Table.Th>Courese Name</Table.Th>
                            <Table.Th>Category</Table.Th>
                            <Table.Th>Duration</Table.Th>
                            <Table.Th>Start Date</Table.Th>
                            <Table.Th>End Date</Table.Th>
                            <Table.Th>Price</Table.Th>
                            <Table.Th>Skill Level</Table.Th>
                            <Table.Th>Language</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </div>
        </div>);
};