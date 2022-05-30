import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <section className="landing-container">
        <div className="main-img-container">
          <img src="/assets/time1.jpg" className="landing-img" alt="error" />
          <div className="text-container-outerbox">
            <div className="text-container">
              <div className="heading-text-question">Why do we use it ?</div>
              <div className="line"></div>
              <div className="heading-text-answer">
                The Pomodoro technique is a popular way to track and improve
                your productivity. Using this method, you break your workday
                into 25 minute chunks separated by five minute breaks
              </div>
              <button className="btn-get-started">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { LandingPage };
