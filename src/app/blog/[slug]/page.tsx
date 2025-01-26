import Image from "next/image";
import type { Metadata } from "next";
import { Dot } from "lucide-react";

const metadata: Metadata = {
  title: "Vandana Singh and Associates",
  description: "A compliance law company based in India",
};

type Params = Promise<any>;

export async function generateMetadata({
  params,
}: {
  params: { slug: Params };
}): Promise<Metadata> {
  const { metadata: postMetadata } = await import(
    `@/content/${params.slug}.mdx`
  );

  // Return the updated metadata
  return {
    title: postMetadata.title || metadata.title, // Use MDX title or fallback
    description: postMetadata.description || metadata.description, // Use MDX description or fallback
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: Params }>;
}) {
  const { default: Post, details } = await import(
    `@/content/${(await params).slug}.mdx`
  );

  return (
    <div className="">
      <article className="grid gap-6">
        <ul className="flex gap-2">
          <p>{details.date}</p>
          <Dot />
          <p>5 min read</p>
        </ul>
        <h1 className="font-heading text-3xl sm:text-5xl">{details.title}</h1>
        {/* <h3>{details.description}</h3> */}
        <div className="flex items-center gap-2">
          <Image
            alt={details.author}
            src={details.headshot}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="grid gap-0">
            <p>{details.author}</p>
            <span className="text-sm text-gray-500">{details.role}</span>
          </div>
        </div>
        <Image
          alt={details.title + ` ${details.description}`}
          src={details.thumbnail}
          className="h-[20rem] w-full rounded-lg object-cover shadow-md"
        />
      </article>
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "understanding-safes" }];
}

export const dynamicParams = false;
