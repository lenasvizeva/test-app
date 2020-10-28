import React, { Component } from 'react'
import css from './style.module.scss'
import cn from 'classnames'
import NewsFilter from './news-filter'

const NEWS_COUNT = 9

class News extends Component {

  constructor(props) {
    super(props)
    this.initialData = []

    this.state = {
      data: [],
      selectedYear: null,
      selectedMonth: null,
      loading: true,
      error: null,
      newsLoaded: NEWS_COUNT
    } 
    
    this.yearOnChange = this.yearOnChange.bind(this)
    this.monthOnChange = this.monthOnChange.bind(this)
    this.getFilteredData = this.getFilteredData.bind(this)
    this.onClickLoadButton = this.onClickLoadButton.bind(this)
  }

  componentDidMount() {
    fetch('/data/news-data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(result => {
      this.initialData = [...result]
      this.setState({data: result})
    })
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
      return this.initialData
        .filter(elem => (year ? elem.date.year === year.value : true))
        .filter(elem => (month ? elem.date.month === month.value : true))
    } else {
      const { value } = month
      return this.initialData
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
    const { data } = this.state

    return (
      <div className={css.newsBlock}>

        <NewsFilter 
          yearOnChange={this.yearOnChange} 
          monthOnChange={this.monthOnChange} />

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