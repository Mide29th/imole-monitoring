import './Achievements.css';

const achievements = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
    title: 'Public Finance Reform',
    description:
      'Achieved a massive 94% growth in IGR (N27.7B to N54.7B) and reduced domestic debt by over 43.8% through digitized revenue collection.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: 'Education Revolution',
    description:
      'Rehabilitated 120 schools, restored tertiary bursaries, and powered a leap from 33rd to 7th in national NECO rankings.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <path d="M12 2v20" />
      </svg>
    ),
    title: 'Infrastructure Renewal',
    description:
      'Completed over 150km of roads including the Old Garage-Lameco dualisation, alongside major flyovers in Osogbo and Ile-Ife.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Healthcare Modernization',
    description:
      'Renovated 200+ Primary Healthcare Centres and upgraded the Ilesa General Hospital to world-class medical standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      </svg>
    ),
    title: 'Imole Agro-Revolution',
    description:
      'Acquired 31 new tractors, distributed 200,000+ hybrid seedlings, and empowered poultry farmers through the OBOPS scheme.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: 'Water for all Wards',
    description:
      'Provided functional, solar-powered boreholes in all 332 wards of the state, ensuring clean water access for every community.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Environmental Climate',
    description:
      'Moved from 30th to 6th in sub-national climate governance and ended seasonal flooding through holistic drainage reforms.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    title: 'Science & Innovation',
    description:
      'Launched the state fibre-optics broadband project and increased Google mapping coverage from 50% to over 60%.',
  },
];

const Achievements = () => {
  return (
    <section className="achievements section-padding" id="achievements">
      <div className="container">
        <div className="achievements__header">
          <span className="achievements__label">Comprehensive Progress</span>
          <h2 className="achievements__title">Achievements Across All Sectors</h2>
          <p className="achievements__subtitle">
            Under Governor Adeleke's leadership, Osun State is experiencing a 
            holistic transformation—rebuilding infrastructure, empowering citizens, 
            and modernizing governance.
          </p>
        </div>
        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <div
              className="achievement-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-card__icon">{item.icon}</div>
              <h3 className="achievement-card__title">{item.title}</h3>
              <p className="achievement-card__desc">{item.description}</p>
              <div className="achievement-card__divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
