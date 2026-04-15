import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { updateItems } from '../data/updates';
import './Updates.css';

const Updates = () => {
  return (
    <>
      <section className="updates">
        <div className="updates__hero">
          <div className="container">
            <span className="updates__label">Latest News</span>
            <h1 className="updates__title">
              Stay Updated with the 
              <span className="updates__title-accent"> Imole Movement</span>
            </h1>
            <p className="updates__intro">
              The latest reports on infrastructure, education, and our journey toward 
              a brighter Osun. Follow the progress as we continue to deliver on our 
              promises to the people.
            </p>
          </div>
        </div>

        <div className="updates__content section-padding">
          <div className="container">
            <div className="updates__grid">
              {updateItems.map((item) => (
                <article className="update-card" key={item.id}>
                  <div className="update-card__image-wrapper">
                    <img src={item.image} alt={item.title} className="update-card__image" />
                    <span className="update-card__category">{item.category}</span>
                  </div>
                  <div className="update-card__content">
                    <span className="update-card__date">{item.date}</span>
                    <h2 className="update-card__title">{item.title}</h2>
                    <p className="update-card__excerpt">{item.excerpt}</p>
                    <Link to={`/updates/${item.id}`} className="update-card__link">
                      Read Full Story
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Updates;
