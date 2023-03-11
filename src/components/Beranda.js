const Beranda = () => {
  return (
    <section className="hero-section" id="beranda">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Halo, Saya</span>
            <h1>Rendi Ichtiar P</h1>
            <h3>Pelajar Sekolah Menengah Kejuruan</h3>
            <p>
              Seorang pelajar SMK yang tertarik dengan jurusan Teknik Komputer dan Jaringan
            </p>
            <div className="hero-btn-container">
              <a href="https://wa.me/+6285891742650" className="btn primary-btn">
                Whatsapp
              </a>
              <a href="https://goo.gl/maps/oqon1E4HUQjCkT6g9" className="btn secondary-btn">
                Alamat
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src="images/fotorendi.png"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Beranda;
