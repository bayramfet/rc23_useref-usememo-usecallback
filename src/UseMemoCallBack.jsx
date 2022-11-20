import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [kullanici, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [arama, setArama] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);
  //*bir değer için= useMemo Memoize edilmiş bir değer döndürür.useMemo ile sarmallamazsak inputa her veri girildiğinde ekran değişmez butona basılmayı bekler ama user componenti render etmeye devam eder.text ile gönderirsem inputa her harf girildiğinde hem ekran değişir hem sayfalar render olur

  const filtreli = useMemo(
    () =>
      kullanici.filter((i) =>
        i.name.toLowerCase().includes(arama.toLowerCase())
      ),
    [kullanici, arama]
  );
  //* fonksiyon için=useCallBack Memoize edilmiş bir callback fonksiyonu döndürür.useCallback kullanmazsak, useMemo ile childların gereksiz render ını durdurmuştuk search e giriş yapıldığında, bu fonksiyonla bozulmuş oldu, tekrar düzeltmek için useCallback.

  const ekle = useCallback(() => {
    setUsers([...kullanici, { id: kullanici.length + 1, name: "osman" }]);
  }, [kullanici]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />

      <button onClick={() => setArama(text)}>Search User</button>
      <button onClick={ekle} id="add-button">
        Add User
      </button>
      {/* <Users kullanici={kullanici}/> */}
      <Users kullanici={filtreli} />
    </div>
  );
};

export default UseMemoCallBack;
