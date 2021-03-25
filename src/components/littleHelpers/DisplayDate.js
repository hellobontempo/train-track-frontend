import { format} from 'date-fns'


const DisplayDate = ({date}) => {
   return format(new Date(), 'MM/d/yyyy')
}

export default DisplayDate