import WindowWrapper from "../hoc/WindowWrapper";
import { WindowsControls } from "../components";
import { socials } from "../constants";

const Contact = () => {
   return (
      <>
         <div id="window-header">
            <WindowsControls target="contact"/>
            <h2>Contact Me</h2>
         </div>

         <div className="p-5 space-y-5">
            <img 
               src="/images/adrian-2.jpg"
               alt="Adrian"
               className="w-20 rounded-full"
            />

            <h3>Let's Connect</h3>
            <p>Wanna talk big Afrika? Whether its Technology,
               Culture or Politiks, reach Out!!
            </p>

            <ul>
               {socials.map(({ id, text, icon, bg, link }) => (
                  <li key={id} style={{backgroundColor: bg }}>
                     <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={text}
                     >
                        <img 
                           src={icon}
                           alt={text}
                           className="size-5"
                        />
                        <p>{text}</p>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
