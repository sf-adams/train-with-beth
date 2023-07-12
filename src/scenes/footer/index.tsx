import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={logo} />
          <p className="my-5">
            This site is a proof of concept, and serves only as a portfolio
            piece. There is no fitness advice or commercial advice.
          </p>
          <p>© Train With Beth All Rights Reserved.</p>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col gap-4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            className=""
            href="https://www.instagram.com/bethmeller/?hl=en-gb&__coig_restricted=1"
          >
            Instagram
          </a>
          <a className="" href="https://github.com/sf-adams/trainwithbeth">
            GitHub
          </a>
          <a
            className=""
            href="https://www.instagram.com/bethmeller/?hl=en-gb&__coig_restricted=1"
          >
            Instagram
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Please reach out if you are interested in working together.</p>
          <p>contact@sf-adams.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
