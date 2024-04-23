import { link } from 'node:fs'
import { PiCards } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { CenterAlignColumns, TwoToOneGrid } from '../../components/Layout/Columns.layout'
import { WidePageLayout } from '../../components/Layout/Page.layout'
import { TbLink } from 'react-icons/tb'
import TECHCLUBS from '../../data/berkeleytechclubs.json'
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

const options = [
    { label: 'animation', value: 'animation' },
    { label: 'architecture', value: 'architecture' },
    { label: 'artificial intelligence', value: 'artificial intelligence' },
    { label: 'blockchain design', value: 'blockchain design' },
    { label: 'city planning', value: 'city planning' },
    { label: 'consulting', value: 'consulting' },
    { label: 'computer science', value: 'computer science' },
    { label: 'creative strategy', value: 'creative strategy' },
    { label: 'data science', value: 'data science' },
    { label: 'decal', value: 'decal' },
    { label: 'education', value: 'education' },
    { label: 'engineering', value: 'engineering' },
    { label: 'environmental', value: 'environmental' },
    { label: 'fashion', value: 'fashion' },
    { label: 'film/media', value: 'film/media' },
    { label: 'game design', value: 'game design' },
    { label: 'graphic design', value: 'animation' },
    { label: 'human-centered design', value: 'human-centered design' },
    { label: 'industrial design', value: 'industrial design' },
    { label: 'literature', value: 'literature' },
    { label: 'photo', value: 'photo' },
    { label: 'product design', value: 'product design' },
    { label: 'programming', value: 'programming' },
    { label: 'social good', value: 'social good' },
    { label: 'virtual reality', value: 'virtual reality' },
    { label: 'visual arts', value: 'visual arts' },
    { label: 'web design', value: 'web design' },
    { label: 'other', value: 'other' },
];

const ClubFilter = () => {
    const [selected, setSelected] = useState<any[]>([]);

    var selectedClubs = TECHCLUBS.filter(function (club) {
        for (let s of selected.map(function (x) {return x.label;})) {
            if ((club.Tags.includes(s))) {
                return true;
            }
        }
        return false;
    }).map(({ Name, Tags, Link }) => {
        return {
            name: Name,
            tags: Tags,
            link: Link,
        }
    })

    return (
        <div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
            <ClubSection key='techclubs' clubs={selectedClubs} />
        </div>

    );
};

const TechClubs = () => {
    return (
        <WidePageLayout>
            <div>
                <h1>Tech Clubs</h1>
                <h5 className='py-4'>
                    Find a tech club to join! Select from the list of tags below.
                </h5>
                <ClubFilter></ClubFilter>
            </div>
        </WidePageLayout>
    )
}

export default TechClubs;

const ClubSection = ({
    clubs,
}: {
    clubs: { name: string; tags: string; link: string }[]
}) => {
    return (
        <section className='flex gap-10 flex-col mt-10'>

            <ul className='mb-8 flex gap-10 flex-wrap justify-between'>
                {clubs.map(({ name, tags, link }) => {
                    return (
                        <div className='text-left w-56 bg-white shadow-card duration-300 hover:shadow-card-hover ease-out p-6 rounded-xl animate-showing relative'>
                            <h5 className='font-bold'>{name}</h5>
                            <span className='text-xs font-medium block text-sky-800 rounded-md'>
                                {tags}
                            </span>
                            <TbLink className="text-accent list-none text-sm cursor-pointer whitespace-nowrap inline" /> <a className="text-accent list-none text-sm cursor-pointer whitespace-nowrap" href={link}>Link</a>
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}
