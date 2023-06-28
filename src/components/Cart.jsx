import useQueryHook from '../hooks/useQueryHook'
import { BsFillCartFill} from 'react-icons/bs'


export default function Cart() {
  const { cartsData } = useQueryHook()
  const {data: products} = cartsData
  return (
    <div className='relative'>
      <BsFillCartFill className='text-3xl'/>
      {products && <p className='w-6 h-6 text-center bg-logo text-white font-bold rounded-full absolute -top-5 -right-1 '>{products.length}</p>}
    </div>
  )
}