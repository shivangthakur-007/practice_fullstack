import { createContext } from "react";
import B from "./B";

const Bio=createContext();
function A() {
const img = {
  img1: "https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png",
  img2: "https://www.combonation.in/storage/55399/6501ac9b11108_BYOC_Strip_banner_Sep_DT.jpg",
  img3: "https://www.combonation.in/storage/56834/6512dbb29b553_MKQ_banner_DT_oct.jpg",
  img4: "https://www.combonation.in/storage/55406/6503f10e5e302_buy--Recovered-RecoveredArtboard-1-copy-6.jpg",
};
  return (
    <Bio.Provider value={img}>
      <B />
    </Bio.Provider>
  );
}
export default A;
export {Bio}
