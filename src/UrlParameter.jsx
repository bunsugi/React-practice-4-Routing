import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const UrlParameter = () => {
    const{ id } = useParams();
    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search);// URLSerchParamsは、searchに対する便利な関数を提供してくれているメソッド
    
    return (
        <div>
            <h1>URLパラメータページです</h1>
            <p>パラメータは{id}です</p>
            <p>クエリパラメータは {query.get("name")}です</p>
        </div>
    );

};