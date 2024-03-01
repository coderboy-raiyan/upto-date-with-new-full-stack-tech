"use client";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.getAll("query"));
  return <div>page</div>;
}

export default Page;
