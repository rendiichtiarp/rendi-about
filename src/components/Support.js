const Support = () => {
  return (
    <section className="support-section wow fadeInUp">
      <div className="container">
        <div className="support-items">
          <div className="row">
            {/* 01 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/user.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>16 Years old</h3>
                <p>Kelas 1 SMK</p>
              </div>
            </div>
            {/* 01 support item end */}
            {/* 02 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/girlfriend.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>500+ Testimoni</h3>
                <p>Terkenal di Discord</p>
              </div>
            </div>
            {/* 02 support item end */}
            {/* 03 support item start */}
            <div className="support-item">
              <div className="support-icon">
                <img
                  className="svg"
                  src="images/icons/support.svg"
                  alt="dora_img"
                />
              </div>
              <div className="support-text">
                <h3>Online</h3>
                <p>Kalo tidak sibuk</p>
              </div>
            </div>
            {/* 03 support item end */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
