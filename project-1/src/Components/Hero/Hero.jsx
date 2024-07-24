import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <aside className="information">
          <h1>
            YOUR FEET <br /> DESERVE <br /> THE BEST
          </h1>
          <p className="info">
            Your feet deserve the best and we are here to help you with our
            shoes. Your feet deserve the best and we are here to help you with
            our shoes.
          </p>
          <div className="buttons">
            <button className="btn">Shop Now</button>
            <button className="btn category">Category</button>
          </div>

          <div className="available-place">
            <p>Also Available On</p>
            <div className="links">
              <img src="/images/flipkart.png" alt="" />
              <img src="/images/amazon.png" alt="" />
            </div>
          </div>
        </aside>

        <div className="hero-img">
          <img src="/images/hero-image.png" alt="hero-image" />
        </div>
      </section>
    </>
  );
}

export default Hero;
