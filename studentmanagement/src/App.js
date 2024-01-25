import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom"; 
import StudentList from './components/studentMangement/StudentList';
import CreateStudent from './components/studentMangement/CreateStudent';
import EditStudent from './components/studentMangement/EditStudent';
import StudentDetails from './components/studentMangement/StudentDetails';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import TeacherList from './components/teacherManagement/TeacherList';
import CreateTeacher from './components/teacherManagement/CreateTeacher';
import EditTeacher from './components/teacherManagement/EditTeacher';
import TeacherDetails from './components/teacherManagement/TeacherDetails';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FeeList from './components/feeManagement/FeeList';
import CretateFee from './components/feeManagement/CretateFee';
import EditFee from './components/feeManagement/EditFee';
import FeeDetails from './components/feeManagement/FeeDetails';
import EventList from './components/EventManagement/EventList';
import CreateEvent from './components/EventManagement/CreateEvent';
import EditEvent from './components/EventManagement/EditEvent';
import EventDetail from './components/EventManagement/EventDetail';
import ReportList from './components/ReportGenaration/ReportList';
import CreateReport from './components/ReportGenaration/CreateReport';
import EditReport from './components/ReportGenaration/EditReport';
import ReportDetail from './components/ReportGenaration/ReportDetail';
import ExamList from './components/ExamManagement/ExamList';
import CreateExam from './components/ExamManagement/CreateExam';
import EditExam from './components/ExamManagement/EditExam';
import ExamDetail from './components/ExamManagement/ExamDetail';
import CourseList from './components/CourseRegistration/CourseList';
import CreateCourse from './components/CourseRegistration/CreateCourse';
import EditCourse from './components/CourseRegistration/EditCourse';
import CourseDetail from './components/CourseRegistration/CourseDetail';
import ClassList from './components/ClassManagement/ClassList';
import CreateClss from './components/ClassManagement/CreateClss';
import EditClass from './components/ClassManagement/EditClass';
import ClassDetail from './components/ClassManagement/ClassDetail';

export default class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
        
        <Route path="/" exact component={Login}></Route>
        <Route path="/sign" exact component={Signup}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/student" exact component={StudentList}></Route>
        <Route path="/add/student" component={CreateStudent}></Route>
        <Route path="/editstudent/:id" component={EditStudent}></Route>
        <Route path="/student/:id" component={StudentDetails}></Route>
        <Route path="/create" component={Create}></Route>
        <Route path="/teacher" exact  component={TeacherList}></Route>
        <Route path="/add/teacher" component={CreateTeacher}></Route>
        <Route path="/editteacher/:id" component={EditTeacher}></Route>
        <Route path="/teacher/:id" component={TeacherDetails}></Route>
        <Route path="/fee" exact component={FeeList}></Route>
        <Route path="/add/fee" component={CretateFee}></Route>
        <Route path="/editfee/:id" component={EditFee}></Route>
        <Route path="/fee/:id" component={FeeDetails}></Route>
        <Route path="/event" exact component={EventList}></Route>
        <Route path="/add/event" component={CreateEvent}></Route>
        <Route path="/editevent/:id" component={EditEvent}></Route>
        <Route path="/event/:id" component={EventDetail}></Route>
        <Route path="/report" exact  component={ReportList}></Route>
        <Route path="/add/report" component={CreateReport}></Route>
        <Route path="/editreport/:id" component={EditReport}></Route>
        <Route path="/report/:id" component={ReportDetail}></Route>
        <Route path="/exam" exact  component={ExamList}></Route>
        <Route path="/add/exam" component={CreateExam}></Route>
        <Route path="/editexam/:id" component={EditExam}></Route>
        <Route path="/exam/:id" component={ExamDetail}></Route>
        <Route path="/course" exact  component={CourseList}></Route>
        <Route path="/add/course" component={CreateCourse}></Route>
        <Route path="/editcourse/:id" component={EditCourse}></Route>
        <Route path="/course/:id" component={CourseDetail}></Route>
        <Route path="/class" exact  component={ClassList}></Route>
        <Route path="/add/class" component={CreateClss}></Route>
        <Route path="/editclass/:id" component={EditClass}></Route>
        <Route path="/class/:id" component={ClassDetail}></Route>

        
       
    </BrowserRouter> 
      </div>
    )
  }
}

