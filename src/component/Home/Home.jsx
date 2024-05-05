import { useState, useEffect } from 'react';
import { IoExitOutline } from "react-icons/io5";
import Loading from '../../ui/Loading';
import { useSelector, useDispatch } from "react-redux";
import Product from '../model/Product'
import { fetchProducts, deleteApiProduct, selectAll, selectById } from '../../reducers/ProductSlice'
import CustomBtn from '../../ui/CustomBtn';
import { useNavigate } from "react-router-dom";


const Products = () => {


    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const products = useSelector(selectAll);
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.error);


    let content;

    useEffect(() => {
        if (productStatus === "idle") {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);


    if (productStatus === "loading") {
        content = <Loading />;
    } else if (productStatus === "completed") {

        content = products.map((pr) => (
            <Product key={pr.id} handleDelete={() => handleDelete(pr.guidRow)} product={pr} />
        ));
    } else if (productStatus === "failed") {
        content = <div>{error}</div>;
    }



    const handleDelete = (id) => {

        dispatch(deleteApiProduct(id));

    };



    return (

        <div>
            <div className='bg-blue-300 p-2 position-relative' style={{ height: 300 }} >
                <div className='flex justify-between'>

                    <div className='flex'>
                        <img src={require('../../assets/img/icon/sepid-logo.png')} style={{ height: 50 }} />

                    </div>



                    <div className="flex">

                        <span className='ml-2  text-white'>خدمات ما</span>
                        <span className='mx-2 text-white'>محصولات</span>
                        <span className='mx-2 ml-7 text-white'>تماس با ما</span>

                        <div className='rounded-full bg-white flex px-3 py-1 justify-between items-center ml-2 mr-8' style={{ height: 30 }}>

                            <span className=' text-blue-300 ' style={{ fontSize: 14 }}>نوید تقی‌پور</span>

                        </div>

                        <div className='rounded-full bg-blue-400 flex px-3 py-1 justify-between items-center' style={{ width: 98, height: 30 }}>

                            <span className='text-white' style={{ fontSize: 14 }}>خروج</span>
                            <IoExitOutline className='rotate-180' style={{ fontSize: 20, color: "#ffffff" }} />
                        </div>



                    </div>

                </div>

                <div className='flex justify-center align-items-center'>

                    <div className='mx-4 text-left'>
                        <p className=' text-white mb-0' style={{ fontWeight: 600, fontSize: "xx-large", textShadow: "0 0 2px #353535" }}>تست باکس ها</p>
                        <p className='text-2xl text-blue-400 pr-2' style={{ borderRight: "6px solid #60A5FA", textShadow: "0 0 1px #353535", fontWeight: 600, fontSize: "xx-large" }}>برای شرکت‌ سپید سیستم</p>

                        <p className='text-sm text-blue-400 mt-10'>پروزه تست سپید سیستم</p>

                        {/* <div className='rounded-full bg-blue-400 flex px-2 py-1 justify-between align-items-center mr-auto mt-10' style={{ width: 100, height: 30 }}>

              <IoIosArrowForward style={{ fontSize: 17, color: "#ffffff" }} />
              <span className='text-white' style={{ fontSize: 12 }}>ورود به پنل</span>

            </div> */}

                    </div>

                    <div className='mx-5'>

                    </div>


                </div>

                {/* 
                <div className='w-50 bg-white shadow-md mx-auto  rounded-md flex justify-between align-items-center px-2 absolute left-0 right-0' style={{ height: 60, bottom: -32 }}>

                    <span className='text-lg'>لیست محصولات</span>

                </div> */}



            </div>


            <div className='testt3' style={{ height: 50 }}>

            </div>


            <div className='testt3  position-relative ltr pt-1 pb-36' style={{ minHeight: 600 }}>

                <div className='mx-10  card shadow-lg border border-gray-200 rounded-sm'>

                    <div className='flex px-5 py-6 justify-between bg-slate-200 text-xl'>
                        <div className='inline-block w-[150px]'>شناسه</div>
                        <div className='inline-block w-[150px]'>اسم</div>
                        <div className='inline-block w-[150px]'>عرض</div>
                        <div className='inline-block w-[150px]'>ارتفاع</div>
                        <div className='inline-block w-[150px]'>عمق</div>
                        <div className='inline-block w-[150px]'>شماره سفارش</div>


                        <div className='w-[200px]'>

                        </div>

                    </div>

                    {content}
                </div>



                <div className='flex justify-center mt-4' >


                    <div className='w-fit flex justify-center items-center px-4 py-2 bg-[#29A846] rounded-md text-white cursor-pointer' onClick={() => navigate("/createproduct")}>
                        ساخت باکس جدید
                    </div>

                </div>


            </div>

            <div className='testt3'>
                <div className='position-relative' style={{ zIndex: 10 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                        <path class="nav-arc" fill-opacity="1" fill='#93C5FD' d="M 0,0 C 480 90 960 90 1440 0 L 1440 200 L 0 200 Z"></path>
                    </svg>
                    <div className='flex justify-center align-items-center' style={{ height: 200, backgroundColor: "#93C5FD" }}>
                        <p className='text-white opacity-50' style={{ fontSize: 50 }}>FOOTER</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Products;