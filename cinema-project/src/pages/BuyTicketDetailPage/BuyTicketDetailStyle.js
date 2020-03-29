const styles = (theme) => ({
    chooseMovie: {
        backgroundColor: theme.color.orange
    },
    movie:{
        backgroundColor: theme.color.lightGray,
        padding: '10px 30px'
    },
    header:{
        color: 'white',
        fontSize: '22px',
        letterSpace: '3px',
        marginBottom: '15px'
    },
    imageMovie: {
        width: '100%',
        height: 'auto',
        //adding: '10px 30px'
    },
    button: {
        backgroundColor: theme.color.orange,
        border: 'none',
        padding: '7px 25px',
        color: 'white',
        display: 'block',
        margin: '0 auto',
        "&:hover": {
            backgroundColor: '#e46b3d'
        }
    },
    wrap: {
        height:'500px'
    }
})

export default styles