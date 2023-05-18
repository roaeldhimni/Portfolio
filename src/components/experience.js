import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, location, duree, sujet, technologie }) => {
    return (
        <Card title={title}  footer={location} className="md:w-25rem">
            <div>
                <div><b>Sujet : </b> {sujet}</div>
                <div><b>Technologie : </b>{technologie}</div>
                <div><b>Duree : </b>{duree}</div>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Stage de la passation des marchés publiques',
            duree: '15 jours',
            location: 'Bureau des affaires administratives et publiques au ministère de la jaunesse et des sports',
            // technologie: 'reacts js, mongodb',
            sujet: 'Projet de restauration des colonies de vacances ',
        },
        
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    duree={experience.duree}
                    location={experience.location}
                    sujet={experience.sujet}
                    // technologie={experience.technologie}
                />
            ))}
        </section>
    );
};

export default Experiences;
