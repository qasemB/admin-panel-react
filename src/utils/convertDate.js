import jMoment from 'jalali-moment'

export const convertDateToJalali =(date)=>{
    return jMoment(date).format('jYYYY/jMM/jDD')
}

export const convertFormDateToMiladi = (date)=>{
    const persinaDate = date.replace(/\s/g, '');
    const truePersianDate = jMoment(persinaDate, 'D/M/YYYY').format('YYYY/MM/DD')
    return jMoment(truePersianDate, 'jYYYY/jMM/jDD').format('YYYY-M-D')
}