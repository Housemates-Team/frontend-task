import Link from "next/link";
import { PostProps } from "../../../types/types";
import Image from "next/image";
import comment from "../../../public/images/comment.svg";
import avatar from "../../../public/images/profile.png";

export default function PostCard({
  id,
  title,
  body,
  user,
  NumbOfComments,
}: PostProps) {
  return (
    <Link
      href={`/post/${id}`}
      className="flex gap-4 flex-col p-3 rounded min-h-[320px] bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] "
    >
      <div className="flex items-center gap-1 hover:underline">
        <Image src={avatar} alt="avatar" width={23} height={23} />
        <span>Author: {user?.name}</span>
      </div>
      <div>
        <h1 className="font-semibold mb-1">{title}</h1>
        <p className="text-brand-space">{body}</p>
      </div>
      <div className="flex gap-4 text-brand-space text-sm">
        <p>1 min read</p>
        <p className="flex items-center gap-1 hover:text-brand-charcoal">
          <Image src={comment} alt="comment svg" width={18} height={18} />
          <span>{NumbOfComments}</span>
        </p>
      </div>
    </Link>
  );
}
