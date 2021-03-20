import { Fragment } from "react"


const TableHeader = props => {

    function customheader (){
        console.log(props)
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        if (props.startDay) {
            let customWeek = weekDays.slice(props.firstRest).concat(weekDays.slice(0, props.firstRest))
            return (
            <tr>
            {customWeek.map(day => <th key={`custom-week-${day}`}>{day}</th>)} 
            </tr>)
        } else {
            return (
            <tr>
            {weekDays.map(day => <th key={`default-week-${day}`}>{day}</th>)} 
            </tr>)
        }

    }
    return (
        <Fragment>
            {customheader()}
        </Fragment>
    )
}

export default TableHeader