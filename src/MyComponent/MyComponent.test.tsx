import React from "react";
import { render } from '@testing-library/react';
import { MyComponent } from './MyComponent';

it("check render", () => {
    const text = "some text";
    const component = (
        <MyComponent text={text} />
    );

    const { container, getByText } = render(component);
    expect(container).toMatchSnapshot();
    expect(getByText(text)).toBeVisible();
});
