import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const PostsPage = async () => {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <h1 className="text-4xl font-bold">Post Index</h1>
            <ul className="grid-grid-cols-1 divide-y divide-blue-100">
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link
                            className="block p-4 hover:text-blue-500"
                            href={`/posts/${post?.slug?.current}`}
                        >
                            {post?.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Link href="/">&larr; Return Home</Link>
        </main>
    );
};

export default PostsPage;
