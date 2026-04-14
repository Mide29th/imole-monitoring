import './ImpactStats.css';

const stats = [
  {
    label: 'IGR Growth',
    value: '94%',
    subtext: 'N27.7B to N54.7B in one year',
    trend: 'up'
  },
  {
    label: 'NECO Performance',
    value: '33rd → 7th',
    subtext: 'Leap in National Rankings',
    trend: 'up'
  },
  {
    label: 'Debt Reduction',
    value: '43.8%',
    subtext: 'Domestic Debt Cleared/Reduced',
    trend: 'down'
  },
  {
    label: 'Climate Governance',
    value: '30th → 6th',
    subtext: 'Sub-national Climate Ranking',
    trend: 'up'
  }
];

const ImpactStats = () => {
  return (
    <section className="impact-stats">
      <div className="container">
        <div className="impact-stats__grid">
          {stats.map((stat, index) => (
            <div 
              className="stat-card" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="stat-card__content">
                <span className="stat-card__label">{stat.label}</span>
                <div className="stat-card__value-group">
                  <h3 className="stat-card__value">{stat.value}</h3>
                  <div className={`stat-card__indicator ${stat.trend}`}>
                    {stat.trend === 'up' ? '▲' : '▼'}
                  </div>
                </div>
                <p className="stat-card__subtext">{stat.subtext}</p>
              </div>
              <div className="stat-card__bg-icon">
                {stat.label.includes('IGR') ? '$' : 
                 stat.label.includes('NECO') ? '🎓' : 
                 stat.label.includes('Debt') ? '📉' : '🌍'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
