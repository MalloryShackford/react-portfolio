import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Check it out!
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          <br/>Our ever-changing world of technology has always fascinated me and I've never been afraid to dive head first into a new project.
<br/>Interested in creating something special? Let's build it together!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
//           <div
//             className="flex justify-center text-center items-center p-10 bg-red
//               max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
//           >
//             BEAUTIFUL USER INTERFACES
//           </div>
          
          
//             <a href="https://lyriks-sigma.vercel.app/">
//             <img src="https://i.postimg.cc/PrfwJ9VJ/lyriks.png" /></a>

          
           <a href="https://cheftimmaslow.com">
            <img src="https://i.ibb.co/FBt09C6/utr.png" /></a>
            
            <a href="https://client-psi-wheat.vercel.app/">
          <img src="https://i.ibb.co/9pH4Qw4/tinder.png" /></a>
          
          <a href="https://brilliant-sopapillas-6fd86d.netlify.app/">
            <img src="https://i.ibb.co/6HbdkFZ/twitter.png" /></a>
          
          <a href="https://routing-app-psi.vercel.app//">
            <img src="https://i.ibb.co/QYTspPp/twitter.png" /></a>
          
          <a href="https://os-clone-seven.vercel.app/">
            <img src="https://i.ibb.co/1KDfrnb/os.png" /></a>
          
          <a href="https://rainbow-praline-272e56.netlify.app/">
            <img src="https://i.ibb.co/V9C4CJn/fb.png" /></a>

          
          

//           <div
//             className="flex justify-center text-center items-center p-10 bg-blue
//               max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
//           >
//             SMOOTH USER EXPERIENCE
//           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
