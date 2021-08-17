import FlagList from "./FlagList"
import {Row,Col} from "antd"

const FlagCotainer = (data) => {
    return (
        <Row style={{display:'flex'} }>
            {data.data.map((Flags)=>(
                <FlagList flagtitle={Flags.flagtitle} severity={Flags.severity} color={Flags.color}/>
            ))}
        </Row>
    )
}

export default FlagCotainer
