import React, { Component } from 'react'
import css from './style.module.scss'
import cn from 'classnames'
import Select from 'react-select'
import { 
  newsPic1,
  newsPic2,
  newsPic3,
  newsPic4,
  newsPic5,
  newsPic6, 
  newsPic7,
  newsPic8,
  newsPic9,
} from './img'

const NEWS_COUNT = 9

const customStyles = {
  control: () => ({
    display: 'flex',
    marginRight: '60px',
    cursor: 'pointer'
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

const newsData = [
  {
    id: 1,
    pic: newsPic1,
    title: 'Киберпреступники тратят на атаки до $50 000',
    subtitle: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: {
      day: 10,
      month: '07',
      year: 2019
    }
  },
  {
    id: 2,
    pic: newsPic2,
    title: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
    subtitle: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: {
      day: 25,
      month: '06',
      year: 2020
    }
  },
  {  
    id: 3,
    pic: newsPic3,
    title: 'Глобального среднего класса больше не становится',
    subtitle: 'Замедление Китая и общая неопределенность заморозили активы населения',
    date: {
      day: 31,
      month: '05',
      year: 2019
    }
  },
  {
    id: 4,
    pic: newsPic4,
    title: 'Скорость доступа к запрещенным сайтам ограничит суд',
    subtitle: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
    date: {
      day: 10,
      month: '07',
      year: 2018
    }
  },
  {
    id: 5,
    pic: newsPic5,
    title: 'Самая читающая страна в мире',
    subtitle: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: {
      day: 25,
      month: '06',
      year: 2019
    }
  },
  {
    id: 6,
    pic: newsPic6,
    title: 'Нуждаюсь в некоторой степени',
    subtitle: 'Замедление Китая и общая неопределенность заморозили активы населения',
    date: {
      day: 31,
      month: '02',
      year: 2018
    }
  },
  {
    id: 7,
    pic: newsPic7,
    title: 'Следственный комитет ищет экс-главу Северстали',
    subtitle: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: {
      day: 14,
      month: '05',
      year: 2020
    }
  },
  {
    id: 8,
    pic: newsPic8,
    title: '«ПИК» уходит с Лондонской фондовой биржи',
    subtitle: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: {
      day: 12,
      month: '07',
      year: 2018
    }
  },
  {
    id: 9,
    pic: newsPic9,
    title: 'Самая читающая страна в мире',
    subtitle: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: {
      day: 12,
      month: '04',
      year: 2020
    }
  },
  {
    id: 10,
    pic: newsPic5,
    title: 'Самая читающая страна в мире',
    subtitle: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: {
      day: 25,
      month: '06',
      year: 2019
    }
  },
  {
    id: 11,
    pic: newsPic6,
    title: 'Нуждаюсь в некоторой степени',
    subtitle: 'Замедление Китая и общая неопределенность заморозили активы населения',
    date: {
      day: 31,
      month: '02',
      year: 2018
    }
  },
  {
    id: 12,
    pic: newsPic7,
    title: 'Следственный комитет ищет экс-главу Северстали',
    subtitle: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: {
      day: 14,
      month: '05',
      year: 2020
    }
  },
  {
    id: 13,
    pic: newsPic8,
    title: '«ПИК» уходит с Лондонской фондовой биржи',
    subtitle: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: {
      day: 12,
      month: '07',
      year: 2018
    }
  },
  {
    id: 14,
    pic: newsPic9,
    title: 'Самая читающая страна в мире',
    subtitle: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: {
      day: 12,
      month: '04',
      year: 2020
    }
  }
]

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: newsData,
      selectedYear: null,
      selectedMonth: null,
      newsLoaded: NEWS_COUNT
    } 

    this.yearOnChange = this.yearOnChange.bind(this)
    this.monthOnChange = this.monthOnChange.bind(this)
    this.isLoadButtonVisible = this.isLoadButtonVisible.bind(this)
    this.getFilteredData = this.getFilteredData.bind(this)
    this.onClickLoadButton = this.onClickLoadButton.bind(this)
  }

  yearOnChange = (value) => {
    const filteredData = this.getFilteredData(value, this.state.selectedMonth)

    this.setState({
      ...this.state,
      selectedYear: value,
      data: filteredData,
      newsLoaded: NEWS_COUNT
    })
  } 

  monthOnChange = (value) => {
    const filteredData = this.getFilteredData(this.state.selectedYear, value)
  
    this.setState({
      ...this.state,
      selectedMonth: value,
      data: filteredData,
      newsLoaded: NEWS_COUNT
    })
  }

  getFilteredData = (year, month) => {
    if (month === null) {
      return newsData
        .filter(elem => (year ? elem.date.year === year.value : true))
        .filter(elem => (month ? elem.date.month === month.value : true))
    } else {
      const { value } = month
      return newsData
        .filter(elem => (year ? elem.date.year === year.value : true))
        .filter(elem => (value ? elem.date.month === month.value : true))
    } 
  }

  isLoadButtonVisible() {
    const { data, newsLoaded } = this.state
    return data.length > newsLoaded
  }

  onClickLoadButton() {
    this.setState({
      newsLoaded: this.state.newsLoaded + NEWS_COUNT
    })
  }

  render() {
    const { data, selectedMonth, selectedYear } = this.state   

    return (
      <div className={css.newsBlock}>

        <div className={css.newsBlock__filter}>
          <div className={css.select}>
            <Select
              options={yearOptions}
              styles={customStyles}
              placeholder='Год'
              value={selectedYear}
              onChange={this.yearOnChange}
              
            />
          </div>

          <div className={css.select}>
            <Select
              options={monthOptions}
              styles={customStyles}
              placeholder='Месяц'
              value={selectedMonth}
              onChange={this.monthOnChange}
            />
          </div>
        </div>

        <div className={css.newsBlock__list}>
          {
            data.slice(0, this.state.newsLoaded).map((item) => {
              return (
                <a href="#" className={css.list__item} key={item.id}>
                  <img src={`${item.pic}`} />
                  <p className={css.title}>{item.title}</p>
                  <p className={cn('label', css.subtitle)}>{item.subtitle}</p>
                  <span className={css.date}>
                    {`${item.date.day}.${item.date.month}.${item.date.year}`}
                  </span>
                </a>
              )
            })
          }
        </div>    
        
        <div className={css.btnLoad}  hidden={!this.isLoadButtonVisible()}>
          <button className='btn coral' onClick={this.onClickLoadButton}>загрузить ещё</button>
        </div>
      </div>
    )
  }
}

export default News