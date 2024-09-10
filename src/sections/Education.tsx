import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import educationsData from '@/data/educationsData'

function EducationSection() {
    return (
        <div className='py-16 lg:py-24'>
            <section className="container">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <SectionHeader
                        title="Education"
                        eyebrow="My Background"
                        description="I've completed my education in the following institutions."
                    />

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {educationsData.map((education, index) => (
                            <div key={index}
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                            >
                                <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
                                    <education.avatar className='size-10' />
                                </div>

                                <h2 className="mt-4 text-xl max-[380px]:text-sm sm:text-sm md:text-xl font-bold text-white">{education.major}</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    {education.title}
                                </p>
                                <p className="mt-1 text-sm text-gray-300">
                                    {education.year}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EducationSection