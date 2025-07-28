import { toggleWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/slices/productsSlice';

function TapItem(){
    const dispatch = useDispatch();
    const {list, status} = useSelector((state)=> state.products);
    const wishlistItems = useSelector(state => state.wishlist.items);
    const isInWishlist = (id) => wishlistItems.some(item => item.id === id);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    console.log('상품 리스트:', list, status);

    return(
        <section className='category-item'>
            <Tabs>
                <TabList className='tabs'>
                    {
                        //객체 모든 속성의 키들로 배열 반환 Object.keys()
                        Object.keys(product).map((product)=>(
                            <Tab key={product.category} className="tab-btn">{product.category}</Tab>
                        ))
                    }
                </TabList>
                {
                    Object.entries(product).map(([product, items])=>(
                        <TabPanel key={product.category}>
                            <div className='tab-panel'>
                                {
                                    items.map((item,index)=>(
                                        <div key={item.id} className='item-box'>
                                            <Link to={`/product/${item.id}`} state={{product:item}}>
                                                <span className='best-rank'>BEST<br/>{index+1}</span>
                                                <img
                                                    src={item.images && item.images.length > 0 ? item.images[0] : 'error-img.jpg'}
                                                    alt={item.name}
                                                    className='bestitem-img'
                                                />
                                                <h3 className='item-title'>[EVENT] {item.name}</h3>
                                                <p className='item-review'>review{item.review}</p>
                                                <p className='item-price'>
                                                    { item.price && (
                                                        <span className='gray-text'>
                                                            &#8361; {item.price.toLocaleString()}원
                                                        </span>
                                                    )}
                                                </p>
                                            </Link>
                                            

                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    ))
                }
            </Tabs>
        </section>
        
    )
}

export default TapItem