const styles = (theme) => ({
    wrapSeat: {
        textAlign: 'center',
        paddingTop: '80px'
    },
    table: {
        margin: '0 auto',
        borderCollapse: 'unset',
        borderSpacing: '5px'
    },
    seat: {
        fontSize: '13px',
        borderRadius: '5px',
        background: 'lightgray',
        width: '32px',
        height: '32px',
        "&:hover": {
            backgroundColor: theme.color.orange,
            transition: '0.5s'
        }
    }
})

export default styles