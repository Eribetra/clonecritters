function Artwork(t) {
    this.background, this.foreground, this.character = this.createCharacterSprite(t.character), t.roomPath ? this.roomPath = t.roomPath : this.roomPath = "media/rooms/", this.ring = new createjs.Shape, this.ring.graphics.f().s("#3399FF").ss(2).de(0, 0, 32, 22), this.ring.regX = 16, this.ring.regY = 11, this.shadow = new createjs.Shape, this.shadow.graphics.f("rgba(0,0,0,0.2)").s().de(0, 0, 28, 18), this.shadow.regX = 14, this.shadow.regY = 9, this.crosshair = new createjs.Shape, this.crosshair.graphics.setStrokeStyle(1).beginStroke("black").moveTo(-10, 0).lineTo(10, 0).moveTo(0, -10).lineTo(0, 10)
}

function calculateDistance(t, o, e, r) {
    var a = e - t,
        i = r - o;
    return Math.sqrt(a * a + i * i)
}

function calculateAngle(t, o, e, r) {
    var a = e - t,
        i = o - r,
        n = Math.atan2(a, i),
        s = Math.floor(180 * n / Math.PI);
    return s < 0 ? s + 360 : s
}

function findDirection(t) {
    var o = Math.floor((t + 22.5) / 45);
    return 7 < o ? 0 : o
}

function Critter(t) {
    createjs.MovieClip.call(this), this.scaleX = 1, this.scaleY = 1, this.framerate = 30, this.loop = -1, this.currentDirection, this.directionFrames = [0, 1, 3, 3, 4, 5, 5, 7];
    var e = new createjs.Container,
        o = new createjs.Container;
    this.slot = {
        head: new createjs.Container,
        face: new createjs.Container,
        eyes: new createjs.Container,
        body: new createjs.Container,
        feet: new createjs.Container
    };
    var i = new createjs.SpriteSheet(t),
        r = new createjs.Sprite(i, "body4"),
        a = new createjs.Sprite(i, "face4"),
        s = new createjs.Sprite(i, "feet");
    this.addItem("body", "body", r), this.addItem("face", "face", a), this.addItem("feet", "feet", s), e.addChild(this.slot.body, this.slot.face, this.slot.head), o.addChild(this.slot.feet), this.slot.face.y = -60, this.slot.head.y = -86, this.addChild(o, e), this.timeline.addTween(createjs.Tween.get(e).wait(1).to({
        y: 4
    }).wait(1).to({
        y: -12
    }).wait(1).to({
        y: -16
    }).wait(1).to({
        y: -8
    }).wait(1)), this.timeline.addTween(createjs.Tween.get(o).wait(2).to({
        y: -8
    }).wait(1).to({
        y: -16
    }).wait(1).to({
        y: -6
    }).wait(1)), this.stop()
}

art.crosshair = new createjs.Shape, art.crosshair.graphics.setStrokeStyle(1).beginStroke("black").moveTo(-10, 0).lineTo(10, 0).moveTo(0, -10).lineTo(0, 10), art.shadow = new createjs.Shape, art.shadow.graphics.f("rgba(0,0,0,0.2)").s().de(0, 0, 28, 18), art.shadow.regX = 14, art.shadow.regY = 9, art.ring = new createjs.Shape, art.ring.graphics.f().s("#3399FF").ss(2).de(0, 0, 32, 22), art.ring.regX = 16, art.ring.regY = 11, Critter.prototype = Object.create(createjs.MovieClip.prototype), Critter.prototype.updateDirection = function(t) {
    void 0 === t ? t = this.currentDirection : this.currentDirection = t;
    var e = this.directionFrames[t];
    if (null != e) {
        if (this.slot.body.sprite.gotoAndStop("body" + e), this.slot.head.sprite) {
            var o = this.slot.head.itemId;
            this.slot.head.sprite.gotoAndStop(o + e)
        }
        1 < t && t < 7 ? (this.slot.face.sprite.gotoAndStop("face" + e), this.slot.face.visible = !0) : this.slot.face.visible = !1
    }
}, Critter.prototype.addItem = function(t, e, o) {
    this.slot[t] && (this.removeItem(t), this.slot[t].itemId = e, this.slot[t].sprite = o, this.slot[t].addChild(o), this.updateDirection())
}, Critter.prototype.removeItem = function(t) {
    this.slot[t] && (this.slot[t].removeAllChildren(), delete this.slot[t].itemId, delete this.slot[t].sprite)
}, Critter.prototype.updateState = function(t) {
    "move" == t ? this.gotoAndPlay(0) : this.gotoAndStop(0)
};

var characterData = {
        hamster: {
            name: "hamster",
            images: ["/media/critters/hamster2.png"],
            frames: [
                [1, 1, 62, 96, 0, 31, 96],
                [65, 1, 62, 96, 0, 31, 96],
                [129, 1, 62, 96, 0, 31, 96],
                [1, 99, 62, 96, 0, 31, 96],
                [65, 99, 62, 96, 0, 31, 96],
                [129, 99, 62, 96, 0, 31, 96],
                [1, 197, 60, 23, 0, 30, 14],
                [63, 197, 48, 24, 0, 24, 18],
                [113, 197, 34, 37, 0, 10, 18],
                [149, 197, 34, 37, 0, 24, 18],
                [193, 1, 41, 41, 0, 20, 20]
            ],
            animations: {
                body0: [0],
                body1: [1],
                body3: [2],
                body4: [3],
                body5: [4],
                body7: [5],
                feet: [7],
                face3: [8],
                face4: [10],
                face5: [9],
                shadow: [6]
            }
        },
        snail: {
            images: ["/media/critters/snail.png"],
            framerate: 10,
            frames: [
                [1, 1, 83, 103, 0, 38, 98],
                [86, 1, 83, 103, 0, 44, 98],
                [171, 1, 81, 105, 0, 38, 100],
                [254, 1, 83, 105, 0, 34, 97],
                [339, 1, 83, 105, 0, 46, 97],
                [424, 1, 81, 105, 0, 43, 100],
                [1, 106, 81, 106, 0, 34, 97],
                [84, 106, 81, 106, 0, 48, 97],
                [167, 108, 55, 110, 0, 27, 95],
                [224, 108, 55, 111, 0, 27, 100],
                [281, 108, 59, 111, 0, 29, 100],
                [342, 108, 59, 112, 0, 29, 104],
                [403, 108, 105, 113, 0, 40, 106],
                [1, 214, 105, 113, 0, 63, 106],
                [108, 220, 97, 114, 0, 38, 107],
                [207, 221, 97, 114, 0, 59, 106]
            ],
            animations: {
                body1: {
                    frames: [2, 0]
                },
                body7: {
                    frames: [5, 1]
                },
                body3: {
                    frames: [6, 3]
                },
                body5: {
                    frames: [7, 4]
                },
                body0: {
                    frames: [8, 9]
                },
                body4: {
                    frames: [10, 11]
                },
                body2: {
                    frames: [14, 12]
                },
                body6: {
                    frames: [15, 13]
                }
            }
        }
    },
    itemData = {
        viking: {
            name: "viking",
            images: ["/media/items/items.png"],
            frames: [
                [1, 1, 67, 51, 0, 33, 32],
                [1, 54, 64, 53, 0, 32, 28],
                [70, 1, 63, 54, 0, 31, 29],
                [135, 1, 63, 54, 0, 31, 29],
                [67, 57, 63, 53, 0, 32, 33],
                [132, 57, 63, 53, 0, 30, 33]
            ],
            animations: {
                viking4: [0],
                viking0: [1],
                viking1: [2],
                viking7: [3],
                viking3: [4],
                viking5: [5]
            }
        }
    },
    itemSS = new createjs.SpriteSheet(itemData.viking);


function Events() {}

function Player() {
    this.isMoving = !1, this.hasFrames = !1, this.character, this.nickname, this.balloon, this.direction = 0, this.animation = "none", this.speed = 5, createjs.Container.call(this)
}
Artwork.prototype.createCharacterSprite = function(t) {
    var o = new createjs.SpriteSheet({
            images: t.images,
            frames: t.frames,
            animations: t.animations
        }),
        e = new createjs.Sprite(o, "stand4");
    return e.scaleX = t.scaleX, e.scaleY = t.scaleY, e.regX = t.regX, e.regY = t.regY, e.framerate = t.framerate, e.balloonX = t.balloonX, e.balloonY = t.balloonY, e
}, Player.prototype = Object.create(createjs.Container.prototype), Player.prototype.setCharacter = function(t) {
    "function" == typeof(this.character = t).gotoAndPlay && (this.hasFrames = !0)
}, Player.prototype.updateDirection = function(t) {
    this.direction = t
}, Player.prototype.updateRotation = function(t) {
    this.character.rotation = t
}, Player.prototype.updateAnimation = function(t) {
    void 0 !== t && (this.animation = t), this.hasFrames && (this.isMoving ? this.character.gotoAndPlay("walk" + this.direction) : this.character.gotoAndPlay("stand" + this.direction))
};
var dpr = window.devicePixelRatio;

function Room(t, o, e) {
    if (this.stage = t, this.artwork = o, this.room = new createjs.Container, this.game = new createjs.Container, this.balloons = new createjs.Container, this.nicknames = new createjs.Container, this.game.addEventListener("tick", function(t) {
            t.target.children.sort(sortDepth)
        }), e.artwork && e.artwork.sprites && (console.log(e.artwork.sprites.images[0]), e.artwork.sprites.images[0] = this.artwork.roomPath + e.artwork.sprites.images[0], this.spritesheet = new createjs.SpriteSheet(e.artwork.sprites)), this.playerlist = {}, e.artwork && void 0 !== e.artwork.background) {
        console.log("Add Background:", e.artwork.background);
        var r = new createjs.Bitmap(this.artwork.roomPath + e.artwork.background);
        this.room.addChild(r)
    }
    if (this.room.addChild(this.game), e.artwork && void 0 !== e.artwork.foreground) {
        console.log("Add Foreground:", e.artwork.foreground);
        var a = new createjs.Bitmap(this.artwork.roomPath + e.artwork.foreground);
        this.room.addChild(a)
    }
    if (this.room.addChild(this.nicknames), this.room.addChild(this.balloons), e.artwork && void 0 !== e.artwork.props)
        for (var i = 0; i < e.artwork.props.length; i++) {
            var n = e.artwork.props[i],
                s = new createjs.Sprite(this.spritesheet);
            s.gotoAndStop(n[0]), s.x = n[1], s.y = n[2], this.game.addChild(s)
        }
    if (this.room.addChild(this.edit), this.stage.addChild(this.room), this.stage.update(), null != e.playerlist)
        for (i = 0; i < e.playerlist.length; i++) this.addPlayer(e.playerlist[i], this.useDirection)
}

function sortDepth(t, o) {
    return t.y - o.y
}

function createBalloon(t, o) {
    var e = o + 20,
        r = t + 20,
        a = new createjs.Shape;
    return a.graphics.setStrokeStyle(1).beginStroke("#888888").beginFill("#FFFFFF"), a.graphics.moveTo(5, 0).arcTo(r, 0, r, 5, 5).arcTo(r, e, r - 5, e, 5).lineTo(80, e).lineTo(70, e + 10).lineTo(70, e).arcTo(0, e, 0, e - 5, 5).arcTo(0, 0, 5, 0, 5), a.x = 0 - r / 2, a.y = -10, a
}

function World(r, t, o) {
    var e = this;
    this.socket = r, this.artwork = new Artwork(t), this.room = void 0, this.events = new Events(r, e, void 0), this.stage = new createjs.Stage(o), this.stage.on("stagemousedown", function(t) {
        var o = Math.floor(t.stageX),
            e = Math.floor(t.stageY);
        r.emit("click", {
            x: o,
            y: e
        })
    }), createjs.Ticker.framerate = 60, createjs.Ticker.on("tick", function(t) {
        e.stage.update(t)
    }), void 0 !== r && this.socketHandler(r)
}
Room.prototype.sortDepth = function() {
    this.game.children.sort(sortDepth)
}, Room.prototype.addPlayer = function(t) {
    var o = t.i;
    if (null == this.playerlist[o]) {
        var e = new Player;
        if (e.balloonX = this.artwork.character.balloonX, e.balloonY = this.artwork.character.balloonY, t.c && this.artwork.characters[t.c]) var r = this.artwork.characters[t.c].clone();
        else r = this.artwork.character.clone();
        this.artwork.shadow && e.addChild(this.artwork.shadow.clone()), this.artwork.ring, e.addChild(r), this.artwork.crosshair, void 0 !== t.s && 0 < t.s && (e.speed = t.s), e.x = t.x, e.y = t.y, e.setCharacter(r), this.game.addChild(e);
        var a = new createjs.Container;
        a.x = t.x, a.y = t.y, e.balloon = a, this.balloons.addChild(a);
        var i = new createjs.Container;
        i.x = t.x, i.y = t.y;
        var n = new createjs.Text(t.n, "12px Arial", "#000000");
        n.textAlign = "center", n.lineWidth = 100, n.y = 15, i.addChild(n), e.nickname = i, this.nicknames.addChild(i), this.stage.update(), this.playerlist[o] = e
    }
}, Room.prototype.addBalloon = function(t) {
    var o = this.playerlist[t.i],
        e = new createjs.Container,
        r = new createjs.Text(t.m, "12px Arial", "#000000");
    var log = document.getElementById("chatlogArea").value;
    document.getElementById("chatlogArea").value = (t.n + " says: " + t.m + "\n" + log);
    //e && e.balloon.showMessage(t)
    r.textAlign = "center", r.lineWidth = 100;
    var a = r.getBounds(),
        i = createBalloon(100, a.height);
    e.addChild(i, r), e.y = 0 - a.height - o.balloonY, o.balloon.addChild(e);
    var n = this;
    setTimeout(function() {
        o.balloon.removeChild(e), n.stage.update()
    }, 5e3), this.stage.update()
}, Room.prototype.removePlayer = function(t) {
    console.log("removePlayer", t), console.log(this.playerlist);
    var o = this.playerlist[t.i];
    this.game.removeChild(o), this.balloons.removeChild(o.balloon), this.nicknames.removeChild(o.nickname), delete this.playerlist[t.i], this.stage.update(), console.log(this.playerlist)
}, Room.prototype.movePlayer = function(t) {
    var o = this.playerlist[t.i];
    o.isMoving = !0;
    var e = findDirection(t.r);
    o.updateDirection(e), o.updateAnimation("walk");
    var r = calculateDistance(o.x, o.y, t.x, t.y) * o.speed;
    o.tween = createjs.Tween.get(o, {
        override: !0
    }).to({
        x: t.x,
        y: t.y
    }, r, createjs.Ease.linear).call(function() {
        this.isMoving = !1, o.updateAnimation("stand"), o.nickname.x = o.x, o.nickname.y = o.y, o.balloon.x = o.x, o.balloon.y = o.y
    }).addEventListener("change", function() {
        o.nickname.x = o.x, o.nickname.y = o.y, o.balloon.x = o.x, o.balloon.y = o.y
    }), this.stage.update()
}, World.prototype.setStage = function(t) {
    this.stage = new createjs.Stage(t)
}, World.prototype.socketHandler = function(o) {
    var e = this;
    o.on("connect", function() {}), o.on("disconnect", function() {
        console.log("DISCONNECT")
    }), o.on("login", function(t) {
        console.log("login", t), o.emit("joinRoom", {
            roomId: "tavern"
        })
    }), o.on("joinRoom", function(t) {
        console.log("joinRoom", t), e.createRoom(t, !1)
    }), o.on("A", function(t) {
        console.info("A", t), e.room.addPlayer(t)
    }), o.on("R", function(t) {
        console.info("R", t), e.room.removePlayer(t)
    }), o.on("P", function(t) {
        console.info("P", t), e.room.movePlayer(t)
    }), o.on("M", function(t) {
        console.info("M", t), e.room.addBalloon(t)
    })
}, World.prototype.login = function(t) {
    console.log("login", t), this.socket.open(), this.socket.emit("login", {
		username: t,
        ticket: 'KJ82IqhwIu28'
    })
}, World.prototype.sendMessage = function(t) {
    console.log("sendMessage", t), this.socket.emit("sendMessage", {
        message: t
    })
}, World.prototype.createRoom = function(t) {
    console.log("createRoom", t), this.room = new Room(this.stage, this.artwork, t, !1)
};
