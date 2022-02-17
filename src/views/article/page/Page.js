import React, { Component, useEffect, useState, lazy } from 'react'
import Add from '../add/Add'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CTable,
  CTableBody,
  CTabPane,
  CNavItem,
  CNavLink,
  CTabs,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNav,
  CTabContent,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
function Page() {
  const [activeKey, setActiveKey] = useState(1)
  const [data_list, set_data_list] = useState([])
  const [select, setselect] = useState('')
  const axios = require('axios')
  const url = 'http://127.0.0.1:8000/api/article'
  function handleChange(e) {
    //set state variable with option value
    setselect(e.target.value)
  }
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data
        set_data_list(data.filter((data) => data.Status !== select))
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }, [select])

  console.log(data_list)
  return (
    <CCard className="mb-4">
      <CCardHeader></CCardHeader>
      <CCardBody>
        <CRow>
          <label className="form-label">Filter</label>
          <div className="me-5">
            <select id="state" onChange={handleChange} className="">
              <option value=""> All </option>
              <option value="publish"> Publish </option>
              <option value="draft">Draft</option>
              <option value="trash">Trash</option>
            </select>
          </div>
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {
                // calling state variable data to filter data inside table
                data_list.map(function ({ Title, id, Category }) {
                  return (
                    <CTableRow key={id}>
                      <CTableDataCell>{Title}</CTableDataCell>
                      <CTableDataCell>{Category}</CTableDataCell>
                      <CTableDataCell>
                        <button type="button" className="btn btn-primary me-3">
                          <CIcon icon={icon.cilPencil} size="xxl" />
                        </button>
                        <button type="button" className="btn btn-danger">
                          <CIcon icon={icon.cilTrash} size="xxl" />
                        </button>
                      </CTableDataCell>
                    </CTableRow>
                  )
                })
              }
            </CTableBody>
          </CTable>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Page
