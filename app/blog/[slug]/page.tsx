import { fetchData } from "@/app/_lib/data";
import { BlogEntry } from "@/app/_lib/definitions";
import AnimatedImage from "@/app/_components/AnimatedImage";
import Link from "next/link";
import  { PostTitle, PostWrapper, PostContent } from "@/app/_components/PostComponents";

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
            alt
            url
          }
          postContent {
            ... on postContent_text_BlockType {
              id
              typeHandle
              text
            }
            ... on postContent_image_BlockType {
              id
              typeHandle
              image {
                id
                alt
                url
              }
            }
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
          alt={entryData.entry.featureImage[0].alt}
        />
      </div>

      <PostWrapper className="max-w-prose mx-auto flex flex-col post-wrapper py-20">
        <PostTitle>{entryData.entry.title}</PostTitle>

        <PostContent postContentData={entryData.entry.postContent} />

        <Link href="/" className="underline">
          go back{" "}
        </Link>
      </PostWrapper>
    </main>
  );
}
