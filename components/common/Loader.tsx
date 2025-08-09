"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const PageLoader = () => {
    return (
<ProgressBar
        height="4.5px"
        color={"#CEFFAE"}
        options={{ showSpinner: false }}
        shallowRouting
      />
    );
}

export default PageLoader; 
