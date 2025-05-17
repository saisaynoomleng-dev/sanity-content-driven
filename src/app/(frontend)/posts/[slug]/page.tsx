import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { myPortableTextComponent } from "@/sanity/myPortableTextComponent";
import { PortableText } from "next-sanity";
import Image from "next/image";
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
            {post?.mainImage?.asset?.url ? (
                <Image
                    src={urlFor(post.mainImage.asset.url)
                        .width(800)
                        .height(300)
                        .format("webp")
                        .url()}
                    width={800}
                    height={300}
                    alt={post.mainImage.alt || ""}
                    priority
                    className="w-full aspect-[800/300]"
                />
            ) : null}
            <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
            <hr />
            {post?.body && (
                <div className="prose">
                    <PortableText
                        value={post.body}
                        components={myPortableTextComponent}
                    />
                </div>
            )}
            <Link href="/posts">&larr; Return to Index</Link>
        </main>
    );
};

export default PostDetailPage;
