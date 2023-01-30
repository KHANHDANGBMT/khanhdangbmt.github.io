import './assets/css/contact-me.css';

const ContactMe = () => {
  return (
    <div className="container contact-me-wrapper" id="contact">
      <h3 className="contact-me-header">03. What's Next?</h3>
      <p className="get-in-touch">Get In Touch</p>
      <p className="contact-me-description">
        My inbox is always open. Whether you have a question or just want to say
        hello, I'll try my best to get back to you! Feel free to mail me about
        any relevant job updates.
      </p>
      <a
        href="mailto:khanhdangbmt@gmail.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="contact-me-mail"
      >
        Mail Me
      </a>
    </div>
  );
};

export default ContactMe;
