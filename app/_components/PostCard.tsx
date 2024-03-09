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

export default async function PostCard({title, slug} : {title: string, slug: string}) {  
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/blog/${slug}`}><Button>Read More</Button></Link>
        
      </CardFooter>
    </Card>
  );
}
