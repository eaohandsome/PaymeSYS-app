import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Image, Container, Icon, Checkbox, Divider } from 'semantic-ui-react';
import { Head, Bar } from './styled';
import backgroundpig from '../image/cityscape2.png';
import artboard1 from '../image/dashboard/artboard-1.png';
import artboard2 from '../image/dashboard/artboard-2.png';
import artboard3 from '../image/dashboard/artboard-3.png';
import artboard4 from '../../../assets/Dashboard/history.png';
import artboard5 from '../image/dashboard/artboard-5.png';
import artboard6 from '../image/dashboard/artboard-6.png';
import { getCompleteStep } from '../../api/profile-company';

class Dashboard extends Component {
  static propTypes = {
    getCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.arrayOf(PropTypes.bool).isRequired,
  }

  constructor() {
    super();
    this.state = {
      path: [
        '/simplerequirement',
        '/bidding',
        '/chooseinsuranceplan',
        '/selectrealtime',
      ],
      label: [
        '1. แผนประกันภัย',
        '2. ประมูลราคา',
        '3. จัดแผนสิทธิประโยชน์',
        '4. สรุปจำนวนพนักงาน',
      ],
    };
  }

  componentDidMount = () => {
    this.props.getCompleteStep();
  }

  getStep = () => {
    const { completeStep } = this.props;
    const { path, label } = this.state;
    const allStep = completeStep.map((step, number) => {
      const canGo = completeStep.lastIndexOf(true) + 1 === number;
      if (canGo) {
        return (
          <div className="large-3 columns">
            <Link to={{ pathname: path[number] }} >
              <Checkbox label={label[number]} checked={step} />
            </Link>
          </div>
        );
      }
      return (
        <div className="large-3 columns">
          <Checkbox label={label[number]} checked={step} />
        </div>
      );
    });
    return allStep;
  }

  render() {
    const { completeStep } = this.props;
    let step = '';
    if (completeStep.indexOf(false) !== -1) {
      step = (
        <div>
          <div className="navTop">
            <Icon name="warning sign" size="big" inverted />
            ดำเนินขั้นตอนต่อไปนี้เพื่อใช้งาน BenefiTable
          </div>
          <Bar className="row">
            {this.getStep()}
          </Bar>
        </div>
      );
    }

    return (
      <div className="dashboard">
        {step}
        <Head>
          ยินดีต้อนรับเข้าสู่ BenefiTable
        </Head>
        <Divider />

        <Grid className="dash">
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image
                    className="block"
                    centered
                    src={artboard1}
                    shape="circular"
                  />
                  <Container textAlign="center"> สร้างแผนของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    className="block"
                    centered
                    src={artboard3}
                    shape="circular"
                  />
                  <Container textAlign="center"> อัพเดตจำนวนพนักงาน </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image className="block" src={artboard2} shape="circular" />
                  <Container textAlign="center"> รายการเคลม </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image className="block" src={artboard4} shape="circular" />
                  <Container textAlign="center"> ประวัติการเคลม </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image className="block" src={artboard5} shape="circular" />
                  <Container textAlign="center"> โปรไฟล์ของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image className="block" src={artboard6} shape="circular" />
                  <Container textAlign="center"> ตั้งค่า </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>
          <Grid.Column width={3} />
          <img src={backgroundpig} alt="background" className="bg" />
        </Grid>

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCompleteStep: () => dispatch(getCompleteStep()),
});

const mapStateToProps = state => ({
  completeStep: state.profile.completeStep,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
