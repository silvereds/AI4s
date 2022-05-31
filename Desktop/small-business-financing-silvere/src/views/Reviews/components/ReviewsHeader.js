import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { RatingView } from './commentWidget'

const ReviewsHeader = ({nbReviews})=>{
    return(
        <Stack 
            direction='row'
            sx={{
                height:70,
                px:2,
                alignItems:'center',
                justifyContent:'space-between',
            }}
        >
            <Typography
            sx={{
                color:'#605076',
                fontSize:20,
                fontWeight:'semibold',
            }}
            >
                Reviews
            </Typography>
            <Stack direction='row' spacing={3} sx={{mt:1}}>
                {/* <Star text="4.0"/> */}
                <RatingView text='4.0' rating={5}/>
                <Typography
                    sx={{
                        color:'#F88122',
                        fontSize:14,
                        fontWeight:'semibold',
                    }}
                >
                    {nbReviews} Reviews
                </Typography>
            </Stack>
      </Stack>
    )
}

export default ReviewsHeader