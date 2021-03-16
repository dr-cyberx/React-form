import React from 'react';
import Style from '../styles/TableData.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import Stylex from '../styles/Th.module.css'
import CData from '../components/data'
import { UserContext } from './context';


function onChange(checked) {
    console.log(`switch to ${checked}`);
}

export default function TableData() {
    const { user, setUser } = React.useContext(UserContext)
    // console.log('context', user)
    return (
        <table className={Stylex.table}>
            <tr style={{ padding: '5px' }} className={Stylex.mytr}>
                <th>Horse Name</th>
                <th>Result</th>
                <th style={{ marginRight: '-104px' }}>Lock Result</th>
                <th>Settle</th>
            </tr>
            {/* <CData />
            <CData color='white' />
            <CData />

            <CData /> */}
            {
                user.tableData.map((item , index) => (
                    <CData id={index} name={item.horseName} radioData={item.result} lockData={item.lockResult} switchData={item.lockResult} color='white' />
                ))
            }

        </table>
    )
}
