export const style = {
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    borderRadius:1,
    boxShadow: 24,
    p:4,
};
export const status_style = {
    alignItems:'center',
    justifyContent:'center',
    background:'#FD7575',
    px:2,color:'#FFFFFF',
    py:0.5,
    fontSize:10,
    borderRadius:2
}
export const buttonStyle = {
    background:'#0FB9C5',
    textTransform:'none',
    color:'#FFFFFF',
    '&:hover':{background:'#0FB9C5'},
    height:'2vw',
    width:'30%',
    mt:5,
    left:'35%',
    boxShadow:'rgba(100, 100, 111, 0.2) 2px 2px 2px 0px'
}

export const textareaStyle = {
    mt:1,
    background: "#F8F8F8",
    border: "none",
    fontSize: 14,
    color: "#5D5C5C",
    minHeight: "80px",
    maxHeight: "80px",
    minWidth: "100%",
    maxWidth: "100%",
}
export const textareaAddNoteStyle = {
    mt:1,
    background: "#F8F8F8",
    border: "none",
    fontSize: '1vw',
    color: "#5D5C5C",
    minHeight: "150px",
    maxHeight: "150px",
    minWidth: "100%",
    maxWidth: "100%",
}

export function getButtonStyle(color){
    return {
        border:'1px solid '+color,
        borderRadius:10,
        color:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:color,
        px:2,
        width:110,
        fontSize:12
    }
}

export const boxTableStyle = {
    px:1,
    py:1,
    pb:5,
    //background:'red',
    maxHeight:{md:'55vh',xl:'65vh'}
}
export const containerTableStyle = {
    maxHeight:{md:'45vh',xl:'60vh'},
    pb:1,
    mt:1,
    //background:'green',
}