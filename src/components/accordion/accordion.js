import React, { Component } from 'react'
import './accordion.scss' 
import galleryPic from '../../images/gallery_pic.jpg'
import cn from 'classnames'

const data = [
  {
    id: 1,
    title: 'уникальные виды',
    subtitle: 'Прекрасный вид',
    imageUrl: galleryPic,
  },
  {
    id: 2,
    title: 'Панорамные окна',
    subtitle: 'Настоящие панорамы',
    imageUrl: galleryPic,
  },
  {
    id: 3,
    title: 'высокие потолки',
    subtitle: 'Простор для идей',
    imageUrl: galleryPic,
  },
  {
    id: 4,
    title: 'ПРИВАТНОСТЬ',
    subtitle: 'VIP-безопасность',
    imageUrl: galleryPic,
  },
  // {
  //   id: 5,
  //   title: 'Настоящие панорамы',
  //   subTitle: 'Панорамные окна',
  //   imageUrl: galleryPic,
  // },
  // {
  //   id: 6,
  //   title: 'Настоящие панорамы',
  //   subTitle: 'Панорамные окна',
  //   imageUrl: galleryPic,
  // }
]

class Accordion extends Component {
  constructor(props) {
    super(props)
    const extendedData = data.map((item) => {
      return {
        ...item,
        status: 'default'
      }
    })

    this.state = {
      selected: null,
      accordionItems: extendedData
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (itemId) => {
    const { accordionItems } = this.state

    const newItems = accordionItems.map((item) => {

      if (item.id === itemId) {
        item.status = 'open'
        return  item
      } 
        
      item.status = 'closed'
      return item
    }) 

    this.setState({
      selected: itemId,
      accordionItems: newItems
    }) 
  }

  render () {

    return (
      <div className='accordion'>
        {
          this.state.accordionItems.map((item) => {
            return (
              <AccordionItem 
                item={item}
                key={item.id}
                onClick={this.handleClick} 
                  />
            )
          })
        }
      </div>
    )
  }
}

const AccordionItem = ({ item, onClick }) => {
  return (
    <div className={cn('accordion__item', item.status)} onClick={() => onClick(item.id)}>
      
      <img src={item.imageUrl} />
      <div className='item__slide-caption'>
        <div className='plus-icon'></div>
        <p className='slide-title label2'>{item.title}</p>
        <p className='slide-subtitle'>{item.subtitle}</p>
      </div>

    </div>
  )
}

export default Accordion


// const arr = [0, 1, 2, 3, 4]

// function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(null)

//   const itemClickHandler = curry(function (index, event) {
//     setActiveIndex(index)
//   })

//   return (
//     <div>
//       {arr.map((el, index) => (
//         <AccordionItem onClick={itemClickHandler(index)} active={activeIndex === index} />
//       ))}
//     </div>
//   )
// }