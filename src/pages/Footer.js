import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-lg-row pt-5 pb-4 gap-4 gap-lg-0">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 mb-lg-0"
          >
            <img
              src={require("../images/logo/logo.png")}
              alt="logo"
              className="mb-3 logo"
            />
            <p className="gray-100 mb-0">
              Please contact us if you have any specific <br className="d-none d-md-block" /> idea or request.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex flex-column flex-sm-row gap-4 gap-sm-5"
          >
            <div>
              <h6 className="gray-100 text-uppercase mb-3 fw-normal">
                Company
              </h6>
              <ul className="p-0 m-0">
                <li className="mb-2">How it works</li>
                <li className="mb-2">Market</li>
                <li className="mb-0">About Us</li>
              </ul>
            </div>
            <div>
              <h6 className="gray-100 text-uppercase mb-3 fw-normal">
                Socials
              </h6>
              <ul className="p-0 m-0">
                <li className="mb-2">Twitter</li>
                <li className="mb-2">Instagram</li>
                <li className="mb-0">Facebook</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-center justify-content-md-start gray-100 pt-3 border-top"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="mb-0 text-center text-md-start">© 2023 Renting-Platform. All rights reserved</p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
