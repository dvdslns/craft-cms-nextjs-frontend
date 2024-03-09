import { useRouter } from "next/navigation";
import { fetchData } from "@/app/_lib/data";
import { BlogEntry } from "@/app/_lib/definitions";
import { Suspense } from "react";

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


export default async function Entry({ params } : { params: { slug: string } }) {
  const { slug } = params;

  const response = fetchData(
    `{
      entry(slug: "${slug}") {
        id
        title
      }
    }`
  );

  const entryData = await response
  

  return (
    <div>
      <Suspense>
        <h1>{entryData.entry.title}</h1>
      </Suspense>
      <h2>hallo</h2>
    </div>
  );
}
