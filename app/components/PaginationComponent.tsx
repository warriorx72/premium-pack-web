import React, { useEffect } from 'react'
import { Pageable, SortEnum } from '../(admin)/services/suppliers';

type Props = {
  size: number;
  number: number;
  total_elements: number;
  total_pages: number;
  fetchData: (page: Pageable) => void
}

const PaginationComponent = (props: Props) => {

  useEffect(() => {
    props.fetchData({page: 0, size: 10, sort: SortEnum.name});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePageChange = (page: number) => {
    props.fetchData({page: page, size: 10, sort: SortEnum.name});
  }

  return (
    <ul className="pagination px-4 mt-4 justify-content-start">
      <li className={`page-item ${props.number === 0 ? 'disabled' : ''}`}>
        <button
          className="page-link bg-dark text-white border-dark"
          aria-disabled="true"
          onClick={() => handlePageChange(props.number - 1)}
        >
          Previous
        </button>
      </li>
      {
        Array.from({ length: props.total_pages }, (_, index) => (
          <li className="page-item"  key={index}>
            <button 
              className={`page-link text-white border-dark ${props.number === index ? 'disabled bg-secondary' : 'bg-dark'}`}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </button>
          </li>
        ))
      }
      <li className="page-item">
        <button 
          className={`page-link bg-dark text-white border-dark ${props.number === props.total_pages - 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(props.number + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  )
}

export default PaginationComponent