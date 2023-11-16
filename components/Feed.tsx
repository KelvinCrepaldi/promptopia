"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: any): JSX.Element => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post: any) => (
        <PromptCard key={post.id} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const [post, setPost] = useState([]);

  const handleSearchChange = (): void => {};

  const handleTagClick = (): void => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPost(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        ></input>
      </form>
      <PromptCardList data={post} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
