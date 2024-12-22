import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime}).default;
}

const components = { // we can use this to add custom components to the blog page such as custom style to the page 
    Image,
    Callout,
}

interface MdxProps {
    code: string
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;
}