const Experience = () => {
  return (
    <section className="experience-section" id="pelajaran">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <h2>Pelajaran yang di sukai</h2>
          <p>Jurusan Teknik Komputer dan Jaringan</p>
        </div>
        <div className="experience-items wow fadeInUp">
          {/* 01 experience item start */}
          <div className="experience-item">
            <div className="experience-info">
              <p>Matematika</p>
              <p>85%</p>
            </div>
            <div className="progress-line" data-percent="85%">
              <span />
            </div>
          </div>
          {/* 01 experience item end */}
          {/* 02 experience item start */}
          <div className="experience-item">
            <div className="experience-info">
              <p>Sistem Komputer</p>
              <p>76%</p>
            </div>
            <div className="progress-line" data-percent="76%">
              <span />
            </div>
          </div>
          {/* 02 experience item end */}
          {/* 03 experience item start */}
          <div className="experience-item">
            <div className="experience-info">
              <p>Komputer Jaringan Dasar</p>
              <p>100%</p>
            </div>
            <div className="progress-line" data-percent="100%">
              <span />
            </div>
          </div>
          {/* 03 experience item end */}
          {/* 04 experience item start */}
          <div className="experience-item">
            <div className="experience-info">
              <p>Simulasi Digital</p>
              <p>96%</p>
            </div>
            <div className="progress-line" data-percent="96%">
              <span />
            </div>
          </div>
          {/* 04 experience item end */}
          {/* 05 experience item start */}
          <div className="experience-item">
            <div className="experience-info">
              <p>Desain Dasar Grafis</p>
              <p>92%</p>
            </div>
            <div className="progress-line" data-percent="92%">
              <span />
            </div>
          </div>
          {/* 05 experience item end */}
        </div>
      </div>
    </section>
  );
};
export default Experience;
