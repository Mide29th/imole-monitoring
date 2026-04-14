import './ProjectGallery.css';

const projects = [
  {
    image: 'https://www.osunstate.gov.ng/wp-content/uploads/2024/11/IMG-20241127-WA0008-1024x575.jpg',
    category: 'Infrastructure',
    title: 'Dualisation of Old Garage – Okefia – Lameco Road',
    description: 'A critical arterial expansion project in Osogbo to ease traffic and boost urban commerce.'
  },
  {
    image: 'https://www.osunstate.gov.ng/wp-content/uploads/2023/10/IMG-20231017-WA0007-1024x683.jpg',
    category: 'Healthcare',
    title: 'Ilesa General Hospital Modernization',
    description: 'Upgrading primary and secondary health facilities to world-class standards across the state.'
  },
  {
    image: 'https://www.osunstate.gov.ng/wp-content/uploads/2024/12/Adeleke-Commissioning-1024x576.jpg',
    category: 'Urban Renewal',
    title: 'Smart Solar Street Lighting',
    description: 'Deployment of solar-powered lighting systems along state roads to enhance security and night-time economy.'
  },
  {
    image: 'https://www.osunstate.gov.ng/wp-content/uploads/2023/04/IMG-20230412-WA0004-1024x768.jpg',
    category: 'Grassroots',
    title: 'Statewide Borehole Project',
    description: 'Providing functional, clean water access to all 332 wards through solar-powered boreholes.'
  }
];

const ProjectGallery = () => {
  return (
    <section className="project-gallery section-padding" id="projects">
      <div className="container">
        <div className="project-gallery__header">
          <span className="project-gallery__label">Visual Progress</span>
          <h2 className="project-gallery__title">Project Gallery</h2>
          <p className="project-gallery__subtitle">
            A window into the physical transformation of Osun State under the "Imole" administration. 
            Tangible results at every corner.
          </p>
        </div>
        
        <div className="project-gallery__grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-card__image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <span className="project-card__category">{project.category}</span>
                  <div className="project-card__content">
                    <h3 className="project-card__project-title">{project.title}</h3>
                    <p className="project-card__project-desc">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
