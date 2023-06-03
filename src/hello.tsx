import React, {FC, useEffect, useMemo, useState} from 'react';
import {Text} from "./Text";
import ReactDOM from "react-dom";
import createCache from '@emotion/cache'
import {CacheProvider} from "@emotion/react";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [ref, setRef] = useState<HTMLIFrameElement | null>(null)

    const cache = useMemo(() => {
        return createCache({
            key: 'emotion-cache-iframe',
            // NOTE insert to head
            container: ref?.contentDocument?.head
        })
    }, [ref])

    useEffect(() => {
        if (ref && cache && ref.contentDocument) {
            ReactDOM.render(<CacheProvider value={cache}>
                <Text/>
            </CacheProvider>, ref.contentDocument.body);
        }
    }, [ref, cache])

    return <div>
        <iframe ref={setRef}></iframe>
    </div>;
}
