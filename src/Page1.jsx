import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Page1 = () => {
  const arr = [...Array(100).keys()]; //無意味な配列
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>詳細A</Link>
      <br />
      <Link to="/page1/detailB">詳細B</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
