import facebookicon from '../images/icon-facebook.svg'
import twittericon from '../images/icon-twitter.svg'
import pintresticon from '../images/icon-pinterest.svg'
import shareimg from '../images/icon-share.svg'


const AfterShare = ({setShare}) => {

    return (
        <>
        <div className="aftershare">
            <p id="aftershare-share">SHARE</p>
            <button className='socialicon'><img src={facebookicon}></img></button>
            <button className='socialicon'><img src={twittericon}></img></button>
            <button className='socialicon'><img src={pintresticon}></img></button>
            <button id='aftershare-img' onClick={() => setShare(false)} className='aftershare-btn'><img src={shareimg} id='aftershare-img-img'></img></button>
        </div>
        </>
    )
}

export default AfterShare