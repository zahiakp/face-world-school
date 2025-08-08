"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const PageLoader = () => {
    return (
<ProgressBar
        height="4.5px"
        color={"#0D2E2C"}
        options={{ showSpinner: false }}
        shallowRouting
      />
    );
}

export default PageLoader; 
