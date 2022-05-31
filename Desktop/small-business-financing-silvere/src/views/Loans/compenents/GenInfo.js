import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import Stack  from "@mui/material/Stack"
import  Box  from "@mui/material/Box"
import { useEffect, useState } from "react"
import { LoansItemText, LoansTypography } from "./widget"
import document from './../../../assets/icons/document.svg'
import profile from './../../../assets/images/choose.png'
import Link  from "@mui/material/Link"
import { loans_documents } from "../../../assets/data/loans"

export const GeneralInfo = ({loan,enterprise})=>{

    const [documents , setDocuments] = useState([])
    useEffect(()=>{
        setDocuments([...loans_documents.filter(d => d.loan_id === loan.id)])
    },[loan])

return(
    <Grid container sx={{py:2,height:'50vh'}}>
        <Grid item md={7}>
            <Stack direction='row' spacing={2}>
                <Avatar src={profile}/>
                <LoansItemText 
                    text1={enterprise.name}
                    text2={enterprise.type}
                />
            </Stack>
            <Grid container sx={{py:2}} columnSpacing={3}>
                <Grid item md={6}>
                    <LoansTypography text='Adress' color='#959595' size={12}/>
                    <LoansTypography 
                        text={enterprise.adress} 
                        color='#121212'
                        size={12} 
                    />
                </Grid>
                <Grid item md={6}>
                <LoansTypography text='Contack' color='#959595' size={12} />
                    <LoansTypography text={enterprise.contact}  size={12} color='#121212'/>
                    <LoansTypography text={enterprise.phone} size={12} color='#121212'/>
                </Grid>
            </Grid>
        </Grid>
        {
            documents.length !== 0 ?
            (
            <Grid item md={5}>
                <LoansTypography text='Documents'/>
                {
                    documents.map((doc , index)=>(
                        <Stack direction='row' sx={{py:1, justifyContent:'space-between',alignItems:'center'}} key={index}>
                            <Stack direction='row' spacing={2} sx={{alignItems:'center'}}>
                                <Box component='img' src={document} sx={{height:15,width:16}}/>
                                <LoansTypography text={doc.document_name} size={12} />
                            </Stack>
                            <Link
                                underline='none'
                                href={doc.download_link}
                            >
                                <LoansTypography size={10} text='download'/>
                            </Link>
                        </Stack>
                    ))
                }
            </Grid>
            )
            :
            (<Grid item md={5}>
                <Stack sx={{alignItems:'center',justifyContent:'center',background:'#F8F8F8',height:'100%'}}>
                    <LoansTypography 
                        color='#959595'
                        text='No documents uploaded'
                        fontWeight="Medium"
                        size={18}
                    />
                    <LoansTypography 
                        color='#959595'
                        text='No microfinance has made an offer yet'
                        size={10}
                        fontWeight="Medium"
                    />
                </Stack>
            </Grid>
            )
        }
    </Grid>
        
)
    }