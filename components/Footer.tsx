export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about reveal" id="about">
          <h3>About Us</h3>
          <p>
            The Impala Book Agencies is a leading manufacturer of high-quality exercise books for
            schools and businesses.
          </p>
        </div>
        <div className="contact reveal" id="contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+254114516684" style={{ color: "inherit" }}>
              0114 516 684
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:theimpalabook@gmail.com" style={{ color: "inherit" }}>
              theimpalabook@gmail.com
            </a>
          </p>
          <p>
            <strong>Location:</strong> Mombasa Road, Nairobi - Kenya
          </p>
        </div>
      </div>
      <p className="copyright">
        © 2025 The Impala Book Agencies. All rights reserved.
        <br />
        Developed by <a href="mailto:clairewangondu@gmail.com">Claire</a>
      </p>
    </footer>
  );
}
