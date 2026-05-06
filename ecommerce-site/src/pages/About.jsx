import { Heart, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>À Propos de LuxeShop</h1>
          <p>Votre destination premium pour le shopping en ligne</p>
        </div>

        <section className="about-content">
          <div className="about-text">
            <h2>Notre Histoire</h2>
            <p>
              Fondée en 2024, LuxeShop est née d'une vision simple : offrir une expérience 
              d'achat en ligne exceptionnelle avec une sélection rigoureuse de produits premium. 
              Nous croyons que le shopping en ligne doit être aussi raffiné qu'en boutique physique.
            </p>
            <p>
              Notre équipe passionnée parcourt le monde entier pour dénicher les meilleurs produits, 
              alliant qualité, design et durabilité. Chaque article de notre collection est choisi 
              avec soin pour répondre aux exigences de nos clients les plus discernants.
            </p>
          </div>

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" alt="Notre équipe" />
          </div>
        </section>

        <section className="values-section">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <Heart size={48} />
              <h3>Passion</h3>
              <p>Nous aimons ce que nous faisons et cela se reflète dans chaque aspect de notre service</p>
            </div>
            <div className="value-card">
              <Users size={48} />
              <h3>Service Client</h3>
              <p>Une équipe dédiée disponible 7j/7 pour vous accompagner dans vos achats</p>
            </div>
            <div className="value-card">
              <Award size={48} />
              <h3>Excellence</h3>
              <p>La quête permanente de la qualité et de la satisfaction client</p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Clients Satisfaits</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Produits Premium</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Taux de Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support Client</p>
          </div>
        </section>
      </div>
    </div>
  );
}
