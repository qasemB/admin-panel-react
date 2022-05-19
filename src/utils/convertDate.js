import jMoment from 'jalali-moment'

export const convertDateToJalali =(date)=>{
    return jMoment(date).format('jYYYY/jMM/jDD')
}