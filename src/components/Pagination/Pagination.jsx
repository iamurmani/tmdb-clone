import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './Pagination.css'

function Pagination({pageNo,increasePagination,decreasePagination}) {
  return (
    <>
        <div className="pagination">
        <FaArrowLeft onClick={decreasePagination}/>
        {pageNo}
        <FaArrowRight  onClick={increasePagination}/>
        </div>
    </>
  )
}

export default Pagination