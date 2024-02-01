// import BannerIntroduction from './components/header/banner_introduction';
import CountdownTimer from './components/articles/countdown/countdown_timer'
import './scss/index.scss'
import HeaderIntro from './components/articles/introduce/header_intro/header_intro';
import WeddingSchedule from './components/articles/calendar_wedding/wedding-schedule';
import WeddingBox from './components/articles/wedding_box/wedding_box';

function App() {


  return (
    <div className="App">
      <HeaderIntro />
      <WeddingSchedule />
      <WeddingBox />
    </div>
  );
}

export default App;
