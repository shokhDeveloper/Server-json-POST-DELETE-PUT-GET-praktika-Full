export const Modal = ({children, block, setBlock}) => {
    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: block === true? "flex": "none",
        alignItems:"center",
        justifyContent: "center"
    }
    const modalStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
    return(
        <div className="overlay" style={overlayStyle}>
            <div style={modalStyle} className="bg-white position-relative p-4 rounded w-50 mx-auto">
                <div className="modal-text">
                    {children}
                </div>
                <button className="position-absolute btn btn-dark" onClick={() => setBlock(!block)} style={{top: "0px", "right": "0px" }}>&times;</button>
            </div>
        </div>
    )
}