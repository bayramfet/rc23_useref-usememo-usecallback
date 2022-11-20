import React, { useEffect, useRef } from "react";
import { useState } from "react";

const UseRefComponent = () => {
  //? useRef 1. kullanım
  //* hafızada yeri değişmeyen bir obje oluşturur, her render da yeniden render olmaz, onu engellemek için
  const [sayac, setSayac] = useState(0);

  const sayacRef = useRef(0);

  console.log("sayac", sayac);
  console.log("sayacRef", sayacRef.current);

  //?useRef 2.kullanım
  //* DOM elementlerine ulaşmamızı sağlar

  const inputRef = useRef();
  const divRef = useRef();

  const renkDegistir = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const arttir = () => {
    setSayac(sayac + 1);
    sayacRef.current++;

    //!setValue kapalıyken arttır a basınca valueRef artar ama render edilmediğinden console da valueRef i yazdırmaz,setValue açınca artmış hali yazar, UI da anlık görmeyeceksem kullanılabilir
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component </h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={renkDegistir}>ChangeBGColor</button>
      <button onClick={arttir}>ARTTIR</button>
    </div>
  );
};

export default UseRefComponent;
