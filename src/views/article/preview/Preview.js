import React, { useEffect, useState, lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
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
  DocsLink,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
// import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {} from '@coreui/icons'

const WidgetsDropdown = lazy(() => import('../../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand.js'))

const Preview = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const axios = require('axios')
  const [data_list, set_data_list] = useState([])
  const [select, setselect] = useState('')
  const url = 'http://127.0.0.1:8000/api/article'

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data
        set_data_list(data.filter((data) => data.Status == 'publish'))
      })
      .catch((error) => {
        console.error('Error', error)
      })
  }, [select])
  return (
    <>
      <CCard>
        <CCardHeader></CCardHeader>
        <CCardBody>
          <CRow>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Content</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  // calling state variable data to filter data inside table
                  data_list.map(function ({ Title, id, Content }) {
                    return (
                      <CTableRow key={id}>
                        <CTableDataCell>{Title}</CTableDataCell>
                        <CTableDataCell>{Content}</CTableDataCell>
                      </CTableRow>
                    )
                  })
                }
              </CTableBody>
            </CTable>
            <CPagination aria-label="Page navigation example">
              <CPaginationItem>Previous</CPaginationItem>
              <CPaginationItem>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem>Next</CPaginationItem>
            </CPagination>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Preview
