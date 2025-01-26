import Image from "next/image";
import type { Metadata } from "next";
import { Dot } from "lucide-react";
import { use } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const metadata: Metadata = {
  title: "Vandana Singh and Associates",
  description: "A compliance law company based in India",
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join(
    process.cwd(),
    "src/content",
    `${params.slug}.mdx`,
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Parse frontmatter using gray-matter
  const { data: frontmatter } = matter(fileContent);

  // Return the updated metadata
  return {
    title: frontmatter.title || "Untitled", // Use frontmatter.title or fallback
    description:
      frontmatter.description || "A compliance law company based in India", // Use frontmatter.description or fallback
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    "src/content",
    `${params.slug}.mdx`,
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);

  const { default: Post } = await import(`@/content/${params.slug}.mdx`);

  return (
    <div className="">
      <article className="grid gap-6">
        <ul className="flex gap-2">
          <p>{frontmatter.date}</p>
          <Dot />
          <p>5 min read</p>
        </ul>
        <h1 className="font-heading text-3xl sm:text-5xl">
          {frontmatter.title}
        </h1>
        {/* <h3>{details.description}</h3> */}
        <div className="flex items-center gap-2">
          <Image
            alt={frontmatter.author}
            src={frontmatter.headshot}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="grid gap-0">
            <p>{frontmatter.author}</p>
            <span className="text-sm text-gray-500">{frontmatter.role}</span>
          </div>
        </div>
        <Image
          alt={frontmatter.title + ` ${frontmatter.description}`}
          src={frontmatter.thumbnail}
          width={1000}
          height={1000}
          className="h-[20rem] w-full rounded-lg object-cover shadow-md"
        />
      </article>
      <Post />
    </div>
  );
}

export const dynamicParams = false;
