function dateFormatter(date) {
    var pieced = date.split("/")
    var formatted = pieced[1];
    switch(pieced[0]) {
        case "01":
            formatted += " January, "
            break;
        case "02":
            formatted += " February, "
            break;
        case "03":
            formatted += " March, "
            break;
        case "04":
            formatted += " April, "
            break;
        case "05":
            formatted += " May, "
            break;
        case "06":
            formatted += " June, "
            break;
        case "07":
            formatted += " July, "
            break;
        case "08":
            formatted += " August, "
            break;
        case "09":
            formatted += " September, "
            break;
        case "10":
            formatted += " October, "
            break;
        case "11":
            formatted += " November, "
            break;
        case "12":
            formatted += " December, "
            break;
        default:
            formatted += " NaN, "
    }
    formatted += pieced[2]
    
    return formatted
}

export default dateFormatter