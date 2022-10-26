import { useEffect, useState } from "react";
import style from "./Generator.module.css";
const Generator = () => {
  const [genaratedPass, setGeneratedPass] = useState("");
  const [alreadyGenerated, setAlreadyGenerated] = useState(false);
  const [isCoppied, setIsCoppied] = useState(false);
  const alp = "abcdefghijklmnopqrstuvwxyz";
  const sc = "#!.&/*()";
  const getRVal = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const genPass = (passMinLen = 8, passMaxLen = 16) => {
    setIsCoppied(false);
    const passLen = getRVal(passMinLen, passMaxLen);
    let pass = "";
    for (let i = 0; i < passLen; i++) {
      const chooseOption = getRVal(0, 2);
      if (chooseOption === 0) {
        pass += alp[getRVal(0, 25)];
      } else if (chooseOption === 1) {
        pass += sc[getRVal(0, 7)];
      } else {
        pass += getRVal(0, 9);
      }
    }
    setGeneratedPass(pass);
  };

  const changeButtonText = () => {
    setAlreadyGenerated(true);
  };
  const buttonText = alreadyGenerated ? "Generate again!" : "Generate";
  useEffect(() => {
    genPass();
  }, []);
  const copyFunc = () => {
    navigator.clipboard.writeText(genaratedPass);
    setIsCoppied(true);
  };
  const copyButtonText = isCoppied ? "Copied!" : "Copy";
  return (
    <div className={style.Generator}>
      <div>
        <input disabled type="text" value={genaratedPass} />
        <button className={style.copyButton} onClick={copyFunc}>
          {copyButtonText}
        </button>
      </div>
      <button
        id={style.action}
        onClick={() => {
          genPass();
          changeButtonText();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default Generator;
