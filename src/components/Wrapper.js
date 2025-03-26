import { useMediaQuery } from "react-responsive";
const wrapperStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#181B24",
    padding: "0px 20px"
};

export default function Wrapper({ children }) {

    const isMobile = useMediaQuery({ maxWidth: 430 });
    
    return (
        <div style={wrapperStyle} id="wrapper">
            {children}
        </div>
    );
}
