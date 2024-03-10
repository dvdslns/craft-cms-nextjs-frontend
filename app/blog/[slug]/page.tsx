import { fetchData } from "@/app/_lib/data";
import { BlogEntry } from "@/app/_lib/definitions";
import AnimatedImage from "@/app/_components/AnimatedImage";
import Link from "next/link";
import  { PostTitle, PostWrapper } from "@/app/_components/PostComponents";

export async function generateStaticParams() {
  const response = await fetchData(
    `{
      blogEntries {
        ... on blog_post_Entry {
          slug
        }
      }
    }`
  );
  const data = response.blogEntries;
  return data.map((entry: BlogEntry) => ({
    slug: entry.slug,
  }));
}

export default async function Entry({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const response = fetchData(
    `{
      entry(slug: "${slug}") {
        ... on blog_post_Entry {
          id
          title
          slug
          featureImage {
            id
            url
          }
        }
      }
    }`
  );

  const entryData = await response;

  return (
    <main>
      <div className={"flex w-full relative"}>
        <AnimatedImage
          id={entryData.entry.id}
          src={entryData.entry.featureImage[0].url}
        />
      </div>

      <PostWrapper className="max-w-screen-xl container mx-auto flex flex-col">
        <PostTitle>{entryData.entry.title}</PostTitle>

        <Link href="/" scroll={false} className="underline">
          go back{" "}
        </Link>
      </PostWrapper>
    </main>
  );
}
