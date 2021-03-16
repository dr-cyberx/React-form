import React, { createContext, useContext, useState, useEffect } from 'react';
import Style from '../styles/TableData.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import Stylex from '../styles/Th.module.css'
import { Spin } from 'antd';
import axios from 'axios';
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { UserContext } from './context';


// const onChange = checked => {
//     if (checked) {
//         <Spinner animation="border" />
//     }
// }

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);




export default function CData({ id , color, name, radioData, lockResult ,switchData}) {

    const [selectedValue, setSelectedValue] = React.useState('a');
    // const [selectedValue0, setSelectedValue0] = React.useState('a');
    const [selectedValue1, setSelectedValue1] = React.useState();
    const [selectedValue5, setSelectedValue5] = React.useState(false);
    const [lyricsItem, setLyricsItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(UserContext)
    // console.log(hello)



    function onChange(checked) {
        console.log(checked)
        setSelectedValue5(checked)
        return checked
    }

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        return event.target.value
    };

    const handleChange1 = (event) => {
        setSelectedValue1(event.target.value)
        return event.target.value
    };



    const lyricsFunction = async () => {
        setLoading(false)
        try {
            const data = await axios
                .get(`https://api.lyrics.ovh/v1/Eminem/Godzilla`)
                .then(res => {
                    // console.log(res);
                    setLyricsItem(res.data.lyrics);
                    // console.log(res.data.lyrics);
                });

            setLoading(true)
        } catch (e) {
            // console.log(e)
        }


    }
    useEffect(() => {
        lyricsFunction()
    }, [])


    // let Myhorse = new Horses("v graham Neighton", selectedValue, selectedValue, selectedValue, selectedValue1, selectedValue5);
    // MyData.push(Myhorse);
    // console.log('This data is inside the array', Myhorse)


    return (
        <tr style={{ background: color }} className={Style.buttons}>
            {loading ? console.log() : <Spin style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'scale(3)'
            }} />}
            <td id={Style.myvalue}>{name}</td>
            <td>
                <div>
                    <GreenRadio
                        checked={radioData === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    /><span>Win</span>
                    <GreenRadio
                        checked={radioData === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'a' }}
                    /><span>Placed</span>
                    <GreenRadio
                        checked={radioData === 'c'}
                        onChange={handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'a' }}
                    /><span>Not Finished</span>
                </div>
                <div className='vishal'>
                    <Checkbox color="primary" value='yes' onChange={handleChange1} /><span> Void Market</span>
                </div>
            </td>
            <td><Switch value='Locked' onClick={(checked)=>(switchData = checked)} /></td>
            {/* {console.log(switchData)} */}
            <td><Link href='/'><button className={Style.btn} onClick={() => {
                user.tableData[id].lockResult = !user.tableData[id].lockResult
            }} >Settle</button></Link></td>



        </tr >
    )
}
