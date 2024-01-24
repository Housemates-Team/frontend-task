import React from "react";
import BlogCard from "./components/BlogCard";
import Header from "./components/Header";
import { fetchData } from '../utils/api.js'

export default async function Home(): Promise<JSX.Element> {
  const data = await fetchData();

  return (<div>
    <Header />
    <BlogCard data={data} />
  </div>);
}
