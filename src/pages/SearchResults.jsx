import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../redux/slices/productsSlice";



function SearchResults(){
    const [params] = useSearchParams();
    const keyword = params.get('q')?.toLowerCase() || '';
    const dispatch = useDispatch();

    const { list, status } = useSelector((state) => state.products);
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProducts());
        }
      }, [status, dispatch]);


    const filtered = list.filter(p=>
        p.name.toLowerCase().includes(keyword)
    );

    return(
        <div>
            <h2>"{keyword}" 검색 결과</h2>
            {filtered.length > 0 ? (
                filtered.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <img src={product.src} />
                </div>
                ))
            ) : (
                <p>검색 결과가 없습니다.</p>
            )}
    </div>
    )
}


export default SearchResults;
