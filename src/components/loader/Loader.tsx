import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { ILoaderProps } from './interface/LoaderProps';
import './loader.css';





export default function Loader ({text}:ILoaderProps) {

    return(
        <div className='Loader__container'>
            <Spin 
                indicator={
                    <LoadingOutlined 
                        spin 
                        className='Loader__icon'
                        
                    />
                } 
            />
            <p className='Loader__text'>{text}</p>
        </div>
    )

}

