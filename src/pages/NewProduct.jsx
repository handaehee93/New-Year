import React, { useState } from 'react'
import Button from '../components/ui/Button'
import { uploadImage } from '../api/uploader'
import { useNavigate } from 'react-router-dom'
import { addNewProduct } from '../api/firebase'
import { useMutation } from 'react-query'
import { useQueryClient } from '@tanstack/react-query'


export default function NewProduct() {
  const [product, setProduct] = useState({})
  // input태그 중에 사진을 올리는 input태그는 string이 아니라 url이므로 따로 state를 만들어 준 것
  const [file, setFile] = useState()
  const [isUploading, setIsUpLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const queryClient = useQueryClient()
  // const addProduct = useMutation(({product, url}) => addNewProduct(product, url),{
  //   onSuccess: () => queryClient.invalidateQueries(['products'])
  // })
  

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsUpLoading(true)
    // 클라우디너리에 파일이 전달이 되면 url을 알려줄 것이고, firebase에 해당 파일의 url과 나머지 상품 정보들을 업로드
    uploadImage(file)
      .then((url) => {
        // addProduct.mutate({product, url}, {onSuccess: ()=> { 
        //   setSuccess('제품 등록 완료')
        //   setTimeout(() => {
        //     setSuccess(null)
        //   },3000)}})
        addNewProduct(product, url)
          .then(() => {
            setSuccess('제품 등록 완료')
            setTimeout(() => {
              setSuccess(null)
            },3000)
          })
      })
        .finally(() => {          
        setIsUpLoading(false)
        // navigate('/')
      })
  }



// input중 file 올리는 Input은 value가 파일 그 자체가 아니라, 파일의 주소 이므로 조건문 작성 해준 것
  const handleChange = (e) => {
    const {name, value, files} = e.target
        if(name === 'file') {
          setFile(files && files[0])
          return
        }
        setProduct((product) => ({...product, [name]: value}))
  }

  const url = () => {
    return (
      URL.createObjectURL(file)
      // window.URL.revokeObjectURL(file)
    )
  }

const navigate = useNavigate()

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
      {file && <img className='w-96 mx-auto mb-2' src={url()} alt='상품 이미지' />}
      <form className='flex flex-col p-12' onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept='image/*' 
          name='file'
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name='title' 
          value={product.title ?? ''} 
          placeholder='제품명' 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name='price' 
          value={product.price ?? ''} 
          placeholder='가격' 
          onChange={handleChange} 
          required 
        />
        <input 
          type='text' 
          name='category' 
          value={product.category ?? ''} 
          placeholder='카테고리(남성, 여성)' 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name='description' 
          value={product.description ?? ''} 
          placeholder='제품 설명' 
          onChange={handleChange}
          required 
        />
        <input 
          type="text" 
          name='options' 
          value={product.options ?? ''} 
          placeholder='옵션( ,로 구분 )' 
          onChange={handleChange}
          required 
        />
        <Button  text={isUploading ? '제품 등록 중' : '제품 등록 하기'} disabled={isUploading}/>
        {success && <p className='my-2 font-bold'>🟢{success}</p>}

      </form>
    </section>
  )
}
