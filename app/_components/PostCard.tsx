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
  featureImageAlt,
}: {
  title: string;
  slug: string;
  featureImageUrl: string;
  featureImageId: string;
  featureImageAlt: string;
}) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Link href={`/blog/${slug}`}>
          <AnimatedImage id={featureImageId} src={featureImageUrl} alt={featureImageAlt} isThumb />
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
        <Link href={`/blog/${slug}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
