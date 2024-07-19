
import AuthenticatedNav from '@/common/components/authenticated-nav/authenticated-nav.component';
import AUTH from '@/common/constants/auth.constant';
import AiBoom from '@/components/ai-boom/aiBoom.component';
import React from 'react'

export default function Home(){
    return(
        <>
            <AuthenticatedNav />
            <AiBoom />
        </>
    );
}