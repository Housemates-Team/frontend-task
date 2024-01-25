import React from "react";
import Blog from "./components/Blog";
import Header from "./components/Header";
import { fetchData } from '../utils/api'
import { iBlog } from "@/types";

export default async function Home(): Promise<JSX.Element> {
  const data: iBlog[] = await fetchData();

  return (<div>
    <Header />
    <Blog blogData={data} />
  </div>);
}
