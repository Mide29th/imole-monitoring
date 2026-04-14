import Footer from '../components/Footer';
import './Story.css';

const Story = () => {
  return (
    <>
      <section className="story">
        <div className="story__hero">
          <div className="container">
            <span className="story__label">About the Governor</span>
            <h1 className="story__title">Adeleke's Story</h1>
            <p className="story__intro">
              From humble beginnings to the highest office in Osun State — 
              the journey of a man committed to the service of his people.
            </p>
          </div>
        </div>

        <div className="story__content section-padding">
          <div className="container">
            <div className="story__layout">
              <div className="story__portrait-section">
                <div className="story__portrait-wrapper">
                  <img
                    src="/governor-portrait.jpg"
                    alt="Governor Ademola Adeleke"
                    className="story__portrait-img"
                  />
                </div>
              </div>

              <div className="story__narrative">
                <div className="story__section">
                  <h2 className="story__section-title">A Son of the Soil</h2>
                  <p>
                    Senator Ademola Jackson Nurudeen Adeleke, fondly known as "Imole" 
                    (The Light), is the Executive Governor of Osun State. Born into 
                    the illustrious Adeleke family of Ede, he carries a deep connection 
                    to the people of Osun and brings both humility and vision to the 
                    office of Governor.
                  </p>
                  <p>
                    His journey from business and philanthropy into politics was driven 
                    by a singular desire: to serve his people and bring the dividends 
                    of democracy to every corner of Osun State. His warmth, accessibility, 
                    and genuine love for the people quickly earned him the affection of 
                    the masses.
                  </p>
                </div>

                <div className="story__section">
                  <h2 className="story__section-title">The Dancing Governor</h2>
                  <p>
                    Known for his infectious energy and joyful spirit, Governor Adeleke 
                    broke barriers and redefined what it means to connect with the common 
                    person. His famous dance moves became a symbol of hope — a reminder 
                    that leadership can be both serious and joyful, both dignified and 
                    accessible.
                  </p>
                  <p>
                    But behind the charisma lies a deeply committed leader — one who 
                    has worked tirelessly from his very first day in office to transform 
                    Osun State's infrastructure, education system, healthcare delivery, 
                    and economic landscape.
                  </p>
                </div>

                <div className="story__section">
                  <h2 className="story__section-title">A Record of Transformation</h2>
                  <p>
                    Since taking office, Governor Adeleke's administration has been 
                    marked by unprecedented development. From the construction and 
                    rehabilitation of roads across all 30 local government areas, to 
                    the restoration of workers' welfare through prompt salary payments, 
                    the impact of his leadership is felt in every household.
                  </p>
                  <p>
                    His commitment to education has led to the renovation of schools 
                    statewide, the recruitment of teachers, and the restoration of 
                    free education at all levels. In healthcare, his government has 
                    upgraded facilities, recruited medical professionals, and ensured 
                    that no Osun citizen is denied access to basic healthcare.
                  </p>
                </div>

                <div className="story__section">
                  <h2 className="story__section-title">Continuing the Light</h2>
                  <p>
                    As Governor Adeleke seeks re-election under the Accord party, 
                    his mission remains unchanged: to continue building an Osun State 
                    where every citizen — regardless of origin, religion, or social 
                    status — has access to opportunities and the promise of a 
                    brighter future.
                  </p>
                  <p>
                    "Imole ti de" — the light has come. And it will continue to shine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Story;
