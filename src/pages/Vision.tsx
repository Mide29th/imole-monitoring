import Footer from '../components/Footer';
import './Vision.css';

const visionAreas = [
  {
    number: '01',
    title: 'Infrastructure & Urban Development',
    description:
      'Continue the massive road construction programme, expand electricity access, and modernise urban centres across all 30 local governments. Build new bridges, upgrade water systems, and transform Osun into a model of modern infrastructure.',
  },
  {
    number: '02',
    title: 'Education & Human Capital',
    description:
      'Sustain free education at all levels, renovate schools, recruit more qualified teachers, and introduce technology-driven learning. Establish vocational centres and skill acquisition programmes for youth empowerment.',
  },
  {
    number: '03',
    title: 'Healthcare For All',
    description:
      'Upgrade primary healthcare centres across all local governments, recruit healthcare professionals, ensure availability of essential medicines, and introduce health insurance schemes accessible to every Osun resident.',
  },
  {
    number: '04',
    title: 'Agriculture & Food Security',
    description:
      'Expand mechanised farming, provide subsidised inputs to farmers, establish agro-processing zones, and create market linkages to ensure food security and make Osun a leading agricultural hub.',
  },
  {
    number: '05',
    title: 'Security & Community Safety',
    description:
      'Strengthen the state security architecture through community policing, investment in security technology, collaboration with federal agencies, and support for traditional security systems.',
  },
  {
    number: '06',
    title: 'Youth & Economic Empowerment',
    description:
      'Create jobs through strategic investments, attract industries, support small businesses with grants and low-interest loans, and build digital hubs to position Osun youth for the global economy.',
  },
];

const Vision = () => {
  return (
    <>
      <section className="vision">
        <div className="vision__hero">
          <div className="container">
            <span className="vision__label">Our Manifesto</span>
            <h1 className="vision__title">
              Our Vision for
              <span className="vision__title-accent"> Osun State</span>
            </h1>
            <p className="vision__intro">
              Our administration's vision is clear: to build an Osun State where every 
              citizen has access to quality education, affordable healthcare, modern 
              infrastructure, and economic opportunities. We are committed to 
              continuing the transformation that began when Imole arrived.
            </p>
          </div>
        </div>

        <div className="vision__content section-padding">
          <div className="container">
            <div className="vision__foreword">
              <h2 className="vision__foreword-title">Foreword</h2>
              <blockquote className="vision__quote">
                "When we said 'Imole ti de' — the light has come — it was not just 
                a slogan. It was a promise. A promise that every corner of Osun State 
                would feel the warmth of good governance, development, and progress. 
                Today, we have delivered on that promise, and we are just getting started."
              </blockquote>
              <p className="vision__quote-author">— Governor Ademola Adeleke</p>
            </div>

            <div className="vision__areas">
              <h2 className="vision__section-title">Key Policy Areas</h2>
              <div className="vision__grid">
                {visionAreas.map((area, i) => (
                  <div className="vision-card" key={i}>
                    <span className="vision-card__number">{area.number}</span>
                    <h3 className="vision-card__title">{area.title}</h3>
                    <p className="vision-card__desc">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Vision;
