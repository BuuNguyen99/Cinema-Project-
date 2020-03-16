const styles = () => ({
    block: {
        border: '1px solid #dedede',
        borderTop: 'none',
    },
    img: {
        width: '100%',
        height: 'auto'
    },
    link: {
        textDecoration: 'unset',
        color: 'inherit',
        cursor: 'pointer',
        "&:hover": {
            textDecoration: 'unset',
            color: 'inherit',
            backgroundColor: '#f1f1f1'
        }
    },
    active: {
        backgroundColor: '#f1f1f1 !important'
    },
    session: {
        border: '1px solid #dedede',
        textAlign: 'center',
        width: '85px',
        marginRight: '10px',
        marginTop: '10px'
    }
})

export default styles