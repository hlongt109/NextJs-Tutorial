import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href={"/products"}>Product </Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English </Link>
      <Link href={"/articles/breaking-news-123?lang=fr"}>Read in French </Link>
    </>
  );
}
