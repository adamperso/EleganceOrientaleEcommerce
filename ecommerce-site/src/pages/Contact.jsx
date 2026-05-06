import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contactez-nous</h1>
          <p>Notre équipe est à votre disposition pour toute question</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Nos Coordonnées</h2>
            <p>Vous pouvez nous contacter par différents moyens</p>

            <div className="info-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>contact@luxeshop.com</p>
              </div>
            </div>

            <div className="info-item">
              <Phone size={24} />
              <div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h3>Adresse</h3>
                <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
              </div>
            </div>

            <div className="hours">
              <h3>Horaires d'ouverture</h3>
              <p>Lundi - Vendredi: 9h00 - 18h00</p>
              <p>Samedi: 10h00 - 17h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Envoyez-nous un Message</h2>
            
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Envoyer le Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
