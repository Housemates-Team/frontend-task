import CommentCard from "@/app/components/cards/CommentCard";
import PostCard from "@/app/components/cards/PostCard";
import { Comment as Comment, Post, Author } from "../../../../types/types";
import AuthorCard from "@/app/components/cards/AuthorCard";
import { Metadata } from "next";
import Link from "next/link";

const URL = "https://jsonplaceholder.typicode.com";

export async function generateMetadata({
  params,
  searchParams,
}: any): Promise<Metadata> {
  const id = params.id;

  // fetch author data
  const authorResponse = await fetch(`${URL}/users/${id}`);
  const author = await authorResponse.json();

  return {
    title: `${author.name} Blog Post`,
    description: `${author.name} Blog Post Description`,
  };
}

export default async function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  // Blog post
  const postReponse = await fetch(`${URL}/posts/${params.id}`);
  const post: Post = await postReponse.json();

  // Author data
  const authorResponse = await fetch(`${URL}/users/${post.userId}`);
  const author: Author = await authorResponse.json();

  // Blog post comments
  const commentsResponse = await fetch(`${URL}/comments?postId=${params.id}`);
  const comments: Comment[] = await commentsResponse.json();

  // Filtered posts from author
  const postsReponse = await fetch(`${URL}/posts`);

  const posts = await postsReponse.json();
  const filterPosts: Post[] = posts
    .slice(0, 3)
    .filter((p: any) => p.userId === post.userId);

  return (
    <>
      <div className="page-container">
        <div>
          <div>
            {author && (
              <div key={author.id}>
                <AuthorCard
                  name={author.name}
                  username={author.username}
                  email={author.email}
                  address={author.address}
                  phone={author.phone}
                  website={author.website}
                  company={author.company}
                />
              </div>
            )}
          </div>
          <div className="pt-5">
            {post && (
              <div key={post.id}>
                <PostCard
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  NumbOfComments={comments.length}
                  isGrid={false}
                />
              </div>
            )}
          </div>
          <div className="bg-white pt-1 pb-3 px-5 rounded-b">
            <h3 className="font-semibold mb-2 text-lg">Most relevant </h3>
            {comments && (
              <div>
                {comments.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    name={comment.name}
                    body={comment.body}
                    email={comment.email}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-brand-leaf">
        <div className="page-container">
          <h2 className="text-2xl mb-4 font-semibold text-white">
            Latest posts from {author.name}
          </h2>
          {filterPosts.length > 0 && (
            <div className={`blog-cards`}>
              {filterPosts.map((post) => (
                <Link href={`/post/${post.id}`} key={post.id}>
                  <PostCard
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    NumbOfComments={post.NumbOfComments}
                    author={author}
                    isGrid={true}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
