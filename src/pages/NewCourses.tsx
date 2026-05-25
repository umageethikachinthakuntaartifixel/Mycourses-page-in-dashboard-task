import { useState } from "react";

import { TextInput, Button } from "@mantine/core";

import { DateInput } from "@mantine/dates";

import { useNavigate } from "react-router-dom";

type Course = {
  CourseId: string;
  CourseName: string;
  Category: string;
  Duration: string;
  StartDate: string;
  EndDate: string;
  Price: string;
  SkillLevel: string;
  Language: string;
};

export const NewCourses = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState<Course>({
    CourseId: "",
    CourseName: "",
    Category: "",
    Duration: "",
    StartDate: "",
    EndDate: "",
    Price: "",
    SkillLevel: "",
    Language: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (formData.CourseId.trim() === "") {
      setError("Course ID is required");
      return;
    }

    if (formData.CourseName.trim() === "") {
      setError("Course Name is required");
      return;
    }

    if (formData.Category.trim() === "") {
      setError("Category is required");
      return;
    }

    if (formData.SkillLevel.trim() === "") {
      setError("Skill Level is required");
      return;
    }

    if (formData.Language.trim() === "") {
      setError("Language is required");
      return;
    }
    setError("");

    const existingCourses = JSON.parse(localStorage.getItem("courses") || "[]");

    const updatedCourses = [...existingCourses, formData];

    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    navigate("/courses");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-semibold mb-6">Add New Course</h1>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Course ID"
            name="CourseId"
            value={formData.CourseId}
            onChange={handleChange}
          />

          <TextInput
            label="Course Name"
            name="CourseName"
            value={formData.CourseName}
            onChange={handleChange}
          />

          <div>
            <label className="text-sm font-medium">Category *</label>

            <select
              name="Category"
              value={formData.Category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  Category: e.target.value,
                })
              }
              className="w-full border rounded-md p-2 mt-1"
            >
              <option value="">Select Category</option>

              <option value="Libraries">Libraries</option>

              <option value="Frontend">Frontend</option>

              <option value="Backend">Backend</option>

              <option value="Full Stack">Full Stack</option>

              <option value="System Design">System Design</option>

              <option value="OOPS">OOPS</option>
            </select>
          </div>

          <TextInput
            label="Duration"
            name="Duration"
            value={formData.Duration}
            onChange={handleChange}
          />

          <DateInput
            label="Start Date"
            placeholder="Select Start Date"
            value={formData.StartDate ? new Date(formData.StartDate) : null}
            onChange={(value) =>
              setFormData({
                ...formData,
                StartDate: value ? value.toISOString().split("T")[0] : "",
              })
            }
          />

          <DateInput
            label="End Date"
            placeholder="Select End Date"
            value={formData.EndDate ? new Date(formData.EndDate) : null}
            onChange={(value) =>
              setFormData({
                ...formData,
                EndDate: value ? value.toISOString().split("T")[0] : "",
              })
            }
          />

          <TextInput
            type="number"
            label="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
          />

          <div>
            <label className="text-sm font-medium">Skill Level *</label>

            <select
              name="SkillLevel"
              value={formData.SkillLevel}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  SkillLevel: e.target.value,
                })
              }
              className="w-full border rounded-md p-2 mt-1"
            >
              <option value="">Select Skill Level</option>

              <option value="Beginner">Beginner</option>

              <option value="Intermediate">Intermediate</option>

              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Language *</label>

            <select
              name="Language"
              value={formData.Language}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  Language: e.target.value,
                })
              }
              className="w-full border rounded-md p-2 mt-1"
            >
              <option value="">Select Language</option>

              <option value="English">English</option>

              <option value="Hindi">Hindi</option>

              <option value="Kannada">Kannada</option>

              <option value="Telugu">Telugu</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button
            color="red"
            variant="outline"
            onClick={() => navigate("/courses")}
          >
            Cancel
          </Button>

          <Button color="blue" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
