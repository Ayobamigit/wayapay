import React from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap'
import Cards from '../../components/Cards/Cards'
import {FiSearch} from 'react-icons/fi'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import TransactionCard from '../Cards/TransactionCard'
import {useNavigate } from 'react-router'

const WayaAgency = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="tableHeaders d-flex justify-content-start align-items-center">
        <div className="d-flex justify-content-between filter-contents align-items-center">
            <div className="d-flex justify-content-start align-items-center width-50">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="d-flex justify-content-center align-items-center ">
                        <IoFilterOutline size={15} style={{marginRight:15}} />
                        <h4 className="fs-14 text-darker">Filter</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center filter-search">
                    <div className="input_Search d-flex justify-content-center align-items-center">
                        <div className="justify-content-center align-items-center"><FiSearch color="#FF4400" /></div>
                        <input className="input ml-10" placeholder="search with reference id" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start align-items-center ">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="export-button">
                        <BiLinkExternal color={'#fff'} className="mr-5" />
                        Export data
                    </div>
                </div>
            </div>
            </div>
        </div>

        <Container fluid>
            <Row className="mt-40">
                <Col>
                    <Cards cardTitle="Test Revenue" value="NGN 700,304.00" color="text-orange" textColor="text-darker"/>
                </Col>
                <Col>
                    <Cards cardTitle="Net Revenue" value="NGN 700,304.00" color="text-orange" textColor="text-darker"/>
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>Reference Id</th>
                            <th>Transaction Category</th>
                            <th>Terminal Type</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Created At</th>
                            <th>Payment Status</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabactive">Successful</span></td>
                            <td><span className="tabtransparent" onClick={()=>{navigate('/transaction/1')}}>View More</span></td>
                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabactive">Successful</span></td>
                            <td><span className="tabtransparent">View More</span></td>
                        </tr>

                        <tr>
                        <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabdamaged">Abandoned</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabdanger">Failed</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>Cashout</td>
                            <td>Nexgo</td>
                            <td>Card</td>
                            <td>NGN 2000</td>
                            <td>Tue. 9th Sept 2021 07:04 AM (WAT)</td>
                            <td><span className="tabpending">Refunded</span></td>
                            <td><span className="tabtransparent">View More</span></td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    </>
  )
}

export default WayaAgency