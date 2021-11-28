export const isNonExpiredDate = date => {
    const time = new Date( Date.now() );

    const year = time.getFullYear() + '-';
    const month= (Number(time.getMonth()) + 1) > 9 ?  (Number(time.getMonth()) + 1)+ '-' : '0'+(Number(time.getMonth()) + 1)+ '-';
    const day =   time.getDate() > 9 ? time.getDate() : '0' + time.getDate();
    const now = year + month + day;

    return date >= now ? true : false;
}
