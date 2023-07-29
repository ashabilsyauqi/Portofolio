import {BsWhatsapp} from  "react-icons/bs"
import {SiGmail} from "react-icons/si"
const Contact =() => {
    return(
        <div className="wrapper">
           <div className="contact anton">
       
            <div className="contactCard">
            <h2>Avalable for Full time Work</h2>
                <p>Phone Number : <a href="tel: 087871976694"><BsWhatsapp className="btn-contact"/>087871976694</a></p>
                <p>Email : <a href="mailto:ashabilsyauqi@gmail.com"> <SiGmail className="btn-contact" />ashabilsyauqi@gmail.com</a></p>
            </div>
           </div>
        </div>
    )
}

export default Contact
