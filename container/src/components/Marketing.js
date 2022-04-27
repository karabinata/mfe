import React, { useRef, useEffect } from 'react';

import { mount } from 'marketing/MarketingIndex';

const Marketing = () => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            mount(ref.current);
        }
    }, []);

    return <div ref={ref}></div>
}

export default Marketing;