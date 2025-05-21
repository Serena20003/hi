
import { useNavigate } from 'react-router-dom';
import games from './games.json';
const Games = () => {
  const nav = useNavigate();
  function showGame(link) {
    nav(`/projects/games/${link}`);
  }
    return ( 
        <>
        <script src="games_script.js"></script>
    <div className="game_container">
      <div className="game_greeting">user/spring25/game_dev/games</div>
      <div className="game_main_container">
        <div id="game_gallery">
          <div className="game_widget">
            This is a collection of games coded in C++ with assets and guidance
            from USC's ITP380 - Game Development Course.
          </div>
          {
            games.map((game) => {
            return (!game.disabled) && 
            <div className="game_slot"><img className="game_icon" src={require("./assets/" + game.logo + ".png")} onclick={showGame(game.link)}/><div className="game_name">${game.name}</div></div>;
      })
          }
        </div>
      </div>
    </div>
  </>
     );
}
 
export default Games;