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
    { title: "Bookshelf" },
    { name: "description", content: "A collection of my favorite books" },
  ];
}

export default function Home() {
  const favoriteBooks = (
    <ol>
      <li>The Great Gatsby</li>
      <li>To Kill a Mockingbird</li>
      <li>The Catcher in the Rye</li>
    </ol>
  )

  return (
    <>
      <MyNavigationBar />
      <div className="container mt-4">
        <h1>Bookshelf</h1>
        <p>Here are my favorite books:</p>
        {favoriteBooks}
      </div>
    </>
  )
}
