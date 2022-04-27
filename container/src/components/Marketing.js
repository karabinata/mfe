import React, { useRef, useEffect } from 'react';

import { mount } from 'marketing/MarketingIndex';

const Marketing = () => {
    const marketingContainer = useRef();

    useEffect(() => {
        if (marketingContainer.current) {
            mount(marketingContainer.current);
        }
    }, []);

    return <div ref={marketingContainer}></div>
}

export default Marketing;