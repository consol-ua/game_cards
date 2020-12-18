import React from "react";
import BackFace from "./back_face/back_face";
import s from "./level1.module.css";

class Level1 extends React.Component {
  _cards = [
    {
      id: 1,
      name: "iconJS",
      faceImg: "https://img.icons8.com/color/452/javascript.png",
      flip: false,
    },
    {
      id: 2,
      name: "React",
      faceImg:
        "https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png",
    },
    {
      id: 3,
      name: "VueJS",
      faceImg:
        "https://img2.freepng.ru/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg",
    },
    {
      id: 4,
      name: "Angular",
      faceImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      flip: false,
    },
    {
      id: 5,
      name: "Ember",
      faceImg:
        "https://c0.klipartz.com/pngpicture/616/203/sticker-png-ember-js-javascript-framework-computer-icons-front-end-mammal-cat-like-mammal-carnivoran-dog-like-mammal-logo.png",
    },
    {
      id: 6,
      name: "Node",
      faceImg:
        "https://img.favpng.com/20/4/0/node-js-javascript-react-mean-angularjs-png-favpng-9jx9sihXGEqtr5xCmpXZtGFjQ.jpg",
    },
    {
      id: 7,
      name: "VSCode",
      faceImg:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw",
    },
    {
      id: 8,
      name: "CSS",
      faceImg:
        "https://wedal.ru/images/stories/ARTICLES/design/joomlal_css_logo/css.png",
    },
    {
      id: 9,
      name: "CSS",
      faceImg:
        "https://wedal.ru/images/stories/ARTICLES/design/joomlal_css_logo/css.png",
    },
  ];

  shuffleCards(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  renderCards() {
    const cards = this.props.cards;
    return cards.map((el) => {
      if (el.flip) {
        return (
          <div
            className={s.memory_card + " " + s.flip}
            key={el.id}
            id={el.id}
            onClick={(e) => this.props.flipOnClick(e.currentTarget.id)}
          >
            <img className={s.front_face} src={el.faceImg} alt={el.name} />
            <BackFace />
          </div>
        );
      }
      return (
        <div
          className={s.memory_card}
          key={el.id}
          id={el.id}
          onClick={(e) => this.props.flipOnClick(e.currentTarget.id)}
        >
          <img className={s.front_face} src={el.faceImg} alt={el.name} />
          <BackFace />
        </div>
      );
    });
  }
  resetBoard() {
    if (this.props.flippedCards === 2) {
      setTimeout(this.props.resetCasds, 300);
    }
  }
  lockCards() {}

  componentDidMount() {
    this.props.setCards(this.shuffleCards(this._cards));
  }

  render() {
    console.log(this.props);
    this.resetBoard();
    return (
      <div className="board">
        <div style={{ width: "100%" }}>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Level 1
          </div>
          <div className={s.game__board}>{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}

export default Level1;
