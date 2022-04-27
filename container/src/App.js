import React, { useRef } from 'react';

import { mount } from 'marketing/MarketingIndex';
import { useEffect } from 'react';

const App = () => {
    const marketingContainer = useRef();

    useEffect(() => {
        if (marketingContainer.current) {
            mount(marketingContainer.current);
        }
    }, []);

    return <div ref={marketingContainer}></div>
}

export default App;