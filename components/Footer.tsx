export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about reveal" id="about">
          <h3>About Us</h3>
          <p>
            The Impala Book Agencies is a solutions-driven printing company with a history of
            success connecting brands with consumers. While some companies simply provide
            products, The Impala Book Agencies provides integrated solutions that deliver your
            message, change perceptions and drive sales.
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
            <strong>Location:</strong> Impala Building, Ruai, Along Eastern Bypass, Behind Canan
            House
          </p>
          <p>
            <strong>P.O. Box:</strong> 60018-00200, Nairobi
          </p>
        </div>
      </div>
      <p className="copyright">
        © 2026 The Impala Book Agencies. All rights reserved.
      </p>
    </footer>
  );
}
