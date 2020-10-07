import React, { Component } from 'react'
import css from './style.module.scss'
import cn from 'classnames'
import newsPic1 from './img/news01.jpg'
import NewsFilter from '../news-filter'
import Select from 'react-select'

const customStyles = {
  control: () => ({
    width: 'auto',
    fontSize: '18px',
    lineHeight: '24px'
  })
}

const yearOptions = [
  { value: 2020, label: '2020' },
  { value: 2019, label: '2019' },
  { value: 2018, label: '2018' },
]

const monthOptions = [
  { value: 1, label: 'январь' },
  { value: 2, label: 'февраль' },
  { value: 3, label: 'март' },
  { value: 4, label: 'апрель' },
  { value: 5, label: 'май' },
  { value: 6, label: 'июнь' },
  { value: 7, label: 'июль' },
  { value: 8, label: 'август' },
  { value: 9, label: 'сентябрь' },
  { value: 10, label: 'октябрь' },
  { value: 11, label: 'ноябрь' },
  { value: 12, label: 'декабрь' },
]

const newsData = [
  {
    id: 1,
    pic: newsPic1,
    title: 'News 1 title',
    subtitle: 'News 1 subtitle and more',
    date: {
      day: 21,
      month: 2,
      year: 2018
    }
  },
  {
    id: 2,
    pic: newsPic1,
    title: 'News 2 title',
    subtitle: 'News 2 subtitle and more',
    date: {
      day: 19,
      month: 4,
      year: 2018
    }
  },
  {  
    id: 3,
    pic: newsPic1,
    title: 'News 3 title',
    subtitle: 'News 3 subtitle and more',
    date: {
      day: 11,
      month: 5,
      year: 2018
    }
  },
  {
    id: 4,
    pic: newsPic1,
    title: 'News 4 title',
    subtitle: 'News 4 subtitle and more',
    date: {
      day: 2,
      month: 8,
      year: 2018
    }
  },
  {
    id: 5,
    pic: newsPic1,
    title: 'News 5 title',
    subtitle: 'News 5 subtitle and more',
    date: {
      day: 24,
      month: 12,
      year: 2018
    }
  },
  {
    id: 6,
    pic: newsPic1,
    title: 'News 6 title',
    subtitle: 'News 6 subtitle and more',
    date: {
      day: 15,
      month: 2,
      year: 2019
    }
  },
  {
    id: 7,
    pic: newsPic1,
    title: 'News 7 title',
    subtitle: 'News 7 subtitle and more',
    date: {
      day: 14,
      month: 5,
      year: 2019
    }
  },
  {
    id: 8,
    pic: newsPic1,
    title: 'News 8 title',
    subtitle: 'News 8 subtitle and more',
    date: {
      day: 12,
      month: 7,
      year: 2019
    }
  },
  {
    id: 9,
    pic: newsPic1,
    title: 'News 9 title',
    subtitle: 'News 9 subtitle and more',
    date: {
      day: 12,
      month: 4,
      year: 2020
    }
  }
]

class News extends Component {
  state = {
    data: newsData,
    selectedYear: 2020,
    selectedMonth: null
  } 

  // yearOnChange = (selectedYear) => {
  //   this.setState(selectedYear)
  // } 

  // monthOnChange = (selectedMonth) => {
  //   this.setState(selectedMonth)
  // } 



  render() {
    const { data, selectedMonth, selectedYear } = this.state
    
    return (
      <div className={css.newsBlock}>

        <div className={css.newsBlock__filter}>
          <div className={css.select}>
            <Select
              options={yearOptions}
              placeholder='2020 год'
              // defaultValue={2020}
              className={css.yearSelect}
              value={selectedYear}
              onChange={this.yearOnChange}
              styles={customStyles}
            />
          </div>

          <div className={css.select}>
            <Select
              options={monthOptions}
              placeholder='все месяцы'
              // defaultValue={null}
              className={css.monthSelect}
              value={selectedMonth}
              onChange={this.monthOnChange}
              styles={customStyles}
            />
          </div>
        </div>

        <ul className={css.newsBlock__list}>
          {
            data.map((item) => {
              return (
                <li className={css.list__item} key={item.id}>
                  <img src={`${item.pic}`} />
                  <p className={css.title}>{item.title}</p>
                  <p className={cn('label', css.subtitle)}>{item.subtitle}</p>
                  <span className={css.date}>
                    {`${item.date.day}.${item.date.month}.${item.date.year}`}
                  </span>
                </li>
              )
            })
          }
        </ul>
        
        <div className={css.btnLoad}>
          <button className='btn coral'>загрузить ещё</button>
        </div>
      </div>
    )
  }
}

export default News