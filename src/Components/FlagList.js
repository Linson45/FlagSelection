import React from 'react'
import { FlagOutlined } from '@ant-design/icons';
import { Col } from 'antd';
function FlagList(props) {
    return (
        <Col className={"cardContainer"} span={4} style={{padding:"10px",}}>
            <p style={{color:"blue"}}>{props.flagtitle}</p>
            <span  style={{borderRadius: "50px",border:"1px solid "+props.color,borderStyle: "dashed",height: "25px",width: "25px",display: "inline-block"}}>
            <FlagOutlined style={{ color: props.color }} />
            </span>
            <p style={{color:"grey"}}>{props.severity}</p>
        </Col>
    )
}

export default FlagList
