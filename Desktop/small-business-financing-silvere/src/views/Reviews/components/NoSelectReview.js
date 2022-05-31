import no_reviews from '../../../assets/icons/no_reviews.svg'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
const NoSelectReview = ()=>(
    <>
        <Avatar src={no_reviews} sx={{width:90,height:100,borderRadius:0}}/>
        <Typography sx={{fontSize:18,color:'#C2C1C1'}}>
            select review to see responds
        </Typography>
        <Typography sx={{fontSize:10,color:'#909293'}}>
            Click on the card on the list to view the details
        </Typography>
    </>

) 

export default NoSelectReview