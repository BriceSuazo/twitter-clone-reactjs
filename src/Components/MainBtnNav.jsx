import './mainBtnNav.css';
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import { BookmarkBorderOutlined, FeaturedPlayListOutlined, HomeOutlined, MailOutlineOutlined, MoreHorizOutlined, NotificationsNoneOutlined, PersonOutlined, TagOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";
import MoreBtnNav from './MoreBtnNav';

const styles = {
    logo: {
      fontSize: 38,
    },
    btnIcon: {
      fontSize: 30,
    },
  
};

const MainBtnNav = () => {
    const [show, toggleShow] = React.useState(false);
    return (
        <div className="MainBtnNav">
            <div className="MainBtnNavWrapper">
                <div className="btnsWrapper">
                    <div className="logoWrapper">
                        <TwitterIcon sx={ styles.logo } />
                    </div>
                    <Link to="/" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <HomeOutlined sx= { styles.btnIcon }/>
                        <span>Home</span>
                    </Link>
                    <Link to="/explore" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <TagOutlined sx= { styles.btnIcon }/>
                        <span>Explore</span>
                    </Link>
                    <Link to="/notifications" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <NotificationsNoneOutlined sx= { styles.btnIcon }/>
                        <span>Notifications</span>
                    </Link>
                    <Link to="/messages" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <MailOutlineOutlined sx= { styles.btnIcon }/>
                        <span>Messages</span>
                    </Link>
                    <Link to="/bookmarks" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <BookmarkBorderOutlined sx= { styles.btnIcon }/>
                        <span>Bookmarks</span>
                    </Link>
                    <Link to="/lists" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <FeaturedPlayListOutlined sx= { styles.btnIcon }/>
                        <span>Lists</span>
                    </Link>
                    <Link to="/brice_suazo" style={{ textDecoration: 'none' }} className="btnWrapper">
                        <PersonOutlined sx= { styles.btnIcon }/>
                        <span>Profile</span>
                    </Link>
                    <div onClick={() => toggleShow(!show)} className="btnWrapper profile">
                        { show && <MoreBtnNav /> }   
                        <MoreHorizOutlined sx= { styles.btnIcon }/>
                        <span>More</span>
                    </div>
                    <span className="btnTweet">Tweet</span>
                </div>
                
                <div className="btnProfileWrapper">
                    <div className="btnProfile">
                        <img src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/213619586_4176300955791613_9078051559512662378_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECrdsuPio5ZSicjcrp5KM28s0D1TAKwgjyzQPVMArCCGiV5qCddGCQ1dtYAvyx3YRGMt3bIvAs6y6GRnD-LT85&_nc_ohc=87-LACrqpi4AX8610vZ&_nc_ht=scontent.fmnl25-1.fna&oh=f9cf9e8c84f17234b92b6c2c9c1be268&oe=6174FF0E" alt="" className="btnProfilePic"/>
                        <div className="btnProfileInfoWrapper">
                            <span className="btnProfileName">Brice Suazo</span>
                            <span className="btnProfileUsername">@brice_suazo</span>
                        </div>
                    </div>
                    <MoreHorizOutlined className="btnProfileMore"/>
                </div>
            </div>
        </div>
    )
}

export default MainBtnNav