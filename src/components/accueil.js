
import React from "react";
import { Card } from 'primereact/card';

function Accueil() {
    return (
        <section className="section">
            <Card title="EL DHIMNI ROA">
                <p className="m-0"> En tant qu'étudiante en génie informatique, mon intérêt pour l'informatique a commencé dès mon plus jeune âge et s'est développé au fil de mes études. J'ai acquis une solide expertise en programmation, en conception de systèmes informatiques et en résolution de problèmes complexes.

Pendant mes études, j'ai eu l'occasion de participer à des projets pratiques qui m'ont permis de mettre en pratique mes compétences techniques et de travailler en équipe. Ces projets m'ont offert une expérience précieuse dans la collaboration avec d'autres étudiants pour développer des solutions informatiques innovantes.

Je suis constamment à la recherche de nouvelles connaissances et d'opportunités pour approfondir mes compétences en génie informatique. Je suis passionnée par les dernières avancées technologiques et je reste à l'affût des tendances émergentes dans le domaine de l'informatique.

Mon objectif est de continuer à développer mes compétences en programmation et en conception de systèmes, tout en explorant de nouvelles technologies et en repoussant les limites de ce qui est possible dans le domaine de l'informatique. Je suis prête à relever de nouveaux défis et à contribuer de manière significative à des projets innovants.

En résumé, en tant qu'étudiante en génie informatique passionnée, j'ai acquis une solide expertise en programmation et en conception de systèmes informatiques. Je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences et contribuer de manière significative à des projets informatiques innovants.
               </p>
                <br></br>
            </Card>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <a
                    href="https://drive.google.com/file/d/1GinH0fGyg5nR1Mut6dUsD8DPE5Ux6mKT/view?usp=share_link&export=download"
                    
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#4b0082",
                        color: "white",
                        borderRadius: "5px",
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                >
                    Télécharger mon CV
                </a>
            </div>
        </section>
    );
}

export default Accueil;
