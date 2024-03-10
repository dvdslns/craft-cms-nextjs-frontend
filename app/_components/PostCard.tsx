import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import AnimatedImage from "@/app/_components/AnimatedImage";

export default async function PostCard({
  title,
  slug,
  featureImageUrl,
  featureImageId,
}: {
  title: string;
  slug: string;
  featureImageUrl: string;
  featureImageId: string;
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Link href={`/blog/${slug}`} scroll={false}>
          <AnimatedImage id={featureImageId} src={featureImageUrl} />
        </Link>
        <CardTitle>
          <Link scroll={false} href={`/blog/${slug}`}>
            {title}
          </Link>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/blog/${slug}`} scroll={false}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
