import React, { Component } from 'react'
import './gallery.scss'
import cn from 'classnames'

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.initialData = this.props.data
      .map((item) => {
        return {
          ...item,
          status: 'default'
        }
      })

    this.state = {
      selected: null,
      accordionItems: this.initialData
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (itemId, status) => {
    const { accordionItems } = this.state

    switch (status) {
      default:
        const newItems = accordionItems.map((item) => {

          if (item.id === itemId) {
            item.status = 'open'
            return item
          }
            
          item.status = 'closed'
          return item
        }) 

        this.setState({
          selected: itemId,
          accordionItems: newItems
        }) 
        break
        
      case 'open':
        const defaultedData = accordionItems.map((item) => {
          item.status = 'default'
          return item
        })

        this.setState({
          selected: null,
          accordionItems: defaultedData
        })    
    }
  }

  render () {
    const { accordionItems } = this.state

    return (
      <div className='accordion'>
        {
          accordionItems.map((item) => {
            return (
              <AccordionItem 
                item={item}
                key={item.id}
                onClick={this.handleClick} />
            )
          })
        }
      </div>
    )
  }
}

const AccordionItem = ({ item, onClick }) => {
  return (
    <div className={cn('accordion__item', item.status)} onClick={() => onClick(item.id, item.status)}>

      <div className='item__icon'></div>
      <div className='item__caption'>
        <span className='item__title label2'>{item.title}</span>
        <span className='item__subtitle'>{item.subtitle}</span>
        <p className='item__text'>{item.text}</p>
      </div>

    </div>
  )
}

export default Accordion