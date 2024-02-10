import AppLayout from "@/Components/AppLayout";
import { ourservies, workItems } from "@/Content/OurServices";
import imagePath from "../assets/images/bg-02.png";
export default function Home() {
  // const imagePath = "../assets/img/bg/businesstech/bg-02.png";

  return (
    <AppLayout>
      <div id="idea" className="build-area p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title desktop-center margin-bottom-55">
                <h3 className="title social-title text-uppercase">
                  Our Motto
                  <span className="pt-3 d-block">Integrate, Architect, Innovate, Plan</span>
                </h3>
                <p className="py-5 text-dark">
                  At Cloud10, we specialize in guiding businesses through their digital
                  transformation journey. Our team, comprised of dedicated and passionate technology
                  experts, is committed to helping you build a team tailored to your unique needs.
                  Our mission is to assist organizations in revamping their operations with
                  cutting-edge technologies, thereby accelerating their path to success.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {ourservies.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-everything-item">
                  {/* Icon */}
                  <div className={`icon style-0${index + 1}`}>
                    <i className={item.icon}></i>
                  </div>
                  {/* Content */}
                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="overview" className="create-content-area padding-bottom-90 padding-top-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title startup margin-bottom-55">
                    {/* <p>SDLC</p> */}
                    <h3 className="title text-center">Software Development Lifecycle (SDLC)</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {workItems.map((item, index) => (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <div className="work-single-item margin-bottom-30">
                      <div className="content">
                        <div className={`icon style-0${index + 1}`}>
                          <i className={item.icon}></i>
                        </div>
                        <h3 className="title">{item.PhaseName}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="batter-work-area bg-image padding-bottom-200 padding-top-200"
        // style={{ backgroundImage: `url("../assets/images/bg-02.png")` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title desktop-center padding-bottom-50 wow animate__ animate__fadeInUp animated animated"
                // style="visibility: visible; animation-name: fadeInUp;"
              >
                <h4 className="title ">Empowering Excellence with Innovative Tech</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="work-single-item-04">
                <div className="icon-wrap">
                  <div className="icon">
                    <i className="fa fa-cogs"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Streamlined Processes</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="work-single-item-04">
                <div className="icon-wrap">
                  <div className="icon">
                    <i className="fa fa-lightbulb"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Creative Solutions</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="work-single-item-04">
                <div className="icon-wrap">
                  <div className="icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Data-Driven Insights</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="work-single-item-04">
                <div className="icon-wrap">
                  <div className="icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Accelerated Growth</h4>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="btn-wrapper desktop-center padding-top-50 wow animate__ animate__fadeInUp animated animated"
            // style="visibility: visible; animation-name: fadeInUp;"
          >
            <a href="#" className="boxed-btn btn-work">
              Try it For 7 Days Free
            </a>
          </div> */}
        </div>
      </div>
    </AppLayout>
  );
}
