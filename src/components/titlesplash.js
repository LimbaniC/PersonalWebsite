import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import './titlesplashstyle.css';



function socialMediaLinks() { 
    return (
        <div>
            <SocialIcon url="https://www.github.com/LimbaniC" />
            <SocialIcon url="https://www.linkedin.com/in/limbani" />
        </div> 
    );
}

function Titlesplash() { 

    return (
        <div className="mytitlesplashstyle">

    <motion.h1
        initial={{ opacity: 0, y: 20 }} // Start with the element 20px down, and invisible
        animate={{ opacity: 1, y: 0 }}  // Animate to fully visible and in the original position
        transition={{ duration: 0.75 }}  // The animation should take 0.5 seconds

    className="text-4xl font-bold">

        Welcome! My name is Limbani! 
    </motion.h1>

            {/* <h1 className="text-3xl font-bold">Welcome! My name is Limbani!</h1> */}

            {socialMediaLinks()}
        </div>
    );
}

export default Titlesplash; 
