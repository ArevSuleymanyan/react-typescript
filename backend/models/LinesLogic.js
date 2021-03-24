export default class LinesLogic {
    constructor() {
        this.resetData();
        this.colors = ['red', 'green', 'blue', 'yellow', 'orange'];
        this.points = 0;
    }

    setPoints(n) {
        this.points += 10 * n;
    }

    resetData() {
        this.board = [];
        for (let i = 0; i < 81; i += 1) {
            this.board.push({
                color: '',
                number: 0,
            });
        }
    }

    runGame(board, n = 5) {
        let i = 0;
        while (i < n) {
            let r1 = Math.floor(Math.random() * this.colors.length);
            let r2 = Math.floor(Math.random() * board.length);
            if (!board[r2].color) {
                board[r2].color = this.colors[r1];
                board[r2].number = -1;
                i += 1;
            }
        }
    }

    getRandomColors() {
        let i = 0;
        let randomColors = [];
        while (i < 3) {
            let r1 = Math.floor(Math.random() * this.colors.length);
            randomColors.push(this.colors[r1]);
            i += 1;
        }
        return randomColors;
    }

    updateBoardColor(board) {
        let randomColors = this.getRandomColors();
        for (let i = 0; i < randomColors.length; ) {
            const r = Math.floor(Math.random() * board.length);
            if (!board[r].color) {
                board[r].color = randomColors[i];
                board[r].number = -1;
                i += 1;
            }
        }
    }

    checkColor(board) {
        this.checkColorsHorizontal(board);
        this.checkColorsVertical(board);
        this.checkColorsDiagonal(board);
    }

    checkColorsHorizontal(board, n = 5) {
        for (let i = 0; i < board.length - n; i += 1) {
            if (board[i].color) {
                let count = 0;
                for (let j = 0; j < n; j += 1) {
                    if (
                        board[i].color === board[i + j].color &&
                        parseInt(String(i / 9), 10) === parseInt(String((i + j) / 9), 10)
                    ) {
                        count += 1;
                    }
                }
                if (count === n) {
                    this.setPoints(n)
                    for (let j = 0; j < n; j += 1) {
                        board[i + j].color = '';
                        board[i + j].number = 0;
                    }
                }
            }
        }
    }

    checkColorsVertical(board, n = 5) {
        for (let i = 0; i <= board.length - (n - 1) * 9; i += 1) {
            if (board[i].color) {
                let count = 0;
                for (let j = 0; j < 9 * n; j += 9) {
                    if (board[i].color === board[i + j].color) {
                        count += 1;
                    }
                }
                if (count === n) {
                    this.setPoints(n)
                    for (let j = 0; j < n * 9; j += 9) {
                        board[i + j].color = '';
                        board[i + j].number = 0;
                    }
                }
            }
        }
    }

    checkColorsDiagonal(board, n = 5) {
        for (let i = 0; i < board.length - (n - 1) * 10; i += 1) {
            if (board[i].color && (i + 1) % 9 !== 0 && (i + 2) % 9 !== 0) {
                let count = 0;
                for (let j = 0; j < n * 10; j += 10) {
                    if (board[i].color === board[i + j].color) {
                        count += 1;
                    }
                }
                if (count === n) {
                    this.setPoints(n)
                    for (let j = 0; j < n * 10; j += 10) {
                        board[i + j].color = '';
                        board[i + j].number = 0;
                    }
                }
            }
        }
        for (let i = 0; i < board.length - (n - 1) * 9; i += 1) {
            if (board[i].color && i % 9 !== 0 && (i - 1) % 9 !== 0) {
                let count = 0;
                for (let j = 0; j < n * 8; j += 8) {
                    if (board[i].color === board[i + j].color) {
                        count += 1;
                    }
                }
                if (count === n) {
                    this.setPoints(n);
                    for (let j = 0; j < n * 8; j += 8) {
                        board[i + j].color = '';
                        board[i + j].number = 0;
                    }
                }
            }
        }
    }

    checkEndGame(board) {
        for (let i = 0; i < board.length; i += 1) {
            if (!board[i].color) {
                return false;
            }
        }
        return true;
    }

    showAnimation(color, fastestWay, callback) {
		const cellDuration = 150
		let index = 0

		const intervalId = setInterval(function () {
			const item = document.getElementById(fastestWay[index])
			item.classList.add(color)
			if (index > 0) {
				const elem = document.getElementById(fastestWay[index - 1])
				elem.classList.remove(color)
			}
			index += 1
			if (index === fastestWay.length) {
				clearInterval(intervalId)
				callback()
			}
		}, cellDuration)
	}

    moveTheColor(
		index1,
		index2,
		color,
		board,
		callback
	) {
		this.checkStep(index1, 1, board)
		if (board[index2].number > 0) {
			const way = [index2]
			const fastestWay = this.findFastestRoud(board, index2, board[index2].number, way)
			fastestWay.reverse()

			this.showAnimation(color, fastestWay, () => {
				board[index2].color = board[index1].color
				board[index2].number = -1
				board[index1].color = ''
				board[index1].number = 0
				this.checkColor(board)
				this.updateBoardColor(board)
				this.checkColor(board)
				for (let i = 0; i < board.length; i += 1) {
					const item = document.getElementById(String(i))
					const classNames = item.classList
					if (!board[i].color && classNames.length === 2) {
						item.classList.remove(classNames[1])
					}
					if (board[i].color && classNames.length === 1) {
						item.classList.add(board[i].color)
						board[i].number = -1
					}
				}
				callback()
			})

			for (let i = 0; i < board.length; i += 1) {
				if (!board[i].color) {
					board[i].number = 0
				}
			}
		}
	}

    findFastestRoud(board, index, count, way) {
		if (index + 9 < 81 && count - board[index + 9].number === 1) {
			way.push(index + 9)
			this.findFastestRoud(board, index + 9, count - 1, way)
		} else if (index - 9 >= 0 && count - board[index - 9].number === 1) {
			way.push(index - 9)

			this.findFastestRoud(board, index - 9, count - 1, way)
		} else if (index + 1 < 81 && (index + 1) % 9 !== 0 && count - board[index + 1].number === 1) {
			way.push(index + 1)

			this.findFastestRoud(board, index + 1, count - 1, way)
		} else if (index - 1 >= 0 && index % 9 !== 0 && count - board[index - 1].number === 1) {
			way.push(index - 1)

			this.findFastestRoud(board, index - 1, count - 1, way)
		}
		return way
	}

    checkStep(index, num, board) {
		board[index].number = num
		if (index + 9 < 81 && (!board[index + 9].number || board[index + 9].number > num)) {
			board[index + 9].number = num
			this.checkStep(index + 9, num + 1, board)
		}

		if (index - 9 >= 0 && (!board[index - 9].number || board[index - 9].number > num)) {
			board[index - 9].number = num
			this.checkStep(index - 9, num + 1, board)
		}

		if (index + 1 < 81 && (!board[index + 1].number || board[index + 1].number > num) && (index + 1) % 9 !== 0) {
			board[index + 1].number = num
			this.checkStep(index + 1, num + 1, board)
		}

		if (index - 1 >= 0 && (!board[index - 1].number || board[index - 1].number > num) && index % 9 !== 0) {
			board[index - 1].number = num
			this.checkStep(index - 1, num + 1, board)
		}
	}
}
