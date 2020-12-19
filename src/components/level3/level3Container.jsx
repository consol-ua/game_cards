import { connect } from "react-redux";
import {
  flipOnClickAC,
  lockedCardsAC,
  resetCardsAC,
  resetGameAC,
  setCardsAC,
  winGameAC,
} from "../../redux/level_reducer";
import Level3 from "./level3";

function mapStateToProps(state) {
  return {
    level3: state.levelPage,
    cards: state.levelPage.cards,
    flippedCards: state.levelPage.flippedCards,
    entryCardId: state.levelPage.entryCardId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    flipOnClick: (id, name) => dispatch(flipOnClickAC(id, name)),
    resetCasds: () => dispatch(resetCardsAC()),
    setCards: (cards) => dispatch(setCardsAC(cards)),
    lockedCard: (name) => dispatch(lockedCardsAC(name)),
    winGame: () => dispatch(winGameAC()),
    resetGame: () => dispatch(resetGameAC()),
  };
}
const Level3Container = connect(mapStateToProps, mapDispatchToProps)(Level3);
export default Level3Container;
