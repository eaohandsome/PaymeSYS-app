import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../../api/profileCompany'
import {
  Button,
  Form,
  Grid,
  Segment,
  Image,
  Dropdown,
  Menu,
  Container,
} from 'semantic-ui-react'
import {
  Text,
  Box,
  Border,
  Head,
  Detail1,
  Oval,
  Detail2,
  Detail3,
  Next,
} from './Styled'
import styled from 'react-sc'

const SegmentWithHeight = styled(Segment)`
  &&&{
    height: 100%;
  }
`
const NextButton = styled.button`
    width: 9.5%;
    height: auto;
    border-radius: 20px;
	  background-color: #f7555f;
	  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    color: white;
    margin-top:1%;
    text-align:center;
    margin-right:26%;
    margin-left:auto;
    padding: 0.5%;

`
const BusinessTypes = [
  {
    text: 'ประเภท 1',
    value: 'Type 1',
  },
  {
    text: 'ประเภท 2',
    value: 'Type 2',
  },
  {
    text: 'ประเภท 3',
    value: 'Type 3',
  },
]
const NumberOfEmployees = [
  {
    text: '1-50',
    value: '1-50',
  },
  {
    text: '51-100',
    value: '51-100',
  },
  {
    text: '101-150',
    value: '101-150',
  },
]

class SettingProfile extends Component {
  constructor() {
    super()
    this.state = {
      companyName: '',
      location: '',
      hrDetail: '',
      tel: '',
      typeOfBusiness: '',
      numberOfEmployees: '',
      companyBroker: '',
      companyInsurer: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { companyFill } = this.props
    const {
      companyName: { value: companyName },
      location: { value: location },
      hrDetail: { value: hrDetail },
      tel: { value: tel },
      companyBroker: { value: companyBroker },
      companyInsurer: { value: companyInsurer },
    } = e.target

    this.setState({
      companyName: companyName,
      location: location,
      hrDetail: hrDetail,
      tel: tel,
      companyBroker: companyBroker,
      companyInsurer: companyInsurer,
    })

    this.props.createProfile(this.state)
  }
  onInputChange(value, stateName) {
    this.setState({ [stateName]: value })
  }

  render() {
    console.log(this.state)
    return (
      <div style={{ background: '#F1F1F1', paddingTop: '5%' }}>

        <Grid>
          <Container text>
            <Grid.Row>
              <Head>กรุณาตั้งค่าโปรไฟล์</Head>
            </Grid.Row>
          </Container>
        </Grid>
        <form onSubmit={this.handleSubmit}>
          <Grid centered>
            <Grid.Row columns={2}>
              <Grid.Column width={3}>
                <SegmentWithHeight raised>
                  <Detail1>
                    อัพโหลดโลโก้
                  </Detail1>
                  <Image
                    centered
                    src="http://www.cotto.com/common/data/series/b-man/03.jpg"
                    size="small"
                    shape="circular"
                  />
                  <Oval>อัพโหลดรูปภาพ</Oval>
                </SegmentWithHeight>
              </Grid.Column>
              <Grid.Column width={5}>
                <Segment raised>
                  <Detail2>
                    ข้อมูลบริษัท
                  </Detail2>
                  <Detail3>
                    ชื่อบริษัท
                  </Detail3>
                  <Box
                    name="companyName"
                    size="big"
                    placeholder="ชื่อบริษัท"
                    defaultValue={this.props.profile.companyName}
                    required
                  />
                  <Detail3>
                    ที่อยู่บริษัท
                  </Detail3>
                  <Box
                    name="location"
                    size="big"
                    placeholder="ที่อยู่บริษัท"
                    defaultValue={this.props.profile.companyName}
                  />
                  <Detail3>
                    บุคคลติดต่อหลัก
                  </Detail3>
                  <Box
                    name="hrDetail"
                    size="big"
                    placeholder="บุคคลติดต่อหลัก"
                    defaultValue={this.props.profile.companyName}
                  />
                  <Detail3>
                    เบอร์โทร
                  </Detail3>
                  <Box
                    name="tel"
                    size="big"
                    placeholder="เบอร์โทร"
                    defaultValue={this.props.profile.companyName}
                  />
                  <Detail3>
                    ประเภทธุรกิจ
                  </Detail3>
                  <Dropdown
                    placeholder="ประเภทธุรกิจ"
                    onChange={(t, data) =>
                      this.onInputChange(data.value, 'typeOfBusiness')}
                    name="typeOfBusiness"
                    fluid
                    selection
                    options={BusinessTypes}
                  />
                  <Detail3>
                    จำนวนพนักงาน
                  </Detail3>
                  <Dropdown
                    placeholder="จำนวนพนักงาน"
                    onChange={(n, data) =>
                      this.onInputChange(data.value, 'numberOfEmployees')}
                    name="numberOfEmployees"
                    fluid
                    selection
                    options={NumberOfEmployees}
                  />
                  <Detail3>
                    companyBroker ที่ใช้ในปัจจุบัน
                  </Detail3>
                  <Box
                    name="companyBroker"
                    size="big"
                    placeholder="companyBroker ที่ใช้ในปัจจุบัน"
                    defaultValue={this.props.profile.companyName}
                  />
                  <Detail3>
                    บริษัทประกันที่ใช้ในปัจจุบัน
                  </Detail3>
                  <Box
                    name="companyInsurer"
                    size="big"
                    placeholder="บริษัทประกันที่ใช้ในปัจจุบัน"
                    defaultValue={this.props.profile.companyName}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row floated="right">
              <NextButton type="submit"> ต่อไป </NextButton>
            </Grid.Row>
          </Grid>
        </form>
      </div>
    )
  }
}

SettingProfile.propTypes = {}

const mapDispatchToProps = dispatch => ({
  createProfile: data => dispatch(createProfile(data)),
})

const mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingProfile)
