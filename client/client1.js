function Artwork(t) {
    this.background, this.foreground, this.character = new createjs.SpriteSheet(t.character), t.roomPath ? this.roomPath = t.roomPath : this.roomPath = "media/rooms/", this.ring = new createjs.Shape, this.ring.graphics.f().s("#3399FF").ss(2).de(0, 0, 32, 22), this.ring.regX = 16, this.ring.regY = 11, this.shadow = new createjs.Shape, this.shadow.graphics.f("rgba(0,0,0,0.2)").s().de(0, 0, 28, 18), this.shadow.regX = 14, this.shadow.regY = 9, this.crosshair = new createjs.Shape, this.crosshair.graphics.setStrokeStyle(1).beginStroke("black").moveTo(-10, 0).lineTo(10, 0).moveTo(0, -10).lineTo(0, 10)
}
var art = {};

function calculateDistance(t, e, o, i) {
    var r = o - t,
        a = i - e;
    return Math.sqrt(r * r + a * a)
}

function calculateAngle(t, e, o, i) {
    var r = o - t,
        a = e - i,
        s = Math.atan2(r, a),
        n = Math.floor(180 * s / Math.PI);
    return n < 0 ? n + 360 : n
}

function findDirection(t) {
    var e = Math.floor((t + 22.5) / 45);
    return 7 < e ? 0 : e
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
            images: ["./media/critters/hamster2.png"],
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
            images: ["./media/critters/snail.png"],
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
            images: ["./media/items/items.png"],
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

function Feed() {
    this.M = !0, this.P = !1, this.A = !0, this.R = !0
}

function hacks(t) {}

function Mascot(t) {
    createjs.MovieClip.call(this), this.scaleX = 1, this.scaleY = 1, this.framerate = 30, this.loop = -1, this.currentDirection, this.directionFrames = [0, 1, 3, 3, 4, 5, 5, 7];
    var e = new createjs.SpriteSheet(t);
    this.sprite = new createjs.Sprite(e, "body4"), this.addChild(this.sprite), this.stop()
}

function Player(t) {
    createjs.Container.call(this), this.isMoving = !1, this.nickname, this.balloon, this.direction = 0, this.animation = "none", this.speed = 5, "RocketSnail" == t.n ? this.critter = new Mascot(characterData.snail) : this.critter = new Critter(characterData[t.c]), this.critter.scaleX = .5, this.critter.scaleY = .5, this.addChild(art.shadow.clone()), this.addChild(this.critter)
}

function Room(t) {
    if (createjs.Container.call(this), this.game = new createjs.Container, this.balloons = new createjs.Container, this.nicknames = new createjs.Container, this.game.addEventListener("tick", function(t) {
            t.target.children.sort(sortDepth)
        }), t.artwork && t.artwork.sprites && (t.artwork.sprites.images[0] = world.settings.room_path + t.artwork.sprites.images[0], this.spritesheet = new createjs.SpriteSheet(t.artwork.sprites)), this.playerlist = {}, t.artwork && void 0 !== t.artwork.background) {
        console.log("Add Background:", t.artwork.background);
        var e = new createjs.Bitmap(world.settings.room_path + t.artwork.background);
        this.addChild(e)
    }
    if (this.addChild(this.game), t.artwork && void 0 !== t.artwork.foreground) {
        console.log("Add Foreground:", t.artwork.foreground);
        var o = new createjs.Bitmap(world.settings.room_path + t.artwork.foreground);
        this.addChild(o)
    }
    if (this.addChild(this.nicknames), this.addChild(this.balloons), t.artwork && void 0 !== t.artwork.props)
        for (var i = 0; i < t.artwork.props.length; i++) {
            var r = t.artwork.props[i],
                a = new createjs.Sprite(this.spritesheet);
            a.gotoAndStop(r[0]), a.x = r[1], a.y = r[2], this.game.addChild(a)
        }
    if (null != t.playerlist)
        for (i = 0; i < t.playerlist.length; i++) this.addPlayer(t.playerlist[i], this.useDirection)
}

function sortDepth(t, e) {
    return t.y - e.y
}

function createBalloon(t, e) {
    var o = e + 20,
        i = t + 20,
        r = new createjs.Shape;
    return r.graphics.setStrokeStyle(1).beginStroke("#888888").beginFill("#FFFFFF"), r.graphics.moveTo(5, 0).arcTo(i, 0, i, 5, 5).arcTo(i, o, i - 5, o, 5).lineTo(80, o).lineTo(70, o + 10).lineTo(70, o).arcTo(0, o, 0, o - 5, 5).arcTo(0, 0, 5, 0, 5), r.x = 0 - i / 2, r.y = -10, r
}

function World(t) {
    console.log("Creating a new World!"), t && (this.socket = t, this.socketHandler(t)), this.settings = {
        room_path: "/media/rooms/"
    }, this.artwork, this.stage, this.player, this.room
}
Feed.prototype.toggle = function(t) {
    void 0 !== this[t] && (this[t] = !this[t])
}, Feed.prototype.log = function(t, e) {
    this[t] && console.log(t, e)
}, Mascot.prototype = Object.create(createjs.MovieClip.prototype), Mascot.prototype.updateDirection = function(t) {
    void 0 === t ? t = this.currentDirection : this.currentDirection = t;
    var e = this.directionFrames[t];
    null != e && this.sprite.gotoAndStop("body" + e)
}, Mascot.prototype.addItem = function() {}, Mascot.prototype.removeItem = function() {}, Mascot.prototype.updateState = function(t) {
    "move" == t ? this.sprite.gotoAndPlay("body" + this.currentDirection) : this.updateDirection()
}, Player.prototype = Object.create(createjs.Container.prototype), Player.prototype.updateDirection = function(t) {
    this.direction = t, this.critter.updateDirection(t)
}, Player.prototype.updateRotation = function(t) {
    this.character.rotation = t
}, Player.prototype.updateState = function(t) {
    this.critter.updateState(t)
}, Player.prototype.addItem = function(t, e, o) {
    this.critter.addItem(t, e, o)
}, Room.prototype = Object.create(createjs.Container.prototype), Room.prototype.sortDepth = function() {
    this.game.children.sort(sortDepth)
}, Room.prototype.addPlayer = function(t) {
    console.log("Add Player:", t);
    var e = t.i;
    if (null == this.playerlist[e]) {
        var o = new Player(t);
        o.x = t.x, o.y = t.y, "RocketSnail" == t.n && o.addItem("head", "viking", new createjs.Sprite(itemSS, "viking4"));
        var i = findDirection(t.r);
        o.updateDirection(i), o.updateState("stand"), this.game.addChild(o), this.playerlist[e] = o;
        var r = new createjs.Container;
        r.x = t.x, r.y = t.y, o.balloon = r, this.balloons.addChild(r);
        var a = new createjs.Container;
        a.x = t.x, a.y = t.y;
        var s = new createjs.Text(t.n, "12px Arial", "#000000");
        s.textAlign = "center", s.lineWidth = 100, s.y = 15, a.addChild(s), o.nickname = a, this.nicknames.addChild(a)
    }
}, Room.prototype.addBalloon = function(t) {
    var e = this.playerlist[t.i],
        o = new createjs.Container,
        i = new createjs.Text(t.m, "12px Arial", "#000000");
    i.textAlign = "center", i.lineWidth = 100;
    var r = i.getBounds(),
        a = createBalloon(100, r.height);
    o.addChild(a, i), o.y = 0 - r.height - 80, e.balloon.addChild(o);
    setTimeout(function() {
        e.balloon.removeChild(o)
    }, 5e3)
}, Room.prototype.removePlayer = function(t) {
    var e = this.playerlist[t.i];
    this.game.removeChild(e), this.balloons.removeChild(e.balloon), this.nicknames.removeChild(e.nickname), delete this.playerlist[t.i]
}, Room.prototype.movePlayer = function(t) {
    var e = this.playerlist[t.i];
    e.isMoving = !0;
    var o = findDirection(t.r);
    e.updateDirection(o), e.updateState("move");
    var i = calculateDistance(e.x, e.y, t.x, t.y) * e.speed;
    e.tween = createjs.Tween.get(e, {
        override: !0
    }).to({
        x: t.x,
        y: t.y
    }, i, createjs.Ease.linear).call(function() {
        this.isMoving = !1, e.updateState("stand"), e.nickname.x = e.x, e.nickname.y = e.y, e.balloon.x = e.x, e.balloon.y = e.y
    }).addEventListener("change", function() {
        e.nickname.x = e.x, e.nickname.y = e.y, e.balloon.x = e.x, e.balloon.y = e.y
    })
}, World.prototype.setStage = function(t) {
    var e = this,
        i = this.socket;
    this.stage = new createjs.Stage(t), createjs.Ticker.framerate = 60, createjs.Ticker.on("tick", function(t) {
        e.stage.update(t)
    }), this.stage.on("stagemousedown", function(t) {
        var e = Math.floor(t.stageX),
            o = Math.floor(t.stageY);
        i.emit("click", {
            x: e,
            y: o
        })
    })
}, World.prototype.socketHandler = function(e) {
    var o = this;
    e.on("connect", function() {}), e.on("disconnect", function() {
        console.log("DISCONNECT")
    }), e.on("login", function(t) {
        console.log("login", t), o.player = t, e.emit("joinRoom", {
            roomId: "tavern"
        })
    }), e.on("joinRoom", function(t) {
        console.log("joinRoom", t), o.createRoom(t)
    }), e.on("A", function(t) {
        console.info("A", t), o.room.addPlayer(t)
    }), e.on("R", function(t) {
        console.info("R", t), o.room.removePlayer(t)
    }), e.on("P", function(t) {
        o.room.movePlayer(t)
    }), e.on("X", function(t) {
        o.room.movePlayer(t)
    }), e.on("M", function(t) {
        console.info("M", t), o.room.addBalloon(t)
    })
}, World.prototype.login = function(t) {
    console.log("login", t), this.socket.open(), this.socket.emit("login", {
        ticket: t
    })
}, World.prototype.logout = function() {
    console.log("logout"), sessionStorage.clear(), this.socket.disconnect(), cheerioPath && (document.location.href = cheerioPath)
}, World.prototype.sendMessage = function(t) {
    if (console.log("sendMessage", t), "/" == (t = t.trim()).substr(0, 1)) {
        if ("/nicknames" == t.split(" ")[0]) {
            var e = this.room.nicknames;
            e.visible ? e.visible = !1 : e.visible = !0
        }
    } else {
        this.socket.emit("sendMessage", {
            message: t
        });
        var o = {
            i: this.player.playerId,
            m: t
        };
        console.info("M", o), this.room.addBalloon(o)
    }
}, World.prototype.createRoom = function(t) {
    console.log("Create a Room:", t), this.room = new Room(t), this.stage.addChild(this.room)
};
/*
     FILE ARCHIVED ON 01:00:25 Mar 24, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:22:33 Oct 27, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 223.503 (3)
  esindex: 0.015
  captures_list: 259.928
  exclusion.robots.policy: 0.161
  load_resource: 345.206
  PetaboxLoader3.datanode: 185.957 (5)
  RedisCDXSource: 5.468
  exclusion.robots: 0.173
  PetaboxLoader3.resolve: 369.122 (4)
  CDXLines.iter: 27.014 (3)
*/
