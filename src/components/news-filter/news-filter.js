// import React, {useState} from 'react'
// import Select from 'react-select'
// import css from './style.module.scss'

// const yearOptions = [
//   { value: 2020, label: '2020' },
//   { value: 2019, label: '2019' },
//   { value: 2018, label: '2018' },
// ]

// const monthOptions = [
//   { value: 1, label: 'январь' },
//   { value: 2, label: 'февраль' },
//   { value: 3, label: 'март' },
//   { value: 4, label: 'апрель' },
//   { value: 5, label: 'май' },
//   { value: 6, label: 'июнь' },
//   { value: 7, label: 'июль' },
//   { value: 8, label: 'август' },
//   { value: 9, label: 'сентябрь' },
//   { value: 10, label: 'октябрь' },
//   { value: 11, label: 'ноябрь' },
//   { value: 12, label: 'декабрь' },
// ]

// const NewsFilter = () => {
//   const [selectedYear, setYear] = useState(2020)
//   const [selectedMonth, setMonth] = useState(null)

//   const yearOnChange = (selectedYear) => {
//     setYear(selectedYear)
//   } 

//   const monthOnChange = (selectedMonth) => {
//     setMonth(selectedMonth)
//   } 

//   console.log(selectedMonth, selectedYear)

//   return (
    
//     <div className={css.newsFilter} >

//       <div className={css.select}>
//         <Select
//           options={yearOptions}
//           placeholder='2020 год'
//           // defaultValue={2020}
//           className={css.yearSelect}
//           value={selectedYear}
//           onChange={yearOnChange}
//         />
//       </div>

//       <div className={css.select}>
//         <Select
//           options={monthOptions}
//           placeholder='все месяцы'
//           // defaultValue={null}
//           className={css.monthSelect}
//           value={selectedMonth}
//           onChange={monthOnChange}
//         />
//       </div>

//     </div>
   
//   ) 
// }

// export default NewsFilter