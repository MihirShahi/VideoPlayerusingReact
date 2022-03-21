import logo from './logo.svg';
import './App.css';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    
    <div className="App container-fluid bg-light">
      <h1>Media Player</h1>
      <div className="row">
        {/* Video 1 */}
      <div className='col-lg-12 col-sm-12'>
        <div className="video">
          <ShakaPlayer
            src = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />
            </div>
                <div class="card">
                   <div class="card-body">
                   <h5 class="card-title">Scenery</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Video 1</h6>
                        <p class="card-text">//Description about the place </p>
                    </div>
                </div>
        </div>

        {/* Video 2 */}

        <div className='col-lg-12 col-sm-12'>
          <div className="video">
          <ShakaPlayer
            src = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"/>
            </div>
                <div class="card">
                   <div class="card-body">
                   <h5 class="card-title">Animation</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Video 2</h6>
                        <p class="card-text">//Description about the animation video</p>
                    </div>
                </div>
        </div>

       
      </div>

    <div className="footer">

    </div>
      
    </div>
  );
}

export default App;
