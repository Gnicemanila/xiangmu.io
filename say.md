###  遇到的一些小問題

###  在封装倒计时的组件时候 用new Date 的方式转时间 会报错不能用  这时候就要用dayjs 来转换
    import dayjs from "dayjs";
    new Date(message.game_config.)
    ====>dayjs(next_schedule_time).valueOf()
### 常用的倒計時組件封裝 ===react 
    import React, {Component} from 'react'
    export default class Index extends Component {
        constructor(props){
            super(props)
            this.state={
                init:false,
                second:undefined,
                min:undefined,
                hour:undefined,
                day:undefined,
                setTimer:null
            }
        }
        componentWillUnmount(){
            if(this.state.setTimer){
                clearInterval(this.state.setTimer)
            }
        }
        componentDidMount() {
            this.setTimer(this.props.count);
        }

        componentWillReceiveProps(nextProps, nextContext) {
            if(this.props.count!==nextProps.count){
                if(this.state.setTimer){
                    clearInterval(this.state.setTimer)
                }
                this.setTimer(nextProps.count);
            }
        }

        setTimer (count) {
            let setTimer = setInterval(()=>{
                let time = count - new Date().getTime();
                if(time<0){
                    clearInterval(this.state.setTimer)
                    if(this.props.callback){
                        this.props.callback(); // 该函数用于回調
                    }
                    return
                }
                let day = Math.floor((time / 1000)/(3600 * 24));
                let hour = Math.floor(((time / 1000)%(3600 * 24))/3600)
                let min = Math.floor((((time / 1000)%(3600 * 24))%3600)/60)
                let second = Math.floor((((time / 1000)%(3600 * 24))%3600)%60)
                this.setState({
                    day:day,
                    hour:hour,
                    min:min,
                    second:second,
                });
            },200)
            this.setState({
                setTimer:setTimer
            })

        }

        render () {
            let init = "00:00:00";
            if(this.state.second===undefined){
                return <div className="flip-clock-wrapper">{init}</div>
            }
            return (
                <span className="flip-clock-wrapper">
                    {this.state.day > 0 && this.state.day +"天"}
                    {transTime(this.state.hour)}:{transTime(this.state.min)}:{transTime(this.state.second)}
                </span>
            )
        }
    }

    const transTime=(time)=>{
        if(time>9){
            return time
        }else if(time>0){
            return "0"+time
        }else{
            return "00"
        }
    }
###         