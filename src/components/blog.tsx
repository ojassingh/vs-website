import { FC } from "react";
import Link from "next/link";
import BlurFade from "./ui/blur-fade";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";

interface BlogItem {
  name: string;
  bg: string;
  link: string;
}

// Fetch blog data dynamically
const getBlogData = async (): Promise<BlogItem[]> => {
  // Path to the directory containing MDX files
  const blogDir = path.join(process.cwd(), "src/content");

  // Read all MDX files in the directory
  const files = fs.readdirSync(blogDir);

  // Process each file to extract metadata and details
  const blogItems = await Promise.all(
    files.map(async (file) => {
      // Dynamically import the MDX file
      const { metadata, details } = await import(
        `@/content/${file.replace(/\.mdx$/, "")}`
      );

      return {
        name: metadata.title || "Untitled",
        bg: details.thumbnail.src || "/default-thumbnail.jpg", // Use the thumbnail from details
        link: `/blog/${file.replace(/\.mdx$/, "")}`, // Generate link from filename
      };
    }),
  );

  return blogItems;
};

const Blog: FC = async () => {
  const blogItems = await getBlogData();

  return (
    <div id="blog" className="relative px-4 pt-10 sm:px-0 sm:pt-20">
      <div className="absolute -top-10 right-10 -z-10 translate-x-1/2 -rotate-15 blur-sm">
        <div
          className="h-0 w-0"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: "radial-gradient(at 25% 25%, transparent, #438AFF)",
            width: "300px",
            height: "250px",
          }}
        ></div>
      </div>

      <p className="max-w-max rounded-lg border px-2 py-1 text-sm">BLOG</p>
      <h1 className="font-heading mt-4 text-3xl font-medium sm:text-4xl">
        Keep up with our latest insights
      </h1>

      <div className="mt-6 flex flex-wrap justify-center gap-4 sm:mt-10 sm:justify-normal">
        {blogItems.map(({ name, bg, link }, index) => {
          return (
            <BlurFade key={index} inView delay={index / 10} direction="right">
              <Link href={link}>
                <div className="group relative h-60 w-84 rounded-lg shadow-md sm:h-84 sm:w-64">
                  <div className="absolute z-20 flex flex-col gap-4 p-4">
                    <h1 className="text-lg font-medium text-neutral-700">
                      {name}
                    </h1>
                  </div>
                  <div className="absolute z-10 h-full w-full rounded-lg bg-neutral-200 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                  <div className="absolute z-10 h-full w-full rounded-lg bg-neutral-200 [mask-image:linear-gradient(to_right,black,transparent)]" />

                  <Image
                    src={bg}
                    alt={name}
                    className="absolute h-full w-full rounded-lg object-cover"
                    width={256}
                    height={384}
                  />
                  <div className="absolute right-4 bottom-4 rounded-full bg-black/20 p-2 backdrop-blur-sm">
                    <ArrowRight className="text-white duration-300 group-hover:-rotate-45" />
                  </div>
                </div>
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
