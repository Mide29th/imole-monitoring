import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { updateItems } from '../data/updates';
import './UpdateDetail.css';

const UpdateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = updateItems.find((u) => u.id === Number(id));

  useEffect(() => {
    if (!item) {
      navigate('/updates');
    }
    window.scrollTo(0, 0);
  }, [item, navigate]);

  if (!item) return null;

  return (
    <>
      <section className="update-detail">
        <div className="update-detail__hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 51, 32, 0.8), rgba(0, 31, 20, 0.95)), url(${item.image})` }}>
          <div className="container">
            <Link to="/updates" className="update-detail__back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Updates
            </Link>
            <div className="update-detail__meta">
              <span className="update-detail__category">{item.category}</span>
              <span className="update-detail__date">{item.date}</span>
            </div>
            <h1 className="update-detail__title">{item.title}</h1>
          </div>
        </div>

        <div className="update-detail__content section-padding">
          <div className="container container--narrow">
            <div className="update-detail__article">
              {item.content.map((paragraph, index) => (
                <p key={index} className="update-detail__text">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="update-detail__footer">
              <div className="update-detail__share">
                <span className="update-detail__share-label">Share this update</span>
                <div className="update-detail__share-links">
                  {/* Placeholder share icons */}
                  <button className="share-btn" aria-label="Share on Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="share-btn" aria-label="Share on Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <Link to="/updates" className="btn btn-outline">
                View All Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UpdateDetail;
