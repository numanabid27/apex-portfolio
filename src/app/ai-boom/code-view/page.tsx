
import AuthenticatedNav from '@/common/components/authenticated-nav/authenticated-nav.component';
import AUTH from '@/common/constants/auth.constant';
import AiBomView from '@/components/ai-boom/components/aiBoomView/index.component';

import React from 'react'

export default function Home(){
    return <>
        <AuthenticatedNav />
        {/* <AiBomView /> */}
    </>;
}