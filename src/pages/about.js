import AppLayout from "@/Components/AppLayout";
import Image from "next/image";

export default function About() {
  return (
    <AppLayout>
      <div id="why" className="unique-project-area">
        <div className="container">
          <div className="row  pt-5">
            <div className="col-lg-6">
              <div className="unique-content-area">
                <div className="section-title brand  pt-5">
                  <h4 className="title">Elevating Innovations, Transforming Futures at Cloud10</h4>
                  <p>
                    At Cloud10, we transcend the conventional boundaries of product development,
                    crafting solutions that redefine global operational paradigms. Our approach is
                    not just about building products; it's about creating a new way for the world to
                    operate, innovate, and grow.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="shape"
                // style="background-image: url(../assets/img/share/bg.png);"
              >
                <div class="build-img bg-image-02 wow animate__ animate__backInUp animated aboutus"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="unique-content-area">
                <div className="section-title brand  pt-5">
                  <p>
                    Our cadre of visionary professionals is passionately committed to actualizing
                    your revolutionary ideas. Through the provision of unparalleled hardware and
                    software development, deployment, and manufacturing services, we bring your most
                    ambitious visions to life. Our team's expertise and dedication ensure that every
                    project we undertake is executed with precision and excellence. Guided by an
                    unwavering dedication to innovation, Cloud10 is poised to enhance your product's
                    performance. We are committed to establishing a significant presence in your
                    sector and positioning your brand as a leader in the marketplace. Our focus on
                    cutting-edge technology and innovative strategies ensures that your product not
                    only meets the current market demands but sets new standards for excellence and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="get-started-area bg-image padding-bottom-120 pt-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="section-title brand desktop-center padding-bottom-50">
                  <h3 class="subtitle">
                    When we bridge the gap between utility and value, remarkable transformations
                    occur within your business.
                  </h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="started-single-item">
                  <div class="icon">
                    <i class="fa fa-bezier-curve"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Design.</h3>
                    <p>Unleash Creativity. Craft Excellence.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="started-single-item">
                  <div class="icon">
                    <i class="fa fa-lightbulb"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Innovate.</h3>
                    <p>Drive Innovation. Pioneer the Future.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="started-single-item">
                  <div class="icon">
                    <i class="fa fa-brain"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Transform.</h3>
                    <p>Prioritize Functionality. </p>
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
