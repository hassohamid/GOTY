import Header from "../layout/header.jsx";
import ProductCard from "../components/ProductCard.jsx";
import OpeningVideo from "../components/OpeningVideo.jsx";
import Footer from "../layout/footer.jsx";
import { motion } from "framer-motion";

function Homepage() {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="bg">
        <Header />
        <OpeningVideo />
        <motion.div variants={fadeInVariant} initial="hidden" animate="visible">
          <ProductCard />
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
