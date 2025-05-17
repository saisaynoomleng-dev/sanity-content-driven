import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";

const PostDetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) notFound();

    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
            <hr />
            <Link href="/posts">&larr; Return to Index</Link>
        </main>
    );
};

export default PostDetailPage;
