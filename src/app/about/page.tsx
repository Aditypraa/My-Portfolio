import { AboutSection } from '@/sections/About'
import { ContactMeSection } from '@/sections/ContactMe'
import EducationSection from '@/sections/Education'
import SummarySection from '@/sections/Summary'
import { TapeSection } from '@/sections/Tape'
import { WorkSection } from '@/sections/Work'
import React from 'react'

function AboutPage() {
    return (
        <>
            <SummarySection />
            <TapeSection />
            <EducationSection />
            <WorkSection />
            <AboutSection />
            <ContactMeSection />
        </>
    )
}

export default AboutPage