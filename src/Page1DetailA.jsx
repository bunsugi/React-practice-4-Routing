import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const state = location.state;
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1詳細Aページです</h1>
      <h2>{state}</h2>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
