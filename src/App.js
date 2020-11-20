import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Levels from "./components/Levels/Levels";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import CreateTask from "./components/Dashboard/CreateTask/CreateTask";
import Task from "./components/Dashboard/Task/Task";
import MyTask from "./components/Dashboard/MyTask/MyTask";
import SubmitTask from "./components/Dashboard/SubmitTask/SubmitTask";
import SubmittedTask from "./components/Dashboard/SubmittedTask/SubmittedTask";
import TaskScore from "./components/Dashboard/TaskScore/TaskScore";
import ScoredTask from "./components/Dashboard/ScoredTask/ScoredTask";

export const UserContext = createContext();
export const RegistrationContext = createContext();
export const ProfessionContext = createContext();
export const SubmitTaskContext = createContext();
export const TaskScoreContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [registration, setRegistration] = useState({});
  const [profession, setProfession] = useState("");
  const [submitTask, setSubmitTask] = useState({});
  const [taskScore, setTaskScore] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProfessionContext.Provider value={[profession, setProfession]}>
        <RegistrationContext.Provider value={[registration, setRegistration]}>
          <SubmitTaskContext.Provider value={[submitTask, setSubmitTask]}>
            <TaskScoreContext.Provider value={[taskScore, setTaskScore]}>
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                  <PrivateRoute path="/level">
                    <Levels></Levels>
                  </PrivateRoute>
                  <PrivateRoute path="/registration">
                    <Registration></Registration>
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                    <Task></Task>
                  </PrivateRoute>
                  <PrivateRoute path="/createTask">
                    <CreateTask></CreateTask>
                  </PrivateRoute>
                  <PrivateRoute path="/tasks">
                    <Task></Task>
                  </PrivateRoute>
                  <PrivateRoute path="/my-task">
                    <MyTask></MyTask>
                  </PrivateRoute>
                  <PrivateRoute path="/submitTask">
                    <SubmitTask></SubmitTask>
                  </PrivateRoute>
                  <PrivateRoute path="/submittedTask">
                    <SubmittedTask></SubmittedTask>
                  </PrivateRoute>
                  <PrivateRoute path="/taskScore">
                    <TaskScore></TaskScore>
                  </PrivateRoute>
                  <PrivateRoute path="/scoredTask">
                    <ScoredTask></ScoredTask>
                  </PrivateRoute>
                </Switch>
              </Router>
            </TaskScoreContext.Provider>
          </SubmitTaskContext.Provider>
        </RegistrationContext.Provider>
      </ProfessionContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
