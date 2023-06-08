import { useQuery, useQueryClient,useMutation } from '@tanstack/react-query'
import { addNewProduct, getCart, getProducts, removeFromCart } from '../api/firebase'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { AddUpdateToCart } from '../api/firebase'



export default function useQueryHook () {
  const queryClient = useQueryClient()
  const { user } = useContext(UserContext)
  const uid = user ? user.uid: null
  const productData = useQuery(['products'], getProducts,{staleTime: 1000 * 60})

  const addProduct = useMutation(({product, url}) => addNewProduct(product, url),{
    onSuccess: () => queryClient.invalidateQueries(['products'])
  })

  const cartsData = useQuery(['carts',uid || ''], () => getCart(uid),{ enabled: !!uid})

  const upadateCart = useMutation((product) =>  AddUpdateToCart(user.uid, product),{
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', user.uid])
    }
  })

  const removeCart= useMutation((id) => removeFromCart(user.uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', user.uid])
    }
  })

  return { productData, addProduct,cartsData, upadateCart, removeCart }
}