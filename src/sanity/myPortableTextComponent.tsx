import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "./lib/image";

export const myPortableTextComponent: PortableTextComponents = {
    types: {
        image: (props) =>
            props.value ? (
                <Image
                    src={urlFor(props.value)
                        .width(600)
                        .height(400)
                        .format("webp")
                        .url()}
                    width={600}
                    height={400}
                    className="rounded-sm mx-auto w-full"
                    alt={props?.value?.alt || ""}
                    priority
                />
            ) : null,
    },
};
