import React from 'react';
import { Card } from 'primereact/card';

const ProjetsCard = ({ title, location, projets }) => {
    return (
        <div>
            <Card title={title} subTitle={location}>
                <div>
                    <h5>Projets:</h5>
                    <ul>
                        {projets.map((projet, index) => (
                            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ flex: 1 }}>
                                    <div>{projet.titre}</div>
                                    <b>Technologie :</b> {projet.technologie}
                                    <br />
                                    <b>Git Hub / Demo youtube :</b>{" "}
                                    <a href={projet.github} target="_blank" rel="noopener noreferrer">
                                        {projet.github}
                                    </a>
                                </div>
                                {/* <div>
                                    <img src={projet.image} alt={projet.titre} style={{ width: '100px', height: '100px' }} />
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
            <br />
        </div>
    );
};

const Projets = () => {
    const experienceData = [
        {
            title: 'PFA',
            location: 'ENSAJ',
            projets: [
                {
                    titre: "Application de Gestion des demandes de doculents administratifs",
                    technologie: 'PHP',
                    github: 'https://absence.esefj.ma/public/index.php',
                    // image: './components/images/dd.jpg',
                },
            ],
        },
        {
            title: "Gestion des salles ",
            location: 'ENSAJ',
            projets: [
                {
                    titre: 'Projet de gestion des salles au sein de l ENSAJ',
                    technologie: 'Laravel',
                    github: 'https://github.com/roaeldhimni/Laravel',
                    // image: './components/images/dd.jpg',
                },
            ],
        },
        {
            title: 'FP Sidi Bennour',
            location: 'ENSAJ',
            projets: [
                {
                    titre: "Création d'un Site Web pour la Faculté Polydisciplinaire Sidi Bennour",
                    technologie: 'Wordpress 5',
                    github: 'https://youtu.be/ArksZlAnRIg',
                    // image: 'chemin/vers/image3.jpg',
                },
            ],
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ProjetsCard
                    key={index}
                    title={experience.title}
                    location={experience.location}
                    projets={experience.projets}
                />
            ))}
        </section>
    );
};

export default Projets;
