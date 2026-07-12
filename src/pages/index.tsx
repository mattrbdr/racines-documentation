import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const sections = [
  {title: 'Démarrer', description: 'Les premiers repères pour prendre en main Racines.', to: '/docs/demarrer'},
  {title: 'Acheter', description: 'Rechercher, commander et récupérer des produits locaux.', to: '/docs/acheter'},
  {title: 'Gérer une organisation', description: 'Membres, paramètres, accès et facturation.', to: '/docs/gerer-une-organisation'},
  {title: 'Gérer une boutique', description: 'Catalogue, créneaux, publication et commandes.', to: '/docs/gerer-une-boutique'},
  {title: 'Piloter son activité', description: 'Indicateurs, clients, campagnes et territoire.', to: '/docs/piloter-son-activite'},
  {title: 'Développeurs', description: 'Ressources techniques et intégrations Racines.', to: '/docs/developpeurs'},
  {title: 'Aide', description: 'Résoudre les problèmes fréquents et contacter le support.', to: '/docs/aide'}
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Guides et ressources pour utiliser la plateforme Racines.">
      <main>
        <section className={styles.intro}>
          <div className="container">
            <p className={styles.eyebrow}>Racines</p>
            <Heading as="h1" className={styles.title}>
              Documentation
            </Heading>
            <p className={styles.lead}>
              Les guides pour utiliser Racines, gérer votre activité et intégrer
              la plateforme.
            </p>
            <p className={styles.warning} role="status">
              <strong>En cours de conception.</strong> Certaines informations ou
              rubriques peuvent être incomplètes.
            </p>
          </div>
        </section>

        <section className={styles.sections} aria-label="Rubriques de documentation">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Parcourir par besoin</Heading>
              <Link to="/docs/demarrer">Commencer par les bases →</Link>
            </div>
            <div className={styles.grid}>
              {sections.map((section) => (
                <Link className={styles.card} key={section.to} to={section.to}>
                  <Heading as="h3">{section.title}</Heading>
                  <p>{section.description}</p>
                  <span aria-hidden="true">Consulter →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
