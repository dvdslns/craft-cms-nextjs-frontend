import { fetchData } from "@/app/_lib/data";
import { BlogEntry } from "@/app/_lib/definitions";
import PostCard from "@/app/_components/PostCard";

async function getEntries() {
  const data = await fetchData(`
  {
    blogEntries {
      ... on blog_post_Entry {
        id
        title
        slug
        featureImage {
          id
          alt
          url
        }
      }
    }
  }
  `);

  return data;
}

export default async function PostListing() {
  const blogsData = await getEntries();
  return (
    <div className="grid grid-cols-3 gap-8">
      {blogsData.blogEntries.map((entry: BlogEntry) => {
        return (
          <PostCard
            key={entry.id}
            title={entry.title}
            slug={entry.slug}
            featureImageId={entry.featureImage[0].id}
            featureImageAlt={entry.featureImage[0].alt}
            featureImageUrl={entry.featureImage[0].url}
          />
        );
      })}
    </div>
  );
}
