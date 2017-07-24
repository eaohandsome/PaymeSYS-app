import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'react-sc'
import NavBenefit from '../NavBenefit'

import {
  Detail,
  Inboxtext,
  Head,
  Inner,
  BackButton,
  SendButton,
} from './styled'
import { Image, Container, Divider, Segment, Icon } from 'semantic-ui-react'

// ----------------------------------------------------------------

class SendFlexPlan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
    }
  }

  render() {
    return (
      <div className="ChooseInsurancePlan">
        <div className="ChooseInsurer">
          <NavBenefit step={this.state.step} />
        </div>
        <div className="row">
          <Detail className="large-12 ">
            <Head>ส่งข้อมูล</Head>
            กรุณาตรวจสอบแผนประกันภัยที่เลือก
            <Inner
              style={{
                height: '150px',
              }}
              className="large-12 "
            />

            กรุณาตรวจสอบสิทธิประโยชน์ที่ต้องการ
            <Inner
              style={{
                height: '500px',
              }}
              className="large-12 "
            />

            กรุณาตรวจสอบแผนสิทธิประโยชน์ของคุณ
            <Inner
              style={{
                height: '400px',
              }}
              className="large-12 "
            />

            กรุณาตรวจการอัพโหลดไฟล์ของคุณ
            <Inner
              style={{
                height: '80px',
              }}
              className="large-12 "
            />

            กรุณาตรวจสอบแผนสิทธิประโยชน์ของคุณ
            <Inner
              style={{
                height: '400px',
              }}
              className="large-12 "
            />

            กรุณาตั้งระยะเวลาการเลือกแผนสิทธิประโยชน์ของพนักงาน
            <Inner
              style={{
                height: '130px',
              }}
              className="large-12 "
            />
          </Detail>
          <div style={{ marginTop: '25px' }} className="row">
            <div className="large-9 columns">
              <BackButton>กลับ</BackButton>
            </div>
            <div className="large-3 columns">
              <SendButton>ส่งข้อมูล</SendButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendFlexPlan