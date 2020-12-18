import { connect } from "react-redux";
import {
  flipOnClickAC,
  lockedCardsAC,
  resetCardsAC,
  setCardsAC,
  winGameAC,
} from "../../redux/level1_reducer";
import Level1 from "./level1";

function mapStateToProps(state) {
  return {
    level1: state.level1Page,
    cards: state.level1Page.cards,
    flippedCards: state.level1Page.flippedCards,
    entryCardId: state.level1Page.entryCardId,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    flipOnClick: (id, name) => dispatch(flipOnClickAC(id, name)),
    resetCasds: () => dispatch(resetCardsAC()),
    setCards: (cards) => dispatch(setCardsAC(cards)),
    lockedCard: (name) => dispatch(lockedCardsAC(name)),
    winGame: () => dispatch(winGameAC()),
  };
}
const Level1Container = connect(mapStateToProps, mapDispatchToProps)(Level1);
export default Level1Container;
