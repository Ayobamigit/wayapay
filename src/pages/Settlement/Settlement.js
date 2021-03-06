import React from 'react'
import Layout from '../../components/Layout/Layout'
import {IoFilterOutline} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Cards from '../../components/Cards/Cards'
import SettlementCard from '../../components/SettlementComponents/SettlementCard'
import {ReactComponent as Qr} from '../../assets/icons/qryellow.svg'

const Settlement = () => {
    const navigate = useNavigate()
  return (
    <Layout title="Settlements">
        <Container>
            <div className="tableHeaders d-flex justify-content-start align-items-center">
                <div className="d-flex justify-content-between filter-contents align-items-center">
                    <div className="d-flex justify-content-start align-items-center width-50">
                        <div className="d-flex justify-content-center align-items-center ">
                            <div className="d-flex justify-content-center align-items-center ">
                                <IoFilterOutline size={15} style={{marginRight:15}} />
                                <h4 className="fs-14 text-darker mt-05">Filter</h4>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center filter-search ml-22">
                            <div className="input_Search d-flex justify-content-center align-items-center">
                                <div className="justify-content-center align-items-center"><FiSearch color="#FF4400" /></div>
                                <input className="input ml-10" placeholder="search with reference id" />
                            </div>

                            {/* <div className="d-flex justify-content-center align-items-center filter-search"> */}
                                <button className="orange-button ml-10">Search</button>
                            {/* </div> */}
                        </div>

                       
                        
                    </div>
                    <div>
                        <h4 className="text-darker fs-12">Your Wayabank Account Number:</h4>
                        <div className="d-flex justify-content-start align-items-center account-div">
                            <Qr />
                            <div className="ml-10">
                                <h4 className="fs-12 text-white m-0">23454564568</h4>
                                <h4 className="fs-10 text-orange m-0">Sunday Daniel</h4>
                                <h4 className="fs-05 text-white">Total Payment received: <span className="fs-06 text-semi-white">NGN 5,000.00</span></h4>
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

            <Row className="mt-40">
                <Col>
                    <Cards cardTitle="Last Settlement" value="NGN 700,304.00" date="Settled on 06 July, 2021" color="text-orange" textColor="text-darker"/>
                </Col>
                <Col>
                    <Cards cardTitle="Next Settlement" value="NGN 700,304.00" date="Settled on 06 July, 2021" color="text-orange" textColor="text-darker"/>
                </Col>
                <Col>
                    <SettlementCard />
                </Col>
            </Row>

            <div className="data-table mt-40">
                <Table responsive borderless className="bg-inherit">
                    <thead>
                        <tr style={{backgroundColor: '#F9843533', borderRadius: '5px'}}>
                            <th>Reference Id</th>
                            <th>Beneficiary</th>
                            <th>Actual Amount</th>
                            <th>Settled Amount</th>
                            <th>Created At </th>
                            <th>STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr  onClick={()=>navigate('/settlement/1')}>
                            <td>44aa22f4-fc64-5b</td>
                            <td>WayaPOS</td>
                            <td>NGN 2200</td>
                            <td>NGN 2000</td>
                            <td>Tuesday, 6 July 2021, 7:30pm</td>
                            <td className="text-sharp-green">Settled</td>
                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>WayaPOS</td>
                            <td>NGN 2200</td>
                            <td>NGN 2000</td>
                            <td>Tuesday, 6 July 2021, 7:30pm</td>
                            <td className="text-red">Failed</td>
                        </tr>

                        <tr>
                            <td>44aa22f4-fc64-5b</td>
                            <td>WayaPOS</td>
                            <td>NGN 2200</td>
                            <td>NGN 2000</td>
                            <td>Tuesday, 6 July 2021, 7:30pm</td>
                            <td className="text-yellow">Pending</td>
                        </tr>
                        

                        
                    </tbody>
                </Table>
            </div>
        </Container>
    </Layout>
  )
}

export default Settlement