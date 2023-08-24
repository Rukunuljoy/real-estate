import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            temporibus magnam quasi corrupti voluptatem sunt quia, laudantium
            vero reiciendis alias dolorum ea quis deleniti exercitationem quae
            dolor velit illo autem!
          </span>

          <div className="flexColStart contactModes">
            {/* first row  */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">Call Now</div>
              </div>
              {/* second mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row  */}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">video call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">video call Now</div>
              </div>
              {/* fourth mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="../../../public/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
