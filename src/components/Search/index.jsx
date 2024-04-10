import React from 'react';
import { Col } from 'antd';


import { Input } from 'antd';

function Search() {
    return (
        <div>
            <Col span={8} offset={8}>
                <Input placeholder='search'/>
            </Col>            
        </div>
    )
}

export default Search