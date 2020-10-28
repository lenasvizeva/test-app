import React, { Component } from 'react'
import Select from 'react-select'

const customStyles = {
  control: () => ({
    display: 'flex',
    marginRight: '60px',
    cursor: 'pointer'
  }),
  container: (provided) => ({
    ...provided,
    display: 'inline-block'
  }),
  placeholder: (provided) => ({
    ...provided,
    position: 'relative',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '500',
    color: '#000',
    whiteSpace: 'nowrap'
  }),
  valueContainer: (provided) => ({
    ...provided,
    flexWrap: 'nowrap',
    height: '30px',
    padding: '0px'
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    marginLeft: '-10px'
  }),
  singleValue: (provided) => ({
    ...provided,
    position: 'relative',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '500',
    color: '#000'
  })
}

const yearOptions = [
  { value: 2020, label: '2020' },
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
]

const monthOptions = [
  { value: null, label: 'все месяцы' },
  { value: '01', label: 'январь' },
  { value: '02', label: 'февраль' },
  { value: '03', label: 'март' },
  { value: '04', label: 'апрель' },
  { value: '05', label: 'май' },
  { value: '06', label: 'июнь' },
  { value: '07', label: 'июль' },
  { value: '08', label: 'август' },
  { value: '09', label: 'сентябрь' },
  { value: '10', label: 'октябрь' },
  { value: '11', label: 'ноябрь' },
  { value: '12', label: 'декабрь' },
]

export default class NewsFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedYear: null,
      selectedMonth: null
    } 
  }

  render() {
    const { selectedMonth, selectedYear } = this.state   

    return (
      <React.Fragment>

        <Select
          options={yearOptions}
          styles={customStyles}
          placeholder='Год'
          value={selectedYear}
          onChange={this.props.yearOnChange}       
        />
       
        <Select
          options={monthOptions}
          styles={customStyles}
          placeholder='Месяц'
          value={selectedMonth}
          onChange={this.props.monthOnChange}
        />

      </React.Fragment>
    )
  }
}