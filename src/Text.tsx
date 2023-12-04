import { ClassNames } from '@emotion/react';

import React, { FC, useCallback } from 'react';

type Props = {};

export const Text: FC<Props> = ({}) => {
    return <ClassNames>
        {useCallback(({css}) => <div>
            <h1 className={css`color: red`}>Hello React</h1>
        </div>, [])}
    </ClassNames>;
}
