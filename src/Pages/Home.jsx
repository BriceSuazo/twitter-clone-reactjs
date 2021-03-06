import '../App.css';
import MainBtnNav from '../Components/MainBtnNav';
import SearchBar from '../Components/SearchBar';
import HeaderBar from '../Components/HeaderBar';
import PostTweetContainer from '../Components/PostTweetContainer';
import TweetText from '../Components/TweetText';
import TrendsForYouContainer from '../Components/TrendsForYouContainer';
import WhoToFollow from '../Components/WhoToFollow';

const Home = () => {
    return (
        <div className="HomePage">
            <div className="leftNavigation">
                <MainBtnNav />
            </div>
            <div className="centerNavigation">
                <HeaderBar headerTitle="Home"/>
                <PostTweetContainer />
                <TweetText />
                <TweetText />
                <TweetText />
                <TweetText />
            </div>
            <div className="rightNavigationWrapper">
                <div className="rightNavigation">
                    <div className="stickySearchBarWrapper">
                        <SearchBar />
                    </div>
                    <TrendsForYouContainer />
                    <WhoToFollow />
                    <WhoToFollow />
                </div>
            </div>
        </div>
    )
}

export default Home