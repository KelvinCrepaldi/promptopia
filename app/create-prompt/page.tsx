"use client";
import { useState } from "react";

import Form from "@components/Form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export type postType = { prompt: string; tag: string };

function CreatePrompt(): JSX.Element {
  const router = useRouter();
  const { data: session }: any = useSession();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<postType>({ prompt: "", tag: "" });

  const createPrompt = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    ></Form>
  );
}

export default CreatePrompt;
