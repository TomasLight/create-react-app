import React from "react";
import { Some } from "./Some";

interface IMyComponentProps {
    text: string;
}

type Props = IMyComponentProps;

const MyComponent = (props: Props) => {
    const { text } = props;

    return (
        <p style={{ color: "red" }}>
            {`${nameof<Some>(o => o.myProperty)}: ${text}`}
        </p>
    );
};

export { MyComponent };
