import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signinPage/Signin";
import HomePage from "./pages/homepage/HomePage";
import StudentCoordinator from "./components/StudentCoordinator/StudentCoordinator";
import Clinical from "./components/Clinical/Clinical";
import AddStudentCoordinator from "./components/AddStudentCoordinator/AddStudentCoordinator";
import ClinicalForm from "./components/ClinicalForm/ClinicalForm";
import DisplayClinicalData from "./components/DisplayClinicalData/DisplayClinicalData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" data-testid="signin-link" element={<Signin />} />
        <Route path="/home" data-testid="home-link" element={<HomePage />} />
        <Route path="/clinical" data-testid="clinical-link" element={<Clinical />} />
        <Route path="/studentCoordinator" data-testid="student-coordinator-link" element={<StudentCoordinator />} />
        <Route path="/addStudentCoordinator" data-testid="add-student-coordinator-link" element={<AddStudentCoordinator />} />
        <Route path="/editStudentCoordinator" data-testid="edit-student-coordinator-link" element={<AddStudentCoordinator />} />
        <Route path="/clinicalForm" data-testid="clinical-form-link" element={<ClinicalForm />} />
        <Route path="/displayClinicalData/:id" data-testid="display-clinical-data-link" element={<DisplayClinicalData />} />
      </Routes>
    </>
  );
}

export default App;
