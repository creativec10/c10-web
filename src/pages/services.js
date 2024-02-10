import AppLayout from "@/Components/AppLayout";
import { ourservices_2 } from "@/Content/OurServices";

export default function About() {
  return (
    <AppLayout>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pt-5 mt-5">
            <div class="unique-content-area">
              <div class="section-title brand">
                <h4 class="title text-center">Revolutionize Your Business with Cloud10 </h4>
                <p>
                  At Cloud10, our focus is on providing exceptional service to guide your business
                  through its digital transformation journey. Our dedicated team of passionate
                  technology experts is committed to assisting you in assembling a customized team
                  that aligns perfectly with your specific requirements. Our mission is to support
                  organizations in revitalizing their operations by leveraging state-of-the-art
                  technologies, ultimately fast-tracking their journey towards success.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shape">
              <div
                class="build-img bg-image-02 wow animate__ animate__backInUp  animated"
                // style='background-image: url("assets/img/unique-project/01.png"); visibility: visible; animation-name: backInUp;'
              ></div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <div id="what" className="build-area padding-top-120 padding-bottom-90">
          <div className="container">
            <div className="row">
              {ourservices_2.map((box, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="single-icon-box-04">
                    <div className="icon">
                      <i className={box.icon}></i>
                    </div>
                    <div className="content">
                      <h3 className="title">{box.title}</h3>
                      <p>{box.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
