import { motion } from "framer-motion";

/** Full-screen boot sequence shown once when the portfolio first opens. */
export default function Loader({ done }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.55 }}
      style={{ pointerEvents: done ? "none" : "auto" }}
    >
      <div className="loader-inner">
        <motion.div
          className="loader-mark"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          &lt;/&gt;
        </motion.div>

        <div className="loader-code">
          <span>booting</span> <b>Aditi Tanwar</b> <i>portfolio</i>
          <br />
          <span>loading</span> <em>interface</em>...
        </div>

        <div className="loader-line">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.45, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
