import React, {Component} from "react";
import Player from "../Player/Player";
import PlayList from "../PlayList/PlayList";

const list = [
  "../files/01.mp3",
  "../files/02.mp3",
  "../files/03.mp3",
  "../files/04.mp3",
  "../files/05.mp3",
  "../files/06.mp3"
];

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      showList: true
    };
    this.audioPlayer = React.createRef();

  }

  handleNextClick = () => {
    const {current} = this.state;
    if (current === list.length - 1) this.setState({current: 0});
    else if (current <= list.length) this.setState({current: current + 1});
  };

  handlePreviousMusic = () => {
    const {current} = this.state;
    if (current === 0) this.setState({current: 6});
    else if (current >= 1) this.setState({current: current - 1});
  };


  handleTogglePlaylist = () => {
    this.setState({showList: !(this.state.showList)});
    console.log(this.state.showList);

  };

  handlePlaylistClick = self => {
    this.setState({current: self})
  };


  componentDidMount() {
    // this.audioPlayer.current.addEventListener('ended', this.handleNextClick);
    this.audioPlayer.current.onended = this.handleNextClick;
  }


  render() {
    return (
      <React.Fragment>
        <Player
          refElement={this.audioPlayer}
          list={list}
          current={this.state.current}
          nextMusic={this.handleNextClick}
          togglePlaylist={this.handleTogglePlaylist}
          previousMusic={this.handlePreviousMusic}
        />
        <PlayList list={list}
                  handleClick = {this.handlePlaylistClick}
                  current={this.state.current}
                  showList={this.state.showList}
        />
      </React.Fragment>
    );
  }
}

export default MusicPlayer;
