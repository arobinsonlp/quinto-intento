import React, { useState, useEffect } from "react";
import KonamiCodeModal from "./KonamiCodeModal";

const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function KonamiCodeListener() {
  const [modalShow, setModalShow] = useState(false);
  const [keyIndex, setKeyIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === KONAMI_CODE[keyIndex]) {
        setKeyIndex(keyIndex + 1);
        if (keyIndex === KONAMI_CODE.length - 1) {
          setModalShow(true);
          setKeyIndex(0);
        }
      } else {
        setKeyIndex(0);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keyIndex]);
  return (
    <div>
      <KonamiCodeModal show={modalShow} onHide={() => setModalShow(false)} />
      {modalShow === true
        ? window.scrollTo({ top: 900, left: 0, behavior: "smooth" })
        : null}
    </div>
  );
}
export default KonamiCodeListener;
