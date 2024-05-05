import { useState } from 'react';
import CustomInput from '../../ui/CustomInput'

import CustomBtn from '../../ui/CustomBtn';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewProduct } from '../../reducers/ProductSlice'


const CreateProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [product, setProduct] = useState({
        "name": "",
        "width": 0,
        "height": 0,
        "depth": 0,
        "order": 0,

    })

    const formHandler = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })



    }

    const createNewProduct = async () => {

        try {

            await dispatch(
                addNewProduct(product)
            );

            navigate("/Home");
        } catch (error) {

        } finally {

        }

    }


    return (

        <>

            <div className='flex justify-center items-center h-[100px] bg-[#3193f0]'>
                <p className='text-white text-3xl'>صفحه ایجاد باکس</p>
            </div>


            <div className='flex justify-center mt-5 '>

                <div className='shadow-lg rounded-md w-1/3 border border-gray-200 px-5 py-5'>
                    <p>اسم</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center'} name="name" value={product.name} onChange={formHandler} />
                    <p>عرض</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center'} name="width" value={product.width} onChange={formHandler} />
                    <p>ارتفاع</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center'} name="height" value={product.height} onChange={formHandler} />
                    <p>عمق</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center'} name="depth" value={product.depth} onChange={formHandler} />
                    <p>شماره سفارش</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center'} name="order" value={product.order} onChange={formHandler} />

                    <div className='flex justify-center my-4' >


                        <div className='w-fit flex justify-center items-center px-4 py-2 bg-[#29A846] rounded-md text-white cursor-pointer' onClick={() => navigate("/createproduct")}>
                            ساخت باکس جدید
                        </div>

                    </div>

                </div>




            </div>


        </>



    )
}

export default CreateProduct;