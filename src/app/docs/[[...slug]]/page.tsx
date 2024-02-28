import { info } from "console"

export default function Docs({ params }: {
    params: {
        slug: string[],
    }
}) {
    console.info(`value of params: ${params.slug?.length}`);
    /**
     * slug is the name of rest parameter of slug folder inside docs directory
     * params value is an arra, it mean that params printed out, the output is all value inside an array
     * if there any error cannot reading property, just add optional chaining [?.]
     */
    return (
        <>
            <h1>Docs Main Page | The current is {params?.slug}</h1>
            <h4>Docs Main Page | The previous is { } and the current is { }</h4>
        </>
    )
}