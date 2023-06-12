import { useState } from 'react'

export function PaginationHooks ( products) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentProducts =products && products.slice(firstPostIndex, lastPostIndex)

  return { currentProducts, setCurrentPage,currentPage, postPerPage }
}