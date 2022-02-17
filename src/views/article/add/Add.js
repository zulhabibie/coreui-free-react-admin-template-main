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
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const WidgetsDropdown = lazy(() => import('../../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand.js'))

const Add = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const Axios = require('axios')

  const url = 'http://127.0.0.1:8000/api/article'
  const [data, setData] = useState({
    Title: '',
    Content: '',
    Category: '',
    Status: 'publish',
  })
  function submit(e) {
    e.preventDefault()
    Axios.post(url, {
      Title: data.Title,
      Content: data.Content,
      Category: data.Category,
      Status: data.Status,
    }).then((response) => {
      console.log(response.data)
    })
  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader></CCardHeader>
        <CCardBody>
          <CRow>
            <CForm onSubmit={(e) => submit(e)}>
              <div className="me-5">
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                  <CFormInput onChange={(e) => handle(e)} id="Title" value={data.Title} />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Content</CFormLabel>
                  <CFormTextarea
                    onChange={(e) => handle(e)}
                    id="Content"
                    value={data.Content}
                  ></CFormTextarea>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                  <CFormInput onChange={(e) => handle(e)} id="Category" value={data.Category} />
                </div>
              </div>
              <button>Publish</button>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Add
