import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { fetchProducts } from "../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './Category.css'


function Category(){
    const dispatch = useDispatch();
    const {list, status} = useSelector((state)=> state.products);
    const uniqueCategories = [...new Set(list.map(item => item.category))];


    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchProducts());
        }
    }, [dispatch, status]);
    
    return(
        <section id="category">
            <h2>카테고리 분류</h2>
            <Tabs>
                <TabList className='tabs'>
                    {uniqueCategories.map((category) => (
                        <Tab key={category} className="tab-btn">{category}</Tab>
                    ))}
                </TabList>
                {uniqueCategories.map((category) => (
                    <TabPanel key={category}>
                        <h2>{category}</h2>
                        <div className="tab-panel">
                            {
                                list
                                    .filter(item => item.category === category)
                                    .map((item) => (
                                        <div key={item.id} className="item-box">
                                            <Link to={`/product/${item.id}`} state={{ product: item }}>
                                                <img
                                                    src={item.src || 'error-img.jpg'}
                                                    alt={item.name}
                                                    className='bestitem-img'
                                                />
                                                <p className="item-name">
                                                    {item.name}
                                                </p>
                                                <p className='item-price'>
                                                    <span className='gray-text'>
                                                        &#8361; {item.price.toLocaleString()}원
                                                    </span>
                                                </p>
                                            </Link>
                                        </div>
                                    ))
                            }
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </section>
    )
}

export default Category;
