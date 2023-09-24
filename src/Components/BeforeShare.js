import profile from '../images/avatar-michelle.jpg'
import shareimg from '../images/icon-share.svg'


const BeforeShare = ({setShare}) => {

    return ( <>
        <div className='beforeshare'>
        <img src={profile} id='profile'></img>
        <p id='profile-text'>Michelle Appleton<br/><span id='profile-text-date'>28 Jun 2020</span></p>
        <button onClick={() => setShare(true)} className='beforeshare-btn'><img src={shareimg} id='aftershare-img'></img></button>
        </div>
    </>
    );
}

export default BeforeShare