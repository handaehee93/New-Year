import React from 'react'

export default function Pagination({totalData, postPerPage, setCurrentPage, currentPage}) {
  let pages = []
  for(let i=1; i <=Math.ceil(totalData/postPerPage); i++) {
    pages.push(i)
  }
  console.log(pages.length)
  return (
    <div className='text-center h-16 relative -translate-y-full'>
      {
        pages.map((page,idx) => {
          return <button  onClick={() => setCurrentPage(page)} className='text-xl mx-3' key={idx}>{page}</button>
        })
      }
    </div>
  )
}
