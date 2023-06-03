import {css} from '@emotion/react'

import React, {FC} from 'react';

type Props = {};

export const Text: FC<Props> = ({}) => {
    return <div>
        <h1 css={css`color: red`}>Hello React</h1>
    </div>;
}
