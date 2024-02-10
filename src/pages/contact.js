import AppLayout from "@/Components/AppLayout";

export default function Contact() {
  return (
    <AppLayout>
      <div className="contact-inner-area padding-bottom-90 pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="content-area">
                <div className="section-title padding-bottom-25">
                  <h4 className="title">Let’s scale your product, together</h4>
                </div>
                <div className="single-contact-item-02">
                  <div className="icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="content">
                    <p className="details">+91 99522 26814</p>
                  </div>
                </div>
                <div className="single-contact-item-02">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="content">
                    <p className="details">contact@c10.in</p>
                  </div>
                </div>
                <div className="single-contact-item-02">
                  <div className="icon">
                    <i className="flaticon-pin"></i>
                  </div>
                  <div className="content">
                    <p className="details">9, K K Salai, K K Nagar, Chennai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-form style-01">
                <form
                  action="contact.php"
                  id="contact_page_form"
                  className="contact-page-form"
                  method="post"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Type Name"
                          className="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone">
                          Phone <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Type Phone Number"
                          className="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          Email Address <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Type Email Address"
                          className="form-control"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          How can we help? <span>*</span>
                        </label>
                        <textarea
                          name="message"
                          id="msg"
                          cols="1"
                          rows="4"
                          placeholder="Type Desciption"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" value="Send Message" className="submit-btn" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
