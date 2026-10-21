/*
Mauricio Rivera
msr26@njit.edu
IT302 - 001
October 21st, 2026
Unit 08 - React.js Setup and NavBar Exercise
*/

import MyNavigationBar from "~/components/MyNavigationBar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const user = {
    name: <h2>Mauricio Rivera</h2>,
    course: <h3>IT302</h3>,
    section: <h4>001</h4>,
    course_name: <h5>Advanced Internet Applications</h5>,
    date: <p>October 21st, 2026</p>,
    exercise: <p>Unit 08 - React.js Setup and NavBar Exercise</p>,
    email: <p>msr26@njit.edu</p>
  }

  return (
    <>
      <MyNavigationBar />
      <div className="container mt-4">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of your React Router application.</p>
        <hr/>
        <div className="user-info">
          {user.name}
          {user.course}
          {user.section}
          {user.course_name}
          {user.date}
          {user.exercise}
          {user.email}
        </div>
      </div>
    </>
  )
}
