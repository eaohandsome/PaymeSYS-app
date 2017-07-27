import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { Dropdown, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {
  TinyText,
  BrowsButton,
  NewLine,
  SubmitButton,
  UploadText,
} from './styled'
import '../../../styles/employee-style/claim-insurance.scss'

const HealthOption = [
  {
    key: '1',
    text: 'แว่น',
    value: 'glass',
  },
  {
    key: '2',
    text: 'ยิม',
    value: 'gym',
  },
  {
    key: '3',
    text: 'ตรวจสุขภาพประจำปี',
    value: 'bodycheck',
  },
]
const currencyOption = [
  {
    key: '1',
    text: 'บาท',
    value: 'bath',
  },
  {
    key: '2',
    text: 'usd',
    value: 'usd',
  },
  {
    key: '3',
    text: 'กีบลาว',
    value: 'Lak',
  },
]
class HealthTemplate extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    EmNameoption: PropTypes.shape.isRequired,
    date: PropTypes.shape.isRequired,
    handleUploadcliamFile: PropTypes.func.isRequired,
    ClaimFile: PropTypes.shape.isRequired,
    handleChangeDate: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="InsuranceTemplate">
        <Dropdown
          placeholder="เลือกชนิดของการเคลมสุขภาพ"
          fluid
          selection
          name="HealthType"
          options={HealthOption}
          onChange={this.props.handleChange}
        />
        <NewLine />
        <TinyText>วันที่ในใบเสร็จ</TinyText>
        <div className="Datebox">
          <DatePicker
            placeholderText="DD/MM/YY"
            selected={this.props.date}
            onChange={this.props.handleChangeDate}
          />
        </div>
        <NewLine />
        <TinyText>สถานที่</TinyText>
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="กรอกชื่อสถานที่"
              name="HealthPlace"
              type="text"
              onChange={this.props.handleChange}
              required
            />
          </Form.Field>
        </Form>
        <NewLine />
        <TinyText>ผู้เคลม</TinyText>
        <Dropdown
          placeholder="เลือกผู้เคลม"
          fluid
          selection
          name="ChooseEmployeeName"
          options={this.props.EmNameoption}
          onChange={this.props.handleChange}
        />
        <NewLine />
        <TinyText>จำนวนเงิน</TinyText>
        <Form className="row">
          <Form.Field className="small-7 columns">
            <Form.Input
              placeholder="กรอกจำนวนเงิน"
              name="AmountMoney"
              type="number"
              onChange={this.props.handleChange}
              required
            />
          </Form.Field>
          <div className="small-5 columns" style={{ marginTop: '0px' }}>
            <Dropdown
              className="currency"
              placeholder="สกุล"
              fluid
              selection
              name="currency"
              options={currencyOption}
              onChange={this.props.handleChange}
            />
          </div>
        </Form>
        <NewLine />
        <TinyText>แนบภาพใบเสร็จ (เฉพาะไฟล์ประเภท .pdf .jpg .png)</TinyText>
        <BrowsButton>
          <input
            style={{ display: 'none' }}
            type="file"
            accept=".pdf, .jpg, .png"
            onChange={this.props.handleUploadcliamFile}
          />
          อัพโหลดรูปใบเสร็จ
        </BrowsButton>
        <NewLine style={{ height: '3px' }} />
        <UploadText>
          {this.props.ClaimFile.name}
        </UploadText>
        <NewLine style={{ height: '3px' }} />
        <SubmitButton>
          เคลม
        </SubmitButton>
        <NewLine />
      </div>
    )
  }
}

export default HealthTemplate