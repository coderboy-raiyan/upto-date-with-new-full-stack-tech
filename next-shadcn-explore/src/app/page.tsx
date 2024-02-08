import ToggleThemeButton from "@/components/ToggleThemeButton/ToggleThemeButton";
import { Suspense } from "react";

async function getPost() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

async function PostList() {
  const data = await getPost();
  return <div>{JSON.stringify(data)}</div>;
}

async function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center my-10">Home Page</h1>
      <div className="flex items-center justify-center gap-2">
        <p>Toggle theme </p>
        <ToggleThemeButton />
      </div>
      <Suspense fallback="loading...">
        <PostList />
      </Suspense>
    </div>
  );
}

export default Home;
