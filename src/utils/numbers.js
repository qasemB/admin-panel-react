export const numberWithCommas = (number)=>{
    number = number || 0
    const numStrArr = number?.toString().split(".")
    const dec = numStrArr?.length > 1 ? numStrArr[1] : null
    const intNum = numStrArr[0];
    const withDecInt =  intNum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return dec && parseInt(dec) != 0 ? withDecInt+"/"+dec : withDecInt
}
