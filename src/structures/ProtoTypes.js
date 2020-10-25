
const emotes = require("./emotes")
const { CanvasRenderingContext2D, createCanvas } = require("canvas")
module.exports = class ProtoTypes {
	static start() {


			emoji = emotes[emoji]
			return this.channel.send(`${emoji ? emoji : "🐛"} **|** ${this.author}, ${message}`, ...args)
		}

			if (typeof stroke === "undefined") {
				stroke = true
			}
			if (typeof radius === "undefined") {
				radius = 5
			}
			if (typeof radius === "number") {
				radius = { tl: radius, tr: radius, br: radius, bl: radius }
			} else {
				var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 }
				for (var side in defaultRadius) {
					radius[side] = radius[side] || defaultRadius[side]
				}
			}
			this.beginPath()
			this.moveTo(x + radius.tl, y)
			this.lineTo(x + width - radius.tr, y)
			this.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
			this.lineTo(x + width, y + height - radius.br)
			this.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
			this.lineTo(x + radius.bl, y + height)
			this.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
			this.lineTo(x, y + radius.tl)
			this.quadraticCurveTo(x, y, x + radius.tl, y)
			this.closePath()
			if (fill) {
				this.fill()
			}
			if (stroke) {
				this.stroke()
			}

		}

		CanvasRenderingContext2D.prototype.roundImageCanvas = function roundImageCanvas(img, w = img.width, h = img.height, r = w * 0.5) {
			const canvas = createCanvas(w, h)
			const ctx = canvas.getContext('2d')

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			ctx.globalCompositeOperation = 'source-over'
			ctx.drawImage(img, 0, 0, w, h)

			ctx.fillStyle = '#fff'
			ctx.globalCompositeOperation = 'destination-in'
			ctx.beginPath()
			ctx.arc(w * 0.5, h * 0.5, r, 0, Math.PI * 2, true)
			ctx.closePath()
			ctx.fill()

			return canvas
		}
		CanvasRenderingContext2D.prototype.getLines = function getLines(text, maxWidth) {
			var words = text.split(" ");
			var lines = [];
			var currentLine = words[0];

			for (var i = 1; i < words.length; i++) {
				var word = words[i];
				var width = this.measureText(currentLine + " " + word).width;
				if (width < maxWidth) {
					currentLine += " " + word;
				} else {
					lines.push(currentLine);
					currentLine = word;
				}
			}
			lines.push(currentLine);
			return lines;
		}
	}
}
