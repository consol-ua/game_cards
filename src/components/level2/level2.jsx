import React from "react";
import BackFace from "./back_face/back_face";
import s from "./level2.module.css";

class Level2 extends React.Component {
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
        "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
    },
    {
      id: 3,
      name: "VueJS",
      faceImg:
        "https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg",
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
      faceImg: "https://cdn.worldvectorlogo.com/logos/ember-tomster.svg",
    },
    {
      id: 6,
      name: "iconJS",
      faceImg: "https://img.icons8.com/color/452/javascript.png",
      flip: false,
    },
    {
      id: 7,
      name: "React",
      faceImg:
        "https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg",
    },
    {
      id: 8,
      name: "VueJS",
      faceImg:
        "https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg",
    },
    {
      id: 9,
      name: "Angular",
      faceImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      flip: false,
    },
    {
      id: 10,
      name: "Ember",
      faceImg: "https://cdn.worldvectorlogo.com/logos/ember-tomster.svg",
    },
    {
      id: 11,
      name: "Node",
      faceImg: "https://cdn.worldvectorlogo.com/logos/node-js-logo.svg",
    },
    {
      id: 12,
      name: "Node",
      faceImg: "https://cdn.worldvectorlogo.com/logos/node-js-logo.svg",
    },
    {
      id: 13,
      name: "VSCode",
      faceImg:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw",
    },
    {
      id: 14,
      name: "VSCode",
      faceImg:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/ddjrgww-846ce429-3b0d-4ad8-bf6d-ac52dfe48201.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjE3ZDVlYTAtNjIzZC00MGIxLTliMzEtMDI3YjkwNGE1ZjE1XC9kZGpyZ3d3LTg0NmNlNDI5LTNiMGQtNGFkOC1iZjZkLWFjNTJkZmU0ODIwMS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZkEnCXJtjhT0v0UEQF7_k0VfiSaIoZa-YlerQJG-CXw",
    },
    {
      id: 15,
      name: "Camera",
      faceImg: "https://simpleicon.com/wp-content/uploads/camera.svg",
    },
    {
      id: 16,
      name: "Camera",
      faceImg: "https://simpleicon.com/wp-content/uploads/camera.svg",
    },
    {
      id: 17,
      name: "Tag",
      faceImg:
        "https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",
    },
    {
      id: 18,
      name: "Tag",
      faceImg:
        "https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",
    },
    {
      id: 19,
      name: "Rocket",
      faceImg: "https://simpleicon.com/wp-content/uploads/rocket.svg",
    },
    {
      id: 20,
      name: "Rocket",
      faceImg: "https://simpleicon.com/wp-content/uploads/rocket.svg",
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
    if (this.props.level2.gameWin) {
      return (
        <div className={s.win__game}>
          Победа! Количество ходов: {this.props.level2.stepCount}
        </div>
      );
    }
    return cards.map((el) => {
      if (el.flip) {
        return (
          <div
            className={s.memory_card + " " + s.flip}
            key={el.id}
            id={el.id}
            data-name={el.name}
          >
            <img className={s.front_face} src={el.faceImg} alt={el.name} />
            <BackFace />
          </div>
        );
      } else if (el.lock) {
        return (
          <div
            className={s.memory_card + " " + s.flip}
            key={el.id}
            id={el.id}
            data-name={el.name}
          >
            {/* <img className={s.front_face} src={el.faceImg} alt={el.name} />
            <BackFace /> */}
          </div>
        );
      }
      return (
        <div
          className={s.memory_card}
          key={el.id}
          id={el.id}
          data-name={el.name}
          onClick={(e) =>
            this.props.flipOnClick(
              e.currentTarget.id,
              e.currentTarget.dataset.name
            )
          }
        >
          <img className={s.front_face} src={el.faceImg} alt={el.name} />
          <BackFace />
        </div>
      );
    });
  }
  resetBoard() {
    this.props.resetCasds();
  }
  stepGame() {
    if (this.props.flippedCards === 2) {
      let firsCard = this.props.entryCardId[0];
      let secondCard = this.props.entryCardId[1];
      if (firsCard === secondCard) {
        setTimeout(() => this.props.lockedCard(firsCard), 400);
      }
      setTimeout(this.props.resetCasds, 400);
    }
  }

  winGame() {
    if (!this.props.level2.gameWin) {
      if (this.props.cards.length > 0) {
        let sumCasds = this.props.cards.length;
        let sumLockedCards = 0;
        this.props.cards.forEach((el) => {
          if (el.lock) {
            sumLockedCards += 1;
          }
        });
        if (sumCasds === sumLockedCards) {
          setTimeout(() => this.props.winGame(), 300);
        }
      }
    }
  }

  startGame() {
    this.props.setCards(this.shuffleCards(this._cards));
  }
  refreshGame() {
    this.props.resetGame();
    setTimeout(this.startGame.bind(this), 300);
  }
  componentDidMount() {
    this.startGame();
  }
  componentDidUpdate() {
    this.winGame();
    this.stepGame();
  }

  render() {
    console.log(this.props);
    return (
      <div className="board">
        <div style={{ width: "100%" }}>
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Level 1
          </div>
          <div className={s.game__board}>{this.renderCards()}</div>
          <div style={{ fontWeight: "bold", margin: "10px" }}>
            <button onClick={() => this.refreshGame()}>Начать заново</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Level2;
