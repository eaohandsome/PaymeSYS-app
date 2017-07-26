import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, Radio } from 'semantic-ui-react'
import '../../../../styles/submit-plan.scss'

class CoPlayBidding extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      showCoPlay: false,
      value: '',
      opdCoPlay: null,
      opdCoPlayQuota: null,
      opdCoPlayDeductable: null,
      opdCoPlayMixPercentage: null,
      opdCoPlayMixNotExceed: null,
      opdCoPlayMixYear: null,
    }
  }

  render() {
    return (
      <div>
        <div className="coplayParagraph">
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share"
                name="CoPlayGroup"
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="เปอร์เซน"
              name="opdCoPlayQuota"
              id="opdCoPlayQuota"
              readOnly
              onChange={this.props.handleChange}
            />
            <p className="selectText"> %</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Deductable"
                name="CoPlayGroup"
                value="Deductable"
                checked={this.state.value === 'Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="opdCoPlayDeductable"
              id="opdCoPlayDeductable"
              onChange={this.props.handleChange}
              readOnly
            />
            <p className="selectText"> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share + Deductable"
                name="CoPlayGroup"
                value="Quota Share + Deductable"
                checked={this.state.value === 'Quota Share + Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <div style={{ display: 'inherit' }}>
              <Form.Input
                type="number"
                style={{ width: '80px' }}
                placeholder="เปอร์เซ็น"
                name="opdCoPlayMixPercentage"
                id="opdCoPlayMixPercentage"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '90px' }}
                label=" %ไม่เกิน"
                placeholder="จำนวนเงิน"
                name="opdCoPlayMixNotExceed"
                id="opdCoPlayMixNotExceed"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '40px' }}
                label=" ต่อ"
                placeholder="ปี"
                name="opdCoPlayMixYear"
                id="opdCoPlayMixYear"
                onChange={this.props.handleChange}
                readOnly
              />
            </div>
          </Form.Group>
        </div>
      </div>
    )
  }
}

CoPlayBidding.propTypes = {}

export default connect(null, null)(CoPlayBidding)
