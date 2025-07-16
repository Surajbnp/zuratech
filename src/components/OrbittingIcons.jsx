import React from "react";
import styles from "../styles/orbit.module.css";
import { SiNotion, SiGoogledrive, SiOpenai } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Orbit = () => {
  return (
    <div className={styles.orbitWrapper}>
      {/* Core in center */}
      <div className={styles.core}>Core</div>

      {/* Inner orbit (clockwise) */}
      <div className={`${styles.orbitCircle} ${styles.orbit1}`}>
        <div className={`${styles.orbitIcon} ${styles.orbit1Icon1}`}>
          <lord-icon
            src="https://cdn.lordicon.com/fqbvgezn.json"
            trigger="hover"
            colors="primary:#121331,secondary:#5e90f1"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </div>
      </div>

      {/* Outer orbit (anticlockwise) */}
      <div className={`${styles.orbitCircle} ${styles.orbit2}`}>
        <div className={`${styles.orbitIcon} ${styles.orbit2Icon1}`}>
          <lord-icon
            src="https://cdn.lordicon.com/xovdoewm.json"
            trigger="hover"
            colors="primary:#5e90f1,secondary:#000000"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </div>

      <div className={`${styles.orbitCircle} ${styles.orbit3}`}>
        <div className={`${styles.orbitIcon} ${styles.orbit2Icon1}`}>
          <lord-icon
            src="https://cdn.lordicon.com/xovdoewm.json"
            trigger="hover"
            colors="primary:#5e90f1,secondary:#000000"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </div>
      </div>
    </div>
  );
};

export default Orbit;
