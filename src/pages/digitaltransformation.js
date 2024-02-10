import AppLayout from "@/Components/AppLayout";

export default function Contact() {
  return (
    <AppLayout>
      <div>
        <div className="unique-project-area padding-top-120 padding-bottom-115">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-6">
                <div
                  className="shape"
                  // style="background-image: url(assets/img/unique-project/bg-02.png);"
                >
                  <div className="shape-02 style-01"></div>
                  <div
                    className="build-img bg-image-02 wow animate__ animate__backInUp animated"
                    // style='background-image: url("assets/img/unique-project/02.png"); visibility: visible; animation-name: backInUp;'
                  ></div>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="unique-content-area">
                  <div className="section-title brand">
                    <p>Great Experiences</p>
                    <h4 className="title">
                      Unlocking Success through Digital Transformation with Cloud10
                    </h4>
                    <p>
                      In today's rapidly evolving business landscape, staying competitive and
                      relevant requires more than just adapting to change—it demands embracing
                      digital transformation. At Cloud10, we specialize in guiding businesses on
                      their transformative journey, ensuring they harness the full potential of
                      modern technologies to secure their future success.
                    </p>
                    <ul className="content">
                      <li>
                        <i aria-hidden="true" className="fas fa-check"></i>Argument sounds very
                        appealing.
                      </li>
                      <li>
                        <i aria-hidden="true" className="fas fa-check"></i>Many predicted that the
                        saviour of publishing.
                      </li>
                      <li>
                        <i aria-hidden="true" className="fas fa-check"></i>Easily connect any
                        existing mailing list
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
