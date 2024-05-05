
import { Navigate } from 'react-router-dom';
import CustomBtn from '../../ui/CustomBtn'
import { useNavigate } from "react-router-dom";


const Product = ({ product, handleDelete }) => {


    const navigate = useNavigate();

    return (

       

            <div className='flex justify-between px-5 my-3 border-b-2 border-gray-200 py-2'>

                <span className="inline-block w-[150px] text-grey-600">{product.id}</span>
                <span className="inline-block w-[150px] text-grey-600">{product.name}</span>

                <span className='inline-block w-[150px] text-grey-600'> {product.width}</span>

                <span className='inline-block w-[150px] text-grey-600'> {product.height}</span>

                <span className='inline-block w-[150px] text-grey-600'> {product.depth}</span>

                <span className='inline-block w-[150px] text-grey-600'>{product.order}</span>


                <div className='flex justify-between w-[200px]'>

                    <div className='flex justify-center items-center bg-[#FABF01] rounded-md p-3 cursor-pointer' onClick={() => { navigate(`/editproduct/${product.guidRow}`) }}>
                       ویرایش
                    </div>


                    <div className='flex justify-center items-center bg-[#DA3647] rounded-md p-3 mx-3 text-white cursor-pointer' onClick={handleDelete}>
                       حذف
                    </div>

                </div>



            </div>






    )
}

export default Product;