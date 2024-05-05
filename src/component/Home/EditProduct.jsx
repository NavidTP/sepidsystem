
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import CustomInput from '../../ui/CustomInput'
import CustomBtn from '../../ui/CustomBtn';
import { useNavigate, useParams } from "react-router-dom";
import { selectById, selectAll, updateApiProduct } from '../../reducers/ProductSlice'
import Product from "../model/Product";

const EditProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productid } = useParams();



    //const selectedProduct = useSelector((state) => selectById(state, productid));

    const products = useSelector(selectAll);



    const [product, setProduct] = useState({
        "name": "",
        "width": 0,
        "height": 0,
        "depth": 0,
        "order": 0,
        "guidRow": productid

    })


    useEffect(() => {

        var filteredproduct = products.filter(obj => obj.guidRow == productid);
        var singlepro = filteredproduct[0]



        setProduct(
            {
                ...product,
                "name": singlepro.name,
                "width": singlepro.width,
                "height": singlepro.height,
                "depth": singlepro.depth,
                "order": singlepro.order,

            }
        )

    }, [])


    const formHandler = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })


    }

    const setUpdate = async () => {

        console.log(product)

        try {

            await dispatch(
                updateApiProduct(product)
            );

            navigate("/Home");
        } catch (error) {

        } finally {

        }


    }

    return (

        <>
            <div className='flex justify-center items-center h-[100px] bg-[#3193f0]'>
                <p className='text-white text-3xl'>صفحه ویرایش باکس</p>
            </div>


            <div className='flex justify-center mt-5'>

                <div className='shadow-lg rounded-md w-1/3 border border-gray-200 px-5 py-5'>
                    <p>اسم</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center  text-grey-600'} name="name" value={product.name} onChange={formHandler} />
                    <p>عرض</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center  text-grey-600'} name="width" value={product.width} onChange={formHandler} />
                    <p>ارتفاع</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center  text-grey-600'} name="height" value={product.height} onChange={formHandler} />
                    <p>عمق</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center  text-grey-600'} name="depth" value={product.depth} onChange={formHandler} />
                    <p>شماره سفارش</p>
                    <CustomInput customclass={'w-full mt-2 mb-4 rounded text-center  text-grey-600'} name="order" value={product.order} onChange={formHandler} />

                    <div onClick={setUpdate}>
                        <CustomBtn text="ویرایش" />
                    </div>
                </div>

            </div>

        </>

    )
}

export default EditProduct;