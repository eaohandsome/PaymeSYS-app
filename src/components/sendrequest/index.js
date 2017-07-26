import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import uploadicon from '../image/icons-8-upload.png'
import ModalInsurer from './ModalInsurer'
import csvpic from '../image/icons-8-csv.png'
import ModalPlanBox from './ModalPlanBox'
import Insurer from './insurer'
import '../../styles/send-request.scss'
import {
  Detail,
  Head,
  Head2,
  subInner,
  Submit,
  BoxIndiv1,
  BoxIndiv2,
  BoxIndiv3,
  BoxIndiv4,
  SideIn,
  Time,
  Edit,
} from './styled'
import moment from 'moment'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
  Progress,
} from 'semantic-ui-react'
import PostSimpleRQ from './simple-requirement'

class Sendrequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      position: 'relative-box',
    }
  }

  changePositionPage = () => {
    if (this.state.position === 'relative-box')
      this.setState({ position: 'fixed-box' })
    else this.setState({ position: 'relative-box' })
  }
  render() {
    console.log(this.props)
    console.log(moment(this.props.timeout).locale('th').format('DD MMMM YYYY'))
    return (
      <div className={this.state.position}>
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 columns">
            <div className="row">
              <Head>ส่งคำขอและรอการเสนอราคา</Head>
            </div>
            <Head2>กรุณาตรวจสอบข้อมูลของคุณ</Head2>
            <PostSimpleRQ />
            <Head2>กรุณาตรวจสอบแพลนของคุณ</Head2>
            <BoxIndiv2>
              <ModalPlanBox changePositionPage={this.changePositionPage} />
            </BoxIndiv2>
            <Head2 style={{ display: 'inline-block' }}>
              รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน
            </Head2>
            {' '}
            <ModalInsurer />
            <BoxIndiv3>
              บริษัทประกันสามารถเสนอราคาได้ภายในวันที่
              {' '}
              <Time>
                {moment(this.props.timeout.timeout)
                  .locale('th')
                  .format('DD MMMM YYYY')}
              </Time>
              &nbsp; ภายในเวลา
              {' '}
              <Time>{moment(this.props.timeout.timeout).format('LT')}</Time>
              <Insurer />
            </BoxIndiv3>
            <Head2>อัพโหลดไฟล์</Head2>
            <BoxIndiv4 />
          </Detail>
          <Link to="/bidding"><Submit>ส่งคำขอ</Submit></Link>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
})

export default connect(mapStateToProps, null)(Sendrequest)
