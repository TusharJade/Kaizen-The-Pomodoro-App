import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          Made with <i className="fa-solid fa-code code-icn"></i> by Tushar Jade
        </div>
        <div className="footer-mid-text">
          <i className="fa-solid fa-copyright"></i> Kaizen 2022
        </div>
        <div className="footer-container">
          <a
            href="https://github.com/TusharJade"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github footer-icn"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-jade-a5aa33183/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin footer-icn"></i>
          </a>
          <a
            href="https://twitter.com/TusharJade99"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-twitter footer-icn"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export { Footer };
