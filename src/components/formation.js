import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Baccalauréat Sciences Mthématiques A",
            ecole: " Lycée IHSANE",
            annees: "2019-2020",
        },
        {
            diplome: "Classes Préparatoires Intégrées",
            ecole: "Ecole Nationale des Sciences Appliquées d'El Jadida ENSAJ",
            annees: "2020 - 2022",
        },
        
        {
            diplome: "Ingénierie Informatique et les Technologies Emergentes",
            ecole: "Ecole Nationale des Sciences Appliquées d'El Jadida ENSAJ",
            annees: "2022 - jusqu'a présent",
        }
       
       
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.ecole}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
