import { connect } from "react-redux";
import {
  flipOnClickAC,
  resetCardsAC,
  setCardsAC,
} from "../../redux/level1_reducer";
import Level1 from "./level1";

function mapStateToProps(state) {
  return {
    level1: state.level1Page,
    cards: state.level1Page.cards,
    flippedCards: state.level1Page.flippedCards,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    flipOnClick: (id) => dispatch(flipOnClickAC(id)),
    resetCasds: () => dispatch(resetCardsAC()),
    setCards: (cards) => dispatch(setCardsAC(cards)),
  };
}
const Level1Container = connect(mapStateToProps, mapDispatchToProps)(Level1);
export default Level1Container;
