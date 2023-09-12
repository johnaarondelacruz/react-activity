import "./index.css";

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>Please fill up this form</p>
      <div className="contact-container">
        <form>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="Your first name" />
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Your last name" />
          <label htmlFor="">Your Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
