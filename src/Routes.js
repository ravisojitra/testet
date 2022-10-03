import React from "react";
import Finance from "pages/Finance";
import UserDashboard from "pages/UserDashboard";
import Events from "pages/Events";
import Teachers from "pages/Teachers";
import FoodDetails from "pages/FoodDetails";
import NotificationLastestActivity from "pages/NotificationLastestActivity";
import Chat from "pages/Chat";
import AddNewStudent from "pages/AddNewStudent";
import AddNewTeacher from "pages/AddNewTeacher";
import Dashboard from "pages/Dashboard";
import StudentDetails from "pages/StudentDetails";
import Food from "pages/Food";
import TeacherDetails from "pages/TeacherDetails";
import Students from "pages/Students";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teacherdetails" element={<TeacherDetails />} />
        <Route path="/food" element={<Food />} />
        <Route path="/studentdetails" element={<StudentDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addnewteacher" element={<AddNewTeacher />} />
        <Route path="/addnewstudent" element={<AddNewStudent />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="/notificationlastestactivity"
          element={<NotificationLastestActivity />}
        />
        <Route path="/fooddetails" element={<FoodDetails />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
